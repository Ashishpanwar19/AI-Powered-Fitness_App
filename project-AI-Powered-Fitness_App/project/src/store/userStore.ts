import { create } from 'zustand';

interface UserProfile {
  name: string;
  email: string;
  joinDate: string;
  fitnessLevel: string;
  goals: string[];
  restrictions: string[];
  preferences: {
    workoutDuration: string;
    preferredDays: string[];
    workoutTypes: string[];
  };
  healthMetrics: {
    height: number;
    weight: number;
    bmi: number;
    restingHeartRate: number;
    sleepAvg: number;
  };
}

interface UserState {
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
  updateHealthMetrics: (metrics: Partial<UserProfile['healthMetrics']>) => void;
  connectDevice: () => Promise<void>;
}

const defaultProfile: UserProfile = {
  name: 'Ashish Panwar',
  email: 'ashish05panwar@gmail.com',
  joinDate: 'January 15, 2025',
  fitnessLevel: 'Intermediate',
  goals: ['Build Muscle', 'Improve Endurance', 'Better Sleep'],
  restrictions: ['Knee Injury (Minor)', 'No Equipment Access'],
  preferences: {
    workoutDuration: '30-45 minutes',
    preferredDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    workoutTypes: ['Strength Training', 'HIIT', 'Yoga']
  },
  healthMetrics: {
    height: 178,
    weight: 76.5,
    bmi: 24.1,
    restingHeartRate: 68,
    sleepAvg: 7.2
  }
};

export const useUserStore = create<UserState>((set) => ({
  profile: defaultProfile,
  updateProfile: (profile) => set((state) => ({
    profile: { ...state.profile, ...profile }
  })),
  updateHealthMetrics: (metrics) => set((state) => ({
    profile: {
      ...state.profile,
      healthMetrics: { ...state.profile.healthMetrics, ...metrics }
    }
  })),
  connectDevice: async () => {
    try {
      // Simulate device connection
      await new Promise(resolve => setTimeout(resolve, 2000));
      set((state) => ({
        profile: {
          ...state.profile,
          healthMetrics: {
            ...state.profile.healthMetrics,
            restingHeartRate: 65,
            sleepAvg: 7.5
          }
        }
      }));
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}));