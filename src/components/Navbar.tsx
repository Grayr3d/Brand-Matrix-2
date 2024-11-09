import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary-900/95 backdrop-blur-md shadow-lg shadow-primary-900/50' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between h-20 items-center">
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="text-2xl font-bold text-white hover:text-accent-300 transition-all duration-300 transform hover:scale-105"
          >
            Brand Matrix
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
            <Link to="/demo">
              <button className="btn-primary">
                Book Demo
              </button>
            </Link>
            <Link to="/login">
              <button className="btn-secondary">
                Sign In
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-200 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-800/95 backdrop-blur-md border-b border-primary-700">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-primary-200 hover:text-white hover:bg-primary-700/50 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link to="/demo" className="block" onClick={() => setIsOpen(false)}>
                <button className="w-full btn-primary">
                  Book Demo
                </button>
              </Link>
              <Link to="/login" className="block" onClick={() => setIsOpen(false)}>
                <button className="w-full btn-secondary">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;