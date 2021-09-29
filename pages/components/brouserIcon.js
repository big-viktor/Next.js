/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */


import React, { useEffect, useState } from 'react'

import styles from '../components/styles/brouserIcon.module.css';


import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import BrowIconStandart from '../../public/globe 1.png';
import BrowIconFuture from '../../public/globe 1 (1).png';
import BrowIconPrehistori from '../../public/Group (17).png';


const BrouserIcon = ({ }) => {
  const [backg, setBackg] = useState(BrowIconStandart);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setBackg(BrowIconPrehistori); break;
      case THEME_Standart: setBackg(BrowIconStandart); break;
      case THEME_Future: setBackg(BrowIconFuture); break;
      default: setBackg(BrowIconStandart);

    }
  }, [isTheme]);
  return (
    <>
      <img src={backg.src} className={styles.borowuser_img} />
    </>

  )
}

export default BrouserIcon;