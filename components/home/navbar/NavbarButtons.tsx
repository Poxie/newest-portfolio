import React from 'react';
import styles from '../../../styles/Home.module.scss';
import Button from '../../button';

export const NavbarButtons = () => {
    return(
        <Button className={styles['navbar-button']}>
            <a href="mailto:albin.karvling@hotmail.com">
                Contact me
            </a>
        </Button>
    )
}