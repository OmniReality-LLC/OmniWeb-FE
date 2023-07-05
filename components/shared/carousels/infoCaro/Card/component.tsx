"use client"

import styles from './styles.module.css';
import SlideGlowLinkBtn from '../../../Buttons/component';

export default function CaroCard() {

    return (
        <div className={styles.mainCardHolder}>
            <div className={`${styles.embossContainer}`}>
                <div className='container'>
                    <div className={` row`}>
                        <h1 className={styles.title}>Build your digital identity, increase traffic and boost revenue.</h1>
                        <div className={`${styles.imgContainer} col-auto`}>
                            <img src='/icons/OmniRealityIconsWebDev.svg' alt='Icon of Service' />
                        </div>

                        <div className="col-9">

                            <h2 className={styles.subTitle}> Web Design/Development</h2>
                            <p className={styles.paragraph}>Using innovative design and modern development tools, we craft compelling, user-friendly websites giving accessible online presence on all devices. </p>
                        </div>
                    </div>

                    <div className={styles.btnContainer}>
                        <SlideGlowLinkBtn text={'View'} linkTo={''} marginL='0' defaultStyle={false} className={styles.myButton} marginB='2.5%' marginT='10%' marginR='0' />
                    </div>
                </div>
            </div>
        </div>
    )
}
