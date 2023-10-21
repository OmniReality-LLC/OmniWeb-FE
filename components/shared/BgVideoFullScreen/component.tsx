/**
 * This background video leverages hls.js for optimized playback of content hosted on Cloudflare.
 * For an optimal user experience, it requires the HLS URI from Cloudflare and a placeholder
 * image, preferably derived from the video's initial frame.
 *
 * To utilize this setup, ensure you have `hls.js` package installed in your project:
 *
 * Using Yarn:
 * ```bash
 * yarn add hls.js
 * ```
 *
 * Using npm:
 * ```bash
 * npm install hls.js --save
 * ```
 */

'use client'
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import styles from './styles.module.css';

interface BgVideoInterface {
  src: string;
  placeholderSrc: string;
}

export default function BackgroundVideoFullScreen(props: BgVideoInterface) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(props.src);
      hls.attachMedia(videoRef.current as HTMLVideoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        videoRef.current?.play();
      });
    } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = props.src;
      videoRef.current.addEventListener('loadedmetadata', () => {
        videoRef.current?.play();
      });
    }
  }, [props.src]);

  return (
    <>
      <img src={props.placeholderSrc} alt="Placeholder" className={styles.backgroundImage} />  {/* Placeholder image */}
      <video
        ref={videoRef}
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
