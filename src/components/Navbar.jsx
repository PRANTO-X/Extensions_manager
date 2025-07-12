import React from 'react'
import { icons } from '../assets/assets'
import ThemeBtn from './ThemeBtn'

const Navbar = () => {
  return (
    <header className='container mx-auto px-4 md:px-6 lg:px-12 mt-12'>
        <nav className='w-full px-12 py-4 bg-card rounded-lg flex justify-between items-center shadow-md transition duration-300 ease-in-out'>
              <img src={icons.logo} alt="logo" loading='lazy' />
              <ThemeBtn/>
        </nav>
    </header>
  )
}

export default Navbar