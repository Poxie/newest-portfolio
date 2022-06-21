import React from 'react';
import { HomeHeader } from './header/HomeHeader';
import { Navbar } from './navbar/Navbar';

export const Home = () => {
    return(
        <>
            <Navbar />
            <HomeHeader />
        </>
    )
}