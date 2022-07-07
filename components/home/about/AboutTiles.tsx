import React from 'react';
import styles from '../../../styles/Home.module.scss';

const tiles = ['18 years old', 'Natural science program', 'Last year of high school', 'Never-ending curiousity', 'Great interest in full-stack']
export const AboutTiles = () => {
    return(
        <div className={styles['about-tiles']}>
            {tiles.map((tile, index) => (
                <div 
                    className={styles['about-tile']}
                    style={{ animationDelay: `${index * .2 + .1}s` }}
                    key={tile}
                >
                    {tile}
                </div>
            ))}
        </div>
    )
}