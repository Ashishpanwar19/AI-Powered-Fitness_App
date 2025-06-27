import React, { useState } from 'react';
import { 
  Calendar, 
  Dumbbell, 
  Clock, 
  ChevronRight, 
  BarChart, 
  ChevronDown,
  Plus,
  MoveRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

interface WorkoutDay {
  id: string;
  day: string;
  name: string;
  exercises: WorkoutExercise[];
  duration: number;
  intensity: 'Low' | 'Medium' | 'High';
}

interface WorkoutExercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  restSeconds: number;
  image: string;
}

const WorkoutPlanPage: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [expandedWorkout, setExpandedWorkout] = useState<string | null>(null);

  const toggleWorkoutExpand = (id: string) => {
    setExpandedWorkout(expandedWorkout === id ? null : id);
  };

  const workoutPlans = [
    {
      id: 'beginnerPlan',
      name: 'Beginner Plan',
      description: 'Perfect for those new to fitness or returning after a break',
      duration: '4 weeks',
      workoutsPerWeek: 3,
      active: true
    },
    {
      id: 'intermediatePlan',
      name: 'Intermediate Plan',
      description: 'For those with some training experience looking to progress',
      duration: '6 weeks',
      workoutsPerWeek: 4,
      active: false
    },
    {
      id: 'advancedPlan',
      name: 'Advanced Plan',
      description: 'Challenging workouts for experienced fitness enthusiasts',
      duration: '8 weeks',
      workoutsPerWeek: 5,
      active: false
    }
  ];

  const workoutDays: WorkoutDay[] = [
    {
      id: 'day1',
      day: 'Monday',
      name: 'Full Body Basics',
      exercises: [
        {
          id: 'ex1',
          name: 'Squats',
          sets: 3,
          reps: 12,
          restSeconds: 60,
          image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex2',
          name: 'Push-ups',
          sets: 3,
          reps: 10,
          restSeconds: 60,
          image: 'https://images.pexels.com/photos/4162579/pexels-photo-4162579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex3',
          name: 'Plank',
          sets: 3,
          reps: 30,
          restSeconds: 45,
          image: 'https://images.pexels.com/photos/6922169/pexels-photo-6922169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ],
      duration: 45,
      intensity: 'Medium'
    },
    {
      id: 'day2',
      day: 'Wednesday',
      name: 'Cardio & Core',
      exercises: [
        {
          id: 'ex4',
          name: 'Jumping Jacks',
          sets: 3,
          reps: 30,
          restSeconds: 30,
          image: 'https://images.pexels.com/photos/4473622/pexels-photo-4473622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex5',
          name: 'Mountain Climbers',
          sets: 3,
          reps: 20,
          restSeconds: 45,
          image: 'https://images.pexels.com/photos/4802343/pexels-photo-4802343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex6',
          name: 'Russian Twists',
          sets: 3,
          reps: 15,
          restSeconds: 45,
          image: 'https://images.pexels.com/photos/4498562/pexels-photo-4498562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ],
      duration: 30,
      intensity: 'Medium'
    },
    {
      id: 'day3',
      day: 'Friday',
      name: 'Lower Body Focus',
      exercises: [
        {
          id: 'ex7',
          name: 'Lunges',
          sets: 3,
          reps: 10,
          restSeconds: 60,
          image: 'https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex8',
          name: 'Glute Bridges',
          sets: 3,
          reps: 15,
          restSeconds: 45,
          image: 'https://images.pexels.com/photos/6740056/pexels-photo-6740056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex9',
          name: 'Calf Raises',
          sets: 3,
          reps: 20,
          restSeconds: 30,
          image: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
      ],
      duration: 40,
      intensity: 'Low'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800">
            Your Workout Plans
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Personalized training plans that adapt to your progress and recovery.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-neutral-200 mb-8">
            {['Current Plan', 'Browse Plans', 'History'].map((tab, index) => (
              <button
                key={index}
                className={`py-3 px-5 font-medium transition-colors ${
                  activeTabIndex === index 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Current Plan Tab */}
          {activeTabIndex === 0 && (
            <div>
              {/* Plan Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white mb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <div className="flex items-center">
                      <Dumbbell size={20} className="mr-2" />
                      <h2 className="text-xl font-semibold">Beginner Fitness Plan</h2>
                    </div>
                    <p className="mt-2 text-primary-100">
                      Personalized for your fitness level and goals
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                    <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center">
                      <Calendar size={18} className="mr-2 text-primary-200" />
                      <span>Week 2 of 4</span>
                    </div>
                    <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center">
                      <BarChart size={18} className="mr-2 text-primary-200" />
                      <span>75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Schedule */}
              <h3 className="text-xl font-semibold mb-4 text-neutral-800">
                This Week's Workouts
              </h3>
              
              <div className="grid gap-4 mb-8">
                {workoutDays.map((workout) => (
                  <motion.div 
                    key={workout.id}
                    className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleWorkoutExpand(workout.id)}
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                          {workout.day.slice(0, 3)}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-medium text-neutral-800">{workout.name}</h4>
                          <div className="flex items-center text-sm text-neutral-500">
                            <Clock size={14} className="mr-1" />
                            <span>{workout.duration} min</span>
                            <span className="mx-2">•</span>
                            <span>{workout.intensity} Intensity</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="mr-3 hidden md:flex"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Start workout functionality would go here
                          }}
                        >
                          Start
                        </Button>
                        <ChevronDown 
                          size={20} 
                          className={`text-neutral-500 transition-transform ${
                            expandedWorkout === workout.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                    
                    {/* Expanded Workout Details */}
                    {expandedWorkout === workout.id && (
                      <motion.div 
                        className="border-t border-neutral-200 p-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <h5 className="font-medium text-neutral-700 mb-3">Exercises</h5>
                        <div className="grid gap-3">
                          {workout.exercises.map((exercise) => (
                            <div 
                              key={exercise.id} 
                              className="flex items-center bg-neutral-50 p-3 rounded-lg"
                            >
                              <img 
                                src={exercise.image} 
                                alt={exercise.name} 
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div className="ml-4 flex-grow">
                                <h6 className="font-medium text-neutral-800">{exercise.name}</h6>
                                <p className="text-sm text-neutral-600">
                                  {exercise.sets} sets × {exercise.reps} reps • {exercise.restSeconds}s rest
                                </p>
                              </div>
                              <button className="text-primary-600 hover:text-primary-700">
                                <ChevronRight size={20} />
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 flex justify-center md:justify-end">
                          <Button 
                            variant="primary" 
                            className="w-full md:w-auto"
                          >
                            Start Workout
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Suggestions/Tips */}
              <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">AI Suggestions</h3>
                <p className="text-neutral-700 mb-4">
                  Based on your sleep data and recovery metrics, we recommend adjusting today's workout intensity.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button variant="secondary">
                    Apply Recommendations
                  </Button>
                  <Button variant="outline" className="border-secondary-300 text-secondary-700">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Browse Plans Tab */}
          {activeTabIndex === 1 && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {workoutPlans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`border rounded-xl overflow-hidden ${
                      plan.active ? 'border-primary-500 shadow-md' : 'border-neutral-200'
                    }`}
                  >
                    {plan.active && (
                      <div className="bg-primary-500 text-white text-center py-1 text-sm font-medium">
                        Current Plan
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                      <p className="text-neutral-600 mb-4">{plan.description}</p>
                      <div className="flex flex-wrap gap-3 mb-5">
                        <span className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full">
                          {plan.duration}
                        </span>
                        <span className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full">
                          {plan.workoutsPerWeek}x per week
                        </span>
                      </div>
                      <Button 
                        variant={plan.active ? "secondary" : "primary"} 
                        className="w-full"
                      >
                        {plan.active ? 'View Details' : 'Select Plan'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Plan */}
              <div className="bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl p-6 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Create Custom Plan</h3>
                    <p className="text-white/80">
                      Design your own workout plan tailored to your specific goals and preferences.
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    className="mt-4 md:mt-0 bg-white text-primary-700"
                  >
                    <Plus size={18} className="mr-2" />
                    Start Creating
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTabIndex === 2 && (
            <div>
              <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Your Workout History</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="py-3 px-4 text-left text-neutral-600">Date</th>
                        <th className="py-3 px-4 text-left text-neutral-600">Workout</th>
                        <th className="py-3 px-4 text-left text-neutral-600">Duration</th>
                        <th className="py-3 px-4 text-left text-neutral-600">Intensity</th>
                        <th className="py-3 px-4 text-left text-neutral-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: '2025-04-12', workout: 'Full Body Basics', duration: 48, intensity: 'Medium' },
                        { date: '2025-04-10', workout: 'Cardio & Core', duration: 32, intensity: 'High' },
                        { date: '2025-04-08', workout: 'Lower Body Focus', duration: 45, intensity: 'Medium' },
                        { date: '2025-04-05', workout: 'Full Body Basics', duration: 50, intensity: 'Medium' },
                        { date: '2025-04-03', workout: 'Cardio & Core', duration: 35, intensity: 'Medium' },
                      ].map((item, index) => (
                        <tr key={index} className="border-b border-neutral-100 hover:bg-neutral-50">
                          <td className="py-3 px-4">{item.date}</td>
                          <td className="py-3 px-4 font-medium">{item.workout}</td>
                          <td className="py-3 px-4">{item.duration} min</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              item.intensity === 'High' 
                                ? 'bg-error-100 text-error-700' 
                                : item.intensity === 'Medium'
                                ? 'bg-warning-100 text-warning-700'
                                : 'bg-success-100 text-success-700'
                            }`}>
                              {item.intensity}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                              View Details <MoveRight size={16} className="ml-1" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanPage;