"use client"
import Link from 'next/link';
import SlideGlowLinkBtn from '../Buttons/component'
import MyNavLink from '../SLinks/component'
import styles from './styles.module.css';

export default function Footer() {
    return (
        <div className={styles.footerMain}>
            <div className={`${styles.footerContainer} container`}>
                <div className={styles.wordContent}>
                    <h1 className={styles.h1}>Digitize Your Business</h1>
                    <h2 className={styles.h4}>Take the next step in transforming your business</h2>
                    <h6 className={styles.h6}>Schedule a call today for a complimentary quote. Our team is ready to help set the stage for your success!</h6>
                </div>
                <div className={`${styles.buttonCol} col`}>
                    <div className={`${styles.footerRow} d-flex justify-content-start`}>
                        <SlideGlowLinkBtn className={styles.myButton} text={'Schedule A Call'} linkTo={'https://calendly.com/omnireality/free-consultation'} marginL='0' textColor='#D4D4D4' defaultStyle={false} target="_blank" rel="noopener noreferrer" />
                        <SlideGlowLinkBtn className={styles.myButton} text={'Contact Us'} linkTo={'/contact'} textColor='#D4D4D4' defaultStyle={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}
