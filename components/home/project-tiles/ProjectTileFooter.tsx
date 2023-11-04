import React from 'react';
import { FigmaIcon } from '../../../assets/icons/FigmaIcon';
import { GithubIcon } from '../../../assets/icons/GithubIcon';
import { ProjectLinkType } from '../../../assets/projects/types';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';
import Tooltip from '../../tooltip';

export const ProjectTileFooter: React.FC<{
    links: ProjectLinkType[];
    path: string | undefined;
}> = ({ links, path }) => {
    return(
        <div className={styles['project-tile-footer']}>
            {path && (
                <Button 
                    className={styles['project-tile-button']}
                    href={path}
                    target={'_blank'}
                >
                    Try it out
                </Button>
            )}
            <div className={styles['project-tile-links']}>
                {links.map((link, index) => (
                    <Tooltip content={link.title} key={link.title}>
                        <a 
                            href={link.path} 
                            target="_blank" 
                            rel="noreferrer"
                            aria-label={link.title}
                            style={{ animationDelay: `${1.5 + index * .2}s` }}
                            className={styles['project-tile-link']}
                        >
                            {link.icon === 'github' ? <GithubIcon /> : <FigmaIcon />}
                        </a>
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}