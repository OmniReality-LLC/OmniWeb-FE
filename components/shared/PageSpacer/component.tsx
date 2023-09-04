import styles from './styles.module.css';

interface SpacerProps {
    height?: string;
    className?: string;
}

export default function Spacer({
    height,
    className
}: SpacerProps) {

    const style: React.CSSProperties = {
        height: height,
    };

    return (
        <div style={style} className={`${styles.spacerMain} ${className}`} />
    );
}
