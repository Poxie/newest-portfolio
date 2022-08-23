import React from 'react';
import { ProjectLinkType } from '../../../assets/projects/types';
import styles from '../../../styles/Home.module.scss';
import { ProjectTileFooter } from './ProjectTileFooter';

export const ProjectTileMain: React.FC<{
    title: string;
    description: string;
    path: string;
    links: ProjectLinkType[];
}> = ({ title, description, path, links }) => {
    return(
        <div className={styles['project-tile-main']}>
            <h2 className={styles['project-tile-title']}>
                <span>
                    {title}
                </span>
            </h2>
            <p>
                {description}
            </p>
            <ProjectTileFooter 
                links={links}
                path={path}
            />
        </div>
    )
}