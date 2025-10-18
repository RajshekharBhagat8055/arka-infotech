import React from 'react'
import { Cloud, CloudLightning, CloudRain, Server } from 'lucide-react'
import TransitionLink from '@/components/TransitionLink'

export default function CloudDropdown() {
  const cloudServices = [
    {
      icon: Cloud,
      name: 'AWS',
      description: 'Amazon Web Services',
      slug: 'aws'
    },
    {
      icon: CloudLightning,
      name: 'Azure',
      description: 'Microsoft Azure',
      slug: 'azure'
    },
    {
      icon: CloudRain,
      name: 'Google Cloud',
      description: 'Google Cloud Platform',
      slug: 'gcp'
    },
    {
      icon: Server,
      name: 'DigitalOcean',
      description: 'Developer Cloud Platform',
      slug: 'digitalocean'
    }
  ]

  return (
    <div className='w-[30vw]'>
      {/* Header */}
      <div className='px-6 py-2 border-b border-gray-200'>
        <h3 className='text-gray-900 text-base lg:text-xl font-bold mb-2'>Cloud Solutions</h3>
        <h4 className='text-orange-500 text-lg lg:text-2xl font-bold'>Scalable Cloud Infrastructure</h4>
      </div>

      {/* Cloud Services Grid */}
      <div className='p-6'>
        <div className='grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto'>
          {cloudServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <TransitionLink
                key={index}
                href={`/cloud/${service.slug}`}
                name={service.name}
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
              </TransitionLink>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className='mt-6'>
          <TransitionLink href="/cloud/aws" name="Explore Cloud Solutions">
            <button className='w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
              Explore Cloud Solutions
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  )
}