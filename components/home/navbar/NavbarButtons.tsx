import React from 'react';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';

export const NavbarButtons = () => {
    return(
        <Button 
            className={styles['navbar-button']}
            href={process.env.NEXT_PUBLIC_MAIL_LINK}
        >
            Contact me
        </Button>
    )
}