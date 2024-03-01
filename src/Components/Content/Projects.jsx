import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/todoApp.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>

        <div>
          <a href="https://app-write-blog-app.vercel.app">
            <img data-aos='fade-up' className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img1} alt="project" />
          </a>
          <p className='h-full lg:mt-4 lg:items-center flex flex-col mt-4 items-center text-white'>Mega Blog APP</p>
        </div>
        <div>
          <a href="https://todo-web-app-omega.vercel.app">
            <img data-aos='fade-down' className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img2} alt="project" />
          </a>
          <p className='h-full lg:mt-4 lg:items-center flex flex-col mt-4 items-center text-white'>Todo WebApp</p>
        </div>
        <div>
          <a href="">
            <img data-aos='fade-up' className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img3} alt="project" />
          </a>
          <p className='h-full lg:mt-4 lg:items-center flex flex-col mt-4 items-center text-white'>2nd Project</p>
        </div>
        <div>
          <a href="">
            <img data-aos='fade-down' className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img4} alt="project" />
          </a>
          <p className='h-full lg:mt-4 lg:items-center flex flex-col mt-4 items-center text-white'>2nd Project</p>
        </div>
      </div>
    </div>
  )
}

export default Projects