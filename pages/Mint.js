import React from 'react'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import ContentMint from './components/contentMint';

const Mint = () => {

  return (
    <>
      <div >
        <Header title="MINT" logButton={true} />
        <ContentMint />
        <Footer isIcon={true} />
      </div>
    </>
  )
}

export default Mint;