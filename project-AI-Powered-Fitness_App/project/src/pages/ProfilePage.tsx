import React, { useState } from 'react';
import { 
  User, 
  Settings, 
  Lock, 
  Bell, 
  Database, 
  Heart, 
  Dumbbell, 
  Check, 
  ChevronRight 
} from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const ProfilePage: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const mockUserData = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    joinDate: 'January 15, 2025',
    profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    fitnessLevel: 'Intermediate',
    goals: ['Build Muscle', 'Improve Endurance', 'Better Sleep'],
    restrictions: ['Knee Injury (Minor)', 'No Equipment Access'],
    preferences: {
      workoutDuration: '30-45 minutes',
      preferredDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
      workoutTypes: ['Strength Training', 'HIIT', 'Yoga']
    },
    healthMetrics: {
      height: 178, // cm
      weight: 76.5, // kg
      bmi: 24.1,
      restingHeartRate: 68,
      sleepAvg: 7.2 // hours
    }
  };

  const settingsOptions = [
    {
      icon: <User size={20} className="text-primary-500" />,
      title: 'Account Information',
      description: 'Manage your account details and preferences',
      link: '#'
    },
    {
      icon: <Bell size={20} className="text-primary-500" />,
      title: 'Notifications',
      description: 'Control how and when you receive alerts',
      link: '#'
    },
    {
      icon: <Lock size={20} className="text-primary-500" />,
      title: 'Privacy & Security',
      description: 'Manage your data sharing and security settings',
      link: '#'
    },
    {
      icon: <Database size={20} className="text-primary-500" />,
      title: 'Data Management',
      description: 'Control your personal data and export options',
      link: '#'
    },
    {
      icon: <Settings size={20} className="text-primary-500" />,
      title: 'App Settings',
      description: 'Customize your app experience and preferences',
      link: '#'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="relative">
                  <img 
                    src={mockUserData.profileImage} 
                    alt={mockUserData.name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary-100"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary-500 rounded-full p-1">
                    <Check size={16} className="text-white" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">
                  {mockUserData.name}
                </h1>
                <p className="text-neutral-600 mb-2">{mockUserData.email}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full">
                    {mockUserData.fitnessLevel}
                  </span>
                  <span className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full">
                    Member since {mockUserData.joinDate}
                  </span>
                </div>
              </div>
              <div className="md:ml-auto mt-4 md:mt-0">
                <Button variant="outline">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-neutral-200 mb-8 overflow-x-auto">
            {['Profile', 'Settings', 'Privacy', 'Billing'].map((tab, index) => (
              <button
                key={index}
                className={`py-3 px-5 font-medium transition-colors whitespace-nowrap ${
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

          {/* Profile Tab */}
          {activeTabIndex === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                {/* Fitness Profile */}
                <motion.div 
                  className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Dumbbell size={20} className="mr-2 text-primary-600" />
                    Fitness Profile
                  </h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Goals</h3>
                    <div className="flex flex-wrap gap-2">
                      {mockUserData.goals.map((goal, index) => (
                        <span 
                          key={index} 
                          className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {goal}
                        </span>
                      ))}
                      <button className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm flex items-center">
                        Add Goal <Plus size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Restrictions</h3>
                    <div className="flex flex-wrap gap-2">
                      {mockUserData.restrictions.map((restriction, index) => (
                        <span 
                          key={index} 
                          className="bg-warning-100 text-warning-700 px-3 py-1 rounded-full text-sm"
                        >
                          {restriction}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Workout Preferences</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-neutral-50 p-3 rounded-lg">
                        <p className="text-sm text-neutral-600 mb-1">Duration</p>
                        <p className="font-medium">{mockUserData.preferences.workoutDuration}</p>
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-lg">
                        <p className="text-sm text-neutral-600 mb-1">Preferred Days</p>
                        <p className="font-medium">{mockUserData.preferences.preferredDays.join(', ')}</p>
                      </div>
                      <div className="bg-neutral-50 p-3 rounded-lg sm:col-span-2">
                        <p className="text-sm text-neutral-600 mb-1">Workout Types</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {mockUserData.preferences.workoutTypes.map((type, index) => (
                            <span 
                              key={index} 
                              className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-sm"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline">
                      Update Preferences
                    </Button>
                  </div>
                </motion.div>
                
                {/* Health Metrics */}
                <motion.div 
                  className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Heart size={20} className="mr-2 text-primary-600" />
                    Health Metrics
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600 mb-1">Height</p>
                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.height} cm</p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600 mb-1">Weight</p>
                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.weight} kg</p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600 mb-1">BMI</p>
                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.bmi}</p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600 mb-1">Resting Heart Rate</p>
                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.restingHeartRate} bpm</p>
                    </div>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600 mb-1">Avg. Sleep</p>
                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.sleepAvg} hours</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary">
                      Update Metrics
                    </Button>
                    <Button variant="outline">
                      Connect Health Device
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              {/* Settings Shortcuts */}
              <div>
                <motion.div 
                  className="bg-white border border-neutral-200 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="p-4 border-b border-neutral-200">
                    <h2 className="font-semibold text-lg">Quick Settings</h2>
                  </div>
                  <div>
                    {settingsOptions.map((option, index) => (
                      <a 
                        key={index}
                        href={option.link}
                        className="flex items-center justify-between p-4 hover:bg-neutral-50 border-b border-neutral-100 last:border-0 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="mr-3">{option.icon}</div>
                          <div>
                            <h3 className="font-medium text-neutral-800">{option.title}</h3>
                            <p className="text-sm text-neutral-600">{option.description}</p>
                          </div>
                        </div>
                        <ChevronRight size={18} className="text-neutral-400" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="mt-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                  <p className="mb-4 text-white/90">
                    Your fitness data remains on your device. We prioritize your privacy and security.
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary-700 hover:bg-white/90"
                  >
                    <Lock size={16} className="mr-2" />
                    Privacy Settings
                  </Button>
                </motion.div>
              </div>
            </div>
          )}

          {/* Other tabs would be implemented here */}
          {activeTabIndex > 0 && (
            <div className="bg-white border border-neutral-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-neutral-600 mb-6">This feature is under development and will be available shortly.</p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTabIndex(0)}
              >
                Return to Profile
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Missing Plus icon import
const Plus = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
};

export default ProfilePage;