import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface AIRecommendationsProps {
  onApply: () => void;
}

const AIRecommendations: React.FC<AIRecommendationsProps> = ({ onApply }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleApply = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    onApply();
  };

  return (
    <motion.div 
      className="bg-secondary-50 border border-secondary-100 rounded-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">AI Suggestions</h3>
      <p className="text-neutral-700 mb-4">
        Based on your sleep data and recovery metrics, we recommend adjusting today's workout intensity.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Button 
          variant="secondary"
          isLoading={isLoading}
          onClick={handleApply}
        >
          Apply Recommendations
        </Button>
        <Button variant="outline" className="border-secondary-300 text-secondary-700">
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default AIRecommendations;