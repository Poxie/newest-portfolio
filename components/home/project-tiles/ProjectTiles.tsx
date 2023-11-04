import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { ProjectTile } from './ProjectTile';
import projects from '../../../assets/projects/index.json';
import { ProjectDevleopmentHeader } from './ProjectDevelopmentHeader';

export const ProjectTiles = () => {
    return(
        <section className={styles['project-tiles']}>
            <div className={styles['project-tiles-container']}>
                {projects.map((tile, key) => (
                    <React.Fragment key={tile.title}>
                        <ProjectTile 
                            {...tile} 
                            index={key}
                        />
                        {!tile['is-dev'] && projects[key + 1]['is-dev'] && (
                            <ProjectDevleopmentHeader />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}