
import React, { useState, useEffect, Children } from 'react';
import styles from '../components/styles/downMenu.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import { useRouter } from 'next/router';

const DownMenu = ({ name, children, href }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [text, setText] = useState('PUNKS XXI');
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setText('PUNKS Prehistoric'); break;
      case THEME_Standart: setText('PUNKS XXI'); break;
      case THEME_Future: setText('PUNKS Space Oddity'); break;
      default: setText('PUNKS XXI');

    }
  }, [isTheme]);
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <>
      <div className={styles.container_down}>
        <div className={styles.content_down}>
          <div className={styles.content_down_btn} onClick={handleClick} href={href}>{name}</div>
          <div className={isOpen ? styles.i_aroow : styles.i_arrow_down} onClick={() => setIsOpen(!isOpen)}></div>
        </div>
        <div className={isOpen ? 'active_dropdown' : 'dropdown'}>
          {children}
        </div>
      </div>
    </>
  )
}

export default DownMenu;
