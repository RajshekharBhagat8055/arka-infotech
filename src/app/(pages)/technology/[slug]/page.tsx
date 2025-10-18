import { notFound } from 'next/navigation';
import { getTechnologyBySlug } from '@/data/technology';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ContactCTA from '@/components/ContactCTA';
import TechnologyHero from '@/components/TechnologyComponents/TechnologyHero';
import TechnologyOverview from '@/components/TechnologyComponents/TechnologyOverview';
import UseCases from '@/components/TechnologyComponents/UseCases';
import KeyFeatures from '@/components/TechnologyComponents/KeyFeatures';
import TechStack from '@/components/TechnologyComponents/TechStack';
import WhyChooseTech from '@/components/TechnologyComponents/WhyChooseTech';
import Industries from '@/components/TechnologyComponents/Industries';
import DevelopmentProcess from '@/components/TechnologyComponents/DevelopmentProcess';
import RelatedTechnologies from '@/components/TechnologyComponents/RelatedTechnologies';
import TechnologyFAQ from '@/components/TechnologyComponents/TechnologyFAQ';
import CloudMetrics from '@/components/CloudComponents/CloudMetrics';


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const technology = getTechnologyBySlug(slug);
  
  if (!technology) {
    return {
      title: 'Technology Not Found',
    };
  }

  return {
    title: `${technology.name} Development Services | Arka Infotech`,
    description: technology.hero.description,
  };
}

export default async function TechnologyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const technology = getTechnologyBySlug(slug);

  if (!technology) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section - BLACK */}
      <TechnologyHero technology={technology} />

      {/* Metrics Section - LIGHT */}
      {technology.metrics && technology.metrics.length > 0 && (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <MaxWidthWrapper>
            <CloudMetrics metrics={technology.metrics} providerName={technology.name} />
          </MaxWidthWrapper>
        </div>
      )}

      {/* Overview - LIGHT */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <MaxWidthWrapper>
          <TechnologyOverview overview={technology.overview} techName={technology.name} />
        </MaxWidthWrapper>
      </div>

      {/* Use Cases - GRAY */}
      {technology.useCases && technology.useCases.length > 0 && (
        <MaxWidthWrapper className='bg-gray-100'>
          <div className="py-16">
            <UseCases useCases={technology.useCases} techName={technology.name} />
          </div>
        </MaxWidthWrapper>
      )}

      {/* Key Features - BLACK */}
      {technology.keyFeatures && technology.keyFeatures.length > 0 && (
        <MaxWidthWrapper className='bg-gray-100'>
          <div className="py-16">
            <div className="relative bg-black p-4 md:p-8 lg:p-12 rounded-2xl overflow-clip mb-10">
              <KeyFeatures features={technology.keyFeatures} techName={technology.name} />
            </div>
          </div>
        </MaxWidthWrapper>
      )}

      {/* Tech Stack - BLACK */}
      {technology.techStack && technology.techStack.length > 0 && (
        <MaxWidthWrapper className='bg-gray-100'>
          <div className="pb-16">
            <TechStack techStack={technology.techStack} techName={technology.name} />
          </div>
        </MaxWidthWrapper>
      )}

      {/* Why Choose - LIGHT */}
      {technology.whyChoose && technology.whyChoose.length > 0 && (
        <WhyChooseTech reasons={technology.whyChoose} techName={technology.name} />
      )}

      {/* Industries - GRAY */}
      {technology.industries && technology.industries.length > 0 && (
        <MaxWidthWrapper className='bg-gray-100'>
          <div className="py-16">
            <Industries industries={technology.industries} techName={technology.name} />
          </div>
        </MaxWidthWrapper>
      )}

      {/* Development Process - LIGHT */}
      {technology.developmentProcess && technology.developmentProcess.length > 0 && (
        <DevelopmentProcess process={technology.developmentProcess} techName={technology.name} />
      )}

      {/* Related Technologies - LIGHT */}
      {technology.relatedTechnologies && technology.relatedTechnologies.length > 0 && (
        <RelatedTechnologies 
          technologies={technology.relatedTechnologies}
          currentSlug={technology.slug}
        />
      )}

      {/* FAQ - GRAY */}
      {technology.faq && technology.faq.length > 0 && (
        <TechnologyFAQ faq={technology.faq} techName={technology.name} />
      )}

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}

