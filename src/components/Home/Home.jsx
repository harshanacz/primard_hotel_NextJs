import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Rooms from './Rooms/Rooms'
import Footer from './Footer/Footer'
import GoUpButton from '../Common/GoUpButton'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Rooms />
      <Footer />
      <GoUpButton/>
    </div>
  )
}

export default Home
