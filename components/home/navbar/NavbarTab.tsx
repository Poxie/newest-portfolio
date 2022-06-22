import React from 'react';
import styles from '../../../styles/Home.module.scss';

const SPACE_FROM_TOP = 200;
export const NavbarTab: React.FC<{
    text: string;
    id: string;
    active: boolean;
    onClick: () => void;
}> = ({ text, id, active, onClick }) => {
    const scroll = () => {
        const section = document.querySelector(`[data-section="${id}"]`);
        const top = (section?.getBoundingClientRect().top || 0) + window.scrollY - SPACE_FROM_TOP;
        window.scrollTo({ top });
        onClick();
    }

    const className = [
        styles['navbar-tab'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <button 
            className={className} 
            onClick={scroll}
        >
            {text}
        </button>
    )
}