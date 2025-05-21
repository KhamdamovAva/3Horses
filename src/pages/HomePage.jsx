import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'

function HomePage() {
  return (
    <>
    <header>
      <Navbar />
      <Header />
    </header>
    <main>
        <About />
    </main>
    </>
  )
}

export default HomePage