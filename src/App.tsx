import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DivisionsPage from './pages/DivisionsPage';
import EnergyControlsPage from './pages/divisions/EnergyControlsPage';
import EmbeddedDevicesPage from './pages/divisions/EmbeddedDevicesPage';
import SoftwareSolutionsPage from './pages/divisions/SoftwareSolutionsPage';
import IndustrialAutomationPage from './pages/divisions/IndustrialAutomationPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router
            basename={import.meta.env.BASE_URL}
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true
            }}
        >
            <ScrollToTop />
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/divisions" element={<DivisionsPage />} />
                        <Route path="/divisions/energy-controls" element={<EnergyControlsPage />} />
                        <Route path="/divisions/embedded-devices" element={<EmbeddedDevicesPage />} />
                        <Route path="/divisions/software-solutions" element={<SoftwareSolutionsPage />} />
                        <Route path="/divisions/industrial-automation" element={<IndustrialAutomationPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        {/* 404 fallback */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </Router>
    );
}

// Simple 404 page
function NotFoundPage() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 2rem',
            textAlign: 'center'
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
            <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                The page you're looking for doesn't exist.
            </p>
            <a href="/" className="btn btn-primary btn-medium">
                Go to Homepage
            </a>
        </div>
    );
}

export default App;
