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
    active: boolean
    onClick: ()=>void;
}
export default function SlideLink ({ text, inactiveColor, textSize, activeColor, linkTo, active, onClick }: StringProps) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={linkTo}
            className={styles.link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <div className={styles.container} >
                <h5
                    className={styles.stringText}
                    style={{
                        fontSize: textSize,
                        color: isHovered || active ? activeColor : inactiveColor,
                        textShadow: isHovered || active ? `0 0 5px ${activeColor}` : 'none',
                    }}
                >
                    {text}
                </h5>
                <div
                    className={styles.underLine}
                    style={{
                        borderColor: isHovered || active ? activeColor: inactiveColor,
                        boxShadow: isHovered || active ? `0 0 5px ${activeColor}` : 'none',
                        pointerEvents: 'none' // Ignore pointer events
                    }}
                ></div>
                <span
                    className={styles.decorativeElement}
                    style={{ borderColor: activeColor, right: active ? '15%' : '' }}
                ></span>
            </div>
        </Link>
    )
};
