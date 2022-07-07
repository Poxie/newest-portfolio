import React from 'react';
import { FigmaIcon } from '../../../assets/icons/FigmaIcon';
import { GithubIcon } from '../../../assets/icons/GithubIcon';
import { ProjectLinkType } from '../../../assets/projects/types';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';

export const ProjectTileFooter: React.FC<{
    links: ProjectLinkType[];
    path: string;
}> = ({ links, path }) => {
    return(
        <div className={styles['project-tile-footer']}>
            <Button className={styles['project-tile-button']}>
                <a href={path} target="_blank" rel="noreferrer">
                    Try it out
                </a>
            </Button>
            <div className={styles['project-tile-links']}>
                {links.map((link, index) => (
                    <a 
                        href={link.path} 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label={link.title}
                        style={{ animationDelay: `${1.5 + index * .2}s` }}
                        className={styles['project-tile-link']}
                        key={link.title}
                    >
                        {link.icon === 'github' ? <GithubIcon /> : <FigmaIcon />}
                    </a>
                ))}
            </div>
        </div>
    )
}