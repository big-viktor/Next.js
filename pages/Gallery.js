import React, { useState, useEffect } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContentGallery from './components/contentGallery';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../pages/components/ThemeProvaider.js';

const Gallery = () => {
  const Prehistori = "PUNKS Prehistoric collection";
  const Standart = "PUNKS XXI collection";
  const Future = "PUNKS Space Oddity collection";
  const [text, setText] = useState(Standart);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_Prehistori: setText(Prehistori); break;
      case THEME_Standart: setText(Standart); break;
      case THEME_Future: setText(Future); break;
      default: setText(Standart);

    }
  }, [isTheme]);
  return (
    <>
      <div >
        <Header title="Gallery" logButton={true} />
        <ContentGallery nameErra={text} />
        <Footer isIcon={true} />
      </div>
    </>
  )
}

export default Gallery;