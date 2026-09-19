import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { SolutionDetailPage } from './pages/solutions/SolutionDetailPage';
import { ResearchBuild } from './pages/ResearchBuild';
import { InnovationHub } from './pages/InnovationHub';
import { Projects } from './pages/Projects';
import { WorkWithUs } from './pages/WorkWithUs';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { LegalPage } from './pages/LegalPage';
import { MotionToggle } from './components/ui/MotionToggle';
import { useMotionPreference } from './hooks/useMotionPreference';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppLoader } from './components/effects/AppLoader';
import { RouteTransition } from './components/layout/RouteTransition';
import { Depth3DBackground } from './components/effects/Depth3DBackground';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <RouteTransition>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Solutions */}
        <Route path="/solutions" element={<Solutions />} />
        <Route
          path="/solutions/ai-machine-learning"
          element={<SolutionDetailPage customSlug="ai-machine-learning" />}
        />
        <Route
          path="/solutions/web-software"
          element={<SolutionDetailPage customSlug="web-software" />}
        />
        <Route
          path="/solutions/iot"
          element={<SolutionDetailPage customSlug="iot" />}
        />
        <Route
          path="/solutions/automation"
          element={<SolutionDetailPage customSlug="automation" />}
        />
        <Route
          path="/solutions/research-product-rnd"
          element={<SolutionDetailPage customSlug="research-product-rnd" />}
        />
        <Route path="/solutions/:slug" element={<SolutionDetailPage />} />

        {/* Core Pages */}
        <Route path="/research-build" element={<ResearchBuild />} />
        <Route path="/innovation-hub" element={<InnovationHub />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Legal & Compliance */}
        <Route
          path="/privacy-policy"
          element={
            <LegalPage
              title="Privacy Policy"
              eyebrow="LEGAL / GOVERNANCE"
              content={[
                'NOXVION respects data privacy and operates in accordance with international information security standards. We do not sell, distribute, or monetize user data.',
                'Data collected via contact inquiries or subscription channels is utilized exclusively for direct communication and engineering collaboration.',
                'For inquiries regarding data records or technical telemetry retention, contact our governance syndicate.',
              ]}
            />
          }
        />
        <Route
          path="/terms"
          element={
            <LegalPage
              title="Terms of Service"
              eyebrow="LEGAL / TERMS"
              content={[
                'All architectural designs, schematic drafts, and proprietary code produced by NOXVION are subject to standard enterprise licensing agreements and IP protections.',
                'Unauthorized replication of proprietary algorithmic models or hardware schematics is strictly prohibited.',
                'Engagement contracts and statements of work govern all custom development and deployment lifecycles.',
              ]}
            />
          }
        />
        <Route
          path="/security"
          element={
            <LegalPage
              title="Security Architecture"
              eyebrow="SYSTEMS / PROTOCOL"
              content={[
                'NOXVION enforces a strict zero-trust security baseline across all embedded hardware nodes, communication pipelines, and cloud APIs.',
                'All telemetry ingestion streams utilize end-to-end cryptographic hashing and mutual TLS protocols.',
                'Continuous automated vulnerability assessments and code integrity validations are built into our CI/CD pipelines.',
              ]}
            />
          }
        />
        <Route
          path="/compliance"
          element={
            <LegalPage
              title="Hardware Compliance"
              eyebrow="REGULATORY / STANDARDS"
              content={[
                'All hardware prototypes and edge sensor nodes designed by NOXVION are engineered to comply with industrial electromagnetic compatibility (EMC) and environmental safety parameters.',
                'Low-power radio frequency modules operate within authorized industrial, scientific, and medical (ISM) bands.',
                'Detailed compliance verification sheets accompany all enterprise hardware deliveries.',
              ]}
            />
          }
        />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RouteTransition>
  );
};

const AppContent: React.FC = () => {
  useMotionPreference();
  return (
    <BrowserRouter>
      <AppLoader />
      {/* Global fixed 3D depth background — sits behind everything */}
      <Depth3DBackground />
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A2540] selection:bg-blue-500/25 selection:text-[#0A2540]">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
      <MotionToggle />
    </BrowserRouter>
  );
};

export const App: React.FC = () => <AppContent />;

export default App;
