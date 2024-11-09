import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
            Have questions about Brand Matrix? We're here to help. Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-200">
                Name
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-primary-700 bg-primary-800/50 text-white placeholder-primary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-200">
                Email
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-primary-700 bg-primary-800/50 text-white placeholder-primary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-200">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-lg border border-primary-700 bg-primary-800/50 text-white placeholder-primary-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your message"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-primary-400" />
              <span className="ml-3 text-primary-200">support@brandmatrix.com</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-6 w-6 text-primary-400" />
              <span className="ml-3 text-primary-200">Live Chat Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;