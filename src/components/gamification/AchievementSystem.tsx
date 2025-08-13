import React, { useState } from 'react';
import { Trophy, Star, Target, Zap, Award, Crown, Medal, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'fitness' | 'consistency' | 'social' | 'milestone';
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
  nftReward?: string;
}

const AchievementSystem: React.FC = () => {
  const [achievements] = useState<Achievement[]>([
    {
      id: 'first_workout',
      title: 'First Steps',
      description: 'Complete your first workout',
      icon: <Target size={24} />,
      category: 'fitness',
      points: 100,
      rarity: 'common',
      progress: 1,
      maxProgress: 1,
      isUnlocked: true,
      unlockedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      nftReward: 'NFT#001'
    },
    {
      id: 'week_streak',
      title: 'Week Warrior',
      description: 'Maintain a 7-day workout streak',
      icon: <Zap size={24} />,
      category: 'consistency',
      points: 500,
      rarity: 'rare',
      progress: 7,
      maxProgress: 7,
      isUnlocked: true,
      unlockedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      nftReward: 'NFT#007'
    },
    {
      id: 'perfect_form',
      title: 'Form Master',
      description: 'Achieve 95%+ form accuracy for 10 exercises',
      icon: <Star size={24} />,
      category: 'fitness',
      points: 750,
      rarity: 'epic',
      progress: 8,
      maxProgress: 10,
      isUnlocked: false
    },
    {
      id: 'social_butterfly',
      title: 'Community Champion',
      description: 'Complete 5 group challenges',
      icon: <Crown size={24} />,
      category: 'social',
      points: 300,
      rarity: 'rare',
      progress: 3,
      maxProgress: 5,
      isUnlocked: false
    },
    {
      id: 'marathon_milestone',
      title: 'Distance Destroyer',
      description: 'Run a total of 100 kilometers',
      icon: <Medal size={24} />,
      category: 'milestone',
      points: 1000,
      rarity: 'legendary',
      progress: 67,
      maxProgress: 100,
      isUnlocked: false
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'text-neutral-400 border-neutral-600';
      case 'rare': return 'text-blue-400 border-blue-600';
      case 'epic': return 'text-purple-400 border-purple-600';
      case 'legendary': return 'text-warning-400 border-warning-600';
    }
  };

  const getRarityBg = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'bg-neutral-900/50';
      case 'rare': return 'bg-blue-900/20';
      case 'epic': return 'bg-purple-900/20';
      case 'legendary': return 'bg-warning-900/20';
    }
  };

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'fitness': return <Trophy size={16} />;
      case 'consistency': return <Zap size={16} />;
      case 'social': return <Crown size={16} />;
      case 'milestone': return <Medal size={16} />;
    }
  };

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const totalPoints = achievements.filter(a => a.isUnlocked).reduce((sum, a) => sum + a.points, 0);
  const unlockedCount = achievements.filter(a => a.isUnlocked).length;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Achievement Progress</h2>
            <p className="text-primary-100">Keep pushing your limits!</p>
          </div>
          <div className="text-right">
            <div className="flex items-center mb-2">
              <Trophy size={24} className="mr-2" />
              <span className="text-2xl font-bold">{totalPoints}</span>
            </div>
            <p className="text-sm text-primary-200">Total Points</p>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">{unlockedCount}</p>
            <p className="text-sm text-primary-200">Unlocked</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{achievements.length - unlockedCount}</p>
            <p className="text-sm text-primary-200">In Progress</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{achievements.length}</p>
            <p className="text-sm text-primary-200">Total</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {['all', 'fitness', 'consistency', 'social', 'milestone'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
            }`}
          >
            {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAchievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className={`border-2 rounded-xl p-6 ${getRarityColor(achievement.rarity)} ${getRarityBg(achievement.rarity)} ${
              achievement.isUnlocked ? 'opacity-100' : 'opacity-75'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${achievement.isUnlocked ? 'bg-primary-600' : 'bg-neutral-700'} text-white mr-4`}>
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{achievement.title}</h3>
                  <p className="text-sm text-neutral-300">{achievement.description}</p>
                </div>
              </div>
              
              <div className="flex items-center text-sm">
                {getCategoryIcon(achievement.category)}
                <span className="ml-1 text-neutral-400">{achievement.points}pts</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-neutral-400 mb-1">
                <span>Progress</span>
                <span>{achievement.progress}/{achievement.maxProgress}</span>
              </div>
              <div className="w-full bg-neutral-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    achievement.isUnlocked ? 'bg-success-500' : 'bg-primary-500'
                  }`}
                  style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                />
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {achievement.isUnlocked ? (
                  <div className="flex items-center text-success-400">
                    <Award size={16} className="mr-1" />
                    <span className="text-sm">Unlocked</span>
                  </div>
                ) : (
                  <div className="flex items-center text-neutral-400">
                    <Target size={16} className="mr-1" />
                    <span className="text-sm">In Progress</span>
                  </div>
                )}
              </div>

              {achievement.nftReward && achievement.isUnlocked && (
                <div className="flex items-center text-warning-400">
                  <Gift size={16} className="mr-1" />
                  <span className="text-sm">{achievement.nftReward}</span>
                </div>
              )}
            </div>

            {achievement.unlockedAt && (
              <div className="mt-2 text-xs text-neutral-500">
                Unlocked {achievement.unlockedAt.toLocaleDateString()}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSystem;