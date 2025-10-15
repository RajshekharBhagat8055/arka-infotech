'use client'
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Rocket, Building2, Briefcase, ArrowRight, CheckCircle2, LucideIcon } from 'lucide-react';
import { DotPattern } from '../ui/dot-pattern';

interface SolutionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  ctaText: string;
}

function SolutionCard({ solution }: { solution: SolutionCardProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = solution.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 overflow-hidden"
      animate={{
        borderColor: isHovered ? "rgb(249 115 22)" : "rgba(255, 255, 255, 0.1)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgb(249 115 22) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Orange Accent Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div 
          className="mb-6 w-16 h-16 rounded-xl bg-orange-500 flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {solution.title}
          </h3>
          <p className="text-orange-400 font-semibold text-lg">
            {solution.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {solution.features.map((feature, i) => (
            <motion.li 
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold w-full justify-center"
          whileHover={{ 
            backgroundColor: "rgb(234 88 12)",
            gap: "12px"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {solution.ctaText}
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}

const solutions: SolutionCardProps[] = [
  {
    title: "Startup Launchpad",
    subtitle: "Launch & Scale Fast",
    description: "Conquer the challenges of rapid scaling, budget constraints, and market validation with our proven expertise.",
    features: [
      "Get to market fast and cost-effectively with MVP and SaaS development",
      "Align technology with business goals through our CTO-as-a-Service offering",
      "Make data-driven decisions using our Analytics and DevOps services",
      "Avoid costly mistakes with expert Technology Consulting for long-term success"
    ],
    icon: Rocket,
    ctaText: "Launch Your Startup"
  },
  {
    title: "Enterprise Evolution",
    subtitle: "Transform & Optimize",
    description: "Overcome challenges related to scalability, security, maintenance, and cost-effectiveness as your business grows.",
    features: [
      "Revitalize outdated systems with Application Modernization expertise",
      "Custom Software Development for secure, enterprise-grade solutions",
      "Ensure exceptional performance with comprehensive QA & Testing services",
      "Enhanced scalability, security, and efficiency through Cloud Development"
    ],
    icon: Building2,
    ctaText: "Evolve Your Enterprise"
  },
  {
    title: "Agency Acceleration",
    subtitle: "Scale & Deliver",
    description: "Navigate complex tech landscapes to deliver exceptional, tailored software solutions for your clients.",
    features: [
      "Access top-tier tech talent through Software Consulting & Development",
      "Deliver highest-quality software with rigorous QA & Testing processes",
      "Adapt to project demands with flexible Staff Augmentation solutions",
      "Expand your portfolio effortlessly with White Label development services"
    ],
    icon: Briefcase,
    ctaText: "Accelerate Your Agency"
  }
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <DotPattern opacity={0.4} />
      <MaxWidthWrapper>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-500 uppercase tracking-wide mb-3">
            Solutions For All
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
            Leading the Industry With Excellence
          </h3>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-7xl mx-auto">
            We craft transformative software solutions to empower businesses of all sizes.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
              }
            }
          }}
        >
          {solutions.map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}

