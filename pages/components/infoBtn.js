
import React, { useState, useEffect } from 'react';
import styles from '../components/styles/infoBtn.module.css';
import Image from 'next/image';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';

import InfoImg from '../../public/Group (11).png';
import InfoImg2 from '../../public/Group (12).png';
import InfoImg3 from '../../public/information-button 1.png';


const InfoBtn = ({ IconInfo }) => {
  const isTheme = useTheme();

  const [infoIcon, setInfoIcon] = useState(InfoImg);
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setInfoIcon(InfoImg2); break;
      case THEME_Standart: setInfoIcon(InfoImg); break;
      case THEME_Future: setInfoIcon(InfoImg3); break;
      default: setInfoIcon(InfoImg);

    }
  }, [isTheme]);
  return (
    <>
      <div className={styles.container_info}>
        <img src={infoIcon.src} alt="Vercel Logo" className={styles.info_img} />
      </div>
    </>
  )
}

export default InfoBtn;
