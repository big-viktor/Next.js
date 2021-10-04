
import React from 'react';

import Title from './title';
import styles from '../components/styles/contentMint.module.css'
import Input from './input';
import ButtonColor from './button';

const ContentMint = () => {

  return (
    <>
      <div className={styles.container_mint}>
        <div className={styles.container_mint_title}>
          <Title title="Login" />
        </div>
        <div className={styles.content_mint_input}>
          <div className={styles.container_mint_input}>
            <Input placeholder="Name of your punk" />
          </div>
          <div>
            <Input placeholder="Number of tokens" />
          </div>
        </div>
        <div className={styles.container_mint_text}>
          Нажимая на эту кнопку вы соглашаетесь переписать на нас вашу квартиру.
        </div>
        <div className={styles.container_mint_BTN}>
          <ButtonColor name="MINT" />
        </div>
      </div>
    </>
  )
}

export default ContentMint;