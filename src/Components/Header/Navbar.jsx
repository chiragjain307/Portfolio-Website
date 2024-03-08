import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

function Navbar() {
    const [click, setClick] = useState(false)
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = (event) => {
        setDarkMode(!darkMode)
        if (event.target.checked) {
            document.documentElement.setAttribute('class', 'dark');
        } else {
            document.documentElement.removeAttribute('class');
        }
    }

    useEffect(() => {
        document.documentElement.setAttribute('class', 'dark');
    }, [])

    const handleClick = () => setClick(!click)
    const navItems = ['Home', 'About', 'TechStack', 'Projects', 'Contact']


    const content =
        <>
            <div className='lg-hidden block absolute top-16 w-full left-0 right-0 bg-white dark:bg-slate-900 transition '>
                <ul className='text-center text-xl p-20'>
                    {navItems.map((item, index) => (
                        <Link key={index} to={item} spy={true} smooth={true}>
                            <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>{item}</li>
                        </Link>
                    ))}
                    <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                onChange={toggleTheme}
                                checked={darkMode}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </ul>
            </div>
        </>



    return (
        <>
            <nav className='sticky top-0 bg-white text-black dark:bg-slate-900 dark:text-white'>
                <div className='h-10vh flex justify-between z-50 lg:py-5 pl-20 pr-14 py-4 border-b border-slate-800'>
                    <div className='flex items-center flex-1'>
                        <span className='text-3xl font-bold'>
                            <Link to='Home' spy={true} smooth={true}>Chirag.dev</Link>
                        </span>
                    </div>
                    <div className='lg:flex md:flex flex-1 items-center justify-end font-normal hidden'>
                        <ul className='flex gap-8 text-[18px]'>
                            {navItems.map((item, index) => (
                                <Link key={index} to={item} spy={true} smooth={true}>
                                    <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>{item}</li>
                                </Link>
                            ))}
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                        onChange={toggleTheme}
                                        checked={darkMode}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </ul>



                    </div>
                    <button
                        className='block md:hidden transition text-2xl'
                        onClick={handleClick} >
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                    <div className='md:hidden'>
                        {click && content}
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar