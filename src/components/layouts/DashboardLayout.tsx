import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Palette,
  FolderOpen
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={24} />, label: 'Dashboard' },
    { path: '/dashboard/assets', icon: <FolderOpen size={24} />, label: 'Brand Assets' },
    { path: '/dashboard/brand-voice', icon: <FileText size={24} />, label: 'Brand Voice' },
    { path: '/dashboard/brand-book', icon: <Palette size={24} />, label: 'Brand Book' },
    { path: '/dashboard/team', icon: <Users size={24} />, label: 'Team' },
    { path: '/dashboard/settings', icon: <Settings size={24} />, label: 'Settings' }
  ];

  return (
    <div className="flex h-screen bg-primary-900">
      {/* Sidebar */}
      <aside
        className={`bg-primary-800/95 backdrop-blur-md border-r border-primary-700 transition-all duration-300 ${
          isSidebarMinimized ? 'w-20' : 'w-64'
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-primary-700">
          <span className={`text-2xl font-bold text-white transition-all duration-300 ${
            isSidebarMinimized ? 'text-center text-xl' : ''
          }`}>
            {isSidebarMinimized ? 'BM' : 'Brand Matrix'}
          </span>
          <button
            onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
            className="text-primary-200 hover:text-white transition-colors p-2 rounded-lg hover:bg-primary-700/50"
          >
            {isSidebarMinimized ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-primary-700/50 text-white'
                  : 'text-primary-200 hover:bg-primary-700/30 hover:text-white'
              }`}
            >
              {item.icon}
              {!isSidebarMinimized && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;