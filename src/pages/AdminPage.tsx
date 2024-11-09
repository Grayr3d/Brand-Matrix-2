import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, Settings, BarChart3, Bell, Search } from 'lucide-react';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminHeader from '../components/admin/AdminHeader';
import UserManagement from '../components/admin/UserManagement';
import BrandAssets from '../components/admin/BrandAssets';
import SystemSettings from '../components/admin/SystemSettings';
import Analytics from '../components/admin/Analytics';

type AdminSection = 'users' | 'assets' | 'settings' | 'analytics';

const AdminPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('users');
  const navigate = useNavigate();

  const renderSection = () => {
    switch (activeSection) {
      case 'users':
        return <UserManagement />;
      case 'assets':
        return <BrandAssets />;
      case 'settings':
        return <SystemSettings />;
      case 'analytics':
        return <Analytics />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-primary-900">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <main className="flex-1 p-8 ml-64 mt-20">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;