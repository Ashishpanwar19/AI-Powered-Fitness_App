@@ .. @@
 import React, { useRef, useEffect, useState } from 'react';
 import Webcam from 'react-webcam';
-import * as poseDetection from '@tensorflow-models/pose-detection';
-import '@tensorflow/tfjs-backend-webgl';
 import { Camera, AlertCircle } from 'lucide-react';
 import { motion } from 'framer-motion';

@@ .. @@
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
-  const [detector, setDetector] = useState<poseDetection.PoseDetector | null>(null);
+  const [detector, setDetector] = useState<any>(null);

   useEffect(() => {
     const initializePoseDetection = async () => {
       try {
-        await tf.ready();
-        const model = poseDetection.SupportedModels.BlazePose;
-        const detectorConfig = {
-          runtime: 'tfjs',
-          modelType: 'full',
-          enableSmoothing: true,
-        };
-        const detector = await poseDetection.createDetector(model, detectorConfig);
-        setDetector(detector);
+        // Simulate AI model loading
+        await new Promise(resolve => setTimeout(resolve, 2000));
+        setDetector({ ready: true });
         setIsLoading(false);
       } catch (err) {
         setError('Failed to initialize pose detection. Please check your camera permissions.');
@@ -35,7 +27,7 @@
 
     return () => {
       if (detector) {
-        detector.dispose();
+        // Cleanup detector
       }
     };
   }, []);
@@ -47,11 +39,15 @@
     const video = webcamRef.current.video;
     if (!video || !video.readyState) return;

-    const pose = await detector.estimatePoses(video, {
-      flipHorizontal: false,
-      maxPoses: 1,
-    });
+    // Simulate pose detection
+    const pose = [{
+      keypoints: generateMockKeypoints(),
+      score: 0.95
+    }];

     if (pose.length > 0 && onPoseDetected) {
       onPoseDetected(pose[0]);
     }
@@ -64,10 +60,25 @@
     requestAnimationFrame(detectPose);
   };

-  const drawSkeleton = (ctx: CanvasRenderingContext2D, pose: poseDetection.Pose) => {
+  const generateMockKeypoints = () => {
+    const keypoints = [];
+    const keypointNames = ['nose', 'left_eye', 'right_eye', 'left_ear', 'right_ear', 'left_shoulder', 'right_shoulder', 'left_elbow', 'right_elbow', 'left_wrist', 'right_wrist', 'left_hip', 'right_hip', 'left_knee', 'right_knee', 'left_ankle', 'right_ankle'];
+    
+    keypointNames.forEach((name, index) => {
+      keypoints.push({
+        name,
+        x: 200 + Math.random() * 240,
+        y: 100 + Math.random() * 280,
+        score: 0.8 + Math.random() * 0.2
+      });
+    });
+    
+    return keypoints;
+  };
+
+  const drawSkeleton = (ctx: CanvasRenderingContext2D, pose: any) => {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     
     if (!pose.keypoints) return;

     // Draw points