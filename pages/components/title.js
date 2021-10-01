import React from 'react'

import styles from '../components/styles/title.module.css'

const Title = ({ title }) => {

  return (
    <>
      <div className={styles.text_title}>
        {title}
      </div>
    </>
  )
}

export default Title;