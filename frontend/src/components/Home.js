import React , { useEffect } from 'react'

import Navbar from './Navbar'

const Home = () => {
  useEffect(() => {
    document.title = 'Home - AIC Manyatta';
  }, []);

  return (
    <div classname="bg-black">
      This is My home Page
    </div>
  )
}

export default Home
