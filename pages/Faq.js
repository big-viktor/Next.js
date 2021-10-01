import React from 'react'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContentFaq from './components/contentFaq';


const About = () => {

  return (
    <>
      <div >
        <Header title="FAQ" logButton={true} />
        <ContentFaq />
        <Footer isIcon={true} />
      </div>
    </>
  )
}

export default About