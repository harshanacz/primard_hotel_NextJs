import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navItems } from '@/constants/Constants'


const Navbar = () => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] mx-auto'>
        {/* Logo */}
        <Image src='/images/logo.png' width={170} height={170} alt='logo' />
        {/* Nav Links */}
        <div className='hidden sm:flex items-center space-x-10'>
  {navItems.map((item, index) => (
    <Link key={index} href={item.label === 'Home' ? '/' : `/${item.label.toLowerCase()}`} className='text-white text-lg'>
      {item.label}
    </Link>
  ))}
</div>

          
          
      </div>

    </div>
  )
}

export default Navbar
