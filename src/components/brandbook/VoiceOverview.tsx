import React from 'react';
import { AlertCircle, CheckCircle, MessageSquare, Zap } from 'lucide-react';

interface VoiceTraitProps {
  name: string;
  level: number;
  description: string;
  examples: {
    do: string;
    dont: string;
  };
}

const VoiceTrait: React.FC<VoiceTraitProps> = ({ name, level, description, examples }) => {
  return (
    <div className="bg-primary-800/30 rounded-xl p-6 border border-primary-700 hover:border-primary-600 transition-all">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-medium text-white">{name}</h4>
        <div className="flex items-center gap-2">
          <div className="w-16 h-2 bg-primary-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent-400 transition-all duration-500"
              style={{ width: `${level}%` }}
            />
          </div>
          <span className="text-sm text-primary-300">{level}%</span>
        </div>
      </div>
      <p className="text-primary-200 mb-4">{description}</p>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
          <div>
            <p className="text-sm text-white">{examples.do}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
          <div>
            <p className="text-sm text-white">{examples.dont}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const VoiceOverview: React.FC = () => {
  const voiceTraits = [
    {
      name: 'Professional',
      level: 75,
      description: 'Our communication maintains a professional tone while remaining accessible. We use industry-standard terminology appropriately but avoid unnecessary jargon.',
      examples: {
        do: 'Our enterprise-grade security ensures your brand assets are protected.',
        dont: 'Our super-secure system keeps your stuff safe.'
      }
    },
    {
      name: 'Clear',
      level: 80,
      description: 'We prioritize clarity and directness in all communications. Complex ideas are broken down into digestible pieces without oversimplifying.',
      examples: {
        do: 'Upload your brand assets and share them with your team in three steps.',
        dont: 'Utilize our comprehensive asset management solution to facilitate team collaboration.'
      }
    },
    {
      name: 'Approachable',
      level: 70,
      description: 'While maintaining professionalism, our tone is warm and welcoming. We want users to feel supported and encouraged.',
      examples: {
        do: 'Need help getting started? Our team is here to guide you through each step.',
        dont: 'Contact technical support if you experience difficulties.'
      }
    },
    {
      name: 'Confident',
      level: 80,
      description: 'We speak with authority and conviction about our platform's capabilities, backed by expertise and proven results.',
      examples: {
        do: 'Join over 2,000 leading brands who trust Brand Matrix for their brand management.',
        dont: 'We think our platform might help with your brand management needs.'
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-primary-800/50 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-primary-700">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="h-6 w-6 text-accent-400" />
          <h3 className="text-xl font-semibold text-white">Voice Characteristics</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {voiceTraits.map((trait, index) => (
            <VoiceTrait key={index} {...trait} />
          ))}
        </div>
      </div>

      <div className="bg-primary-800/50 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-primary-700">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="h-6 w-6 text-accent-400" />
          <h3 className="text-xl font-semibold text-white">Writing Principles</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-primary-800/30 rounded-lg border border-primary-700">
            <h4 className="text-lg font-medium text-white mb-2">Active Voice</h4>
            <p className="text-primary-200">Use active voice to make our communication more direct and engaging.</p>
          </div>
          <div className="p-4 bg-primary-800/30 rounded-lg border border-primary-700">
            <h4 className="text-lg font-medium text-white mb-2">Concise Language</h4>
            <p className="text-primary-200">Keep messages clear and concise. Remove unnecessary words.</p>
          </div>
          <div className="p-4 bg-primary-800/30 rounded-lg border border-primary-700">
            <h4 className="text-lg font-medium text-white mb-2">Positive Framing</h4>
            <p className="text-primary-200">Focus on what users can do rather than limitations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceOverview;