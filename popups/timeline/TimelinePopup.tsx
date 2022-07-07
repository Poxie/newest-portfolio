import React from 'react';
import styles from './TimelinePopup.module.scss';

export const TimelinePopup: React.FC<{
    title: string;
    text: string;
    date: string;
    year: number;
}> = ({ title, text, date }) => {
    return(
        <div className={styles['container']}>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['text']}>
                {text}
            </div>
            <div className={styles['date']}>
                {date}
            </div>
        </div>
    )
}