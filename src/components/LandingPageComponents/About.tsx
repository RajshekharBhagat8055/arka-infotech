'use client'
import React from 'react';
import { Users, Briefcase, Award, Globe, Clock, Building } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { motion } from 'framer-motion';
import { DotPattern } from '../ui/dot-pattern';
import TransitionLink from '../TransitionLink';

const stats = [
  {
    icon: Users,
    number: "20+",
    label: "Full Time Technical Team",
  },
  {
    icon: Briefcase,
    number: "150+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "110+",
    label: "Successful Projects",
  },
  {
    icon: Globe,
    number: "95%",
    label: "Customer Satisfaction",
  },
  {
    icon: Clock,
    number: "6+",
    label: "Years of Experience",
  },
  {
    icon: Building,
    number: "2+",
    label: "Offices Worldwide",
  },
];

export default function About() {
  return (
    <section className="relative py-20 bg-black text-white">
      <DotPattern opacity={0.2} />
      <MaxWidthWrapper className="text-center">
        {/* Header */}
        <motion.div 
          className="mb-16"
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
            Arka Infotech Software Solution is a leading technology company delivering innovative solutions to businesses across the globe. With 6+ years of experience and a team of 20+ expert professionals, we transform ideas into reality.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div 
                key={index} 
                className='flex flex-col items-center gap-2'
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
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
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <TransitionLink href="/contact" name="Contact Us">
            <motion.button 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold"
              whileHover={{ backgroundColor: "rgb(234 88 12)" }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
            </motion.button>
          </TransitionLink>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
