import { Image } from "@nextui-org/react";
import styles from './styles.module.scss'

interface PhotoGalleryTypes {
    listPhotoGallery: string[];
    category: string;
}

function PhotoGallery({ listPhotoGallery, category }: PhotoGalleryTypes) {
    return (
        <section className={styles.photo_gallery} >
            {listPhotoGallery && listPhotoGallery.map((element, ind) => {
                return (
                    <picture
                        className={styles.photo_gallery__image}
                        key={`image-${category}-${ind}`}
                    >
                        <Image
                            src={element}
                            alt={`image-${category}-${ind}`}
                            width={200}
                            height={200}
                            contentEditable={true}
                            containerCss={{
                                borderRadius: '0px',
                                margin: '0px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}
                            objectFit='cover'
                        />
                    </picture>
                )
            })}
        </section>
    )
}

export default PhotoGallery