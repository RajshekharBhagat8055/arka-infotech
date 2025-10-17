'use client'
import React, { useState } from 'react';
import { Shield, Zap, HeadphonesIcon, TrendingUp, Users2, Sparkles, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import MaxWidthWrapper from '../MaxWidthWrapper';

interface ReasonProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ReasonCard({ reason, index }: { reason: ReasonProps; index: number }) {
  const IconComponent = reason.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered ? "rgb(249 115 22)" : "rgb(229 231 235)"
      }}
      className="relative overflow-clip z-20 border p-3 md:p-6 rounded-xl cursor-pointer bg-white"
    >
      {/* Background Effect - Orange expanding circle */}
      <motion.div 
        className='absolute -z-10 left-0 top-0 w-full h-full rounded-full bg-orange-50'
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2 : 0 }}
        transition={{ duration: 0.7 }}
      />

      {/* Icon and Title */}
      <div className="mb-6 flex items-center gap-3">
        <div className="size-14 md:size-16 rounded-lg flex items-center justify-center shadow-sm">
          <IconComponent className="size-8 md:size-10 text-orange-500" />
        </div>
        <h4 className="text-xl font-bold text-gray-900">
          {reason.title}
        </h4>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {reason.description}
      </p>

      {/* Number Badge - Shows on hover */}
      <motion.div 
        className="absolute top-6 right-6 size-10 md:size-12 rounded-full bg-orange-100 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm font-bold text-orange-600">
          {String(index + 1).padStart(2, '0')}
        </span>
      </motion.div>
    </motion.div>
  );
}

const reasons = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "23+ years of experience delivering successful projects across diverse industries with cutting-edge technology solutions.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Agile methodology ensures faster time-to-market without compromising quality, keeping you ahead of the competition.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock support team ready to assist you whenever you need help, ensuring business continuity.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Future-proof applications built to scale with your business growth and evolving market demands.",
  },
  {
    icon: Users2,
    title: "Dedicated Teams",
    description: "Skilled professionals working exclusively on your project, ensuring focused attention and quality delivery.",
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "Leveraging latest technologies like AI, ML, and Cloud to create innovative solutions that drive business value.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <MaxWidthWrapper className="text-center">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-600 uppercase tracking-wide mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
            Your Success Is Our Priority
          </h3>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-7xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that not only meet but exceed your expectations.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
