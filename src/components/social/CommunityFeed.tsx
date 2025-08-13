import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Trophy, Users, TrendingUp, Camera } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    level: number;
  };
  content: string;
  image?: string;
  workout?: {
    name: string;
    duration: number;
    calories: number;
  };
  achievement?: {
    title: string;
    icon: string;
  };
  likes: number;
  comments: number;
  timestamp: Date;
  isLiked: boolean;
}

const CommunityFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      user: {
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 12
      },
      content: 'Just crushed my morning HIIT session! The AI form correction helped me perfect my burpees. Feeling stronger every day! 💪',
      workout: {
        name: 'HIIT Cardio Blast',
        duration: 30,
        calories: 285
      },
      likes: 24,
      comments: 8,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      isLiked: false
    },
    {
      id: '2',
      user: {
        name: 'Mike Rodriguez',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 8
      },
      content: 'New personal record! Thanks to the community challenge motivation 🏆',
      achievement: {
        title: 'Strength Milestone',
        icon: '🏋️‍♂️'
      },
      likes: 42,
      comments: 15,
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      isLiked: true
    },
    {
      id: '3',
      user: {
        name: 'Emma Thompson',
        avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 15
      },
      content: 'Week 4 of my fitness journey complete! The AI nutrition suggestions have been game-changing. Down 8lbs and feeling amazing!',
      image: 'https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 67,
      comments: 23,
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      isLiked: false
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const handleLike = (postId: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handlePost = () => {
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      user: {
        name: 'You',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
        level: 10
      },
      content: newPost,
      likes: 0,
      comments: 0,
      timestamp: new Date(),
      isLiked: false
    };

    setPosts(prev => [post, ...prev]);
    setNewPost('');
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* Community Stats */}
      <div className="bg-gradient-to-r from-secondary-600 to-primary-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Community Stats</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Users size={24} className="mx-auto mb-2" />
            <p className="text-2xl font-bold">12.5K</p>
            <p className="text-sm text-secondary-100">Active Members</p>
          </div>
          <div className="text-center">
            <Trophy size={24} className="mx-auto mb-2" />
            <p className="text-2xl font-bold">847</p>
            <p className="text-sm text-secondary-100">Challenges Completed</p>
          </div>
          <div className="text-center">
            <TrendingUp size={24} className="mx-auto mb-2" />
            <p className="text-2xl font-bold">2.1M</p>
            <p className="text-sm text-secondary-100">Workouts Logged</p>
          </div>
        </div>
      </div>

      {/* Create Post */}
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <img 
            src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" 
            alt="Your avatar" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your fitness journey..."
              className="w-full bg-neutral-700 border border-neutral-600 rounded-lg p-3 text-white placeholder-neutral-400 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows={3}
            />
            <div className="flex items-center justify-between mt-3">
              <button className="flex items-center text-neutral-400 hover:text-primary-400 transition-colors">
                <Camera size={20} className="mr-2" />
                Add Photo
              </button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={handlePost}
                disabled={!newPost.trim()}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-neutral-800 border border-neutral-700 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img 
                  src={post.user.avatar} 
                  alt={post.user.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-white">{post.user.name}</h4>
                  <div className="flex items-center text-sm text-neutral-400">
                    <span>Level {post.user.level}</span>
                    <span className="mx-2">•</span>
                    <span>{formatTimeAgo(post.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-neutral-300 mb-4">{post.content}</p>

            {/* Workout Info */}
            {post.workout && (
              <div className="bg-neutral-700/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-white">{post.workout.name}</h5>
                    <p className="text-sm text-neutral-400">
                      {post.workout.duration} min • {post.workout.calories} calories
                    </p>
                  </div>
                  <Trophy size={24} className="text-primary-400" />
                </div>
              </div>
            )}

            {/* Achievement */}
            {post.achievement && (
              <div className="bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-600/30 rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{post.achievement.icon}</span>
                  <div>
                    <h5 className="font-medium text-white">Achievement Unlocked!</h5>
                    <p className="text-sm text-primary-300">{post.achievement.title}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Post Image */}
            {post.image && (
              <div className="mb-4">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-700">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-2 transition-colors ${
                    post.isLiked ? 'text-error-400' : 'text-neutral-400 hover:text-error-400'
                  }`}
                >
                  <Heart size={20} className={post.isLiked ? 'fill-current' : ''} />
                  <span>{post.likes}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-neutral-400 hover:text-primary-400 transition-colors">
                  <MessageCircle size={20} />
                  <span>{post.comments}</span>
                </button>
                
                <button className="flex items-center space-x-2 text-neutral-400 hover:text-primary-400 transition-colors">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;