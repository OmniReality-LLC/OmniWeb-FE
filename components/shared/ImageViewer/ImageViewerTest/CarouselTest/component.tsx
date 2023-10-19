'use client'
import styles from './styles.module.css';
import React, { useEffect, useRef, useState } from 'react';


interface CarTestInterface{

    data: string[][];


}


function CarouselTest(props: CarTestInterface) {
    // Reference the scroller using useRef
    const [moveTo, setMoveTo] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0); // New state added as requested

    const scrollerRef = useRef(null);
    const carouselPagesCount: number = props.data.length;
    const activeDotColor: string = 'green';
    const inactiveDotColor: string = 'red';

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
                {props.data.map((myObject, index) =>
                    <div className={styles.carTestItem} key={'webDesignCarousel' + 'ID:' + index}>

                    </div>
                )}
            </div>

            {/* Dots */}

            <div className={styles.dotsContainer}>
                {props.data.map((_, index) => (
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
