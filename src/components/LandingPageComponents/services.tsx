'use client'
import React, { useRef, useState } from 'react';
import { Code, Smartphone, Globe, ShoppingCart, Cloud, Users, Puzzle, Shield, Database, LucideIcon } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { motion, useInView } from 'framer-motion';

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
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      animate={{
        borderColor: isHovered ? "rgb(249 115 22)" : "rgb(229 231 235)"
      }}
      className="relative overflow-clip z-20 border p-6 rounded-xl cursor-pointer bg-white"
    >
      <motion.div 
        className='absolute -z-10 left-0 top-0 w-full h-full rounded-full bg-orange-50'
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2 : 0 }}
        transition={{ duration: 0.7 }}
      />
      {/* Icon */}
      <div className="mb-6 flex items-center gap-2">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-sm">
          <IconComponent className="w-8 h-8 text-orange-500" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
        </h4>
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
        {service.description}
      </p>

      {/* Action Buttons */}
      <motion.div 
        className="flex gap-3 items-center"
        initial={{ y: 500, opacity: 0 }}
        animate={{ 
          y: isHovered ? 0 : 500, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button className="text-sm font-semibold text-gray-700">
          Learn More
        </button>
        <span className="text-gray-300">|</span>
        <button className="text-sm font-semibold text-gray-700">
          Contact Us
        </button>
      </motion.div>
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 bg-gray-50">
      <MaxWidthWrapper className=" mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
