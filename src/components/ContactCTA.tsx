'use client'
import React, { useRef, useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, LucideIcon } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';
import MaxWidthWrapper from './MaxWidthWrapper';

function ContactMethod({ Icon, title, info, variants }: { Icon: LucideIcon; title: string; info: string; variants: Variants }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="text-center"
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
        animate={{
          backgroundColor: isHovered ? "rgb(249 115 22)" : "rgb(243 244 246)",
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{
            color: isHovered ? "rgb(255 255 255)" : "rgb(107 114 128)"
          }}
        >
          <Icon className="w-7 h-7" />
        </motion.div>
      </motion.div>
      <div className="font-semibold mb-2 text-gray-900">{title}</div>
      <div className="text-gray-600">{info}</div>
    </motion.div>
  );
}

export default function ContactCTA() {
  const contactMethodsRef = useRef(null);
  const trustIndicatorsRef = useRef(null);
  const isContactMethodsInView = useInView(contactMethodsRef, { once: true, margin: "-100px" });
  const isTrustIndicatorsInView = useInView(trustIndicatorsRef, { once: true, margin: "-100px" });

  const contactMethodVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <MaxWidthWrapper>
        {/* Main CTA Box */}
        <motion.div 
          className="bg-white rounded-2xl border-2 border-gray-200 p-12 md:p-16 relative overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, rgb(249 115 22) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative z-10">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Ready To Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let&apos;s discuss how Arka Infotech can help you achieve your technology goals. Get a free consultation today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ 
                    backgroundColor: "rgb(234 88 12)",
                    scale: 1.05 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Free Consultation
                  <motion.div whileHover={{ x: 4 }}>
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                <motion.button 
                  className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  whileHover={{ 
                    backgroundColor: "rgb(17 24 39)",
                    color: "rgb(255 255 255)",
                    scale: 1.05 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Portfolio
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div 
              ref={contactMethodsRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200"
              initial="hidden"
              animate={isContactMethodsInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.15
                  }
                }
              }}
            >
              <ContactMethod 
                Icon={Mail} 
                title="Email Us" 
                info="info@arkainfotech.com" 
                variants={contactMethodVariants}
              />
              <ContactMethod 
                Icon={Phone} 
                title="Call Us" 
                info="+1 (555) 123-4567" 
                variants={contactMethodVariants}
              />
              <ContactMethod 
                Icon={MapPin} 
                title="Visit Us" 
                info="6+ Offices Worldwide" 
                variants={contactMethodVariants}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          ref={trustIndicatorsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center"
          initial="hidden"
          animate={isTrustIndicatorsInView ? "visible" : "hidden"}
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
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.3
                }
              }
            }}
          >
            <div className="text-3xl font-bold mb-2 text-gray-900">ISO Certified</div>
            <div className="text-gray-600 text-sm">Quality Assurance</div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.3
                }
              }
            }}
          >
            <div className="text-3xl font-bold mb-2 text-gray-900">GDPR</div>
            <div className="text-gray-600 text-sm">Data Protection</div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.3
                }
              }
            }}
          >
            <div className="text-3xl font-bold mb-2 text-gray-900">24/7</div>
            <div className="text-gray-600 text-sm">Support Available</div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.3
                }
              }
            }}
          >
            <div className="text-3xl font-bold mb-2 text-gray-900">NDA</div>
            <div className="text-gray-600 text-sm">Confidentiality</div>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
