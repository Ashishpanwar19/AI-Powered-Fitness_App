import React, { useState } from 'react';
import { Smartphone, Watch, Wifi, QrCode, Bluetooth } from 'lucide-react';
import QRCodeGenerator from '../components/qr/QRCodeGenerator';
import WearableSync from '../components/wearable/WearableSync';
import OfflineSync from '../components/mobile/OfflineSync';
import { useUserStore } from '../store/userStore';

const SyncPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { profile } = useUserStore();

  const tabs = [
    { id: 'qr', label: 'QR Sync', icon: <QrCode size={20} /> },
    { id: 'wearable', label: 'Wearables', icon: <Watch size={20} /> },
    { id: 'offline', label: 'Offline Sync', icon: <Wifi size={20} /> }
  ];

  return (
    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Device Sync & Integration
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            Connect your devices and sync your fitness data seamlessly across all platforms.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-neutral-700 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`py-3 px-5 font-medium transition-colors flex items-center ${
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
            {activeTab === 0 && (
              <div>
                <QRCodeGenerator 
                  userId={profile.email}
                  onGenerate={(qrData) => console.log('QR Generated:', qrData)}
                />
                
                {/* QR Usage Instructions */}
                <div className="mt-8 bg-neutral-800/50 border border-neutral-600 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Supported Devices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-neutral-700/50 rounded-lg">
                      <Watch size={24} className="text-primary-400 mr-3" />
                      <div>
                        <h4 className="font-medium text-white">Apple Watch</h4>
                        <p className="text-sm text-neutral-400">watchOS 8.0+</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-700/50 rounded-lg">
                      <Watch size={24} className="text-green-400 mr-3" />
                      <div>
                        <h4 className="font-medium text-white">Wear OS</h4>
                        <p className="text-sm text-neutral-400">Android Wear 3.0+</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-700/50 rounded-lg">
                      <Smartphone size={24} className="text-blue-400 mr-3" />
                      <div>
                        <h4 className="font-medium text-white">Companion Apps</h4>
                        <p className="text-sm text-neutral-400">iOS & Android</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 bg-neutral-700/50 rounded-lg">
                      <Bluetooth size={24} className="text-purple-400 mr-3" />
                      <div>
                        <h4 className="font-medium text-white">Bluetooth Devices</h4>
                        <p className="text-sm text-neutral-400">Heart rate monitors, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && <WearableSync />}

            {activeTab === 2 && (
              <div>
                <OfflineSync />
                
                {/* Offline Features */}
                <div className="mt-8 bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Offline Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-primary-400">Available Offline:</h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li>• Workout tracking and logging</li>
                        <li>• Exercise form analysis (cached AI models)</li>
                        <li>• Progress tracking and metrics</li>
                        <li>• Nutrition logging</li>
                        <li>• Achievement progress</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-warning-400">Requires Internet:</h4>
                      <ul className="space-y-2 text-sm text-neutral-300">
                        <li>• Community features and social feed</li>
                        <li>• Live coaching and AI recommendations</li>
                        <li>• Cloud backup and sync</li>
                        <li>• New workout plan downloads</li>
                        <li>• Leaderboards and challenges</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyncPage;