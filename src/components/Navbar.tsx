import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import MainHeading from './MainHeading'

export default function Navbar() {
  return (
    <nav className='fixed top-0 w-full border-b-2 border-black/50'>
      <MaxWidthWrapper className='flex items-center justify-between'>
        <Link href="/">
          <MainHeading className='text-xl'>ARKA</MainHeading>
        </Link>
      </MaxWidthWrapper>
    </nav>
  )
}
