import React from 'react';
import { AboutWaveIcon } from '../../../icons/AboutWaveIcon';
import styles from '../../../styles/Home.module.scss';
import { AboutContent } from './AboutContent';
import { AboutHeader } from './AboutHeader';

export const About = () => {
    return(
        <div className={styles['about']} data-section={'about'}>
            <div className={styles['about-container']}>
                <AboutHeader />
                <AboutContent />
            </div>
            <AboutWaveIcon />
        </div>
    )
}