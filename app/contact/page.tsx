'use client'
import styles from './page.module.css';
import InputContainer from '@/components/contactPage/ContactInputs/component';
import BackgroundVideoFullScreen from '@/components/shared/BgVideoFullScreen/component';
import TitleAndSubTitleColumn from '@/components/shared/TitleAndSubtitleColumn/component';

export default function Contact() {
  return (
    <main className={styles.main}>
      <BackgroundVideoFullScreen
                src={'https://customer-y3xf1gql15dhgu26.cloudflarestream.com/f851728d5ca64075becf16b0fe37b2c9/manifest/video.m3u8'}
                placeholderSrc={'/loadingImages/Contact.webp'}
            />
      <div className={`${styles.mainContent}`}>
        <TitleAndSubTitleColumn title={'Get Connected'} subNoneGradient={'Let Us Know How '} subGradient={'We Can Help You'} />
        <InputContainer />
      </div>
    </main>
  )
}
