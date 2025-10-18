'use client'
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface Metric {
  value: number
  suffix: string
  label: string
  description: string
}

interface CloudMetricsProps {
  metrics: Metric[]
  providerName: string
}

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
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
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return <>{formatNumber(displayValue)}{suffix}</>
}

export default function CloudMetrics({ metrics, providerName }: CloudMetricsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Us for {providerName}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">
          Proven expertise delivering exceptional results
        </p>
      </motion.div>

      {/* Metrics Grid */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {metrics.map((metric, index) => (
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
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="flex flex-col text-center items-center"
          >
            {/* Value */}
            <div className="text-5xl md:text-6xl font-bold mb-2 text-gray-900">
              <AnimatedCounter 
                value={metric.value} 
                suffix={metric.suffix}
                inView={isInView} 
              />
            </div>

            {/* Label */}
            <div className="text-orange-500 font-semibold text-lg mb-4">
              {metric.label}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-center">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

