import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Nav.css'
const Nav = () => {
  return (
    <div className='Navbar'>
        <div className='nav-logo'>
            <Image className='logo-image' src="/dynelogo.png"
            width={250}
            height={70}
            alt='Logo'
            />
        </div>

        <div className='nav-pages'>
        
            <Link className='link' href='/'>Home</Link>
            <Link className='link' href='/About'>About</Link>
            <Link className='link' href='/'>Services</Link>
            <Link className='link' href='/'>Careers</Link>
            <Link className='link' href='/'>Clients</Link>
            <Link className='link' href='/'>Contact</Link>
        </div>
        
    </div>
  )
}

export default Nav