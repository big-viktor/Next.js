
import React, { useEffect, useState } from 'react'

import styles from '../components/styles/post.module.css'

import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import Post from './post';
import PublicDown from './publicDown';
import PostContent from './postContent';

import IconPost from '../../public/Скриншот.png'


const RigMenu = () => {

  return (
    <div className={styles.container_rig}>
      <Post />
      <PublicDown>
        <PostContent src={IconPost.src} title="Hi-hey, my friends!" text="Делаем из инопланетянина обезьяну , туториал" />
      </PublicDown>
      <PublicDown>
        <PostContent src={IconPost.src} title="This post belongs to user Jack777Florida" text="I purchased a punk and really want to see your app. In the photo, I'm a pixelated one in Dubai. Hello Mom. " />
      </PublicDown>
    </div>

  )
}

export default RigMenu