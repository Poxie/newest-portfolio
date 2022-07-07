import React, { CSSProperties, useEffect } from 'react';
import { ArrowUploadIcon } from '../../../assets/icons/ArrowUploadIcon';
import { DeployIcon } from '../../../assets/icons/DeployIcon';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderAnimationPercentage } from './HomeHeaderAnimationPercentage';

const ANIMATION_DURATION = 3400;
export const HomeHeaderAnimationDeploying: React.FC<{
    active: boolean;
    changeState: () => void;
}> = ({ active, changeState }) => {
    // Changing state on timer complete
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if(active) timeout = setTimeout(changeState, ANIMATION_DURATION + 300);

        return () => clearTimeout(timeout);
    }, [active]);

    const className = [
        styles['animation-deploying'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div className={className}>
            <div className={styles['animation-icon']}>
                <DeployIcon />
            </div>

            <div className={styles['animation-interface']}>
                <div className={styles['animation-air-container']}>
                    <div className={styles['animation-air']} style={{ '--animation-delay': '1000ms' } as CSSProperties} />
                    <div className={styles['animation-air']} style={{ '--animation-delay': '1300ms' } as CSSProperties} />
                    <div className={styles['animation-air']} style={{ '--animation-delay': '1500ms' } as CSSProperties} />
                    <div className={styles['animation-air']} style={{ '--animation-delay': '1400ms' } as CSSProperties} />
                    <div className={styles['animation-air']} style={{ '--animation-delay': '1160ms' } as CSSProperties} />
                    <div className={styles['animation-air']} style={{ '--animation-delay': '1600ms' } as CSSProperties} />
                </div>
                <div className={styles['animation-upload-icon-container']}>
                    <div className={styles['animation-upload-icon']}>
                        <ArrowUploadIcon />
                    </div>
                </div>
            </div>
            {active && (
                <HomeHeaderAnimationPercentage 
                    text={'Deploying...'}
                    totalDuration={ANIMATION_DURATION}
                />
            )}
        </div>
    )
}