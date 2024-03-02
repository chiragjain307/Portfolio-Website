import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

function Navbar() {
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)
    
    const content = <>
        <div className='lg-hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition '>
            <ul className='text-center text-xl p-20'>
                <Link to="Home" spy={true} smooth={true}>
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Home
                    </li>
                </Link>
                <Link to="About" spy={true} smooth={true}>
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        About
                    </li>
                </Link>
                <Link to="TechStack" spy={true} smooth={true}>
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        TechStack
                    </li>
                </Link>
                <Link to="Projects" spy={true} smooth={true}>
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Projects
                    </li>
                </Link>
                <Link to="Contact" spy={true} smooth={true}>
                    <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    </>
    
    
    return (
        <>
            <nav className='sticky top-0 bg-slate-900'>
                <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800'>
                    <div className='flex items-center flex-1'>
                        <span className='text-3xl font-bold'>
                            <Link to='Home'>Chirag.dev</Link>
                        </span>
                    </div>
                    <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
                        {/* <div className='flex-10'> */}
                        <ul className='flex gap-8 mr-16 text-[18px]'>
                            <Link to="Home" spy={true} smooth={true}>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
                            </Link>

                            <Link to="About" spy={true} smooth={true}>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>About</li>
                            </Link>

                            <Link to="TechStack" spy={true} smooth={true}>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>TechStack</li>
                            </Link>

                            <Link to="Projects" spy={true} smooth={true}>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Projects</li>
                            </Link>

                            <Link to="Contact" spy={true} smooth={true}>
                                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Contact</li>
                            </Link>
                        </ul>
                        {/* </div> */}
                    </div>
                    <div>
                        {click && content}
                    </div>
                    <button
                        className='block sm:hidden transition'
                        onClick={handleClick} >
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar