'use client'

import React, { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Menu } from 'lucide-react'
import { Palette, Building2, Wrench, TrendingUp, Cloud, Shield, Database, Globe, Code } from 'lucide-react'
import TransitionLink from '../TransitionLink'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
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
    { name: 'AWS', icon: Cloud, slug: 'aws' },
    { name: 'Azure', icon: Cloud, slug: 'azure' },
    { name: 'Google Cloud Platform', icon: Cloud, slug: 'gcp' },
    { name: 'DigitalOcean', icon: Cloud, slug: 'digitalocean' },
  ]

  const dataAIServices = [
    { name: 'Data Strategy Consulting', icon: Database, slug: 'data-strategy-consulting' },
    { name: 'Data Processing', icon: Database, slug: 'data-processing' },
    { name: 'Data Governance', icon: Database, slug: 'data-governance' },
    { name: 'Data Storage', icon: Database, slug: 'data-storage' },
    { name: 'Data Quality Management', icon: Database, slug: 'data-quality-management' },
    { name: 'Data Modelling', icon: Database, slug: 'data-modelling' },
    { name: 'Data Architecture', icon: Database, slug: 'data-architecture' },
    { name: 'Analytics & Visualization', icon: Database, slug: 'analytics-visualization' },
    { name: 'Cloud Data Migration', icon: Database, slug: 'cloud-data-migration' },
    { name: 'Custom AI Development', icon: Database, slug: 'custom-ai-development' },
    { name: 'AI Consulting Strategy', icon: Database, slug: 'ai-consulting-strategy' },
    { name: 'AI Business Intelligence', icon: Database, slug: 'ai-business-intelligence' },
    { name: 'Large Language Models', icon: Database, slug: 'large-language-models' },
    { name: 'AI Personalized Experience', icon: Database, slug: 'ai-personalized-customer-experience' },
    { name: 'Blockchain', icon: Database, slug: 'blockchain' },
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
    { name: 'React Native', icon: Code, slug: 'react-native' },
    { name: 'Flutter', icon: Code, slug: 'flutter' },
    { name: 'Node.js', icon: Code, slug: 'nodejs' },
    { name: 'React', icon: Code, slug: 'react' },
    { name: 'Python', icon: Code, slug: 'python' },
    { name: 'Angular', icon: Code, slug: 'angular' },
    { name: 'Laravel', icon: Code, slug: 'laravel' },
    { name: 'WordPress', icon: Code, slug: 'wordpress' },
  ]

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className='xl:hidden text-gray-700 hover:text-gray-900 transition-colors'>
          <Menu className='w-6 h-6' />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] z-[99999] sm:w-[400px] overflow-y-auto px-3 pt-10">
        <SheetHeader className='border rounded-2xl bg-gray-100'>
          <SheetTitle className="text-2xl text-center font-bold text-gray-900">Arka Infotech Software Solutions LLP</SheetTitle>
          <SheetDescription className="text-center text-gray-600 text-sm">
            Navigate through our services and solutions
          </SheetDescription>
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
                              <TransitionLink
                                key={serviceIndex}
                                href={`/services/${slug}`}
                                name={service}
                                onClick={handleClose}
                                className="block text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                              >
                                {service}
                              </TransitionLink>
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
                      <TransitionLink
                        key={index}
                        href={`/cloud/${service.slug}`}
                        name={service.name}
                        onClick={handleClose}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{service.name}</span>
                      </TransitionLink>
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
                      <TransitionLink
                        key={index}
                        href={`/data-ai/${service.slug}`}
                        name={service.name}
                        onClick={handleClose}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{service.name}</span>
                      </TransitionLink>
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
                      <TransitionLink
                        key={index}
                        href="#security"
                        onClick={handleClose}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{service.name}</span>
                      </TransitionLink>
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
                      <TransitionLink
                        key={index}
                        href="#industries"
                        onClick={handleClose}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{industry.name}</span>
                      </TransitionLink>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* On-Demand Developer (No Dropdown) */}
            <div className="border-b border-gray-200">
              <TransitionLink
                href="#on-demand-developer"
                onClick={handleClose}
                className="flex items-center py-4 text-base font-semibold text-gray-900 hover:text-orange-500"
              >
                On-Demand Developer
              </TransitionLink>
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
                      <TransitionLink
                        key={index}
                        href={`/technology/${tech.slug}`}
                        name={tech.name}
                        onClick={handleClose}
                        className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-white hover:bg-orange-500 bg-gray-50 border border-gray-200 px-3 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{tech.name}</span>
                      </TransitionLink>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Success Stories */}
            <div className="border-b border-gray-200">
              <TransitionLink
                href="#success-stories"
                onClick={handleClose}
                className="flex items-center py-4 text-base font-semibold text-gray-900 hover:text-orange-500"
              >
                Success Stories
              </TransitionLink>
            </div>
          </Accordion>

          {/* CTA Buttons */}
          <div className="mt-6 px-4 mb-10 space-y-3">
            <TransitionLink href="/contact" name="Contact Us" onClick={handleClose} className="block mb-3 md:mb-0">
              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Get Started
              </button>
            </TransitionLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

