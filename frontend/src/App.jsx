import React, { useEffect } from 'react'
import BooksContainer from './components/BooksContainer'
import Lenis from '@studio-freight/lenis'
import { GlobalStyle } from './utils/GlobalStyles';
import Header from './components/Header';




export default function App() {

  useEffect(()=>{

    const lenis = new Lenis();
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
  }, [])
  


  return (
    <>
      <GlobalStyle/>
      <Header/>
      <BooksContainer/>
    </>
  )
}
