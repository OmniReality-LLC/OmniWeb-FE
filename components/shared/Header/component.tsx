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
import HamburgerLottie from '../../../public/lottie/MobileHamburgerMenuOpen.json'

export default function NavBar() {

    const [isHovered, setIsHovered] = useState(false);
    const lottieRef = useRef<any>(null);
    const hamburgerRef = useRef<any>(null);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navLinks =
        [
            { path: '/#home', name: 'Home', activeColor: '#3EDCFF' },
            { path: '/#services', name: 'Service', activeColor: '#3EDCFF' },
            { path: '', name: 'Our Work', activeColor: '#F35151' },
            { path: '', name: 'About', activeColor: '#F35151' },
            { path: '/contact', name: 'Contact', activeColor: '#3EDCFF' },
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

    const handleHamburgerClick = () => { // new click handler
        setNavbarOpen(prevOpen => !prevOpen);
        if (hamburgerRef.current) {
            hamburgerRef.current.setDirection(navbarOpen ? -1 : 1);
            hamburgerRef.current.play();

        }
    };

    return (
        <>
            {navbarOpen && <div className={styles.overlay} onClick={handleHamburgerClick}/>}
            <Navbar collapseOnSelect expand="md" expanded={navbarOpen} className={styles.navbar}>
                <div className={styles.widthForNavBar}>
                    <Link href='/' className={styles.noUnderline}>
                        <Navbar.Brand
                            className={` ${styles.navbarBrand} d-flex align-items-center `}
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

                        <Lottie
                            lottieRef={hamburgerRef}
                            animationData={HamburgerLottie}
                            autoplay={false}
                            loop={false}
                            className={styles.hamburgerMenu}
                            onClick={handleHamburgerClick}
                        />

                    <Navbar.Collapse id="navbarResponsive">
                        <Nav className="ms-auto">
                            {navLinks.map((link, index) => (
                                <MyNavLink
                                    key={index}
                                    text={link.name}
                                    linkTo={link.path}
                                    textSize='clamp(15px, 1.5vw, 20px)'
                                    inactiveColor={'#7E7E7E'}
                                    activeColor={link.activeColor} />
                            ))}
                            <SlideGlowLinkBtn
                                text={'Request A Quote'}
                                textColor='#D4D4D4'
                                linkTo={'/contact'}
                                bgColor={'transparent'}
                                glowColor={'#3EDCFF'}
                                marginL='25px'
                                marginR='0px'
                                className={styles.glowButton}
                                />

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    );
};
