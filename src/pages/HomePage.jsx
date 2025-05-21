import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import History from '../components/History'

function HomePage() {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <About />
        <History />
      </main>
    </>
  )
}

export default HomePage
