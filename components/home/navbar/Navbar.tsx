import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { NavbarSwitch } from './NavbarSwitch';
import { NavbarTabs } from './NavbarTabs';

export const Navbar = () => {
    return(
        <header className={styles['navbar']}>
            <nav className={styles['navbar-content']}>
                <NavbarTabs />
                <NavbarSwitch />
            </nav>
        </header>
    )
}