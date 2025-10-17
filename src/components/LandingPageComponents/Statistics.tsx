'use client'
import { useEffect, useRef, useState } from "react"
import MaxWidthWrapper from "../MaxWidthWrapper"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { DollarSign, TrendingUp, Shield, LucideIcon } from "lucide-react"

interface StatisticItem {
  value: number
  label: string
  title: string
  description: string
  icon: LucideIcon
}

const statisticsData: StatisticItem[] = [
  {
    value: 70,
    label: "Cost Savings",
    title: "Smarter Development Investments",
    description: "Our strategic development model offers cost-effective solutions, balancing on-premise and nearshore resources to reduce expenses while maintaining top-tier quality.",
    icon: DollarSign
  },
  {
    value: 80,
    label: "Productivity Boost",
    title: "Enhanced Efficiency & Performance",
    description: "Leverage our agile development approach and skilled team to accelerate workflows, streamline operations, and increase overall productivity.",
    icon: TrendingUp
  },
  {
    value: 95,
    label: "Threat Prevention",
    title: "Enterprise-Grade Security",
    description: "Our robust security framework, backed by industry best practices, safeguards your solutions from evolving cyber threats, ensuring data integrity and compliance.",
    icon: Shield
  }
]

function AnimatedCounter({ value, inView }: { value: number; inView: boolean }) {
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
  }, [springValue])

  return <>{displayValue}%</>
}

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <MaxWidthWrapper className="">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Driving Success
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            Optimise Savings for Exponential Growth
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {statisticsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }}
                className="flex flex-col text-center items-center"
              >
            
                {/* Percentage */}
                <div className="text-5xl md:text-6xl font-bold mb-2 text-gray-900">
                  <AnimatedCounter value={stat.value} inView={isInView} />
                </div>

                {/* Label */}
                <div className="text-orange-500 font-semibold text-lg mb-4">
                  {stat.label}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-center">
                  {stat.description}
                </p>
              </motion.div>
            )
          )}
        </div>
      </MaxWidthWrapper>
    </div>
  )
}