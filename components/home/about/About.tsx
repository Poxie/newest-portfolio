import React from 'react';
import { AboutWaveIcon } from '../../../assets/icons/AboutWaveIcon';
import styles from '../../../styles/Home.module.scss';
import { AboutContent } from './AboutContent';

export const About = () => {
    return(
        <section className={styles['about']} data-section={'about'}>
            <div className={styles['about-container']}>
                <AboutContent />
            </div>
            <AboutWaveIcon />
        </section>
    )
}