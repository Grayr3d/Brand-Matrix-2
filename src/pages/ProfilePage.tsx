import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, Lock, Bell, Shield, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      toast.success('Profile updated successfully');
      setIsEditing(false);
    }, 1000);
  };

  const notificationPreferences = [
    {
      key: 'asset_updates',
      label: 'Asset Updates',
      description: 'Get notified when assets are added or updated'
    },
    {
      key: 'team_activity',
      label: 'Team Activity',
      description: "Get notified about your team members' actions"
    },
    {
      key: 'security_alerts',
      label: 'Security Alerts',
      description: 'Receive alerts about security-related events'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
          <p className="mt-2 text-primary-200">Manage your account preferences and settings</p>
        </div>

        <div className="space-y-8">
          {/* Profile Information */}
          <div className="bg-primary-800/50 rounded-xl p-6 backdrop-blur-sm border border-primary-700">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center text-white text-2xl font-semibold">
                  {user?.name?.[0].toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{user?.name}</h2>
                  <p className="text-primary-200">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn-secondary"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {isEditing && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Notification Preferences */}
          <div className="bg-primary-800/50 rounded-xl p-6 backdrop-blur-sm border border-primary-700">
            <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
            <div className="space-y-4">
              {notificationPreferences.map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">{item.label}</h3>
                    <p className="text-sm text-primary-200">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-primary-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-400/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-500"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-primary-800/50 rounded-xl p-6 backdrop-blur-sm border border-primary-700">
            <h2 className="text-xl font-semibold text-white mb-6">Security Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-primary-200">Add an extra layer of security to your account</p>
                </div>
                <button className="btn-secondary">Enable</button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">Login History</h3>
                  <p className="text-sm text-primary-200">View your recent login activity</p>
                </div>
                <button className="btn-secondary">View History</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;