'use client'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'

interface UseCase {
  title: string
  description: string
  icon: string
}

interface UseCasesProps {
  useCases: UseCase[]
  techName: string
}

export default function UseCases({ useCases, techName }: UseCasesProps) {
  return (
    <>
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-600 uppercase tracking-wide mb-3">
          Use Cases
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          What You Can Build with {techName}
        </h3>
        <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-7xl mx-auto">
          Real-world applications powered by {techName}
        </p>
      </motion.div>

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {useCases.map((useCase, index) => {
          const IconComponent = (LucideIcons as any)[useCase.icon] || LucideIcons.Lightbulb
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="size-14 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                <IconComponent className="size-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}

