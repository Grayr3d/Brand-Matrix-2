import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DemoPage from './pages/DemoPage';
import TrialPage from './pages/TrialPage';
import BrandBook from './pages/BrandBook';
import BrandVoiceConfiguratorPage from './pages/BrandVoiceConfiguratorPage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import BrandAssetsPage from './pages/BrandAssetsPage';
import TeamPage from './pages/TeamPage';
import WorkspacesPage from './pages/WorkspacesPage';
import WorkspaceDetailPage from './pages/WorkspaceDetailPage';
import ProjectPage from './pages/ProjectPage';
import DashboardLayout from './components/layouts/DashboardLayout';
import { AuthProvider } from './contexts/AuthContext';
import { WorkspaceProvider } from './contexts/WorkspaceContext';
import { useLocation } from 'react-router-dom';

const App: React.FC = () => {
  const location = useLocation();
  
  // Show footer only on public routes
  const isPublicRoute = ['/', '/login', '/signup', '/demo', '/trial'].includes(location.pathname);

  return (
    <AuthProvider>
      <WorkspaceProvider>
        <div className="flex flex-col min-h-screen bg-primary-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/trial" element={<TrialPage />} />

              {/* Protected routes with DashboardLayout */}
              <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
              <Route path="/brandbook" element={<DashboardLayout><BrandBook /></DashboardLayout>} />
              <Route path="/brand-voice" element={<DashboardLayout><BrandVoiceConfiguratorPage /></DashboardLayout>} />
              <Route path="/admin" element={<DashboardLayout><AdminPage /></DashboardLayout>} />
              <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
              <Route path="/assets" element={<DashboardLayout><BrandAssetsPage /></DashboardLayout>} />
              <Route path="/team" element={<DashboardLayout><TeamPage /></DashboardLayout>} />
              <Route path="/workspaces" element={<DashboardLayout><WorkspacesPage /></DashboardLayout>} />
              <Route path="/workspaces/:workspaceId" element={<DashboardLayout><WorkspaceDetailPage /></DashboardLayout>} />
              <Route path="/workspaces/:workspaceId/projects/:projectId" element={<DashboardLayout><ProjectPage /></DashboardLayout>} />
            </Routes>
          </main>
          {isPublicRoute && <Footer />}
          <Toaster position="top-right" />
        </div>
      </WorkspaceProvider>
    </AuthProvider>
  );
};

export default App;