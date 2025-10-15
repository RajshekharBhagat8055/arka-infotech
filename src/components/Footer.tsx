'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, LucideIcon } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import MaxWidthWrapper from './MaxWidthWrapper'

function SocialIcon({ Icon, href }: { Icon: LucideIcon; href: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.a 
      href={href}
      className='w-10 h-10 rounded-full flex items-center justify-center'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "rgb(249 115 22)" : "rgb(31 41 55)",
        scale: isHovered ? 1.1 : 1
      }}
      transition={{ duration: 0.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className='w-5 h-5' />
    </motion.a>
  );
}

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className='bg-black text-white'>
      <MaxWidthWrapper className='py-16'>
        <motion.div 
          ref={ref}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
              }
            }
          }}
        >
          {/* Company Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
          >
            <h3 className='text-2xl font-bold mb-4'>
              ARKA <span className='text-orange-500'>INFOTECH</span>
            </h3>
            <p className='text-gray-400 mb-6'>
              Empowering businesses with cutting-edge technology solutions for over 23 years.
            </p>
            <div className='flex gap-4'>
              <SocialIcon Icon={Facebook} href='#' />
              <SocialIcon Icon={Twitter} href='#' />
              <SocialIcon Icon={Linkedin} href='#' />
              <SocialIcon Icon={Instagram} href='#' />
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
          >
            <h4 className='text-lg font-bold mb-4 text-orange-500'>Services</h4>
            <ul className='space-y-3'>
              {['Software Development', 'Mobile App Development', 'Web Development', 'Cloud Solutions', 'AI/ML Solutions'].map((service, i) => (
                <li key={i}>
                  <motion.div whileHover={{ x: 4 }} className="inline-block">
                    <Link href='#' className='text-gray-400 hover:text-orange-500'>
                      {service}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
          >
            <h4 className='text-lg font-bold mb-4 text-orange-500'>Company</h4>
            <ul className='space-y-3'>
              {['About Us', 'Careers', 'Our Team', 'Portfolio', 'Blog'].map((item, i) => (
                <li key={i}>
                  <motion.div whileHover={{ x: 4 }} className="inline-block">
                    <Link href='#' className='text-gray-400 hover:text-orange-500'>
                      {item}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
            }}
          >
            <h4 className='text-lg font-bold mb-4 text-orange-500'>Contact</h4>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3 text-gray-400'>
                <Mail className='w-5 h-5 mt-1 flex-shrink-0 text-orange-500' />
                <span>info@arkainfotech.com</span>
              </li>
              <li className='flex items-start gap-3 text-gray-400'>
                <Phone className='w-5 h-5 mt-1 flex-shrink-0 text-orange-500' />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className='flex items-start gap-3 text-gray-400'>
                <MapPin className='w-5 h-5 mt-1 flex-shrink-0 text-orange-500' />
                <span>6+ Offices Worldwide</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className='pt-8 border-t border-gray-800'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-sm'>
              © 2025 Arka Infotech Software Solution. All rights reserved.
            </p>
            <div className='flex gap-6'>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, i) => (
                <motion.div key={i} whileHover={{ y: -2 }} className="inline-block">
                  <Link href='#' className='text-gray-400 hover:text-orange-500 text-sm'>
                    {policy}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </footer>
  )
}
