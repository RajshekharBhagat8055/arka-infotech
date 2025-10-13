import React from 'react';
import { Code, Smartphone, Globe, ShoppingCart, Cloud, Users, Puzzle } from 'lucide-react';

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
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
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
                className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Learn More
                  </button>
                  <span className="text-gray-300">|</span>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    Contact Us
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-300 pointer-events-none opacity-0 group-hover:opacity-100"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
