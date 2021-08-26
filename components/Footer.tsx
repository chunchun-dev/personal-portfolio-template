import React from 'react'
import styles from '../styles/Footer.module.css'

interface FooterProps {
    title: string
    desc: string
    email?: string
}

export const Footer: React.FC<FooterProps> = ({title, desc, email}) => {
    return (
        <footer id={styles.footer}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <b>{email}</b>
        </footer>
    );
}