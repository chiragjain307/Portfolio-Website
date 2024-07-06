import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TechStackList from '../../All_Lists/TechStackList'

function TechStack() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='TechStack' className='bg-white text-black dark:bg-slate-900 dark:text-white p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Tech Stack</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>

        {TechStackList.map((tech, index) => (
          <h2 key={index} data-aos={tech.id % 2 === 0 ? 'fade-down' : 'fade-up'} className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 border-glow'>
            <img className='h-28' src={tech.image} alt="" />
          </h2>
        ))}

      </div>
    </div>
  )
}

export default TechStack