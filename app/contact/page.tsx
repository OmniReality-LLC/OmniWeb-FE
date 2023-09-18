
import styles from './page.module.css';
import ContactForm from '../../components/shared/ContactForm/component'



export default function ContactPage() {

  return (
    <main className={styles.main}>

      <div className={styles.mainContent}>
        {/* CONTAINER: Title / Subtitle */}
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>Get Connected</h1>
          <h2 className={styles.subTitle}>Let Us Know How <span className={styles.subTitleSpecial}> We Can Help You </span> </h2>
        </div>
        {/* CONTAINER: Schedule, Email, and Hours*/}
        <div className={styles.infoContainer}>
          {/* ITEM: Schedule */}
          <div className={styles.infoItemBlock}>
            <img className={styles.infoIcon} />
            {/* Add button here */}
            <button ></button>
          </div>
          {/* ITEM: Email */}
          <div className={styles.infoItemBlock}>
            <img className={styles.infoIcon} />
            <div className={styles.contactInfoText}>
              <h1 className={styles.infoTitleFancy}>E-Mail</h1>
              <p className={styles.emailText}>hello@omnireality.us</p>
            </div>
          </div>
          {/* ITEM: Hours */}
          <div className={styles.infoItemBlock}>
            <img className={styles.infoIcon} />
            <div className={styles.contactInfoText}>
              <h1 className={styles.infoTitleFancy}>Hours</h1>
              <p className={styles.emailText}>Monday - Friday  </p>
            </div>
          </div>
        </div>
        {/* CONTAINER: Input and Map*/}
        <div className={styles.inputAndMapContainer}>
          {/* SUB CONTAINER: Input*/}
          <div className={styles.inputContainer}>
            <ContactForm />


          </div>
          {/* SUB CONTAINER: Google Map*/}
          <div className={styles.mapContainer}>
            {/* Add google map container here - grab from Cherry's website maybe */}
          </div>
        </div>
        {/* CONTAINER: Input*/}
      </div>
    </main>
  )
}
