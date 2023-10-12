'use client'
import { useEffect, useRef } from 'react';
import OmniScrambleText from '@/util/OmniScrambleText';
import styles from './styles.module.css';


type TextScramblerProps = {
    word: string;
    delay?: number; // delay before scrambling starts
    className?: string; // New className prop
};

export default function TextScrambler({ word, delay = 0, className }: TextScramblerProps) {
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!textRef.current || !word) return;

        const fx = new OmniScrambleText(textRef.current);
        setTimeout(() => {  // Add delay before scrambling
            fx.setText(word);
        }, delay);
    }, [word, delay]);

    return (
        <span className={className} ref={textRef}></span> // Use classNames to combine styles
    );
}
