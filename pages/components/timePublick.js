

import React, { useState, useEffect, Children } from 'react';
import styles from '../components/styles/timePublick.module.css';
import { useTheme, THEME_Prehistori, THEME_Standart, THEME_Future } from '../components/ThemeProvaider.js';


const TimePublick = ({ time, children, pinned }) => {
	const Prehistori = "PUNKS Prehistoric";
	const Standart = "PUNKS XXI";
	const Future = "PUNKS Space Oddity";
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
	return (
		<>
			<div className={styles.content_time}>
				<div className={styles.content_title}>
					{text}
				</div>
				<div className={styles.container_time}>
					<div>
						{time}
					</div>
					{children}
					<div>
						{pinned}
					</div>
				</div>
			</div>
		</>
	)
}

export default TimePublick;
