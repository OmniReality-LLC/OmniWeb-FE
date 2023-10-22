'use client'
import React from 'react';
import styles from './styles.module.css';

interface GoogleMapProps {
  googleAddress: string;
}

export default function GoogleMap({ googleAddress }: GoogleMapProps) {
  const address = encodeURIComponent(googleAddress);

  return (
    <div className={styles.googleMapContainer}>
      <iframe
        width="100%"
        height="100%"
        title="Google Map View Of Business Location"
        src={`https://www.google.com/maps?q=${address}&output=embed`}
        allowFullScreen
        style={{ border: '0' }}
        loading="lazy"
      ></iframe>
    </div>
  );
}
