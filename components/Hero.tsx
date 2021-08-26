import React from 'react'
import styles from '../styles/Hero.module.css'

interface CTA {
    link: string
    title: string
}

interface HeroProps {
    subtitle: string
    title: string
    desc: string
    cta: CTA
}

export const Hero: React.FC<HeroProps> = ({subtitle, title, desc, cta}) => {
    return (
        <div className={styles.hero}>
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
            <p>{desc}</p>
            <a href={cta.link}>{cta.title}</a>
        </div>
    );
}