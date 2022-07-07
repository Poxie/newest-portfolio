import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { AboutTiles } from './AboutTiles';

export const AboutCard: React.FC<{
    id: string;
    title: string;
    text: string;
    tiles: string[];
    footer: any;
}> = ({ title, text, tiles, footer }) => {
    return(
        <>
        <div className={styles['about-card']}>
            <div className={styles['about-card-text']}>
                <h4>
                    {title}
                </h4>
                <p>
                    {text}
                </p>
            </div>
            <AboutTiles tiles={tiles} />
        </div>
        {footer}
        </>
    )
}