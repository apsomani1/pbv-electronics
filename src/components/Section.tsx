import React from 'react';
import './Section.css';

interface SectionProps {
    children: React.ReactNode;
    background?: 'white' | 'gray' | 'dark' | 'gradient';
    className?: string;
    id?: string;
    fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({
    children,
    background = 'white',
    className = '',
    id,
    fullWidth = false,
}) => {
    const classes = `section section-${background} ${className}`.trim();

    return (
        <section className={classes} id={id}>
            {fullWidth ? (
                children
            ) : (
                <div className="container">
                    {children}
                </div>
            )}
        </section>
    );
};

export default Section;
