import React from 'react';
import styles from '../../../styles/Home.module.scss';

export const AboutTiles: React.FC<{tiles: string[]}> = ({ tiles }) => {
    return(
        <div className={styles['about-tiles']}>
            {tiles.map((tile, index) => (
                <div 
                    className={styles['about-tile']}
                    style={{ animationDelay: `${index * .2 + .6}s` }}
                    key={tile}
                >
                    {tile}
                </div>
            ))}
        </div>
    )
}