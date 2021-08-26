import React from 'react'
import styles from '../styles/About.module.css'

interface AboutProps {
    desc: string
}

export const About: React.FC<AboutProps> = ({desc}) => {
    return (
        <div id={styles.about}>
            <h1>About</h1>
            <p>{desc}</p>
        </div>
    );
}