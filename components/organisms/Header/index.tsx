import { Image } from '@nextui-org/react'
import React from 'react'

import styles from './styles.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <picture className={styles.header__logo_mobile}>
                <Image
                    src='/assets/craftmen-logo-horizontal-blanco.svg'
                    alt='logo-mobile'
                    width={300}
                    height={25.98}
                    contentEditable={true}
                    containerCss={{ borderRadius: '0px', margin: '0px' }}
                />
            </picture>
            <picture className={styles.header__logo_desktop}>
                <Image
                    src='/assets/craftmen-logo-vertical-blanco.svg'
                    alt='logo-desktop'
                    width={300}
                    height={168.938}
                    contentEditable={true}
                    containerCss={{ borderRadius: '0px', margin: '0px' }}
                />
            </picture>
        </header>
    )
}
