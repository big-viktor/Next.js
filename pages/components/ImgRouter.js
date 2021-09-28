import React, { useState, useEffect } from 'react';
import styles from '../components/styles/ImgRouter.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import Image from 'next/image';



const ImgRouter = ({ routerImg, reverseText, title, text, backImg }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {!reverseText ? (
        <>
          <div className={styles.wraper}>
            <Image src={routerImg} alt="Vercel Logo" />
          </div>
        </>
      ) : (
        <>
          <div className={styles.wraper_revers}>
            { }
            <img src={routerImg.src} alt="Vercel Logo" className={!backImg ? (styles.wraper_revers_img) : (styles.wraper_revers_img_two)} />
            <div className={styles.text_revers} >
              <div className={styles.title_router}>
                {title}
              </div>
              <div className={styles.text_router}>
                {text}
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}

export default ImgRouter;
