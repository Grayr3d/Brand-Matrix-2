import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Settings, Upload, FolderOpen, Clock } from 'lucide-react';

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const recentProjects = [
    { id: 1, name: 'Brand Guidelines 2024', updatedAt: '2h ago' },
    { id: 2, name: 'Social Media Kit', updatedAt: '1d ago' },
    { id: 3, name: 'Website Assets', updatedAt: '3d ago' },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name}</h1>
          <p className="mt-2 text-primary-200">Manage your brand assets and guidelines</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <button className="p-6 bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700 hover:border-primary-600 transition-all group hover-card">
            <Upload className="h-6 w-6 text-primary-200 group-hover:text-primary-100 mb-4" />
            <h3 className="text-lg font-semibold text-white">Upload Assets</h3>
            <p className="mt-2 text-primary-200">Add new brand assets to your library</p>
          </button>

          <button className="p-6 bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700 hover:border-primary-600 transition-all group hover-card">
            <FolderOpen className="h-6 w-6 text-primary-200 group-hover:text-primary-100 mb-4" />
            <h3 className="text-lg font-semibold text-white">View Library</h3>
            <p className="mt-2 text-primary-200">Browse all your brand assets</p>
          </button>

          <button className="p-6 bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700 hover:border-primary-600 transition-all group hover-card">
            <Settings className="h-6 w-6 text-primary-200 group-hover:text-primary-100 mb-4" />
            <h3 className="text-lg font-semibold text-white">Settings</h3>
            <p className="mt-2 text-primary-200">Manage your account settings</p>
          </button>

          <button className="p-6 bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700 hover:border-primary-600 transition-all group hover-card">
            <Clock className="h-6 w-6 text-primary-200 group-hover:text-primary-100 mb-4" />
            <h3 className="text-lg font-semibold text-white">Activity</h3>
            <p className="mt-2 text-primary-200">View recent changes and updates</p>
          </button>
        </div>

        <div className="bg-primary-800/50 backdrop-blur-sm rounded-lg border border-primary-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Projects</h2>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 bg-primary-900/50 rounded-lg hover:bg-primary-700/50 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="text-white font-medium">{project.name}</h3>
                  <p className="text-sm text-primary-300">{project.updatedAt}</p>
                </div>
                <button className="text-primary-200 hover:text-white transition-colors">
                  <FolderOpen className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;