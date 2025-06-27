import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Button from '../ui/Button';
import { useUserStore } from '../../store/userStore';
import { motion } from 'framer-motion';

const HealthMetricsCard: React.FC = () => {
  const { profile, updateHealthMetrics, connectDevice } = useUserStore();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      await connectDevice();
      // Success notification would go here
    } catch (error) {
      // Error handling would go here
    } finally {
      setIsConnecting(false);
    }
  };

  const handleUpdateMetrics = async () => {
    setIsUpdating(true);
    // Simulate metrics update
    await new Promise(resolve => setTimeout(resolve, 1000));
    updateHealthMetrics({
      weight: Number((profile.healthMetrics.weight - 0.2).toFixed(1)),
      bmi: Number((profile.healthMetrics.bmi - 0.1).toFixed(1)),
      restingHeartRate: profile.healthMetrics.restingHeartRate - 1
    });
    setIsUpdating(false);
  };

  return (
    <motion.div 
      className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Heart size={20} className="mr-2 text-primary-600" />
        Health Metrics
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-neutral-50 p-4 rounded-lg">
          <p className="text-sm text-neutral-600 mb-1">Height</p>
          <p className="text-xl font-semibold">{profile.healthMetrics.height} cm</p>
        </div>
        <div className="bg-neutral-50 p-4 rounded-lg">
          <p className="text-sm text-neutral-600 mb-1">Weight</p>
          <p className="text-xl font-semibold">{profile.healthMetrics.weight} kg</p>
        </div>
        <div className="bg-neutral-50 p-4 rounded-lg">
          <p className="text-sm text-neutral-600 mb-1">BMI</p>
          <p className="text-xl font-semibold">{profile.healthMetrics.bmi}</p>
        </div>
        <div className="bg-neutral-50 p-4 rounded-lg">
          <p className="text-sm text-neutral-600 mb-1">Resting Heart Rate</p>
          <p className="text-xl font-semibold">{profile.healthMetrics.restingHeartRate} bpm</p>
        </div>
        <div className="bg-neutral-50 p-4 rounded-lg">
          <p className="text-sm text-neutral-600 mb-1">Avg. Sleep</p>
          <p className="text-xl font-semibold">{profile.healthMetrics.sleepAvg} hours</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="primary"
          isLoading={isUpdating}
          onClick={handleUpdateMetrics}
        >
          Update Metrics
        </Button>
        <Button 
          variant="outline"
          isLoading={isConnecting}
          onClick={handleConnect}
        >
          Connect Health Device
        </Button>
      </div>
    </motion.div>
  );
};

export default HealthMetricsCard;