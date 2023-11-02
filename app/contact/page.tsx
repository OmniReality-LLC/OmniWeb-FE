'use client'
import styles from './page.module.css';
import InputContainer from '@/components/contactPage/ContactInputs/component';
import BackgroundVideoFullScreen from '@/components/shared/BgVideoFullScreen/component';
import TitleAndSubTitleColumn from '@/components/shared/TitleAndSubtitleColumn/component';
import BGDownloadVideo from '@/components/shared/BgVideoFullScreen/NoneStream/component';

export default function Contact() {
  return (
    <main className={styles.main}>
      <BGDownloadVideo
                src={'https://cdn.omnireality.us/ContactBackground.webm'}
                placeholderSrc={'/loadingImages/Contact.webp'}
            />
      <div className={`${styles.mainContent}`}>
        <TitleAndSubTitleColumn title={'Get Connected'} subNoneGradient={'Let Us Know How '} subGradient={'We Can Help You'} />
        <InputContainer />
      </div>
    </main>
  )
}
