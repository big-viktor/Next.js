
import React from 'react';

import styles from '../components/styles/input.module.css'

const Input = ({ placeholder }) => {

  return (
    <>
      <input placeholder={placeholder} className={styles.container_inputLog} />
    </>
  )
}

export default Input;