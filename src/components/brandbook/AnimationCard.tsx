import React from 'react';

interface AnimationCardProps {
  name: string;
  className: string;
  description: string;
  code: string;
}

const AnimationCard: React.FC<AnimationCardProps> = ({ name, className, description, code }) => {
  return (
    <div className="p-6 bg-primary-800/50 rounded-xl border border-primary-700 hover:border-primary-600 transition-all">
      <p className={`text-2xl text-white mb-3 ${className}`}>{name}</p>
      <div className="flex flex-col gap-2">
        <code className="text-sm text-primary-300/90 font-mono px-2 py-1 bg-primary-900/50 rounded">{code}</code>
        <p className="text-sm text-primary-200">{description}</p>
      </div>
    </div>
  );
};

export default AnimationCard;