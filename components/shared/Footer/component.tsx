"use client"
import Link from 'next/link';
import SlideGlowLinkBtn from '../Buttons/component'
import MyNavLink from '../SLinks/component'
import styles from './styles.module.css';


export default function NavBar() {
    return (
        <div className={styles.footerMain}>
            <div className={`${styles.footerContainer} container`}>



                <h1 className={styles.h1}>Digitize Your Business</h1>



                <h4 className={styles.h4}>Take the next step in transforming your business</h4>
                <h6 className={styles.h6}>Not quite sure what you want or the direction you're headed? Schedule a call today and receive a FREE Quote. We’ll help get you on the right track!</h6>
                <div className={styles.footerRow}>
                    <SlideGlowLinkBtn text={'Schedule A Call'} linkTo={''} marginL='0' textColor='#D4D4D4' defaultStyle={false} />
                    <SlideGlowLinkBtn text={'Contact Us'} linkTo={''} textColor='#D4D4D4' defaultStyle={false} />
                </div>
            </div>
        </div>
    );
}
