'use client'
import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  description: string;
  ctaText: string;
}

function IndustryCard({ industry }: { industry: IndustryCardProps }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] relative overflow-clip border p-8 rounded-xl cursor-pointer bg-white select-none"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered ? "rgb(249 115 22)" : "rgb(229 231 235)"
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Effect */}
      <motion.div 
        className='absolute -z-10 left-0 top-0 w-full h-full rounded-full bg-orange-50'
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2 : 0 }}
        transition={{ duration: 0.7 }}
      />

      {/* Industry Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {industry.name}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6 min-h-[120px]">
        {industry.description}
      </p>

      {/* CTA Button */}
      <motion.button 
        className="flex items-center gap-2 text-orange-500 font-semibold"
        whileHover={{ gap: "12px" }}
        transition={{ duration: 0.2 }}
      >
        {industry.ctaText}
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}

const industries: IndustryCardProps[] = [
  {
    name: "Healthcare",
    description: "Revolutionizing patient care with HIPAA-compliant digital solutions, telemedicine platforms, and healthcare management systems that improve outcomes and streamline operations.",
    ctaText: "Explore Healthcare Solutions"
  },
  {
    name: "Finance & Banking",
    description: "Secure, scalable fintech solutions including payment gateways, trading platforms, and compliance-ready banking applications that meet regulatory standards.",
    ctaText: "Discover Financial Solutions"
  },
  {
    name: "E-Commerce & Retail",
    description: "End-to-end e-commerce platforms with advanced inventory management, payment integration, and customer experience optimization for online and retail businesses.",
    ctaText: "View Retail Solutions"
  },
  {
    name: "Education & E-Learning",
    description: "Interactive learning management systems, virtual classrooms, and educational apps that enhance student engagement and streamline administrative processes.",
    ctaText: "Learn More"
  },
  {
    name: "Manufacturing",
    description: "Industry 4.0 solutions with IoT integration, supply chain optimization, and smart factory systems that increase efficiency and reduce operational costs.",
    ctaText: "See Manufacturing Solutions"
  },
  {
    name: "Real Estate",
    description: "Property management platforms, virtual tours, CRM systems, and listing portals that transform how real estate businesses operate and serve clients.",
    ctaText: "Explore Real Estate Tech"
  },
  {
    name: "Logistics & Transportation",
    description: "Fleet management, route optimization, and real-time tracking systems that enhance delivery efficiency and improve customer satisfaction.",
    ctaText: "View Logistics Solutions"
  },
  {
    name: "Hospitality & Travel",
    description: "Booking systems, guest management platforms, and travel apps that deliver seamless experiences for hotels, restaurants, and travel agencies.",
    ctaText: "Discover Hospitality Tech"
  }
];

export default function IndustriesWeServe() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const carouselRef = useRef<HTMLDivElement>(null);

  // Duplicate industries array for infinite loop effect
  const duplicatedIndustries = useMemo(() => [...industries, ...industries, ...industries], []);

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -450, // card width + gap
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 450, // card width + gap
        behavior: 'smooth'
      });
    }
  };

  const getCurrentVisibleIndex = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 450;
      return Math.round(scrollLeft / cardWidth) % industries.length;
    }
    return 0;
  };

  // Initialize scroll position to middle set for infinite loop
  useEffect(() => {
    if (carouselRef.current && isInView) {
      carouselRef.current.scrollLeft = industries.length * 450;
    }
  }, [isInView]);

  // Handle infinite loop by resetting position when reaching edges
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = 450;
      const middleSetStart = industries.length * cardWidth;
      const middleSetEnd = (industries.length * 2) * cardWidth;

      // If scrolled past the end of middle set, jump to start of middle set
      if (scrollLeft >= middleSetEnd) {
        carousel.scrollLeft = middleSetStart;
      }
      // If scrolled before the start of middle set, jump to end of middle set
      else if (scrollLeft <= middleSetStart - cardWidth) {
        carousel.scrollLeft = middleSetEnd - cardWidth;
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [duplicatedIndustries]);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
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
            Industries We Serve
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
            Transforming Businesses Across Industries
          </h3>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-7xl mx-auto">
            From healthcare to finance, we deliver tailored solutions that address unique industry challenges and drive innovation.
          </p>
        </motion.div>
      </MaxWidthWrapper>

      {/* Carousel */}
      <div className="relative py-10">
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide px-4 md:px-8 lg:px-16 scroll-smooth"
        >
          {duplicatedIndustries.map((industry, index) => (
            <motion.div
              key={`industry-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.3,
                delay: (index % industries.length) * 0.05,
                ease: "easeOut"
              }}
            >
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <MaxWidthWrapper>
        <motion.div 
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          {/* Previous Button */}
          <motion.button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white"
            whileHover={{ 
              borderColor: "rgb(249 115 22)",
              backgroundColor: "rgb(249 115 22)",
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ color: "rgb(255 255 255)" }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </motion.div>
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {industries.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({
                      left: (industries.length + index) * 450,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="relative w-2 h-2 rounded-full cursor-pointer"
                animate={{
                  backgroundColor: getCurrentVisibleIndex() === index ? "rgb(249 115 22)" : "rgb(209 213 219)",
                  scale: getCurrentVisibleIndex() === index ? 1.5 : 1
                }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white"
            whileHover={{ 
              borderColor: "rgb(249 115 22)",
              backgroundColor: "rgb(249 115 22)",
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ color: "rgb(255 255 255)" }}
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="text-gray-600 mb-6">
            Don&apos;t see your industry? We work across all sectors to deliver custom solutions.
          </p>
          <motion.button 
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold"
            whileHover={{ backgroundColor: "rgb(234 88 12)", scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us for Custom Solutions
          </motion.button>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}

