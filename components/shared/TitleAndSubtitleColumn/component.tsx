'use client'
import styles from './styles.module.css';

interface TitSubTitInterface{
  title: string;
  subNoneGradient: string;
  subGradient: string;
}

export default function TitleAndSubTitleColumn(props: TitSubTitInterface) {
  return (
    <div className={styles.contactTopContainer}>
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={styles.subTitle}>{props.subNoneGradient} <span>{props.subGradient}</span></h2>
    </div>
  )
}
