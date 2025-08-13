import React, { useState } from 'react';
import { Zap, MapPin, Home, Camera } from 'lucide-react';
import ARWorkout from '../components/ar/ARWorkout';
import Button from '../components/ui/Button';

const ARWorkoutPage: React.FC = () => {
  const [workoutType, setWorkoutType] = useState<'indoor' | 'outdoor'>('indoor');

  return (
    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            AR Fitness Experience
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            Immersive augmented reality workouts with virtual trainers and gamified challenges.
          </p>

          {/* Workout Type Selection */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Choose Your AR Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setWorkoutType('indoor')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  workoutType === 'indoor'
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-neutral-600 bg-neutral-700/50 hover:border-neutral-500'
                }`}
              >
                <div className="flex items-center justify-center mb-4">
                  <Home size={32} className={workoutType === 'indoor' ? 'text-primary-400' : 'text-neutral-400'} />
                </div>
                <h4 className="font-semibold text-white mb-2">Indoor AR Workout</h4>
                <p className="text-sm text-neutral-300">
                  Virtual trainer overlay with real-time form correction and interactive guidance
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-neutral-600 text-neutral-300 text-xs rounded">Form Analysis</span>
                  <span className="px-2 py-1 bg-neutral-600 text-neutral-300 text-xs rounded">Virtual Coach</span>
                  <span className="px-2 py-1 bg-neutral-600 text-neutral-300 text-xs rounded">Progress Tracking</span>
                </div>
              </button>

              <button
                onClick={() => setWorkoutType('outdoor')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  workoutType === 'outdoor'
                    ? 'border-primary-500 bg-primary-500/10'
                    : 'border-neutral-600 bg-neutral-700/50 hover:border-neutral-500'
                }`}
              >
                <div className="flex items-center justify-center mb-4">
                  <MapPin size={32} className={workoutType === 'outdoor' ? 'text-primary-400' : 'text-neutral-400'} />
                </div>
                <h4 className="font-semibold text-white mb-2">Outdoor AR Adventure</h4>
                <p className="text-sm text-neutral-300">
                  Gamified running with virtual checkpoints, collectibles, and location-based challenges
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-neutral-600 text-neutral-300 text-xs rounded">GPS Tracking</span>
                  <span className="px-2 py-1 bg-neutral-600 text-neutral-300 text-xs rounded">Virtual Rewards</span>
                  <span className="px-2 py-1 bg-neutral-600 text-neutral-300 text-xs rounded">Leaderboards</span>
                </div>
              </button>
            </div>
          </div>

          {/* AR Workout Component */}
          <ARWorkout workoutType={workoutType} />

          {/* AR Features Info */}
          <div className="mt-8 bg-neutral-800/50 border border-neutral-600 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">AR Technology Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-primary-400 mb-3">Computer Vision</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>• Real-time pose detection and analysis</li>
                  <li>• Movement tracking and form correction</li>
                  <li>• Gesture recognition for controls</li>
                  <li>• Environmental mapping for safety</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary-400 mb-3">Gamification</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li>• Virtual rewards and collectibles</li>
                  <li>• Achievement unlocks and badges</li>
                  <li>• Social challenges and competitions</li>
                  <li>• Progress visualization and stats</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Device Requirements */}
          <div className="mt-6 bg-warning-900/20 border border-warning-700 rounded-xl p-6">
            <div className="flex items-start">
              <Camera size={24} className="text-warning-400 mr-3 mt-1" />
              <div>
                <h4 className="font-medium text-warning-400 mb-2">Device Requirements</h4>
                <p className="text-sm text-neutral-300 mb-3">
                  AR features require a device with camera access and sufficient processing power.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-white mb-1">iOS Requirements:</p>
                    <ul className="text-neutral-300 space-y-1">
                      <li>• iPhone 7 or newer</li>
                      <li>• iOS 12.0 or later</li>
                      <li>• ARKit support</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Android Requirements:</p>
                    <ul className="text-neutral-300 space-y-1">
                      <li>• Android 7.0 or newer</li>
                      <li>• ARCore support</li>
                      <li>• OpenGL ES 3.0</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARWorkoutPage;