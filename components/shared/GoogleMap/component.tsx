'use client'
import React, { useEffect } from 'react';
import styles from './styles.module.css';

interface GoogleMapProps {
  googleAddress: string;
}

export default function GoogleMap({ googleAddress }: GoogleMapProps) {
  useEffect(() => {
    const address = encodeURIComponent(googleAddress);  // Replace with your actual address
    const iframe = document.createElement('iframe');

    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.src = `https://www.google.com/maps?q=${address}&output=embed`;
    iframe.title = 'Google Map View Of Business Location';

    const mapDiv = document.getElementById('googleMap');
    if (mapDiv) {
      mapDiv.appendChild(iframe);
    }
  }, []);

  return (
    <div className={styles.googleMapContainer} id="googleMap">

    </div>
  );
}
