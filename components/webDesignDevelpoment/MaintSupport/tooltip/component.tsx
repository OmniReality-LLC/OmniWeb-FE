'use client'; // (Note: This is 'use strict', not 'use client'. If 'use client' is something specific to your project, then it's okay.)
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface TooltipProps {
    content: string;
}

function Tooltip({ content, children }: React.PropsWithChildren<TooltipProps>) {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const [isAnimatingIn, setIsAnimatingIn] = useState(false);
    const timers = useRef<NodeJS.Timeout[]>([]);

    const handleMouseEnter = () => {

        setIsAnimatingIn(true);
        setIsVisible(true);
        timers.current.push(setTimeout(() => {
            setIsAnimatingIn(false);
        }, 400));
    };


    const handleClick = () => {


        setIsAnimatingIn(true);
        setIsVisible(true);
        timers.current.push(setTimeout(() => {
            setIsAnimatingIn(false);
        }, 400));

    };

    const animateOut = () => {
        setIsAnimatingOut(true);
        timers.current.push(setTimeout(() => {
            setIsVisible(false);
            setIsAnimatingOut(false);
            setIsAnimatingIn(false);
        }, 400));
    };

    useEffect(() => {
        return () => {
            // Cleanup timeouts to avoid memory leaks
            timers.current.forEach((timer) => clearTimeout(timer));
            setIsVisible(false);
            setIsAnimatingOut(false);
            setIsAnimatingIn(false);
        }
    }, []);

    return (
        <span
            onMouseEnter={handleMouseEnter}

            onClick={handleClick}
            className={styles.tooltipContainer}
            tabIndex={0}
        >
            {children}
            {(isVisible || isAnimatingOut || isAnimatingIn) &&
                <div className={`${styles.tooltipContentContainer}
                              ${isAnimatingOut ? styles.fadeOut : ''}
                              ${isAnimatingIn ? styles.fadeIn : ''}`}>
                    <h1 className={styles.toolTipText}>{content}</h1>
                    <div className={styles.diamond} />
                </div>
            }
        </span>
    );
}

export default Tooltip;
