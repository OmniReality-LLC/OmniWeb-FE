'use client'
import styles from './styles.module.css';
import React, { useEffect, useState, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { CldImage } from 'next-cloudinary';
import Carousel from "nuka-carousel"
import CircleButton from '@/components/shared/Buttons/OmniCircleBtn/Button/component';
import Spacer from '@/components/shared/PageSpacer/component';

const leftArrowSVGString = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 100 125" width="100" height="125"><path d="M5,50L50,5l3,3L11,50l42,42l-3,3L5,50z M92,95l3-3L53,50L95,8l-3-3L47,50L92,95z"/></svg>';

export default function SimpleGallery(props) {

  const maxItemsPerPage = 6;
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const currentSlideRef = useRef(currentSlide);
  const pageDataAll = props.images;

  useEffect(() => {
    // Update the ref whenever currentSlide changes
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

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

    lightbox.on('change', () => {
      const pswp = lightbox.pswp;
      const currIndex = pswp.currIndex;
      console.log('Curernt Lightbox Instanse: ' + currIndex);

      const pageNeeded = currIndex === 0 ? 0 : Math.trunc(currIndex / maxItemsPerPage);
      console.log('Page Needed: ' + pageNeeded);
      console.log('Current Page: ' + currentSlide);

      if (currentSlideRef.current !== pageNeeded) {
        setCurrentSlide(pageNeeded);
      }
    });

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);


  function changeIndex(left){
    let changeDirectionNumber = 0;
    if(left){
        changeDirectionNumber = currentSlide === 0 ? 1 : -1;
    } else {
        changeDirectionNumber = currentSlide === 1 ? -1 : 1;
    };
    setCurrentSlide(currentSlide + changeDirectionNumber);
}

  return (

    <div className={`${styles.carTestMain} pswp-gallery`} id={props.galleryID} >
      {/* Image viwer page holds a 2x3 section of images.  We can feed this into a carousel and set each page equal to the carousels container and use slide features to view */}
      <Carousel
        slideIndex={currentSlide}
        afterSlide={slideIndex => setCurrentSlide(slideIndex)}
        renderCenterLeftControls={({ previousSlide }) => null}
        renderCenterRightControls={({ nextSlide }) => null}
        renderBottomCenterControls={({ goToSlide, ...props }) =>
        (
          <div className={styles.dotsContainer}>
            {pageDataAll.map((_, index) => (
              <Dot
                goToSlide={goToSlide}
                key={index}
                currentSlide={currentSlide}
                index={index}
                {...props}
              />
            ))}
          </div>
        )}
      >
        {props.images.map((page, pageIndex) => (
          <div className={styles.imageViewerMain} key={'page: ' + pageIndex}>
            {page.map((image, imageIndex) => (
              <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={props.galleryID + '-' + imageIndex}
                target="_blank"
                rel="noreferrer"
                className={styles.imageLinkContainer}
                draggable="false"  // Add this line
                onDragStart={e => e.preventDefault()}
              >
                <CldImage width={image.width} height={image.height} src={image.thumbnailURL} alt="Image of a featured item" className={styles.myImg} />
              </a>
            ))}
          </div>
        ))}
      </Carousel>
      <div className={styles.controls}>
      <div className={styles.carButtContainer}>
      <CircleButton onClick={() => changeIndex(true)} leftArrow={true} />
                <Spacer width='10%' />
                <CircleButton onClick={() => changeIndex(false)} />
            </div>
            </div>
    </div>
  );
}

function Dot(props) {
  const { currentSlide, onClick, index, goToSlide } = props;
  const activeClass = currentSlide === index ? styles.activeDot : '';
  return <span onClick={() => {
    if (goToSlide) {
      goToSlide(index);
    }
  }} className={`${styles.dot} ${activeClass}`} />;
}
