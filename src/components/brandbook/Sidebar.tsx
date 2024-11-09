import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, BookOpen, Palette, Type, Layout } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const getIconForSection = (id: string) => {
  switch (id) {
    case 'overview':
      return <BookOpen className="h-5 w-5" />;
    case 'colors':
      return <Palette className="h-5 w-5" />;
    case 'typography':
      return <Type className="h-5 w-5" />;
    case 'components':
      return <Layout className="h-5 w-5" />;
    default:
      return null;
  }
};

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection, onSectionClick }) => {
  const navigate = useNavigate();

  const handleVoiceConfigClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/brand-voice');
  };

  return (
    <aside className="fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] bg-primary-800/50 backdrop-blur-sm border-r border-primary-700 hidden lg:block">
      <div className="h-full flex flex-col">
        <div className="p-6 border-b border-primary-700">
          <h2 className="text-lg font-semibold text-white">Brand Guidelines</h2>
          <p className="text-sm text-primary-200 mt-1">Documentation & Resources</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => onSectionClick(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-primary-700/50 text-white'
                      : 'text-primary-200 hover:text-white hover:bg-primary-700/30'
                  }`}
                >
                  <span className={`transition-colors duration-200 ${
                    isActive ? 'text-accent-400' : 'text-primary-400 group-hover:text-accent-400'
                  }`}>
                    {getIconForSection(section.id)}
                  </span>
                  <span className="flex-1 text-left">{section.label}</span>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${
                    isActive ? 'rotate-90 text-accent-400' : 'text-primary-400 group-hover:text-accent-400'
                  }`} />
                </button>
              );
            })}
          </div>
        </nav>

        <div className="p-4 border-t border-primary-700">
          <button
            onClick={handleVoiceConfigClick}
            className="block w-full text-center px-4 py-2 rounded-lg bg-primary-700/30 text-primary-200 hover:text-white hover:bg-primary-700/50 transition-colors"
          >
            Open Voice Configurator
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;