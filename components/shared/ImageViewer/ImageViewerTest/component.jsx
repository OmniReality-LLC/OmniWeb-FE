'use client'
import styles from './styles.module.css';
import React, { useEffect, useState, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { CldImage } from 'next-cloudinary';

const leftArrowSVGString = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';

export default function SimpleGallery(props) {

  const [activeIndex, setActiveIndex] = useState(0); // New state added as requested


  const scrollerRef = useRef(null);


  // First useEffect to define handleScroll
const [handleScroll, setHandleScroll] = useState(null);

useEffect(() => {
  // Initialize lightbox
  let lightbox = new PhotoSwipeLightbox({
    gallery: '#' + props.galleryID,
    children: 'a',
    arrowPrevSVG: leftArrowSVGString,
    arrowNextSVG: leftArrowSVGString,
    mainClass: 'MYSETCLASS',
    pswpModule: () => import('photoswipe'),
  });
  lightbox.init();

  // Attach scroll event listener
  if (scrollerRef.current) {
    scrollerRef.current.addEventListener('scroll', handleScroll);
  }

  // Cleanup
  return () => {
    // Destroy lightbox
    lightbox.destroy();
    lightbox = null;

    // Remove scroll event listener
    if (scrollerRef.current) {
      scrollerRef.current.removeEventListener('scroll', handleScroll);
    }
  };
}, []);

useEffect(() => {
    const scrollHandler = () => {
      if (!scrollerRef.current) return;
      const elementWidth = scrollerRef.current.offsetWidth;
      const scrollPosition = scrollerRef.current.scrollLeft;
      const currentPage = Math.round(scrollPosition / elementWidth);

      if (currentPage !== activeIndex) {
        setActiveIndex(currentPage);
      }
    };

    setHandleScroll(() => scrollHandler);

}, [activeIndex]);

// Second useEffect to attach the listener
useEffect(() => {
    if (scrollerRef.current && handleScroll) {
      scrollerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollerRef.current && handleScroll) {
        scrollerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
}, [handleScroll]);


function switchActiveIndex(index) {


  setActiveIndex(index);
  movePage(index);

}

function movePage(index){
  const scroller = scrollerRef.current;
  if (scroller) {
      const spotsToMove = index - activeIndex;
      let pixelsToMove = scroller.offsetWidth * spotsToMove;
      scroller.scrollBy({ left: pixelsToMove, behavior: 'smooth' });

  }


}

return (

  <div className={styles.gallery}>
    <div className={styles.gallery_scroller} ref={scrollerRef} id={props.galleryID}>
      {props.images.map((myObject, index) =>
        <div className={styles.carTestItem} key={'webDesignCarousel' + 'ID:' + index}>
          <div className={`${styles.imageViewerMain} pswp-gallery`} style={props.padding ? { paddingLeft: props.padding, paddingRight: props.padding } : {}}>
            {myObject.map((image, index) => (
              <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={props.galleryID + '-' + index}
                target="_blank"
                rel="noreferrer"
                className={styles.imageLinkContainer}
              >
                <CldImage width={image.width} height={image.height} src={image.thumbnailURL} alt="Image of a featured item" className={styles.myImg} />

              </a>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Dots */}

    <div className={styles.dotsContainer}>
      {props.images.map((_, index) => (
        <Dot
          key={index}
          isActive={index === activeIndex}
          onClick={switchActiveIndex}
          index={index}

        />
      ))}
    </div>

    {/* Controls */}

  </div>

);
}


function Dot(props) {
  const { isActive, onClick, index } = props;
  const activeClass = isActive ? styles.activeDot : '';
  return <span onClick={() => onClick(index)} className={`${styles.dot} ${activeClass}`} />;
}
