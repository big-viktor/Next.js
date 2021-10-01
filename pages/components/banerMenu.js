import React, { useEffect, useState } from 'react';
import styles from '../components/styles/banerMenu.module.css';
import LinkA from '../components/lincA'

import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';




const BanerMenu = ({ }) => {

  const router = {
    routerLink1: {
      children: "Timeline",
      // backImg: true,
      href: "/",

    },
    routerLink2: {
      children: "About us",
      href: "/About",

    },
    routerLink3: {
      children: "Gallery",
      href: "/",
    },
    routerLink4: {
      children: "Roadmap",
      href: "/Roadmap",
    },
    routerLink5: {
      children: "Mint",
      href: "/Mint",
    },
    routerLink6: {
      children: "FAQ",
      href: "/Faq",
    },
  };

  return (
    <>
      <div className={styles.container_baner_menu}>
        <div className={styles.content_menu}>
          {Object.entries(router).map(([key, value], i) => (
            <>
              <LinkA
                key={key}
                href={value.href}
              > {value.children}</LinkA>
            </>
          ))}
        </div>

      </div>
    </>
  )
}

export default BanerMenu;
