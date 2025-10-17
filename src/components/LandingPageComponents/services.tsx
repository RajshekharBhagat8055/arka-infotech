'use client'
import React, { useState } from 'react';
import { Code, Smartphone, Globe, ShoppingCart, Cloud, Users, Puzzle, Shield, Database, LucideIcon } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { motion } from 'framer-motion';
import TransitionLink from '../TransitionLink';

interface ServiceProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceCard({ service }: { service: ServiceProps }) {
  const IconComponent = service.icon;
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
      whileHover={{
        borderColor: "rgb(249 115 22)",
        scale: 1.01,
        boxShadow: "0 4px 24px 0 rgb(0 0 0 / 0.5)"
      }}
      className="relative overflow-clip z-20 border p-3 md:p-6 rounded-xl cursor-pointer bg-white flex flex-col h-full"
    >
      <motion.div 
        className='absolute -z-10 left-0 top-0 w-full h-full rounded-full bg-orange-50'
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2 : 0 }}
        transition={{ duration: 0.7 }}
      />
      
      {/* Icon & Title */}
      <div className="mb-4 flex items-center gap-3">
        <div className="size-14 md:size-16 rounded-lg flex items-center justify-center shadow-sm">
          <IconComponent className="size-8 md:size-10 text-orange-500" />
        </div>
        <h4 className="text-xl font-bold text-gray-900">
          {service.title}
        </h4>
      </div>

      {/* Content - Takes available space */}
      <p className="text-gray-600 leading-relaxed flex-1 mb-4">
        {service.description}
      </p>

      {/* Action Buttons - Always at bottom, visible on mobile, animated on desktop */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        {/* Mobile: Always visible */}
        <div className="flex gap-3 items-center md:hidden">
          <button className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">
            Learn More
          </button>
          <span className="text-gray-300">|</span>
          <TransitionLink href="/contact" name="Contact Us" className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">
            Contact Us
          </TransitionLink>
        </div>
        
        {/* Desktop: Animated on hover */}
        <motion.div 
          className="hidden md:flex gap-3 items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : -10
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <TransitionLink href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">
            Learn More
          </TransitionLink>
          <span className="text-gray-300">|</span>
          <TransitionLink href="/contact" name="Contact Us" className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">
            Contact Us
          </TransitionLink>
        </motion.div>
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Whether you're looking to create a custom app from scratch or modernise an existing one to match the latest technology trends, we can develop it according to your preferences.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Your doorway to the world of the web. Get a customized and user-friendly website loaded with the latest technology stack.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Get ready to sell! We develop robust and user-friendly E-Commerce platforms to streamline your online sales and maximize your reach.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Effortlessly streamline your operations and enhance security with our comprehensive cloud implementation and migration services.",
  },
  {
    icon: Users,
    title: "CRM",
    description: "We develop custom CRM software designed to streamline and enhance your business operations, boosting customer loyalty and efficiency.",
  },
  {
    icon: Puzzle,
    title: "API Dev & Integration",
    description: "We build robust, scalable APIs for seamless data exchange. Our expertise includes RESTful, GraphQL, and third-party integrations, delivering secure and efficient solutions.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform your raw data into actionable insights with our comprehensive data engineering solutions and analytics services.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Protect your digital assets with our advanced cybersecurity solutions, ensuring your business stays secure against evolving threats.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <MaxWidthWrapper className=" mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-600 uppercase tracking-wide mb-3">
            Services
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
            Bridging Innovation & Excellence With Modern Tech Solutions
          </h3>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-7xl mx-auto">
            We develop cutting-edge solutions and transform existing ones through collaborative development that prioritises your success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
