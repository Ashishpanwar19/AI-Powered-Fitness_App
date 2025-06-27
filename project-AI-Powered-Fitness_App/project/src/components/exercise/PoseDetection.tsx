import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';
import { Camera, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface PoseDetectionProps {
  onPoseDetected?: (pose: poseDetection.Pose) => void;
  exerciseType?: string;
}

const PoseDetection: React.FC<PoseDetectionProps> = ({ onPoseDetected, exerciseType }) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [detector, setDetector] = useState<poseDetection.PoseDetector | null>(null);

  useEffect(() => {
    const initializePoseDetection = async () => {
      try {
        await tf.ready();
        const model = poseDetection.SupportedModels.BlazePose;
        const detectorConfig = {
          runtime: 'tfjs',
          modelType: 'full',
          enableSmoothing: true,
        };
        const detector = await poseDetection.createDetector(model, detectorConfig);
        setDetector(detector);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize pose detection. Please check your camera permissions.');
        setIsLoading(false);
      }
    };

    initializePoseDetection();

    return () => {
      if (detector) {
        detector.dispose();
      }
    };
  }, []);

  const detectPose = async () => {
    if (!detector || !webcamRef.current || !canvasRef.current) return;

    const video = webcamRef.current.video;
    if (!video || !video.readyState) return;

    const pose = await detector.estimatePoses(video, {
      flipHorizontal: false,
      maxPoses: 1,
    });

    if (pose.length > 0 && onPoseDetected) {
      onPoseDetected(pose[0]);
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Draw skeleton
    drawSkeleton(ctx, pose[0]);

    requestAnimationFrame(detectPose);
  };

  const drawSkeleton = (ctx: CanvasRenderingContext2D, pose: poseDetection.Pose) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    if (!pose.keypoints) return;

    // Draw points
    pose.keypoints.forEach(keypoint => {
      if (keypoint.score && keypoint.score > 0.3) {
        ctx.beginPath();
        ctx.arc(keypoint.x, keypoint.y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = '#00d7cc';
        ctx.fill();
      }
    });

    // Draw lines between connected keypoints
    const connections = [
      ['left_shoulder', 'right_shoulder'],
      ['left_shoulder', 'left_elbow'],
      ['right_shoulder', 'right_elbow'],
      ['left_elbow', 'left_wrist'],
      ['right_elbow', 'right_wrist'],
      ['left_shoulder', 'left_hip'],
      ['right_shoulder', 'right_hip'],
      ['left_hip', 'right_hip'],
      ['left_hip', 'left_knee'],
      ['right_hip', 'right_knee'],
      ['left_knee', 'left_ankle'],
      ['right_knee', 'right_ankle'],
    ];

    connections.forEach(([start, end]) => {
      const startPoint = pose.keypoints.find(kp => kp.name === start);
      const endPoint = pose.keypoints.find(kp => kp.name === end);

      if (startPoint && endPoint && startPoint.score && endPoint.score &&
          startPoint.score > 0.3 && endPoint.score > 0.3) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.strokeStyle = '#00d7cc';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  };

  useEffect(() => {
    if (!isLoading && !error && detector) {
      detectPose();
    }
  }, [detector, isLoading, error]);

  return (
    <div className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="absolute mt-20 text-white">Initializing AI Model...</p>
        </div>
      ) : error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <AlertCircle size={48} className="text-error-500 mb-4" />
          <p className="text-center px-4">{error}</p>
        </div>
      ) : (
        <>
          <Webcam
            ref={webcamRef}
            className="absolute inset-0 w-full h-full object-cover"
            mirrored
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            width={640}
            height={480}
          />
          {exerciseType && (
            <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">{exerciseType}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PoseDetection;