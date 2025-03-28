import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium' }) => {
  // Size mapping
  const sizeMap = {
    small: 'h-6 w-6',
    medium: 'h-10 w-10',
    large: 'h-16 w-16',
  };

  return (
    <div className={`${sizeMap[size]} inline-block`}>
      <svg 
        className="animate-spin" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
        <path 
          fill="none" 
          stroke="#4F46E5" 
          strokeWidth="8" 
          strokeLinecap="round"
          d="M50 10 A 40 40 0 0 1 90 50"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;