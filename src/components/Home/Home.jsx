import React from 'react'
import Navbar from '../Navbar/Navbar'
import s from './Home.module.css'

const Home = () => {

  return (
    <main className={s.mainContainer}>
      <Navbar/>
      <h2 style={{"padding-top":"3em"}}>soy el homer</h2>
    </main>
  )
}

export default Home
