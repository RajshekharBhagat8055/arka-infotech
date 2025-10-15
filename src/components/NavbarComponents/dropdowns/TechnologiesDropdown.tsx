import React from 'react'
import { 
  Smartphone, 
  ShoppingCart, 
  FolderOpen, 
  Code, 
  Layers, 
  Users, 
  Gamepad2, 
  Cloud, 
  Link2 
} from 'lucide-react'

export default function TechnologiesDropdown() {
  const technologyCategories = [
    {
      icon: Smartphone,
      header: 'Mobile Apps',
      services: [
        'Android',
        'React Native',
        'iOS',
        'Flutter',
        'Swift',
        'Kotlin',
        'Xamarin'
      ]
    },
    {
      icon: ShoppingCart,
      header: 'Ecommerce',
      services: [
        'Adobe Commerce',
        'Shopify',
        'Symfony',
        'WooCommerce',
        'BigCommerce',
        'Magento'
      ]
    },
    {
      icon: FolderOpen,
      header: 'CMS',
      services: [
        'Wordpress',
        'Drupal',
        'Craft',
        'Acquia',
        'Joomla',
        'SharePoint',
        'Umbraco',
        'Sitecore',
        'Pantheon',
        'AEM Development',
        'Sitefinity'
      ]
    },
    {
      icon: Code,
      header: 'Custom Development',
      services: [
        'PHP',
        'Laravel',
        'ROR (Ruby on Rails)',
        'Power Platform',
        'HTML5',
        'JavaScript',
        'Zoho Creator',
        'Python',
        'DotNet',
        'NodeJS',
        'Angular',
        'Spring',
        'C#'
      ]
    },
    {
      icon: Layers,
      header: 'Full Stack Development',
      services: [
        'MEAN',
        'Full Stack',
        'MERN',
        'Java',
        'React JS'
      ]
    },
    {
      icon: Users,
      header: 'CRM',
      services: [
        'ServiceNow',
        'Salesforce',
        'Odoo',
        'HubSpot',
        'Zoho',
        'MS Dynamics'
      ]
    },
    {
      icon: Gamepad2,
      header: 'Games',
      services: [
        'Unity',
        'Unreal',
        'Maya',
        '3DS MAX',
        'Blender'
      ]
    },
    {
      icon: Cloud,
      header: 'Cloud',
      services: [
        'AWS',
        'Azure',
        'Google Cloud',
        'DevOps'
      ]
    },
    {
      icon: Link2,
      header: 'Other',
      services: [
        'Golang',
        'AR/VR'
      ]
    }
  ]

  return (
    <div className='w-[85vw]'>
      {/* Header */}
      <div className='px-6 py-2 border-b border-gray-200'>
        <h3 className='text-gray-900 text-base lg:text-xl font-bold mb-2'>Technologies We Use</h3>
        <h4 className='text-orange-500 text-lg lg:text-2xl font-bold'>Cutting-Edge Development Stack</h4>
      </div>

      {/* Technologies Grid */}
      <div className='p-6'>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 mb-6'>
          {technologyCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div key={index} className='space-y-2'>
                {/* Category Header */}
                <div className='flex items-center space-x-2 pb-2 border-b border-gray-200'>
                  <IconComponent className='w-4 h-4 text-orange-500' />
                  <h5 className='text-xs lg:text-sm text-gray-900 font-semibold'>{category.header}</h5>
                </div>
              
                {/* Services List */}
                <div className='space-y-1'>
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className='text-xs lg:text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 hover:ring hover:ring-gray-200 px-1 py-1 rounded transition-colors cursor-pointer'
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
            Explore Our Technology Stack
          </button>
        </div>
      </div>
    </div>
  )
}