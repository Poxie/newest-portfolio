import React from 'react';
import styles from './Button.module.scss';

export default function Button({ children, className='', type='default' }: {
    children: any;
    type?: 'default' | 'hollow';
    className?: string;
}) {
    className = [
        className,
        styles['container'],
        styles[type]
    ].join(' ');
    return(
        <div className={className}>
            {children}
        </div>
    )
}