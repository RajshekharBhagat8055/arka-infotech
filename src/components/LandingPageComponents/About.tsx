'use client'
import React, { useRef } from 'react';
import { Users, Briefcase, Award, Globe, Clock, Building } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { motion, useInView } from 'framer-motion';
import { DotPattern } from '../ui/dot-pattern';

const stats = [
  {
    icon: Users,
    number: "1,000+",
    label: "Full Time Technical Team",
  },
  {
    icon: Briefcase,
    number: "15,000+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "27,000+",
    label: "Successful Projects",
  },
  {
    icon: Globe,
    number: "95%",
    label: "Customer Satisfaction",
  },
  {
    icon: Clock,
    number: "23+",
    label: "Years of Experience",
  },
  {
    icon: Building,
    number: "6+",
    label: "Offices Worldwide",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 px-4 bg-black text-white">
      <DotPattern opacity={0.2} />
      <MaxWidthWrapper className="">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-500 uppercase tracking-wide mb-3">
            About Us
          </h2>
          <h3  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            Trusted By Businesses Worldwide
          </h3>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-7xl mx-auto">
            Arka Infotech Software Solution is a leading technology company delivering innovative solutions to businesses across the globe. With decades of experience and a team of expert professionals, we transform ideas into reality.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
              }
            }
          }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className='flex flex-col items-center gap-2'
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                    duration: 0.3,
                    ease: "easeOut"
                    }
                  }
                }}
              >
                <div className="size-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <IconComponent className="size-6 text-white" />
                </div>
                <div className="text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.button 
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold"
            whileHover={{ backgroundColor: "rgb(234 88 12)" }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More About Us
          </motion.button>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
