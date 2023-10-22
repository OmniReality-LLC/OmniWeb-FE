"use client"
import styles from './styles.module.css';

interface StringProps {
    text: string;
    className?: string;
}

export default function EngravedText ({ text, className = '' }: StringProps) {
    return (
        <h1 className={`${styles.engravedText} ${className}`}>{text}</h1>
    )
}
