import React from 'react';
import { Code, Smartphone, Globe, ShoppingCart, Cloud, Users, Puzzle, Shield, Database } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Transforming client needs into software solutions that leverage the latest technologies for exceptional performance and functionality.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Whether you're looking to create a custom app from scratch or modernise an existing one to match the latest technology trends, we can develop it according to your preferences.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Your doorway to the world of the web. Get a customized and user-friendly website loaded with the latest technology stack.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Get ready to sell! We develop robust and user-friendly E-Commerce platforms to streamline your online sales and maximize your reach.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Effortlessly streamline your operations and enhance security with our comprehensive cloud implementation and migration services.",
  },
  {
    icon: Users,
    title: "CRM",
    description: "We develop custom CRM software designed to streamline and enhance your business operations, boosting customer loyalty and efficiency.",
  },
  {
    icon: Puzzle,
    title: "API Dev & Integration",
    description: "We build robust, scalable APIs for seamless data exchange. Our expertise includes RESTful, GraphQL, and third-party integrations, delivering secure and efficient solutions.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform your raw data into actionable insights with our comprehensive data engineering solutions and analytics services.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Protect your digital assets with our advanced cybersecurity solutions, ensuring your business stays secure against evolving threats.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-3">
            Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bridging Innovation & Excellence With Modern Tech Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We develop cutting-edge solutions and transform existing ones through collaborative development that prioritises your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 hover:bg-orange-500 transition-all duration-300 border border-gray-200 hover:border-orange-500 shadow-sm hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-white transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-8 h-8 text-orange-500 group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3 items-center">
                  <button className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
                    Learn More
                  </button>
                  <span className="text-gray-300 group-hover:text-white">|</span>
                  <button className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
                    Contact Us
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
