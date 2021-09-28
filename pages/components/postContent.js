/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */



import React, { useState, useEffect, Children } from 'react';
import styles from '../components/styles/postContent.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';


const PostContent = ({ text, src, title }) => {
  // const Prehistori = "PUNKS Prehistoric";
  // const Standart = "PUNKS XXI";
  // const Future = "PUNKS Space Oddity";
  // const [text, setText] = useState(Standart);
  // const isTheme = useTheme();
  // useEffect(() => {
  // 	switch (isTheme.theme) {
  // 		case THEME_Prehistori: setText(Prehistori); break;
  // 		case THEME_Standart: setText(Standart); break;
  // 		case THEME_Future: setText(Future); break;
  // 		default: setText(Standart);

  // 	}
  // }, [isTheme]);
  return (
    <>
      <div className={styles.content_post_content}>
        <div className={styles.content_post_text}>
          <div>
            {title}
          </div>
          <div>
            {text}
          </div>
        </div>
        <img src={src} />
      </div>
    </>
  )
}

export default PostContent;
