import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';
import './DivisionsPage.css';

const DivisionsPage: React.FC = () => {
    const divisions = [
        {
            id: 'energy-controls',
            icon: '⚡',
            title: 'Energy Controls',
            tagline: 'Solar Power Management & Energy Control Systems',
            description: 'Specializing in zero-export controllers, solar load management, DG-PV synchronization, and advanced energy optimization solutions for renewable installations.',
            link: '/divisions/energy-controls',
            color: 'var(--md-tertiary-60)'
        },
        {
            id: 'embedded-devices',
            icon: '🔌',
            title: 'Embedded Devices',
            tagline: 'Embedded Systems, IoT Hardware & Industrial Electronics',
            description: 'Custom embedded hardware development, IoT gateways, smart energy meters, industrial sensors, and ARM/STM32-based control boards for diverse applications.',
            link: '/divisions/embedded-devices',
            color: 'var(--md-primary-50)'
        },
        {
            id: 'software-solutions',
            icon: '💻',
            title: 'Software Solutions',
            tagline: 'Software Development, Cloud Platforms & Mobile Applications',
            description: 'Cloud-based monitoring platforms, real-time dashboards, mobile apps, API integrations, and industrial monitoring portals that seamlessly connect with hardware.',
            link: '/divisions/software-solutions',
            color: 'var(--md-secondary-60)'
        },
        {
            id: 'industrial-automation',
            icon: '🏭',
            title: 'Industrial Automation',
            tagline: 'Factory Automation & Industrial Control Solutions',
            description: 'PLC automation panels, VFD control cabinets, motor monitoring systems, and complete Modbus-based industrial network solutions for manufacturing excellence.',
            link: '/divisions/industrial-automation',
            color: 'var(--md-secondary-50)'
        }
    ];

    return (
        <div className="divisions-page">
            <SEO
                title="Our Divisions & Expertise"
                description="Explore our specialized divisions: Energy Controls, Embedded Devices, Software Solutions, and Industrial Automation."
            />
            {/* Hero */}
            <Section background="gradient" className="divisions-hero">
                <div className="text-center">
                    <h1>Our Divisions</h1>
                    <p className="page-subtitle">
                        Four specialized divisions delivering comprehensive solutions across energy,
                        electronics, software, and automation
                    </p>
                </div>
            </Section>

            {/* Divisions Grid */}
            <Section background="white">
                <div className="divisions-grid">
                    {divisions.map((division, index) => (
                        <Link
                            key={division.id}
                            to={division.link}
                            className={`division-large-card fade-in-on-scroll stagger-${(index % 2) + 1}`}
                            style={{ '--division-color': division.color } as React.CSSProperties}
                        >
                            <div className="division-card-inner">
                                <div className="division-icon-large">
                                    {division.icon}
                                </div>
                                <div className="division-content">
                                    <h2 className="division-title">{division.title}</h2>
                                    <p className="division-tagline">{division.tagline}</p>
                                    <p className="division-description">{division.description}</p>
                                    <span className="division-cta">
                                        Explore Division →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="gray">
                <div className="text-center">
                    <h2>Need a Custom Solution?</h2>
                    <p className="section-subtitle" style={{ marginBottom: 'var(--space-2xl)' }}>
                        Our divisions work together to deliver integrated solutions tailored to your specific requirements
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-large">
                        Contact Our Team
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default DivisionsPage;
