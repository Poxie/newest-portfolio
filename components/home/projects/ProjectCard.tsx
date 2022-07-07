import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ExternalLinkIcon } from '../../../assets/icons/ExternalLinkIcon';
import styles from '../../../styles/Home.module.scss';
import Tooltip from '../../tooltip';
import { CardType } from './ProjectsContent';

const ITEM_DELAY = 100;
const ITEM_DURATION = 1200;
const SCROLL_FROM_TOP = 200;
export const ProjectCard: React.FC<CardType & {index: number}> = ({ id, title, text, links, path, tech, date, index }) => {
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

    // Function to scroll to project tile
    const goToTile = useCallback((e: React.MouseEvent) => {
        // Checking if link is clicked, then prevent scroll
        const target = e.target as Element;
        if(['svg', 'path'].includes(target.tagName.toLowerCase())) return;

        // Scrolling to project tile
        const element = document.querySelector(`[data-project="${id}"]`);
        const top = (element?.getBoundingClientRect().top || 0) + window.scrollY - SCROLL_FROM_TOP;
        window.scrollTo({ top });
    }, [id]);
    
    const className = [
        styles['project-card'],
        isHidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <div 
            onClick={goToTile}
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
                            <Tooltip content={link.title} key={link.path}>
                                <a href={link.path} rel="noreferrer" target="_blank">
                                    {link.icon}
                                </a>
                            </Tooltip>
                        ))}
                        <Tooltip content={'Go to site'}>
                            <a href={path} rel="noreferrer" target="_blank">
                                <ExternalLinkIcon />
                            </a>
                        </Tooltip>
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