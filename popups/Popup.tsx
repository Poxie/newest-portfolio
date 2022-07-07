import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Popup.module.scss';
import { ReactElement } from 'react';
import { motion } from 'framer-motion';

const SPACING_REQUIRED = 25;
export const Popup: React.FC<{
    top: number;
    left: number;
    width: number;
    height: number
    children: ReactElement;
}> = ({ top: _top, left: _left, width: _width, children }) => {
    const [top, setTop] = useState(_top);
    const [left, setLeft] = useState(_left);
    const ref = useRef<HTMLDivElement>(null);

    // Updating position based on tooltip dimensions
    useEffect(() => {
        if(!ref.current) return;
        const { width, height } = ref.current.getBoundingClientRect();

        // Setting position reference
        let newTop = _top - height - 15;
        let newLeft = _left - width / 2 + _width / 2;

        // Making sure popup is within viewport
        if(newLeft <= SPACING_REQUIRED) newLeft = SPACING_REQUIRED;
        if(newLeft >= window.innerWidth - width - SPACING_REQUIRED) newLeft = window.innerWidth - width - SPACING_REQUIRED;
        if(newTop <= 15) newTop = _top + height / 2 - 15;

        // Setting computed position
        setTop(newTop);
        setLeft(newLeft);
    }, [_top, _left]);

    return(
        <motion.div
            initial={{ opacity: 0, translateY: -15 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -15 }}
            transition={{ duration: .3 }}
            className={styles['container']}
            style={{ top, left }}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}