import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <div className="logo-icon">⚡</div>
                            <div className="logo-text">
                                <span className="logo-name">PBV Electronics</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Engineering reliable electronics, embedded systems, and automation solutions
                            for solar, industrial, and enterprise applications.
                        </p>
                        <div className="footer-trust">
                            <span className="trust-badge">🏭 Industrial Grade</span>
                            <span className="trust-badge">🌍 Global Reach</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/divisions">Our Divisions</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Divisions */}
                    <div className="footer-column">
                        <h4 className="footer-title">Divisions</h4>
                        <ul className="footer-links">
                            <li><Link to="/divisions/energy-controls">Energy Controls</Link></li>
                            <li><Link to="/divisions/embedded-devices">Embedded Devices</Link></li>
                            <li><Link to="/divisions/software-solutions">Software Solutions</Link></li>
                            <li><Link to="/divisions/industrial-automation">Industrial Automation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h4 className="footer-title">Get in Touch</h4>
                        <ul className="footer-contact">
                            <li>
                                <span className="contact-icon">📧</span>
                                <a href="mailto:info@pbvelectronics.com">info@pbvelectronics.com</a>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <a href="tel:+918668572093">+91 86685 72093</a>
                            </li>
                            <li>
                                <span className="contact-icon">💬</span>
                                <a href="https://wa.me/918668572093" target="_blank" rel="noopener noreferrer">
                                    WhatsApp Business
                                </a>
                            </li>
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>India & Global Markets</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} PBV Electronics. All rights reserved.
                    </p>
                    <p className="footer-credit">
                        Designed & Engineered by PBV Electronics
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
