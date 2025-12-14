import { Link } from 'react-router-dom';
import './Button.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    target?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    href,
    disabled = false,
    type = 'button',
    className = '',
    target, // Add target prop support
}) => {
    const baseClass = `btn btn-${variant} btn-${size}`;
    const classes = `${baseClass} ${className}`.trim();

    if (href) {
        // Use Link for internal routes
        if (href.startsWith('/')) {
            return (
                <Link to={href} className={classes}>
                    {children}
                </Link>
            );
        }

        // Use standard anchor for external links
        return (
            <a href={href} className={classes} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
