import React from 'react';
import { TechnologyType } from '../../../assets/technologies/types';
import styles from '../../../styles/Home.module.scss';

export const TechnologyPodium: React.FC<TechnologyType & {index: number}> = ({ title, description, extras, index }) => {
    const animationDelay = `${Math.abs((index - Math.floor(4 / 2)) / 2)}s`;

    const className = [
        styles['technology-podium'],
        index === 2 ? styles['main'] : ''
    ].join(' ');
    return(
        <div className={className} style={{ animationDelay }}>
            <div className={styles['technology-title']}>
                {title}
            </div>
            <div className={styles['technology-podium-content']}>
                <span>
                    {description}
                </span>

                <div className={styles['technology-extras']}>
                    {extras.map(extra => <div key={extra}>{extra}</div>)}
                </div>
            </div>
        </div>
    )
}