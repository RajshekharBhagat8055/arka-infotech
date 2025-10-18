'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import * as SiIcons from 'react-icons/si'
import { IconType } from 'react-icons'
import { DotPattern } from '../ui/dot-pattern'

interface Technology {
  name: string
  icon: string
  color: string
}

interface TechCategory {
  category: string
  items: Technology[]
}

interface TechStackProps {
  techStack: TechCategory[]
  techName: string
}

export default function TechStack({ techStack, techName }: TechStackProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="relative bg-black p-4 md:p-8 lg:p-12 rounded-2xl overflow-clip">
      <DotPattern opacity={0.4}/>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 text-center">
          {techName} Technology Stack
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Complementary technologies we use with {techName}
        </p>
        
        {/* Tabs */}
        <div className="flex items-center md:justify-center overflow-x-auto gap-2 md:gap-4 mb-10 pb-2">
          {techStack.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-2 md:px-4 py-2 rounded-lg text-xs md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                activeTab === index
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1 md:gap-2">
                <Package className="w-4 h-4 md:w-5 md:h-5" />
                <span>{category.category}</span>
              </div>
              
              {activeTab === index && (
                <motion.div
                  layoutId="activeTechTab"
                  className="absolute inset-0 bg-orange-500 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tech Display */}
        <div className="min-h-[200px]">
          {techStack.map((category, index) => (
            activeTab === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {category.items.map((tech, techIndex) => {
                  const IconComponent = (SiIcons as Record<string, IconType>)[tech.icon]
                  return (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-orange-500 rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                    >
                      <div className="flex items-center gap-3">
                        {IconComponent && (
                          <IconComponent 
                            className="w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:scale-110" 
                            style={{ color: tech.color }}
                          />
                        )}
                        <span className="text-sm md:text-base font-semibold text-white">
                          {tech.name}
                        </span>
                      </div>
                      
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                        style={{ backgroundColor: tech.color }}
                      />
                    </motion.div>
                  )
                })}
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

