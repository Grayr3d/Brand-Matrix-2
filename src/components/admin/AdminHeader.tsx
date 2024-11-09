import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 right-0 left-64 h-20 bg-primary-800 border-b border-primary-700 z-30">
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-primary-700/50 border border-primary-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-primary-400 focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="relative text-primary-200 hover:text-white transition-colors">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white font-semibold">
              {user?.name?.[0].toUpperCase()}
            </div>
            <div className="text-sm">
              <p className="text-white font-medium">{user?.name}</p>
              <p className="text-primary-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;