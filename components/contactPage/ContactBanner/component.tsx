'use client'
import Spacer from '@/components/shared/PageSpacer/component';
import styles from './styles.module.css';
import Button from '@/components/shared/Buttons/component'

interface ContactBannerInterface {
  className?: string;
  bannerClassName?:string;
}

export default function ContactBanner(props: ContactBannerInterface) {
  return (
    <div className={`${styles.infoContainer} ${props.className || ''}`}>
      {/* ITEM: Schedule */}
      <div className={styles.infoItemBlock}>
        <img className={styles.infoIcon} src='/icons/BrainIcon.svg' alt="Brain Icon" />
        {/* Add button here */}
        <Spacer className={styles.buttomSpacer} width='0' height='0'/>

        <div className={styles.contactInfoText}>
        <Button
          text={'Schedule A Call'}
          linkTo={'https://calendly.com/omnireality/free-consultation'}
          className={styles.scheduleButton}
          marginL='0'
          bgColor='transparent'
          textSize='20px'
          marginR='0'
          target="_blank"
          rel="noopener noreferrer"
        />

        </div>

      </div>
      {/* ITEM: Email */}
      <div className={`${styles.infoItemBlockEmail} ${props.bannerClassName || ''}`}>
        <img className={styles.infoIcon} src='/icons/BrainIcon.svg' alt="Brain Icon" />
        <div className={styles.contactInfoText}>
          <h1 className={styles.infoTitleFancy}>E-Mail</h1>
          <p className={styles.blockText}>
            <a href="mailto:hello@omnireality.us" className={styles.emailLink}>
              hello@omnireality.us
            </a>
          </p>
        </div>
      </div>
      {/* ITEM: Hours */}
      <div className={styles.infoItemBlock}>
        <img className={styles.infoIcon} src='/icons/BrainIcon.svg' alt="Brain Icon" />
        <div className={styles.contactInfoText}>
          <h1 className={styles.infoTitleFancy}>Hours</h1>
          <p className={styles.blockText}>Mon-Fri 9AM-5PM PST</p>
        </div>
      </div>
    </div>
  )
}
