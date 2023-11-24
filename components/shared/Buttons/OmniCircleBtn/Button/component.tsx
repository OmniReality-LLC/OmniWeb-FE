'use client';
import styles from './styles.module.css';
import React, { useState } from 'react';

interface CircleButtonInterface {

    leftArrow?: boolean;
    onClick?: () => void;
}

export default function CircleButton(props: CircleButtonInterface) {
    const hoveredSVGArrow =
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 41 59"
        fill="none"
        className={`${styles.circleTestArrow} ${props.leftArrow ? styles.left : styles.right}`}
        >
            <g filter="url(#filter0_di_1272_3041)">
                <path d="M13.25 12.75L26.2145 25.7145C28.1671 27.6671 28.1671 30.8329 26.2145 32.7855L13.25 45.75" stroke="#3EDCFF" strokeWidth="5" strokeLinecap="round" />
            </g>
            <defs>
                <filter id="filter0_di_1272_3041" x="0.75" y="0.25" width="39.429" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.241667 0 0 0 0 0.8635 0 0 0 0 1 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1272_3041" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1272_3041" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1272_3041" />
                </filter>
            </defs>
        </svg>;

    const nonHoveredSvgArrow =
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 41 59"
            fill="none"
            className={`${styles.circleTestArrow} ${props.leftArrow ? styles.left : styles.right}`}
            >
            <path d="M13.25 12.75L26.2145 25.7145C28.1671 27.6671 28.1671 30.8329 26.2145 32.7855L13.25 45.75" stroke="#D4D4D4" strokeWidth="5" strokeLinecap="round" />
        </svg>;

    const [hovered, setHovered] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);

        if (props.onClick) {
            props.onClick();  // Simply call the onClick prop
        }

        setTimeout(() => {
            setAnimate(false);
        }, 600);  // match the duration of your transition
    };


    return (

        <button
            className={`${styles.circleTest} ${animate ? styles.animate : ''}`}
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered ? hoveredSVGArrow : nonHoveredSvgArrow}
        </button>
    );
}
