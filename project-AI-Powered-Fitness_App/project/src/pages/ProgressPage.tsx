import React, { useState } from 'react';
import { 
  Calendar, 
  Award, 
  TrendingUp, 
  BarChart, 
  Activity, 
  Clock, 
  Dumbbell, 
  Scale,
  Flame,
  Heart
} from 'lucide-react';
import Button from '../components/ui/Button';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProgressPage: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [timeRange, setTimeRange] = useState('month');

  // Mock weight data for the chart
  const weightData = {
    labels: ['Jan 1', 'Jan 8', 'Jan 15', 'Jan 22', 'Jan 29', 'Feb 5', 'Feb 12', 'Feb 19', 'Feb 26', 'Mar 5', 'Mar 12', 'Mar 19', 'Mar 26', 'Apr 2', 'Apr 9'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [82, 81.5, 81.2, 80.7, 80.1, 79.8, 79.2, 78.9, 78.5, 78.2, 77.8, 77.3, 77.1, 76.8, 76.5],
        borderColor: 'rgb(0, 215, 204)',
        backgroundColor: 'rgba(0, 215, 204, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Mock strength data for the chart
  const strengthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Squat (kg)',
        data: [70, 75, 80, 85],
        borderColor: 'rgb(26, 109, 255)',
        backgroundColor: 'rgba(26, 109, 255, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Bench Press (kg)',
        data: [50, 55, 57.5, 60],
        borderColor: 'rgb(255, 186, 51)',
        backgroundColor: 'rgba(255, 186, 51, 0.1)',
        tension: 0.3,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
      },
    },
  };

  // Mock achievements data
  const achievements = [
    {
      id: 'achievement1',
      title: 'Consistency Champion',
      description: 'Completed workouts for 4 consecutive weeks',
      icon: <Calendar size={24} className="text-primary-500" />,
      date: 'Apr 10, 2025',
      nftId: 'NFT#28461',
      image: 'https://images.pexels.com/photos/8761744/pexels-photo-8761744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'achievement2',
      title: 'Strength Milestone',
      description: 'Increased squat weight by 20% over 8 weeks',
      icon: <Dumbbell size={24} className="text-primary-500" />,
      date: 'Mar 28, 2025',
      nftId: 'NFT#25982',
      image: 'https://images.pexels.com/photos/3823173/pexels-photo-3823173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'achievement3',
      title: 'Perfect Form',
      description: 'Achieved 95%+ form accuracy on all exercises',
      icon: <Award size={24} className="text-primary-500" />,
      date: 'Mar 15, 2025',
      nftId: 'NFT#24153',
      image: 'https://images.pexels.com/photos/6253297/pexels-photo-6253297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  // Mock stats data
  const statsData = [
    {
      title: 'Total Workouts',
      value: '42',
      icon: <Activity size={20} className="text-primary-500" />,
      change: '+5 this month',
      changeType: 'positive',
    },
    {
      title: 'Active Minutes',
      value: '1,850',
      icon: <Clock size={20} className="text-primary-500" />,
      change: '+320 this month',
      changeType: 'positive',
    },
    {
      title: 'Calories Burned',
      value: '32,450',
      icon: <Flame size={20} className="text-primary-500" />,
      change: '+4,120 this month',
      changeType: 'positive',
    },
    {
      title: 'Avg. Heart Rate',
      value: '142 bpm',
      icon: <Heart size={20} className="text-primary-500" />,
      change: '-3 bpm this month',
      changeType: 'positive',
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800">
            Your Progress
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Track your fitness journey, achievements, and key metrics.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-neutral-200 mb-8">
            {['Overview', 'Metrics', 'Achievements', 'Body'].map((tab, index) => (
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

          {/* Overview Tab */}
          {activeTabIndex === 0 && (
            <div>
              {/* Key Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {statsData.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-neutral-600 font-medium">{stat.title}</h3>
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-neutral-800 mb-1">{stat.value}</p>
                    <p className={`text-sm ${
                      stat.changeType === 'positive' ? 'text-success-600' : 'text-error-600'
                    }`}>
                      {stat.change}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Weight Chart */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1 text-neutral-800">Weight Progress</h2>
                    <p className="text-neutral-600">Track your weight changes over time</p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                      {['week', 'month', 'year'].map(range => (
                        <button
                          key={range}
                          className={`py-1 px-3 text-sm ${
                            timeRange === range 
                              ? 'bg-primary-100 text-primary-700' 
                              : 'bg-white text-neutral-600 hover:bg-neutral-50'
                          }`}
                          onClick={() => setTimeRange(range)}
                        >
                          {range.charAt(0).toUpperCase() + range.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="h-[300px]">
                  <Line options={chartOptions} data={weightData} />
                </div>
              </div>

              {/* Strength Progress Chart */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1 text-neutral-800">Strength Progress</h2>
                    <p className="text-neutral-600">Track your strength gains for key exercises</p>
                  </div>
                </div>
                <div className="h-[300px]">
                  <Line options={chartOptions} data={strengthData} />
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-neutral-800">Recent Achievements</h2>
                  <button className="text-primary-600 font-medium">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div 
                      key={achievement.id}
                      className="border border-neutral-200 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    >
                      <div className="relative h-40">
                        <img 
                          src={achievement.image} 
                          alt={achievement.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-primary-700">
                          {achievement.nftId}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center mb-2">
                          {achievement.icon}
                          <h3 className="ml-2 font-semibold text-neutral-800">{achievement.title}</h3>
                        </div>
                        <p className="text-sm text-neutral-600 mb-2">{achievement.description}</p>
                        <p className="text-xs text-neutral-500">Earned on {achievement.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
                Return to Overview
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;