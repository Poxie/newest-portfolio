import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { AboutCard } from './AboutCard';
import { AboutTabs } from './AboutTabs';
import { AboutTimeline } from './AboutTimeline';
import { cards } from '../../../assets/about/index.json';

export const AboutContent = () => {
    const [tab, setTab] = useState(cards[0].id);
    const [isHidden, setIsHidden] = useState(true);
    const ref = useRef<HTMLHeadingElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .7) {
                setIsHidden(false);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    const activeCard = cards.find(card => card.id === tab) as typeof cards[0];
    const className = [
        styles['about-content'],
        isHidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <div className={className} ref={ref}>
            <AboutTabs 
                activeTab={tab}
                setActiveTab={setTab}
            />
            
            <AboutCard 
                {...activeCard}
                footer={tab === 'my-story' ? <AboutTimeline /> : undefined}
                key={tab}
            />
        </div>
    )
}