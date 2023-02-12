import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export default function Button({ children, style, onClick, href, ariaLabel, target, className='', type='default', buttonType='button', disabled=false }: {
    children: any;
    type?: 'default' | 'hollow';
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    href?: string;
    ariaLabel?: string;
    target?: AnchorHTMLAttributes<''>['target'];
    buttonType?: ButtonHTMLAttributes<''>['type'];
    disabled?: boolean;
}) {
    className = [
        className,
        styles['container'],
        styles[type]
    ].join(' ');

    const props = {
        className,
        style,
        onClick,
        'aria-label': ariaLabel
    }

    return href ? (
        <a 
            href={href}
            rel={'noreferrer'}
            target={target}
            {...props}
        >
            {children}
        </a>
    ) : (
        <button {...props} type={buttonType} disabled={disabled}>
            {children}
        </button>
    )
}