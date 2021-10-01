import React, { useEffect, useState } from 'react'

import styles from '../styles/Home.module.css'
import Header from '../pages/components/header/header.js'
import Footer from '../pages/components/footer/footer.js'
import ContentMenu from '../pages/components/contentMenu.js'
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../pages/components/ThemeProvaider.js';

import backgNeitral from '../public/баннер1.png';
import backgFutter from '../public/futteri.png'
import BackgPrehistori from '../public/Prehistoria.png'
import Content from './components/Content';


const Home = () => {
  const [backg, setBackg] = useState(backgNeitral);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setBackg(BackgPrehistori); break;
      case THEME_Standart: setBackg(backgNeitral); break;
      case THEME_Future: setBackg(backgFutter); break;
      default: setBackg(backgNeitral);

    }
  }, [isTheme]);
  return (


    <>
      <div className={styles.container}>
        <Header title="Home" />
        <ContentMenu sendUrl={backg.src} />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default Home