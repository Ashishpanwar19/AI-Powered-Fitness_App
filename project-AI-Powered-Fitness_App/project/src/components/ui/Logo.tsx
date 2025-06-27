import React from 'react';
import { Activity } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'currentColor' }) => {
  return (
    <div className="relative">
      <Activity 
        size={28} 
        strokeWidth={2.5} 
        className={color === 'white' ? 'text-white' : 'text-primary-600'} 
      />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-500"></span>
      </span>
    </div>
  );
};

export default Logo;