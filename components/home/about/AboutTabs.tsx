import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import aboutJSON from '../../../assets/about/index.json';
const tabs = aboutJSON.tabs;

export const AboutTabs: React.FC<{
    activeTab: string;
    setActiveTab: (tabId: string) => void;
}> = ({ activeTab, setActiveTab }) => {
    const tempRefs = useRef<RefObject<HTMLButtonElement>[]>([]);
    const [refs, setRefs] = useState<RefObject<HTMLButtonElement>[]>([]);
    const stripe = useRef<HTMLDivElement>(null);

    // Updating refs on change
    useEffect(() => setRefs(tempRefs.current), [tempRefs.current]);

    // Changing the stripe position
    useEffect(() => {
        refs.forEach(ref => {
            if(!stripe.current) return;
            if(ref.current?.getAttribute('data-tab') === activeTab) {
                const left = ref.current.offsetLeft;
                const width = ref.current.offsetWidth;
                stripe.current.style.left = `${left}px`;
                stripe.current.style.width = `${width}px`;
            }
        })
    }, [refs, activeTab]);

    return(
        <div className={styles['about-tabs']}>
            {tabs.map((tab, index) => {
                const ref = React.createRef<HTMLButtonElement>();
                tempRefs.current.push(ref);
                
                const className = [
                    styles['about-tab'],
                    tab.id === activeTab ? styles['active'] : ''
                ].join(' ');
                return(
                    <button 
                        data-tab={tab.id}
                        className={className}
                        style={{ animationDelay: `${index * .2}s` }}
                        onClick={() => setActiveTab(tab.id)}
                        key={tab.id}
                        ref={ref}
                    >
                        {tab.text}
                    </button>
                )
            })}
            <div className={styles['about-stripe']} aria-hidden="true" ref={stripe} />
        </div>
    )
}