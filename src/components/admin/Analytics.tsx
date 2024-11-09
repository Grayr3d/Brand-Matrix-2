import React from 'react';
import { Users, FileUp, Download, Eye } from 'lucide-react';

const stats = [
  { 
    id: 1,
    label: 'Total Users',
    value: '2,543',
    change: '+12.5%',
    trend: 'up',
    icon: Users
  },
  {
    id: 2,
    label: 'Assets Uploaded',
    value: '1,259',
    change: '+23.1%',
    trend: 'up',
    icon: FileUp
  },
  {
    id: 3,
    label: 'Downloads',
    value: '4,832',
    change: '+18.7%',
    trend: 'up',
    icon: Download
  },
  {
    id: 4,
    label: 'Asset Views',
    value: '12.5K',
    change: '+32.4%',
    trend: 'up',
    icon: Eye
  }
];

const Analytics: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Analytics Overview</h1>
        <p className="text-primary-200 mt-1">Monitor your brand's performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-primary-800/50 rounded-xl border border-primary-700 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-lg bg-primary-700/50 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-accent-400" />
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                stat.trend === 'up'
                  ? 'bg-green-500/10 text-green-500'
                  : 'bg-red-500/10 text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mt-4">{stat.value}</h3>
            <p className="text-primary-200 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { user: 'John Doe', action: 'uploaded', item: 'Brand Guidelines v2.pdf', time: '2h ago' },
              { user: 'Jane Smith', action: 'downloaded', item: 'Logo Pack', time: '4h ago' },
              { user: 'Mike Johnson', action: 'viewed', item: 'Social Media Templates', time: '6h ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white font-semibold">
                    {activity.user[0]}
                  </div>
                  <div>
                    <p className="text-white">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
                      <span className="text-primary-200">{activity.item}</span>
                    </p>
                    <p className="text-sm text-primary-300">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Popular Assets</h2>
          <div className="space-y-4">
            {[
              { name: 'Brand Guidelines', downloads: '1.2K', views: '3.4K' },
              { name: 'Logo Package', downloads: '856', views: '2.1K' },
              { name: 'Social Media Kit', downloads: '654', views: '1.8K' },
            ].map((asset, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <span className="text-white font-medium">{asset.name}</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-primary-300" />
                    <span className="text-primary-200">{asset.downloads}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary-300" />
                    <span className="text-primary-200">{asset.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;