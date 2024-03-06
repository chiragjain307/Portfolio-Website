import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {

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
        <footer className='md:flex md:px-10 lg:flex bg-slate-800 text-white lg:px-48 px-4 py-5 justify-between'>
                <div>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2'>Copyright © 2024. All rights are reserved</h2>
                </div>
                <div className='md:flex lg:flex gap-10 '>
                    <div>
                        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2  uppercase'>Contact</h2>
                        <a href="mailto:chiragjain.jain7@gmail.com" className='text-[16px] text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out cursor-pointer'>Email: chiragjain.jain7@gmail.com</a>
                        <p className='text-[16px] text-white pb-5 hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>Phone: +91-8302421632</p>
                    </div>
                    <div>
                        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me</h2>
                        <div className='flex space-x-4'>
                            {social.map((social) => (
                                <a target="_blank" href={social.link} className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
                                <div  className='text-[28px]'>
                                    {social.icon}
                                </div>
                                
                            </a>
                            ))}
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
