import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Box */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-white/20 p-12 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready To Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how Arka Infotech can help you achieve your technology goals. Get a free consultation today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                  View Our Portfolio
                </button>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
              <div className="text-center group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                </div>
                <div className="font-semibold mb-2">Email Us</div>
                <div className="text-gray-400">info@arkainfotech.com</div>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                </div>
                <div className="font-semibold mb-2">Call Us</div>
                <div className="text-gray-400">+1 (555) 123-4567</div>
              </div>

              <div className="text-center group">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                </div>
                <div className="font-semibold mb-2">Visit Us</div>
                <div className="text-gray-400">6+ Offices Worldwide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">ISO Certified</div>
            <div className="text-gray-400 text-sm">Quality Assurance</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">GDPR</div>
            <div className="text-gray-400 text-sm">Data Protection</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">NDA</div>
            <div className="text-gray-400 text-sm">Confidentiality</div>
          </div>
        </div>
      </div>
    </section>
  );
}
