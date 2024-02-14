import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import DriverHeader from '../components/drivers/DriverHeader'
import Need from '../components/need/Need'
import Swiper from '../components/swiper/Swiper'
import Form from '../components/form/Form'


export default function Drivers() {
  return (
    <div>
      <Swiper />
      <Need />
      <Form  />
      <Navigation />
      <Navbar />
      <Footer />
    </div>
  )
}
