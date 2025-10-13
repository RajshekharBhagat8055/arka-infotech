import { cn } from '@/lib/utils';
import { Playfair_Display_SC } from 'next/font/google';
import React from 'react'

interface MainHeadingProps {
    children: React.ReactNode;
    className?: string;
}

const PlayfairDisplaySC = Playfair_Display_SC({
    subsets: ["latin"],
    weight: ["400","700","900"],
})

export default function MainHeading({ children, className }: MainHeadingProps) {
  return (
    <h1 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold", PlayfairDisplaySC.className, className)}>
        {children}
    </h1>
  )
}
