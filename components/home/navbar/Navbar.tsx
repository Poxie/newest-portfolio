import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { NavbarButtons } from './NavbarButtons';
import { NavbarTabs } from './NavbarTabs';

export const Navbar = () => {
    // const [fixed, setFixed] = useState(false);

    // Function to update navbar's position
    // const updatePosition = (fixed: boolean) => setFixed(fixed);

    // Listening to window scroll
    // useEffect(() => {
    //     const scroll = () => {
    //         const scroll = window.scrollY;

    //         // If scroll meets threshold, update position to fixed
    //         if(scroll > 140) {
    //             updatePosition(true);
    //         }

    //         // Resetting position on scroll to top
    //         if(scroll <= 0) {
    //             updatePosition(false);
    //         }
    //     }

    //     // Adidng and removing scroll event listener
    //     window.addEventListener('scroll', scroll);
    //     return () => window.removeEventListener('scroll', scroll);
    // }, []);

    const className = [
        styles['navbar'],
        // fixed ? styles['navbar-fixed'] : ''
    ].join(' ');
    return(
        <header className={className}>
            <nav className={styles['navbar-content']}>
                <NavbarTabs />
                <NavbarButtons />
            </nav>
        </header>
    )
}