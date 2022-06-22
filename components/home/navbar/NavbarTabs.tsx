import React, { useCallback, useEffect, useState } from 'react';
import { HamIcon } from '../../../icons/HamIcon';
import styles from '../../../styles/Home.module.scss';
import { NavbarTab } from './NavbarTab';

const SPACE_FROM_TOP = 500;
export const NavbarTabs = () => {
    const [tabs, setTabs] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [mobileVisible, setMobileVisible] = useState(false);

    // Closing mobile
    const closeMobile = useCallback(() => setMobileVisible(false), [setMobileVisible]);

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

    const className = [
        styles['navbar-tab-container'],
        mobileVisible ? styles['mobile-visible'] : ''
    ].join(' ');
    return(
        <div className={styles['navbar-tabs']}>
            <button className={styles['ham']} onClick={() => setMobileVisible(!mobileVisible)}>
                <HamIcon />
            </button>

            <div className={className}>
                {tabs.map((tab, key) => (
                    <NavbarTab 
                        text={tab} 
                        id={tab.toLowerCase()}
                        active={tab === activeTab}
                        key={tab.toLowerCase()} 
                        onClick={closeMobile}
                    />
                ))}
            </div>
        </div>
    )
}