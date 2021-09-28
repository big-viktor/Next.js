
import React, { useState, useEffect } from 'react';
import styles from '../components/styles/InfoText.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';




const InfoText = ({ text, backgText }) => {
  const isTheme = useTheme();

  // const [infoIcon, setInfoIcon] = useState(InfoImg);
  // useEffect(() => {
  //     switch (isTheme.theme) {
  //         case THEME_Prehistori: setInfoIcon(InfoImg2); break;
  //         case THEME_Standart: setInfoIcon(InfoImg); break;
  //         case THEME_Future: setInfoIcon(InfoImg3); break;
  //         default: setInfoIcon(InfoImg);

  //     }
  // }, [isTheme]);
  return (
    <>
      {!backgText ? (
        <>
          <div className={styles.container_info_text}>
            {text}
          </div>
        </>
      ) : (
        <>
          <div className={styles.container_info_text_backg}>
            {text}
          </div>
        </>
      )}
    </>
  )
}

export default InfoText;
