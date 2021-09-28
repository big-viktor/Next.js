import React, { useState, useEffect } from 'react';
import styles from '../components/styles/contentMenu.module.css';
import BanerMenu from '../components/banerMenu.js';
import UnstyledSlider from '../components/sliders.js'
import TextOnlain from './textOnlain';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';



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
  return (
    <>
      <div style={{ backgroundImage: `url(${sendUrl})` }} className={styles.container_content}>
        <div>
          <UnstyledSlider />
        </div>
        <div className={styles.content_onlain}>
          <TextOnlain textTitle={text} />
        </div>
        <div className={styles.container_menu}>
          <BanerMenu />
        </div>
      </div>
    </>
  )
}

export default ContentMenu;
