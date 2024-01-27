import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import Sponsor from '../../views/Sponsor'
import AboutUs from '../../views/AboutUs'
import Categories from '../../views/Categories'
import Donate from '../../views/Donate'
import Mobile from '../../views/Mobile'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Sponsor />
        <AboutUs />
        <Categories />
        <Donate />
        <Mobile />
        <Footer />
    </div>
  )
}

export default Home