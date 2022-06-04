import styles from './styles.module.scss'

interface DescriptionTextType {
    text: string;
}

function DescriptionText({ text }: DescriptionTextType) {
    return <p className={styles.description_text}>{text}</p>
}

export default DescriptionText