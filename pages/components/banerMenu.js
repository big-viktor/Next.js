import React, { useEffect, useState } from 'react';
import styles from '../components/styles/banerMenu.module.css';
import LinkA from '../components/lincA'

import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';

import Avatar from './avatar';
import avatarPageStandart from '../../public/7 1.png'
import avatarPagePrehistori from '../../public/6 1.png'
import avatarPageFuture from '../../public/5 1.png'


const BanerMenu = ({ }) => {
  const namePage = ["Timeline", "About us", "Gallery", "Roadmap", "Mint", "FAQ"];

  const [avatars, setAvatars] = useState(avatarPageStandart);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setAvatars(avatarPagePrehistori); break;
      case THEME_Standart: setAvatars(avatarPageStandart); break;
      case THEME_Future: setAvatars(avatarPageFuture); break;
      default: setAvatars(avatarPageStandart);

    }
  }, [isTheme]);
  return (
    <>
      <div className={styles.container_baner_menu}>
        <div className={styles.baner_avatar}>
          <Avatar AvatarImg={avatars} />
        </div>
        <div className={styles.content_menu}>
          {namePage.map((namez) => (
            <LinkA LinkA={namez} key={namez} />
          ))}
        </div>
      </div>
    </>
  )
}

export default BanerMenu;
