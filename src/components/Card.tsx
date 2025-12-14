import React from 'react';
import './Card.css';

interface CardProps {
    children: React.ReactNode;
    hover?: boolean;
    className?: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
    children,
    hover = false,
    className = '',
    onClick,
}) => {
    const classes = `card ${hover ? 'card-hover' : ''} ${className}`.trim();

    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;
