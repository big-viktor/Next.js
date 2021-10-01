/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../components/styles/avatar.module.css';
import Image from 'next/image';
import iconCamer from '../../public/iconCamera.png'

const Avatar = ({ AvatarImg, isDownload }) => {

  return (
    <>

      <div className={styles.container_avatar} id="containerAvatar">
        <img src={AvatarImg} alt="Vercel Logo" className={styles.img_avatar} />
        {!isDownload ?
          (<>
            <div className={styles.icon_camera} >
              <Image src={iconCamer} alt="Vercel Logo" width={31} height={31} />
            </div>
          </>
          ) : (
            <>
              {undefined}
            </>
          )}

      </div>
    </>
  )
}

export default Avatar;
