import React from 'react'
import { Database, Brain } from 'lucide-react'

export default function DataAIDropdown() {
  const serviceCategories = [
    {
      icon: Database,
      header: 'Data',
      services: [
        'Strategy Consulting',
        'Processing',
        'Governance Solution',
        'Storage Solution',
        'Quality Management',
        'Modelling Design',
        'Architecture',
        'Analytics & Visualization',
        'Cloud Data Migration'
      ]
    },
    {
      icon: Brain,
      header: 'AI',
      services: [
        'Custom AI Development',
        'AI Consulting Strategy',
        'AI Business Intelligence',
        'Large Language Models Solutions',
        'AI Personalized Customer Experience',
        'Blockchain'
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
                    <div 
                      key={serviceIndex} 
                      className='text-sm lg:text-base font-semibold text-gray-600 hover:text-black hover:bg-gray-50 hover:ring hover:ring-gray-200 px-2 py-1 rounded-md transition-colors cursor-pointer'
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className='mt-6'>
          <button className='w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
            Explore Data & AI Solutions
          </button>
        </div>
      </div>
    </div>
  )
}