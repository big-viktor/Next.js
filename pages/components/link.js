import React from 'react';
import styles from '../components/styles/link.module.css';
import Image from 'next/image';


export default function Footer(props) {
  return (
    <>
      <div className={styles.link_img} >
        <Image src={props.srcIcon} alt="Vercel Logo" width={31} height={31} />
      </div>
    </>
  )
}
