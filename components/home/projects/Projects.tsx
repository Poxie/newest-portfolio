import React from 'react';
import { ProjectsWaveIcon } from '../../../icons/ProjectsWaveIcon';
import styles from '../../../styles/Home.module.scss';
import { ProjectsContent } from './ProjectsContent';
import { ProjectsHeader } from './ProjectsHeader';

export const Projects = () => {
    return(
        <div className={styles['projects']} data-section={'projects'}>
            <div className={styles['projects-container']}>
                <ProjectsHeader />
                <ProjectsContent />
            </div>
            <ProjectsWaveIcon />
        </div>
    )
}