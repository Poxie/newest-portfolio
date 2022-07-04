import React from 'react';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';
import { TileLink } from './ProjectTiles';

export const ProjectTileFooter: React.FC<{
    links: TileLink[];
    path: string;
}> = ({ links, path }) => {
    return(
        <div className={styles['project-tile-footer']}>
            <Button className={styles['project-tile-button']}>
                <a href={path} target="_blank" rel="noreferrer">
                    Try it out
                </a>
            </Button>
            <div className={styles['project-tile-links']}>
                {links.map((link, index) => (
                    <a 
                        href={link.path} 
                        target="_blank" 
                        rel="noreferrer"
                        aria-label={link.text}
                        style={{ animationDelay: `${1.5 + index * .2}s` }}
                        className={styles['project-tile-link']}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}