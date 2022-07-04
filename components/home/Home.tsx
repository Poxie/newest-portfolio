import React from 'react';
import { About } from './about/About';
import { HomeHeader } from './header/HomeHeader';
import { Navbar } from './navbar/Navbar';
import { ProjectTiles } from './project-tiles/ProjectTiles';
import { Projects } from './projects/Projects';

export const Home = () => {
    return(
        <>
            <Navbar />
            <HomeHeader />
            <About />
            <Projects />
            <ProjectTiles />
        </>
    )
}