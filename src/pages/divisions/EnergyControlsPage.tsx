import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import SEO from '../../components/SEO';
import '../DivisionPageStyles.css';

const EnergyControlsPage: React.FC = () => {
    const products = [
        {
            title: 'Zero Export Controllers',
            description: 'Precise grid power monitoring and control systems for 1 kW to 1 MW solar installations, ensuring zero energy export to the grid.',
            range: '1 kW - 1 MW'
        },
        {
            title: 'Solar Load Controllers',
            description: 'Intelligent load management systems that optimize solar energy utilization and prioritize critical loads during grid outages.',
            range: 'Residential & Commercial'
        },
        {
            title: 'Smart Power Limiters',
            description: 'Advanced power limiting devices with real-time monitoring and automated control for demand-side management.',
            range: 'Up to 500 kW'
        },
        {
            title: 'DG-PV Synchronization Controllers',
            description: 'Seamless integration controllers for diesel generator and solar PV hybrid systems with automatic switching.',
            range: 'Hybrid Systems'
        },
        {
            title: 'Battery Management Systems',
            description: 'Comprehensive BMS and EMS controllers for lithium-ion and lead-acid battery banks with SOC monitoring.',
            range: 'Energy Storage'
        }
    ];

    const features = [
        'Grid compliance and safety standards',
        'Real-time monitoring and data logging',
        'Modbus RTU/TCP communication',
        'Cloud connectivity ready',
        'Industrial-grade components',
        'Weatherproof enclosures available'
    ];

    return (
        <div className="division-page">
            <SEO
                title="Energy Controls - Zero Export & Solar Management"
                description="Advanced zero-export controllers, DG-PV synchronization, and solar load management systems by PBV Electronics."
            />
            {/* Hero */}
            <Section background="gradient" className="division-hero">
                <div className="division-hero-content">
                    <div className="division-icon-hero">⚡</div>
                    <h1>Energy Controls</h1>
                    <p className="division-hero-tagline">
                        Solar Power Management & Energy Control Systems
                    </p>
                    <p className="division-hero-description">
                        Designs and manufactures high-reliability controllers for solar, hybrid, and industrial
                        power systems. Focused on grid compliance, zero-export control, and optimized energy utilization.
                    </p>
                </div>
            </Section>

            {/* Focus Area */}
            <Section background="white">
                <div className="content-section">
                    <h2 className="text-center">Focus Area</h2>
                    <p className="lead-text text-center">
                        Delivering cutting-edge energy management solutions for solar EPC companies,
                        industrial facilities, and commercial establishments across India.
                    </p>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <span className="feature-check">✓</span>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Products */}
            <Section background="gray">
                <div className="section-header text-center">
                    <h2>Our Products</h2>
                    <p className="section-subtitle">
                        Comprehensive range of energy control solutions engineered for reliability and performance
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
                    <h2 style={{ color: 'white' }}>Ready to Optimize Your Energy Systems?</h2>
                    <p className="cta-subtitle">
                        Contact our energy controls team to discuss custom solutions for your solar or hybrid power installation
                    </p>
                    <div className="cta-buttons">
                        <Button href="/contact" variant="primary" size="large">
                            Request Energy Solution Consultation
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

export default EnergyControlsPage;
