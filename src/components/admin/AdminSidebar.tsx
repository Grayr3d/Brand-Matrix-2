// Update brand name in AdminSidebar component
import React from 'react';
// ... rest of the imports remain the same

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-primary-800 border-r border-primary-700">
      <div className="h-20 flex items-center px-6 border-b border-primary-700">
        <Link to="/" className="text-xl font-bold text-white hover:text-accent-300 transition-colors">
          Brand Matrix
        </Link>
      </div>

      {/* ... rest of the component remains the same */}
    </aside>
  );
};

export default AdminSidebar;