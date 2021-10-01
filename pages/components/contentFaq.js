import React from 'react'

import styles from '../components/styles/contentFaq.module.css'
import Title from './title';
import DownMenu from './downMenu';

const ContentFaq = () => {
  const paramCard = {
    routerLink1: {
      name: "how can i buy punks?",
      infoText: "I love programming and also I love money. I love programming and also I love money. I love programming and also I love money. ",
    },
    routerLink2: {
      name: "what is your application about? ",
      infoText: "I love I like to advertise and also I love money.I love I like to advertise and also I love money. I love I like to advertise and also I love money. ",
    },
    routerLink3: {
      name: "how can i buy punks? ",
      infoText: "You can pay with any cryptocurrency through metamask. ",
    },
    routerLink4: {
      name: "what is your application about? ",
      infoText: "You can pay with any cryptocurrency through metamask. .",
    },
    routerLink5: {
      name: "what payment methods are there? ",
      infoText: "You can pay with any cryptocurrency through metamask. ",
    },
  };
  return (
    <>
      <div className={styles.container_content}>
        <div className={styles.container_title}>
          <Title title="FAQ" />
        </div>
        <div>
          {Object.entries(paramCard).map(([key, value], i) => (
            <>
              <div className={styles.content_card}>
                <DownMenu
                  key={key}
                  name={value.name}
                >
                  <div className={styles.content_children_down}>
                    {value.infoText}
                  </div>
                </DownMenu>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContentFaq;