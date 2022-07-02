import React, { useEffect, useRef, useState } from 'react';
import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import styles from '../../../styles/Home.module.scss';
import { CardType } from './ProjectsContent';

const ITEM_DELAY = 100;
const ITEM_DURATION = 1200;
export const ProjectCard: React.FC<CardType & {index: number}> = ({ title, text, links, path, tech, date, index }) => {
    const [isAnimationDone, setIsAnimationDone] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .8) {
                setIsHidden(false);
                setTimeout(() => setIsAnimationDone(true), ITEM_DURATION + ITEM_DELAY * index);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);
    
    const className = [
        styles['project-card'],
        isHidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <div 
            style={{ transitionDelay: !isAnimationDone ? `${index * ITEM_DELAY}ms` : 'unset' }} 
            className={className} 
            ref={ref}
        >
            <div className={styles['project-card-main']}>
                <div className={styles['project-card-header']}>
                    <h5>
                        {title}
                    </h5>
                    <div className={styles['project-card-links']}>
                        {links.map(link => (
                            <a href={link.path} rel="noreferrer" target="_blank" key={link.path}>
                                {link.icon}
                            </a>
                        ))}
                        <a href={path} rel="noreferrer" target="_blank">
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </div>
                <span className={styles['project-card-description']}>
                    {text}
                </span>
            </div>
            <div className={styles['project-card-footer']}>
                <div className={styles['project-card-tech']}>
                    {tech.join(', ')}
                </div>
                <span className={styles['project-card-date']}>
                    {date}
                </span>
            </div>
        </div>
    )
}