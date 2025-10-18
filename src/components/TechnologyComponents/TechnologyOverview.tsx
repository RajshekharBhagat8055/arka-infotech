'use client'
import { motion } from 'framer-motion'

interface TechnologyOverviewProps {
  overview: string
  techName: string
}

export default function TechnologyOverview({ overview, techName }: TechnologyOverviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 md:p-12"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
        About {techName}
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        {overview}
      </p>
    </motion.div>
  )
}

