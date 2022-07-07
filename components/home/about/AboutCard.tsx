import React from 'react';
import { ReactElement } from 'react';
import { AboutCardType } from '../../../assets/about/types';
import styles from '../../../styles/Home.module.scss';
import { AboutTiles } from './AboutTiles';

export const AboutCard: React.FC<AboutCardType & { footer?: ReactElement }> = ({ title, text, tiles, footer }) => {
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