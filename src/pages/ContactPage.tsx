import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import './ContactPage.css';

interface FormData {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    industry: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        industry: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const industries = [
        'Solar EPC',
        'Manufacturing',
        'Industrial Automation',
        'OEM Hardware',
        'System Integration',
        'Energy Consulting',
        'Other'
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = 'Company name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.industry) {
            newErrors.industry = 'Please select an industry';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Please describe your requirements';
        } else if (formData.message.trim().length < 20) {
            newErrors.message = 'Please provide more details (at least 20 characters)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // EmailJS Configuration - CONFIGURED ✅
        // Emails will be sent to somanianiket777@gmail.com
        const SERVICE_ID = 'service_25qlgci';
        const TEMPLATE_ID = 'template_rr3b4pg';
        const PUBLIC_KEY = 'MuN4QrKMsTBygNmVb';

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.fullName,
                    company_name: formData.companyName,
                    from_email: formData.email,
                    phone: formData.phone,
                    industry: formData.industry,
                    message: formData.message,
                },
                PUBLIC_KEY
            );

            console.log('✅ Email sent successfully to somanianiket777@gmail.com!', result.text);
            setSubmitStatus('success');

            // Reset form
            setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                industry: '',
                message: ''
            });

            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('❌ Email sending failed:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <SEO
                title="Contact PBV Electronics - Get in Touch"
                description="Contact PBV Electronics for inquiries about energy controls, embedded systems, and industrial automation solutions. Email us at info@pbvelectronics.com."
            />
            {/* Hero */}
            <Section background="gradient" className="contact-hero">
                <div className="text-center">
                    <h1>Contact Us</h1>
                    <p className="page-subtitle">
                        Get in touch with our team to discuss your project requirements
                    </p>
                </div>
            </Section>

            {/* Contact Form & Info */}
            <Section background="white">
                <div className="contact-grid">
                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h2>Send Us an Inquiry</h2>
                        <p className="form-description">
                            Fill out the form below and our team will get back to you within 24 hours
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={errors.fullName ? 'error' : ''}
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name *</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className={errors.companyName ? 'error' : ''}
                                        placeholder="Your Company Name"
                                    />
                                    {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                        placeholder="john@company.com"
                                    />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? 'error' : ''}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="industry">Industry / Project Type *</label>
                                <select
                                    id="industry"
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className={errors.industry ? 'error' : ''}
                                >
                                    <option value="">Select your industry</option>
                                    {industries.map(ind => (
                                        <option key={ind} value={ind}>{ind}</option>
                                    ))}
                                </select>
                                {errors.industry && <span className="error-message">{errors.industry}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Project Requirements / Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'error' : ''}
                                    rows={6}
                                    placeholder="Describe your project requirements, technical specifications, or any questions you have..."
                                ></textarea>
                                {errors.message && <span className="error-message">{errors.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="large"
                                disabled={isSubmitting}
                                className="submit-button"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </Button>

                            {submitStatus === 'success' && (
                                <div className="alert alert-success">
                                    ✓ Thank you! Your inquiry has been submitted. We'll contact you within 24 hours.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="alert alert-error">
                                    ✗ Oops! Something went wrong. Please try again or contact us directly.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info-section">
                        <h3>Contact Information</h3>
                        <p className="info-description">
                            Prefer to reach out directly? Use any of the methods below
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:info@pbvelectronics.com" className="contact-method">
                                <div className="method-icon">📧</div>
                                <div className="method-content">
                                    <h4>Email</h4>
                                    <p>info@pbvelectronics.com</p>
                                </div>
                            </a>

                            <a href="tel:+918668572093" className="contact-method">
                                <div className="method-icon">📞</div>
                                <div className="method-content">
                                    <h4>Phone</h4>
                                    <p>+91 86685 72093</p>
                                </div>
                            </a>

                            <a href="https://wa.me/918668572093" target="_blank" rel="noopener noreferrer" className="contact-method">
                                <div className="method-icon">💬</div>
                                <div className="method-content">
                                    <h4>WhatsApp</h4>
                                    <p>Chat with us instantly</p>
                                </div>
                            </a>

                            <div className="contact-method-static">
                                <div className="method-icon">📍</div>
                                <div className="method-content">
                                    <h4>Location</h4>
                                    <p>Qubix SEZ, Blue Ridge, Phase 1</p>
                                    <p>Hinjawadi Rajiv Gandhi Infotech Park</p>
                                    <p>Hinjawadi, Pune, Maharashtra 411057</p>
                                </div>
                            </div>
                        </div>

                        <div className="business-hours">
                            <h4>Business Hours</h4>
                            <p>Monday - Saturday: 9:00 AM - 6:00 PM IST</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ContactPage;
