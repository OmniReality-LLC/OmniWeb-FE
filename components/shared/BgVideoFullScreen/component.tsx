import styles from './styles.module.css';

interface BgVideoInterface{
  src: string;
  type: string;
}
export default function BackgroundVideoFullScreen(props: BgVideoInterface) {
  return (
    <video autoPlay loop muted playsInline preload="auto" className={styles.backgroundVideo}>
      <source src={props.src} type={props.type} />
      Your browser does not support the video tag.
    </video>
  )
}
