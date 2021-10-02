/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/
import React from 'react';

export const changeCssVariables = theme => {
  if (process.browser) {
    const root = document.querySelector(':root');
    root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
    root.style.setProperty('--theme-default-body', `var(--theme-${theme}-body)`);
    root.style.setProperty('--theme-default-slider', `var(--theme-${theme}-slider)`);
    root.style.setProperty('--theme-default-sliderCont', `var(--theme-${theme}-sliderCont)`);
    root.style.setProperty('--theme-default-sliderThumb', `var(--theme-${theme}-sliderThumb)`);
    root.style.setProperty('--theme-default-sliderRadius', `var(--theme-${theme}-sliderRadius)`);
    root.style.setProperty('--theme-default-sliderRial', `var(--theme-${theme}-sliderRial)`);
    root.style.setProperty('--theme-default-menuBacg', `var(--theme-${theme}-menuBacg)`);
    root.style.setProperty('--theme-default-linkA', `var(--theme-${theme}-linkA)`);
    root.style.setProperty('--theme-default-linkAHover', `var(--theme-${theme}-linkAHover)`);
    root.style.setProperty('--theme-default-linkAHoverText', `var(--theme-${theme}-linkAHoverText)`);
    root.style.setProperty('--theme-default-arrow', `var(--theme-${theme}-arrow)`);
    root.style.setProperty('--theme-default-arrowBack', `var(--theme-${theme}-arrowBack)`);
    root.style.setProperty('--theme-default-dropdownBack', `var(--theme-${theme}-dropdownBack)`);
    root.style.setProperty('--theme-default-infoText', `var(--theme-${theme}-infoText)`);
    root.style.setProperty('--theme-default-infoTextRevers', `var(--theme-${theme}-infoTextRevers)`);
    root.style.setProperty('--theme-default-routerText', `var(--theme-${theme}-routerText)`);
    root.style.setProperty('--theme-default-footer', `var(--theme-${theme}-footer)`);
    root.style.setProperty('--theme-default-post', `var(--theme-${theme}-post)`);
    root.style.setProperty('--theme-default-inputBack', `var(--theme-${theme}-inputBack)`);
    root.style.setProperty('--theme-default-inputPlaceholder', `var(--theme-${theme}-inputPlaceholder)`);
    root.style.setProperty('--theme-default-publicAroww', `var(--theme-${theme}-publicAroww)`);
    root.style.setProperty('--theme-default-timeTitle', `var(--theme-${theme}-timeTitle)`);
    root.style.setProperty('--theme-default-timeText', `var(--theme-${theme}-timeText)`);
    root.style.setProperty('--theme-default-postContentText', `var(--theme-${theme}-postContentText)`);
    root.style.setProperty('--theme-default-activTextMob', `var(--theme-${theme}-activTextMob)`);
    root.style.setProperty('--theme-default-titleAbout', `var(--theme-${theme}-titleAbout)`);
    root.style.setProperty('--theme-default-cardName', `var(--theme-${theme}-cardName)`);
    root.style.setProperty('--theme-default-cardLord', `var(--theme-${theme}-cardLord)`);
    root.style.setProperty('--theme-default-textCardInfo', `var(--theme-${theme}-textCardInfo)`);
    root.style.setProperty('--theme-default-placeholderLog', `var(--theme-${theme}-placeholderLog)`);
    root.style.setProperty('--theme-default-logText', `var(--theme-${theme}-logText)`);
    root.style.setProperty('--theme-default-logIputBacg', `var(--theme-${theme}-logIputBacg)`);
    root.style.setProperty('--theme-default-btnMint', `var(--theme-${theme}-btnMint)`);
    root.style.setProperty('--theme-default-rodmapText', `var(--theme-${theme}-rodmapText)`);
    root.style.setProperty('--theme-default-nameErra', `var(--theme-${theme}-nameErra)`);
    root.style.setProperty('--theme-default-addImgText', `var(--theme-${theme}-addImgText)`);
    root.style.setProperty('--theme-default-downGallyre', `var(--theme-${theme}-downGallyre)`);
    root.style.setProperty('--theme-default-downGallyreBackg', `var(--theme-${theme}-downGallyreBackg)`);

  }

};

