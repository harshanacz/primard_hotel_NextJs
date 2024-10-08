import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Rooms from './Rooms/Rooms'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Rooms />
    </div>
  )
}

export default Home
