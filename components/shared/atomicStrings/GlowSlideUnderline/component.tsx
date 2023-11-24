"use client"
import Link from 'next/link'
import styles from './styles.module.css';
import { useState } from 'react';

interface StringProps {

    text: string;
    textSize: string;
    inactiveColor: string;
    activeColor: string;
    linkTo: string;
}
export default function SlideLink ({ text, inactiveColor, textSize, activeColor, linkTo }: StringProps) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={linkTo}
            className={styles.link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.container}>
                <h5
                    className={styles.stringText}
                    style={{
                        fontSize: textSize,
                        color: isHovered ? activeColor : inactiveColor,
                        textShadow: isHovered ? `0 0 5px ${activeColor}` : 'none',
                    }}
                >
                    {text}
                </h5>
                <div
                    className={styles.underLine}
                    style={{
                        borderColor: isHovered ? activeColor: inactiveColor,
                        boxShadow: isHovered ? `0 0 5px ${activeColor}` : 'none',
                        pointerEvents: 'none' // Ignore pointer events
                    }}
                ></div>
                <span
                    className={styles.decorativeElement}
                    style={{ borderColor: activeColor }}
                ></span>
            </div>
        </Link>
    )
};
