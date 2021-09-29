/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React, { useEffect, useState } from 'react'

import styles from '../components/styles/post.module.css'


import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';

import IconStandart from '../../public/gallery/10.png';
import IconFuture from '../../public/gallery/10 (4).png';
import IconPrehistori from '../../public/gallery/9.png';


const MinAvatar = () => {


    const [vector, setBackg] = useState(IconStandart);
    const isTheme = useTheme();
    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_Prehistori: setBackg(IconPrehistori); break;
            case THEME_Standart: setBackg(IconStandart); break;
            case THEME_Future: setBackg(IconFuture); break;
            default: setBackg(IconStandart);

        }
    }, [isTheme]);


    return (
        <>
            <img src={vector.src} className={styles.img_min_avatar} />
        </>

    )
}

export default MinAvatar