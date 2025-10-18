'use client'
import { motion } from 'framer-motion'
import { DotPattern } from '../ui/dot-pattern'
import { CheckCircle } from 'lucide-react'

interface KeyFeaturesProps {
  features: string[]
  techName: string
}

export default function KeyFeatures({ features, techName }: KeyFeaturesProps) {
  return (
    <div className="relative z-10">
      <DotPattern opacity={0.4}/>
      
      <div className="relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            Key Features of {techName}
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            What makes {techName} powerful for your projects
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
              <span className="text-white font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

