import React from 'react';
import { FigmaIcon } from '../../../assets/icons/FigmaIcon';
import { GithubIcon } from '../../../assets/icons/GithubIcon';
import styles from '../../../styles/Home.module.scss';
import { ProjectTile } from './ProjectTile';

const tiles = [
    { id: 'spotify', image: 'https://i.poxgur.com/IzaWWO.png', title: 'Spotify App', description: 'This is a website made using React.js and Spotify’s REST API. It allows you to view your favorite artists’ statistics and albums, and view your own favorite all-time songs! You can also explore songs similar to your taste, or to specified songs.', links: [{ path: 'https://github.com/Poxie/spotify-app', icon: <GithubIcon />, text: 'Github' }], path: 'https://spot.poxen.dev' },
    { id: 'benchmark', image: 'https://i.poxgur.com/tlAxzN.png', title: 'Benchmark Enhanced', description: 'This website was made using Next.js and Node.js with GraphQL as backend. The purpose of the site is to challenge your cognitive abilities, including memory, typing speed and more. You can challenge your friends and attempt a position on the leaderboard.', links: [{ path: 'https://www.figma.com/file/TBW7T7plKi0yWj96mh7CB9/Benchmark-team-library?node-id=0%3A1', icon: <FigmaIcon />, text: 'Figma' }, { path: 'https://github.com/Poxie/benchmark', icon: <GithubIcon />, text: 'Github' }], path: 'https://benchmark.poxen.dev' },
    { id: 'poxen.dev', image: 'https://i.poxgur.com/NHR5sg.png', title: 'poxen.dev', description: 'I have done a few portfolio sites during my days, but this one is the latest and by far the greatest one. I carefully put effort into designs, and did my utterly best to make the user experience great. By the way, it is made using the lovely technology Next.js.', links: [{ path: 'https://www.figma.com/file/i7seI05ANE4nxrMzE04rDd/Untitled?node-id=3%3A3', icon: <FigmaIcon />, text: 'Figma' }, { path: 'https://github.com/Poxie/newest-portfolio', icon: <GithubIcon />, text: 'Github' }], path: 'https://new.poxen.dev' }
]
export type TileType = typeof tiles[0];
export type TileLink = typeof tiles[0]['links'][0];

export const ProjectTiles = () => {
    return(
        <div className={styles['project-tiles']}>
            <div className={styles['project-tiles-container']}>
                {tiles.map(tile => <ProjectTile {...tile} key={tile.title} />)}
            </div>
        </div>
    )
}