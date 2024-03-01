import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left'>Computer science graduate with a specialization in cloud computing and virtualization. Recently completed an impactful internship at IBM, concluding in September 2023, where I played a key role in developing cloud-based solutions. Proficient in web development, I have acquired expertise in AWS tools like S3, Lambda, DynamoDB, and CloudFormation. My diverse background includes social work and volunteering, providing additional skills in IT management, SQL, and effective communication. Eager to leverage this comprehensive skill set and contribute to innovative projects in the dynamic field of web development.</p>
        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume}>
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About