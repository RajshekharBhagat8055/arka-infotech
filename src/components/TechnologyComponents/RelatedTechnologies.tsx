'use client'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { motion } from 'framer-motion'
import TransitionLink from '../TransitionLink'
import { ArrowRight } from 'lucide-react'

interface RelatedTech {
  name: string
  slug: string
}

interface RelatedTechnologiesProps {
  technologies: RelatedTech[]
  currentSlug: string
}

export default function RelatedTechnologies({ technologies, currentSlug: _currentSlug }: RelatedTechnologiesProps) {
  return (
    <section className="py-20 bg-white">
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
            Related Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Other technologies that work great together
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <TransitionLink 
                href={`/technology/${tech.slug}`}
                name={tech.name}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
                  className="bg-gradient-to-br from-orange-50 to-white px-6 py-3 rounded-lg border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 flex items-center gap-2"
                >
                  <span className="font-semibold text-gray-800">{tech.name}</span>
                  <ArrowRight className="size-4 text-orange-500" />
                </motion.div>
              </TransitionLink>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

