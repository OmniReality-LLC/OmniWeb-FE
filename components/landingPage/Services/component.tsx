"use client"
import styles from './styles.module.css';
import Carousel from "nuka-carousel";

interface CustomPagingDotsProps {
    currentSlide: number;
    slideCount: number;
}

const CustomPagingDots = ({ currentSlide, slideCount }: CustomPagingDotsProps) => {
    const dots = [];
    for (let i = 0; i < slideCount; i++) {
        const isActive = i === currentSlide;
        dots.push(
            <span
                key={i}
                className={isActive ? styles.activeNeonBlueDot : styles.neonBlueDot}
            ></span>
        );
    }
    return <div className={styles.dotsContainer}>{dots}</div>;
};

export default function ServicesSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>Website Services</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <Carousel
                                    renderBottomCenterControls={(props) => <CustomPagingDots {...props} />}
                                    renderCenterLeftControls={({ previousSlide }) => null}
                                    renderCenterRightControls={({ nextSlide }) => null}
                                >
                                    <div className={styles.carouselItem}>
                                        <h2 className={styles.subTitle}> Build your digital identity, increase traffic and boost revenue.</h2>
                                        <div className={styles.centerSmallCardContainer}>
                                            <div className={styles.smallCardContainer}>

                                                <div className={styles.iconContainer}>
                                                    <img src='/icons/WebDev.svg' className={styles.svgIcon} />
                                                </div>
                                                <div className={styles.textContainer}>
                                                    <h3 className={styles.subSubTitle}>Web Design / Development</h3>
                                                    <p className={styles.description}>Using innovative design and modern development tools, we craft compelling, user-friendly websites giving accessible online presence on all devices.</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.carouselItem}>
                                        <h2 className={styles.subTitle}> Build your digital identity, increase traffic and boost revenue.</h2>
                                        <div className={styles.centerSmallCardContainer}>
                                            <div className={styles.smallCardContainer}>

                                                <div className={styles.iconContainer}>
                                                    <img src='/icons/WebDev.svg' className={styles.svgIcon} />
                                                </div>
                                                <div className={styles.textContainer}>
                                                    <h3 className={styles.subSubTitle}>Web Design/Development</h3>
                                                    <p className={styles.description}>Using innovative design and modern development tools, we craft compelling, user-friendly websites giving accessible online presence on all devices.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                            <img src='/icons/webDesignImage.png' className={styles.SVG} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
