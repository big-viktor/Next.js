import React from 'react';
import styles from '../styles/footer.module.css';
import Link from '../link'
import LinkA from './../lincA';

import IconF1 from './/../../../public/Vector (4).png';
import IconF2 from './/../../../public/Group (7).png';
import IconF3 from './/../../../public/Group 1 (1).png';

export default function Footer({ isIcon }) {
  const images = [IconF1, IconF2, IconF3];

  const router = {
    routerLink1: {
      children: "Timeline",
      href: "/Home",

    },
    routerLink2: {
      children: "About us",
      href: "/About",

    },
    routerLink3: {
      children: "Gallery",
      href: "/Gallery",
    },
    routerLink4: {
      children: "Roadmap",
      href: "/Roadmap",
    },
    routerLink5: {
      children: "Mint",
      href: "/Mint",
    },
    routerLink6: {
      children: "FAQ",
      href: "/Faq",
    },
  };
  return (

    <>
      <div className={styles.container_footer} >
        <div className={styles.content_footer}>
          <div className={styles.content_link}>
            {Object.entries(router).map(([key, value], i) => (
              <>
                <LinkA
                  key={key}
                  href={value.href}
                > {value.children}</LinkA>
              </>
            ))}
          </div>
          {!isIcon ?
            (<>
              <div className={styles.icon_container}>
                {images.map((name) => (
                  <Link srcIcon={name} key={name} />
                ))}
              </div>
            </>
            ) : (
              <>
                {undefined}
              </>
            )}

        </div>

      </div>
    </>
  )
}
