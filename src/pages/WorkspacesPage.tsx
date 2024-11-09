import React, { useState } from 'react';
import { Plus, Settings, Users, Folder, MoreVertical } from 'lucide-react';
import { toast } from 'sonner';

interface Workspace {
  id: number;
  name: string;
  description: string;
  members: number;
  projects: number;
  createdAt: string;
}

const workspaces: Workspace[] = [
  {
    id: 1,
    name: 'Marketing Team',
    description: 'Brand assets and guidelines for marketing campaigns',
    members: 8,
    projects: 12,
    createdAt: '2 months ago'
  },
  {
    id: 2,
    name: 'Design Team',
    description: 'Design system and UI components',
    members: 5,
    projects: 7,
    createdAt: '1 month ago'
  },
  {
    id: 3,
    name: 'Product Team',
    description: 'Product branding and assets',
    members: 10,
    projects: 15,
    createdAt: '3 weeks ago'
  }
];

const WorkspacesPage: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newWorkspace, setNewWorkspace] = useState({
    name: '',
    description: ''
  });

  const handleCreateWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Workspace created successfully');
    setShowCreateModal(false);
    setNewWorkspace({ name: '', description: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Workspaces</h1>
            <p className="mt-2 text-lg text-primary-200">Manage your brand workspaces and teams</p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Create Workspace
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="bg-primary-800/50 rounded-xl border border-primary-700 p-6 hover:border-primary-600 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{workspace.name}</h3>
                  <p className="text-primary-200 text-sm mb-4">{workspace.description}</p>
                </div>
                <button className="text-primary-200 hover:text-white transition-colors">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-primary-700">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary-400" />
                  <span className="text-primary-200">{workspace.members} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Folder className="h-5 w-5 text-primary-400" />
                  <span className="text-primary-200">{workspace.projects} projects</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-primary-300">Created {workspace.createdAt}</span>
                <button className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Workspace Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-primary-900/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-primary-800 rounded-xl border border-primary-700 p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Create New Workspace</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  <Settings className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleCreateWorkspace} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Workspace Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newWorkspace.name}
                    onChange={(e) => setNewWorkspace({ ...newWorkspace, name: e.target.value })}
                    className="input-field"
                    placeholder="e.g., Marketing Team"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    id="description"
                    value={newWorkspace.description}
                    onChange={(e) => setNewWorkspace({ ...newWorkspace, description: e.target.value })}
                    className="input-field min-h-[100px]"
                    placeholder="Describe the purpose of this workspace"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Workspace
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

export default WorkspacesPage;