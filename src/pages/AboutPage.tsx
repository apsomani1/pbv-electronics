import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import './AboutPage.css';

const AboutPage: React.FC = () => {
    const values = [
        {
            icon: '🛡️',
            title: 'Reliability',
            description: 'Every product is designed and tested for long-term, mission-critical operation in demanding industrial environments.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Continuously advancing our technology stack to deliver cutting-edge solutions that solve real-world challenges.'
        },
        {
            icon: '🤝',
            title: 'Customer-Centric',
            description: 'Understanding client requirements deeply and delivering tailored solutions that exceed expectations.'
        },
        {
            icon: '✨',
            title: 'Quality',
            description: 'Uncompromising standards in component selection, manufacturing processes, and final product validation.'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero */}
            <Section background="gradient" className="about-hero">
                <div className="text-center">
                    <h1>About PBV Electronics</h1>
                    <p className="page-subtitle">
                        Engineering reliable solutions for critical industrial and energy systems
                    </p>
                </div>
            </Section>

            {/* Company Overview */}
            <Section background="white">
                <div className="content-section">
                    <div className="section-header text-center">
                        <h2>Who We Are</h2>
                    </div>
                    <div className="about-content">
                        <p className="lead-text">
                            PBV Electronics is a leading Indian electronics and engineering company
                            specializing in smart energy solutions, embedded systems, and industrial automation.
                        </p>
                        <p>
                            Founded with a vision to deliver world-class, reliable electronic solutions to the
                            Indian and global markets, we have grown into a multi-division organization serving
                            diverse industrial sectors. Our team of experienced engineers and technicians work
                            closely with clients to understand their unique challenges and deliver custom solutions
                            that drive operational excellence.
                        </p>
                        <p>
                            From solar EPC companies and manufacturing plants to OEMs and system integrators,
                            our clients trust us to deliver products and services that meet the highest standards
                            of quality, safety, and performance.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section background="gray">
                <div className="mission-vision-grid">
                    <div className="mission-box">
                        <div className="box-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>
                            To engineer and deliver reliable, scalable electronics and automation solutions
                            that empower industries to achieve their operational and sustainability goals.
                        </p>
                    </div>
                    <div className="vision-box">
                        <div className="box-icon">🚀</div>
                        <h3>Our Vision</h3>
                        <p>
                            To become the leading provider of custom electronics, embedded systems, and
                            industrial automation solutions in India and expand our reach to global markets.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section background="white">
                <div className="section-header text-center">
                    <h2>Our Core Values</h2>
                    <p className="section-subtitle">
                        The principles that guide every decision we make and every solution we deliver
                    </p>
                </div>
                <div className="grid grid-cols-4">
                    {values.map((value, index) => (
                        <Card key={index}>
                            <div className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h4 className="value-title">{value.title}</h4>
                                <p className="value-description">{value.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Divisions Structure */}
            <Section background="gradient">
                <div className="text-center">
                    <h2 style={{ color: 'white' }}>Multi-Division Structure</h2>
                    <p className="section-subtitle" style={{ color: 'var(--gray-200)', marginBottom: 'var(--space-3xl)' }}>
                        Four specialized divisions working in synergy to deliver end-to-end solutions
                    </p>
                    <div className="divisions-structure">
                        <div className="structure-item">
                            <div className="structure-number">01</div>
                            <h4>Energy Controls</h4>
                            <p>Solar & Energy Management</p>
                        </div>
                        <div className="structure-item">
                            <div className="structure-number">02</div>
                            <h4>Embedded Devices</h4>
                            <p>IoT & Custom Hardware</p>
                        </div>
                        <div className="structure-item">
                            <div className="structure-number">03</div>
                            <h4>Software Solutions</h4>
                            <p>Cloud & Mobile Platforms</p>
                        </div>
                        <div className="structure-item">
                            <div className="structure-number">04</div>
                            <h4>Industrial Automation</h4>
                            <p>Factory & Process Control</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AboutPage;
