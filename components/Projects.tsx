import React from 'react'
import { Project } from './Project';
import styles from '../styles/Projects.module.css'

interface Project {
    title: string
    desc: string
    img: string
}

interface ProjectsProps {
    projects: Project[]
}

export const Projects: React.FC<ProjectsProps> = ({projects}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <section className={styles.projects}>
                {projects.map((project, idx) => (
                    <Project title={project.title} desc={project.desc} img={project.img} key={idx}/>
                ))}
            </section>
        </div>
    );
}