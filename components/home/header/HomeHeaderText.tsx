import React, { CSSProperties } from 'react';
import { ArrowIcon } from '../../../assets/icons/ArrowIcon';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';
import { HomeHeaderTextMain } from './HomeHeaderTextMain';

export const HomeHeaderText = () => {
    const moreAboutMe = () => {
        const element = document.querySelector(`[data-section="about"]`);
        const top = window.scrollY + (element?.getBoundingClientRect().top || 0) - 200;
        window.scrollTo({ top })
    }

    return(
        <div className={styles['header-text']}>
            <HomeHeaderTextMain />

            <h2 style={{ "--animation-delay": '1500ms' } as CSSProperties}>
                I create stuff sometimes.
            </h2>
            <p style={{ "--animation-delay": '1800ms' } as CSSProperties}>
                I am a software engineer with great interest in full stack development. I specialize in frontend, but greatly enjoy backend development as well.
            </p>
            <Button 
                type={'hollow'} 
                style={{ "--animation-delay": '1950ms' } as CSSProperties}
                onClick={moreAboutMe}
                ariaLabel={'More about me'}
            >
                <ArrowIcon />
                More about me
            </Button>
        </div>
    )
}