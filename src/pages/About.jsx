import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'
import AboutInfo from '../components/about/AboutInfo'
import Operations from '../components/operations/Operations'
import Navbar from '../components/navbar/Navbar'

export default function About() {
  return (
    <div>
      <AboutInfo />
      <Operations />
      <Navigation />
      <Navbar />
      <Footer />
    </div>

  )
}
