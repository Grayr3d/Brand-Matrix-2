import React, { useState } from 'react';
import { UserPlus, Mail, Search, Filter, MoreVertical } from 'lucide-react';
import { toast } from 'sonner';

interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Offline';
  lastActive: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@brandmatrix.com',
    role: 'Brand Manager',
    status: 'Active',
    lastActive: 'Now',
    avatar: 'JD'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    email: 'sarah@brandmatrix.com',
    role: 'Designer',
    status: 'Active',
    lastActive: '5m ago',
    avatar: 'SW'
  },
  {
    id: 3,
    name: 'Mike Brown',
    email: 'mike@brandmatrix.com',
    role: 'Content Creator',
    status: 'Offline',
    lastActive: '2h ago',
    avatar: 'MB'
  },
  {
    id: 4,
    name: 'Emma Davis',
    email: 'emma@brandmatrix.com',
    role: 'Marketing',
    status: 'Active',
    lastActive: 'Now',
    avatar: 'ED'
  }
];

const TeamPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('');

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || member.role.toLowerCase() === selectedRole.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Invitation sent to ${inviteEmail}`);
    setShowInviteModal(false);
    setInviteEmail('');
    setInviteRole('');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Team Members</h1>
            <p className="mt-2 text-lg text-primary-200">Manage your team and their access</p>
          </div>
          <button
            onClick={() => setShowInviteModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <UserPlus className="h-5 w-5" />
            Invite Member
          </button>
        </div>

        <div className="bg-primary-800/50 rounded-xl border border-primary-700 overflow-hidden">
          {/* Filters */}
          <div className="p-4 border-b border-primary-700 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-400" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-primary-700/50 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary-400" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="bg-primary-700/50 border border-primary-600 rounded-lg text-white px-3 py-2 focus:ring-2 focus:ring-accent-400/50 focus:border-accent-400"
              >
                <option value="all">All Roles</option>
                <option value="brand manager">Brand Manager</option>
                <option value="designer">Designer</option>
                <option value="content creator">Content Creator</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>
          </div>

          {/* Team List */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary-700">
                  <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Member</th>
                  <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Role</th>
                  <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Status</th>
                  <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Last Active</th>
                  <th className="text-left text-sm font-semibold text-primary-200 px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="border-b border-primary-700/50 last:border-0">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-white font-semibold">
                          {member.avatar}
                        </div>
                        <div>
                          <div className="text-white font-medium">{member.name}</div>
                          <div className="text-sm text-primary-300">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary-700/50 text-primary-200">
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          member.status === 'Active' ? 'bg-green-500' : 'bg-primary-400'
                        }`} />
                        <span className="text-primary-200">{member.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-primary-200">{member.lastActive}</td>
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

        {/* Invite Modal */}
        {showInviteModal && (
          <div className="fixed inset-0 bg-primary-900/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-primary-800 rounded-xl border border-primary-700 p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-white mb-4">Invite Team Member</h2>
              <form onSubmit={handleInvite} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="input-field"
                    placeholder="colleague@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role" className="form-label">Role</label>
                  <select
                    id="role"
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="input-field"
                    required
                  >
                    <option value="">Select a role</option>
                    <option value="brand_manager">Brand Manager</option>
                    <option value="designer">Designer</option>
                    <option value="content_creator">Content Creator</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowInviteModal(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Send Invitation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamPage;