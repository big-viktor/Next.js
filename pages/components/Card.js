/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import styles from '../components/styles/card.module.css';
import iconCamer from '../../public/iconCamera.png'
import Avatar from './avatar';


const Card = ({ cardAvatar, isDownload, name, lord, infoText }) => {

  return (
    <>
      <div className={styles.container_card} >
        <div className={styles.container_img_avatar}>
          <img src={cardAvatar} isDownload={isDownload} className={styles.img_avatar} />
        </div>
        <div className={styles.container_text}>
          <div className={styles.container_name}>
            {name}
          </div>
          <div className={styles.container_lord}>
            {lord}
          </div>
          <div className={styles.container_info_text}>
            {infoText}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
