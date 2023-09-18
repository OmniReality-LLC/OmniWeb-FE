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
    borderColor?: string;
    decoratorBorderColor?: string;
    decoratorBgColor?: string;
    marginL?: string;
    marginR?: string;
    marginT?: string;
    marginB?: string;
    defaultStyle?: boolean;
    className?: string;
    onClick?: () => void;

}
export default function SlideGlowLinkBtn({
    text,
    textColor = '#D4D4D4',
    textSize = "clamp(15px, 1.5vw, 20px)",
    borderColor = "grey",
    linkTo,
    bgColor = "#353333",
    glowColor = '#3EDCFF',
    decoratorBorderColor = `#3EDCFF`,
    decoratorBgColor = "#353333",
    marginL = '25px',
    marginR = '25px',
    marginT = '0px',
    marginB = '0px',
    defaultStyle = true,
    className,
    onClick
}: SlideGlowLinkBtnProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`${styles.button} ${className}`}
            onClick={onClick}
            style={{
                backgroundColor: defaultStyle ?  bgColor :( isHovered ? glowColor : bgColor),
                borderColor: isHovered ? glowColor : borderColor ,
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
                    color: isHovered ? (defaultStyle ?  glowColor : bgColor) : textColor,
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
