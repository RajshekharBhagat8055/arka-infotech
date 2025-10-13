import React from 'react';

const technologies = [
  { name: "Microsoft", category: "Cloud & Enterprise" },
  { name: "Google Cloud", category: "Cloud Platform" },
  { name: "AWS", category: "Cloud Services" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "AI/ML" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
];

export default function Technologies() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Technology Partners
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Powered By Industry-Leading Technologies
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with the world's leading technology providers to deliver robust, scalable, and innovative solutions for your business.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center">
                {/* Tech Icon Placeholder */}
                <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <span className="text-white font-bold text-sm">
                    {tech.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Tech Name */}
                <div className="font-bold text-black mb-1 group-hover:text-gray-800 transition-colors">
                  {tech.name}
                </div>

                {/* Category */}
                <div className="text-xs text-gray-500">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            And many more cutting-edge technologies to power your digital transformation
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
            View All Technologies
          </button>
        </div>
      </div>
    </section>
  );
}
