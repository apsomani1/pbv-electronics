import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SEO from '../../components/SEO';
import '../DivisionPageStyles.css';

const IndustrialAutomationPage: React.FC = () => {
    const products = [
        {
            title: 'PLC Automation Panels',
            description: 'Complete PLC-based automation panels with HMI integration for process control and manufacturing automation applications.',
            range: 'Factory Automation'
        },
        {
            title: 'VFD Control Cabinets',
            description: 'Variable frequency drive control systems for precise motor speed control with energy savings and soft-start capabilities.',
            range: 'Motor Control'
        },
        {
            title: 'Motor Monitoring Systems',
            description: 'Comprehensive motor health monitoring with vibration analysis, temperature sensing, and predictive maintenance alerts.',
            range: 'Condition Monitoring'
        },
        {
            title: 'Industrial Modbus Networks',
            description: 'Design and implementation of robust Modbus RTU/TCP networks for seamless communication between industrial devices.',
            range: 'Communication'
        },
        {
            title: 'Custom Control Panels',
            description: 'Tailored electrical control panels designed to meet specific process requirements with full documentation.',
            range: 'Custom Solutions'
        }
    ];

    const applications = [
        'Manufacturing plant automation',
        'Process control systems',
        'Material handling automation',
        'HVAC control systems',
        'Water treatment plants',
        'Packaging machinery control'
    ];

    return (
        <div className="division-page">
            <SEO
                title="Industrial Automation - PLC Basics & Control Panels"
                description="PLC automation panels, VFD control cabinets, and industrial network solutions by PBV Electronics for manufacturing excellence."
            />
            {/* Hero */}
            <Section background="gradient" className="division-hero">
                <div className="division-hero-content">
                    <div className="division-icon-hero">🏭</div>
                    <h1>Industrial Automation</h1>
                    <p className="division-hero-tagline">
                        Factory Automation & Industrial Control Solutions
                    </p>
                    <p className="division-hero-description">
                        Provides automation panels and industrial control systems for manufacturing plants
                        and infrastructure projects, delivering reliability and efficiency in industrial operations.
                    </p>
                </div>
            </Section>

            {/* Focus Area */}
            <Section background="white">
                <div className="content-section">
                    <h2 className="text-center">Application Areas</h2>
                    <p className="lead-text text-center">
                        Serving diverse industries with automation solutions that improve productivity,
                        reduce downtime, and ensure consistent quality.
                    </p>
                    <div className="features-grid">
                        {applications.map((application, index) => (
                            <div key={index} className="feature-item">
                                <span className="feature-check">✓</span>
                                <span>{application}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Products */}
            <Section background="gray">
                <div className="section-header text-center">
                    <h2>Our Automation Products</h2>
                    <p className="section-subtitle">
                        Industrial-grade automation solutions engineered for reliability in demanding manufacturing environments
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
                    <h2 style={{ color: 'white' }}>Automate Your Manufacturing Process?</h2>
                    <p className="cta-subtitle">
                        Contact our automation specialists to modernize your production with intelligent control systems
                    </p>
                    <div className="cta-buttons">
                        <Button href="/contact" variant="primary" size="large">
                            Request Automation Consultation
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

export default IndustrialAutomationPage;
