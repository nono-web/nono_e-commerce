import React from 'react'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products/>
      <Newsletter />
    </div>
  )
}

export default Home
