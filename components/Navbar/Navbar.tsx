import React, { useContext } from 'react'
import styles from '../../styles/Navbar.module.css'
import UserContext from '../../userConfig';


interface NavbarProps {
    navItems: string[]
}

export const Navbar: React.FC<NavbarProps> = ({navItems}) => {

    const {name} = useContext(UserContext)

    return (
        <nav id={styles.nav}>
            <h1 id={styles.nav_icon}>{name}</h1>
            <div className={styles.nav_right}>
                {navItems.map((navItem, idx) => (
                    <p key={idx}>{navItem}</p>
                ))}
            </div>
        </nav>
    );
}