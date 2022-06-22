import React from 'react';
import { About } from './about/About';
import { HomeHeader } from './header/HomeHeader';
import { Navbar } from './navbar/Navbar';

export const Home = () => {
    return(
        <>
            <Navbar />
            <HomeHeader />
            <About />
        </>
    )
}