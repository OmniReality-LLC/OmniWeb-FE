"use client"
import styles from './styles.module.css';
import Carousel from "nuka-carousel";
import SlideGlowLinkBtn from '../../shared/Buttons/component'


interface CustomPagingDotsProps {
    currentSlide: number;
    slideCount: number;
    goToSlide?: (slideIndex: number) => void
}

interface ListItem {
    mainText: string;
    specialText: string;
}

interface SmallCardProps {
    iconSrc: string;
    subSubTitle: string;
    description: string;

}

interface CarouselItemProps {
    subTitle: string;
    smallCard?: SmallCardProps;
    listItems?: ListItem[];

}

interface ServiceCardProps {
    carouselItems: CarouselItemProps[];
    linkTo: string;
}

const CustomPagingDots = ({ currentSlide, slideCount, goToSlide }: CustomPagingDotsProps) => {
    const dots = [];
    for (let i = 0; i < slideCount; i++) {
        const isActive = i === currentSlide;
        dots.push(
            <span
                key={i}
                onClick={() => {
                    if (goToSlide) {
                        goToSlide(i);
                    }
                }}
                className={isActive ? styles.activeNeonBlueDot : styles.neonBlueDot}
            ></span>
        );
    }
    return <div className={styles.dotsContainer}>{dots}</div>;
};


export default function ServiceCard({ carouselItems, linkTo }: ServiceCardProps) {
    return (
        <>
            <Carousel
                autoplay
                autoplayInterval={16000}
                renderBottomCenterControls={({ goToSlide, ...props }) => <CustomPagingDots goToSlide={goToSlide} {...props} />} // Modify this line
                renderCenterLeftControls={({ previousSlide }) => null}
                renderCenterRightControls={({ nextSlide }) => null}
                wrapAround={true}
                className={styles.mainCar}
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className={styles.carouselItem}>
                        <h2 className={styles.subTitle}>{item.subTitle}</h2>

                        {item.smallCard && (
                            <div className={styles.centerSmallCardContainer}>
                                <div className={styles.smallCardContainer}>
                                    <div className={styles.iconContainer}>
                                        <img src={item.smallCard.iconSrc} className={styles.svgIcon} loading='lazy' />
                                    </div>
                                    <div className={styles.textContainer}>
                                        <h3 className={styles.subSubTitle}>{item.smallCard.subSubTitle}</h3>
                                        <p className={styles.description}>{item.smallCard.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {item.listItems && (
                            <div className={styles.listContainer}>
                                <ul className={styles.bulletList}>
                                    {item.listItems.map((listItem, liIndex) => (
                                        <li key={liIndex} className={styles.listItem}>
                                            {listItem.mainText} <span className={styles.specialText}>{listItem.specialText}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}

            </Carousel>
            <div className={styles.button}>
                <SlideGlowLinkBtn text={'Coming Soon'} linkTo={linkTo || ''} textColor='#D4D4D4' bgColor='transparent' marginL='0' marginB='0px' marginR='0px' marginT='20px'/>
            </div>
        </>
    );
}
