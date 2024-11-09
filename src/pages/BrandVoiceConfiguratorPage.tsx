import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Sliders, Sparkles, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

interface VoiceTrait {
  name: string;
  value: number;
  selected: boolean;
  description: {
    low: string;
    high: string;
  };
}

const BrandVoiceConfiguratorPage: React.FC = () => {
  const navigate = useNavigate();
  const [businessDescription, setBusinessDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [traits, setTraits] = useState<VoiceTrait[]>([
    {
      name: 'Professional',
      value: 75,
      selected: true,
      description: {
        low: 'Casual and relaxed',
        high: 'Formal and structured'
      }
    },
    {
      name: 'Approachable',
      value: 70,
      selected: true,
      description: {
        low: 'Direct and straightforward',
        high: 'Warm and inviting'
      }
    },
    {
      name: 'Confident',
      value: 80,
      selected: true,
      description: {
        low: 'Modest and understated',
        high: 'Bold and assertive'
      }
    },
    {
      name: 'Technical',
      value: 60,
      selected: true,
      description: {
        low: 'Simple and clear',
        high: 'Detailed and specific'
      }
    },
    {
      name: 'Innovative',
      value: 85,
      selected: false,
      description: {
        low: 'Traditional and proven',
        high: 'Cutting-edge and novel'
      }
    },
    {
      name: 'Playful',
      value: 40,
      selected: false,
      description: {
        low: 'Serious and focused',
        high: 'Fun and energetic'
      }
    },
    {
      name: 'Authoritative',
      value: 65,
      selected: false,
      description: {
        low: 'Collaborative and equal',
        high: 'Expert and leading'
      }
    },
    {
      name: 'Empathetic',
      value: 75,
      selected: false,
      description: {
        low: 'Objective and neutral',
        high: 'Understanding and caring'
      }
    }
  ]);

  const analyzeDescription = () => {
    if (businessDescription.length < 50) {
      toast.error('Please provide a more detailed description (at least 50 characters)');
      return;
    }

    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      const newSuggestions = [
        "Based on your industry focus, consider increasing the 'Technical' trait to better reflect your expertise",
        "Your target audience would resonate well with a more 'Empathetic' tone",
        "Consider balancing 'Professional' with 'Approachable' to maintain authority while being accessible",
        "Your innovative approach suggests you could benefit from a higher 'Confident' setting"
      ];
      setSuggestions(newSuggestions);
      setIsAnalyzing(false);
      toast.success('Analysis complete! Review the suggestions below.');
    }, 2000);
  };

  const handleTraitToggle = (index: number) => {
    const selectedCount = traits.filter(t => t.selected).length;
    const trait = traits[index];

    if (trait.selected || selectedCount < 4) {
      const newTraits = [...traits];
      newTraits[index].selected = !newTraits[index].selected;
      setTraits(newTraits);
    } else {
      toast.error('You can only select up to 4 voice traits');
    }
  };

  const handleSave = () => {
    toast.success('Brand voice settings saved successfully');
  };

  return (
    <div className="min-h-screen pt-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Brand Voice Configurator</h1>
          <p className="text-xl text-primary-200">Define and refine your brand's voice and tone</p>
        </div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
          {/* Analysis Section */}
          <div className="space-y-6">
            <div className="bg-primary-800/50 rounded-xl p-6 backdrop-blur-sm border border-primary-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent-400" />
                AI Brand Analysis
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-primary-200 mb-2">
                    Describe your business and target audience
                  </label>
                  <textarea
                    value={businessDescription}
                    onChange={(e) => setBusinessDescription(e.target.value)}
                    placeholder="Tell us about your business, values, target audience, and goals. The more detail you provide, the better our AI can help define your brand voice."
                    className="w-full h-48 bg-primary-700/50 border border-primary-600 rounded-lg p-3 text-white placeholder-primary-400 resize-none focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400"
                  />
                </div>
                <button
                  onClick={analyzeDescription}
                  disabled={isAnalyzing}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {isAnalyzing ? (
                    <>Analyzing...</>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Analyze Brand Identity
                    </>
                  )}
                </button>
              </div>

              {suggestions.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h4 className="text-white font-medium">AI Suggestions:</h4>
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 text-sm text-primary-200 p-2 rounded bg-primary-700/30"
                    >
                      <AlertCircle className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                      <p>{suggestion}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-primary-800/50 rounded-xl p-6 backdrop-blur-sm border border-primary-700">
              <div className="flex items-center gap-2 text-primary-200 mb-4">
                <Sliders className="h-5 w-5" />
                <h3 className="text-lg font-semibold text-white">Quick Tips</h3>
              </div>
              <ul className="space-y-3 text-sm text-primary-200">
                <li>• Select up to 4 voice traits that best represent your brand</li>
                <li>• Adjust the sliders to fine-tune each trait's intensity</li>
                <li>• Consider your target audience when making selections</li>
                <li>• Aim for a balanced, authentic voice that resonates with your audience</li>
              </ul>
            </div>
          </div>

          {/* Configuration Section */}
          <div className="space-y-8">
            <div className="bg-primary-800/50 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-primary-700">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">Voice Traits</h3>
                  <p className="text-primary-200 mt-1">Select up to 4 traits that define your brand's voice</p>
                </div>
                <button
                  onClick={handleSave}
                  className="btn-primary flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {traits.map((trait, index) => (
                  <button
                    key={trait.name}
                    onClick={() => handleTraitToggle(index)}
                    className={`p-3 rounded-lg border transition-all ${
                      trait.selected
                        ? 'bg-primary-700/50 border-accent-400 text-white'
                        : 'bg-primary-800/30 border-primary-700 text-primary-300 hover:border-primary-600'
                    }`}
                  >
                    {trait.name}
                  </button>
                ))}
              </div>

              <div className="space-y-8">
                {traits.filter(t => t.selected).map((trait) => (
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
                        onChange={(e) => {
                          const newTraits = [...traits];
                          const traitIndex = traits.findIndex(t => t.name === trait.name);
                          newTraits[traitIndex].value = parseInt(e.target.value);
                          setTraits(newTraits);
                        }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVoiceConfiguratorPage;