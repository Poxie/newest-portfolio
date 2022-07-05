import React from 'react';
import { About } from './about/About';
import { Footer } from './footer/Footer';
import { HomeHeader } from './header/HomeHeader';
import { Navbar } from './navbar/Navbar';
import { ProjectTiles } from './project-tiles/ProjectTiles';
import { Projects } from './projects/Projects';
import { Technologies } from './technologies/Technologies';

export const Home = () => {
    return(
        <>
            <Navbar />
            <HomeHeader />
            <About />
            <Projects />
            <ProjectTiles />
            <Technologies />
            <Footer />
        </>
    )
}