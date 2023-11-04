import { useRef } from "react";
import { useScrollIntoView } from "../../../hooks/useScrollIntoView";
import styles from '../../../styles/Home.module.scss';

export const ProjectDevleopmentHeader = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { isVisible } = useScrollIntoView(ref);

    const className = [
        isVisible ? styles['visible'] : '',
        styles['dev-projects'],
    ].join(' ');
    return(
        <div 
            className={className} 
            ref={ref}
        >
            <span>
                In development
            </span>
        </div>
    )
}