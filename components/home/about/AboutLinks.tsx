import React from 'react';
import styles from '../../../styles/Home.module.scss';
import Tooltip from '../../tooltip';
import { GithubIcon } from '../../../assets/icons/GithubIcon';
import { MailIcon } from '../../../assets/icons/MailIcon';
import { LinkedInIcon } from '../../../assets/icons/LinkedInIcon';
import aboutJSON from '../../../assets/about/index.json';
const links = aboutJSON.links;

const getLinkIcon = (id: string) => {
    switch(id) {
        case 'github':
            return <GithubIcon />;
        case 'linkedin':
            return <LinkedInIcon />
        case 'mail':
            return <MailIcon />
    }
}
export const AboutLinks = () => {
    return(
        <div className={styles['about-links']}>
            {links.map((link, index) => (
                <Tooltip content={link.title} key={link.id}>
                    <a 
                        className={styles['about-link']}
                        style={{ animationDelay: `${index * .23 + 1}s` }}
                        href={link.path}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.title}
                    >
                        {getLinkIcon(link.id)}
                    </a>
                </Tooltip>
            ))}
        </div>
    )
}