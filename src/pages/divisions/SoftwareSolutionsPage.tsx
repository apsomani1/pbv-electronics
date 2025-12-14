import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SEO from '../../components/SEO';
import '../DivisionPageStyles.css';

const SoftwareSolutionsPage: React.FC = () => {
    const products = [
        {
            title: 'Solar Monitoring Cloud Platform',
            description: 'Comprehensive cloud-based platform for real-time solar plant monitoring, performance analytics, and alarm management.',
            range: 'Web & Mobile'
        },
        {
            title: 'Zero Export Dashboard',
            description: 'Real-time visualization and control dashboard for zero-export systems with live grid monitoring and historical data.',
            range: 'Real-Time Control'
        },
        {
            title: 'Mobile Device Control Apps',
            description: 'Native iOS and Android applications for remote monitoring and control of PBV hardware and third-party devices.',
            range: 'iOS & Android'
        },
        {
            title: 'API Integration & Analytics',
            description: 'RESTful APIs and data analytics tools for seamless integration with existing systems and business intelligence.',
            range: 'Integration Layer'
        },
        {
            title: 'Industrial Monitoring Portal',
            description: 'SCADA-lite web portal for industrial equipment monitoring with customizable dashboards and reporting.',
            range: 'SCADA-Lite'
        }
    ];

    const capabilities = [
        'Cloud platform development (AWS/Azure)',
        'RESTful API design & implementation',
        'Real-time data visualization',
        'Mobile app development (React Native)',
        'Database design & optimization',
        'Third-party integration support'
    ];

    return (
        <div className="division-page">
            <SEO
                title="Software Solutions - Cloud & Mobile Platforms"
                description="Cloud monitoring platforms, mobile apps, and dashboard solutions for industrial control and solar energy management by PBV Electronics."
            />
            {/* Hero */}
            <Section background="gradient" className="division-hero">
                <div className="division-hero-content">
                    <div className="division-icon-hero">💻</div>
                    <h1>Software Solutions</h1>
                    <p className="division-hero-tagline">
                        Software Development, Cloud Platforms & Mobile Applications
                    </p>
                    <p className="division-hero-description">
                        Develops cloud platforms, dashboards, and mobile apps that integrate seamlessly
                        with PBV hardware and third-party devices, providing unified monitoring and control experiences.
                    </p>
                </div>
            </Section>

            {/* Focus Area */}
            <Section background="white">
                <div className="content-section">
                    <h2 className="text-center">Software Capabilities</h2>
                    <p className="lead-text text-center">
                        Full-stack development expertise delivering scalable, secure, and user-friendly
                        software solutions for industrial and energy applications.
                    </p>
                    <div className="features-grid">
                        {capabilities.map((capability, index) => (
                            <div key={index} className="feature-item">
                                <span className="feature-check">✓</span>
                                <span>{capability}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Products */}
            <Section background="gray">
                <div className="section-header text-center">
                    <h2>Our Software Products</h2>
                    <p className="section-subtitle">
                        Cloud and mobile solutions that bring your industrial data to life with actionable insights
                    </p>
                </div>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <Card key={index}>
                            <div className="product-card">
                                <div className="product-badge">{product.range}</div>
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section background="gradient" className="division-hero">
                <div className="text-center">
                    <h2 style={{ color: 'white' }}>Want to See Our Software in Action?</h2>
                    <p className="cta-subtitle">
                        Contact our software team to get a demo of our custom SCADA, monitoring, and automation solutions
                    </p>
                    <div className="cta-buttons">
                        <Button href="/contact" variant="primary" size="large">
                            Request Software Demo
                        </Button>
                        <Button href="https://wa.me/918668572093" variant="outline" size="large">
                            WhatsApp Us
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default SoftwareSolutionsPage;
