import React from 'react';
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';

export const ProjectTileImage: React.FC<{
    image: string;
}> = ({ image }) => {
    return(
        <div className={styles['project-tile-image']}>
            <div className={styles['project-tile-image-container']}>
                <Image 
                    src={image}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </div>
        </div>
    )
}