import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, BookOpen, Palette, Type, Layout } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

interface MobileSectionsProps {
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

const MobileSections: React.FC<MobileSectionsProps> = ({ sections, activeSection, onSectionClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  const handleVoiceConfigClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/brand-voice');
  };

  return (
    <div className="lg:hidden relative z-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors px-4 py-2 rounded-lg bg-primary-800/50 border border-primary-700 hover:border-primary-600 w-full"
      >
        <Menu className="h-5 w-5" />
        <span className="flex-1 text-left">
          {sections.find(s => s.id === activeSection)?.label || 'Sections'}
        </span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-primary-900/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-primary-800 rounded-lg border border-primary-700 shadow-lg">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                    isActive
                      ? 'bg-primary-700/50 text-white'
                      : 'text-primary-200 hover:text-white hover:bg-primary-700/30'
                  }`}
                >
                  <span className={isActive ? 'text-accent-400' : 'text-primary-400'}>
                    {getIconForSection(section.id)}
                  </span>
                  {section.label}
                </button>
              );
            })}
            <div className="mt-2 pt-2 border-t border-primary-700 px-2">
              <button
                onClick={handleVoiceConfigClick}
                className="block w-full text-center px-4 py-2 rounded-lg bg-primary-700/30 text-primary-200 hover:text-white hover:bg-primary-700/50 transition-colors"
              >
                Open Voice Configurator
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileSections;