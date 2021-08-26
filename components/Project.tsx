import React from 'react'
import styles from '../styles/Projects.module.css'

interface Project {
    title: string
    desc: string
    img: string
    link: string
}

export const Project: React.FC<Project> = ({title, desc, img, link}) => {
    return (
        <a href={link}>
            <div style={{ backgroundImage: `url(${img})`  }} className={styles.project}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </a>
    );
}