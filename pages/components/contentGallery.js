
import React, { useState, useEffect } from 'react'
import Title from './title';

import styles from '../components/styles/contentGallery.module.css';
import GalleryAddImg from './galleryAddImg';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';


import avatarCard from '../../public/gallery/9 (2).png';
import avatarCard2 from '../../public/gallery/Монтажная область 1@3x (2).png';
import avatarCard3 from '../../public/gallery/1.png';


const ContentGallery = ({ nameErra }) => {
	const paramCard = {
		routerLink1: {
			name: "Alien",
			img: avatarCard,
		},
		routerLink2: {
			name: "Ape",
			img: avatarCard2,
		},
		routerLink3: {
			name: "Zombie",
			img: avatarCard3,
		},
		routerLink4: {
			name: "Robot",
			img: avatarCard,
		},
		routerLink5: {
			name: "Female",
			img: avatarCard2,
		},
		routerLink6: {
			name: "Male",
			img: avatarCard3,
		},
	};
	const [ite, setIte] = useState([]);
	const [name, setName] = useState([]);
	const [itez, addItez] = useState(false);
	const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const itemTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	const Prehistori = "Punks Prehistoric";
	const Standart = "Punks XXI";
	const Future = "Punks Space Oddity."

	const [text, setText] = useState(Standart);
	const isTheme = useTheme();
	useEffect(() => {
		switch (isTheme.theme) {
			case THEME_Prehistori: setText(Prehistori); break;
			case THEME_Standart: setText(Standart); break;
			case THEME_Future: setText(Future); break;
			default: setText(Standart);

		}
	}, [isTheme]);
	const [isOpen, setIsOpen] = useState(true);
	if (itez) {
		return (
			<>
				<div className={styles.container_title_revers}>
					<div className={styles.container_gallery_title}>
						<Title title="Gallery" />
					</div>
					<div className={styles.content_name_erra_revers}>
						The {name} {text}. Yes, they are exist. I want to believe
					</div>
				</div>
				<div className={styles.content_border}></div>
				<div className={styles.container_revers}>
					<div className={styles.container__gallery_revers}>
						{item.map(() => (
							<>
								{ite.map(item => (
									<>
										<div className={styles.content_card_revers} onClick={() => { addItez(false) }}>
											<GalleryAddImg
												key={item}
												imgAdd={item.img.src}
											/>
										</div>
									</>
								))}
							</>
						))}
					</div>
					<div className={isOpen ? styles.container__gallery_bottom : styles.container__gallery_bottom_revers}>
						{itemTwo.map(() => (
							<>
								{ite.map(item => (
									<>
										<div className={styles.content_card_revers} onClick={() => { addItez(false) }}>
											<GalleryAddImg
												key={item}
												imgAdd={item.img.src}
											/>
										</div>
									</>
								))}
							</>
						))}
					</div>
					<div className={styles.down_container__content} >
						<div className={styles.down_container} onClick={() => setIsOpen(!isOpen)}><i className={isOpen ? styles.down : styles.down_revers}></i></div>
					</div>

				</div>
			</>
		);
	} else {
		return (
			<>
				<div className={styles.container_title}>
					<div className={styles.container_gallery_title}>
						<Title title="Gallery" />
					</div>
					<div className={styles.content_name_erra}>
						{nameErra}
					</div>
				</div>
				<div className={styles.container}>
					<div className={styles.container_title_gallery}>
						By Type
					</div>
					<div className={styles.container__gallery}>
						{Object.entries(paramCard).map(([key, value], i) => (
							<>
								<div className={styles.content_card} onClick={() => { setIte([value]); addItez(true); setName(value.name) }}>
									<GalleryAddImg
										key={key}
										imgAdd={value.img.src}
										name={value.name}
									/>
								</div>
							</>
						))}
					</div>
				</div>
			</>
		);
	}
}
// export async function getStaticProps(context) {
// 	console.log(context)
// 	return {
// 		props: {}, // will be passed to the page component as props
// 	}
// }

export default ContentGallery;