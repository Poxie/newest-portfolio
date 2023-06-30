import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { AboutCard } from './AboutCard';
import { AboutTabs } from './AboutTabs';
import { AboutTimeline } from './AboutTimeline';
import { AboutLinks } from './AboutLinks';
import aboutJSON from '../../../assets/about/index.json';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';
const cards = aboutJSON.cards;

export const AboutContent = () => {
    const [tab, setTab] = useState(cards[0].id);

    const ref = useRef<HTMLHeadingElement>(null);

    const { isVisible } = useScrollIntoView(ref);

    const activeCard = cards.find(card => card.id === tab) as typeof cards[0];
    const className = [
        styles['about-container'],
        !isVisible ? styles['hidden'] : ''
    ].join(' ');
    return(
        <div className={className} ref={ref}>
            <AboutTabs 
                activeTab={tab}
                setActiveTab={setTab}
            />
            
            <AboutCard 
                {...activeCard}
                extra={tab === 'who-am-i' ? <AboutLinks /> : undefined}
                footer={tab === 'my-story' ? <AboutTimeline /> : undefined}
                key={tab}
            />
        </div>
    )
}