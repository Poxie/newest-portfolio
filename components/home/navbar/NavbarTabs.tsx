import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { NavbarTab } from './NavbarTab';

const tabs = ['Home', 'About', 'Projects', 'Knowledge'];
export const NavbarTabs = () => {
    return(
        <div className={styles['navbar-tabs']}>
            {tabs.map((tab, key) => (
                <NavbarTab 
                    text={tab} 
                    id={tab.toLowerCase()}
                    // Hard-coded for now
                    active={key === 0}
                    key={tab.toLowerCase()} 
                />
            ))}
        </div>
    )
}