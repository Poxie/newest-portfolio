import React from 'react';
import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import styles from '../../../styles/Home.module.scss';
import { CardType } from './ProjectsContent';

export const ProjectCard: React.FC<CardType> = ({ title, text, links, path, tech }) => {
    return(
        <div className={styles['project-card']}>
            <div className={styles['project-card-main']}>
                <div className={styles['project-card-header']}>
                    <h5>
                        {title}
                    </h5>
                    <div className={styles['project-card-links']}>
                        {links.map(link => (
                            <a href={link.path} target="_blank" key={link.path}>
                                {link.icon}
                            </a>
                        ))}
                        <a href={path} target="_blank">
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </div>
                <span className={styles['project-card-description']}>
                    {text}
                </span>
            </div>
            <div className={styles['project-card-tech']}>
                {tech.join(', ')}
            </div>
        </div>
    )
}