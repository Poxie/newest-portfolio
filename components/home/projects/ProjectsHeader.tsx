import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';

export const ProjectsHeader = () => {
    const ref = useRef<HTMLHeadingElement>(null);

    const { isVisible } = useScrollIntoView(ref);

    const className = [
        styles['projects-header'],
        !isVisible ? styles['hidden'] : ''
    ].join(' ');
    return(
        <h2 className={className} ref={ref}>
            Projects
        </h2>
    )
}