import React, { useState, useEffect } from 'react';
import { Watch, Smartphone, Bluetooth, Battery, Heart, Activity } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

interface WearableDevice {
  id: string;
  name: string;
  type: 'apple_watch' | 'wear_os' | 'fitbit' | 'garmin';
  batteryLevel: number;
  isConnected: boolean;
  lastSync: Date | null;
}

interface WearableData {
  heartRate: number;
  steps: number;
  calories: number;
  activeMinutes: number;
}

const WearableSync: React.FC = () => {
  const [devices, setDevices] = useState<WearableDevice[]>([
    {
      id: 'apple_watch_1',
      name: 'Apple Watch Series 9',
      type: 'apple_watch',
      batteryLevel: 78,
      isConnected: true,
      lastSync: new Date(Date.now() - 5 * 60 * 1000)
    },
    {
      id: 'fitbit_1',
      name: 'Fitbit Versa 4',
      type: 'fitbit',
      batteryLevel: 45,
      isConnected: false,
      lastSync: new Date(Date.now() - 2 * 60 * 60 * 1000)
    }
  ]);

  const [liveData, setLiveData] = useState<WearableData>({
    heartRate: 72,
    steps: 8432,
    calories: 1847,
    activeMinutes: 45
  });

  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    // Simulate live data updates
    const interval = setInterval(() => {
      setLiveData(prev => ({
        heartRate: prev.heartRate + Math.floor(Math.random() * 10 - 5),
        steps: prev.steps + Math.floor(Math.random() * 5),
        calories: prev.calories + Math.floor(Math.random() * 3),
        activeMinutes: prev.activeMinutes + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const connectDevice = async (deviceId: string) => {
    setDevices(prev => prev.map(device => 
      device.id === deviceId 
        ? { ...device, isConnected: true, lastSync: new Date() }
        : device
    ));
  };

  const disconnectDevice = (deviceId: string) => {
    setDevices(prev => prev.map(device => 
      device.id === deviceId 
        ? { ...device, isConnected: false }
        : device
    ));
  };

  const scanForDevices = async () => {
    setIsScanning(true);
    // Simulate scanning
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsScanning(false);
  };

  const getDeviceIcon = (type: WearableDevice['type']) => {
    switch (type) {
      case 'apple_watch':
        return <Watch size={20} className="text-neutral-400" />;
      case 'wear_os':
        return <Watch size={20} className="text-green-400" />;
      case 'fitbit':
        return <Activity size={20} className="text-blue-400" />;
      case 'garmin':
        return <Watch size={20} className="text-red-400" />;
      default:
        return <Watch size={20} className="text-neutral-400" />;
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 50) return 'text-success-400';
    if (level > 20) return 'text-warning-400';
    return 'text-error-400';
  };

  return (
    <div className="space-y-6">
      {/* Live Data from Connected Devices */}
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Heart size={24} className="mr-2 text-primary-400" />
          Live Wearable Data
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-700/50 p-4 rounded-lg text-center">
            <Heart size={24} className="mx-auto mb-2 text-error-400" />
            <p className="text-2xl font-bold text-white">{liveData.heartRate}</p>
            <p className="text-sm text-neutral-400">BPM</p>
          </div>
          
          <div className="bg-neutral-700/50 p-4 rounded-lg text-center">
            <Activity size={24} className="mx-auto mb-2 text-primary-400" />
            <p className="text-2xl font-bold text-white">{liveData.steps.toLocaleString()}</p>
            <p className="text-sm text-neutral-400">Steps</p>
          </div>
          
          <div className="bg-neutral-700/50 p-4 rounded-lg text-center">
            <div className="w-6 h-6 mx-auto mb-2 bg-warning-400 rounded-full flex items-center justify-center">
              <span className="text-xs text-neutral-900">🔥</span>
            </div>
            <p className="text-2xl font-bold text-white">{liveData.calories}</p>
            <p className="text-sm text-neutral-400">Calories</p>
          </div>
          
          <div className="bg-neutral-700/50 p-4 rounded-lg text-center">
            <Activity size={24} className="mx-auto mb-2 text-success-400" />
            <p className="text-2xl font-bold text-white">{liveData.activeMinutes}</p>
            <p className="text-sm text-neutral-400">Active Min</p>
          </div>
        </div>
      </div>

      {/* Connected Devices */}
      <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <Bluetooth size={24} className="mr-2 text-primary-400" />
            Connected Devices
          </h3>
          <Button 
            variant="outline" 
            size="sm"
            onClick={scanForDevices}
            isLoading={isScanning}
            className="border-neutral-600 text-neutral-300"
          >
            {isScanning ? 'Scanning...' : 'Scan for Devices'}
          </Button>
        </div>

        <div className="space-y-3">
          {devices.map((device) => (
            <motion.div 
              key={device.id}
              className="flex items-center justify-between p-4 bg-neutral-700/50 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                {getDeviceIcon(device.type)}
                <div className="ml-3">
                  <h4 className="font-medium text-white">{device.name}</h4>
                  <div className="flex items-center text-sm text-neutral-400">
                    <Battery size={14} className={`mr-1 ${getBatteryColor(device.batteryLevel)}`} />
                    <span>{device.batteryLevel}%</span>
                    {device.lastSync && (
                      <>
                        <span className="mx-2">•</span>
                        <span>Synced {Math.floor((Date.now() - device.lastSync.getTime()) / 60000)}m ago</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${device.isConnected ? 'bg-success-400' : 'bg-error-400'}`} />
                <Button 
                  variant={device.isConnected ? "outline" : "primary"}
                  size="sm"
                  onClick={() => device.isConnected ? disconnectDevice(device.id) : connectDevice(device.id)}
                >
                  {device.isConnected ? 'Disconnect' : 'Connect'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {devices.length === 0 && (
          <div className="text-center py-8">
            <Smartphone size={48} className="mx-auto text-neutral-500 mb-4" />
            <p className="text-neutral-400">No devices found</p>
            <p className="text-sm text-neutral-500 mt-1">Make sure your wearable is in pairing mode</p>
          </div>
        )}
      </div>

      {/* Sync Instructions */}
      <div className="bg-neutral-800/50 border border-neutral-600 rounded-xl p-6">
        <h4 className="font-medium text-white mb-3">Supported Devices</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center text-neutral-300">
            <Watch size={16} className="mr-2 text-neutral-400" />
            Apple Watch
          </div>
          <div className="flex items-center text-neutral-300">
            <Watch size={16} className="mr-2 text-green-400" />
            Wear OS
          </div>
          <div className="flex items-center text-neutral-300">
            <Activity size={16} className="mr-2 text-blue-400" />
            Fitbit
          </div>
          <div className="flex items-center text-neutral-300">
            <Watch size={16} className="mr-2 text-red-400" />
            Garmin
          </div>
        </div>
      </div>
    </div>
  );
};

export default WearableSync;