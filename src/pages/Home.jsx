import React from 'react'
import { Hero } from '../components'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)]'>
      <div className="bg-white vector-img">
        <Hero />
      </div>
    </main>
  )
}

export default Home