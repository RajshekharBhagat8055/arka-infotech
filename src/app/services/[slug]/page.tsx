'use client'
import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getServiceBySlug, ServicePageContent } from '@/data/services';
import { notFound } from 'next/navigation';
import { 
  CheckCircle2, DollarSign, Star, ArrowRight, Lightbulb, Package, TrendingUp, Zap, Award, Quote, 
  Rocket, Target, Users, Gauge, Shield, Sparkles
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import * as SiIcons from 'react-icons/si';
import { IconType } from 'react-icons';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';
import { DotPattern } from '@/components/ui/dot-pattern';
import ContactForm from '@/components/Forms/ContactForm';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const [service, setService] = React.useState<ServicePageContent | null>(null);

  React.useEffect(() => {
    params.then(p => {
      const svc = getServiceBySlug(p.slug);
      if (!svc) {
        notFound();
      }
      setService(svc);
    });
  }, [params]);

  if (!service) {
    return null;
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative md:p-10 bg-black text-white">
       <DotPattern opacity={0.4} />
        <MaxWidthWrapper className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div className='mt-20'>
              <div className="inline-block mb-6">
                <span className="text-orange-500 font-bold bg-gradient-to-br border border-gray-200 from-gray-900 to-black px-6 py-2 rounded-full text-sm md:text-base">
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                {service.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {service.hero.description}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 md:p-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all hover:scale-105">
                {service.hero.ctaText}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <ContactForm />
          </div>
        </MaxWidthWrapper>
      </section>

      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <MaxWidthWrapper>
          {/* Key Metrics */}
          <KeyMetrics 
            deliveryTime={service.deliveryTime}
            pricing={service.pricing.starter}
            featuresCount={service.features.length}
          />
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper className='bg-gray-100'>
        <div className="py-16">

          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Sub Services */}
          {service.subServices.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Our Service Offerings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.subServices.map((subService, index) => (
                  <SubServiceCard key={index} subService={subService} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Technologies Section */}
          {service.technologies.length > 0 && (
            <TechnologiesSection technologies={service.technologies} />
          )}

          {/* Process Section */}
          {service.process.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
              <div className="space-y-8">
                {service.process.map((phase, index) => (
                  <div key={index} className="relative pl-8 pb-8 border-l-2 border-orange-200 last:border-0">
                    <div className="absolute -left-[17px] top-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                      <ul className="space-y-2">
                        {phase.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features Section */}
          {service.features.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-2 pt-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits Section */}
          {service.benefits.length > 0 && (
            <BenefitsSection benefits={service.benefits} />
          )}

          {/* Industries Section */}
          {service.industries.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-2 pt-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.industries.map((industry, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-6 h-6 text-orange-500" />
                      {industry.name}
                    </h3>
                    <ul className="space-y-2">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-orange-500">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials */}
          {service.testimonials.length > 0 && (
            <TestimonialsSection testimonials={service.testimonials} />
          )}

          {/* FAQ Section */}
          {service.faq.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-2 pt-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {service.faq.map((item, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-900 hover:text-orange-500 py-4 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed pb-4 pt-2">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          )}

          {/* Pricing Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-2 pt-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-3xl font-bold text-orange-500 mb-4">{service.pricing.starter}</p>
                <p className="text-gray-600">Perfect for small projects and startups</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-2 border-orange-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-3xl font-bold text-orange-500 mb-4">{service.pricing.professional}</p>
                <p className="text-gray-600">Ideal for growing businesses</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-orange-500 mb-4">{service.pricing.enterprise}</p>
                <p className="text-gray-600">Custom solutions for large organizations</p>
              </div>
            </div>
          </div>

          {/* Related Services */}
          {service.relatedServices.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {service.relatedServices.map((relatedSlug, index) => (
                  <Link
                    key={index}
                    href={`/services/${relatedSlug}`}
                    className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all hover:shadow-md"
                  >
                    {relatedSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
      <ContactCTA />
    </main>
  );
}

// Testimonials Section Component (Black theme with orange accent)
function TestimonialsSection({ testimonials }: { testimonials: Array<{ quote: string; author: string; company: string; rating: number }> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative mb-16 bg-black py-16 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 overflow-hidden rounded-2xl">
      <DotPattern opacity={0.2} />
      
      {/* Header */}
      <motion.div 
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-500 uppercase tracking-wide mb-3">
          Client Testimonials
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
          What Our Clients Say
        </h3>
        <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-400 max-w-7xl mx-auto">
          Trusted by businesses across India and beyond
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div 
        ref={ref}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
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
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: { quote: string; author: string; company: string; rating: number } }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
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
      animate={{
        borderColor: isHovered ? "rgb(249 115 22)" : "rgba(255, 255, 255, 0.1)",
        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)"
      }}
      className="relative backdrop-blur-sm rounded-xl p-8 border overflow-clip"
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

        {/* Quote Text */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          &quot;{testimonial.quote}&quot;
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
              {testimonial.author.charAt(0)}
            </motion.span>
          </motion.div>

          {/* Name and Company */}
          <div>
            <div className="font-bold text-white mb-1">
              {testimonial.author}
            </div>
            <div className="text-sm text-orange-400">
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

// Technologies Section Component with Tabs  
function TechnologiesSection({ technologies }: { technologies: Array<{ category: string; items: Array<{ name: string; icon: string; color: string }> }> }) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="relative h-full bg-black p-4 md:p-8 lg:p-12 rounded-2xl overflow-clip mb-10">
      <DotPattern opacity={0.4}/>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 text-center">Technologies We Use</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Leveraging cutting-edge technologies to build world-class solutions
        </p>
        
        {/* Tabs */}
        <div className="flex items-center md:justify-center overflow-x-auto gap-4 mb-10">
          {technologies.map((techCategory, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-1 md:px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/50'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                <span>{techCategory.category}</span>
              </div>
              
              {/* Active indicator */}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-orange-500 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tech Stack Display */}
        <div className="min-h-[200px]">
          {technologies.map((techCategory, index) => (
            activeTab === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {techCategory.items.map((tech, techIndex) => {
                  const IconComponent = (SiIcons as Record<string, IconType>)[tech.icon];
                  return (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-orange-500 rounded-xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
                    >
                      <div className="flex items-center gap-3">
                        {IconComponent && (
                          <IconComponent 
                            className="w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:scale-110" 
                            style={{ color: tech.color }}
                          />
                        )}
                        <span className="text-sm md:text-base font-semibold text-white">
                          {tech.name}
                        </span>
                      </div>
                      
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                        style={{ backgroundColor: tech.color }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

// Benefits Section Component
function BenefitsSection({ benefits }: { benefits: Array<{ title: string; description: string }> }) {
  const benefitIcons = [Rocket, Target, Users, Gauge, Shield, Sparkles, TrendingUp, Award, Zap];
  
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg p-2  mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">Why Choose This Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const IconComponent = benefitIcons[index % benefitIcons.length];
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Sub Service Card Component (Similar to Services.tsx)
function SubServiceCard({ subService }: { subService: { name: string; description: string; icon: string }; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Get icon from Lucide React using the icon name
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[subService.icon] || Lightbulb;
  
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
      whileHover={{
        borderColor: "rgb(249 115 22)",
        scale: 1.01,
        boxShadow: "0 4px 24px 0 rgb(0 0 0 / 0.1)"
      }}
      className="relative overflow-clip z-20 border p-6 rounded-xl cursor-pointer bg-white flex flex-col h-full"
    >
      <motion.div 
        className='absolute -z-10 left-0 top-0 w-full h-full rounded-full bg-orange-50'
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 2 : 0 }}
        transition={{ duration: 0.7 }}
      />
      
      {/* Icon & Title */}
      <div className="mb-4 flex items-center gap-2">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center shadow-sm">
          <IconComponent className="w-8 h-8 text-orange-500" />
        </div>
        <h4 className="text-xl font-bold text-gray-900">
          {subService.name}
        </h4>
      </div>

      {/* Content - Takes available space */}
      <p className="text-gray-600 leading-relaxed flex-1">
        {subService.description}
      </p>
    </motion.div>
  );
}

function KeyMetrics({ deliveryTime, pricing, featuresCount }: { deliveryTime: string; pricing: string; featuresCount: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metricsData = [
    {
      icon: Zap,
      value: deliveryTime,
      label: "Delivery Timeline",
      description: "Fast and reliable delivery to meet your deadlines"
    },
    {
      icon: DollarSign,
      value: pricing,
      label: "Starting Price",
      description: "Flexible pricing options to fit your budget"
    },
    {
      icon: Award,
      value: `${featuresCount}+`,
      label: "Total Features",
      description: "Comprehensive solution with all essential features"
    }
  ];

  return (
    <div>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Service Highlights
        </h2>
        <p className="text-xl md:text-2xl text-gray-600">
          Everything you need to know at a glance
        </p>
      </motion.div>

      {/* Metrics Grid */}
      <motion.div 
        ref={ref} 
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.05
            }
          }
        }}
      >
        {metricsData.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
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
              className="flex flex-col text-center items-center"
            >
              {/* Icon */}
              <div className="mb-4 p-4 bg-orange-100 rounded-full">
                <IconComponent className="w-8 h-8 text-orange-500" />
              </div>
          
              {/* Value */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-orange-500 font-semibold text-lg mb-4">
                {metric.label}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-center max-w-xs">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

