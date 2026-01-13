import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import HotelCards from '../components/HotelCard'
import Acheivments from '../components/Acheivements'
import Feature from '../components/Feature'
import ClientsCards from '../components/ClientCards'

function Home() {
  return (
    <>
        <Hero/>
        <Acheivments/>
        <Feature/>
        <FeaturedDestination/>
        <ClientsCards/>
    </>
  )
}

export default Home