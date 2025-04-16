import React from 'react'
import AboutThird from './AboutThird'
import About from './About'
import AboutSecond from './AboutSecond'
import Header from '../home/header'
import Footer from '../home/Footer'
import ImpactMessage from './ImpactMessage'

const AboutHolder = () => {
  return (
    <>
    <Header/>
    <About/>
    <AboutSecond/>
    <AboutThird/>
    <ImpactMessage/>
    <Footer/>
    </>
  )
}

export default AboutHolder
