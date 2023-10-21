'use client'
import styles from './styles.module.css';
import MyImageViewer from '../../shared/ImageViewer/component';
import React, { useEffect, useRef, useState } from 'react';
import CircleButton from '@/components/shared/Buttons/OmniCircleBtn/Button/component';
import Spacer from '@/components/shared/PageSpacer/component';
import MyImageViewerTest from '../../shared/ImageViewer/ImageViewerTest/component';

const data = [
    [{
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto/v1697931217/Omni%20Website/Main%20Page/Featured%20Websites/CherryPickedSpeechTherapy_blmjdd.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto/v1697931217/Omni%20Website/Main%20Page/Featured%20Websites/CherryPickedSpeechTherapy_blmjdd.png',
        width: 1920,  // Replace with actual width in pixels
        height: 6693,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940727/Omni%20Website/Main%20Page/Featured%20Websites/CafeChinoWebsite_f1dc3m.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940727/Omni%20Website/Main%20Page/Featured%20Websites/CafeChinoWebsite_f1dc3m.png',
        width: 1920,  // Replace with actual width in pixels
        height: 3719,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945593/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite02_sh9ws6.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945593/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite02_sh9ws6.png',
        width: 1920,  // Replace with actual width in pixels
        height: 5744,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945932/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite_bzkgzy.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945932/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite_bzkgzy.png',
        width: 1920,  // Replace with actual width in pixels
        height: 5591,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940726/Omni%20Website/Main%20Page/Featured%20Websites/MochaMagic_ld9hub.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940726/Omni%20Website/Main%20Page/Featured%20Websites/MochaMagic_ld9hub.png',
        width: 1920,  // Replace with actual width in pixels
        height: 3020,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940728/Omni%20Website/Main%20Page/Featured%20Websites/Oak_IronTavernWebsite_pgn0lk.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940728/Omni%20Website/Main%20Page/Featured%20Websites/Oak_IronTavernWebsite_pgn0lk.png',
        width: 1920,  // Replace with actual width in pixels
        height: 3677,  // Replace with actual height in pixels
    }],
    [{
        largeURL:'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875912/Omni%20Website/Website%20Service%20Page/BeeverLoomWebsite_epnwqp.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875912/Omni%20Website/Website%20Service%20Page/BeeverLoomWebsite_epnwqp.png',
        width: 1920,  // Replace with actual width in pixels
        height: 3642,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/LuxeGemBotiqueWebsite_idn6ok.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/LuxeGemBotiqueWebsite_idn6ok.png',
        width: 1920,  // Replace with actual width in pixels
        height: 5138,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/TipsyTavernWebpage_otxsmf.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/TipsyTavernWebpage_otxsmf.png',
        width: 1920,  // Replace with actual width in pixels
        height: 3710,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696876123/Omni%20Website/Website%20Service%20Page/LandscapingWebsite01_z1wlvp.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696876123/Omni%20Website/Website%20Service%20Page/LandscapingWebsite01_z1wlvp.png',
        width: 1920,  // Replace with actual width in pixels
        height: 7344,  // Replace with actual height in pixels
    },
    {
        largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696875918/Omni%20Website/Website%20Service%20Page/ThreadedNeedleWebsite_ss2vnm.png',
        thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696875918/Omni%20Website/Website%20Service%20Page/ThreadedNeedleWebsite_ss2vnm.png',
        width: 1920,  // Replace with actual width in pixels
        height: 3497,  // Replace with actual height in pixels
    }]
]

export default function WebsiteDesigns() {
    return (
        <div className={styles.servicesMain} id='work'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} data-text="Featured Designs">Featured Designs</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <MyImageViewerTest images={data} galleryID='webDesignCarousel' padding='calc(5% - 10px)'/>
                    </div>
                </div>
            </div>
        </div>
    );
};




function CarouselTest() {
    // Reference the scroller using useRef
    const [moveTo, setMoveTo] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0); // New state added as requested

    const scrollerRef = useRef(null);
    const carouselPagesCount: number = data.length;
    const activeDotColor: string = 'green';
    const inactiveDotColor: string = 'red';

    function testing() {


    }
    const handleScroll = () => {
        if (!scrollerRef.current) {
            return;
        }

        const { offsetWidth } = scrollerRef.current;
        const { scrollLeft } = scrollerRef.current;
        const newIndex = Math.round(scrollLeft / offsetWidth);

        // Check if the index has changed
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    };

    useEffect(() => {
        const scroller : any = scrollerRef.current;
        // If scroller is available, add the event listener.
        if (scroller) {
            scroller.addEventListener('scroll', handleScroll);
        }
        // Clean up - remove the event listener
        return () => {
            if (scroller) {
                scroller.removeEventListener('scroll', handleScroll);
            }
        };
    }, [activeIndex]);



    // Provides the endless carousel functionality.
    const changeIndex = (left?: boolean) => {
        if (left) {
            if (moveTo - 1 < 0) {
                console.log('set move to: ' + (carouselPagesCount - 1));
                setMoveTo(carouselPagesCount - 1);
            } else {
                console.log('Inside setmove to left');
                setMoveTo(moveTo - 1)
            }
        } else {
            if (moveTo + 1 == carouselPagesCount) {
                console.log('Inside setmove to 0');
                setMoveTo(0);
            } else {
                console.log('Inside setmove to right');
                setMoveTo(moveTo + 1);
            }
        }
    }

    useEffect(() => {
        const scroller: any = scrollerRef.current;
        if (scroller) {
            const spotsToMove: number = moveTo - activeIndex;
            let pixelsToMove: number = scroller.offsetWidth * spotsToMove;
            scroller.scrollBy({ left: pixelsToMove, behavior: 'smooth' });
            setActiveIndex(moveTo);
        }
    }, [moveTo]);

    return (

        <div className={styles.gallery}>
            <div className={styles.gallery_scroller} ref={scrollerRef}>
                {data.map((myObject, index) =>
                    <div className={styles.carTestItem} key={'webDesignCarousel' + 'ID:' + index}>
                        <MyImageViewerTest images={myObject} galleryID='webDesignCarousel' padding='calc(5% - 10px)' />
                    </div>
                )}
            </div>

            {/* Dots */}

            <div className={styles.dotsContainer}>
                {data.map((_, index) => (
                    <Dot
                        key={index}
                        isActive={index === activeIndex}

                    />
                ))}
            </div>

            {/* Controls */}

        </div>
    );
}

/* <div className={styles.carButtContainer}>
                <CircleButton onClick={() => changeIndex(true)} leftArrow={true} />
                <Spacer width='10%' />
                <CircleButton onClick={() => changeIndex()} />
            </div> */

interface CaroDotoInterface {

    index: number;



}



interface DotProps {
    isActive: boolean;
    onClick?: () => void;
}

function Dot(props: DotProps) {
    const { isActive, onClick } = props;
    const activeClass = isActive ? styles.activeDot : '';
    return <span onClick={onClick} className={`${styles.dot} ${activeClass}`} />;
}
