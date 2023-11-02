import React from 'react';
import styles from './styles.module.css';

interface BgVideoInterface {
  src: string;
  placeholderSrc: string;
}

const BackgroundVideoFullScreen: React.FC<BgVideoInterface> = (props) => {
  return (
    <>
      <img src={props.placeholderSrc} alt="Placeholder" className={styles.backgroundImage} />
      <video
        src={props.src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={styles.backgroundVideo}
      >
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default BackgroundVideoFullScreen;
