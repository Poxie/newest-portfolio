import React from 'react';
import { HomeWaveIcon } from '../../../assets/icons/HomeWaveIcon';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderAnimation } from './HomeHeaderAnimation';
import { HomeHeaderText } from './HomeHeaderText';

export const HomeHeader = () => {
    return(
        <div className={styles['header']} data-section={'home'}>
            <div className={styles['header-content']}>
                <HomeHeaderText />
                <HomeHeaderAnimation />
            </div>
            <HomeWaveIcon />
        </div>
    )
}