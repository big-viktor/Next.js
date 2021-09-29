/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */



import React, { useState, useEffect, Children } from 'react';
import styles from '../components/styles/postContent.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';


const PostContent = ({ text, src, title }) => {
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
        <img src={src} className={styles.content_img_post} />
      </div>
    </>
  )
}

export default PostContent;
