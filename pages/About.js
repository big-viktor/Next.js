import React from 'react'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContenAbout from './components/contentAbout';


const About = () => {

  return (
    <>
      <div >
        <Header title="About" logButton={true} />
        <ContenAbout title="About us" />
        <Footer isIcon={true} />
      </div>
    </>
  )
}

export default About;