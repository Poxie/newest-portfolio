import React, { RefObject, useEffect, useRef, useState } from 'react';
import { CodeIcon } from '../../../icons/CodeIcon';
import styles from '../../../styles/Home.module.scss';
import { HomeHeaderAnimationPercentage } from './HomeHeaderAnimationPercentage';

const sleep = async (duration: number) => await new Promise((res) => setTimeout(() => res({}), duration));

const ITEM_ANIMATION_DURATION = 500;
const TOTAL_ANIMATION_DURATION = 3700;
const colors = {
    orange: '#BE8A28',
    green: '#48ACA2',
    lightGreen: '#78C078',
    purple: '#5A395A',
    pink: '#DD99DD',
}
const codeSnippets = [{gap: 0, items: [{width: 61.68, color: 'purple'}, {width:43.63, color:'orange'}, {width:86.51, color: 'lightGreen'}, {width:66.95, color: 'purple'}, {width:93.27, color: 'lightGreen'}]}, {gap: 30, items: [{width: 43.63, color: 'lightGreen'}, {width: 65.44, color: 'orange'}, {width:45.89, color: 'lightGreen'}, {width:87.26, color: 'orange'}]}, {gap: 60, items: [{width:44.38, color: 'pink'}, {width:28.58, color:'purple'}, {width:65.44, color:'orange'}, {width:28.58, color:'purple'}]}, {gap: 30, items: [{width:43.63, color:'lightGreen'}, {width:57.92, color:'green'}, {width:43.63, color:'lightGreen'}]}, {gap: '100%', items: []},{gap: 0, items: [{width: 43.63, color: 'orange'}, {width:65.44, color:'lightGreen'}, {width:76.73, color: 'orange'}]}, {gap: 30, items: [{width:44.38, color: 'orange'}, {width:28.58, color: 'lightGreen'}, {width:75.22, color: 'purple'}, {width:64.44, color: 'orange'}, {width:38.12, color: 'lightGreen'}]}, {gap: 60, items: [{width:61.68, color: 'lightGreen'}, {width:43.63, color:'green'}, {width:50.4, color:'purple'}]}, {gap: 30, items: [{width:44.38, color:'orange'}, {width:66.2, color:'lightGreen'}, {width: 44.38, color:'orange'}]}] as {gap: number, items: {width: number, color: keyof typeof colors}[]}[]
export const HomeHeaderAnimationCoding: React.FC<{
    changeState: () => void;
    active: boolean;
}> = React.memo(({ changeState, active }) => {
    const codeRefs = useRef<RefObject<HTMLDivElement>[][]>([]);
    const [refs, setRefs] = useState<RefObject<HTMLDivElement>[][]>([]);

    // Making sure refs are accessible not only on mount
    useEffect(() => {
        setRefs(codeRefs.current);
    }, [codeRefs.current]);
    
    // Displaying code step by step
    useEffect(() => {
        // Removing active class on not active
        if(!active) {
            for(const row of refs) {
                for(const item of row) {
                    item.current?.classList.remove(styles['active']);
                }
            }
        }
        if(!active || !refs.length) return;

        // Displaying code step by step
        let cancel: boolean;
        const displayCode = async () => {
            for(const row of refs) {
                if(cancel) break;
                for(const item of row) {
                    if(cancel) break;
                    if(!item.current) continue;
                    item.current.classList.add(styles['active']);

                    if(item !== row[row.length -1]) await sleep(ITEM_ANIMATION_DURATION / 3);
                }
            }

            // Making sure not to change state if animation is cancelled
            if(!cancel) {
                setTimeout(changeState, 300);
            }
        }
        displayCode();

        return () => {
            cancel = true;
        }
    }, [active, refs]);

    const className = [
        styles['animation-coding'],
        active ? styles['active'] : ''
    ].join(' ');
    return(
        <div className={className}>
            <div className={styles['animation-icon']}>
                <CodeIcon />
            </div>
            <div className={styles['animation-interface']}>
                {codeSnippets.map((group, rowKey) => {
                    const row: React.RefObject<HTMLDivElement>[] = [];
                    codeRefs.current.push(row);
                    return(
                        <div className={styles['code-row']} style={{ marginLeft: group.gap }} key={`row-${rowKey}`}>
                            {!group.items.length && <br />}

                            {group.items.map((item, itemKey) => {
                                const ref = React.createRef<HTMLDivElement>();
                                row.push(ref);
                                return(
                                    <div 
                                        style={{ 
                                            backgroundColor: colors[item.color], 
                                            width: item.width,
                                            transitionDuration: `${ITEM_ANIMATION_DURATION}ms`
                                        }}
                                        className={styles['code-snippet']}
                                        key={`code-${rowKey}-${itemKey}`}
                                        ref={ref}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            {active && (
                <HomeHeaderAnimationPercentage 
                    totalDuration={TOTAL_ANIMATION_DURATION}
                    text={'Coding...'}
                />
            )}
        </div>
    )
});