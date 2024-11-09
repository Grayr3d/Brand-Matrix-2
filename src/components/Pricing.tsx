import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Startup',
    price: '$29',
    description: 'Perfect for small teams and growing brands',
    features: [
      'Up to 10 team members',
      '50GB storage',
      'Basic asset management',
      'Version control',
      'Standard support',
      'Basic analytics'
    ]
  },
  {
    name: 'Business',
    price: '$99',
    description: 'For established brands and larger teams',
    features: [
      'Up to 50 team members',
      '500GB storage',
      'Advanced asset management',
      'Version control & history',
      'Priority support',
      'Custom domains',
      'API access',
      'Advanced analytics'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For global brands with complex needs',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Enterprise-grade security',
      'Advanced version control',
      '24/7 dedicated support',
      'Custom integration',
      'Advanced permissions',
      'SLA guarantee',
      'Dedicated success manager'
    ]
  }
];

const Pricing = () => {
  return (
    <div id="pricing" className="py-24 bg-primary-900">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-primary-200">
            Choose the perfect plan for your brand's needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl flex flex-col ${
                plan.popular
                  ? 'bg-primary-800/50 border-2 border-primary-600 scale-105'
                  : 'bg-primary-800/30 border border-primary-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="ml-1 text-primary-200">/month</span>}
                </div>
                <p className="mt-4 text-primary-200">{plan.description}</p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                      <span className="text-primary-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                {plan.price === 'Custom' ? (
                  <Link to="/demo" className="block">
                    <button className="w-full btn-secondary">
                      Contact Sales
                    </button>
                  </Link>
                ) : (
                  <Link to="/trial" className="block">
                    <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                      Start Free Trial
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;