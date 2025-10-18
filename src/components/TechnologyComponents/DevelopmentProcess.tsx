'use client'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { motion } from 'framer-motion'

interface ProcessPhase {
  phase: string
  title: string
  description: string
  deliverables: string[]
}

interface DevelopmentProcessProps {
  process: ProcessPhase[]
  techName: string
}

export default function DevelopmentProcess({ process, techName }: DevelopmentProcessProps) {
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
            Our {techName} Development Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology for successful project delivery
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-200 via-orange-300 to-orange-200" />

          {/* Process Steps */}
          <div className="space-y-12">
            {process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Phase Number */}
                <div className="lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10 size-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="w-full lg:w-[calc(50%-4rem)]">
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)" }}
                    className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 shadow-md"
                  >
                    <div className="inline-block px-3 py-1 bg-orange-100 rounded-full mb-3">
                      <span className="text-orange-600 font-semibold text-sm">
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="size-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

