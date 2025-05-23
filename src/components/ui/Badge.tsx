import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md';
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
}) => {
  const baseStyle = 'inline-flex items-center rounded-full font-medium';
  
  const variants = {
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    secondary: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    neutral: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  };
  
  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
  };
  
  return (
    <span className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
};

export default Badge;