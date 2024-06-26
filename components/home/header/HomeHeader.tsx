import React from 'react';
import dynamic from 'next/dynamic';
import { HomeWaveIcon } from '../../../assets/icons/HomeWaveIcon';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderText } from './HomeHeaderText';

// Making sure animation is only visible to client users
const HomeHeaderAnimation = dynamic(
    () => import('./HomeHeaderAnimation').then(res => res.HomeHeaderAnimation) as any,
    { ssr: false }
);

export const HomeHeader = () => {
    return(
        <section className={styles['header']} data-section={'home'}>
            <div className={styles['header-content']}>
                <HomeHeaderText />
                <HomeHeaderAnimation />
            </div>
            <HomeWaveIcon />
        </section>
    )
}