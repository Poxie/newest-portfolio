import { AnimatePresence } from 'framer-motion';
import React, { RefObject, useState } from 'react';
import { ReactElement } from 'react';
import { Popup } from '../popups/Popup';
import styles from '../styles/Popup.module.scss'

// Creating provider context
type PopupContextType = {
    setPopup: (popup: ReactElement, ref: RefObject<HTMLElement>) => void;
    closePopup: () => void;
}
const PopupContext = React.createContext({} as PopupContextType);

// Exporting context hook
export const usePopup = () => React.useContext(PopupContext);

// Creating context provider
export const PopupProvider: React.FC<{
    children: any;
}> = ({ children }) => {
    const [popup, setPopup] = useState<ReactElement | null>(null);
    const [dimensions, setDimensions] = useState({ top: 0, left: 0, width: 0, height: 0 });

    // Setting popup information
    const _setPopup = (popup: ReactElement, ref: RefObject<HTMLElement>) => {
        if(!ref.current) return;

        // Setting popup element
        setPopup(popup);

        // Setting popup dimensions
        const { top, left, width, height } = ref.current.getBoundingClientRect();
        setDimensions({
            top,
            left,
            width,
            height
        })
    }
    // Closing any popups
    const _closePopup = () => setPopup(null);

    const value = {
        setPopup: _setPopup,
        closePopup: _closePopup
    }
    return(
        <PopupContext.Provider value={value}>
            {children}
            <>
                <AnimatePresence>
                    {popup && (
                        <Popup {...dimensions} key={Math.random()}>
                            {popup}
                        </Popup>
                    )}
                </AnimatePresence>
            </>
        </PopupContext.Provider>
    )
}