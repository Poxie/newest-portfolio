import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { ProjectTile } from './ProjectTile';
import projects from '../../../assets/projects/index.json';

export const ProjectTiles = () => {
    return(
        <div className={styles['project-tiles']}>
            <div className={styles['project-tiles-container']}>
                {projects.map(tile => <ProjectTile {...tile} key={tile.title} />)}
            </div>
        </div>
    )
}