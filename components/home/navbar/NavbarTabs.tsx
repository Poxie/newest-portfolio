import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { NavbarTab } from './NavbarTab';

const SPACE_FROM_TOP = 200;
const tabs = ['Home', 'About', 'Projects', 'Knowledge'];
export const NavbarTabs = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    useEffect(() => {
        const scroll = () => {
            const scroll = window.scrollY;
            
            for(const tab of tabs) {
                const element = document.querySelector(`[data-section="${tab.toLowerCase()}"]`);
                if(!element) continue;
                
                const fromTop = (element?.getBoundingClientRect().top || 0) + window.scrollY - SPACE_FROM_TOP;
                if(scroll >= fromTop) {
                    setActiveTab(tab);
                    // break;
                }
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    return(
        <div className={styles['navbar-tabs']}>
            {tabs.map((tab, key) => (
                <NavbarTab 
                    text={tab} 
                    id={tab.toLowerCase()}
                    // Hard-coded for now
                    active={tab === activeTab}
                    key={tab.toLowerCase()} 
                />
            ))}
        </div>
    )
}