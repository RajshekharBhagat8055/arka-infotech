import React from 'react'
import { Shield, Smartphone, Key, Cloud, Network } from 'lucide-react'

export default function SecurityDropdown() {
  const securityServices = [
    {
      icon: Shield,
      name: 'Web Application Security',
      description: 'Protect your web applications'
    },
    {
      icon: Smartphone,
      name: 'Mobile Application Services',
      description: 'Secure mobile app development'
    },
    {
      icon: Key,
      name: 'API Security',
      description: 'Secure API endpoints & data'
    },
    {
      icon: Cloud,
      name: 'Cloud Security Services',
      description: 'Comprehensive cloud protection'
    },
    {
      icon: Network,
      name: 'Network Penetration Testing',
      description: 'Vulnerability assessment & testing'
    }
  ]

  return (
    <div className='w-[35vw]'>
      {/* Header */}
      <div className='px-6 py-2 border-b border-gray-200'>
        <h3 className='text-gray-900 text-base lg:text-xl font-bold mb-2'>Security Solutions</h3>
        <h4 className='text-orange-500 text-lg lg:text-2xl font-bold'>Comprehensive Protection</h4>
      </div>

      {/* Security Services Grid */}
      <div className='p-6'>
        <div className='grid grid-cols-1 gap-4 mb-6 max-w-lg mx-auto'>
          {securityServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className='group flex items-center space-x-3 p-4 rounded-lg hover:bg-gray-50 hover:ring hover:ring-gray-200 transition-all cursor-pointer'
              >
                {/* Icon */}
                <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors'>
                  <IconComponent className='w-5 h-5 text-orange-500 group-hover:text-white transition-colors' />
                </div>
                
                {/* Content */}
                <div className='flex-1'>
                  <h5 className='text-gray-900 font-semibold text-sm lg:text-base group-hover:text-orange-500 transition-colors'>
                    {service.name}
                  </h5>
                  <p className='text-gray-600 text-xs lg:text-sm group-hover:text-gray-800 transition-colors'>
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className='mt-6'>
          <button className='w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
            Explore Security Solutions
          </button>
        </div>
      </div>
    </div>
  )
}