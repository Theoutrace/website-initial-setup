import React from 'react';
import { cn } from '@/lib/utils';

const LoadingSpinner = ({ 
  size = 'default', 
  className, 
  text,
  fullScreen = false 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const spinner = (
    <div className={cn(
      "animate-spin rounded-full border-2 border-muted border-t-primary",
      sizeClasses[size],
      className
    )} />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="flex flex-col items-center space-y-4">
          {spinner}
          {text && (
            <p className="text-sm text-muted-foreground animate-pulse">
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (text) {
    return (
      <div className="flex flex-col items-center space-y-2">
        {spinner}
        <p className="text-sm text-muted-foreground">
          {text}
        </p>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
