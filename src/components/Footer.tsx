import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>
              ARKA <span className='text-gray-400'>INFOTECH</span>
            </h3>
            <p className='text-gray-400 mb-6'>
              Empowering businesses with cutting-edge technology solutions for over 23 years.
            </p>
            <div className='flex gap-4'>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all'>
                <Facebook className='w-5 h-5' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all'>
                <Linkedin className='w-5 h-5' />
              </a>
              <a href='#' className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all'>
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Services</h4>
            <ul className='space-y-3'>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Software Development</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Mobile App Development</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Web Development</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Cloud Solutions</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>AI/ML Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Company</h4>
            <ul className='space-y-3'>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>About Us</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Careers</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Our Team</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Portfolio</Link></li>
              <li><Link href='#' className='text-gray-400 hover:text-white transition-colors'>Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-lg font-bold mb-4'>Contact</h4>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3 text-gray-400'>
                <Mail className='w-5 h-5 mt-1 flex-shrink-0' />
                <span>info@arkainfotech.com</span>
              </li>
              <li className='flex items-start gap-3 text-gray-400'>
                <Phone className='w-5 h-5 mt-1 flex-shrink-0' />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className='flex items-start gap-3 text-gray-400'>
                <MapPin className='w-5 h-5 mt-1 flex-shrink-0' />
                <span>6+ Offices Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-gray-700'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              2025 Arka Infotech Software Solution. All rights reserved.
            </p>
            <div className='flex gap-6'>
              <Link href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>
                Privacy Policy
              </Link>
              <Link href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>
                Terms of Service
              </Link>
              <Link href='#' className='text-gray-400 hover:text-white transition-colors text-sm'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
