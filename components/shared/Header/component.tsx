"use client"

import { useRef, useState } from 'react';
import styles from './styles.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
import SlideGlowLinkBtn from '../Buttons/component'
import MyNavLink from '../SLinks/component'
import Lottie from "lottie-react";
import LogoLottie from '../../../public/lottie/OmniLogoAnim.json'

export default function NavBar() {

    const [isHovered, setIsHovered] = useState(false);
    const lottieRef = useRef<any>(null);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navLinks =
        [
            { path: '/#home', name: 'Home' },
            { path: '/#services', name: 'Services' },
            { path: '/#work', name: 'Our Work' },
            { path: '/#about', name: 'About' },
            { path: '/#contact', name: 'Contact' },
        ];

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (lottieRef.current) {
            lottieRef.current.setDirection(1);
            lottieRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (lottieRef.current) {
            lottieRef.current.setDirection(-1);
            lottieRef.current.play();
        }
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    }

    return (
        <>
            {navbarOpen && <div className={styles.overlay} onClick={closeNavbar}/>}
            <Navbar collapseOnSelect expand="md" expanded={navbarOpen} onToggle={setNavbarOpen} className={styles.navbar}>
                <div className={`container`}>
                    <Link href='/' className={styles.noUnderline}>
                        <Navbar.Brand
                            className={` d-flex align-items-center `}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={LogoLottie}
                                autoplay={false}
                                loop={false}
                                className={styles.logoImg}
                            />
                            <span
                                className={styles[`omniLink`]}
                                style={{ color: isHovered ? '#3EDCFF' : '#D4D4D4' }}
                            >
                                OmniReality
                            </span>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarResponsive" className={styles.customToggler}/>
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ms-auto">
                            {navLinks.map((link, index) => (
                                <MyNavLink
                                    key={index}
                                    text={link.name}
                                    linkTo='none'
                                    textSize='clamp(15px, 1.5vw, 20px)'
                                    inactiveColor={'#7E7E7E'}
                                    activeColor={'#3EDCFF'} />
                            ))}
                            <SlideGlowLinkBtn
                                text={'Request A Quote'}
                                textColor='#D4D4D4'
                                linkTo={''}
                                bgColor={'transparent'}
                                glowColor={'#3EDCFF'} />
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};
