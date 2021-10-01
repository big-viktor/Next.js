import React from 'react';
import styles from '../components/styles/linkA.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function LinkA({ children, href }) {

  const router = useRouter()
  // const style = {
  //     marginRight: 10,
  //     color: router.asPath === href ? 'red' : 'black',
  // }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }
  return (
    <>
      <div className={styles.border_link}>
        <a href={href} onClick={handleClick} className={styles.text_linkA}>
          {children}
        </a>
        <div className={styles.LinkA_border}></div>
      </div>
    </>
  )
}
