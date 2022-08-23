import React from 'react';
import { ProjectsWaveIcon } from '../../../assets/icons/ProjectsWaveIcon';
import styles from '../../../styles/Home.module.scss';
import { ProjectsContent } from './ProjectsContent';
import { ProjectsHeader } from './ProjectsHeader';

export const Projects = () => {
    return(
        <section className={styles['projects']} data-section={'projects'}>
            <div className={styles['projects-container']}>
                <ProjectsHeader />
                <ProjectsContent />
            </div>
            <ProjectsWaveIcon />
        </section>
    )
}