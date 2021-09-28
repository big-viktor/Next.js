
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react'

import styles from '../components/styles/publickDown.module.css'


import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import MinAvatar from './minAvatar';
import TimePublick from './timePublick';
import BrouserIcon from './brouserIcon';



const PublicDown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={styles.conyainer_public_down}>
        <div className={styles.container_public_activ}>
          <div className={styles.content_avatar}>
            <MinAvatar />
            <TimePublick time="2 days ago" pinned="post is pinned " >
              <BrouserIcon />
            </TimePublick>
          </div>
          <div className={styles.i_aroow} onClick={() => setIsOpen(!isOpen)}></div>
        </div>
        <div className={isOpen ? 'active_dropdown_public' : 'dropdown'}>
          {children}
        </div>
      </div>
    </>

  )
}

export default PublicDown;