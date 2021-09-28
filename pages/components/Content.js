
import React, { useState, useEffect } from 'react';
import styles from '../components/styles/content.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import DownMenu from './downMenu';
import InfoBtn from './infoBtn';
import InfoText from './infoText';
import ImgRouter from './ImgRouter';

import IconGallery1 from '../../public/gallery/img1.png'
import IconGallery2 from '../../public/gallery/img2.png'
import IconGallery3 from '../../public/gallery/img3.png'
import IconGallery4 from '../../public/gallery/img4.png'
import IconGallery5 from '../../public/gallery/img5.png'
import IconGallery6 from '../../public/gallery/img6.png'

import IconRoadmap1 from '../../public/gallery/icon1.png'
import IconRoadmap2 from '../../public/gallery/roudmapImg.png'
import IconRoadmap3 from '../../public/gallery/icon1.png'
import Text from './text';
import RigMenu from './rigMenu';


const Content = ({ }) => {
  const images = [IconGallery3, IconGallery2, IconGallery3, IconGallery1, IconGallery4, IconGallery5, IconGallery1, IconGallery6];
  const roadmapImg = {
    imgaesObmj1: {
      img: IconRoadmap1,
      title: "PUNKS",
      text: "Prehistoric",
      backImg: true,
    },
    imgaesObmj2: {
      img: IconRoadmap2,
      title: "PUNKS",
      text: "XXI",
      backImg: false,
    },
    imgaesObmj3: {
      img: IconRoadmap2,
      title: "PUNKS",
      text: "Space Oddity",
      backImg: true,
    },
  };

  const [text, setText] = useState('PUNKS XXI');
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setText('PUNKS Prehistoric'); break;
      case THEME_Standart: setText('PUNKS XXI'); break;
      case THEME_Future: setText('PUNKS Space Oddity'); break;
      default: setText('PUNKS XXI');

    }
  }, [isTheme]);

  return (
    <>
      <div className={styles.wraper}>
        <div className={styles.content_menu_left} >
          <DownMenu name="About us" >
            <div className={styles.container_down}>
              <div className={styles.container_infoBtn}>
                <InfoBtn />
              </div>
              <InfoText backgText={false} text="Мы создали панков в настоящем времени. И сейчас мы находимся в их соц сети. Но если вы дадите нам деняк, мы покажем, какие они были до, и какими будут в нашей игре." />
            </div>
          </DownMenu>
          <DownMenu name="Gallery" >
            <div className={styles.container_img_router}>
              {images.map((name, index) => (
                <ImgRouter
                  routerImg={name}
                  key={index}
                  reverseText={false}
                />
              ))}
            </div>
          </DownMenu>
          <DownMenu name="ROADMAP" >
            <div className={styles.container_img_router}>
              {Object.entries(roadmapImg).map(([key, value], i) => (
                <>
                  <ImgRouter
                    reverseText={true}
                    routerImg={value.img}
                    key={key}
                    title={value.title}
                    text={value.text}
                    backImg={value.backImg}
                  />
                </>
              ))}
            </div>
            <div className={styles.container_down}>
              <div></div>
              <InfoText backgText={true} text="У нас планируется игра в 3 эпохах. Сейчас вам доступно только Панки XXI, но в будущем мы сделаем панки прошлого и будущего. " />
              <div></div>
            </div>
          </DownMenu>
        </div>
        <div className={styles.content_menu_right}>
          <RigMenu />
        </div>
      </div>
    </>
  )
}

export default Content;
