import React from 'react';
import styles from './Button.module.scss';

export default function Button({ children, style, onClick, className='', type='default' }: {
    children: any;
    type?: 'default' | 'hollow';
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}) {
    className = [
        className,
        styles['container'],
        styles[type]
    ].join(' ');
    return(
        <button 
            className={className}
            style={style} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}