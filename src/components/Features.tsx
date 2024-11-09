import React from 'react';
import { FileSearch, Share2, History, Globe } from 'lucide-react';

const features = [
  {
    icon: <FileSearch className="feature-icon" />,
    title: 'Smart Asset Management',
    description: 'Organize and find your brand assets instantly with AI-powered search and intelligent tagging.'
  },
  {
    icon: <Share2 className="feature-icon" />,
    title: 'Easy Sharing',
    description: 'Share brand assets securely with customizable access levels and expiring links.'
  },
  {
    icon: <History className="feature-icon" />,
    title: 'Version Control',
    description: 'Track changes, manage versions, and ensure everyone uses the latest brand assets.'
  },
  {
    icon: <Globe className="feature-icon" />,
    title: 'Global Access',
    description: 'Access your brand hub from anywhere, with cloud-based storage and real-time updates.'
  }
];

const Features = () => {
  return (
    <section id="features" className="bg-primary-900/50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="section-title">
          <h2>Everything your brand needs</h2>
          <p className="section-description">
            Powerful tools to maintain brand consistency and streamline asset management across your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="group h-full">
              <div className="feature-card h-full group-hover:scale-[1.02] transition-transform flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-700/50 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-200 flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;