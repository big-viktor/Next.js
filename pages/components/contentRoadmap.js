/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'

import Title from './title';
import backfStandart from '../../public/bacgRoadmap/bacgStandart.png';
import backfPrehistori from '../../public/bacgRoadmap/bacgPrehistor.png';
import backfFuture from '../../public/bacgRoadmap/bacgDark.png';

import img1 from '../../public/6 1 (1).png';
import img2 from '../../public/5 1 (1).png';


import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import styles from '../components/styles/contentRoadmap.module.css'
import DownMenu from './downMenu';
import TextRoadmap from './textRoadmap';
import ButtonColor from './button';
import PlayVideo from './playVideo';


const ContentRoadmap = () => {
  const isTheme = useTheme();
  const [bacg, setImages] = useState(backfStandart);
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setImages(backfPrehistori); break;
      case THEME_Standart: setImages(backfStandart); break;
      case THEME_Future: setImages(backfFuture); break;
      default: setImages(backfStandart);

    }
  }, [isTheme]);
  return (
    <>
      <div className={styles.container_roadmap}>
        <div className={styles.roadmap_title} >
          <Title title="Roadmap" />
        </div>
        <div style={{ backgroundImage: `url(${bacg.src})` }} className={styles.roadmap_content} >
          <img src={bacg.src} alt="map" className={styles.roadmap_container_img} />
          <div className={styles.roadmap_container_down}>
            <div className={styles.roadmap_content_down}>
              <DownMenu name="40% SALES">
                <TextRoadmap img={img1.src} text="Дропаем 10.000 nft PUNKS Prehistoric" />
              </DownMenu>
            </div>
            <div className={styles.roadmap_content_down_rigth}>
              <DownMenu name="80% SALES">
                <TextRoadmap img={img2.src} text="Дропаем 10.000 nft PUNKS Prehistoric" />
              </DownMenu>
            </div>
          </div>
          <div className={styles.roadmap_container_down}>
            <div className={styles.roadmap_content_down_left}>
              <DownMenu name="1% SALES">
                <TextRoadmap img={img1.src} text="Мы публикуем ваш пост на ленте сайта" noneImg="ture" />
              </DownMenu>
            </div>
            <div className={styles.roadmap_content_down_two}>
              <DownMenu name="100% SALES">
                <TextRoadmap img={img1.src} text="Мы публикуем ваш пост на ленте сайта" noneImg="ture" />
                <PlayVideo />
                <div className={styles.roadmap_content_btn}>
                  <ButtonColor name="ЧИтать подробно об игре" />
                </div>
              </DownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentRoadmap;