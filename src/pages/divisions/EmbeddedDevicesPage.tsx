import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import '../DivisionPageStyles.css';

const EmbeddedDevicesPage: React.FC = () => {
    const products = [
        {
            title: 'Smart Energy Meters',
            description: 'Accurate CT/PT-based energy meters with real-time monitoring, data logging, and Modbus communication for industrial applications.',
            range: 'Single & Three Phase'
        },
        {
            title: 'IoT Gateways',
            description: 'Multi-protocol IoT gateways supporting Wi-Fi, 4G LTE, and Ethernet connectivity for remote monitoring and control.',
            range: 'Wi-Fi / 4G / Ethernet'
        },
        {
            title: 'Industrial Sensors',
            description: 'High-precision sensors including CT, PT, temperature, vibration, and pressure transducers for industrial monitoring.',
            range: 'Diverse Applications'
        },
        {
            title: 'ARM/STM32 Control Boards',
            description: 'Custom embedded control boards based on ARM Cortex and STM32 microcontrollers for specialized industrial applications.',
            range: 'Custom Development'
        },
        {
            title: 'Modbus Converters',
            description: 'Protocol converters enabling Modbus RTU/TCP to Wi-Fi, 4G, and cloud connectivity for legacy industrial equipment.',
            range: 'Protocol Bridge'
        }
    ];

    const capabilities = [
        'Custom hardware design & prototyping',
        'PCB layout and manufacturing',
        'Firmware development',
        'Industrial IoT integration',
        'Sensor calibration & testing',
        'CE/FCC compliance support'
    ];

    return (
        <div className="division-page">
            {/* Hero */}
            <Section background="gradient" className="division-hero">
                <div className="division-hero-content">
                    <div className="division-icon-hero">🔌</div>
                    <h1>Embedded Devices</h1>
                    <p className="division-hero-tagline">
                        Embedded Systems, IoT Hardware & Industrial Electronics
                    </p>
                    <p className="division-hero-description">
                        Custom embedded hardware and IoT devices designed for industrial environments,
                        smart energy applications, and automation use cases requiring robust, reliable electronics.
                    </p>
                </div>
            </Section>

            {/* Focus Area */}
            <Section background="white">
                <div className="content-section">
                    <h2 className="text-center">Technical Capabilities</h2>
                    <p className="lead-text text-center">
                        From concept to production, we deliver custom embedded solutions tailored
                        to your specific requirements and industry standards.
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
                    <h2>Our Products</h2>
                    <p className="section-subtitle">
                        Industrial-grade embedded devices engineered for harsh environments and 24/7 operation
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
                    <h2 style={{ color: 'white' }}>Need Custom Embedded Hardware?</h2>
                    <p className="cta-subtitle">
                        Contact our embedded systems team to design tailored hardware solutions for your industrial applications
                    </p>
                    <div className="cta-buttons">
                        <Button href="/contact" variant="primary" size="large">
                            Request Embedded Solution Consultation
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

export default EmbeddedDevicesPage;
