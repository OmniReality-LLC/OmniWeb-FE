import styles from './page.module.css';
import InputContainer from '@/components/contactPage/ContactInputs/component';
import BackgroundVideoFullScreen from '@/components/shared/BgVideoFullScreen/component';
import TitleAndSubTitleColumn from '@/components/shared/TitleAndSubtitleColumn/component';
import Spacer from '@/components/shared/PageSpacer/component';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <BackgroundVideoFullScreen src={'/videos/ContactBackground.mp4'} type={'video/mp4'} />
      <div className={`${styles.mainContent}`}>
        <TitleAndSubTitleColumn title={'Get Connected'} subNoneGradient={'Let Us Know How '} subGradient={'We Can Help You'} />
        <InputContainer />
      </div>
    </main>
  )
}
