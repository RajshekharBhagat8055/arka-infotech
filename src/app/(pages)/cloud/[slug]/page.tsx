import { notFound } from 'next/navigation';
import { getCloudProviderBySlug } from '@/data/cloud';
import CloudHeroSection from '@/components/CloudComponents/CloudHeroSection';
import CloudMetrics from '@/components/CloudComponents/CloudMetrics';
import CloudServices from '@/components/CloudComponents/CloudServices';
import CloudTools from '@/components/CloudComponents/CloudTools';
import CloudTechnologies from '@/components/CloudComponents/CloudTechnologies';
import WhyChooseUs from '@/components/CloudComponents/WhyChooseUs';
import OtherTechnologies from '@/components/CloudComponents/OtherTechnologies';
import AgileProcess from '@/components/CloudComponents/AgileProcess';
import CloudFAQ from '@/components/CloudComponents/CloudFAQ';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ContactCTA from '@/components/ContactCTA';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = getCloudProviderBySlug(slug);
  
  if (!provider) {
    return {
      title: 'Cloud Service Not Found',
    };
  }

  return {
    title: `${provider.name} Services | Arka Infotech`,
    description: provider.hero.description,
  };
}

export default async function CloudProviderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const provider = getCloudProviderBySlug(slug);

  if (!provider) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Form - BLACK */}
      <CloudHeroSection provider={provider} />

      {/* Animated Metrics - LIGHT */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <MaxWidthWrapper>
          <CloudMetrics metrics={provider.metrics} providerName={provider.name} />
        </MaxWidthWrapper>
      </div>

      {/* Overview Section - GRAY */}
      <MaxWidthWrapper className='bg-gray-100'>
        <div className="py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About {provider.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {provider.overview}
            </p>
          </div>

          {/* Services We Provide */}
          <CloudServices services={provider.services} providerName={provider.name} />
        </div>
      </MaxWidthWrapper>

      {/* Tools We Work On - BLACK */}
      <MaxWidthWrapper className='bg-gray-100'>
        <div className="py-16">
          <div className="relative bg-black p-4 md:p-8 lg:p-12 rounded-2xl overflow-clip mb-10">
            <CloudTools tools={provider.tools} providerName={provider.name} />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Technologies - BLACK (inside gray wrapper) */}
      <MaxWidthWrapper className='bg-gray-100'>
        <div className="pb-16">
          <CloudTechnologies technologies={provider.technologies} providerName={provider.name} />
        </div>
      </MaxWidthWrapper>

      {/* Why Choose Us - LIGHT */}
      <WhyChooseUs reasons={provider.whyChooseUs} providerName={provider.name} />

      {/* Other Technologies - GRAY */}
      <OtherTechnologies 
        technologies={provider.otherTechnologies} 
        currentSlug={provider.slug}
      />

      {/* Agile Development Process - LIGHT */}
      <AgileProcess process={provider.process} providerName={provider.name} />

      {/* FAQ - GRAY */}
      <CloudFAQ faq={provider.faq} providerName={provider.name} />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}

// Generate static params for all cloud providers
export async function generateStaticParams() {
  return [
    { slug: 'aws' },
    { slug: 'azure' },
    { slug: 'gcp' },
    { slug: 'digitalocean' },
  ];
}

