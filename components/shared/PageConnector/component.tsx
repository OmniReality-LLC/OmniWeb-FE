import styles from './styles.module.css';
import CloudImgHelper from '../../shared/ServiceImageCloud/component';

interface ConnectorProps {
  whiteConnector?: boolean;
}

export default function PageConnector({ whiteConnector }: ConnectorProps) {

  const connector = whiteConnector ? 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693948288/Omni%20Website/Main%20Page/WhitePageConnector_vnpj51.png' : 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693948287/Omni%20Website/Main%20Page/PageConnection_lzlyyt.png';

  return (
    <div className={styles.imageViewerMain}>
      <CloudImgHelper src={connector} className={styles.myImg} height={343} width={171} alt='Page connector bar, illuminating in blue or white' quality={100}/>
      <CloudImgHelper src={connector} className={styles.myImg} height={343} width={171} alt='Page connector bar, illuminating in blue or white' quality={100}/>
    </div>
  );
}
