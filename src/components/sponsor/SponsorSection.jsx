import React from 'react'
import ChildGrid from './ChildGrid'
import Header from '../home/header'
import ImpactMessage from '../about/ImpactMessage'
import Footer from '../home/Footer'
import ChildGridSecond from './ChildGridSecond'
import ChildGridWrapper from './ChildGridWrapper'

const SponsorSection = () => {
  return (
    <>
    <Header/>
    <ChildGridWrapper />
    <ImpactMessage/>
      <Footer/>
    </>
  )
}

export default SponsorSection
