/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import styles from '../components/styles/textRoadmap.module.css';


const TextRoadmap = ({ text, img, noneImg }) => {

  return (
    <>
      <div className={styles.container} >
        <div className={styles.container_text}>{text}</div>
        {!noneImg ? (
          <>
            <img src={img.src} alt="lorem ipsun" className={styles.container_img} />
          </>) : (
          <>
            {undefined}
          </>)}

      </div>
    </>
  )
}

export default TextRoadmap;