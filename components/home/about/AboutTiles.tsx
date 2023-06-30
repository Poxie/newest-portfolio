import React from 'react';
import styles from '../../../styles/Home.module.scss';

export const AboutTiles: React.FC<{
    tiles: string[];
    title: string;
}> = ({ tiles, title }) => {
    return(
        <ul 
            className={styles['about-tiles']}
            aria-label={`Summary of ${title}`}
        >
            {tiles.map((tile, index) => (
                <li 
                    className={styles['about-tile']}
                    style={{ animationDelay: `${index * .2 + .6}s` }}
                    key={tile}
                >
                    {tile}
                    <span aria-hidden="true" className={`${styles['tile-border']} ${styles['tile-border-top']}`}></span>
                    <span aria-hidden="true" className={`${styles['tile-border']} ${styles['tile-border-bottom']}`}></span>
                </li>
            ))}
        </ul>
    )
}