import React, { useEffect, useState } from 'react';

// Functions to determine device type
const getWindowDimensions = () => {
    if(typeof window === 'undefined') return { width: 1920, height: 1080 };
    return { width: window.innerWidth, height: window.innerHeight };
}
const getDeviceType = () => {
    const { width } = getWindowDimensions();
    if(width < 500) return 'mobile';
    if(width < 1000) return 'tablet';
    return 'desktop';
}

export type DeviceType = 'desktop' | 'tablet' | 'mobile';
export const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType());

    // Setting up resize event handler
    useEffect(() => {
        const resize = () => setDeviceType(getDeviceType());

        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);
    
    return deviceType;
}