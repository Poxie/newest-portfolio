import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ExternalLinkIcon } from '../../../assets/icons/ExternalLinkIcon';
import { FigmaIcon } from '../../../assets/icons/FigmaIcon';
import { GithubIcon } from '../../../assets/icons/GithubIcon';
import { ProjectLinkType, ProjectType } from '../../../assets/projects/types';
import styles from '../../../styles/Home.module.scss';
import Tooltip from '../../tooltip';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';

const ITEM_DELAY = 100;
const ITEM_DURATION = 1200;
const SCROLL_FROM_TOP = 200;
export const ProjectCard: React.FC<ProjectType & {index: number}> = ({ id, title, shortDescription, links, path, techStack, date, index }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { isAnimationDone, isVisible } =  useScrollIntoView(ref, {
        animationDuration: ITEM_DURATION + ITEM_DELAY * index
    });

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
        !isVisible ? styles['hidden'] : ''
    ].join(' ');
    return(
        <div
            style={{ transitionDelay: !isAnimationDone ? `${index * ITEM_DELAY}ms` : 'unset' }} 
            className={className} 
            ref={ref}
        >
            <div className={styles['project-card-main']}>
                <div className={styles['project-card-header']}>
                    <h3>
                        {title}
                    </h3>
                    <div className={styles['project-card-links']}>
                        {links.map(link => (
                            <Tooltip content={link.title} key={link.path}>
                                <a 
                                    href={link.path} 
                                    rel="noreferrer" 
                                    target="_blank"
                                    aria-label={`Go to ${title}'s ${link.icon}`}
                                >
                                    {link.icon === 'github' ? <GithubIcon /> : <FigmaIcon />}
                                </a>
                            </Tooltip>
                        ))}
                        <Tooltip content={'Go to site'}>
                            <a 
                                href={path} 
                                rel="noreferrer" 
                                target="_blank"
                                aria-label={`Visit ${title}`}
                            >
                                <ExternalLinkIcon />
                            </a>
                        </Tooltip>
                    </div>
                </div>
                <span className={styles['project-card-description']}>
                    {shortDescription}
                </span>
            </div>
            <div className={styles['project-card-footer']}>
                <span className={styles['project-card-tech']}>
                    {techStack.join(', ')}
                </span>
                <span className={styles['project-card-date']}>
                    {date}
                </span>
            </div>
            <button 
                aria-label={`Go to ${title} section`}
                className={styles['project-button']}
                onClick={goToTile}
            />
        </div>
    )
}