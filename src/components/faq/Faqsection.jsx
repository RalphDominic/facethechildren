import React from 'react'
import Header from '../home/header'
import ImpactMessage from '../about/ImpactMessage'
import FAQList from './FAQList'
import FAQContactForm from './FAQContactForm'
import Footer from '../home/Footer'

const Faqsection = () => {
  return (
    <>
      <Header />
    <FAQList />
    <FAQContactForm />
    <ImpactMessage />
    <Footer/>
    </>
  )
}

export default Faqsection
