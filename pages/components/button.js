import Head from 'next/head';
import styles from '../components/styles/button.module.css';
import React, { useState } from 'react';

export default function ButtonColor({ name }) {
    const [changeStyle, setChangeStyle] = useState(true)
    return (
        <>
            <button className={styles.button_container} onClick={() => setChangeStyle(!changeStyle)}>
                {name}
            </button>
        </>
    )
}
