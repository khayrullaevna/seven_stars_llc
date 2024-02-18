import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Location from '../components/location/Location'
import Partner from '../components/partners/Partner'
import ContactHead from '../components/contact-head/Contact-head'

export default function Contact() {
  return (
    <div>
      

      <Navbar />
      {/* <Navigation /> */}
      <ContactHead />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Location />
      <Partner />
      <Footer />
    </div>
  )
}
