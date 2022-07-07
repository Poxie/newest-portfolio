import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { AboutCard } from './AboutCard';
import { AboutTabs } from './AboutTabs';
import { AboutTiles } from './AboutTiles';

const cards = [
    { title: 'Who am I?', text: 'My name is Albin Kärvling and I am 18 years old. I am currently spending a lot of my time at high school where I study natural science. I have always had great interest in web development despite my studies of natural science. Therefore, a lot of my time outside of school is spent programming. Further down the site, some of my projects can be found. If you don\'t find me programming it is likely you can find me playing games with friends or cuddling with my cats!', id: 'who-am-i', extra: <></> },
    { title: 'My story', text: 'My story has its beginning in the early days of 2017. A friend of mine introduced me to JavaScript, but I showed little to no interest in programming. My journey began after a while of being persuaded. At first things were not looking nice, but I quickly picked up the main ideas of the languages of web development. As we move along the timeline React comes into the picture. It revolutionized the way I wrote code and I fell in love immediately. Since the rise of React I have picked up different design tools and different technologies for backend development; enough to call myself a full-stack developer.', id: 'my-story', extra: <></> }
];
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
                extra={<AboutTiles />}
                key={tab}
            />
        </div>
    )
}