'use client'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

interface Reason {
  title: string
  description: string
  icon: string
}

interface WhyChooseTechProps {
  reasons: Reason[]
  techName: string
}

export default function WhyChooseTech({ reasons, techName }: WhyChooseTechProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
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
            Why Choose {techName}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Key advantages of building with {techName}
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = (LucideIcons as any)[reason.icon] || LucideIcons.CheckCircle
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="size-14 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                  <IconComponent className="size-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

