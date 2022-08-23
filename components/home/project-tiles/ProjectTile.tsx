import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss'
import { ProjectTileMain } from './ProjectTileMain';
import { ProjectTileImage } from './ProjectTileImage';
import { ProjectType } from '../../../assets/projects/types';

export const ProjectTile: React.FC<ProjectType> = ({ id, image, title, longDescription, links, path }) => {
    const [active, setActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .6) {
                setActive(true);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    const className = [
        styles['project-tile'],
        active ? styles['active'] : ''
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
                title={title} 
                image={image} 
                path={path}
            />
        </div>
    )
}