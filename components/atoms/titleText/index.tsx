import styles from './styles.module.scss'

interface TitleTextType {
    text: string;
}

function TitleText({ text }: TitleTextType) {
    return <h2 className={styles['title-text']}>{text}</h2>
}

export default TitleText