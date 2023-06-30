import React from 'react';
import { ReactElement } from 'react';
import { AboutCardType } from '../../../assets/about/types';
import styles from '../../../styles/Home.module.scss';
import { AboutTiles } from './AboutTiles';

export const AboutCard: React.FC<AboutCardType & { footer?: ReactElement, extra?: ReactElement }> = ({ title, text, tiles, footer, extra }) => {
    return(
        <>
        <div className={styles['about-card']}>
            <div className={styles['about-card-text']}>
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
                <AboutTiles 
                    tiles={tiles} 
                    title={title} 
                />
                {extra}
            </div>
        </div>
        {footer}
        </>
    )
}