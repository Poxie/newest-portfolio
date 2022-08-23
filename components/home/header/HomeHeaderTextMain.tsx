import React, { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.scss';

const TEXT = 'Hi, Albin here.';
export const HomeHeaderTextMain = () => {
    const [letter, setLetter] = useState(0);
   
    // Updating text in a typing-like way
    useEffect(() => {
        const interval = setInterval(() => {
            setLetter(prev => {
                const letter = prev + 1;
                if(letter >= TEXT.length) clearInterval(interval);
                return letter;
            })
        }, 80);

        return () => clearInterval(interval);
    }, []);

    const className = [
        styles['header-main'],
        styles['no-fade']
    ].join(' ');
    return(
        <h1 className={className} aria-label={TEXT}>
            {TEXT.slice(0, letter)}
            {/* Hi, <span className={styles['bold']}>Albin</span> here. */}
        </h1>
    )
}