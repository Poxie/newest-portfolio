import React from 'react';
import styles from '../../../styles/Home.module.scss';

export const AboutCard: React.FC<{
    id: string;
    title: string;
    text: string;
    extra: any;
}> = ({ title, text, extra }) => {
    return(
        <div className={styles['about-card']}>
            <div className={styles['about-card-text']}>
                <h4>
                    {title}
                </h4>
                <p contentEditable={true} style={{ outline: 'none' }}>
                    {text}
                </p>
            </div>
            {extra}
        </div>
    )
}