import React , { useEffect } from 'react';

import './Home.css';

const Home = () => {
  useEffect(() => {
    document.title = 'Home - AIC Manyatta';
  }, []);

  return (
    <div className=''>

      <div className='landing' />

      <div className='bg-gray-100 sm:w-6/12 w-10/12 text-center text-4xl mx-auto font-semibold mt-[-100px] p-5 rounded-3xl'>
        Join Us Every Sunday from <span className='text-red-600'>
        9:00 AM to 12:00 Noon
        </span>

        <br></br>

        Let us Praise the Lord as a Family.
      </div>

    </div>
  )
}

export default Home
