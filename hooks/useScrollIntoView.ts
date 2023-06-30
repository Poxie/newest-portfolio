import { RefObject, useEffect, useState } from "react";

export const useScrollIntoView = (ref: RefObject<HTMLDivElement>, options?: {
    animationDuration: number;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimationDone, setIsAnimationDone] = useState(false);

    // Checking if content is within threshold within viewport
    useEffect(() => {
        const scroll = () => {
            if(!ref.current) return;
            const fromTop = ref.current.getBoundingClientRect().top;
            const percent = fromTop / window.innerHeight;
            
            if(percent < .8) {
                setIsVisible(true);
                
                if(options?.animationDuration) {
                    setTimeout(() => setIsAnimationDone(true), options.animationDuration);
                }
            }
        }
        scroll();

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, [options?.animationDuration]);

    return { isAnimationDone, isVisible };
}