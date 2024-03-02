import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='mb-4 md:mb-0'>
                    <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase'>LOGO</span>
                    <p className='text-[16px] my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, maiores.</p>
                </div>
                <div>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>TechStack</h2>
                    <ul className='text-[16px] my-4'>
                        <li className='my-2'>Web Design</li>
                        <li className='my-2'>Web Development</li>
                        <li className='my-2'>SEO</li>
                        <li className='my-2'>E-commerce</li>
                    </ul>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
                    <p className='text-[16px] my-4'>Email: chiragjain.jain7@gmail.com</p>
                    <p className='text-[16px] my-4'>Phone: +91-8302421632</p>
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
