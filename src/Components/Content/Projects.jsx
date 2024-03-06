import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProjectsList from '../../All_Lists/ProjectsList'
import { AiFillGithub } from 'react-icons/ai'

function Projects() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  
  return (
    <div id='Projects' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>

      
      {ProjectsList.map((project) => (
        <div key={project.id} data-aos={project.id % 2 === 0 ? 'fade-down' : 'fade-up'} className='flex flex-col'>
          <a target="_blank" href={project.github}>
            <img className='text-[26px] flex items-center justify-center rounded-3xl h-40 w-60 p-1 border-2 border-fuchsia-800 border-glow' src={project.image} alt="project" />
          </a>
          <p className='flex gap-2 text-center h-full lg:mt-4 lg:items-center lg:justify-center mt-4 text-white'>
            {project.title}
            <a target="_blank" href={project.github} className='text-center text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
              <AiFillGithub className='text-[20px]' />
            </a>
          </p>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Projects