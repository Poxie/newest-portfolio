import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.scss';

export const HomeHeaderAnimationPercentage: React.FC<{
    totalDuration: number;
    text: string;
}> = ({ totalDuration, text }) => {
    const [duration, setDuration] = useState(0);

    // Updating duration
    useEffect(() => {
        setDuration(0);

        const interval = setInterval(() => {
            setDuration(prev => {
                const newDuration = prev + 50;
                if(newDuration / totalDuration >= 1) clearInterval(interval);
                return newDuration;
            });
        }, 50);
        
        return () => clearInterval(interval);
    }, [totalDuration]);

    return(
        <div className={styles['animation-progress']}>
            {text}
            
            <span className={styles['animation-progress-percentage']}>
                {Math.floor((duration / totalDuration) * 100)}%
            </span>
        </div>
    )
}