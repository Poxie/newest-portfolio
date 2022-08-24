import { motion } from 'framer-motion';
import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderAnimationBuilding } from './HomeHeaderAnimationBuilding';
import { HomeHeaderAnimationCoding } from './HomeHeaderAnimationCoding';
import { HomeHeaderAnimationDeploying } from './HomeHeaderAnimationDeploying';

export const HomeHeaderAnimation = () => {
    const [state, setState] = useState(0);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [globalRotateY, setGlobalRotateY] = useState(0);
    const [scale, setScale] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);

    // Changing state and creating transition after new state
    const showNewState = () => {
        setState(prev => {
            let newState = prev + 1;
            if(newState > 2) newState = 0;
            return newState;
        });
        setGlobalRotateY(-90);

        let counter = .7;
        const interval = setInterval(() => {
            setGlobalRotateY(prev => {
                counter += 0.006;
                const newRotateY = prev + 2;
                if(newRotateY >= 0) clearInterval(interval);
                setScale(counter);
                return newRotateY;
            })
        }, 1);
    }
    // Making the rotation before transition between states
    const changeState = useCallback(() => {
        let counter = 100;
        const interval = setInterval(() => {
            setGlobalRotateY(prev => {
                counter -= .1;
                const newRotateY = prev + 2;
                setScale(counter / 100);
                if(newRotateY % 90 === 0) {
                    clearInterval(interval);
                    showNewState();
                }
                return newRotateY;
            })
        }, 1);
    }, [setGlobalRotateY]);

    // Making animation skew after mouse
    useEffect(() => {
        const skew = (e: MouseEvent) => {
            if(!containerRef.current) return;
            const mousePos = {x: e.clientX, y: e.clientY};
            const containerPos = containerRef.current.getBoundingClientRect();

            const rotateY = -((containerPos.x + containerPos.width / 2) - mousePos.x) / 70;
            let rotateX = ((containerPos.y + containerPos.height / 2) - mousePos.y) / 40;

            // Making sure rotation is not too large
            if(rotateX < -25) rotateX = -25;

            setRotateX(rotateX);
            setRotateY(rotateY);
        }

        window.addEventListener('mousemove', skew);
        return () => window.removeEventListener('mousemove', skew);
    }, []);
    
    return(
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            aria-hidden="true"
        >
            <div 
                style={{ transform:`
                    perspective(800px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY + globalRotateY}deg)
                    scale(${scale})
                `}}
                className={styles['header-animation']}
                onClick={changeState}
                ref={containerRef}
            >
                <HomeHeaderAnimationCoding
                    changeState={changeState}
                    active={state === 0}
                />
                <HomeHeaderAnimationBuilding 
                    changeState={changeState}
                    active={state === 1}
                />
                <HomeHeaderAnimationDeploying
                    changeState={changeState} 
                    active={state === 2}
                />
            </div>
        </motion.div>
    )
}