'use client'
import { motion } from 'framer-motion'
import { DotPattern } from '../ui/dot-pattern'
import * as LucideIcons from 'lucide-react'

interface Tool {
  name: string
  icon: string
  lucideIcon: string
  description: string
}

interface ToolCategory {
  category: string
  items: Tool[]
}

interface CloudToolsProps {
  tools: ToolCategory[]
  providerName: string
}

export default function CloudTools({ tools, providerName }: CloudToolsProps) {
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
            {providerName} Tools We Work With
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Expertise across the entire {providerName} service ecosystem
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-12">
          {tools.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-orange-500 mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((tool, toolIndex) => {
                  const IconComponent = (LucideIcons as any)[tool.lucideIcon] || LucideIcons.Cloud
                  
                  return (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: toolIndex * 0.05 }}
                      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(249,115,22,0.5)" }}
                      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="size-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="size-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2">
                            {tool.name}
                          </h4>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

