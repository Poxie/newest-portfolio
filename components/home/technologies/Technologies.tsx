import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { TechnologyPodium } from './TechnologyPodium';
import technologies from '../../../assets/technologies/index.json';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';

export const Technologies = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { isVisible } = useScrollIntoView(ref);
    
    const className = [
        styles['technologies'],
        !isVisible ? styles['hidden'] : ''
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