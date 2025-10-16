'use client'

import React from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Menu } from 'lucide-react'
import { Palette, Building2, Wrench, TrendingUp, Cloud, Shield, Database, Globe, Code } from 'lucide-react'

export default function MobileNav() {
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

  const cloudServices = [
    { name: 'AWS Services', icon: Cloud },
    { name: 'Azure Solutions', icon: Cloud },
    { name: 'Google Cloud', icon: Cloud },
    { name: 'Cloud Migration', icon: Cloud },
  ]

  const dataAIServices = [
    { name: 'Data Analytics', icon: Database },
    { name: 'Machine Learning', icon: Database },
    { name: 'AI Solutions', icon: Database },
    { name: 'Business Intelligence', icon: Database },
  ]

  const securityServices = [
    { name: 'Cybersecurity', icon: Shield },
    { name: 'Security Audit', icon: Shield },
    { name: 'Compliance', icon: Shield },
    { name: 'Risk Management', icon: Shield },
  ]

  const industries = [
    { name: 'Healthcare', icon: Globe },
    { name: 'Finance', icon: Globe },
    { name: 'E-commerce', icon: Globe },
    { name: 'Education', icon: Globe },
    { name: 'Manufacturing', icon: Globe },
  ]

  const technologies = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'Java', icon: Code },
    { name: 'AWS', icon: Code },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='xl:hidden text-gray-700 hover:text-gray-900 transition-colors'>
          <Menu className='w-6 h-6' />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] z-[99999] sm:w-[400px] overflow-y-auto px-3 pt-10">
        <SheetHeader className='border rounded-2xl bg-gray-100'>
          <SheetTitle className="text-2xl text-center font-bold text-gray-900">Arka Infotech Software Solutions LLP</SheetTitle>
        </SheetHeader>

        <div className="">
          <Accordion type="single" collapsible className="w-full">
            {/* Services */}
            <AccordionItem value="services" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-orange-500">
                Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-2">
                  {serviceCategories.map((category, index) => {
                    const IconComponent = category.icon
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <IconComponent className="w-4 h-4 text-orange-500" />
                          <span>{category.header}</span>
                        </div>
                        <div className="pl-4 space-y-2">
                          {category.services.map((service, serviceIndex) => {
                            const slug = service.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
                            return (
                              <SheetClose asChild key={serviceIndex}>
                                <Link
                                  href={`/services/${slug}`}
                                  className="block text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                                >
                                  {service}
                                </Link>
                              </SheetClose>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cloud */}
            <AccordionItem value="cloud" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-orange-500">
                Cloud
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-2">
                  {cloudServices.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <SheetClose asChild key={index}>
                        <Link
                          href="#cloud"
                          className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Data & AI */}
            <AccordionItem value="data-ai" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-orange-500">
                Data & AI
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-2">
                  {dataAIServices.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <SheetClose asChild key={index}>
                        <Link
                          href="#data-ai"
                          className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Security */}
            <AccordionItem value="security" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-orange-500">
                Security
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-2">
                  {securityServices.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <SheetClose asChild key={index}>
                        <Link
                          href="#security"
                          className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Industries */}
            <AccordionItem value="industries" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-orange-500">
                Industries
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-2">
                  {industries.map((industry, index) => {
                    const IconComponent = industry.icon
                    return (
                      <SheetClose asChild key={index}>
                        <Link
                          href="#industries"
                          className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{industry.name}</span>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* On-Demand Developer (No Dropdown) */}
            <div className="border-b border-gray-200">
              <SheetClose asChild>
                <Link
                  href="#on-demand-developer"
                  className="flex items-center py-4 text-base font-semibold text-gray-900 hover:text-orange-500"
                >
                  On-Demand Developer
                </Link>
              </SheetClose>
            </div>

            {/* Technologies */}
            <AccordionItem value="technologies" className="border-b border-gray-200">
              <AccordionTrigger className="text-base font-semibold text-gray-900 hover:text-orange-500">
                Technologies
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-2">
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon
                    return (
                      <SheetClose asChild key={index}>
                        <Link
                          href="#technologies"
                          className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{tech.name}</span>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Success Stories */}
            <div className="border-b border-gray-200">
              <SheetClose asChild>
                <Link
                  href="#success-stories"
                  className="flex items-center py-4 text-base font-semibold text-gray-900 hover:text-orange-500"
                >
                  Success Stories
                </Link>
              </SheetClose>
            </div>
          </Accordion>

          {/* CTA Button */}
          <div className="mt-6 px-4 mb-10">
            <SheetClose asChild>
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Close
              </button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

