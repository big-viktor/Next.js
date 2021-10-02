/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Title from './title';
import { useRouter } from 'next/router'
import styles from '../components/styles/galleryAddImg.module.css';


const GalleryAddImg = ({ name, imgAdd }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    const { name } = router.query
  }
  return (
    <>
      <div className={styles.container_title}>
        <img src={imgAdd} alt="addImg" className={styles.container_img} onClick={handleClick} />
        <div className={styles.content_name}>{name}</div>
      </div>
    </>
  )
}

export default GalleryAddImg;