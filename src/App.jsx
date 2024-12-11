import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Faboulous from './sections/Faboulous'
import About from './About'
import Foryou from './sections/Foryou'
import Shaowcase from './sections/Shaowcase'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'
const App = () => {
  return (
    <main className='overflow-hidden bg-orange-50'>
      <Header/>
      <Hero/>
      <Faboulous/>
      <About/>
      <Foryou/>
      <Shaowcase/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}

export default App
