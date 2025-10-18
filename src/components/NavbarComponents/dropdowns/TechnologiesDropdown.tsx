import React from 'react'
import { 
  Smartphone, 
  ShoppingCart, 
  FolderOpen, 
  Code, 
  Layers, 
  Gamepad2, 
  Cloud, 
  Link2 
} from 'lucide-react'
import TransitionLink from '@/components/TransitionLink'

export default function TechnologiesDropdown() {
  const technologyCategories = [
    {
      icon: Smartphone,
      header: 'Mobile Apps',
      services: [
        { name: 'Android', slug: 'android' },
        { name: 'React Native', slug: 'react-native' },
        { name: 'iOS', slug: 'ios' },
        { name: 'Flutter', slug: 'flutter' },
        { name: 'Swift', slug: 'swift' },
        { name: 'Kotlin', slug: 'kotlin' },
        { name: 'Xamarin', slug: 'xamarin' }
      ]
    },
    {
      icon: ShoppingCart,
      header: 'Ecommerce',
      services: [
        { name: 'Shopify', slug: 'shopify' },
        { name: 'WooCommerce', slug: 'woocommerce' }
      ]
    },
    {
      icon: FolderOpen,
      header: 'CMS',
      services: [
        { name: 'WordPress', slug: 'wordpress' }
      ]
    },
    {
      icon: Code,
      header: 'Custom Development',
      services: [
        { name: 'PHP', slug: 'php' },
        { name: 'Laravel', slug: 'laravel' },
        { name: 'Ruby on Rails', slug: 'ruby-on-rails' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'Python', slug: 'python' },
        { name: 'DotNet', slug: 'dotnet' },
        { name: 'Node.js', slug: 'nodejs' },
        { name: 'Angular', slug: 'angular' },
        { name: 'Spring', slug: 'spring' },
        { name: 'C#', slug: 'csharp' }
      ]
    },
    {
      icon: Layers,
      header: 'Full Stack Development',
      services: [
        { name: 'MEAN', slug: 'mean-stack' },
        { name: 'MERN', slug: 'mern' },
        { name: 'Java', slug: 'java' },
        { name: 'React', slug: 'react' }
      ]
    },
    {
      icon: Gamepad2,
      header: 'Games',
      services: [
        { name: 'Unity', slug: 'unity' }
      ]
    },
    {
      icon: Cloud,
      header: 'Cloud',
      services: [
        { name: 'AWS', slug: 'aws', isCloud: true },
        { name: 'Azure', slug: 'azure', isCloud: true },
        { name: 'Google Cloud', slug: 'gcp', isCloud: true },
        { name: 'DigitalOcean', slug: 'digitalocean', isCloud: true }
      ]
    },
    {
      icon: Link2,
      header: 'Other',
      services: [
        { name: 'Golang', slug: 'golang' }
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
                  {category.services.map((service, serviceIndex) => {
                    // Check if it's a cloud service
                    const isCloudService = 'isCloud' in service && service.isCloud
                    const href = isCloudService 
                      ? `/cloud/${service.slug}` 
                      : `/technology/${service.slug}`
                    
                    return (
                      <TransitionLink
                        key={serviceIndex}
                        href={href}
                        name={service.name}
                        className='block text-xs lg:text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 hover:ring hover:ring-gray-200 px-1 py-1 rounded transition-colors cursor-pointer'
                      >
                        {service.name}
                      </TransitionLink>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className='mt-6'>
          <TransitionLink href="/technology/react-native" name="Explore Technologies">
            <button className='w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
              Explore Our Technology Stack
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  )
}