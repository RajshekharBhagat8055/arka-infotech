import React from 'react';
import { Users, Briefcase, Award, Globe, Clock, Building } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "1,000+",
    label: "Full Time Technical Team",
  },
  {
    icon: Briefcase,
    number: "15,000+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "27,000+",
    label: "Successful Projects",
  },
  {
    icon: Globe,
    number: "95%",
    label: "Customer Satisfaction",
  },
  {
    icon: Clock,
    number: "23+",
    label: "Years of Experience",
  },
  {
    icon: Building,
    number: "6+",
    label: "Offices Worldwide",
  },
];

export default function About() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            About Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted By Businesses Worldwide
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Arka Infotech Software Solution is a leading technology company delivering innovative solutions to businesses across the globe. With decades of experience and a team of expert professionals, we transform ideas into reality.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-5xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>

                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
