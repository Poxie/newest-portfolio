import React, { useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { AboutCard } from './AboutCard';
import { AboutTabs } from './AboutTabs';

const cards = [
    { title: 'Who am I?', text: 'My name is Albin Kärvling, and I am currently 18 years old. I am enrolled in the natural science program, and I am as of now at my third and last year of high school. When I’m not at school, I spend most of my time programming. If you don’t find me programming, I might be playing video games or cuddling with my cats!', id: 'who-am-i', extra: <></> },
    { title: 'My story', text: 'My name is Albin Kärvling, and I am currently 18 years old. I am enrolled in the natural science program, and I am as of now at my third and last year of high school. When I’m not at school, I spend most of my time programming. If you don’t find me programming, I might be playing video games or cuddling with my cats!', id: 'my-story', extra: <></> }
];
export const AboutContent = () => {
    const [tab, setTab] = useState(cards[0].id);

    const activeCard = cards.find(card => card.id === tab) as typeof cards[0];
    return(
        <div className={styles['about-content']}>
            <AboutTabs 
                activeTab={tab}
                setActiveTab={setTab}
            />
            
            <AboutCard 
                {...activeCard}
                key={tab}
            />
        </div>
    )
}