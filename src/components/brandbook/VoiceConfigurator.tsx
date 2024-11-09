import React, { useState } from 'react';
import { Save, Sliders } from 'lucide-react';
import { toast } from 'sonner';

interface VoiceTrait {
  name: string;
  value: number;
  description: {
    low: string;
    high: string;
  };
}

const VoiceConfigurator: React.FC = () => {
  const [traits, setTraits] = useState<VoiceTrait[]>([
    {
      name: 'Professional',
      value: 75,
      description: {
        low: 'Casual and relaxed',
        high: 'Formal and structured'
      }
    },
    {
      name: 'Approachable',
      value: 70,
      description: {
        low: 'Direct and straightforward',
        high: 'Warm and inviting'
      }
    },
    {
      name: 'Confident',
      value: 80,
      description: {
        low: 'Modest and understated',
        high: 'Bold and assertive'
      }
    },
    {
      name: 'Technical',
      value: 60,
      description: {
        low: 'Simple and clear',
        high: 'Detailed and specific'
      }
    }
  ]);

  const handleChange = (index: number, value: number) => {
    const newTraits = [...traits];
    newTraits[index].value = value;
    setTraits(newTraits);
  };

  const handleSave = () => {
    // Simulate saving to an API
    toast.success('Brand voice updated successfully');
  };

  return (
    <div className="bg-primary-800/50 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-primary-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white">Voice & Tone Configurator</h3>
          <p className="text-primary-200 mt-1">Adjust the sliders to fine-tune your brand's voice</p>
        </div>
        <button
          onClick={handleSave}
          className="btn-primary flex items-center gap-2"
        >
          <Save className="h-4 w-4" />
          Save Changes
        </button>
      </div>

      <div className="space-y-8">
        {traits.map((trait, index) => (
          <div key={trait.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-white font-medium">{trait.name}</label>
              <span className="text-primary-300 text-sm">{trait.value}%</span>
            </div>
            
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={trait.value}
                onChange={(e) => handleChange(index, parseInt(e.target.value))}
                className="w-full h-2 bg-primary-700 rounded-lg appearance-none cursor-pointer
                         [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
                         [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-accent-400 
                         [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer
                         [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-150
                         [&::-webkit-slider-thumb]:hover:bg-accent-300
                         [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4
                         [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:bg-accent-400
                         [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full
                         [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:transition-all
                         [&::-moz-range-thumb]:duration-150 [&::-moz-range-thumb]:hover:bg-accent-300"
              />
              <div className="flex justify-between mt-1 text-xs text-primary-300">
                <span>{trait.description.low}</span>
                <span>{trait.description.high}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-primary-700/30 rounded-lg">
        <div className="flex items-start gap-3">
          <Sliders className="h-5 w-5 text-primary-300 mt-0.5" />
          <div>
            <p className="text-sm text-primary-200">
              These settings influence how your brand communicates across all channels. 
              The configurator helps maintain consistency in your brand's voice while 
              allowing for contextual adjustments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceConfigurator;