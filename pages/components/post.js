/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react'

import styles from '../components/styles/post.module.css'
import Icon1 from '../../public/gallery/Group (14).png'
import Vector1 from '../../public/gallery/Vector (6).png'
import Vector2 from '../../public/gallery/Vector (7).png'
import Vector3 from '../../public/gallery/Vector (8).png'
import Vector4 from '../../public/gallery/Vector (12).png'
import Vector5 from '../../public/gallery/Vector (14).png'
import Vector6 from '../../public/gallery/Vector (13).png'
import Vectorprehistori1 from '../../public/Vector (11).png'
import Vectorprehistori2 from '../../public/Vector (10).png'
import Vectorprehistori3 from '../../public/Vector (9).png'
import Vectorprehistori4 from '../../public/Group (15).png'
import Vectorprehistori5 from '../../public/Group (16).png'

import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import ImgRouter from './ImgRouter';
import InputPost from './inputPost';
import MinAvatar from './minAvatar';




const Post = () => {
  const imagesStandart = [Vector1, Vector2, Vector3];
  const imagesPrehistori = [Vectorprehistori3, Vectorprehistori2, Vectorprehistori1];
  const imagesFuture = [Vector4, Vector5, Vector6];

  const [vector, setBackg] = useState(imagesStandart);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setBackg(imagesPrehistori); break;
      case THEME_Standart: setBackg(imagesStandart); break;
      case THEME_Future: setBackg(imagesFuture); break;
      default: setBackg(imagesStandart);

    }
  }, [isTheme]);

  const vectorPrehistori = [Vectorprehistori4];
  const vectorStandart = [Icon1];
  const vectorFuture = [Vectorprehistori5];
  const [icon, setIcon] = useState(vectorPrehistori);
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setIcon(vectorPrehistori); break;
      case THEME_Standart: setIcon(vectorStandart); break;
      case THEME_Future: setIcon(vectorFuture); break;
      default: setIcon(vectorStandart);

    }
  }, [isTheme]);
  console.log(icon.src)
  return (
    <div className={styles.container_post}>
      <MinAvatar />
      <InputPost placeholder="Create your own post" />
      {icon.map((name, index) => (
        <>
          <div className={styles.container_img}>
            <img src={name.src} key={index} />
            {/* <ImgRouter routerImg={name} key={index} /> */}
          </div>
        </>
      ))}
      <div className={styles.container_vector}>
        {vector.map((name, index) => (
          <>
            <div className={styles.img_vector}>
              <ImgRouter
                routerImg={name}
                key={index}
              />
            </div>
          </>
        ))}
      </div>
    </div>

  )
}

export default Post