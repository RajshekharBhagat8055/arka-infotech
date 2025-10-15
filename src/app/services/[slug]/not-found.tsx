import React from 'react';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-24">
      <MaxWidthWrapper>
        <div className="py-16 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center">
              <FileQuestion className="w-16 h-16 text-orange-500" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sorry, we couldn&apos;t find the service you&apos;re looking for. 
            It may have been moved or doesn&apos;t exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Go to Home
            </Link>
            <Link 
              href="/#services"
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

