import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import './HomePage.css';

const HomePage: React.FC = () => {
    const divisions = [
        {
            id: 'energy-controls',
            icon: '⚡',
            title: 'Energy Controls',
            description: 'Solar power management, zero-export controllers, and energy optimization systems for renewable installations.',
            link: '/divisions/energy-controls'
        },
        {
            id: 'embedded-devices',
            icon: '🔌',
            title: 'Embedded Devices',
            description: 'Custom embedded hardware, IoT gateways, smart meters, and industrial-grade electronic devices.',
            link: '/divisions/embedded-devices'
        },
        {
            id: 'software-solutions',
            icon: '💻',
            title: 'Software Solutions',
            description: 'Cloud platforms, mobile apps, monitoring dashboards, and API integration for seamless control.',
            link: '/divisions/software-solutions'
        },
        {
            id: 'industrial-automation',
            icon: '🏭',
            title: 'Industrial Automation',
            description: 'PLC panels, VFD control systems, motor monitoring, and complete factory automation solutions.',
            link: '/divisions/industrial-automation'
        }
    ];

    const features = [
        {
            icon: '🔧',
            title: 'Engineering Excellence',
            description: 'Designed and tested by experienced engineers for mission-critical industrial applications.'
        },
        {
            icon: '🛡️',
            title: 'Reliability First',
            description: 'Industrial-grade components and rigorous quality standards ensure long-term dependability.'
        },
        {
            icon: '✅',
            title: 'Compliance Ready',
            description: 'Built to meet international safety and grid compliance standards for global deployment.'
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <Section background="gradient" className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Smart Energy, Embedded & Industrial Control Solutions
                        </h1>
                        <p className="hero-subtitle">
                            Designing reliable electronics, embedded systems, and automation solutions
                            for solar, industrial, and enterprise applications.
                        </p>
                        <div className="hero-cta">
                            <Button href="/contact" variant="primary" size="large">
                                Contact Us
                            </Button>
                            <Button href="/divisions" variant="outline" size="large">
                                View Our Solutions
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Trust Indicators */}
            <div className="trust-bar">
                <div className="container">
                    <div className="trust-indicators">
                        <div className="trust-item">
                            <span className="trust-icon">🔧</span>
                            <span className="trust-text">Custom Engineering</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">🏭</span>
                            <span className="trust-text">Industrial Grade</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">📈</span>
                            <span className="trust-text">Scalable Solutions</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">🌍</span>
                            <span className="trust-text">India & Global Markets</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divisions Preview */}
            <Section background="white">
                <div className="section-header text-center">
                    <h2>Our Divisions</h2>
                    <p className="section-subtitle">
                        Four specialized divisions working together to deliver complete industrial solutions
                    </p>
                </div>
                <div className="grid grid-cols-4">
                    {divisions.map((division, index) => (
                        <Card key={division.id} hover className={`fade-in-on-scroll stagger-${index + 1}`}>
                            <Link to={division.link} className="division-card">
                                <div className="card-icon">{division.icon}</div>
                                <h3 className="card-title">{division.title}</h3>
                                <p className="card-description">{division.description}</p>
                                <span className="card-link">Learn More</span>
                            </Link>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Why Choose PBV */}
            <Section background="gray">
                <div className="section-header text-center">
                    <h2>Why Choose PBV Electronics</h2>
                    <p className="section-subtitle">
                        Trusted by industrial clients across India for reliable, scalable solutions
                    </p>
                </div>
                <div className="grid grid-cols-3">
                    {features.map((feature, index) => (
                        <Card key={index}>
                            <div className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h4 className="feature-title">{feature.title}</h4>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="gradient" className="cta-section">
                <div className="cta-content text-center">
                    <h2 className="cta-title">Ready to Discuss Your Project?</h2>
                    <p className="cta-subtitle">
                        Get in touch with our engineering team to explore custom solutions for your requirements
                    </p>
                    <div className="cta-buttons">
                        <Button href="/contact" variant="primary" size="large" className="pulse">
                            Get in Touch
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

export default HomePage;
