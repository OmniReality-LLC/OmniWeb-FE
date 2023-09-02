"use client"
import styles from './styles.module.css';
import Carousel from "nuka-carousel";

interface CustomPagingDotsProps {
    currentSlide: number;
    slideCount: number;
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

export default function ServiceCard({ carouselItems }: ServiceCardProps) {
    return (
        <Carousel
            renderBottomCenterControls={(props) => <CustomPagingDots {...props} />}
            renderCenterLeftControls={({ previousSlide }) => null}
            renderCenterRightControls={({ nextSlide }) => null}
        >
            {carouselItems.map((item, index) => (
                <div key={index} className={styles.carouselItem}>
                    <h2 className={styles.subTitle}>{item.subTitle}</h2>

                    {item.smallCard && (
                        <div className={styles.centerSmallCardContainer}>
                            <div className={styles.smallCardContainer}>
                                <div className={styles.iconContainer}>
                                    <img src={item.smallCard.iconSrc} className={styles.svgIcon} />
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
    );
}
