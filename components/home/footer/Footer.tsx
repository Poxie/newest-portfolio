import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';

export const Footer = () => {
    const [hidden, setHidden] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .76) {
                setHidden(false);
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);

    const className = [
        styles['footer'],
        hidden ? styles['hidden'] : ''
    ].join(' ');
    return(
        <div className={className} ref={ref}>
            <span>
                Well, are you ready?
            </span>
            
            <Button className={styles['footer-button']}>
                <a href={'mailto:albin.karvling@hotmail.com'}>
                    Let's do this!
                </a>
            </Button>
        </div>
    )
}