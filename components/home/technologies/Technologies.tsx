import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { TechnologyPodium } from './TechnologyPodium';
import technologies from '../../../assets/technologies/index.json';

export const Technologies = () => {
    const [hidden, setHidden] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .5) {
                setHidden(false);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);
    
    const className = [
        styles['technologies'],
        hidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <section 
            className={className} 
            data-section={'technologies'}
            ref={ref}
        >
            <div className={styles['technology-podiums']}>
                {technologies.map((item, index) => <TechnologyPodium {...item} index={index} key={item.title} />)}
            </div>
        </section>
    )
}