import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Skills from '../components/skills/Skills'
import Navbar from '../components/navbar/Navbar'
import Partner from '../components/partners/Partner'
import GoogleTranslate from '../GoogleTranslate'

export default function Home() {
  return (
    <div >
    <GoogleTranslate />
    <Header />
    <Skills />
    <Partner />
    <Footer />
    <Navbar />

    {/* <Navigation /> */}

    </div>
  )
}
