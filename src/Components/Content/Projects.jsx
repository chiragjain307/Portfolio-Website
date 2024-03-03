import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/weather.png'
import img3 from '../../assets/todoApp.png'
import img4 from '../../assets/img4.png'
import { AiFillGithub } from 'react-icons/ai'

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>

        <div data-aos='fade-up' className='flex flex-col'>
          <a href="https://app-write-blog-app.vercel.app">
            <img className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img1} alt="project" />
          </a>
          <p className='flex gap-2 text-center h-full lg:mt-4 lg:items-center lg:justify-center mt-4 text-white'>
            Mega Blog APP
            <a href="https://github.com/chiragjain307/appWrite_blog_app" className='text-center text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
              <AiFillGithub className='text-[20px]' />
            </a>
          </p>
        </div>

        <div data-aos='fade-down' className='flex flex-col'>
          <a href="https://weather-webapp-pro.vercel.app/">
            <img className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img2} alt="project" />
          </a>
          <p className='flex gap-2 text-center h-full lg:mt-4 lg:items-center lg:justify-center mt-4 text-white'>
            Current Weather WebApp
            <a href="https://github.com/chiragjain307/Weather-WebApp" className='text-center text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
              <AiFillGithub className='text-[20px]' />
            </a>
          </p>
        </div>

        <div data-aos='fade-up' className='flex flex-col'>
          <a href="https://todo-webapp-pro.vercel.app/">
            <img className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img3} alt="project" />
          </a>
          <p className='flex gap-2 text-center h-full lg:mt-4 lg:items-center lg:justify-center mt-4 text-white'>
            Todo WebApp
            <a href="https://github.com/chiragjain307/Todo-WebApp" className='text-center text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
              <AiFillGithub className='text-[20px]' />
            </a>
          </p>
        </div>

        <div data-aos='fade-down' className='flex flex-col'>
          <a href="">
            <img className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={img4} alt="project" />
          </a>
          <p className='flex gap-2 text-center h-full lg:mt-4 lg:items-center lg:justify-center mt-4 text-white'>
            1st Project
            <a href="" className='text-center text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
              <AiFillGithub className='text-[20px]' />
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects