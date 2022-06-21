import React from 'react';
import styles from '../../../styles/Home.module.scss';

export const NavbarTab: React.FC<{
    text: string;
    id: string;
    active: boolean;
}> = ({ text, id, active }) => {
    const className = [
        styles['navbar-tab'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div className={className}>
            {text}
        </div>
    )
}