'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useTransition } from '@/contexts/TransitionContext'

export default function PageTransition() {
  const pathname = usePathname()
  const { isTransitioning, pageName, endTransition } = useTransition()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    // Use requestAnimationFrame to ensure new page is rendered
    let frameCount = 0
    const checkFrames = () => {
      frameCount++
      
      // Wait for 10 frames to ensure content is fully painted and interactive
      if (frameCount < 10) {
        requestAnimationFrame(checkFrames)
      } else {
        // Then wait additional time for the slide-out animation to complete
        timerRef.current = setTimeout(() => {
          endTransition()
        }, 800)
      }
    }

    // Start frame counting when pathname changes
    requestAnimationFrame(checkFrames)

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [pathname, endTransition])

  return (
    <AnimatePresence mode="wait">
      {isTransitioning && (
        <motion.div
          key="page-transition"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black pointer-events-auto"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut'
          }}
        >
          {/* Page Name - Fade + Slide animation */}
          <div className="overflow-hidden px-4">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                delay: 0.15,
                ease: 'easeInOut'
              }}
            >
              {pageName}
            </motion.h1>
          </div>

          {/* Optional loading indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-1 bg-orange-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}


