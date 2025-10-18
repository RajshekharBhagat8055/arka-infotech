'use client'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { motion } from 'framer-motion'
import TransitionLink from '../TransitionLink'
import { ArrowRight } from 'lucide-react'
import * as SiIcons from 'react-icons/si'
import { IconType } from 'react-icons'

interface OtherTech {
  name: string
  slug: string
  icon: string
  description: string
}

interface OtherTechnologiesProps {
  technologies: OtherTech[]
  currentSlug: string
}

// Icon colors matching the brand colors
const iconColors: Record<string, string> = {
  SiAmazonaws: '#FF9900',
  SiMicrosoftazure: '#0078D4',
  SiGooglecloud: '#4285F4',
  SiDigitalocean: '#0080FF'
}

export default function OtherTechnologies({ technologies, currentSlug: _currentSlug }: OtherTechnologiesProps) {
  return (
    <section className="py-20 bg-gray-50">
      <MaxWidthWrapper>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Other Cloud Technologies We Work With
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Multi-cloud expertise across leading platforms
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = (SiIcons as Record<string, IconType>)[tech.icon]
            const iconColor = iconColors[tech.icon] || '#FF9900'
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TransitionLink 
                  href={`/cloud/${tech.slug}`}
                  name={tech.name}
                  className="block h-full"
                >
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
                    className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-300 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-16 rounded-lg bg-gradient-to-br from-gray-50 to-white flex items-center justify-center border border-gray-100">
                        {IconComponent && (
                          <IconComponent 
                            className="w-10 h-10" 
                            style={{ color: iconColor }}
                          />
                        )}
                      </div>
                      <ArrowRight className="size-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </motion.div>
                </TransitionLink>
              </motion.div>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

