import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { TechnologyPodium } from './TechnologyPodium';

const items = [
    { title: 'Python', description: 'I have done some Python throughout my journey, but I prefer other technologies.', extras: ['Flask', 'MySQL', 'FastAPI'] },
    { title: 'Node.js', description: 'The first backend language I tried and the language I have kept by my side.', extras: ['MySQL', 'GraphQL', 'Express.js'] },
    { title: 'JavaScript', description: 'The language I started with and fell in love with almost immediately.', extras: ['JSX', 'Next.js', 'React.js', 'TypeScript'] },
    { title: 'CSS', description: 'Designs have lightened up for me. I love exploring design posibilities!', extras: ['Figma', 'Sass/Scss', 'Animations', 'Responsiveness'] },
    { title: 'HTML', description: 'Raw HTML is rare. I prefer writing JSX. Whichever you prefer, it’s a piece of cake.', extras: ['JSX', 'SEO'] }
]
export type TechnologyItem = typeof items[0];

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
        <div 
            className={className} 
            data-section={'technologies'}
            ref={ref}
        >
            <div className={styles['technology-podiums']}>
                {items.map((item, index) => <TechnologyPodium {...item} index={index} key={item.title} />)}
            </div>
        </div>
    )
}