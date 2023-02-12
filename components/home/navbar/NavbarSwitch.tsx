import { useEffect, useRef } from 'react';
import { DayIcon } from '../../../assets/icons/DayIcon';
import { NightIcon } from '../../../assets/icons/NightIcon';
import styles from '../../../styles/Home.module.scss';

export const NavbarSwitch = () => {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(updateDisplayTheme, []);

    function getTheme(prevTheme?: boolean) {
        const currentTheme = window.localStorage.getItem('theme') || 'light';
        return prevTheme ? (
            currentTheme === 'light' ? 'dark': 'light'
        ) : currentTheme;
    }

    function updateDisplayTheme() {
        if(!ref.current) return;
        document.body.setAttribute('data-theme', getTheme());
        ref.current.setAttribute('aria-label', `Turn on ${getTheme(true)} theme`);
    }

    const toggleTheme = () => {
        const currentTheme = getTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        window.localStorage.setItem('theme', newTheme);
        updateDisplayTheme();
    }

    return(
        <button 
            className={styles['theme-switch']}
            onClick={toggleTheme}
            ref={ref}
        >
            <DayIcon />
            <NightIcon />
        </button>
    )
}