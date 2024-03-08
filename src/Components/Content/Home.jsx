import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import img from '../../assets/profile.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Home() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [1000])

  const social = [
    {
      link: 'https://www.linkedin.com/in/chirag-jain-77aa30148',
      icon: <FaLinkedinIn/>,
    },
    {
      link: 'https://github.com/chiragjain307',
      icon: <AiFillGithub/>,
    },
    {
      link: 'https://twitter.com/mr_kasliwal',
      icon: <FaTwitter/>,
    },
    {
      link: 'https://www.instagram.com/_mr_kasliwal_',
      icon: <FaInstagram/>,
    }
  ]

  return (
    <div id='Home' className=' bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center '>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase'>
          Welcome To <span className='text-fuchsia-500'>My Portfolio Website</span>
        </h1>
        <p data-aos='fade-left'>Hi, I'm a dedicated web developer based in Rajasthan, India. Drawing from a foundation in cloud computing and proficient knowledge of AWS services, I am constantly expanding my expertise in web development. With a diverse skill set, I aim to contribute innovatively to every project.</p>
        <div data-aos='fade-up' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            
            <div className='flex space-x-2'>
              {social.map((social, index) => (
                <a key={index} target="_blank" href={social.link} className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                <div className='text-[28px]'>
                {social.icon}
                </div>
              </a>
              ))}

            </div>
          </div>
        </div>
      </div>
      <img data-aos='fade-up' src={img} width={290} height={290} alt="" className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' />
    </div>
  )
}

export default Home
