'use client'

import { useEffect, useState } from 'react'
import { useTransition } from '@/contexts/TransitionContext'

/**
 * Hook to determine if page animations should play
 * Returns true only after page transition is complete
 */
export function usePageReady() {
  const { isTransitioning } = useTransition()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!isTransitioning) {
      // Add a small delay to ensure transition is fully complete
      const timer = setTimeout(() => {
        setIsReady(true)
      }, 100)
      
      return () => clearTimeout(timer)
    } else {
      setIsReady(false)
    }
  }, [isTransitioning])

  return isReady
}

