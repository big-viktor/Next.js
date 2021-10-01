import React from 'react'

import styles from '../components/styles/contentAbout.module.css'
import Card from './Card';
import avatarCard from '../../public/avatar/cardAvatar.png'
import avatarAnna from '../../public/avatar/AnnaCard.png'
import avatarSereja from '../../public/avatar/9 (1).png'
import avatarIndus from '../../public/avatar/аватарка (1).png'
import Title from './title';


const ContenAbout = ({ title }) => {
  const paramCard = {
    routerLink1: {
      name: "Igor",
      lord: "lord of programming",
      infoText: "I love programming and also I love money. I love programming and also I love money. I love programming and also I love money. ",
      img: avatarCard,
      isDownload: true,
    },
    routerLink2: {
      name: "Sereja",
      lord: "lord of advertise",
      infoText: "I love I like to advertise and also I love money.I love I like to advertise and also I love money. I love I like to advertise and also I love money. ",
      img: avatarSereja,
      isDownload: true,
    },
    routerLink3: {
      name: "Anna",
      lord: "lord of design",
      infoText: "I love money.",
      img: avatarAnna,
      isDownload: true,
    },
    routerLink4: {
      name: "Indus",
      lord: "lord of money",
      infoText: "i am not brazilian.",
      img: avatarIndus,
      isDownload: true,
    },
  };
  return (
    <>
      <div className={styles.wraper_about}>
        <Title title="About us" />
        <div className={styles.container_card_add}>
          {Object.entries(paramCard).map(([key, value], i) => (
            <>
              <div className={styles.content_card}>
                <Card
                  key={key}
                  cardAvatar={value.img.src}
                  isDownload={value.isDownload}
                  name={value.name}
                  lord={value.lord}
                  infoText={value.infoText}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContenAbout