import Link from 'next/link'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { CloudOff } from 'lucide-react'

export default function CloudNotFound() {
  return (
    <MaxWidthWrapper className="py-32">
      <div className="flex flex-col items-center justify-center text-center">
        <CloudOff className="size-24 text-gray-300 mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Cloud Provider Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          The cloud provider you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/cloud/aws"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            View AWS Services
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
