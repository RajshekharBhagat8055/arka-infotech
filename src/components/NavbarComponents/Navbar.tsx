'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import MainHeading from '../MainHeading'
import { Menu, ChevronDown } from 'lucide-react'
import ServicesDropdown from './dropdowns/ServicesDropdown'
import CloudDropdown from './dropdowns/CloudDropdown'
import DataAIDropdown from './dropdowns/DataAIDropdown'
import SecurityDropdown from './dropdowns/SecurityDropdown'
import IndustriesDropdown from './dropdowns/IndustriesDropdown'
import TechnologiesDropdown from './dropdowns/TechnologiesDropdown'
import SuccessStoriesDropdown from './dropdowns/SuccessStoriesDropdown'
import DropdownWrapper from '../DropdownWrapper'

interface NavLink {
  name: string
  href: string
  dropdown?: React.ComponentType<Record<string, never>>
}

const navLinks: NavLink[] = [
  { name: 'Services', href: '#services', dropdown: ServicesDropdown },
  { name: 'Cloud', href: '#cloud', dropdown: CloudDropdown },
  { name: 'Data & AI', href: '#data-ai', dropdown: DataAIDropdown },
  { name: 'Security', href: '#security', dropdown: SecurityDropdown },
  { name: 'Industries', href: '#industries', dropdown: IndustriesDropdown },
  { name: 'On-Demand Developer', href: '#on-demand-developer'},
  { name: 'Technologies', href: '#technologies', dropdown: TechnologiesDropdown },
  { name: 'Success Stories', href: '#success-stories', dropdown: SuccessStoriesDropdown },
]

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (linkName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
      setHoverTimeout(null)
    }
    setHoveredLink(linkName)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredLink(null)
    }, 150) // Small delay to allow moving to dropdown
    setHoverTimeout(timeout)
  }

  return (
    <nav className='fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-200 z-[9999] shadow-sm'>
      <MaxWidthWrapper className='flex items-center justify-between py-4'>
        <Link href="/">
          {/* <div className="flex items-center gap-2">
            <img  
              src="/logo_main.png"
              alt="AISS Logo"
              className="h-10 w-10 object-contain"
            />
            
          </div> */}
          <MainHeading>AISS</MainHeading>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden xl:flex items-center gap-6'>
          {navLinks.map((link) => {
            return (
              <div
                key={link.name}
                className='relative'
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className='text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base flex items-center gap-1'
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-all duration-200 ${
                        hoveredLink === link.name 
                          ? 'transform rotate-180 text-orange-500' 
                          : 'text-gray-500'
                      }`} 
                    />
                  )}
                </Link>
              </div>
            )
          })}
          <button className='bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all'>
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className='xl:hidden text-gray-700'>
          <Menu className='w-6 h-6' />
        </button>
      </MaxWidthWrapper>

      {/* Full-width dropdowns outside MaxWidthWrapper */}
      <div className='relative max-w-5xl mx-auto'>
        {navLinks.map((link: NavLink) => (
            <div 
              key={link.name}
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              <DropdownWrapper isVisible={hoveredLink === link.name}>
                {link.dropdown && React.createElement(link.dropdown)}
              </DropdownWrapper>
            </div>
          )
        )}
      </div>
    </nav>
  )
}
