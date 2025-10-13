import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, TechCorp Solutions",
    company: "Technology",
    testimonial: "Arka Infotech transformed our business with their innovative solutions. Their team's expertise and dedication exceeded our expectations. The project was delivered on time and within budget.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "CTO, HealthFirst",
    company: "Healthcare",
    testimonial: "Working with Arka Infotech was a game-changer for our digital transformation. Their attention to detail and technical prowess made all the difference in our success.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director of IT, RetailMax",
    company: "E-Commerce",
    testimonial: "The team at Arka Infotech delivered a robust e-commerce platform that scaled perfectly with our business growth. Their ongoing support has been exceptional.",
    rating: 5,
  },
  {
    name: "Emily Roberts",
    role: "Operations Manager, FinanceHub",
    company: "Financial Services",
    testimonial: "Outstanding service and expertise. Arka Infotech built a secure, scalable solution that meets all our compliance requirements. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Arka Infotech.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  "{testimonial.testimonial}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Name and Role */}
                  <div>
                    <div className="font-bold text-white mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Join thousands of satisfied clients worldwide
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}
