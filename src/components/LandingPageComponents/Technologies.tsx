'use client'
import React from 'react';
import { motion } from 'framer-motion';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { Marquee } from '../ui/marquee';
import { 
  SiGooglecloud, 
  SiAmazon, 
  SiHubspot, 
  SiSalesforce, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiDocker, 
  SiKubernetes, 
  SiMongodb, 
  SiPostgresql,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGraphql,
  SiRedis
} from 'react-icons/si';
import { Cloud } from 'lucide-react';
import { IconType } from 'react-icons';

interface TechCardProps {
  icon: IconType;
  name: string;
  color: string;
}

function TechCard({ tech }: { tech: TechCardProps }) {
  const IconComponent = tech.icon;
  
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-6 py-4 hover:border-orange-500 hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap">
      <div className="flex items-center justify-center w-8 h-8">
        <IconComponent className="size-6 md:size-7 lg:size-8 xl:size-9" style={{ color: tech.color }} />
      </div>
      <span className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900">{tech.name}</span>
    </div>
  );
}

// Split technologies into 3 rows with original brand colors
const row1 = [
  { name: "Microsoft Azure", icon: Cloud, color: "#0078D4" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

const row2 = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
];

const row3 = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59" },
  { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <MaxWidthWrapper className="">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm text-center md:text-base lg:text-lg xl:text-2xl font-semibold text-orange-500 uppercase tracking-wide mb-3">
            Technology Stack
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4">
            Powered By Industry-Leading Technologies
          </h3>
          <p className="text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-7xl mx-auto">
            We leverage cutting-edge tools and platforms to build scalable, high-performance solutions.
          </p>
        </motion.div>
      </MaxWidthWrapper>

      {/* Marquee Rows */}
      <div className="space-y-6 mt-12">
        {/* Row 1 - Moving Left */}
        <Marquee pauseOnHover className="[--duration:30s]">
          {row1.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </Marquee>

        {/* Row 2 - Moving Right */}
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {row2.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </Marquee>

        {/* Row 3 - Moving Left */}
        <Marquee pauseOnHover className="[--duration:30s]">
          {row3.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </Marquee>
      </div>

      {/* Bottom Text */}
      <MaxWidthWrapper className="">
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className="text-gray-600 mb-6">
            And many more cutting-edge technologies to power your digital transformation
          </p>
          <motion.button 
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold"
            whileHover={{ backgroundColor: "rgb(249 115 22)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Technologies
          </motion.button>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
}
