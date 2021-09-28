import React from 'react';
import styles from '../components/styles/avatar.module.css';
import Image from 'next/image';
import iconCamer from '../../public/iconCamera.png'

const Avatar = ({ AvatarImg }) => {

	return (
		<>
			<div className={styles.container_avatar} id="containerAvatar">
				<Image src={AvatarImg} alt="Vercel Logo" className={styles.img_avatar} />
				<div className={styles.icon_camera} >
					<Image src={iconCamer} alt="Vercel Logo" width={31} height={31} />
				</div>
			</div>
		</>
	)
}

export default Avatar;
