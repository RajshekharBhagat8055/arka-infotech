export interface Service {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  deliveryTime: string;
  icon?: string;
}

export const services: Service[] = [
  // Design & Development Services
  {
    id: "1",
    slug: "website-development",
    name: "Website Development",
    category: "Design & Development",
    tagline: "Build Your Digital Presence with Custom Websites",
    description: "Creating responsive, modern, and user-friendly websites tailored to your business needs.",
    longDescription: "Our website development service combines cutting-edge technology with creative design to deliver websites that not only look stunning but also perform exceptionally. We build responsive, SEO-friendly, and fast-loading websites that help businesses establish a strong online presence and drive conversions.",
    features: [
      "Responsive Design for All Devices",
      "SEO-Optimized Architecture",
      "Fast Loading Speed (< 3 seconds)",
      "Content Management System Integration",
      "Cross-Browser Compatibility",
      "Advanced Security Features",
      "Analytics Integration",
      "Custom API Integration"
    ],
    benefits: [
      "Increased Online Visibility",
      "Enhanced User Experience",
      "Higher Conversion Rates",
      "Mobile-First Approach",
      "Scalable Architecture",
      "24/7 Technical Support"
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "WordPress",
      "HTML5",
      "CSS3"
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Planning",
        description: "Understanding your business goals, target audience, and project requirements."
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Creating wireframes and visual designs that align with your brand identity."
      },
      {
        step: 3,
        title: "Development",
        description: "Building your website using modern technologies and best practices."
      },
      {
        step: 4,
        title: "Testing & Launch",
        description: "Rigorous testing followed by deployment and ongoing support."
      }
    ],
    pricing: {
      starter: "$2,500 - $5,000",
      professional: "$5,000 - $15,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "4-8 weeks"
  },
  {
    id: "2",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Design & Development",
    tagline: "Transform Your Ideas into Powerful Mobile Apps",
    description: "Developing native and cross-platform mobile applications for iOS and Android.",
    longDescription: "We specialize in creating innovative mobile applications that engage users and drive business growth. From concept to launch, our team delivers high-performance apps with intuitive interfaces, seamless functionality, and robust backend integration.",
    features: [
      "Native iOS & Android Development",
      "Cross-Platform Solutions (React Native, Flutter)",
      "Offline Functionality",
      "Push Notifications",
      "In-App Purchases",
      "Social Media Integration",
      "Real-time Data Synchronization",
      "Biometric Authentication"
    ],
    benefits: [
      "Reach Wider Audience",
      "Enhanced Customer Engagement",
      "Improved Brand Recognition",
      "Direct Marketing Channel",
      "Increased Revenue Streams",
      "Better Customer Insights"
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "AWS Mobile",
      "Node.js",
      "GraphQL"
    ],
    process: [
      {
        step: 1,
        title: "Ideation & Strategy",
        description: "Defining app concept, features, and target platform."
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user interfaces."
      },
      {
        step: 3,
        title: "Development & Integration",
        description: "Building features and integrating backend services."
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description: "Quality assurance and app store submission."
      }
    ],
    pricing: {
      starter: "$10,000 - $25,000",
      professional: "$25,000 - $75,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-16 weeks"
  },
  {
    id: "3",
    slug: "e-commerce-development",
    name: "E-commerce Development",
    category: "Design & Development",
    tagline: "Build Your Online Store and Boost Sales",
    description: "Creating feature-rich e-commerce platforms that drive online sales and customer satisfaction.",
    longDescription: "Our e-commerce development solutions help businesses sell products and services online with ease. We build secure, scalable, and conversion-optimized online stores with advanced features like payment gateways, inventory management, and analytics.",
    features: [
      "Shopping Cart & Checkout",
      "Multiple Payment Gateway Integration",
      "Inventory Management",
      "Order Tracking System",
      "Customer Account Management",
      "Product Search & Filtering",
      "Discount & Coupon Management",
      "Multi-Currency Support"
    ],
    benefits: [
      "24/7 Sales Channel",
      "Global Market Reach",
      "Lower Operational Costs",
      "Data-Driven Insights",
      "Automated Processes",
      "Improved Customer Experience"
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Next.js Commerce",
      "Stripe",
      "PayPal",
      "Square",
      "AWS"
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Understanding product catalog, payment needs, and business logic."
      },
      {
        step: 2,
        title: "Platform Selection",
        description: "Choosing the right e-commerce platform for your needs."
      },
      {
        step: 3,
        title: "Store Development",
        description: "Building and customizing your online store."
      },
      {
        step: 4,
        title: "Launch & Optimization",
        description: "Going live and continuous performance optimization."
      }
    ],
    pricing: {
      starter: "$5,000 - $15,000",
      professional: "$15,000 - $50,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-12 weeks"
  },
  {
    id: "4",
    slug: "software-development",
    name: "Software Development",
    category: "Design & Development",
    tagline: "Custom Software Solutions for Your Business",
    description: "Building bespoke software applications tailored to your specific business requirements.",
    longDescription: "We develop custom software solutions that streamline operations, improve efficiency, and solve unique business challenges. Our team creates scalable, secure, and user-friendly applications using the latest technologies and development methodologies.",
    features: [
      "Custom Business Logic",
      "Database Design & Management",
      "Third-Party Integrations",
      "User Access Control",
      "Automated Workflows",
      "Reporting & Analytics",
      "Cloud Deployment",
      "API Development"
    ],
    benefits: [
      "Tailored to Your Needs",
      "Competitive Advantage",
      "Improved Productivity",
      "Scalable Solutions",
      "Cost-Effective Long-term",
      "Full Ownership"
    ],
    technologies: [
      "Python",
      "Java",
      "C#",
      ".NET",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Docker"
    ],
    process: [
      {
        step: 1,
        title: "Requirement Gathering",
        description: "Detailed analysis of your business processes and needs."
      },
      {
        step: 2,
        title: "Architecture Design",
        description: "Designing scalable and maintainable system architecture."
      },
      {
        step: 3,
        title: "Agile Development",
        description: "Iterative development with regular feedback cycles."
      },
      {
        step: 4,
        title: "Deployment & Support",
        description: "Smooth deployment and ongoing maintenance."
      }
    ],
    pricing: {
      starter: "$15,000 - $30,000",
      professional: "$30,000 - $100,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },
  {
    id: "5",
    slug: "game-development",
    name: "Game Development",
    category: "Design & Development",
    tagline: "Create Engaging Gaming Experiences",
    description: "Developing immersive and entertaining games for mobile, web, and desktop platforms.",
    longDescription: "Our game development services bring your creative vision to life. We create engaging, high-performance games with stunning graphics, smooth gameplay, and addictive mechanics that keep players coming back for more.",
    features: [
      "2D & 3D Game Development",
      "Multiplayer Functionality",
      "In-Game Purchases",
      "Leaderboards & Achievements",
      "Cross-Platform Support",
      "Game Analytics",
      "Social Integration",
      "AR/VR Capabilities"
    ],
    benefits: [
      "Brand Engagement",
      "User Entertainment",
      "Monetization Opportunities",
      "Viral Potential",
      "Community Building",
      "Data Collection"
    ],
    technologies: [
      "Unity",
      "Unreal Engine",
      "Godot",
      "Phaser",
      "Three.js",
      "C++",
      "C#",
      "WebGL"
    ],
    process: [
      {
        step: 1,
        title: "Concept Design",
        description: "Creating game concept, storyline, and mechanics."
      },
      {
        step: 2,
        title: "Asset Creation",
        description: "Developing graphics, animations, and sound effects."
      },
      {
        step: 3,
        title: "Game Development",
        description: "Programming game logic and implementing features."
      },
      {
        step: 4,
        title: "Testing & Release",
        description: "Quality testing and platform deployment."
      }
    ],
    pricing: {
      starter: "$20,000 - $50,000",
      professional: "$50,000 - $150,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "16-32 weeks"
  },
  {
    id: "6",
    slug: "bespoke-development",
    name: "Bespoke Development",
    category: "Design & Development",
    tagline: "Tailored Solutions for Unique Requirements",
    description: "Creating completely customized solutions designed specifically for your business needs.",
    longDescription: "Bespoke development is about creating software that fits your business like a glove. We don't believe in one-size-fits-all solutions. Instead, we craft custom applications that address your specific challenges and opportunities.",
    features: [
      "100% Custom Development",
      "Proprietary Features",
      "Flexible Architecture",
      "Custom Integrations",
      "Unique User Workflows",
      "Specialized Functionality",
      "Complete Control",
      "Future-Proof Design"
    ],
    benefits: [
      "Perfect Fit for Your Needs",
      "Unique Competitive Edge",
      "Full Customization",
      "No License Fees",
      "Complete Ownership",
      "Unlimited Scalability"
    ],
    technologies: [
      "React",
      "Angular",
      "Vue.js",
      "Python",
      "Ruby on Rails",
      "Laravel",
      "Spring Boot",
      "Microservices"
    ],
    process: [
      {
        step: 1,
        title: "Deep Discovery",
        description: "Comprehensive understanding of your unique requirements."
      },
      {
        step: 2,
        title: "Custom Design",
        description: "Designing solutions tailored to your workflows."
      },
      {
        step: 3,
        title: "Bespoke Development",
        description: "Building custom features and functionality."
      },
      {
        step: 4,
        title: "Ongoing Evolution",
        description: "Continuous enhancement based on feedback."
      }
    ],
    pricing: {
      starter: "$25,000 - $50,000",
      professional: "$50,000 - $150,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "16-40 weeks"
  },
  {
    id: "7",
    slug: "api-development",
    name: "API Development",
    category: "Design & Development",
    tagline: "Seamless Integration Through Robust APIs",
    description: "Building secure and scalable APIs for seamless integration between systems and services.",
    longDescription: "Our API development services enable your applications to communicate effectively with other systems. We create RESTful and GraphQL APIs that are secure, well-documented, and designed for optimal performance and scalability.",
    features: [
      "RESTful API Design",
      "GraphQL APIs",
      "API Authentication & Security",
      "Rate Limiting",
      "API Documentation",
      "Version Management",
      "Webhook Integration",
      "Real-time APIs"
    ],
    benefits: [
      "Seamless Integration",
      "Data Accessibility",
      "Improved Efficiency",
      "Third-Party Connections",
      "Microservices Architecture",
      "Platform Independence"
    ],
    technologies: [
      "Node.js",
      "Express",
      "FastAPI",
      "Django REST",
      "GraphQL",
      "Swagger",
      "Postman",
      "API Gateway"
    ],
    process: [
      {
        step: 1,
        title: "API Planning",
        description: "Defining endpoints, data models, and authentication."
      },
      {
        step: 2,
        title: "Development",
        description: "Building and testing API endpoints."
      },
      {
        step: 3,
        title: "Documentation",
        description: "Creating comprehensive API documentation."
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description: "Deploying APIs with monitoring and analytics."
      }
    ],
    pricing: {
      starter: "$5,000 - $15,000",
      professional: "$15,000 - $40,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "4-10 weeks"
  },
  {
    id: "8",
    slug: "custom-software-integration",
    name: "Custom Software Integration",
    category: "Design & Development",
    tagline: "Connect Your Systems Seamlessly",
    description: "Integrating diverse software systems to work together harmoniously and efficiently.",
    longDescription: "We specialize in connecting disparate software systems to create a unified, efficient technology ecosystem. Our integration services ensure your tools and platforms communicate seamlessly, eliminating data silos and improving workflow efficiency.",
    features: [
      "System-to-System Integration",
      "Data Synchronization",
      "Legacy System Integration",
      "Cloud Integration",
      "Enterprise Application Integration",
      "Real-time Data Flow",
      "Automated Workflows",
      "Error Handling & Logging"
    ],
    benefits: [
      "Improved Data Accuracy",
      "Reduced Manual Work",
      "Better Decision Making",
      "Cost Savings",
      "Enhanced Productivity",
      "Unified Platform"
    ],
    technologies: [
      "Zapier",
      "MuleSoft",
      "Apache Kafka",
      "RabbitMQ",
      "Azure Integration",
      "AWS Lambda",
      "Webhooks",
      "ETL Tools"
    ],
    process: [
      {
        step: 1,
        title: "System Analysis",
        description: "Analyzing existing systems and integration needs."
      },
      {
        step: 2,
        title: "Integration Design",
        description: "Planning integration architecture and data flow."
      },
      {
        step: 3,
        title: "Implementation",
        description: "Building and configuring integration solutions."
      },
      {
        step: 4,
        title: "Testing & Maintenance",
        description: "Ensuring reliable operation and ongoing support."
      }
    ],
    pricing: {
      starter: "$8,000 - $20,000",
      professional: "$20,000 - $60,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-14 weeks"
  },

  // Enterprise Services
  {
    id: "9",
    slug: "crm-solutions",
    name: "CRM Solutions",
    category: "Enterprise Services",
    tagline: "Manage Customer Relationships Effectively",
    description: "Implementing and customizing CRM systems to enhance customer relationships and sales processes.",
    longDescription: "Our CRM solutions help businesses manage customer interactions, streamline sales processes, and improve customer satisfaction. We implement, customize, and integrate leading CRM platforms to fit your unique business needs.",
    features: [
      "Contact Management",
      "Sales Pipeline Tracking",
      "Marketing Automation",
      "Customer Service Tools",
      "Analytics & Reporting",
      "Email Integration",
      "Mobile CRM Access",
      "Custom Workflows"
    ],
    benefits: [
      "Better Customer Insights",
      "Increased Sales",
      "Improved Customer Retention",
      "Streamlined Processes",
      "Data-Driven Decisions",
      "Enhanced Collaboration"
    ],
    technologies: [
      "Salesforce",
      "HubSpot CRM",
      "Zoho CRM",
      "Microsoft Dynamics",
      "Pipedrive",
      "SugarCRM",
      "Custom CRM",
      "API Integration"
    ],
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description: "Understanding your sales and customer management needs."
      },
      {
        step: 2,
        title: "Platform Selection",
        description: "Choosing the right CRM for your business."
      },
      {
        step: 3,
        title: "Customization & Setup",
        description: "Configuring CRM to match your processes."
      },
      {
        step: 4,
        title: "Training & Support",
        description: "User training and ongoing support."
      }
    ],
    pricing: {
      starter: "$10,000 - $25,000",
      professional: "$25,000 - $75,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-16 weeks"
  },
  {
    id: "10",
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    category: "Enterprise Services",
    tagline: "Scale Your Business with Cloud Technology",
    description: "Migrating and managing your infrastructure on cloud platforms for better scalability and reliability.",
    longDescription: "We help businesses leverage cloud technology to reduce costs, improve scalability, and enhance performance. Our cloud solutions include migration, deployment, management, and optimization across major cloud platforms.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Auto-scaling",
      "Load Balancing",
      "Cloud Security",
      "Disaster Recovery",
      "Multi-Cloud Strategy",
      "Cost Optimization"
    ],
    benefits: [
      "Reduced IT Costs",
      "Improved Scalability",
      "Enhanced Security",
      "Better Performance",
      "Global Accessibility",
      "Automatic Updates"
    ],
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "Terraform",
      "CloudFormation",
      "Jenkins"
    ],
    process: [
      {
        step: 1,
        title: "Cloud Assessment",
        description: "Evaluating current infrastructure and cloud readiness."
      },
      {
        step: 2,
        title: "Migration Planning",
        description: "Creating detailed migration strategy and timeline."
      },
      {
        step: 3,
        title: "Migration & Deployment",
        description: "Moving workloads to cloud with minimal disruption."
      },
      {
        step: 4,
        title: "Optimization & Management",
        description: "Continuous monitoring and cost optimization."
      }
    ],
    pricing: {
      starter: "$15,000 - $35,000",
      professional: "$35,000 - $100,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-20 weeks"
  },
  {
    id: "11",
    slug: "iot-solutions",
    name: "IoT Solutions",
    category: "Enterprise Services",
    tagline: "Connect and Control Your Devices",
    description: "Building Internet of Things solutions that connect devices and enable smart automation.",
    longDescription: "Our IoT solutions help businesses harness the power of connected devices. We design and implement IoT systems that collect data, enable remote monitoring, and automate processes for improved efficiency and insights.",
    features: [
      "Device Connectivity",
      "Real-time Monitoring",
      "Data Collection & Analytics",
      "Remote Control",
      "Alert Systems",
      "Edge Computing",
      "Predictive Maintenance",
      "Dashboard & Visualization"
    ],
    benefits: [
      "Operational Efficiency",
      "Cost Reduction",
      "Predictive Analytics",
      "Remote Management",
      "Data-Driven Insights",
      "Improved Safety"
    ],
    technologies: [
      "MQTT",
      "Arduino",
      "Raspberry Pi",
      "AWS IoT",
      "Azure IoT",
      "Node-RED",
      "InfluxDB",
      "Grafana"
    ],
    process: [
      {
        step: 1,
        title: "Use Case Definition",
        description: "Identifying IoT opportunities and requirements."
      },
      {
        step: 2,
        title: "Architecture Design",
        description: "Designing IoT infrastructure and data flow."
      },
      {
        step: 3,
        title: "Development & Integration",
        description: "Building IoT solutions and integrating devices."
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description: "Deploying solutions with ongoing monitoring."
      }
    ],
    pricing: {
      starter: "$20,000 - $50,000",
      professional: "$50,000 - $150,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },
  {
    id: "12",
    slug: "data-engineering",
    name: "Data Engineering",
    category: "Enterprise Services",
    tagline: "Build Robust Data Infrastructure",
    description: "Creating scalable data pipelines and infrastructure for efficient data processing and analysis.",
    longDescription: "We build robust data engineering solutions that enable businesses to collect, process, and analyze large volumes of data. Our services include data pipeline development, warehouse design, and ETL processes.",
    features: [
      "Data Pipeline Development",
      "ETL/ELT Processes",
      "Data Warehouse Design",
      "Real-time Data Processing",
      "Data Quality Management",
      "Big Data Solutions",
      "Data Lake Architecture",
      "Stream Processing"
    ],
    benefits: [
      "Better Data Quality",
      "Faster Analytics",
      "Scalable Infrastructure",
      "Cost-Effective Storage",
      "Real-time Insights",
      "Data Governance"
    ],
    technologies: [
      "Apache Spark",
      "Apache Kafka",
      "Airflow",
      "Snowflake",
      "Databricks",
      "BigQuery",
      "Redshift",
      "dbt"
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment",
        description: "Analyzing data sources and requirements."
      },
      {
        step: 2,
        title: "Architecture Planning",
        description: "Designing data infrastructure and pipelines."
      },
      {
        step: 3,
        title: "Pipeline Development",
        description: "Building and testing data pipelines."
      },
      {
        step: 4,
        title: "Monitoring & Optimization",
        description: "Ensuring reliable data flow and performance."
      }
    ],
    pricing: {
      starter: "$25,000 - $60,000",
      professional: "$60,000 - $150,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },
  {
    id: "13",
    slug: "ai-ml",
    name: "AI/ML",
    category: "Enterprise Services",
    tagline: "Harness the Power of Artificial Intelligence",
    description: "Implementing AI and machine learning solutions to automate processes and gain insights.",
    longDescription: "Our AI/ML services help businesses leverage artificial intelligence and machine learning to automate tasks, predict outcomes, and uncover valuable insights from data. We develop custom models and integrate AI capabilities into your existing systems.",
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Chatbots & Virtual Assistants",
      "Anomaly Detection",
      "Machine Learning Models",
      "Deep Learning"
    ],
    benefits: [
      "Automated Decision Making",
      "Improved Accuracy",
      "Cost Reduction",
      "Personalized Experiences",
      "Competitive Advantage",
      "Scalable Intelligence"
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI",
      "Hugging Face",
      "Python",
      "Jupyter",
      "MLflow"
    ],
    process: [
      {
        step: 1,
        title: "Problem Definition",
        description: "Identifying AI/ML use cases and objectives."
      },
      {
        step: 2,
        title: "Data Preparation",
        description: "Collecting and preparing training data."
      },
      {
        step: 3,
        title: "Model Development",
        description: "Training and validating ML models."
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description: "Deploying models with continuous monitoring."
      }
    ],
    pricing: {
      starter: "$30,000 - $75,000",
      professional: "$75,000 - $200,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "16-32 weeks"
  },
  {
    id: "14",
    slug: "salesforce",
    name: "Salesforce",
    category: "Enterprise Services",
    tagline: "Transform Your Business with Salesforce",
    description: "Implementing and customizing Salesforce CRM to optimize your sales and customer service processes.",
    longDescription: "As certified Salesforce partners, we help businesses maximize their Salesforce investment through implementation, customization, integration, and ongoing support. We tailor Salesforce to your unique business processes.",
    features: [
      "Salesforce Implementation",
      "Custom App Development",
      "Lightning Web Components",
      "Apex Development",
      "Integration Services",
      "Data Migration",
      "Salesforce CPQ",
      "Marketing Cloud"
    ],
    benefits: [
      "360° Customer View",
      "Increased Productivity",
      "Better Collaboration",
      "Automated Workflows",
      "Enhanced Reporting",
      "Scalable Platform"
    ],
    technologies: [
      "Salesforce Sales Cloud",
      "Service Cloud",
      "Marketing Cloud",
      "Apex",
      "Visualforce",
      "Lightning",
      "Heroku",
      "MuleSoft"
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Understanding your Salesforce needs and goals."
      },
      {
        step: 2,
        title: "Configuration",
        description: "Setting up and customizing Salesforce."
      },
      {
        step: 3,
        title: "Development & Integration",
        description: "Building custom solutions and integrations."
      },
      {
        step: 4,
        title: "Training & Support",
        description: "User adoption and ongoing support."
      }
    ],
    pricing: {
      starter: "$15,000 - $40,000",
      professional: "$40,000 - $120,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-20 weeks"
  },
  {
    id: "15",
    slug: "hubspot",
    name: "HubSpot",
    category: "Enterprise Services",
    tagline: "Grow Better with HubSpot",
    description: "Implementing HubSpot CRM and marketing automation to drive growth and customer engagement.",
    longDescription: "We help businesses leverage HubSpot's powerful CRM, marketing, sales, and service tools. Our services include implementation, customization, integration, and training to ensure you get the most from HubSpot.",
    features: [
      "HubSpot CRM Setup",
      "Marketing Automation",
      "Email Marketing",
      "Lead Scoring",
      "Workflow Automation",
      "Custom Integrations",
      "Reporting Dashboards",
      "Sales Pipeline Management"
    ],
    benefits: [
      "Aligned Sales & Marketing",
      "Lead Nurturing",
      "Improved Conversion",
      "Better Analytics",
      "Enhanced Customer Service",
      "All-in-One Platform"
    ],
    technologies: [
      "HubSpot CRM",
      "Marketing Hub",
      "Sales Hub",
      "Service Hub",
      "CMS Hub",
      "HubSpot API",
      "Workflows",
      "Custom Objects"
    ],
    process: [
      {
        step: 1,
        title: "Strategy Planning",
        description: "Defining your HubSpot strategy and goals."
      },
      {
        step: 2,
        title: "Platform Setup",
        description: "Configuring HubSpot hubs and tools."
      },
      {
        step: 3,
        title: "Customization",
        description: "Building custom workflows and integrations."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Ongoing optimization and support."
      }
    ],
    pricing: {
      starter: "$10,000 - $30,000",
      professional: "$30,000 - $80,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-16 weeks"
  },
  {
    id: "16",
    slug: "zoho",
    name: "Zoho",
    category: "Enterprise Services",
    tagline: "Complete Business Suite with Zoho",
    description: "Implementing Zoho applications to streamline business operations and customer relationships.",
    longDescription: "We specialize in Zoho's comprehensive suite of business applications. From CRM to project management, we help businesses implement and customize Zoho solutions for their specific needs.",
    features: [
      "Zoho CRM Implementation",
      "Zoho Books Integration",
      "Project Management",
      "Custom Functions",
      "Zoho Creator Apps",
      "Email Integration",
      "Automation Workflows",
      "Multi-App Integration"
    ],
    benefits: [
      "Cost-Effective Solution",
      "Integrated Platform",
      "Easy Customization",
      "Scalable Tools",
      "Mobile Access",
      "Comprehensive Suite"
    ],
    technologies: [
      "Zoho CRM",
      "Zoho Creator",
      "Zoho Books",
      "Zoho Projects",
      "Deluge Script",
      "Zoho Flow",
      "Zoho Analytics",
      "Zoho Desk"
    ],
    process: [
      {
        step: 1,
        title: "Requirement Analysis",
        description: "Understanding your business processes."
      },
      {
        step: 2,
        title: "Application Setup",
        description: "Configuring Zoho applications."
      },
      {
        step: 3,
        title: "Customization",
        description: "Building custom modules and workflows."
      },
      {
        step: 4,
        title: "Training & Support",
        description: "User training and ongoing assistance."
      }
    ],
    pricing: {
      starter: "$8,000 - $20,000",
      professional: "$20,000 - $60,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-14 weeks"
  },
  {
    id: "17",
    slug: "servicenow",
    name: "ServiceNow",
    category: "Enterprise Services",
    tagline: "Transform IT Service Management",
    description: "Implementing ServiceNow for IT service management and enterprise workflow automation.",
    longDescription: "We help organizations implement and optimize ServiceNow to streamline IT operations, automate workflows, and improve service delivery. Our expertise covers ITSM, ITOM, and custom application development.",
    features: [
      "ITSM Implementation",
      "Incident Management",
      "Change Management",
      "Service Catalog",
      "CMDB Configuration",
      "Custom Workflows",
      "Integration Hub",
      "Performance Analytics"
    ],
    benefits: [
      "Improved Service Delivery",
      "Reduced Downtime",
      "Automated Processes",
      "Better Visibility",
      "Enhanced Productivity",
      "Compliance Management"
    ],
    technologies: [
      "ServiceNow ITSM",
      "ITOM",
      "ITBM",
      "Flow Designer",
      "IntegrationHub",
      "Service Portal",
      "GlideScript",
      "REST APIs"
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Evaluating current IT processes."
      },
      {
        step: 2,
        title: "Implementation",
        description: "Setting up ServiceNow modules."
      },
      {
        step: 3,
        title: "Customization",
        description: "Building custom workflows and apps."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Continuous improvement and support."
      }
    ],
    pricing: {
      starter: "$25,000 - $60,000",
      professional: "$60,000 - $150,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },
  {
    id: "18",
    slug: "ms-dynamics",
    name: "MS Dynamics",
    category: "Enterprise Services",
    tagline: "Microsoft Dynamics for Enterprise Excellence",
    description: "Implementing Microsoft Dynamics 365 for CRM, ERP, and business intelligence.",
    longDescription: "We provide comprehensive Microsoft Dynamics 365 services including implementation, customization, and integration. Our solutions help businesses unify their operations, sales, and customer service on a single platform.",
    features: [
      "Dynamics 365 Implementation",
      "CRM & ERP Integration",
      "Power Platform Development",
      "Custom Entity Creation",
      "Business Process Flows",
      "Power BI Integration",
      "Azure Integration",
      "Data Migration"
    ],
    benefits: [
      "Unified Platform",
      "Microsoft Integration",
      "Scalable Solution",
      "AI-Powered Insights",
      "Cloud-Based Access",
      "Enhanced Collaboration"
    ],
    technologies: [
      "Dynamics 365",
      "Power Apps",
      "Power Automate",
      "Power BI",
      "Azure",
      "C#",
      "JavaScript",
      "Common Data Service"
    ],
    process: [
      {
        step: 1,
        title: "Business Analysis",
        description: "Understanding your business requirements."
      },
      {
        step: 2,
        title: "System Design",
        description: "Designing Dynamics 365 architecture."
      },
      {
        step: 3,
        title: "Implementation",
        description: "Deploying and customizing Dynamics 365."
      },
      {
        step: 4,
        title: "Training & Support",
        description: "User enablement and ongoing support."
      }
    ],
    pricing: {
      starter: "$20,000 - $50,000",
      professional: "$50,000 - $150,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "10-20 weeks"
  },

  // Support Services
  {
    id: "19",
    slug: "hosting",
    name: "Hosting",
    category: "Support Services",
    tagline: "Reliable and Secure Web Hosting",
    description: "Providing fast, secure, and reliable hosting solutions for your websites and applications.",
    longDescription: "Our hosting services ensure your websites and applications are always available, fast, and secure. We offer managed hosting solutions with 24/7 monitoring, automatic backups, and expert support.",
    features: [
      "99.9% Uptime Guarantee",
      "SSD Storage",
      "CDN Integration",
      "SSL Certificates",
      "Automated Backups",
      "DDoS Protection",
      "24/7 Monitoring",
      "Email Hosting"
    ],
    benefits: [
      "High Performance",
      "Maximum Security",
      "Reliable Uptime",
      "Expert Support",
      "Scalable Resources",
      "Cost-Effective"
    ],
    technologies: [
      "AWS",
      "DigitalOcean",
      "Cloudflare",
      "Nginx",
      "Apache",
      "cPanel",
      "Let's Encrypt",
      "Linux"
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Understanding your hosting needs."
      },
      {
        step: 2,
        title: "Server Setup",
        description: "Configuring optimal hosting environment."
      },
      {
        step: 3,
        title: "Migration",
        description: "Seamless migration of your website."
      },
      {
        step: 4,
        title: "Ongoing Management",
        description: "Continuous monitoring and maintenance."
      }
    ],
    pricing: {
      starter: "$50 - $200/month",
      professional: "$200 - $1,000/month",
      enterprise: "Custom Quote"
    },
    deliveryTime: "1-2 weeks"
  },
  {
    id: "20",
    slug: "server-support",
    name: "Server Support",
    category: "Support Services",
    tagline: "24/7 Server Management and Support",
    description: "Comprehensive server management and support services to keep your infrastructure running smoothly.",
    longDescription: "Our server support services provide round-the-clock monitoring, maintenance, and troubleshooting for your servers. We ensure optimal performance, security, and reliability of your server infrastructure.",
    features: [
      "24/7 Server Monitoring",
      "Security Patches",
      "Performance Optimization",
      "Backup Management",
      "Disaster Recovery",
      "Troubleshooting",
      "Configuration Management",
      "Capacity Planning"
    ],
    benefits: [
      "Reduced Downtime",
      "Enhanced Security",
      "Expert Assistance",
      "Proactive Monitoring",
      "Peace of Mind",
      "Cost Savings"
    ],
    technologies: [
      "Linux",
      "Windows Server",
      "Nagios",
      "Zabbix",
      "Prometheus",
      "Ansible",
      "Puppet",
      "Chef"
    ],
    process: [
      {
        step: 1,
        title: "Server Audit",
        description: "Comprehensive server infrastructure assessment."
      },
      {
        step: 2,
        title: "Monitoring Setup",
        description: "Implementing monitoring and alerting."
      },
      {
        step: 3,
        title: "Ongoing Support",
        description: "Continuous monitoring and maintenance."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Regular performance tuning."
      }
    ],
    pricing: {
      starter: "$500 - $1,500/month",
      professional: "$1,500 - $5,000/month",
      enterprise: "Custom Quote"
    },
    deliveryTime: "Ongoing"
  },
  {
    id: "21",
    slug: "development-support",
    name: "Development Support",
    category: "Support Services",
    tagline: "Ongoing Development and Maintenance",
    description: "Continuous development support to maintain and enhance your applications.",
    longDescription: "Our development support services provide ongoing maintenance, bug fixes, feature enhancements, and technical support for your applications. We ensure your software stays up-to-date and performs optimally.",
    features: [
      "Bug Fixes",
      "Feature Enhancements",
      "Code Refactoring",
      "Performance Optimization",
      "Security Updates",
      "Technical Support",
      "Documentation Updates",
      "Version Upgrades"
    ],
    benefits: [
      "Continuous Improvement",
      "Quick Issue Resolution",
      "Reduced Technical Debt",
      "Expert Guidance",
      "Flexible Engagement",
      "Cost-Effective"
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PHP",
      "Java",
      "Git",
      "JIRA",
      "CI/CD"
    ],
    process: [
      {
        step: 1,
        title: "Onboarding",
        description: "Understanding your application and codebase."
      },
      {
        step: 2,
        title: "Support Setup",
        description: "Establishing communication and workflow."
      },
      {
        step: 3,
        title: "Ongoing Support",
        description: "Regular maintenance and enhancements."
      },
      {
        step: 4,
        title: "Reporting",
        description: "Regular progress reports and updates."
      }
    ],
    pricing: {
      starter: "$2,000 - $5,000/month",
      professional: "$5,000 - $15,000/month",
      enterprise: "Custom Quote"
    },
    deliveryTime: "Ongoing"
  },
  {
    id: "22",
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    category: "Support Services",
    tagline: "Extend Your Team with Expert Developers",
    description: "Providing skilled developers to augment your team and accelerate project delivery.",
    longDescription: "Our staff augmentation services help you scale your development team quickly with experienced professionals. We provide vetted developers who integrate seamlessly with your existing team.",
    features: [
      "Skilled Developers",
      "Flexible Engagement",
      "Quick Onboarding",
      "Various Tech Stacks",
      "Remote or On-site",
      "Dedicated Resources",
      "Team Integration",
      "Knowledge Transfer"
    ],
    benefits: [
      "Faster Time to Market",
      "Cost-Effective Scaling",
      "Access to Expertise",
      "Reduced Hiring Risk",
      "Flexibility",
      "Focus on Core Business"
    ],
    technologies: [
      "Full Stack",
      "Frontend",
      "Backend",
      "Mobile",
      "DevOps",
      "QA",
      "UI/UX",
      "Data Science"
    ],
    process: [
      {
        step: 1,
        title: "Requirement Analysis",
        description: "Understanding your staffing needs."
      },
      {
        step: 2,
        title: "Resource Selection",
        description: "Matching skilled professionals to your needs."
      },
      {
        step: 3,
        title: "Onboarding",
        description: "Integrating resources with your team."
      },
      {
        step: 4,
        title: "Ongoing Management",
        description: "Ensuring productivity and quality."
      }
    ],
    pricing: {
      starter: "$3,000 - $6,000/month per resource",
      professional: "$6,000 - $12,000/month per resource",
      enterprise: "Custom Quote"
    },
    deliveryTime: "1-2 weeks"
  },
  {
    id: "23",
    slug: "digital-fulfilment",
    name: "Digital Fulfilment",
    category: "Support Services",
    tagline: "Complete Digital Project Execution",
    description: "End-to-end digital project management and execution services.",
    longDescription: "Our digital fulfilment services handle complete project execution from planning to delivery. We manage all aspects of your digital projects ensuring timely delivery and quality outcomes.",
    features: [
      "Project Management",
      "Resource Allocation",
      "Timeline Management",
      "Quality Assurance",
      "Stakeholder Communication",
      "Risk Management",
      "Delivery Management",
      "Post-Launch Support"
    ],
    benefits: [
      "On-Time Delivery",
      "Quality Assurance",
      "Reduced Risk",
      "Expert Management",
      "Clear Communication",
      "Predictable Outcomes"
    ],
    technologies: [
      "Agile",
      "Scrum",
      "JIRA",
      "Trello",
      "Asana",
      "Slack",
      "Git",
      "CI/CD"
    ],
    process: [
      {
        step: 1,
        title: "Project Planning",
        description: "Detailed project scope and planning."
      },
      {
        step: 2,
        title: "Execution",
        description: "Managing development and delivery."
      },
      {
        step: 3,
        title: "Quality Control",
        description: "Testing and quality assurance."
      },
      {
        step: 4,
        title: "Delivery & Support",
        description: "Launch and post-launch support."
      }
    ],
    pricing: {
      starter: "$5,000 - $15,000",
      professional: "$15,000 - $50,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "Project-based"
  },
  {
    id: "24",
    slug: "it-support-services",
    name: "IT Support Services",
    category: "Support Services",
    tagline: "Comprehensive IT Support Solutions",
    description: "Full-spectrum IT support services to keep your technology running smoothly.",
    longDescription: "Our IT support services provide comprehensive technical assistance for all your technology needs. From helpdesk support to infrastructure management, we ensure your IT systems run efficiently.",
    features: [
      "Helpdesk Support",
      "Remote Assistance",
      "Hardware Support",
      "Software Support",
      "Network Management",
      "User Training",
      "IT Consulting",
      "Vendor Management"
    ],
    benefits: [
      "Reduced Downtime",
      "Improved Productivity",
      "Expert Support",
      "Predictable Costs",
      "Proactive Monitoring",
      "Peace of Mind"
    ],
    technologies: [
      "Windows",
      "macOS",
      "Linux",
      "Office 365",
      "Google Workspace",
      "VPN",
      "Networking",
      "Security Tools"
    ],
    process: [
      {
        step: 1,
        title: "IT Assessment",
        description: "Evaluating your IT infrastructure."
      },
      {
        step: 2,
        title: "Support Setup",
        description: "Implementing support systems."
      },
      {
        step: 3,
        title: "Ongoing Support",
        description: "Providing continuous IT assistance."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Regular infrastructure improvements."
      }
    ],
    pricing: {
      starter: "$1,000 - $3,000/month",
      professional: "$3,000 - $10,000/month",
      enterprise: "Custom Quote"
    },
    deliveryTime: "Ongoing"
  },
  {
    id: "25",
    slug: "devops",
    name: "DevOps",
    category: "Support Services",
    tagline: "Streamline Development and Operations",
    description: "DevOps services to automate, optimize, and accelerate software delivery.",
    longDescription: "Our DevOps services help organizations implement continuous integration, continuous delivery, and infrastructure automation. We streamline your development and deployment processes for faster, more reliable releases.",
    features: [
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Containerization",
      "Orchestration",
      "Monitoring & Logging",
      "Automated Testing",
      "Security Integration",
      "Performance Optimization"
    ],
    benefits: [
      "Faster Deployments",
      "Improved Quality",
      "Reduced Failures",
      "Better Collaboration",
      "Cost Optimization",
      "Scalable Infrastructure"
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "Ansible",
      "AWS",
      "Azure DevOps"
    ],
    process: [
      {
        step: 1,
        title: "DevOps Assessment",
        description: "Evaluating current development processes."
      },
      {
        step: 2,
        title: "Strategy & Planning",
        description: "Designing DevOps implementation roadmap."
      },
      {
        step: 3,
        title: "Implementation",
        description: "Setting up CI/CD and automation."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Continuous improvement and monitoring."
      }
    ],
    pricing: {
      starter: "$10,000 - $30,000",
      professional: "$30,000 - $80,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-16 weeks"
  },

  // Digital Marketing Services
  {
    id: "26",
    slug: "search-engine-optimization",
    name: "Search Engine Optimization",
    category: "Digital Marketing",
    tagline: "Boost Your Search Rankings",
    description: "Comprehensive SEO services to improve your website's visibility and organic traffic.",
    longDescription: "Our SEO services help businesses rank higher in search results and attract more organic traffic. We use proven strategies including on-page optimization, content creation, link building, and technical SEO.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Link Building",
      "Content Strategy",
      "Local SEO",
      "SEO Audits",
      "Competitor Analysis"
    ],
    benefits: [
      "Increased Organic Traffic",
      "Higher Rankings",
      "Better ROI",
      "Brand Authority",
      "Long-term Results",
      "Targeted Traffic"
    ],
    technologies: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Moz",
      "Screaming Frog",
      "Schema Markup",
      "GTmetrix"
    ],
    process: [
      {
        step: 1,
        title: "SEO Audit",
        description: "Comprehensive website and competitor analysis."
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Creating customized SEO roadmap."
      },
      {
        step: 3,
        title: "Implementation",
        description: "Executing on-page and off-page optimization."
      },
      {
        step: 4,
        title: "Monitoring & Reporting",
        description: "Tracking rankings and performance."
      }
    ],
    pricing: {
      starter: "$1,000 - $3,000/month",
      professional: "$3,000 - $10,000/month",
      enterprise: "Custom Quote"
    },
    deliveryTime: "Ongoing (3-6 months to see results)"
  },
  {
    id: "27",
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    category: "Digital Marketing",
    tagline: "Engage Your Audience on Social Media",
    description: "Strategic social media marketing to build brand awareness and engage your audience.",
    longDescription: "Our social media marketing services help businesses build strong social presence, engage with their audience, and drive conversions. We create and execute data-driven social media strategies across all major platforms.",
    features: [
      "Social Strategy",
      "Content Creation",
      "Community Management",
      "Paid Social Advertising",
      "Influencer Marketing",
      "Analytics & Reporting",
      "Social Listening",
      "Brand Monitoring"
    ],
    benefits: [
      "Increased Brand Awareness",
      "Better Engagement",
      "Lead Generation",
      "Customer Loyalty",
      "Market Insights",
      "Competitive Edge"
    ],
    technologies: [
      "Facebook Business",
      "Instagram",
      "LinkedIn",
      "Twitter",
      "TikTok",
      "Hootsuite",
      "Buffer",
      "Sprout Social"
    ],
    process: [
      {
        step: 1,
        title: "Strategy Planning",
        description: "Developing social media strategy."
      },
      {
        step: 2,
        title: "Content Creation",
        description: "Creating engaging social content."
      },
      {
        step: 3,
        title: "Execution",
        description: "Publishing and community management."
      },
      {
        step: 4,
        title: "Analysis & Optimization",
        description: "Tracking metrics and optimizing."
      }
    ],
    pricing: {
      starter: "$1,500 - $4,000/month",
      professional: "$4,000 - $12,000/month",
      enterprise: "Custom Quote"
    },
    deliveryTime: "Ongoing"
  },
  {
    id: "28",
    slug: "pay-per-click",
    name: "Pay Per Click",
    category: "Digital Marketing",
    tagline: "Drive Instant Traffic with PPC",
    description: "Targeted PPC campaigns to drive qualified traffic and maximize ROI.",
    longDescription: "Our PPC services help businesses generate immediate traffic and leads through paid advertising. We manage campaigns on Google Ads, Facebook Ads, and other platforms to deliver measurable results.",
    features: [
      "Campaign Strategy",
      "Keyword Research",
      "Ad Creation",
      "Landing Page Optimization",
      "Bid Management",
      "A/B Testing",
      "Conversion Tracking",
      "Performance Reporting"
    ],
    benefits: [
      "Immediate Results",
      "Targeted Traffic",
      "Measurable ROI",
      "Budget Control",
      "Brand Visibility",
      "Competitive Advantage"
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "LinkedIn Ads",
      "Microsoft Ads",
      "Google Analytics",
      "Google Tag Manager",
      "Unbounce",
      "Hotjar"
    ],
    process: [
      {
        step: 1,
        title: "Campaign Planning",
        description: "Setting goals and strategy."
      },
      {
        step: 2,
        title: "Setup & Launch",
        description: "Creating and launching campaigns."
      },
      {
        step: 3,
        title: "Optimization",
        description: "Continuous testing and refinement."
      },
      {
        step: 4,
        title: "Reporting",
        description: "Regular performance analysis."
      }
    ],
    pricing: {
      starter: "$1,000 - $3,000/month + ad spend",
      professional: "$3,000 - $10,000/month + ad spend",
      enterprise: "Custom Quote + ad spend"
    },
    deliveryTime: "Ongoing"
  },
  {
    id: "29",
    slug: "orm",
    name: "ORM",
    category: "Digital Marketing",
    tagline: "Protect and Enhance Your Online Reputation",
    description: "Online Reputation Management services to monitor and improve your brand's online presence.",
    longDescription: "Our ORM services help businesses monitor, manage, and improve their online reputation. We track mentions, respond to reviews, and implement strategies to build a positive brand image online.",
    features: [
      "Reputation Monitoring",
      "Review Management",
      "Crisis Management",
      "Brand Mentions Tracking",
      "Negative Content Suppression",
      "Positive Content Promotion",
      "Social Media Monitoring",
      "Sentiment Analysis"
    ],
    benefits: [
      "Improved Brand Image",
      "Customer Trust",
      "Crisis Prevention",
      "Better Reviews",
      "Competitive Advantage",
      "Increased Sales"
    ],
    technologies: [
      "Brand24",
      "Mention",
      "ReviewTrackers",
      "Google Alerts",
      "Trustpilot",
      "Yelp",
      "Social Mention",
      "SEMrush"
    ],
    process: [
      {
        step: 1,
        title: "Reputation Audit",
        description: "Analyzing current online reputation."
      },
      {
        step: 2,
        title: "Strategy Development",
        description: "Creating ORM action plan."
      },
      {
        step: 3,
        title: "Implementation",
        description: "Executing reputation management tactics."
      },
      {
        step: 4,
        title: "Monitoring & Reporting",
        description: "Continuous tracking and updates."
      }
    ],
    pricing: {
      starter: "$1,500 - $4,000/month",
      professional: "$4,000 - $12,000/month",
      enterprise: "Custom Quote"
    },
    deliveryTime: "Ongoing"
  },
  {
    id: "30",
    slug: "performance-optimization",
    name: "Performance Optimization",
    category: "Digital Marketing",
    tagline: "Maximize Your Website Performance",
    description: "Website performance optimization to improve speed, user experience, and conversion rates.",
    longDescription: "Our performance optimization services ensure your website loads fast and provides an excellent user experience. We optimize code, images, and infrastructure to improve speed, SEO, and conversions.",
    features: [
      "Speed Optimization",
      "Image Optimization",
      "Code Minification",
      "Caching Implementation",
      "CDN Setup",
      "Database Optimization",
      "Mobile Optimization",
      "Core Web Vitals"
    ],
    benefits: [
      "Faster Load Times",
      "Better SEO Rankings",
      "Higher Conversions",
      "Improved User Experience",
      "Reduced Bounce Rate",
      "Better Mobile Performance"
    ],
    technologies: [
      "Google PageSpeed",
      "GTmetrix",
      "WebPageTest",
      "Cloudflare",
      "Redis",
      "Varnish",
      "ImageOptim",
      "Lighthouse"
    ],
    process: [
      {
        step: 1,
        title: "Performance Audit",
        description: "Analyzing current website performance."
      },
      {
        step: 2,
        title: "Optimization Plan",
        description: "Creating prioritized improvement roadmap."
      },
      {
        step: 3,
        title: "Implementation",
        description: "Executing optimization techniques."
      },
      {
        step: 4,
        title: "Testing & Monitoring",
        description: "Verifying improvements and ongoing monitoring."
      }
    ],
    pricing: {
      starter: "$2,000 - $5,000",
      professional: "$5,000 - $15,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "2-6 weeks"
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get services by category
export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

// Helper function to get all categories
export const getCategories = (): string[] => {
  const categories = services.map(service => service.category);
  return [...new Set(categories)];
};

