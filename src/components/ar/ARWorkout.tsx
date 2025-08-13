import React, { useState, useRef, useEffect } from 'react';
import { Camera, Zap, Target, MapPin, Play, Pause, RotateCcw } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

interface ARWorkoutProps {
  workoutType: 'indoor' | 'outdoor';
}

const ARWorkout: React.FC<ARWorkoutProps> = ({ workoutType }) => {
  const [isARActive, setIsARActive] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const exercises = [
    {
      name: 'AR Squats',
      description: 'Follow the virtual trainer for perfect form',
      duration: 60,
      targetReps: 15
    },
    {
      name: 'AR Push-ups',
      description: 'Virtual form guide overlay',
      duration: 45,
      targetReps: 10
    },
    {
      name: 'AR Lunges',
      description: 'Step into the AR markers',
      duration: 90,
      targetReps: 20
    }
  ];

  const outdoorCheckpoints = [
    { name: 'Start Point', distance: 0, reward: 'Speed Boost' },
    { name: 'Virtual Gate 1', distance: 0.5, reward: 'Coin Collect' },
    { name: 'Power-up Station', distance: 1.2, reward: 'Double Points' },
    { name: 'Final Challenge', distance: 2.0, reward: 'Achievement Badge' }
  ];

  useEffect(() => {
    if (isARActive && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => console.error('Camera access denied:', err));
    }
  }, [isARActive]);

  const startARSession = () => {
    setIsARActive(true);
    setIsPlaying(true);
  };

  const stopARSession = () => {
    setIsARActive(false);
    setIsPlaying(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const nextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setScore(prev => prev + 100);
    }
  };

  return (
    <div className="space-y-6">
      {/* AR Controls */}
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Zap size={24} className="mr-2 text-primary-400" />
            {workoutType === 'indoor' ? 'AR Indoor Workout' : 'AR Outdoor Adventure'}
          </h3>
          <div className="flex items-center text-warning-400">
            <Target size={20} className="mr-1" />
            <span className="font-bold">{score} pts</span>
          </div>
        </div>

        {!isARActive ? (
          <div className="text-center py-8">
            <div className="w-24 h-24 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera size={32} className="text-primary-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {workoutType === 'indoor' ? 'Start AR Workout' : 'Begin AR Adventure'}
            </h4>
            <p className="text-neutral-300 mb-6">
              {workoutType === 'indoor' 
                ? 'Use your camera to get real-time form correction with virtual trainer overlay'
                : 'Explore your neighborhood with gamified checkpoints and virtual challenges'
              }
            </p>
            <Button variant="primary" onClick={startARSession}>
              <Play size={18} className="mr-2" />
              Start AR Session
            </Button>
          </div>
        ) : (
          <div>
            {/* AR Camera View */}
            <div className="relative bg-black rounded-lg overflow-hidden mb-4">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-64 object-cover"
              />
              
              {/* AR Overlays */}
              <div className="absolute inset-0">
                {/* Virtual Trainer Avatar */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-primary-600/80 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">AI Coach</span>
                </div>

                {/* Exercise Instructions */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h5 className="font-semibold">
                        {workoutType === 'indoor' 
                          ? exercises[currentExercise].name
                          : 'Next Checkpoint: Virtual Gate 1'
                        }
                      </h5>
                      <p className="text-sm text-neutral-300">
                        {workoutType === 'indoor'
                          ? exercises[currentExercise].description
                          : '0.3km ahead - Collect power-up coins!'
                        }
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary-400">
                        {workoutType === 'indoor' ? '12/15' : '0.2km'}
                      </p>
                      <p className="text-xs text-neutral-400">
                        {workoutType === 'indoor' ? 'Reps' : 'Distance'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form Correction Indicators */}
                {workoutType === 'indoor' && (
                  <>
                    <div className="absolute top-1/2 left-8 w-4 h-4 bg-success-500 rounded-full animate-pulse" />
                    <div className="absolute top-1/2 right-8 w-4 h-4 bg-success-500 rounded-full animate-pulse" />
                    <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-success-400 text-sm font-semibold">
                      Perfect Form! ✓
                    </div>
                  </>
                )}

                {/* Outdoor AR Elements */}
                {workoutType === 'outdoor' && (
                  <>
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 bg-warning-500 rounded-full animate-bounce flex items-center justify-center">
                        <span className="text-white text-xs">🪙</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black/70 rounded-lg p-2">
                      <div className="flex items-center text-white text-sm">
                        <MapPin size={16} className="mr-1 text-primary-400" />
                        <span>Checkpoint 1 ahead</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* AR Session Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="border-neutral-600 text-neutral-300"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                
                {workoutType === 'indoor' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextExercise}
                    className="border-neutral-600 text-neutral-300"
                  >
                    Next Exercise
                  </Button>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={stopARSession}
                className="border-error-600 text-error-400"
              >
                <RotateCcw size={16} className="mr-2" />
                Stop AR
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Workout Progress */}
      {workoutType === 'indoor' ? (
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-4">Exercise Progress</h4>
          <div className="space-y-3">
            {exercises.map((exercise, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  index === currentExercise 
                    ? 'bg-primary-600/20 border border-primary-600/30' 
                    : index < currentExercise
                    ? 'bg-success-600/20 border border-success-600/30'
                    : 'bg-neutral-700/50'
                }`}
              >
                <div>
                  <h5 className="font-medium text-white">{exercise.name}</h5>
                  <p className="text-sm text-neutral-400">{exercise.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-300">{exercise.targetReps} reps</p>
                  <p className="text-xs text-neutral-500">{exercise.duration}s</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
          <h4 className="font-semibold text-white mb-4">Adventure Checkpoints</h4>
          <div className="space-y-3">
            {outdoorCheckpoints.map((checkpoint, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  index === 0 
                    ? 'bg-primary-600/20 border border-primary-600/30' 
                    : 'bg-neutral-700/50'
                }`}
              >
                <div className="flex items-center">
                  <MapPin size={20} className="text-primary-400 mr-3" />
                  <div>
                    <h5 className="font-medium text-white">{checkpoint.name}</h5>
                    <p className="text-sm text-neutral-400">{checkpoint.distance}km</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-warning-400">{checkpoint.reward}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ARWorkout;