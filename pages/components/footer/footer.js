import React from 'react';
import styles from '../styles/footer.module.css';
import Link from '../link'
import LinkA from './../lincA';

import IconF1 from './/../../../public/Vector (4).png';
import IconF2 from './/../../../public/Group (7).png';
import IconF3 from './/../../../public/Group 1 (1).png';

export default function Footer(props) {
  const images = [IconF1, IconF2, IconF3];
  const namePage = ["Timeline", "About us", "Gallery", "Roadmap", "Mint",]
  return (

    <>
      <div className={styles.container_footer} >
        <div className={styles.content_footer}>
          <div className={styles.content_link}>
            {namePage.map((namez) => (
              <LinkA LinkA={namez} key={namez} />
            ))}
          </div>
          <div className={styles.icon_container}>
            {images.map((name) => (
              <Link srcIcon={name} key={name} />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
