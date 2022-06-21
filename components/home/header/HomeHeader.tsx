import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderText } from './HomeHeaderText';

export const HomeHeader = () => {
    return(
        <div className={styles['header']}>
            <HomeHeaderText />
        </div>
    )
}