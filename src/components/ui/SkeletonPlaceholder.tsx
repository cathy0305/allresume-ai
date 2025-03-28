import React from 'react';

interface SkeletonPlaceholderProps {
  type: 'card' | 'text' | 'title' | 'button';
  lines?: number;
  width?: string;
  height?: string;
}

const SkeletonPlaceholder: React.FC<SkeletonPlaceholderProps> = ({ 
  type, 
  lines = 3,
  width,
  height
}) => {
  const renderPulse = (key: number, customWidth?: string, customHeight?: string) => (
    <div 
      key={key}
      className={`bg-gray-200 rounded animate-pulse ${customHeight || 'h-4'} ${customWidth || 'w-full'} mb-2`}
      style={{ 
        animationDelay: `${key * 0.1}s`,
        width: width || undefined,
        height: height || undefined
      }}
    ></div>
  );

  switch (type) {
    case 'title':
      return renderPulse(0, 'w-1/3', 'h-8');
    
    case 'text':
      return (
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, index) => (
            renderPulse(index, index === lines - 1 ? 'w-4/5' : 'w-full')
          ))}
        </div>
      );
    
    case 'button':
      return renderPulse(0, width || 'w-32', 'h-10');
    
    case 'card':
      return (
        <div className="border rounded-lg p-4 space-y-4">
          {renderPulse(0, 'w-3/4', 'h-6')}
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, index) => (
              renderPulse(index + 1)
            ))}
          </div>
          {renderPulse(4, 'w-1/2', 'h-10')}
        </div>
      );
    
    default:
      return null;
  }
};

export default SkeletonPlaceholder;