import React,{useEffect} from 'react'
import ScrollToTop from './components/ScrollToTop'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Recommend from './components/Recommended'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import scrollreveal from 'scrollreveal'

export default function App() {
  useEffect(()=>{
    const sr = scrollreveal({
      origin:'top',
      distance:'80px',
      duration:2000,
      reset:true,
    });
    sr.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      #testimonials,
      footer
      `,
      {
        opacity:0,
        interval:300,
      }
    )
  },[])
  return (
    <>
    <ScrollToTop/>
    <NavBar/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    <Footer/>
      
    </>
  )
}
