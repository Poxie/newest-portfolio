import React, { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseIcon } from '../../../assets/icons/CloseIcon';
import { useDeviceType } from '../../../hooks/useDeviceType';

export const ProjectTileImage: React.FC<{
    title: string;
    image: string;
    path: string;
}> = ({ title, image, path }) => {
    const deviceType = useDeviceType();
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

    const isDesktop = deviceType === 'desktop';
    const className = [
        styles['project-tile-preview'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <>
        <div className={className} ref={ref}>
            <div
                className={styles['project-image-content']}
                style={{ 
                    position: (active || isAnimating) ? 'fixed' : 'unset',
                    transition: (active || isAnimating) ? `transform 1s, left 1s, top 1s, width 1s, height 1s` : 'unset'
                }}
                ref={imageContentRef}
            >
                <div className={styles['project-tile-image-container']}>
                    <button 
                        className={styles['project-tile-image']} 
                        onClick={showPreview}
                        aria-label={`Preview site`}
                    >
                        <Image 
                            src={require(`/assets/imgs/${image}.jpg`).default}
                            layout={'fill'}
                            objectFit={'cover'}
                            alt={`${title}'s preview image`}
                        />
                    </button>
                </div>
                <AnimatePresence>
                    {active && (
                        <motion.div 
                            initial={{ opacity: 1, translateY: !isDesktop ? '100vh' : 0 }}
                            animate={{ translateY: 0 }}
                            exit={{ opacity: isDesktop ? 0 : 1 }}
                            transition={{ duration: isDesktop ? .3 : .6 }}
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                position: 'fixed', 
                                top: 0, 
                                left: 0,
                                zIndex: 14141414
                            }}
                        >
                            <motion.div
                                initial={{ opacity: isDesktop ? 0 : 1, translateY: 0 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 1, translateY: !isDesktop ? '100vh' : 0 }}
                                transition={{ delay: isDesktop ? .8 : 0, duration: isDesktop ? .3 : .6 }}
                                style={{ 
                                    width: '100%', 
                                    height: '100%',
                                    backgroundColor: 'var(--background-primary)'
                                }}
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
        </div>
        </>
    )
}