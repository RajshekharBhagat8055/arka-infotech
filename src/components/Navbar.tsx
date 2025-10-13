import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import MainHeading from './MainHeading'
import { Menu } from 'lucide-react'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-white/10 z-50'>
      <MaxWidthWrapper className='flex items-center justify-between py-4'>
        <Link href="/">
          <MainHeading className='text-2xl font-bold text-white'>
            ARKA <span className='text-gray-400'>INFOTECH</span>
          </MainHeading>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-white hover:text-gray-300 transition-colors font-medium'
            >
              {link.name}
            </Link>
          ))}
          <button className='bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all'>
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className='md:hidden text-white'>
          <Menu className='w-6 h-6' />
        </button>
      </MaxWidthWrapper>
    </nav>
  )
}
