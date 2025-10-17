'use client'
import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { DotPattern } from '../ui/dot-pattern';
import TransitionLink from '../TransitionLink';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialProps }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
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
        borderColor: isHovered ? "rgb(249 115 22)" : "rgba(255, 255, 255, 0.1)",
        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)"
      }}
      className="relative backdrop-blur-sm rounded-xl border p-3 md:p-8 overflow-clip"
    >
      {/* Orange Accent Top Border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-t-xl"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Quote Icon */}
      <motion.div 
        className="absolute top-6 right-6"
        animate={{ 
          opacity: isHovered ? 0.3 : 0.15,
          color: isHovered ? "rgb(249 115 22)" : "rgb(255 255 255)"
        }}
      >
        <Quote className="w-16 h-16" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          &quot;{testimonial.testimonial}&quot;
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <motion.div 
            className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl"
            animate={{
              backgroundColor: isHovered ? "rgb(249 115 22)" : "rgba(255, 255, 255, 0.2)"
            }}
          >
            <motion.span
              animate={{
                color: isHovered ? "rgb(255 255 255)" : "rgb(249 115 22)"
              }}
            >
              {testimonial.name.charAt(0)}
            </motion.span>
          </motion.div>

          {/* Name and Role */}
          <div>
            <div className="font-bold text-white mb-1">
              {testimonial.name}
            </div>
            <div className="text-sm text-orange-400">
              {testimonial.role}
            </div>
            <div className="text-xs text-gray-400">
              {testimonial.company}
            </div>
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div 
        className="absolute inset-0 border-2 rounded-xl pointer-events-none"
        animate={{
          borderColor: isHovered ? "rgba(249, 115, 22, 0.3)" : "transparent"
        }}
      />
    </motion.div>
  );
}

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, TechCorp Solutions",
    company: "Technology",
    testimonial: "Arka Infotech transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations. The project was delivered on time and within budget.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "CTO, HealthFirst",
    company: "Healthcare",
    testimonial: "Working with Arka Infotech was a game-changer for our digital transformation. Their attention to detail and technical prowess made all the difference in our success.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director of IT, RetailMax",
    company: "E-Commerce",
    testimonial: "The team at Arka Infotech delivered a robust e-commerce platform that scaled perfectly with our business growth. Their ongoing support has been exceptional.",
    rating: 5,
  },
  {
    name: "Emily Roberts",
    role: "Operations Manager, FinanceHub",
    company: "Financial Services",
    testimonial: "Outstanding service and expertise. Arka Infotech built a secure, scalable solution that meets all our compliance requirements. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-black text-white">
      <DotPattern opacity={0.2} />
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
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-7xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with Arka Infotech.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="text-gray-400 mb-6">
            Join thousands of satisfied clients worldwide
          </p>
          <TransitionLink href="/contact" name="Contact Us">
            <motion.button 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold"
              whileHover={{ backgroundColor: "rgb(234 88 12)" }}
              whileTap={{ scale: 0.98 }}
            >
              Read More Success Stories
            </motion.button>
          </TransitionLink>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
