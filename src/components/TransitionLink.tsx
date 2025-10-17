'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode, MouseEvent } from 'react'
import { useTransition } from '@/contexts/TransitionContext'

interface TransitionLinkProps {
  href: string
  children: ReactNode
  className?: string
  name?: string
  onClick?: () => void
}

export default function TransitionLink({ 
  href, 
  children, 
  className = '',
  name,
  onClick 
}: TransitionLinkProps) {
  const router = useRouter()
  const { startTransition } = useTransition()

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    // Handle anchor links (like #services)
    if (href.startsWith('#')) {
      e.preventDefault()
      if (onClick) onClick()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    // Don't animate if it's the same page
    if (href === window.location.pathname) {
      if (onClick) onClick()
      return
    }

    // Prevent default navigation
    e.preventDefault()
    
    // Call any additional onClick handler
    if (onClick) {
      onClick()
    }

    // Get display name - use provided name or generate from href
    const displayName = name || getPageNameFromHref(href)
    
    // Start transition animation
    startTransition(displayName)
    
    // Wait for slide-in animation to complete + hold for visibility (600ms)
    await new Promise(resolve => setTimeout(resolve, 600))
    
    // Navigate to new page (this will trigger the slide-out animation)
    router.push(href)
  }

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  )
}

// Helper function to generate page name from href
function getPageNameFromHref(href: string): string {
  if (href === '/') return 'Home'
  if (href === '/contact') return 'Contact Us'
  if (href.startsWith('/services/')) {
    const slug = href.split('/').pop()
    return slug?.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') || 'Services'
  }
  // Default: capitalize first letter of path
  const pageName = href.split('/').filter(Boolean).pop()
  return pageName ? pageName.charAt(0).toUpperCase() + pageName.slice(1) : 'Page'
}

