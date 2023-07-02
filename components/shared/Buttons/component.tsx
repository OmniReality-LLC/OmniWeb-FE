'use client'
import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

interface SlideGlowLinkBtnProps {
    text: string;
    linkTo: string;
    textSize?: string;
    textColor?: string;
    bgColor?: string;
    glowColor?: string;
}
export default function SlideGlowLinkBtn({
    text,
    textColor = '#D4D4D4',
    textSize = "clamp(15px, 1.5vw, 20px)",
    linkTo,
    bgColor,
    glowColor = '#3EDCFF'
}: SlideGlowLinkBtnProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={styles.button}
            style={{
                backgroundColor: bgColor,
                borderColor: isHovered ? glowColor : 'grey',
                boxShadow: isHovered ? `0 0 5px ${glowColor}` : 'none',
                fontSize: textSize
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                href={linkTo}
                className={styles.buttonLink}
                style={{
                    color: isHovered ? glowColor : textColor,
                    textShadow: isHovered ? `0 0 5px ${glowColor}` : 'none'
                }}
            >
                {text}
            </Link>
            <span className={styles.decorativeElement} style={{ borderColor: glowColor }}></span>
            <span className={styles.decorativeElement} style={{ borderColor: glowColor }}></span>
        </button>
    )
};