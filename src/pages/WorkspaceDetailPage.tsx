import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, Settings, Users, Folder, MoreVertical, Archive, Edit, Trash2 } from 'lucide-react';
import { useWorkspace } from '../contexts/WorkspaceContext';
import { toast } from 'sonner';

const WorkspaceDetailPage: React.FC = () => {
  const { workspaceId } = useParams();
  const navigate = useNavigate();
  const { workspaces, updateWorkspace, deleteWorkspace, addProject } = useWorkspace();

  const workspace = workspaces.find(w => w.id === Number(workspaceId));
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: ''
  });

  if (!workspace) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Workspace not found</h1>
            <button
              onClick={() => navigate('/workspaces')}
              className="mt-4 btn-primary"
            >
              Back to Workspaces
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProject(workspace.id, {
      ...newProject,
      status: 'active',
      updatedAt: 'Just now'
    });
    setShowCreateProject(false);
    setNewProject({ name: '', description: '' });
  };

  const handleDeleteWorkspace = async () => {
    if (window.confirm('Are you sure you want to delete this workspace?')) {
      await deleteWorkspace(workspace.id);
      navigate('/workspaces');
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">{workspace.name}</h1>
            <p className="mt-2 text-lg text-primary-200">{workspace.description}</p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-400" />
                <span className="text-primary-200">{workspace.members} members</span>
              </div>
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-primary-400" />
                <span className="text-primary-200">{workspace.projects.length} projects</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSettings(true)}
              className="btn-secondary flex items-center gap-2"
            >
              <Settings className="h-5 w-5" />
              Settings
            </button>
            <button
              onClick={() => setShowCreateProject(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              New Project
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspace.projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary-800/50 rounded-xl border border-primary-700 p-6 hover:border-primary-600 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    {project.status === 'archived' && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary-700/50 text-primary-200">
                        Archived
                      </span>
                    )}
                  </div>
                  <p className="text-primary-200 text-sm">{project.description}</p>
                </div>
                <div className="relative">
                  <button
                    onClick={() => {}}
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-300">Updated {project.updatedAt}</span>
                  <button
                    onClick={() => navigate(`/workspaces/${workspace.id}/projects/${project.id}`)}
                    className="text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Project Modal */}
        {showCreateProject && (
          <div className="fixed inset-0 bg-primary-900/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-primary-800 rounded-xl border border-primary-700 p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-white mb-6">Create New Project</h2>
              <form onSubmit={handleCreateProject} className="space-y-4">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Project Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    className="input-field"
                    placeholder="e.g., Q2 Marketing Campaign"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    id="description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="input-field min-h-[100px]"
                    placeholder="Describe the project's purpose"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowCreateProject(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-primary flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-primary-900/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-primary-800 rounded-xl border border-primary-700 p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold text-white mb-6">Workspace Settings</h2>
              <div className="space-y-6">
                <button
                  onClick={() => {
                    setShowSettings(false);
                    toast.success('Workspace settings updated');
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-primary-200 hover:text-white hover:bg-primary-700/50 transition-colors"
                >
                  <Edit className="h-5 w-5" />
                  <span>Edit Workspace</span>
                </button>

                <button
                  onClick={() => {
                    setShowSettings(false);
                    toast.success('Workspace archived');
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-primary-200 hover:text-white hover:bg-primary-700/50 transition-colors"
                >
                  <Archive className="h-5 w-5" />
                  <span>Archive Workspace</span>
                </button>

                <button
                  onClick={() => {
                    setShowSettings(false);
                    handleDeleteWorkspace();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                  <span>Delete Workspace</span>
                </button>

                <div className="pt-4 border-t border-primary-700">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="w-full btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspaceDetailPage;