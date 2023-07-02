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
    decoratorBgColor?: string;
    marginL?: string;
    marginR?: string;
    marginT?: string;
    marginB?: string;

}
export default function SlideGlowLinkBtn({
    text,
    textColor = '#D4D4D4',
    textSize = "clamp(15px, 1.5vw, 20px)",
    linkTo,
    bgColor,
    glowColor = '#3EDCFF',
    decoratorBgColor = "#353333",
    marginL = '25px',
    marginR = '25px',
    marginT = '0px',
    marginB = '0px'


}: SlideGlowLinkBtnProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={styles.button}
            style={{
                backgroundColor: bgColor,
                borderColor: isHovered ? glowColor : 'grey',
                boxShadow: isHovered ? `0 0 5px ${glowColor}` : 'none',
                fontSize: textSize,
                marginLeft: marginL,
                marginRight: marginR,
                marginTop: marginT,
                marginBottom: marginB,
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
            <span className={styles.decorativeElement} style={{ 
                borderColor: glowColor,
                backgroundColor: decoratorBgColor,
                }}/>
            <span className={styles.decorativeElement} style={{ 
                borderColor: glowColor,
                backgroundColor: decoratorBgColor, }}/>
        </button>
    )
};