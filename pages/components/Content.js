import React, { useState, useEffect } from 'react';
import styles from '../components/styles/content.module.css';
import {
  useTheme,
  THEME_Prehistori,
  THEME_Standart,
  THEME_Future,
} from '../components/ThemeProvaider.js';
import DownMenu from './downMenu';
import InfoBtn from './infoBtn';
import InfoText from './infoText';
import ImgRouter from './ImgRouter';

import IconGallery1 from '../../public/gallery/img1.png';
import IconGallery2 from '../../public/gallery/img2.png';
import IconGallery3 from '../../public/gallery/img3.png';
import IconGallery4 from '../../public/gallery/img4.png';
import IconGallery5 from '../../public/gallery/img5.png';
import IconGallery6 from '../../public/gallery/img6.png';
import iconPrehistori from '../../public/avatar/photo1630684043 (1).png';
import iconFuture from '../../public/avatar/photo1630684043(16) (1).png';

import IconRoadmap1 from '../../public/gallery/icon1.png';
import IconRoadmap2 from '../../public/gallery/roudmapImg.png';
import RigMenu from './rigMenu';

const Content = ({ }) => {
  const imagesStandart = [
    IconGallery3,
    IconGallery2,
    IconGallery3,
    IconGallery1,
    IconGallery4,
    IconGallery5,
    IconGallery1,
    IconGallery6,
  ];
  const imagesPrehistori = [
    iconPrehistori,
    iconPrehistori,
    iconPrehistori,
    iconPrehistori,
    iconPrehistori,
    iconPrehistori,
    iconPrehistori,
    iconPrehistori,
  ];
  const imagesFuture = [
    iconFuture,
    iconFuture,
    iconFuture,
    iconFuture,
    iconFuture,
    iconFuture,
    iconFuture,
    iconFuture,
  ];

  const roadmapImg = {
    imgaesObmj1: {
      img: IconRoadmap1,
      title: 'PUNKS',
      text: 'Prehistoric',
      backImg: true,
    },
    imgaesObmj2: {
      img: IconRoadmap2,
      title: 'PUNKS',
      text: 'XXI',
      backImg: false,
    },
    imgaesObmj3: {
      img: IconRoadmap2,
      title: 'PUNKS',
      text: 'Space Oddity',
      backImg: true,
    },
  };

  const [gallery, setGallery] = useState(imagesStandart);

  const [text, setText] = useState('PUNKS XXI');
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori:
        setGallery(imagesPrehistori);
        break;
      case THEME_Standart:
        setGallery(imagesStandart);
        break;
      case THEME_Future:
        setGallery(imagesFuture);
        break;
      default:
        setGallery(imagesStandart);
    }
    switch (isTheme.theme) {
      case THEME_Prehistori:
        setText('PUNKS Prehistoric');
        break;
      case THEME_Standart:
        setText('PUNKS XXI');
        break;
      case THEME_Future:
        setText('PUNKS Space Oddity');
        break;
      default:
        setText('PUNKS XXI');
    }
  }, [isTheme]);

  return (
    <>
      <div className={styles.wraper}>
        <div className={styles.content_menu_left}>
          <DownMenu name='About us' href='/About'>
            <div className={styles.container_down}>
              <div className={styles.container_infoBtn}>
                <InfoBtn />
              </div>
              <InfoText
                backgText={false}
                text='???? ?????????????? ???????????? ?? ?????????????????? ??????????????. ?? ???????????? ???? ?????????????????? ?? ???? ?????? ????????. ???? ???????? ???? ???????????? ?????? ??????????, ???? ??????????????, ?????????? ?????? ???????? ????, ?? ???????????? ?????????? ?? ?????????? ????????.'
              />
            </div>
          </DownMenu>
          <DownMenu name='Gallery' href='/Gallery'>
            <div className={styles.container_img_router}>
              {gallery.map((name, index) => (
                <>
                  <div className={styles.img_map}>
                    <ImgRouter
                      routerImg={name}
                      key={index}
                      reverseText={false}
                    />
                  </div>
                </>
              ))}
            </div>
          </DownMenu>
          <DownMenu name='ROADMAP' href='/Roadmap'>
            <div className={styles.container_img_router}>
              {Object.entries(roadmapImg).map(([key, value], i) => (
                <>
                  <div className={styles.img_map2}>
                    <ImgRouter
                      reverseText={true}
                      routerImg={value.img}
                      key={key}
                      title={value.title}
                      text={value.text}
                      backImg={value.backImg}
                    />
                  </div>
                </>
              ))}
            </div>
            <div className={styles.container_down}>
              <InfoText
                backgText={true}
                text='?? ?????? ?????????????????????? ???????? ?? 3 ????????????. ???????????? ?????? ???????????????? ???????????? ?????????? XXI, ???? ?? ?????????????? ???? ?????????????? ?????????? ???????????????? ?? ????????????????. '
              />
            </div>
          </DownMenu>
        </div>
        <div className={styles.content_menu_right}>
          <RigMenu />
        </div>
      </div>
    </>
  );
};

export default Content;
