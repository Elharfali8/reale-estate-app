import React from 'react'
import { Hero, Properties } from '../components'

const Home = () => {
  return (
    <main className='min-h-[calc(100vh-80px)]'>
      <div className="bg-white vector-img">
        <Hero />
      </div>
        <Properties />
    </main>
  )
}

export default Home