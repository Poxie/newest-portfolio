import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { ProjectCard } from './ProjectCard';
import projects from '../../../assets/projects/index.json';

export const ProjectsContent = () => {
    return(
        <div className={styles['project-cards']}>
            {projects.map((card, key) => <ProjectCard {...card} index={key} key={card.title} />)}
        </div>
    )
}