import React from 'react'
import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'
import Skills from '../components/skills/Skills'
import Navbar from '../components/navbar/Navbar'
import Partner from '../components/partners/Partner'

export default function Home() {
  return (
    <div>
    <Header />
    <Skills />
    <Partner />
    <Footer />
    <Navbar />
    {/* <Navigation /> */}

    </div>
  )
}
