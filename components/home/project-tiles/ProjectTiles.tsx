import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { ProjectTile } from './ProjectTile';
import projects from '../../../assets/projects/index.json';

export const ProjectTiles = () => {
    return(
        <section className={styles['project-tiles']}>
            <div className={styles['project-tiles-container']}>
                {projects.map((tile, key) => (
                    <ProjectTile 
                        {...tile} 
                        index={key}
                        key={tile.title} 
                    />
                ))}
            </div>
        </section>
    )
}