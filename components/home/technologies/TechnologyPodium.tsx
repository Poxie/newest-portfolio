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
            <h2 className={styles['technology-title']}>
                {title}
            </h2>
            <div className={styles['technology-podium-content']}>
                <span>
                    {description}
                </span>

                <ul className={styles['technology-extras']} aria-label="Tech-stack">
                    {extras.map(extra => <li key={extra}>{extra}</li>)}
                </ul>
            </div>
        </div>
    )
}