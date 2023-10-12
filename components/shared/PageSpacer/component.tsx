import styles from './styles.module.css';

interface SpacerProps {
    height?: string;
    width?: string;
    className?: string;
}

export default function Spacer({height, width, className}: SpacerProps) {

    const style: React.CSSProperties = {
        height: height,
        width: width
    };

    return (
        <div style={style} className={`${styles.spacerMain} ${className}`} />
    );
}
