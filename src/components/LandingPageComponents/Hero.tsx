'use client'
import React, { useRef, useState } from 'react';
import { ArrowRight, Code, Smartphone, Globe, ShoppingCart, Brain, Users, Building2, LucideIcon } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { motion } from 'framer-motion';
import Statistics from './Statistics';

interface ExpertiseArea {
  icon: LucideIcon;
  name: string;
}

function ExpertiseCard({ area }: { area: ExpertiseArea; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = area.icon;

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        backgroundColor: isHovered ? "rgb(0 0 0)" : "rgb(249 250 251)"
      }}
      className='rounded-full p-2 md:p-4 flex items-center gap-2 border cursor-pointer border-gray-200'
    >
      <motion.div
        animate={{
          color: isHovered ? "rgb(255 255 255)" : "rgb(249 115 22)"
        }}
      >
        <IconComponent className='w-6 h-6' />
      </motion.div>
      <motion.h3 
        className="font-medium text-sm text-center leading-tight"
        animate={{
          color: isHovered ? "rgb(249 115 22)" : "rgb(17 24 39)"
        }}
      >
        {area.name}
      </motion.h3>
    </motion.div>
  );
}

export default function Hero() {
  const expertiseRef = useRef(null);

  const expertiseAreas: ExpertiseArea[] = [
    { icon: Code, name: 'Software Development' },
    { icon: Smartphone, name: 'Mobile App Development' },
    { icon: Globe, name: 'Web Development' },
    { icon: ShoppingCart, name: 'E-commerce Services' },
    { icon: Brain, name: 'AI/ML Solutions' },
    { icon: Users, name: 'HubSpot' },
    { icon: Building2, name: 'Zoho Solutions' },
    { icon: Users, name: 'Salesforce Solutions' }
  ]

  return (
    <section className="relative py-10 md:py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <MaxWidthWrapper className='max-w-7xl'>
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Empowering Businesses With{' '}
          <span className="text-orange-500">AI, Data Analytics & Cloud</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          Arka Infotech Software Solution delivers cutting-edge technology services to transform your business and drive innovation.
        </motion.p>
      </MaxWidthWrapper>

      {/* Key Areas of Expertise */}
      <MaxWidthWrapper className="mt-16">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          Key Areas of Our Expertise
        </motion.h2>
        <motion.div 
          ref={expertiseRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mb-12"
          
        >
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} area={area} index={index} />
          ))}
        </motion.div>
      </MaxWidthWrapper>

      {/* CTA Buttons */}
      <MaxWidthWrapper className="flex flex-col sm:flex-row gap-4">
        <motion.button 
          className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileHover={{ backgroundColor: "rgb(234 88 12)" }}
          whileTap={{ scale: 0.98 }}
        >
          Let&apos;s Talk About Your Business
          <motion.div whileHover={{ x: 4 }}>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
        <motion.button 
          className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.35 }}
          whileHover={{ 
            backgroundColor: "rgb(17 24 39)",
            color: "rgb(255 255 255)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          View Our Services
        </motion.button>
      </MaxWidthWrapper>

      <Statistics />
      
    </section>
  );
}
