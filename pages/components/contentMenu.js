/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from '../components/styles/contentMenu.module.css';
import BanerMenu from '../components/banerMenu.js';
import UnstyledSlider from '../components/sliders.js'
import TextOnlain from './textOnlain';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import Avatar from './avatar';
import avatarPageStandart from '../../public/7 1.png';
import avatarPagePrehistori from '../../public/6 1.png';
import avatarPageFuture from '../../public/5 1.png';

import VektorPageStandart from '../../public/Vector (15).png';
import VektorPageStandart1 from '../../public/Group (18).png';
import VektorPageStandart2 from '../../public/Group 1 (3).png';
import VektoFruture from '../../public/Vector (16).png';
import VektoFruture1 from '../../public/Group (19).png';
import VektoFruture2 from '../../public/Group 1 (4).png';

const ContentMenu = ({ sendUrl }) => {
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

  const [avatars, setAvatars] = useState(avatarPageStandart);
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setAvatars(avatarPagePrehistori); break;
      case THEME_Standart: setAvatars(avatarPageStandart); break;
      case THEME_Future: setAvatars(avatarPageFuture); break;
      default: setAvatars(avatarPageStandart);

    }
  }, [isTheme]);
  const imagesStandart = [VektorPageStandart, VektorPageStandart1, VektorPageStandart2];
  const imagesFuture = [VektoFruture, VektoFruture1, VektoFruture2];
  const [images, setImages] = useState(imagesStandart);
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setImages(imagesFuture); break;
      case THEME_Standart: setImages(imagesStandart); break;
      case THEME_Future: setImages(imagesFuture); break;
      default: setImages(imagesStandart);

    }
  }, [isTheme]);
  return (
    <>
      <div style={{ backgroundImage: `url(${sendUrl})` }} className={styles.container_content}>
        <div className={styles.content_slider_dekst}>
          <UnstyledSlider />
        </div>
        <div className={styles.container_menu}>
          <div className={styles.content_onlain}>
            <div className={styles.container_avatar}>
              <Avatar AvatarImg={avatars.src} />
            </div>
            <div className={styles.container_text}>
              <TextOnlain textTitle={text} />
              <div className={styles.container_images}>
                {images.map((name, index) => (
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <img
                    src={name.src}
                    key={index}
                    reverseText={false}
                  />
                ))}
              </div>
            </div>
          </div>
          <BanerMenu />
        </div>
      </div>
    </>
  )
}

export default ContentMenu;
