import IconImage from "../../atoms/iconImage"
import TitleText from "../../atoms/titleText"

import styles from './styles.module.scss'

interface TitleTypes {
    iconName: string;
    titleText: string;
}

function Title({ iconName, titleText }: TitleTypes) {
    return (
        <section className={styles.title}>
            <IconImage iconName={iconName} />
            <TitleText text={titleText} />
        </section>
    )
}

export default Title