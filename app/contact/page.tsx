'use client'
import styles from './page.module.css';
import InputContainer from '@/components/contactPage/ContactInputs/component';
import BackgroundVideoFullScreen from '@/components/shared/BgVideoFullScreen/component';
import TitleAndSubTitleColumn from '@/components/shared/TitleAndSubtitleColumn/component';

export default function Contact() {
  return (
    <main className={styles.main}>
      <BackgroundVideoFullScreen src={'/videos/ContactBackground.webm'} type={'video/webm'} />
      <div className={`${styles.mainContent}`}>
        <TitleAndSubTitleColumn title={'Get Connected'} subNoneGradient={'Let Us Know How '} subGradient={'We Can Help You'} />
        <InputContainer />
      </div>
    </main>
  )
}
