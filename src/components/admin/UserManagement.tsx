import React from 'react';
import { MoreVertical, UserPlus } from 'lucide-react';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Viewer', status: 'Inactive' },
  // Add more mock users as needed
];

const UserManagement: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">User Management</h1>
          <p className="text-primary-200 mt-1">Manage user access and permissions</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Add User
        </button>
      </div>

      <div className="bg-primary-800/50 rounded-xl border border-primary-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-700">
                <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Name</th>
                <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Email</th>
                <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Role</th>
                <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Status</th>
                <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-primary-700/50 last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white font-semibold">
                        {user.name[0]}
                      </div>
                      <span className="text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-primary-200">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-700/50 text-primary-200">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary-200 hover:text-white transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;