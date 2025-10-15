import React from 'react';
import { ArrowRight, Code, Smartphone, Globe, ShoppingCart, Brain, Users, Building2 } from 'lucide-react';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function Hero() {
  const expertiseAreas = [
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
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <MaxWidthWrapper className='max-w-7xl'>
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-gray-900">
          Empowering Businesses With{' '}
          <span className="text-orange-500">AI, Data Analytics & Cloud</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mb-8 max-w-3xl">
          Arka Infotech Software Solution delivers cutting-edge technology services to transform your business and drive innovation.
        </p>
      </MaxWidthWrapper>

      {/* Key Areas of Expertise */}
      <MaxWidthWrapper className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Key Areas of Our Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon
            return (
              <div
                key={index}
                className="group flex items-center p-2 bg-white rounded-full gap-2 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="size-6 md:size-7 lg:size-8 xl:size-10 bg-orange-100 rounded-full flex items-center justify-center transition-colors">
                  <IconComponent className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 font-medium text-sm text-center group-hover:text-orange-500 transition-colors leading-tight">
                  {area.name}
                </h3>
              </div>
            )
          })}
        </div>
      </MaxWidthWrapper>

      {/* CTA Buttons */}
      <MaxWidthWrapper   className="flex flex-col sm:flex-row gap-4">
        <button className="group bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
          Let's Talk About Your Business
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
          View Our Services
        </button>
      </MaxWidthWrapper>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-16 border-t border-gray-200 mt-16">
        <div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">70%</div>
          <div className="text-gray-600 text-sm sm:text-base">Cost Savings</div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">80%</div>
          <div className="text-gray-600 text-sm sm:text-base">Productivity Boost</div>
        </div>
        <div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">95%</div>
          <div className="text-gray-600 text-sm sm:text-base">Threat Prevention</div>
        </div>
      </div>
    </section>
  );
}
