import React from 'react'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContentRoadmap from './components/contentRoadmap';


const Roadmap = () => {

  return (
    <>
      <div >
        <Header title="Roadmap" logButton={true} />
        <ContentRoadmap />
        <Footer isIcon={true} />
      </div>
    </>
  )
}

export default Roadmap;