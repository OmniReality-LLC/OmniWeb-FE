'use client'
import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import styles from './styles.module.css';

interface MyImageViewerProps {
  imageList: string[];
}

function MyImageViewer(props: MyImageViewerProps) {
  const { imageList } = props;
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className={styles.imageViewerContainer}>
      {imageList.map((src, index) => (
        <div className={styles.imageContainer}>
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            alt=""
            className={styles.myImage}
          />
        </div>
      ))}

      {isViewerOpen && (
        <div className={styles.testingView}>
        <ImageViewer
          src={imageList}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}


        />
        </div>
      )}
    </div>
  );
}

export default MyImageViewer;
