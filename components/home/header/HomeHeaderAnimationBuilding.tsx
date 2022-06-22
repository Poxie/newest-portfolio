import React, { CSSProperties, useEffect, useRef } from 'react';
import { ToolsIcon } from '../../../icons/ToolsIcon';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderAnimationPercentage } from './HomeHeaderAnimationPercentage';

const ANIMATION_DURATION = 3500
export const HomeHeaderAnimationBuilding: React.FC<{
    active: boolean;
    changeState: () => void;
}> = ({ active, changeState }) => {
    const refs = useRef(Array(4).map(() => React.createRef<HTMLDivElement>()));

    // On active, show elements, else remove active class
    useEffect(() => {
        if(!active) {
            refs.current.forEach(ref => ref.current?.classList.remove(styles['active']));
        } else {
            refs.current.forEach(ref => ref.current?.classList.add('active'));
        }

        // After animation is done, update animation state
        let timeout: NodeJS.Timeout;
        if(active) timeout = setTimeout(changeState, ANIMATION_DURATION + 300);

        return () => clearTimeout(timeout);
    }, [active, changeState]);

    const className = [
        styles['animation-building'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div className={className}>
            <div className={styles['animation-icon']}>
                <ToolsIcon />
            </div>

            <div className={styles['animation-interface']}>
                <div className={styles['animation-title']} style={{ '--animation-delay': '200ms' } as CSSProperties} ref={refs.current[0]}>
                    Hi, Albin here.
                </div>
                <div className={styles['animation-description']} style={{ '--animation-delay': '1000ms' } as CSSProperties} ref={refs.current[1]}>
                    I create stuff sometimes.
                </div>
                <div className={styles['animation-text']} style={{ '--animation-delay': '1600ms' } as CSSProperties} ref={refs.current[2]}>
                    I am a software engineer with great interest in full stack development. I specialize in frontend, but greatly enjoy backend development as well.
                </div>
                <div className={styles['animation-button']} style={{ '--animation-delay': '2000ms' } as CSSProperties} ref={refs.current[3]}>
                    More about me
                </div>
            </div>

            {active && (
                <HomeHeaderAnimationPercentage 
                    totalDuration={ANIMATION_DURATION}
                    text={'Building...'}
                />
            )}
        </div>
    )
}