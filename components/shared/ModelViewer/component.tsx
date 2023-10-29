import Script from 'next/script';
import styles from './styles.module.css';

interface ModelViewerProps{
  glbSrc: string;
  alt: string;
  minOrbit: string;
}

export default function ModelViewer(props: ModelViewerProps) {
  return (
    <div className={styles.modelContainer}>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"></Script>
      <div className={styles.modelViewerContent}>
        <model-viewer
          src={props.glbSrc}
          alt={props.alt}
          ar
          ar-modes="webxr scene-viewer quick-look"
          quick-look-browsers="webxr"
          auto-rotate
          camera-controls
          shadow-intensity="1"
          min-camera-orbit={props.minOrbit}
          style={{ position: 'absolute', width: '100%', height: '100%', zIndex:'0' }}
        >
        </model-viewer>
      </div>
    </div>
  );
}
