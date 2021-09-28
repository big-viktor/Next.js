import React, { useState, useEffect } from 'react';
import styles from '../components/styles/ImgRouter.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';
import Image from 'next/image';



const Text = ({ text }) => {

    return (
        <>
            <div>
                {text}
            </div>

        </>
    )
}

export default Text;
