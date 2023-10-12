import styles from './styles.module.css';
import OmniCircleButton from './Button/component'

interface CircleGroupInterface {
    onClickRight?: () => void;
    onClickLeft?: () => void;
}

export default function CirlceButtonGroup(props: CircleGroupInterface) {
    return (
        <div className={styles.circleButtonGroup}>
            <OmniCircleButton onClick={props.onClickRight}/>
            <OmniCircleButton leftArrow={true}  onClick={props.onClickLeft}/>
        </div>
    )
}
