import React, { useState, useCallback } from 'react';
import { Camera, Check, AlertTriangle, X, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';
import PoseDetection from '../components/exercise/PoseDetection';
import type { Pose } from '@tensorflow-models/pose-detection';

type FeedbackType = 'good' | 'warning' | 'error' | null;

interface ExerciseMetrics {
  accuracy: number;
  repetitions: number;
  feedback: string[];
}

const ExercisePage: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState('squat');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [metrics, setMetrics] = useState<ExerciseMetrics>({
    accuracy: 0,
    repetitions: 0,
    feedback: []
  });

  const exercises = [
    { id: 'squat', name: 'Squat' },
    { id: 'deadlift', name: 'Deadlift' },
    { id: 'pushup', name: 'Push-up' },
    { id: 'lunge', name: 'Lunge' },
    { id: 'plank', name: 'Plank' },
  ];

  const handlePoseDetected = useCallback((pose: Pose) => {
    // Implement exercise-specific pose analysis
    if (!isAnalyzing) return;

    const analyzePose = () => {
      switch (selectedExercise) {
        case 'squat':
          return analyzeSquat(pose);
        case 'pushup':
          return analyzePushup(pose);
        // Add more exercise analyses
        default:
          return null;
      }
    };

    const analysis = analyzePose();
    if (analysis) {
      setFeedbackType(analysis.type);
      setFeedbackMessage(analysis.message);
      setMetrics(prev => ({
        ...prev,
        accuracy: analysis.accuracy,
        feedback: [...prev.feedback, analysis.message].slice(-3)
      }));
    }
  }, [isAnalyzing, selectedExercise]);

  const analyzeSquat = (pose: Pose) => {
    if (!pose.keypoints) return null;

    // Example squat analysis logic
    const hipKeypoint = pose.keypoints.find(kp => kp.name === 'left_hip');
    const kneeKeypoint = pose.keypoints.find(kp => kp.name === 'left_knee');
    const ankleKeypoint = pose.keypoints.find(kp => kp.name === 'left_ankle');

    if (!hipKeypoint?.y || !kneeKeypoint?.y || !ankleKeypoint?.y) return null;

    const kneeAngle = calculateAngle(hipKeypoint, kneeKeypoint, ankleKeypoint);
    
    if (kneeAngle < 90) {
      return {
        type: 'error',
        message: 'Squat too deep. Keep knees at 90 degrees.',
        accuracy: 70
      };
    } else if (kneeAngle > 100) {
      return {
        type: 'warning',
        message: 'Not squatting deep enough. Lower your hips more.',
        accuracy: 85
      };
    }

    return {
      type: 'good',
      message: 'Perfect squat form!',
      accuracy: 95
    };
  };

  const analyzePushup = (pose: Pose) => {
    // Implement push-up analysis logic
    return null;
  };

  const calculateAngle = (p1: any, p2: any, p3: any) => {
    const radians = Math.atan2(p3.y - p2.y, p3.x - p2.x) -
                   Math.atan2(p1.y - p2.y, p1.x - p2.x);
    let angle = Math.abs(radians * 180.0 / Math.PI);
    
    if (angle > 180.0) {
      angle = 360 - angle;
    }
    
    return angle;
  };

  const getFeedbackIcon = () => {
    switch (feedbackType) {
      case 'good':
        return <Check size={24} className="text-success-500" />;
      case 'warning':
        return <AlertTriangle size={24} className="text-warning-500" />;
      case 'error':
        return <X size={24} className="text-error-500" />;
      default:
        return null;
    }
  };

  const getFeedbackColor = () => {
    switch (feedbackType) {
      case 'good':
        return 'bg-success-50 border-success-200 text-success-800';
      case 'warning':
        return 'bg-warning-50 border-warning-200 text-warning-800';
      case 'error':
        return 'bg-error-50 border-error-200 text-error-800';
      default:
        return '';
    }
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800">
            AI Exercise Form Analysis
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Get real-time feedback on your exercise form using our advanced AI analysis.
          </p>

          {/* Exercise Selection */}
          <div className="mb-8 relative">
            <label className="block text-neutral-700 font-medium mb-2">
              Select Exercise
            </label>
            <div className="relative">
              <button
                className="w-full bg-white border border-neutral-300 rounded-lg py-3 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>{exercises.find(ex => ex.id === selectedExercise)?.name || 'Select Exercise'}</span>
                <ChevronDown size={20} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg">
                  {exercises.map(exercise => (
                    <button
                      key={exercise.id}
                      className="w-full text-left px-4 py-2 hover:bg-neutral-50 transition-colors"
                      onClick={() => {
                        setSelectedExercise(exercise.id);
                        setShowDropdown(false);
                      }}
                    >
                      {exercise.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Camera View with AI Analysis */}
          <div className="bg-neutral-100 rounded-xl overflow-hidden mb-6 relative">
            {isAnalyzing ? (
              <PoseDetection
                exerciseType={exercises.find(ex => ex.id === selectedExercise)?.name}
                onPoseDetected={handlePoseDetected}
              />
            ) : (
              <div className="aspect-w-16 aspect-h-9 bg-neutral-200">
                <div className="flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera size={64} className="mx-auto text-neutral-400 mb-4" />
                    <p className="text-neutral-600 mb-4">
                      Turn on your camera to analyze your {selectedExercise} form
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => setIsAnalyzing(true)}
                    >
                      <Camera size={18} className="mr-2" />
                      Start Analysis
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Real-time Metrics Overlay */}
            {isAnalyzing && (
              <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-sm opacity-75">Accuracy</p>
                    <p className="text-lg font-semibold">{metrics.accuracy}%</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75">Reps</p>
                    <p className="text-lg font-semibold">{metrics.repetitions}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Feedback Area */}
          {feedbackType && (
            <motion.div 
              className={`p-4 rounded-lg border mb-6 flex items-start gap-3 ${getFeedbackColor()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-0.5">{getFeedbackIcon()}</div>
              <div>
                <h3 className="font-semibold mb-1">
                  {feedbackType === 'good' ? 'Good Form!' : 
                   feedbackType === 'warning' ? 'Form Needs Attention' : 
                   'Form Correction Needed'}
                </h3>
                <p>{feedbackMessage}</p>
              </div>
            </motion.div>
          )}

          {/* Recent Feedback History */}
          {metrics.feedback.length > 0 && (
            <div className="bg-white border border-neutral-200 rounded-xl p-4 mb-6">
              <h3 className="font-semibold mb-2">Recent Feedback</h3>
              <div className="space-y-2">
                {metrics.feedback.map((feedback, index) => (
                  <p key={index} className="text-sm text-neutral-600">{feedback}</p>
                ))}
              </div>
            </div>
          )}

          {/* Exercise Tips */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              {exercises.find(ex => ex.id === selectedExercise)?.name} Form Tips
            </h2>
            
            <ul className="space-y-3">
              {selectedExercise === 'squat' && [
                "Keep your chest up and back straight",
                "Push your knees outward in line with your toes",
                "Lower until your thighs are parallel to the ground",
                "Keep your weight in your heels",
                "Maintain a neutral spine position throughout"
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
              
              {/* Add tips for other exercises */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;