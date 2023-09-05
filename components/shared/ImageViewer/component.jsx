'use client'
import styles from './styles.module.css';
import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
const leftArrowSVGString = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';


export default function SimpleGallery(props) {


  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      arrowPrevSVG: leftArrowSVGString,
      arrowNextSVG: leftArrowSVGString,
      mainClass: 'MYSETCLASS',
      pswpModule: () => import('photoswipe'),


    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className={`${styles.imageViewerMain} pswp-gallery`} id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
          className={styles.imageLinkContainer}
        >
          <img src={image.thumbnailURL} alt="Image of a featured item" className={styles.myImg} />
        </a>
      ))}
    </div>
  );
}
