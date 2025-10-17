'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface TransitionContextType {
  isTransitioning: boolean
  pageName: string
  startTransition: (name: string) => void
  endTransition: () => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [pageName, setPageName] = useState('')

  const startTransition = (name: string) => {
    setPageName(name)
    setIsTransitioning(true)
  }

  const endTransition = () => {
    setIsTransitioning(false)
  }

  return (
    <TransitionContext.Provider value={{ isTransitioning, pageName, startTransition, endTransition }}>
      {children}
    </TransitionContext.Provider>
  )
}

export function useTransition() {
  const context = useContext(TransitionContext)
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider')
  }
  return context
}

