
import React, { useState, useEffect, Children } from 'react';
import styles from '../components/styles/downMenu.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';


const DownMenu = ({ name, children }) => {
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
  return (
    <>
      <div className={styles.container_down}>
        <div className={styles.content_down}>
          <div className={styles.content_down_btn}>{name}</div>
          <div className={styles.i_aroow} onClick={() => setIsOpen(!isOpen)}></div>
        </div>
        <div className={isOpen ? 'active_dropdown' : 'dropdown'}>
          {children}
        </div>
      </div>
    </>
  )
}

export default DownMenu;