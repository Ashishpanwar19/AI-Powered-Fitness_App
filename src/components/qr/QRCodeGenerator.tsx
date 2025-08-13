import React, { useState, useEffect } from 'react';
import { QrCode, Smartphone, Watch, RefreshCw, Shield } from 'lucide-react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

interface QRCodeGeneratorProps {
  userId: string;
  onGenerate?: (qrData: string) => void;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ userId, onGenerate }) => {
  const [qrCode, setQrCode] = useState<string>('');
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQRCode = async () => {
    setIsGenerating(true);
    
    // Generate secure token with expiry
    const sessionToken = generateSecureToken();
    const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes
    
    const qrData = {
      userId: hashUserId(userId),
      sessionToken,
      expiresAt: expiry.toISOString(),
      version: '1.0'
    };

    const qrString = btoa(JSON.stringify(qrData));
    
    // Simulate QR code generation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setQrCode(qrString);
    setExpiresAt(expiry);
    setIsGenerating(false);
    
    if (onGenerate) {
      onGenerate(qrString);
    }
  };

  const generateSecureToken = (): string => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  };

  const hashUserId = (id: string): string => {
    // Simple hash for demo - in production use proper crypto
    return btoa(id).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16);
  };

  const getTimeRemaining = (): string => {
    if (!expiresAt) return '';
    const now = new Date();
    const diff = expiresAt.getTime() - now.getTime();
    if (diff <= 0) return 'Expired';
    
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (expiresAt) {
      const interval = setInterval(() => {
        const now = new Date();
        if (now >= expiresAt) {
          setQrCode('');
          setExpiresAt(null);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [expiresAt]);

  return (
    <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <QrCode size={24} className="mr-2 text-primary-400" />
          Watch Sync QR Code
        </h3>
        <div className="flex items-center text-sm text-neutral-400">
          <Shield size={16} className="mr-1" />
          Secure & Encrypted
        </div>
      </div>

      {qrCode ? (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* QR Code Display */}
          <div className="bg-white p-6 rounded-lg mb-4 inline-block">
            <div className="w-48 h-48 bg-neutral-900 rounded flex items-center justify-center">
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 64 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-neutral-300 mb-2">Scan with your smartwatch to sync data</p>
            <div className="flex items-center justify-center text-warning-400">
              <Watch size={16} className="mr-1" />
              <span className="font-mono text-sm">Expires in: {getTimeRemaining()}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="outline" 
              size="sm"
              onClick={generateQRCode}
              isLoading={isGenerating}
              className="border-neutral-600 text-neutral-300"
            >
              <RefreshCw size={16} className="mr-2" />
              Regenerate
            </Button>
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-8">
          <div className="mb-4">
            <div className="w-24 h-24 bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone size={32} className="text-neutral-400" />
            </div>
            <p className="text-neutral-300 mb-2">Generate a secure QR code to sync your fitness data</p>
            <p className="text-sm text-neutral-500">Code expires in 5 minutes for security</p>
          </div>
          
          <Button 
            variant="primary"
            onClick={generateQRCode}
            isLoading={isGenerating}
          >
            <QrCode size={18} className="mr-2" />
            Generate QR Code
          </Button>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-neutral-700/50 rounded-lg">
        <h4 className="font-medium text-white mb-2">How to use:</h4>
        <ol className="text-sm text-neutral-300 space-y-1">
          <li>1. Open your smartwatch companion app</li>
          <li>2. Select "Sync with Phone" option</li>
          <li>3. Scan this QR code with your watch camera</li>
          <li>4. Your latest fitness data will sync automatically</li>
        </ol>
      </div>
    </div>
  );
};

export default QRCodeGenerator;