import React from 'react'
import styles from '../styles/Projects.module.css'

interface Project {
    title: string
    desc: string
    img: any
}

export const Project: React.FC<Project> = ({title, desc, img}) => {
    return (
        <div style={{ backgroundImage: `url(${img})`  }} className={styles.project}>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    );
}