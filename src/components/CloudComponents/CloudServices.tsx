'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

interface Service {
  title: string
  description: string
  icon: string
  features: string[]
}

interface CloudServicesProps {
  services: Service[]
  providerName: string
}

function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Get icon component dynamically
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Cloud
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.3,
        ease: "easeOut"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        borderColor: "rgb(249 115 22)",
        scale: 1.01,
        boxShadow: "0 4px 24px 0 rgb(0 0 0 / 0.5)"
      }}
      className="relative overflow-clip z-20 border p-3 md:p-6 rounded-xl cursor-pointer bg-white flex flex-col h-full"
    >
      <motion.div 
        className='absolute -z-10 left-0 top-0 w-full h-full rounded-full bg-orange-50'
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2 : 0 }}
        transition={{ duration: 0.7 }}
      />
      
      {/* Icon & Title */}
      <div className="mb-4 flex items-center gap-3">
        <div className="size-14 md:size-16 rounded-lg flex items-center justify-center shadow-sm">
          <IconComponent className="size-8 md:size-10 text-orange-500" />
        </div>
        <h4 className="text-xl font-bold text-gray-900">
          {service.title}
        </h4>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Features */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <ul className="space-y-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="size-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function CloudServices({ services, providerName }: CloudServicesProps) {
  return (
    <>
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-600 uppercase tracking-wide mb-3">
          Our Services
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          {providerName} Services We Provide
        </h3>
        <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-7xl mx-auto">
          Comprehensive {providerName} solutions tailored to your business needs
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </>
  )
}

