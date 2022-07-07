import React from 'react';
import styles from './Tooltip.module.scss';

export default function Tooltip({ content, children }: {
    content: string;
    children: any;
}) {
    return(
        <div className={styles['tooltip']} data-tooltip-content={content}>
            {children}
        </div>
    )
}