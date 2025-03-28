import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
  selected?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
  selected = false,
  padding = 'medium'
}) => {
  const paddingClasses = {
    none: '',
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6'
  };

  return (
    <div 
      className={`
        bg-white rounded-lg border shadow-sm 
        ${hover && !onClick ? 'hover:shadow-md transition-shadow' : ''} 
        ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''} 
        ${selected ? 'ring-2 ring-blue-500' : ''} 
        ${paddingClasses[padding]}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;