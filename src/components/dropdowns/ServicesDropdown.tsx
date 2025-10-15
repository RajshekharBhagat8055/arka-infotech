import React from 'react'
import { Star, Palette, Building2, Wrench, TrendingUp } from 'lucide-react'

export default function ServicesDropdown() {
  const serviceCategories = [
    {
      icon: Palette,
      header: 'Design & Development',
      services: [
        'Website Development',
        'Mobile App Development',
        'E-commerce Development',
        'Software Development',
        'Game Development',
        'Bespoke Development',
        'API Development',
        'Custom Software Integration'
      ]
    },
    {
      icon: Building2,
      header: 'Enterprise Services',
      services: [
        'CRM Solutions',
        'Cloud Solutions',
        'IoT Solutions',
        'Data Engineering',
        'AI/ML',
        'Salesforce',
        'HubSpot',
        'Zoho',
        'ServiceNow',
        'MS Dynamics'
      ]
    },
    {
      icon: Wrench,
      header: 'Support Services',
      services: [
        'Hosting',
        'Server Support',
        'Development Support',
        'Staff Augmentation',
        'Digital Fulfilment',
        'IT Support Services',
        'DevOps'
      ]
    },
    {
      icon: TrendingUp,
      header: 'Digital Marketing',
      services: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'Pay Per Click',
        'ORM',
        'Performance Optimization'
      ]
    }
  ]

  const partners = [
    { name: 'Google', rating: 4.6 },
    { name: 'HubSpot', rating: 5.0 },
    { name: 'Salesforce', rating: 5.0 },
    { name: 'Zoho', rating: 4.9 },
    { name: 'Clutch', rating: 4.6 },
    { name: 'Trustpilot', rating: 4.5 },
  ]

  return (
    <div className='w-[90vw]'>
      {/* Header */}
      <div className='px-6 py-2 border-b border-gray-200'>
        <h3 className='text-gray-900 text-base lg:text-xl font-bold mb-2'>Empowering Businesses With</h3>
        <h4 className='text-orange-500 text-lg lg:text-2xl font-bold'>AI, Data Analytics & Cloud</h4>
      </div>

      {/* Services Grid */}
      <div className='p-6'>
        <div className='grid grid-cols-4 gap-6 mb-6'>
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
                    className='text-sm lg:text-base font-semibold text-gray-600 hover:text-black hover:bg-gray-50 hover:ring hover:ring-gray-200 px-2 py-1 rounded-md transition-colors'
                  >
                    {service}
                  </div>
                ))}
              </div>
              </div>
            )
          })}
        </div>

        {/* Partner Ratings */}
        <div className='hidden xl:block border-t border-gray-200 pt-4'>
          <p className='text-gray-500 text-sm mb-3'>Trusted by leading platforms</p>
          <div className='grid grid-cols-3 gap-4'>
            {partners.slice(0, 6).map((partner, index) => (
              <div key={index} className='flex items-center justify-between'>
                <span className='text-gray-900 text-sm font-medium'>{partner.name}</span>
                <div className='flex items-center gap-1'>
                  <span className='text-gray-700 text-xs'>{partner.rating}</span>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(partner.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className='mt-6'>
          <button className='w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
            Explore All Services
          </button>
        </div>
      </div>
    </div>
  )
}

