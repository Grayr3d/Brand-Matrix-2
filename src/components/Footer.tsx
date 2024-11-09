import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 mt-32">
      <div className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <Link to="/" className="text-2xl font-semibold text-white hover:text-accent-300 transition-colors">
              Brand Matrix
            </Link>
            <p className="mt-6 text-base text-primary-300/90 max-w-xs">
              Making brand management simple and effective.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-6">For brands</h3>
            <ul className="space-y-4">
              <li><Link to="/enterprise" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/pricing" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/examples" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Examples</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-6">For agencies</h3>
            <ul className="space-y-4">
              <li><Link to="/studio" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Brand Matrix Studio</Link></li>
              <li><Link to="/studio-pricing" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Studio Pricing</Link></li>
              <li><Link to="/ceo-letter" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">CEO letter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white mb-6">More Brand Matrix</h3>
            <ul className="space-y-4">
              <li><Link to="/terms" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Terms of service</Link></li>
              <li><Link to="/privacy" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Privacy policy</Link></li>
              <li><Link to="/security" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Security | ISO27001</Link></li>
              <li><Link to="/support" className="text-[15px] text-primary-300/90 hover:text-white transition-colors">Customer support</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-primary-800/50">
          <p className="text-[15px] text-primary-300/75">
            © {new Date().getFullYear()} Brand Matrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;