import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderAnimation } from './HomeHeaderAnimation';
import { HomeHeaderText } from './HomeHeaderText';

export const HomeHeader = () => {
    return(
        <div className={styles['header']}>
            <HomeHeaderText />
            <HomeHeaderAnimation />
        </div>
    )
}