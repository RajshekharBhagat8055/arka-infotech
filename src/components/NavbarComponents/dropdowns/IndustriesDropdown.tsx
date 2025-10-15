import React from 'react'
import { 
  Plane, 
  Home, 
  DollarSign, 
  GraduationCap, 
  Building2, 
  Video, 
  UtensilsCrossed, 
  CreditCard, 
  Fuel, 
  Heart, 
  Truck, 
  Car, 
  PlaneTakeoff, 
  BookOpen, 
  ShoppingBag, 
  Zap, 
  Trophy, 
  Hammer, 
  Wallet 
} from 'lucide-react'

export default function IndustriesDropdown() {
  const industries = [
    { icon: Plane, name: 'Travel & Hospitality' },
    { icon: Home, name: 'Mortgage & Lending' },
    { icon: DollarSign, name: 'Finance' },
    { icon: GraduationCap, name: 'E-Learning & Education' },
    { icon: Building2, name: 'Real Estate' },
    { icon: Video, name: 'Media & Entertainment' },
    { icon: UtensilsCrossed, name: 'Food & Beverage' },
    { icon: CreditCard, name: 'Banking & Payment' },
    { icon: Fuel, name: 'Oil & Gas' },
    { icon: Heart, name: 'Healthcare' },
    { icon: Truck, name: 'Logistics' },
    { icon: Car, name: 'Automotive' },
    { icon: PlaneTakeoff, name: 'Aviation' },
    { icon: BookOpen, name: 'Publishing' },
    { icon: ShoppingBag, name: 'Retail/FMCG' },
    { icon: Zap, name: 'Energy & Utilities' },
    { icon: Trophy, name: 'Sports' },
    { icon: Hammer, name: 'Construction' },
    { icon: Wallet, name: 'Fintech' }
  ]

  return (
    <div className='w-[60vw]'>
      {/* Header */}
      <div className='px-6 py-2 border-b border-gray-200'>
        <h3 className='text-gray-900 text-base lg:text-xl font-bold mb-2'>Industries We Serve</h3>
        <h4 className='text-orange-500 text-lg lg:text-2xl font-bold'>Tailored Solutions for Every Sector</h4>
      </div>

      {/* Industries Grid */}
      <div className='p-6'>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-6'>
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <div 
                key={index}
                className='group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 hover:ring hover:ring-gray-200 transition-all cursor-pointer'
              >
                {/* Icon */}
                <div className='w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors'>
                  <IconComponent className='w-4 h-4 text-orange-500 group-hover:text-white transition-colors' />
                </div>
                
                {/* Name */}
                <h5 className='text-gray-900 font-medium text-sm lg:text-base group-hover:text-orange-500 transition-colors leading-tight'>
                  {industry.name}
                </h5>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className='mt-6'>
          <button className='w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'>
            Explore Industry Solutions
          </button>
        </div>
      </div>
    </div>
  )
}