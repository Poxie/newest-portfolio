import React, { RefObject, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';

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
                const top = ref.current.offsetTop;
                stripe.current.style.top = `${top}px`;
            }
        })
    }, [refs, activeTab]);

    const tabs = [{text: 'Who am I?', id: 'who-am-i'}, {text: 'My story', id: 'my-story'}];
    return(
        <div className={styles['about-tabs']}>
            {tabs.map(tab => {
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
                        onClick={() => setActiveTab(tab.id)}
                        key={tab.id}
                        ref={ref}
                    >
                        {tab.text}
                    </button>
                )
            })}
            <div className={styles['about-stripe']} ref={stripe} />
        </div>
    )
}