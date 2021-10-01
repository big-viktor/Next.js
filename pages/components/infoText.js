
import React, { useState, useEffect } from 'react';
import styles from '../components/styles/InfoText.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';




const InfoText = ({ text, backgText }) => {

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
