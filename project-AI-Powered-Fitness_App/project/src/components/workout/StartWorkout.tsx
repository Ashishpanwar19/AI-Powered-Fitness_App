import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { Dumbbell } from 'lucide-react';

interface StartWorkoutProps {
  workoutId: string;
  workoutName: string;
}

const StartWorkout: React.FC<StartWorkoutProps> = ({ workoutId, workoutName }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/exercise?workout=${workoutId}&name=${encodeURIComponent(workoutName)}`);
  };

  return (
    <Button 
      variant="primary" 
      onClick={handleStart}
      className="flex items-center"
    >
      <Dumbbell size={18} className="mr-2" />
      Start Workout
    </Button>
  );
};

export default StartWorkout;