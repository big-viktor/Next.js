import React from 'react';
import styles from '../components/styles/linkA.module.css';
import Image from 'next/image';


export default function LinkA(props) {
    return (
        <>
            <div>
                <p className={styles.text_linkA}>{props.LinkA}</p>
            </div>
        </>
    )
}
