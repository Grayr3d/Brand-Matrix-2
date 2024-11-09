import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Settings, Users, Clock, ArrowLeft, MoreVertical } from 'lucide-react';
import { useWorkspace } from '../contexts/WorkspaceContext';

const ProjectPage: React.FC = () => {
  const { workspaceId, projectId } = useParams();
  const navigate = useNavigate();
  const { workspaces } = useWorkspace();

  const workspace = workspaces.find(w => w.id === Number(workspaceId));
  const project = workspace?.projects.find(p => p.id === Number(projectId));

  if (!workspace || !project) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Project not found</h1>
            <button
              onClick={() => navigate(`/workspaces/${workspaceId}`)}
              className="mt-4 btn-primary"
            >
              Back to Workspace
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(`/workspaces/${workspaceId}`)}
            className="text-primary-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-white">{project.name}</h1>
            <p className="mt-2 text-lg text-primary-200">{project.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] gap-8">
          <div className="space-y-8">
            {/* Project Content */}
            <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Project Overview</h2>
              <p className="text-primary-200">
                This is where the project content will go. You can add components for:
                - Task management
                - File uploads
                - Comments and discussions
                - Progress tracking
              </p>
            </div>

            {/* Activity Feed */}
            <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { user: 'John Doe', action: 'updated the project description', time: '2h ago' },
                  { user: 'Jane Smith', action: 'uploaded new files', time: '4h ago' },
                  { user: 'Mike Johnson', action: 'commented on a task', time: '1d ago' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white font-semibold">
                      {activity.user[0]}
                    </div>
                    <div>
                      <p className="text-white">
                        <span className="font-medium">{activity.user}</span>
                        {' '}{activity.action}
                      </p>
                      <p className="text-sm text-primary-300">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary-400" />
                    <span className="text-primary-200">Last updated</span>
                  </div>
                  <span className="text-white">{project.updatedAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary-400" />
                    <span className="text-primary-200">Team members</span>
                  </div>
                  <span className="text-white">5</span>
                </div>
              </div>
              <button className="w-full btn-secondary mt-4">
                View All Details
              </button>
            </div>

            <div className="bg-primary-800/50 rounded-xl border border-primary-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Team Members</h3>
              <div className="space-y-3">
                {[
                  { name: 'John Doe', role: 'Project Lead' },
                  { name: 'Jane Smith', role: 'Designer' },
                  { name: 'Mike Johnson', role: 'Developer' },
                ].map((member, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center text-white font-semibold">
                        {member.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-sm text-primary-300">{member.role}</p>
                      </div>
                    </div>
                    <button className="text-primary-200 hover:text-white transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full btn-secondary mt-4">
                Manage Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;