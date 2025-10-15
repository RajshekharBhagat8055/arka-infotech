import React from 'react';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { getServiceBySlug } from '@/data/services';
import { notFound } from 'next/navigation';
import { CheckCircle2, Clock, DollarSign } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  
  // Get service data from our services file
  const service = getServiceBySlug(slug);

  // If service not found, show 404
  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-24">
      <MaxWidthWrapper>
        <div className="py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                {service.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {service.tagline}
            </p>
          </div>

          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Delivery Time</h3>
              </div>
              <p className="text-2xl font-bold text-blue-600">{service.deliveryTime}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-gray-900">Starting From</h3>
              </div>
              <p className="text-2xl font-bold text-green-600">{service.pricing.starter}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-gray-900">Features</h3>
              </div>
              <p className="text-2xl font-bold text-purple-600">{service.features.length}+</p>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies We Use</h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-3xl font-bold text-orange-500 mb-4">{service.pricing.starter}</p>
                <p className="text-gray-600">Perfect for small projects and startups</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-2 border-orange-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-3xl font-bold text-orange-500 mb-4">{service.pricing.professional}</p>
                <p className="text-gray-600">Ideal for growing businesses</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-orange-500 mb-4">{service.pricing.enterprise}</p>
                <p className="text-gray-600">Custom solutions for large organizations</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      
      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}

