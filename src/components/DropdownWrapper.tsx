import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DropdownWrapperProps {
  children: React.ReactNode
  isVisible: boolean
}

export default function DropdownWrapper({ children, isVisible }: DropdownWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: -20,}}
          animate={{ opacity: 1, y: 0, }}
          exit={{ opacity: 0, y: -20, }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className='absolute z-[999] border border-gray-100 top-full left-1/2 transform -translate-x-1/2 w-fit bg-white/95 backdrop-blur-xs rounded-b-2xl shadow-xl overflow-hidden'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
