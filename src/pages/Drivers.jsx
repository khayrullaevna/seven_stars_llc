import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Need from '../components/need/Need'
import Form from '../components/form/Form'
import Swiperr from '../components/swiper/Swiper'
import GoogleTranslate from '../GoogleTranslate'



export default function Drivers() {
  return (
    <div>
      <GoogleTranslate />
      <Swiperr />
      <Need />
      <Form  />
      <Navbar />
      <Footer />
    </div>
  )
}
