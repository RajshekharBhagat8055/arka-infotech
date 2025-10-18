import Link from 'next/link';
import { ArrowLeft, SearchX } from 'lucide-react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-20">
      <MaxWidthWrapper>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full mb-8">
            <SearchX className="w-12 h-12 text-orange-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The Data & AI service you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Looking for our Data & AI services?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/data-ai/data-strategy-consulting" className="text-orange-500 hover:text-orange-600 font-medium">
                Data Strategy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/data-ai/custom-ai-development" className="text-orange-500 hover:text-orange-600 font-medium">
                Custom AI
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/data-ai/data-processing" className="text-orange-500 hover:text-orange-600 font-medium">
                Data Processing
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/data-ai/large-language-models" className="text-orange-500 hover:text-orange-600 font-medium">
                LLM Solutions
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

