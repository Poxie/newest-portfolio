import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss'
import { ProjectTileMain } from './ProjectTileMain';
import { ProjectTileImage } from './ProjectTileImage';
import { ProjectType } from '../../../assets/projects/types';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';

export const ProjectTile: React.FC<ProjectType & {
    index: number;
}> = ({ id, image, title, longDescription, links, path, index }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { isVisible } = useScrollIntoView(ref);

    const className = [
        styles['project-tile'],
        isVisible ? styles['active'] : ''
    ].join(' ');
    return(
        <div className={className} data-project={id} ref={ref}>
            <ProjectTileMain 
                title={title} 
                description={longDescription}
                links={links}
                path={path}
            />
            <ProjectTileImage
                index={index}
                title={title} 
                image={image} 
                path={path}
            />
        </div>
    )
}