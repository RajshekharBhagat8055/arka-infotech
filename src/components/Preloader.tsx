'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown in this session
    const hasShownPreloader = sessionStorage.getItem('preloader-shown');
    
    if (hasShownPreloader) {
      setIsLoading(false);
      setShouldShow(false);
      return;
    }

    // Show the preloader
    setShouldShow(true);

    // Minimum display time for preloader
    const minDisplayTime = 2000; // 2 seconds
    const startTime = Date.now();

    // Wait for window to load
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        // Mark preloader as shown in session storage
        sessionStorage.setItem('preloader-shown', 'true');
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!shouldShow) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,107,0,0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,107,0,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo with pulse animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Image
                  src="/logo_main.png"
                  alt="Arka Infotech"
                  width={180}
                  height={180}
                  priority
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </motion.div>
              
              {/* Glowing ring effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute inset-0 rounded-full border-4 border-orange-500"
              />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Arka Infotech
              </h1>
              <p className="text-sm md:text-base text-gray-400">
                Software Solutions LLP
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-64 md:w-80"
            >
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 1.5,
                    ease: 'easeInOut',
                    repeat: Infinity
                  }}
                  className="h-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"
                />
              </div>
              
              {/* Loading text */}
              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-center text-xs md:text-sm text-gray-400 mt-3"
              >
                Loading amazing experience...
              </motion.p>
            </motion.div>

            {/* Animated dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut'
                  }}
                  className="w-2 h-2 bg-orange-500 rounded-full"
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom corner decoration */}
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-orange-500/30 to-transparent rounded-tl-full" />
          </div>

          {/* Top corner decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/30 to-transparent rounded-br-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

