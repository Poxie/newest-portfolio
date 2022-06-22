import React from 'react';
import styles from '../../../styles/Home.module.scss';
import { FigmaIcon } from '../../../icons/FigmaIcon';
import { GithubIcon } from '../../../icons/GithubIcon';
import { ProjectCard } from './ProjectCard';

const cards = [
    { title: 'Spotify', text: 'Ability to view most liked songs on spotify, search for artists and songs, and view your own statistics. All done through Spotify’s public API.', path: 'https://spot.poxen.dev', tech: ['React', 'REST API', 'Scss'], links: [{ path: 'https://github.com/Poxie/spotify-app', icon: <GithubIcon /> }] },
    { title: 'Graphing', text: 'A website allowing you to insert your own values to create beautiful looking charts of your choice. You have the ability to extract the chart into an image.', path: 'https://graph.poxen.dev', tech: ['React', 'Scss', 'SVG'], links: [{ path: 'https://github.com/Poxie/graph-app', icon: <GithubIcon /> }] },
    { title: 'Benchmark Enhanced', text: 'A website to test your cognitive abilities, including memory, reaction time of different sorts, and much more. Play games with friends to show off your knowledge of a specific game.', path: 'https://benchmark.poxen.dev', tech: ['Next.js', 'Node.js (Express.js)', 'GraphQL', 'MySQL'], links: [{ path: 'https://www.figma.com/file/TBW7T7plKi0yWj96mh7CB9/Benchmark-team-library?node-id=0%3A1', icon: <FigmaIcon /> }, { path: 'https://github.com/Poxie/benchmark', icon: <GithubIcon /> }] },
    { title: 'poxen.dev', text: 'This website! It shows a little what I can do and who I am. It is made using Next.js, and has been designed prior to its development. ', path: 'https://poxen.dev', tech: ['Next.js', 'Scss', 'SVG'], links: [{ path: 'https://www.figma.com/file/i7seI05ANE4nxrMzE04rDd/Untitled?node-id=3%3A3', icon: <FigmaIcon /> }, { path: 'https://github.com/Poxie/newest-portfolio', icon: <GithubIcon /> }] },
]
export type CardType = typeof cards[0];
export const ProjectsContent = () => {
    return(
        <div className={styles['project-cards']}>
            {cards.map(card => <ProjectCard {...card} key={card.title} />)}
        </div>
    )
}