import React from 'react';
import { Shield, Globe, Award } from 'lucide-react';

const stats = [
  { label: 'Brand Assets Managed', value: '10M+' },
  { label: 'Organizations', value: '2,000+' },
  { label: 'Countries', value: '80+' }
];

const About = () => {
  return (
    <section id="about" className="bg-primary-900/50 backdrop-blur-sm">
      <div className="container-custom">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2>
              Trusted by leading <span className="gradient-text">global brands</span>
            </h2>
            <p className="mt-6 text-lg text-primary-200">
              Since 2020, we've been helping organizations of all sizes manage and protect their brand assets. Our platform ensures brand consistency while enabling seamless collaboration across teams and regions.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="feature-card text-center">
                  <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm text-primary-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 lg:mt-0 space-y-8">
            <div className="feature-card flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-700/50">
                  <Shield className="feature-icon" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                <p className="text-primary-200">
                  Bank-grade security with SOC 2 Type II compliance and encrypted asset storage.
                </p>
              </div>
            </div>
            <div className="feature-card flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-700/50">
                  <Globe className="feature-icon" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Global Infrastructure</h3>
                <p className="text-primary-200">
                  CDN-powered delivery ensures fast access to assets worldwide.
                </p>
              </div>
            </div>
            <div className="feature-card flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-700/50">
                  <Award className="feature-icon" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">99.99% Uptime</h3>
                <p className="text-primary-200">
                  Enterprise-grade reliability with guaranteed SLAs for business continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;