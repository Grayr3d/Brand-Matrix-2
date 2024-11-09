import React from 'react';

interface ComponentCardProps {
  title: string;
  className: string;
  children: React.ReactNode;
  code: string;
  description: string;
  fullWidth?: boolean;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ 
  title, 
  className, 
  children, 
  code, 
  description,
  fullWidth = false 
}) => {
  return (
    <div className={`${fullWidth ? 'col-span-full' : ''} p-6 bg-primary-800/50 rounded-xl border border-primary-700 ${className}`}>
      <div className="mb-4">
        {children}
      </div>
      <code className="block text-sm text-primary-300/90 font-mono px-2 py-1 bg-primary-900/50 rounded mb-2">{code}</code>
      <p className="text-sm text-primary-200">{description}</p>
    </div>
  );
};

export default ComponentCard;