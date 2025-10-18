'use client'
import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

interface Industry {
  name: string
  applications: string[]
}

interface IndustriesProps {
  industries: Industry[]
  techName: string
}

export default function Industries({ industries, techName }: IndustriesProps) {
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
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Industries We Serve
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          {techName} solutions across diverse sectors
        </p>
      </motion.div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-orange-500" />
              {industry.name}
            </h3>
            <ul className="space-y-2">
              {industry.applications.map((app, appIndex) => (
                <li key={appIndex} className="flex items-start gap-2 text-gray-700">
                  <span className="text-orange-500">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </>
  )
}

