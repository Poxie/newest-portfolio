import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';

export const ProjectsHeader = () => {
    const [isHidden, setIsHidden] = useState(true);
    const ref = useRef<HTMLHeadingElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .8) {
                setIsHidden(false);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    const className = [
        styles['projects-header'],
        isHidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <h2 className={className} ref={ref}>
            Projects
        </h2>
    )
}