import { useEffect } from 'react';
import { DayIcon } from '../../../assets/icons/DayIcon';
import { NightIcon } from '../../../assets/icons/NightIcon';
import styles from '../../../styles/Home.module.scss';

export const NavbarSwitch = () => {
    useEffect(updateDisplayTheme, []);

    function getCurrentTheme() {
        return window.localStorage.getItem('theme') || 'light';
    }

    function updateDisplayTheme() {
        document.body.setAttribute('data-theme', getCurrentTheme());
    }

    const toggleTheme = () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme', newTheme);
        updateDisplayTheme();
    }

    return(
        <button 
            className={styles['theme-switch']}
            onClick={toggleTheme}
        >
            <DayIcon />
            <NightIcon />
        </button>
    )
}