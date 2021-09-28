import * as React from 'react';
import styles from '../components/styles/textOnlain.module.css';



const TextOnlain = ({ textTitle }) => {

  return (
    <>
      <div className={styles.container_onlain}>
        <div className={styles.content_activ}>
          <div>
            {textTitle}
          </div>
          <div className={styles.backg_activ}>
            <i className={styles.right}></i>
          </div>
        </div>
        <div className={styles.text_activ_two}>
          10.000 unique NFT tokens
        </div>
      </div>
    </>
  )
}

export default TextOnlain;
