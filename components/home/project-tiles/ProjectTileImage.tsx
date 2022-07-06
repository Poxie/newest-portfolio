import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon } from '../../../icons/CloseIcon';

export const ProjectTileImage: React.FC<{
    image: string;
    path: string;
}> = ({ image, path }) => {
    const [active, setActive] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const imageContentRef = useRef<HTMLDivElement>(null);

    // Always updating initial position
    useEffect(() => {
        const updatePosition = () => {
            if(!ref.current || !imageContentRef.current || active) return;
            const { top, left } = ref.current.getBoundingClientRect();
            imageContentRef.current.style.top = `${top}px`;
            imageContentRef.current.style.left = `${left}px`;
        }
        updatePosition();

        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition);
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        }
    }, [active]);
    const showPreview = () => {
        setActive(true);
        document.body.style.overflow = 'hidden';
    }
    const closePreview = () => {
        setActive(false);
        setIsAnimating(true);
        
        setTimeout(() => {
            setIsAnimating(false);
            document.body.style.overflow = 'auto';
        }, 1000);
    }

    const className = [
        styles['project-image-content'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <>
        <div className={styles['project-tile-preview']} ref={ref}>
            <div
                className={className}
                style={{ 
                    position: (active || isAnimating) ? 'fixed' : 'unset',
                    transition: (active || isAnimating) ? `transform 1s, left 1s, top 1s, width 1s, height 1s` : 'unset'
                }}
                ref={imageContentRef}
            >
                <div className={styles['project-tile-image']} onClick={showPreview}>
                    <div className={styles['project-tile-image-container']}>
                        <Image 
                            src={image}
                            layout={'fill'}
                            objectFit={'cover'}
                        />
                    </div>
                </div>
                <AnimatePresence>
                    {active && (
                        <motion.div 
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: .8 }}
                            >
                                <div className={styles['iframe-controls']} onClick={closePreview}>
                                    <CloseIcon />
                                </div>
                                <iframe 
                                    src={path} 
                                    frameBorder="0"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
        <AnimatePresence>
            {active && (
                <motion.div 
                    className={styles['project-backdrop']} 
                    onClick={closePreview}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
        </AnimatePresence>
        </>
    )
}