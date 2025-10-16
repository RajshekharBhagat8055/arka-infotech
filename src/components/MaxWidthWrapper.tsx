import { cn } from '@/lib/utils';
import React from 'react'

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div className={cn("relative w-full h-full px-2 md:px-5",className)}>
      {children}
    </div>
  )
}
