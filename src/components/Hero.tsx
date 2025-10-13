import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-black text-white py-32 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Small Label */}
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <span className="text-sm font-semibold text-white">
              Your Trusted Technology Partner
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Empowering Businesses With{' '}
            <span className="text-gray-300">AI, Data Analytics & Cloud</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl">
            Arka Infotech Software Solution delivers cutting-edge technology services to transform your business and drive innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
              Let's Talk About Your Business
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              View Our Services
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">70%</div>
              <div className="text-gray-400 text-sm sm:text-base">Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">80%</div>
              <div className="text-gray-400 text-sm sm:text-base">Productivity Boost</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-gray-400 text-sm sm:text-base">Threat Prevention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
