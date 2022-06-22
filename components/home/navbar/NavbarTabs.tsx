import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { NavbarTab } from './NavbarTab';

const SPACE_FROM_TOP = 500;
export const NavbarTabs = () => {
    const [tabs, setTabs] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    useEffect(() => {
        // Fetching tabs based on data attributes
        const tabs: string[] = [];
        document.querySelectorAll('[data-section]').forEach(section => {
            const tab = section.getAttribute('data-section');
            if(!tab) return;
            tabs.push(tab.slice(0,1).toUpperCase() + tab.slice(1));
        })
        setTabs(tabs);

        // Determining active tab
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