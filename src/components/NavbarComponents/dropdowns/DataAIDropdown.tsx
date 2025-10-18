import React from 'react'
import { Database, Brain } from 'lucide-react'
import TransitionLink from '@/components/TransitionLink'

export default function DataAIDropdown() {
  const serviceCategories = [
    {
      icon: Database,
      header: 'Data',
      services: [
        { name: 'Strategy Consulting', slug: 'data-strategy-consulting' },
        { name: 'Processing', slug: 'data-processing' },
        { name: 'Governance Solution', slug: 'data-governance' },
        { name: 'Storage Solution', slug: 'data-storage' },
        { name: 'Quality Management', slug: 'data-quality-management' },
        { name: 'Modelling Design', slug: 'data-modelling' },
        { name: 'Architecture', slug: 'data-architecture' },
        { name: 'Analytics & Visualization', slug: 'analytics-visualization' },
        { name: 'Cloud Data Migration', slug: 'cloud-data-migration' }
      ]
    },
    {
      icon: Brain,
      header: 'AI',
      services: [
        { name: 'Custom AI Development', slug: 'custom-ai-development' },
        { name: 'AI Consulting Strategy', slug: 'ai-consulting-strategy' },
        { name: 'AI Business Intelligence', slug: 'ai-business-intelligence' },
        { name: 'Large Language Models', slug: 'large-language-models' },
        { name: 'AI Personalized Experience', slug: 'ai-personalized-customer-experience' },
        { name: 'Blockchain', slug: 'blockchain' }
      ]
    }
  ]

  return (
    <div className='w-[40vw]'>
      {/* Header */}
      <div className='px-6 py-2 border-b border-gray-200'>
        <h3 className='text-gray-900 text-base lg:text-xl font-bold mb-2'>Data & AI Solutions</h3>
        <h4 className='text-orange-500 text-lg lg:text-2xl font-bold'>Intelligent Data Processing</h4>
      </div>

      {/* Services Grid */}
      <div className='p-6'>
        <div className='grid grid-cols-2 gap-8 mb-6'>
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className='space-y-2'>
                {/* Category Header */}
                <div className='flex items-center space-x-2 pb-2 border-b border-gray-200'>
                  <IconComponent className='w-5 h-5 text-orange-500' />
                  <h5 className='text-sm lg:text-xl text-gray-900 font-semibold'>{category.header}</h5>
                </div>
              
                {/* Services List */}
                <div className='space-y-2'>
                  {category.services.map((service, serviceIndex) => (
                    <TransitionLink
                      key={serviceIndex}
                      href={`/data-ai/${service.slug}`}
                      name={service.name}
                      className='block text-sm lg:text-base font-semibold text-gray-600 hover:text-black hover:bg-gray-50 hover:ring hover:ring-gray-200 px-2 py-1 rounded-md transition-colors cursor-pointer'
                    >
                      {service.name}
                    </TransitionLink>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className='mt-6'>
          <TransitionLink href="/data-ai/data-strategy-consulting" name="Explore Data & AI">
            <button className='w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
              Explore Data & AI Solutions
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  )
}