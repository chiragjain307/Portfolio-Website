import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
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
                            <a href="https://www.linkedin.com/in/chirag-jain-77aa30148" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
                                <FaLinkedinIn className='text-[28px]' />
                            </a>
                            <a href="https://github.com/chiragjain307" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
                                <AiFillGithub className='text-[28px]' />
                            </a>
                            <a href="https://twitter.com/mr_kasliwal" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
                                <FaTwitter className='text-[28px]' />
                            </a>
                            <a href="https://www.instagram.com/_mr_kasliwal_" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
                                <FaInstagram className='text-[28px]' />
                            </a>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
