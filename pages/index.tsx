import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { Image } from "@nextui-org/react";

import { motion } from "framer-motion"

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import DescriptionText from '../components/atoms/descriptionText'
import Title from '../components/molecules/title'
import PhotoGallery from '../components/atoms/photoGallery';
import Header from '../components/organisms/Header';

import styles from '../styles/Home.module.scss'
import { useState } from 'react';
interface dataType {
  id: number;
  icon_name: string;
  title_text: string;
  description_text: string;
  category: string;
  image: string;
  photo_ppal: string[];
  photo_gallery: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://craftmen.vercel.app/api/data')
    // const response = await fetch('http://localhost:3000/api/data')
    const { data } = await response.json()
    return {
      props: { data }
    }
  } catch (error) {
    console.log(error)
    return { props: {} }
  }
}

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [galleryToShow, setGalleryToShow] = useState<string[]>([])

  return (
    <div className={styles.container}>
      <Head>
        <title>CRAFTSMEN</title>
        <meta name="description" content="muebles modernos para interior, semi exterior y exterior" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <section className={styles.wrapper_card}>
          <div>
            <h1 style={{ textAlign: 'center', fontSize: '1.25rem', padding: '2rem 0', margin: '0 1rem', lineHeight: '1.6rem', fontFamily: 'OpenSans', fontWeight: 300 }}>Aquí encontraras el mobiliario ideal para tu hogar.</h1>
          </div>
          {data && data.map((element: dataType, index: any) => {
            return (
              <section className={styles.card} key={`${element.id}-${element.title_text}`}>
                <motion.section
                  className={styles.card_info}
                  initial={{ opacity: 0, x: index % 2 == 0 ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "backInOut", duration: 1 }}
                  viewport={{ once: true }}
                >
                  <picture className={styles.card_info__image}>
                    <PhotoGallery listPhotoGallery={element.photo_ppal} category={element.category} />
                  </picture>
                  <section className={styles.card_info__title}>
                    <Title iconName={element.icon_name} titleText={element.title_text} />
                  </section>
                  <section className={styles.card_info__description_text}>
                    <DescriptionText text={element.description_text} />
                  </section>
                  <motion.section
                    className={styles.card_info__link}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "backInOut", duration: 2 }}
                  >
                    <a onClick={() => {
                      const newGallery = element.photo_gallery.map((galleryItem) => `//craftsmen-one.vercel.app${galleryItem}`);
                      setGalleryToShow(newGallery)
                      setIsOpen(true);
                    }}>ver catalogo</a>
                  </motion.section>
                  {isOpen && (
                    <Lightbox
                      mainSrc={galleryToShow[photoIndex]}
                      nextSrc={galleryToShow[(photoIndex + 1) % galleryToShow.length]}
                      prevSrc={galleryToShow[(photoIndex + galleryToShow.length - 1) % galleryToShow.length]}
                      onCloseRequest={() => setIsOpen(!isOpen)}
                      onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + galleryToShow.length - 1) % galleryToShow.length)
                      }
                      onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % galleryToShow.length)
                      }
                    />
                  )}
                </motion.section>
              </section>
            )
          })}
        </section>
      </main>

      <footer className={styles.footer}>
        <picture className={styles.footer__logo}>
          <Image
            src='/assets/craftmen-logo-horizontal-blanco.svg'
            alt={'image-logo-footer'}
            contentEditable={true}
            width={300}
            height={25.98}
            containerCss={{ borderRadius: '0px', margin: '0px' }}
            objectFit='cover'
          />
        </picture>
        <section className={styles.footer__contact}>
          <h2>Contáctanos</h2>
          <ul>
            <li>john.ca2906@hotmail.com</li>
            <li>&#40;+57&#41; 321 372 4145</li>
            <li>Calle 65A # 111B-80 villa Gladis engativa</li>
          </ul>
        </section>
        <section className={styles.footer__contact}>
          <h2>Síguenos</h2>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/craftsmen.col/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons8-instagram.svg"
                  alt="Instagram Logo"
                  width={48}
                  height={48}
                  contentEditable={true}
                  containerCss={{ borderRadius: '0px', margin: '0px' }}
                />
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

export default Home
