

import React, { useEffect, useState } from 'react'

import styles from '../components/styles/inputPost.module.css'

import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';




const InputPost = ({ placeholder }) => {

  return (
    <input placeholder={placeholder} className={styles.placeholder_input} />
  )
}

export default InputPost