import { motion } from 'framer-motion';
import React, { createRef, useState } from 'react';
import { RefObject } from 'react';
import { usePopup } from '../../../contexts/PopupProvider';
import { TimelinePopup } from '../../../popups/timeline/TimelinePopup';
import styles from '../../../styles/Home.module.scss';

const timeline = [
    { year: 17, date: 'March, 2017', title: 'How it all started', text: 'My coding journey began in 2017 by watching a course on Udemy. This course covered the overall basics of HTML, CSS and JavaScript, but gave far from a good foundation. I started my self-taugh journey shortly after this course, where Stackoverflow was my best friend.' },
    { year: 19, date: 'October, 2019', title: 'Things become REACTive', text: 'Finally, after a long time, I picked up React. It changed my view on web development entirely. I\'ve used it for pretty much every project of mine since I discovered it.' },
    { year: 19, date: 'December, 2019', title: 'Data for everyone', text: 'After quite some time, I decided frontend wasn\'t good enough. Therefore, I explored other options like Python and Node.js. My personal favorite for websites and APIs is Node.js (it\'s pretty much JavaScript), but I also know Python well.' },
    { year: 22, date: 'June, 2022', title: 'Things get prettier', text: 'Coding as a hobby has been great this far. However, I am getting older, and I genuinely want my programming journey to come along with my outside life.' },
]
export const AboutTimeline = () => {
    const [popupActive, setPopupActive] = useState(false);
    const { setPopup, closePopup } = usePopup();

    const showPopup = (date: string, ref: RefObject<HTMLElement>) => {
        // If popup is open, close
        if(popupActive) {
            closePopup();
            setPopupActive(false);
            return;
        }

        // Else find correct time to display
        const time = timeline.find(dot => dot.date === date);
        if(!time) return;
        
        // And display timeline popup
        setPopup(<TimelinePopup {...time} />, ref);
        setPopupActive(true);
    }
    const hidePopup = () => {
        setPopupActive(false);
        closePopup();
    }

    return(
        <motion.div 
            className={styles['timeline']}
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: 'var(--dot-height)' }}
            exit={{ maxHeight: 0 }}
        >
            {timeline.map((time, index) => {
                const ref = createRef<HTMLButtonElement>();
                return(
                    <button
                        onClick={() => showPopup(time.date, ref)}
                        onMouseEnter={() => showPopup(time.date, ref)}
                        onMouseLeave={hidePopup} 
                        className={styles['timeline-dot']}
                        style={{ animationDelay: `${index * .8 + 1.2}s` }}
                        aria-label={`What happened on ${time.date}?`}
                        key={time.title}
                        ref={ref}
                    >
                        {time.year}
                    </button>
                )
            })}
            <div className={styles['timeline-connector']} />
        </motion.div>
    )
}