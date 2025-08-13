import React, { useState, useEffect } from 'react';
import { Wifi, WifiOff, CloudSync, Database, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface OfflineData {
  workouts: any[];
  nutrition: any[];
  progress: any[];
  lastSync: Date | null;
}

const OfflineSync: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineData, setOfflineData] = useState<OfflineData>({
    workouts: [],
    nutrition: [],
    progress: [],
    lastSync: null
  });
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (hasOfflineData()) {
        syncOfflineData();
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Load offline data from localStorage
    loadOfflineData();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const loadOfflineData = () => {
    try {
      const stored = localStorage.getItem('aurafit_offline_data');
      if (stored) {
        const data = JSON.parse(stored);
        setOfflineData({
          ...data,
          lastSync: data.lastSync ? new Date(data.lastSync) : null
        });
      }
    } catch (error) {
      console.error('Failed to load offline data:', error);
    }
  };

  const saveOfflineData = (data: Partial<OfflineData>) => {
    const updated = { ...offlineData, ...data };
    setOfflineData(updated);
    localStorage.setItem('aurafit_offline_data', JSON.stringify(updated));
  };

  const hasOfflineData = (): boolean => {
    return offlineData.workouts.length > 0 || 
           offlineData.nutrition.length > 0 || 
           offlineData.progress.length > 0;
  };

  const syncOfflineData = async () => {
    if (!isOnline || !hasOfflineData()) return;

    setIsSyncing(true);
    setSyncStatus('syncing');

    try {
      // Simulate API sync
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Clear offline data after successful sync
      saveOfflineData({
        workouts: [],
        nutrition: [],
        progress: [],
        lastSync: new Date()
      });

      setSyncStatus('success');
      setTimeout(() => setSyncStatus('idle'), 3000);
    } catch (error) {
      setSyncStatus('error');
      setTimeout(() => setSyncStatus('idle'), 3000);
    } finally {
      setIsSyncing(false);
    }
  };

  const addOfflineWorkout = (workout: any) => {
    const updatedWorkouts = [...offlineData.workouts, { ...workout, timestamp: new Date() }];
    saveOfflineData({ workouts: updatedWorkouts });
  };

  const getStatusIcon = () => {
    if (!isOnline) return <WifiOff size={20} className="text-error-500" />;
    if (syncStatus === 'syncing') return <CloudSync size={20} className="text-primary-500 animate-spin" />;
    if (syncStatus === 'success') return <CheckCircle size={20} className="text-success-500" />;
    if (syncStatus === 'error') return <AlertCircle size={20} className="text-error-500" />;
    return <Wifi size={20} className="text-success-500" />;
  };

  const getStatusText = () => {
    if (!isOnline) return 'Offline Mode';
    if (syncStatus === 'syncing') return 'Syncing...';
    if (syncStatus === 'success') return 'Synced';
    if (syncStatus === 'error') return 'Sync Failed';
    return 'Online';
  };

  const getStatusColor = () => {
    if (!isOnline) return 'text-error-400';
    if (syncStatus === 'syncing') return 'text-primary-400';
    if (syncStatus === 'success') return 'text-success-400';
    if (syncStatus === 'error') return 'text-error-400';
    return 'text-success-400';
  };

  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {getStatusIcon()}
          <span className={`ml-2 font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </span>
        </div>

        {hasOfflineData() && (
          <div className="flex items-center text-sm text-neutral-400">
            <Database size={16} className="mr-1" />
            <span>{offlineData.workouts.length + offlineData.nutrition.length + offlineData.progress.length} items pending</span>
          </div>
        )}
      </div>

      {!isOnline && (
        <motion.div 
          className="mt-3 p-3 bg-warning-900/20 border border-warning-700 rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-warning-300">
            You're offline. Your workouts and data will be saved locally and synced when you reconnect.
          </p>
        </motion.div>
      )}

      {offlineData.lastSync && (
        <div className="mt-2 text-xs text-neutral-500">
          Last synced: {offlineData.lastSync.toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default OfflineSync;