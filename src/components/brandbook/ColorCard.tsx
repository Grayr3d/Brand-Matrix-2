import React from 'react';

interface ColorCardProps {
  bg: string;
  name: string;
  hex: string;
  use: string;
  className?: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ bg, name, hex, use, className = '' }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-6 bg-primary-800/50 rounded-xl border border-primary-700 ${className}`}>
      <button 
        onClick={copyToClipboard}
        className="w-full group relative"
      >
        <div className={`h-24 lg:h-32 ${bg} rounded-lg mb-4 transition-transform group-hover:scale-[1.02]`}>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-primary-900/80 text-white px-3 py-1 rounded-md text-sm">
              {copied ? 'Copied!' : 'Click to copy'}
            </span>
          </div>
        </div>
      </button>
      <p className="text-sm font-medium text-white">{name}</p>
      <p className="text-sm text-primary-300/90 font-mono mt-1">{hex}</p>
      <p className="text-sm text-primary-200 mt-2">{use}</p>
    </div>
  );
};

export default ColorCard;