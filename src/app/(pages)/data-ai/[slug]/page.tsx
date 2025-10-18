import { notFound } from 'next/navigation';
import { getDataAIServiceBySlug } from '@/data/dataAi';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ContactCTA from '@/components/ContactCTA';
import CloudHeroSection from '@/components/CloudComponents/CloudHeroSection';
import CloudMetrics from '@/components/CloudComponents/CloudMetrics';
import CloudServices from '@/components/CloudComponents/CloudServices';
import CloudTechnologies from '@/components/CloudComponents/CloudTechnologies';
import WhyChooseUs from '@/components/CloudComponents/WhyChooseUs';
import AgileProcess from '@/components/CloudComponents/AgileProcess';
import CloudFAQ from '@/components/CloudComponents/CloudFAQ';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getDataAIServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Data & AI Service Not Found',
    };
  }

  return {
    title: `${service.name} Services | Arka Infotech`,
    description: service.hero.description,
  };
}

export default async function DataAIServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getDataAIServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Form - BLACK */}
      <CloudHeroSection provider={service as any} />

      {/* Animated Metrics - LIGHT */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <MaxWidthWrapper>
          <CloudMetrics metrics={service.metrics} providerName={service.name} />
        </MaxWidthWrapper>
      </div>

      {/* Overview Section - GRAY */}
      <MaxWidthWrapper className='bg-gray-100'>
        <div className="py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About {service.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Services We Provide */}
          <CloudServices services={service.services} providerName={service.name} />
        </div>
      </MaxWidthWrapper>

      {/* Benefits Section - LIGHT */}
      {service.benefits && service.benefits.length > 0 && (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <MaxWidthWrapper>
            <div className="text-center mb-16">
              <h2 className="text-sm md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-500 uppercase tracking-wide mb-3">
                Benefits
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4">
                What You&apos;ll Get
              </h3>
              <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-7xl mx-auto">
                Tangible benefits that drive real business value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      {/* Why Choose Us - GRAY */}
      <MaxWidthWrapper className='bg-gray-100'>
        <div className="py-16">
          <WhyChooseUs reasons={service.whyChooseUs} providerName={service.name} />
        </div>
      </MaxWidthWrapper>

      {/* Tech Stack - BLACK */}
      {service.techStack && service.techStack.length > 0 && (
        <MaxWidthWrapper className='bg-gray-100'>
          <div className="pb-16">
            <div className="relative bg-black p-4 md:p-8 lg:p-12 rounded-2xl overflow-clip">
              <CloudTechnologies technologies={service.techStack} providerName={service.name} />
            </div>
          </div>
        </MaxWidthWrapper>
      )}

      {/* Agile Development Process - LIGHT */}
      <AgileProcess process={service.process} providerName={service.name} />

      {/* FAQ - GRAY */}
      <CloudFAQ faq={service.faq} providerName={service.name} />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}

// Generate static params for all data-ai services
export async function generateStaticParams() {
  return [
    // Data Services
    { slug: 'data-strategy-consulting' },
    { slug: 'data-processing' },
    { slug: 'data-governance' },
    { slug: 'data-storage' },
    { slug: 'data-quality-management' },
    { slug: 'data-modelling' },
    { slug: 'data-architecture' },
    { slug: 'analytics-visualization' },
    { slug: 'cloud-data-migration' },
    
    // AI Services
    { slug: 'custom-ai-development' },
    { slug: 'ai-consulting-strategy' },
    { slug: 'ai-business-intelligence' },
    { slug: 'large-language-models' },
    { slug: 'ai-personalized-customer-experience' },
    { slug: 'blockchain' },
  ];
}

