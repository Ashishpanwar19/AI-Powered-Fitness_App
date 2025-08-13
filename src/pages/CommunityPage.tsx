import React, { useState } from 'react';
import { Users, Trophy, MessageSquare, Calendar, Target } from 'lucide-react';
import CommunityFeed from '../components/social/CommunityFeed';
import AchievementSystem from '../components/gamification/AchievementSystem';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 'feed', label: 'Community Feed', icon: <MessageSquare size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy size={20} /> },
    { id: 'challenges', label: 'Challenges', icon: <Target size={20} /> },
    { id: 'groups', label: 'Groups', icon: <Users size={20} /> }
  ];

  const challenges = [
    {
      id: '1',
      title: '30-Day Consistency Challenge',
      description: 'Complete a workout every day for 30 days',
      participants: 1247,
      timeLeft: '12 days',
      reward: '500 points + NFT Badge',
      difficulty: 'Medium',
      isJoined: true
    },
    {
      id: '2',
      title: 'Perfect Form Week',
      description: 'Achieve 95%+ form accuracy for 7 consecutive days',
      participants: 892,
      timeLeft: '3 days',
      reward: '750 points + Exclusive Avatar',
      difficulty: 'Hard',
      isJoined: false
    },
    {
      id: '3',
      title: 'Community Steps Goal',
      description: 'Collective goal: 1 million steps as a community',
      participants: 3456,
      timeLeft: '5 days',
      reward: 'Unlock new workout series',
      difficulty: 'Easy',
      isJoined: true
    }
  ];

  const groups = [
    {
      id: '1',
      name: 'Morning Warriors',
      description: 'Early morning workout enthusiasts',
      members: 234,
      isJoined: true,
      activity: 'Very Active'
    },
    {
      id: '2',
      name: 'HIIT Squad',
      description: 'High-intensity interval training lovers',
      members: 567,
      isJoined: false,
      activity: 'Active'
    },
    {
      id: '3',
      name: 'Beginner Friendly',
      description: 'Supportive community for fitness beginners',
      members: 1023,
      isJoined: true,
      activity: 'Very Active'
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Fitness Community
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            Connect, compete, and achieve your fitness goals together.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-neutral-700 mb-8 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-3 px-5 font-medium transition-colors flex items-center whitespace-nowrap ${
                  activeTab === index 
                    ? 'text-primary-400 border-b-2 border-primary-400' 
                    : 'text-neutral-300 hover:text-primary-400'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 0 && <CommunityFeed />}
            
            {activeTab === 1 && <AchievementSystem />}
            
            {activeTab === 2 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Active Challenges</h2>
                  <p className="text-primary-100">Join challenges to earn rewards and compete with the community</p>
                </div>

                <div className="grid gap-4">
                  {challenges.map((challenge) => (
                    <div key={challenge.id} className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{challenge.title}</h3>
                          <p className="text-neutral-300 mb-3">{challenge.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-neutral-400">
                            <span>{challenge.participants} participants</span>
                            <span>•</span>
                            <span>{challenge.timeLeft} left</span>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              challenge.difficulty === 'Easy' ? 'bg-success-900/30 text-success-400' :
                              challenge.difficulty === 'Medium' ? 'bg-warning-900/30 text-warning-400' :
                              'bg-error-900/30 text-error-400'
                            }`}>
                              {challenge.difficulty}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-warning-400 font-medium mb-2">{challenge.reward}</p>
                          <button className={`px-4 py-2 rounded-lg font-medium ${
                            challenge.isJoined 
                              ? 'bg-success-600 text-white' 
                              : 'bg-primary-600 hover:bg-primary-700 text-white'
                          }`}>
                            {challenge.isJoined ? 'Joined' : 'Join Challenge'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 3 && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-secondary-600 to-primary-600 rounded-xl p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Fitness Groups</h2>
                  <p className="text-secondary-100">Find your tribe and stay motivated together</p>
                </div>

                <div className="grid gap-4">
                  {groups.map((group) => (
                    <div key={group.id} className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{group.name}</h3>
                          <p className="text-neutral-300 mb-3">{group.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-neutral-400">
                            <span>{group.members} members</span>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded text-xs ${
                              group.activity === 'Very Active' ? 'bg-success-900/30 text-success-400' :
                              'bg-warning-900/30 text-warning-400'
                            }`}>
                              {group.activity}
                            </span>
                          </div>
                        </div>
                        <button className={`px-4 py-2 rounded-lg font-medium ${
                          group.isJoined 
                            ? 'bg-neutral-600 text-neutral-300' 
                            : 'bg-primary-600 hover:bg-primary-700 text-white'
                        }`}>
                          {group.isJoined ? 'Joined' : 'Join Group'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;