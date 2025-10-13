import React from 'react';
import { Shield, Zap, HeadphonesIcon, TrendingUp, Users2, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "23+ years of experience delivering successful projects across diverse industries with cutting-edge technology solutions.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Agile methodology ensures faster time-to-market without compromising quality, keeping you ahead of the competition.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock support team ready to assist you whenever you need help, ensuring business continuity.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Future-proof applications built to scale with your business growth and evolving market demands.",
  },
  {
    icon: Users2,
    title: "Dedicated Teams",
    description: "Skilled professionals working exclusively on your project, ensuring focused attention and quality delivery.",
  },
  {
    icon: Sparkles,
    title: "Innovation Driven",
    description: "Leveraging latest technologies like AI, ML, and Cloud to create innovative solutions that drive business value.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Your Success Is Our Priority
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that not only meet but exceed your expectations.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-black transition-all duration-300"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-black mb-3 group-hover:text-white transition-colors duration-300">
                    {reason.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm font-bold text-black group-hover:text-white transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
