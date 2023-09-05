import styles from './styles.module.css';
import Image from 'next/image';

interface ConnectorProps {
  whiteConnector?: boolean;
}

export default function PageConnector({ whiteConnector }: ConnectorProps) {

  const connector = whiteConnector ? '/pageConnector/WhiteConnection.png' : '/pageConnector/BlueConnection.png';

  return (
    <div className={styles.imageViewerMain}>
      <Image src={connector} className={styles.myImg} height={343} width={171} alt='Page connector bar, illuminating in blue or white' quality={100} priority={false}/>
      <Image src={connector} className={styles.myImg} height={343} width={171} alt='Page connector bar, illuminating in blue or white' quality={100} priority={false}/>
    </div>
  );
}
