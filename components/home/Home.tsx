import React from 'react';
import { About } from './about/About';
import { HomeHeader } from './header/HomeHeader';
import { Navbar } from './navbar/Navbar';
import { Projects } from './projects/Projects';

export const Home = () => {
    return(
        <>
            <Navbar />
            <HomeHeader />
            <About />
            <Projects />
        </>
    )
}