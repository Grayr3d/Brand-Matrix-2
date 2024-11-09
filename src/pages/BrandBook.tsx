import React, { useRef } from 'react';
import { AlertCircle, ArrowRight, CheckCircle, ChevronRight, Star, MessageSquare, Layout } from 'lucide-react';
import Sidebar from '../components/brandbook/Sidebar';
import MobileSections from '../components/brandbook/MobileSections';
import ColorCard from '../components/brandbook/ColorCard';
import AnimationCard from '../components/brandbook/AnimationCard';
import ComponentCard from '../components/brandbook/ComponentCard';

const sections = [
  { id: 'overview', label: 'Brand Overview' },
  { id: 'voice', label: 'Brand Voice' },
  { id: 'colors', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'components', label: 'Components' }
];

const BrandBook: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('overview');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="lg:pl-64">
        <Sidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />

        <div className="max-w-[90rem] mx-auto px-8 sm:px-12 lg:px-16 py-12">
          <div className="mb-8">
            <MobileSections
              sections={sections}
              activeSection={activeSection}
              onSectionClick={handleSectionClick}
            />
          </div>

          <div className="max-w-4xl">
            <div className="mb-12 lg:mb-24">
              <h1 className="text-4xl font-bold text-white mb-6">BRANDMATRIX Brand Guidelines</h1>
              <p className="text-lg text-primary-200">A comprehensive guide to our brand identity and design system.</p>
            </div>

            {/* Brand Overview */}
            <section 
              id="overview" 
              ref={el => sectionRefs.current['overview'] = el}
              className="mb-16 lg:mb-32 scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Brand Overview</h2>
              <div className="bg-primary-800/50 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-primary-700">
                <h3 className="text-xl font-semibold text-white mb-4">Mission</h3>
                <p className="text-primary-200 mb-8">Making brand management simple and effective for organizations worldwide.</p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Voice</h3>
                <ul className="grid grid-cols-2 gap-4 lg:gap-6">
                  <li className="text-primary-200">✓ Professional</li>
                  <li className="text-primary-200">✓ Clear</li>
                  <li className="text-primary-200">✓ Approachable</li>
                  <li className="text-primary-200">✓ Confident</li>
                </ul>
              </div>
            </section>

            {/* Brand Voice */}
            <section 
              id="voice" 
              ref={el => sectionRefs.current['voice'] = el}
              className="mb-16 lg:mb-32 scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Brand Voice</h2>
              <div className="space-y-8">
                <div className="bg-primary-800/50 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-primary-700">
                  <h3 className="text-xl font-semibold text-white mb-4">Voice Characteristics</h3>
                  <div className="grid gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Professional (75%)</h4>
                      <p className="text-primary-200 mb-4">Our communication maintains a professional tone while remaining accessible. We use industry-standard terminology appropriately but avoid unnecessary jargon.</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <div>
                            <p className="text-white">Do: "Our enterprise-grade security ensures your brand assets are protected."</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                          <div>
                            <p className="text-white">Don't: "Our super-secure system keeps your stuff safe."</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Clear (80%)</h4>
                      <p className="text-primary-200 mb-4">We prioritize clarity and directness in all communications. Complex ideas are broken down into digestible pieces without oversimplifying.</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <div>
                            <p className="text-white">Do: "Upload your brand assets and share them with your team in three steps."</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                          <div>
                            <p className="text-white">Don't: "Utilize our comprehensive asset management solution to facilitate team collaboration."</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Approachable (70%)</h4>
                      <p className="text-primary-200 mb-4">While maintaining professionalism, our tone is warm and welcoming. We want users to feel supported and encouraged.</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <div>
                            <p className="text-white">Do: "Need help getting started? Our team is here to guide you through each step."</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                          <div>
                            <p className="text-white">Don't: "Contact technical support if you experience difficulties."</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Confident (80%)</h4>
                      <p className="text-primary-200 mb-4">We speak with authority and conviction about our platform's capabilities, backed by expertise and proven results.</p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                          <div>
                            <p className="text-white">Do: "Join over 2,000 leading brands who trust BRANDMATRIX for their brand management."</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                          <div>
                            <p className="text-white">Don't: "We think our platform might help with your brand management needs."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-800/50 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-primary-700">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-accent-400" />
                    <h3 className="text-xl font-semibold text-white">Writing Principles</h3>
                  </div>
                  <div className="grid gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Active Voice</h4>
                      <p className="text-primary-200">Use active voice to make our communication more direct and engaging. Active voice emphasizes the doer of the action and creates clearer, more impactful statements.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Concise Language</h4>
                      <p className="text-primary-200">Keep messages clear and concise. Remove unnecessary words and get to the point quickly while maintaining a professional tone.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Positive Framing</h4>
                      <p className="text-primary-200">Focus on what users can do rather than limitations. Frame challenges as opportunities and provide solutions rather than dwelling on problems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Colors */}
            <section 
              id="colors" 
              ref={el => sectionRefs.current['colors'] = el}
              className="mb-16 lg:mb-32 scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-white mb-8">Color System</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-medium text-white mb-6">Text Colors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <ColorCard
                      bg="bg-white"
                      name="White"
                      hex="#ffffff"
                      use="Headings, important text"
                    />
                    <ColorCard
                      bg="bg-primary-200"
                      name="Primary 200"
                      hex="#e2e8f0"
                      use="Body text"
                    />
                  </div>

                  <h3 className="text-lg font-medium text-white mb-6">Primary Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <ColorCard
                      bg="bg-primary-900"
                      name="Primary 900"
                      hex="#0f172a"
                      use="Main background"
                    />
                    <ColorCard
                      bg="bg-primary-800"
                      name="Primary 800"
                      hex="#1e293b"
                      use="Cards, sections"
                    />
                    <ColorCard
                      bg="bg-primary-700"
                      name="Primary 700"
                      hex="#334155"
                      use="Borders, dividers"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-6">Accent Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <ColorCard
                      bg="bg-accent-500"
                      name="Accent 500"
                      hex="#3b82f6"
                      use="Primary buttons"
                    />
                    <ColorCard
                      bg="bg-accent-400"
                      name="Accent 400"
                      hex="#60a5fa"
                      use="Icons, highlights"
                    />
                    <ColorCard
                      bg="bg-accent-300"
                      name="Accent 300"
                      hex="#93c5fd"
                      use="Hover states"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Typography & Animations */}
            <section 
              id="typography" 
              ref={el => sectionRefs.current['typography'] = el}
              className="mb-16 lg:mb-32 scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-white mb-8">Typography & Animations</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-medium text-white mb-6">Text Animations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimationCard
                      name="Fade In"
                      className="animate-fade-in"
                      description="Used for page transitions and modal content"
                      code="animate-fade-in"
                    />
                    <AnimationCard
                      name="Slide Up"
                      className="animate-slide-up"
                      description="Used for content reveals and notifications"
                      code="animate-slide-up"
                    />
                    <AnimationCard
                      name="Pulse"
                      className="animate-pulse-slow gradient-text"
                      description="Used for gradient text and highlights"
                      code="animate-pulse-slow"
                    />
                    <AnimationCard
                      name="Float"
                      className="animate-float"
                      description="Used for interactive elements and icons"
                      code="animate-float"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-6">Headings</h3>
                  <div className="space-y-8">
                    <ComponentCard
                      title="Hero Heading"
                      className="mb-8"
                      code='text-7xl font-bold tracking-tight text-white'
                      description="Used for main page headlines and hero sections"
                    >
                      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Hero Heading
                      </h1>
                    </ComponentCard>

                    <ComponentCard
                      title="Section Heading"
                      className="mb-8"
                      code='text-4xl font-bold text-white'
                      description="Used for main section headers"
                    >
                      <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Section Heading
                      </h2>
                    </ComponentCard>

                    <ComponentCard
                      title="Card Heading"
                      className="mb-8"
                      code='text-xl font-semibold text-white'
                      description="Used for card and component headers"
                    >
                      <h3 className="text-xl font-semibold text-white">
                        Card Heading
                      </h3>
                    </ComponentCard>
                  </div>
                </div>
              </div>
            </section>

            {/* Components */}
            <section 
              id="components" 
              ref={el => sectionRefs.current['components'] = el}
              className="mb-16 lg:mb-32 scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold text-white mb-8">Components</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-lg font-medium text-white mb-6">Buttons</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ComponentCard
                      title="Primary Button"
                      code='btn-primary'
                      description="Used for main calls-to-action"
                    >
                      <button className="btn-primary">
                        Primary Button
                      </button>
                    </ComponentCard>

                    <ComponentCard
                      title="Secondary Button"
                      code='btn-secondary'
                      description="Used for secondary actions"
                    >
                      <button className="btn-secondary">
                        Secondary Button
                      </button>
                    </ComponentCard>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-6">Form Elements</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <ComponentCard
                      title="Input Field"
                      code='input-field'
                      description="Standard text input with consistent styling"
                      fullWidth
                    >
                      <input
                        type="text"
                        className="input-field"
                        placeholder="Enter text..."
                      />
                    </ComponentCard>

                    <ComponentCard
                      title="Form Group"
                      code='form-group'
                      description="Input group with label and optional error message"
                      fullWidth
                    >
                      <div className="form-group">
                        <label className="form-label">Label Text</label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Enter text..."
                        />
                        <p className="form-error">Error message goes here</p>
                      </div>
                    </ComponentCard>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-6">Cards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ComponentCard
                      title="Feature Card"
                      code='feature-card'
                      description="Used for highlighting features or content"
                    >
                      <div className="feature-card">
                        <Layout className="feature-icon mb-3" />
                        <h3 className="text-lg font-semibold text-white mb-2">Card Title</h3>
                        <p className="text-primary-200">Card description goes here.</p>
                      </div>
                    </ComponentCard>

                    <ComponentCard
                      title="Hover Card"
                      code='hover-card'
                      description="Card with hover animation effects"
                    >
                      <div className="hover-card bg-primary-800/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Hover Card</h3>
                        <p className="text-primary-200">Hover to see animation.</p>
                      </div>
                    </ComponentCard>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandBook;