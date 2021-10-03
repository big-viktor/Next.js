import React, { useEffect, useState } from 'react'
import Home from './Home'
import About from './About';
import ThemeProvider from '../pages/components/ThemeProvaider.js';

const Index = () => {

  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>

    </>

  )
}

export default Index