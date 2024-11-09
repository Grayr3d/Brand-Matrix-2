import React, { createContext, useContext, useState, useCallback } from 'react';
import { toast } from 'sonner';

interface Project {
  id: number;
  name: string;
  description: string;
  updatedAt: string;
  status: 'active' | 'archived';
}

interface Workspace {
  id: number;
  name: string;
  description: string;
  members: number;
  projects: Project[];
  createdAt: string;
  settings: {
    color: string;
    icon: string;
    visibility: 'private' | 'public';
  };
}

interface WorkspaceContextType {
  workspaces: Workspace[];
  currentWorkspace: Workspace | null;
  setCurrentWorkspace: (workspace: Workspace) => void;
  createWorkspace: (data: { name: string; description: string }) => Promise<void>;
  updateWorkspace: (id: number, data: Partial<Workspace>) => Promise<void>;
  deleteWorkspace: (id: number) => Promise<void>;
  addProject: (workspaceId: number, project: Omit<Project, 'id'>) => Promise<void>;
  updateProject: (workspaceId: number, projectId: number, data: Partial<Project>) => Promise<void>;
  deleteProject: (workspaceId: number, projectId: number) => Promise<void>;
  inviteMember: (workspaceId: number, email: string, role: string) => Promise<void>;
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null);

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};

const mockWorkspaces: Workspace[] = [
  {
    id: 1,
    name: 'Marketing Team',
    description: 'Brand assets and guidelines for marketing campaigns',
    members: 8,
    projects: [
      {
        id: 1,
        name: 'Q1 Campaign',
        description: 'Brand assets for Q1 marketing campaign',
        updatedAt: '2h ago',
        status: 'active'
      }
    ],
    createdAt: '2 months ago',
    settings: {
      color: '#3B82F6',
      icon: 'marketing',
      visibility: 'private'
    }
  }
];

export const WorkspaceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>(mockWorkspaces);
  const [currentWorkspace, setCurrentWorkspace] = useState<Workspace | null>(mockWorkspaces[0]);

  const createWorkspace = useCallback(async (data: { name: string; description: string }) => {
    const newWorkspace: Workspace = {
      id: Date.now(),
      name: data.name,
      description: data.description,
      members: 1,
      projects: [],
      createdAt: 'Just now',
      settings: {
        color: '#3B82F6',
        icon: 'default',
        visibility: 'private'
      }
    };

    setWorkspaces(prev => [...prev, newWorkspace]);
    toast.success('Workspace created successfully');
  }, []);

  const updateWorkspace = useCallback(async (id: number, data: Partial<Workspace>) => {
    setWorkspaces(prev => prev.map(workspace => 
      workspace.id === id ? { ...workspace, ...data } : workspace
    ));
    toast.success('Workspace updated successfully');
  }, []);

  const deleteWorkspace = useCallback(async (id: number) => {
    setWorkspaces(prev => prev.filter(workspace => workspace.id !== id));
    if (currentWorkspace?.id === id) {
      setCurrentWorkspace(null);
    }
    toast.success('Workspace deleted successfully');
  }, [currentWorkspace]);

  const addProject = useCallback(async (workspaceId: number, projectData: Omit<Project, 'id'>) => {
    const newProject: Project = {
      id: Date.now(),
      ...projectData
    };

    setWorkspaces(prev => prev.map(workspace => 
      workspace.id === workspaceId
        ? { ...workspace, projects: [...workspace.projects, newProject] }
        : workspace
    ));
    toast.success('Project added successfully');
  }, []);

  const updateProject = useCallback(async (workspaceId: number, projectId: number, data: Partial<Project>) => {
    setWorkspaces(prev => prev.map(workspace => 
      workspace.id === workspaceId
        ? {
            ...workspace,
            projects: workspace.projects.map(project =>
              project.id === projectId ? { ...project, ...data } : project
            )
          }
        : workspace
    ));
    toast.success('Project updated successfully');
  }, []);

  const deleteProject = useCallback(async (workspaceId: number, projectId: number) => {
    setWorkspaces(prev => prev.map(workspace => 
      workspace.id === workspaceId
        ? {
            ...workspace,
            projects: workspace.projects.filter(project => project.id !== projectId)
          }
        : workspace
    ));
    toast.success('Project deleted successfully');
  }, []);

  const inviteMember = useCallback(async (workspaceId: number, email: string, role: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success(`Invitation sent to ${email}`);
  }, []);

  return (
    <WorkspaceContext.Provider value={{
      workspaces,
      currentWorkspace,
      setCurrentWorkspace,
      createWorkspace,
      updateWorkspace,
      deleteWorkspace,
      addProject,
      updateProject,
      deleteProject,
      inviteMember
    }}>
      {children}
    </WorkspaceContext.Provider>
  );
};