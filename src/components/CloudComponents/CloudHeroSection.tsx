'use client'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { CloudServiceContent } from '@/data/cloud'
import ContactForm from '../Forms/ContactForm'
import { DotPattern } from '../ui/dot-pattern'
import { ArrowRight } from 'lucide-react'

interface CloudHeroSectionProps {
  provider: CloudServiceContent
}

export default function CloudHeroSection({ provider }: CloudHeroSectionProps) {
  return (
    <section className="relative md:p-10 bg-black text-white">
      <DotPattern opacity={0.4} />
      
      <MaxWidthWrapper className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className='mt-20'>
            <div className="inline-block mb-6">
              <span className="text-orange-500 font-bold bg-gradient-to-br border border-gray-200 from-gray-900 to-black px-6 py-2 rounded-full text-sm md:text-base">
                Cloud Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              {provider.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {provider.hero.description}
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 md:p-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all hover:scale-105">
              {provider.hero.ctaText}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <ContactForm 
            serviceName={provider.hero.title}
            serviceCategory="Cloud Solutions"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

