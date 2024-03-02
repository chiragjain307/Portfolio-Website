import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import JS from '../../assets/javascript.png'
import REACT from '../../assets/react.png'


function TechStack() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])
  return (
<<<<<<< HEAD:src/Components/Content/TechStack.jsx
    <div id='TechStack' className='p-20 flex flex-col items-center justify-center'>
=======
    <div id='Services' className='p-20 flex flex-col items-center justify-center'>
>>>>>>> 42babd85cad95c5ffbf3ff73e31b71a9a74ced99:src/Components/Content/Services.jsx
      <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Tech Stack</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>

        <h2 data-aos='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 border-glow'>
          <img className='h-28' src={HTML} alt="" />
        </h2>
        <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 border-glow'>
          <img className='h-28' src={CSS} alt="" />
        </h2>
        <h2 data-aos='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 border-glow'>
          <img className='h-28' src={JS} alt="" />
        </h2>
        <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 border-glow'>
          <img className='h-28' src={REACT} alt="" />
        </h2>
        
      </div>
    </div>
  )
}

<<<<<<< HEAD:src/Components/Content/TechStack.jsx
export default TechStack
=======
export default Services
>>>>>>> 42babd85cad95c5ffbf3ff73e31b71a9a74ced99:src/Components/Content/Services.jsx
