'use client'
import React, { useEffect, useRef } from 'react';
import OmniScrambleText from '@/util/OmniScrambleText';

type TextScramblerProps = {
    word: string;
    delay?: number;
    speed?: number;
    charRevealDelay?: number;
    className?: string;
    tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default function TextScrambler({ word, delay = 0, className, tag = 'span', speed, charRevealDelay }: TextScramblerProps) {
    const pRef = useRef<HTMLParagraphElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const fxRef = useRef<OmniScrambleText | null>(null);  // Ref to store the OmniScrambleText instance

    useEffect(() => {
        let currentRef = null;

        switch (tag) {
            case 'p':
                currentRef = pRef.current;
                break;
            case 'span':
                currentRef = spanRef.current;
                break;
            default:
                currentRef = headingRef.current;
        }

        if (!currentRef || !word) return;

        // Use existing OmniScrambleText instance or create a new one if it doesn't exist yet
        if (!fxRef.current) {
            switch (charRevealDelay) {
                case (charRevealDelay):
                    fxRef.current = new OmniScrambleText(currentRef, undefined, charRevealDelay);
                    break;
                default:
                    fxRef.current = new OmniScrambleText(currentRef);
                    break;
            }
        }
        // If there's a previous animation ongoing, cancel it
        fxRef.current.cancelCurrentAnimation();

        setTimeout(() => {
            fxRef.current?.setText(word);
        }, delay);

    }, [word, delay, tag]);

    switch (tag) {
        case 'p':
            return <p className={className} ref={pRef} />;
        case 'span':
            return <span className={className} ref={spanRef} />;
        case 'h1':
            return <h1 className={className} ref={headingRef} />;
        case 'h2':
            return <h2 className={className} ref={headingRef} />;
        case 'h3':
            return <h3 className={className} ref={headingRef} />;
        case 'h4':
            return <h4 className={className} ref={headingRef} />;
        case 'h5':
            return <h5 className={className} ref={headingRef} />;
        case 'h6':
            return <h6 className={className} ref={headingRef} />;
        default:
            return null;
    }
}
