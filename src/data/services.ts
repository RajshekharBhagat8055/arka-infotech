export interface ServicePageContent {
  id: string;
  slug: string;
  name: string;
  category: string;
  hero: {
    title: string;
    description: string;
    ctaText: string;
    image: string;
  };
  overview: string;
  subServices: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  technologies: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
      color: string;
    }>;
  }>;
  process: Array<{
    phase: string;
    steps: string[];
  }>;
  features: string[];
  benefits: Array<{
    title: string;
    description: string;
  }>;
  industries: Array<{
    name: string;
    useCases: string[];
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    company: string;
    rating: number;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  deliveryTime: string;
}

export const services: ServicePageContent[] = [
  // Design & Development Services
  {
    id: "1",
    slug: "website-development",
    name: "Website Development",
    category: "Design & Development",
    hero: {
      title: "Professional Website Development Services",
      description: "Transform your online presence with cutting-edge websites that drive results. We build responsive, SEO-optimized, and conversion-focused websites tailored to your business goals.",
      ctaText: "Start Your Web Project",
      image: "/services/website-development.jpg"
    },
    overview: "At Arka Infotech, we specialize in creating high-performance websites that combine stunning design with powerful functionality. Our team of expert developers leverages the latest technologies and industry best practices to deliver websites that not only look exceptional but also drive business growth. Whether you need a corporate website, portfolio, or landing page, we ensure your digital presence stands out in today's competitive landscape.",
    subServices: [
      {
        name: "Corporate Website Development",
        description: "Professional business websites that establish credibility and showcase your brand effectively",
        icon: "Building2"
      },
      {
        name: "E-commerce Websites",
        description: "Feature-rich online stores with secure payment gateways and inventory management",
        icon: "ShoppingCart"
      },
      {
        name: "Portfolio Websites",
        description: "Stunning portfolio sites that showcase your work and attract potential clients",
        icon: "Briefcase"
      },
      {
        name: "Landing Page Design",
        description: "High-converting landing pages optimized for campaigns and lead generation",
        icon: "Target"
      },
      {
        name: "Custom Web Applications",
        description: "Tailored web solutions built to solve specific business challenges",
        icon: "Code"
      }
    ],
    technologies: [
      {
        category: "Frontend",
        items: [
          { name: "React.js", icon: "SiReact", color: "#61DAFB" },
          { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
          { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
          { name: "Material-UI", icon: "SiMui", color: "#007FFF" },
          { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
          { name: "CSS3", icon: "SiCss3", color: "#1572B6" }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "Express", icon: "SiExpress", color: "#000000" },
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "Django", icon: "SiDjango", color: "#092E20" },
          { name: "PHP", icon: "SiPhp", color: "#777BB4" },
          { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
          { name: "Ruby", icon: "SiRuby", color: "#CC342D" }
        ]
      },
      {
        category: "CMS",
        items: [
          { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
          { name: "Contentful", icon: "SiContentful", color: "#2478CC" },
          { name: "Strapi", icon: "SiStrapi", color: "#2F2E8B" },
          { name: "Sanity", icon: "SiSanity", color: "#F03E2F" },
          { name: "Drupal", icon: "SiDrupal", color: "#0678BE" }
        ]
      },
      {
        category: "Database",
        items: [
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" }
        ]
      },
      {
        category: "DevOps",
        items: [
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Nginx", icon: "SiNginx", color: "#009639" }
        ]
      }
    ],
    process: [
      {
        phase: "Discovery & Planning",
        steps: [
          "Initial consultation to understand business goals and target audience",
          "Competitor analysis and market research",
          "Define project scope, features, and deliverables",
          "Create detailed project timeline and milestones",
          "Establish communication protocols and review cycles"
        ]
      },
      {
        phase: "Design & Prototyping",
        steps: [
          "Information architecture and sitemap creation",
          "Wireframing and user flow mapping",
          "Visual design mockups aligned with brand guidelines",
          "Interactive prototype development",
          "Client review and design refinement"
        ]
      },
      {
        phase: "Development",
        steps: [
          "Frontend development with responsive design implementation",
          "Backend development and database integration",
          "CMS integration and content management setup",
          "API development and third-party integrations",
          "Security implementation and optimization"
        ]
      },
      {
        phase: "Testing & Launch",
        steps: [
          "Cross-browser and device compatibility testing",
          "Performance optimization and speed testing",
          "SEO optimization and analytics setup",
          "User acceptance testing (UAT)",
          "Domain setup, deployment, and go-live support"
        ]
      },
      {
        phase: "Post-Launch Support",
        steps: [
          "Ongoing maintenance and updates",
          "Performance monitoring and optimization",
          "Security patches and backups",
          "Content updates and feature enhancements",
          "Technical support and training"
        ]
      }
    ],
    features: [
      "Fully Responsive Design (Mobile, Tablet, Desktop)",
      "SEO-Optimized Architecture for Better Rankings",
      "Fast Loading Speed (< 3 seconds)",
      "Content Management System Integration",
      "SSL Security Certificate",
      "Cross-Browser Compatibility",
      "Google Analytics Integration",
      "Contact Forms with Spam Protection",
      "Social Media Integration",
      "Blog/News Section",
      "Custom API Integration",
      "Multi-language Support (Optional)",
      "Accessibility Compliance (WCAG)",
      "Advanced Security Features"
    ],
    benefits: [
      {
        title: "Enhanced Online Presence",
        description: "Establish a professional digital footprint that builds trust and credibility with your target audience"
      },
      {
        title: "Improved User Experience",
        description: "Intuitive navigation and design that keeps visitors engaged and drives conversions"
      },
      {
        title: "Better Search Rankings",
        description: "SEO-optimized structure that helps your website rank higher on Google and attract organic traffic"
      },
      {
        title: "Mobile-First Approach",
        description: "Perfectly optimized for mobile devices, ensuring seamless experience for users on any device"
      },
      {
        title: "Scalable Architecture",
        description: "Built to grow with your business, easily accommodating new features and increased traffic"
      },
      {
        title: "24/7 Availability",
        description: "Your website works round the clock, providing information and generating leads even while you sleep"
      }
    ],
    industries: [
      {
        name: "Healthcare",
        useCases: ["Hospital websites", "Clinic management portals", "Patient appointment systems", "Telemedicine platforms"]
      },
      {
        name: "Education",
        useCases: ["School websites", "E-learning platforms", "Student portals", "Course management systems"]
      },
      {
        name: "Real Estate",
        useCases: ["Property listing sites", "Virtual tour platforms", "Agent portfolios", "Lead generation sites"]
      },
      {
        name: "Retail & E-commerce",
        useCases: ["Online stores", "Product catalogs", "B2B portals", "Marketplace platforms"]
      },
      {
        name: "Financial Services",
        useCases: ["Banking portals", "Insurance websites", "Investment platforms", "Financial advisor sites"]
      }
    ],
    testimonials: [
      {
        quote: "Arka Infotech delivered a stunning website that exceeded our expectations. The attention to detail and professional approach made the entire process smooth.",
        author: "Rajesh Kumar",
        company: "TechVision Solutions",
        rating: 5
      },
      {
        quote: "Our new website has significantly improved our online presence. We've seen a 150% increase in inquiries since the launch. Highly recommended!",
        author: "Priya Sharma",
        company: "GreenLeaf Industries",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How long does it take to develop a website?",
        answer: "The timeline varies based on complexity. A basic website typically takes 4-6 weeks, while more complex sites with custom features may take 8-12 weeks. We provide a detailed timeline during the planning phase."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring perfect responsiveness across all devices including smartphones, tablets, and desktops."
      },
      {
        question: "Can I update the content myself after launch?",
        answer: "Yes! We integrate user-friendly Content Management Systems (CMS) that allow you to easily update text, images, and other content without technical knowledge. We also provide training."
      },
      {
        question: "What about website maintenance and support?",
        answer: "We offer comprehensive post-launch support including regular updates, security patches, backups, and technical assistance. We have flexible maintenance packages to suit your needs."
      },
      {
        question: "Will my website be SEO optimized?",
        answer: "Yes, SEO optimization is built into our development process. We implement best practices for on-page SEO, including proper meta tags, optimized images, clean URL structure, and fast loading speeds."
      }
    ],
    relatedServices: ["mobile-app-development", "e-commerce-development", "search-engine-optimization", "ui-ux-design"],
    pricing: {
      starter: "₹45,000 - ₹1,20,000",
      professional: "₹1,20,000 - ₹3,50,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "4-8 weeks"
  },

  // Mobile App Development
  {
    id: "2",
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Design & Development",
    hero: {
      title: "Custom Mobile App Development",
      description: "Bring your app idea to life with our expert mobile development team. We create powerful, user-friendly apps for iOS and Android that users love.",
      ctaText: "Build Your App",
      image: "/services/mobile-app.jpg"
    },
    overview: "Transform your business with custom mobile applications that engage users and drive growth. Our experienced team specializes in developing native and cross-platform mobile apps that deliver exceptional performance, intuitive user experiences, and seamless functionality. From concept to deployment, we guide you through every step of the mobile app development journey, ensuring your app stands out in the competitive app marketplace.",
    subServices: [
      {
        name: "Native iOS Development",
        description: "High-performance apps built specifically for Apple devices using Swift and SwiftUI",
        icon: "Apple"
      },
      {
        name: "Native Android Development",
        description: "Powerful Android apps using Kotlin and modern Android development practices",
        icon: "Smartphone"
      },
      {
        name: "Cross-Platform Development",
        description: "Cost-effective apps that work on both iOS and Android using React Native or Flutter",
        icon: "Layers"
      },
      {
        name: "Progressive Web Apps (PWA)",
        description: "Web-based apps that offer native-like experience across all platforms",
        icon: "Globe"
      },
      {
        name: "App Modernization",
        description: "Update and enhance legacy mobile applications with modern features and design",
        icon: "RefreshCw"
      }
    ],
    technologies: [
      {
        category: "iOS Development",
        items: [
          { name: "Swift", icon: "SiSwift", color: "#F05138" },
          { name: "SwiftUI", icon: "SiSwift", color: "#F05138" },
          { name: "Xcode", icon: "SiXcode", color: "#147EFB" },
          { name: "iOS", icon: "SiApple", color: "#000000" }
        ]
      },
      {
        category: "Android Development",
        items: [
          { name: "Kotlin", icon: "SiKotlin", color: "#7F52FF" },
          { name: "Java", icon: "SiOpenjdk", color: "#007396" },
          { name: "Android", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Android Studio", icon: "SiAndroidstudio", color: "#3DDC84" }
        ]
      },
      {
        category: "Cross-Platform",
        items: [
          { name: "React Native", icon: "SiReact", color: "#61DAFB" },
          { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
          { name: "Expo", icon: "SiExpo", color: "#000020" },
          { name: "Ionic", icon: "SiIonic", color: "#3880FF" }
        ]
      },
      {
        category: "Backend & APIs",
        items: [
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" }
        ]
      },
      {
        category: "Tools & Services",
        items: [
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Jira", icon: "SiJira", color: "#0052CC" },
          { name: "App Store", icon: "SiApple", color: "#000000" },
          { name: "Play Store", icon: "SiGoogleplay", color: "#414141" }
        ]
      }
    ],
    process: [
      {
        phase: "Ideation & Strategy",
        steps: [
          "Detailed discussion of app concept and business objectives",
          "Market research and competitor analysis",
          "Define target audience and user personas",
          "Platform selection (iOS, Android, or both)",
          "Feature prioritization and MVP definition"
        ]
      },
      {
        phase: "UI/UX Design",
        steps: [
          "User journey mapping and flow diagrams",
          "Wireframing and information architecture",
          "High-fidelity visual designs following platform guidelines",
          "Interactive prototypes for user testing",
          "Design system creation for consistency"
        ]
      },
      {
        phase: "Development",
        steps: [
          "Agile sprint planning and development",
          "Frontend development with native or cross-platform frameworks",
          "Backend development and API integration",
          "Database design and implementation",
          "Third-party service integration (payment, maps, social media)"
        ]
      },
      {
        phase: "Testing & QA",
        steps: [
          "Functional testing across devices and OS versions",
          "Performance and load testing",
          "Security testing and vulnerability assessment",
          "User acceptance testing (UAT)",
          "Beta testing with real users"
        ]
      },
      {
        phase: "Deployment & Support",
        steps: [
          "App Store and Play Store submission",
          "App store optimization (ASO)",
          "Launch marketing and user onboarding",
          "Performance monitoring and analytics",
          "Ongoing maintenance and feature updates"
        ]
      }
    ],
    features: [
      "Native iOS & Android Applications",
      "Cross-Platform Compatibility",
      "Intuitive User Interface",
      "Push Notifications",
      "In-App Purchases & Subscriptions",
      "Social Media Integration",
      "Offline Functionality",
      "Real-Time Data Synchronization",
      "Biometric Authentication (Face ID, Fingerprint)",
      "Geolocation & Maps Integration",
      "Chat & Messaging Features",
      "Photo/Video Upload & Storage",
      "Analytics & User Tracking",
      "Multi-Language Support"
    ],
    benefits: [
      {
        title: "Wider Audience Reach",
        description: "Access millions of potential customers through iOS and Android app stores"
      },
      {
        title: "Enhanced Customer Engagement",
        description: "Direct communication channel with push notifications and in-app messaging"
      },
      {
        title: "Improved Brand Recognition",
        description: "Constant visibility on users' devices strengthens brand presence and loyalty"
      },
      {
        title: "Increased Revenue Opportunities",
        description: "Multiple monetization options including in-app purchases, subscriptions, and ads"
      },
      {
        title: "Better Customer Insights",
        description: "Comprehensive analytics to understand user behavior and preferences"
      },
      {
        title: "Competitive Advantage",
        description: "Stay ahead of competitors with innovative mobile solutions"
      }
    ],
    industries: [
      {
        name: "E-commerce & Retail",
        useCases: ["Shopping apps", "Product catalogs", "Order tracking", "Loyalty programs"]
      },
      {
        name: "Healthcare",
        useCases: ["Telemedicine apps", "Fitness trackers", "Appointment booking", "Health monitoring"]
      },
      {
        name: "Food & Beverage",
        useCases: ["Food delivery apps", "Restaurant booking", "Menu management", "Loyalty rewards"]
      },
      {
        name: "Finance & Banking",
        useCases: ["Mobile banking", "Payment apps", "Investment platforms", "Expense trackers"]
      },
      {
        name: "Education",
        useCases: ["E-learning apps", "Student portals", "Course management", "Virtual classrooms"]
      }
    ],
    testimonials: [
      {
        quote: "The mobile app developed by Arka Infotech has transformed how we interact with our customers. The team's expertise and dedication were evident throughout the project.",
        author: "Amit Patel",
        company: "FitLife Wellness",
        rating: 5
      },
      {
        quote: "Outstanding work! Our e-commerce app has received excellent reviews and our sales have doubled since launch. Worth every rupee invested.",
        author: "Sneha Reddy",
        company: "StyleHub Fashion",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Should I build a native or cross-platform app?",
        answer: "Native apps offer better performance and platform-specific features, ideal for complex apps. Cross-platform development is cost-effective and faster to market, suitable for most business apps. We'll help you choose based on your requirements and budget."
      },
      {
        question: "How much does mobile app development cost?",
        answer: "Costs vary based on complexity, features, and platform. A basic app starts from ₹3,00,000, while complex apps can range from ₹10,00,000 to ₹50,00,000+. We provide detailed quotes after understanding your requirements."
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer: "Development time depends on complexity. Simple apps take 2-3 months, medium complexity apps 4-6 months, and complex enterprise apps 6-12 months. We provide accurate timelines during planning."
      },
      {
        question: "Will you help with app store submission?",
        answer: "Yes! We handle the complete app store submission process for both Apple App Store and Google Play Store, including compliance with all guidelines and requirements."
      },
      {
        question: "Do you provide post-launch support?",
        answer: "Absolutely! We offer comprehensive maintenance and support packages including bug fixes, updates, new features, and performance optimization to ensure your app stays current and secure."
      }
    ],
    relatedServices: ["website-development", "ui-ux-design", "api-development", "cloud-solutions"],
    pricing: {
      starter: "₹3,00,000 - ₹8,00,000",
      professional: "₹8,00,000 - ₹25,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-16 weeks"
  },

  // Add E-commerce Development
  {
    id: "3",
    slug: "e-commerce-development",
    name: "E-commerce Development",
    category: "Design & Development",
    hero: {
      title: "Build Your Online Store",
      description: "Launch and grow your e-commerce business with our feature-rich online store solutions. We create secure, scalable, and conversion-optimized e-commerce platforms.",
      ctaText: "Start Selling Online",
      image: "/services/ecommerce.jpg"
    },
    overview: "In today's digital marketplace, a powerful e-commerce platform is essential for business success. At Arka Infotech, we specialize in developing custom e-commerce solutions that not only look stunning but also drive sales and provide seamless shopping experiences. From small online boutiques to large-scale marketplaces, we have the expertise to build platforms that scale with your business and exceed customer expectations.",
    subServices: [
      {
        name: "B2C E-commerce",
        description: "Direct-to-consumer online stores with intuitive shopping experiences",
        icon: "shopping-bag"
      },
      {
        name: "B2B E-commerce",
        description: "Business-to-business platforms with bulk ordering and account management",
        icon: "building"
      },
      {
        name: "Multi-vendor Marketplace",
        description: "Platforms connecting multiple sellers with buyers like Amazon or Etsy",
        icon: "store"
      },
      {
        name: "Subscription E-commerce",
        description: "Recurring revenue models with subscription box and membership features",
        icon: "repeat"
      },
      {
        name: "Mobile Commerce",
        description: "Native shopping apps optimized for mobile commerce",
        icon: "smartphone"
      }
    ],
    technologies: [
      {
        category: "E-commerce Platforms",
        items: [
          { name: "Shopify", icon: "SiShopify", color: "#7AB55C" },
          { name: "WooCommerce", icon: "SiWoo", color: "#96588A" },
          { name: "Magento", icon: "SiMagento", color: "#EE672F" },
          { name: "BigCommerce", icon: "SiBigcommerce", color: "#121118" }
        ]
      },
      {
        category: "Frontend",
        items: [
          { name: "React", icon: "SiReact", color: "#61DAFB" },
          { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
          { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" }
        ]
      },
      {
        category: "Payment Gateways",
        items: [
          { name: "Razorpay", icon: "SiRazorpay", color: "#0C2451" },
          { name: "Stripe", icon: "SiStripe", color: "#635BFF" },
          { name: "PayPal", icon: "SiPaypal", color: "#00457C" },
          { name: "Paytm", icon: "SiPaytm", color: "#00BAF2" }
        ]
      },
      {
        category: "Tools & Analytics",
        items: [
          { name: "Google Analytics", icon: "SiGoogleanalytics", color: "#E37400" },
          { name: "Hotjar", icon: "SiHotjar", color: "#FD3A5C" },
          { name: "Shopify", icon: "SiShopify", color: "#7AB55C" },
          { name: "WooCommerce", icon: "SiWoo", color: "#96588A" }
        ]
      }
    ],
    process: [
      {
        phase: "Business Analysis",
        steps: [
          "Understanding business model and target market",
          "Product catalog planning and categorization",
          "Payment and shipping requirement analysis",
          "Competitor analysis and market positioning",
          "Budget and timeline definition"
        ]
      },
      {
        phase: "Platform & Design",
        steps: [
          "E-commerce platform selection",
          "Information architecture for products",
          "User-friendly shopping flow design",
          "Mobile-responsive design mockups",
          "Brand-aligned visual identity"
        ]
      },
      {
        phase: "Development & Integration",
        steps: [
          "Store setup and configuration",
          "Product catalog implementation",
          "Payment gateway integration",
          "Shipping provider integration",
          "Inventory management system setup"
        ]
      },
      {
        phase: "Testing & Optimization",
        steps: [
          "Transaction and payment testing",
          "Cross-device compatibility testing",
          "Load testing for high traffic",
          "Security audit and PCI compliance",
          "Conversion rate optimization"
        ]
      },
      {
        phase: "Launch & Growth",
        steps: [
          "Store launch and monitoring",
          "Marketing integration setup",
          "Analytics and tracking configuration",
          "Staff training on store management",
          "Ongoing optimization and support"
        ]
      }
    ],
    features: [
      "Responsive Product Catalog",
      "Advanced Search & Filtering",
      "Shopping Cart & Wishlist",
      "Secure Checkout Process",
      "Multiple Payment Options",
      "Real-time Inventory Management",
      "Order Tracking System",
      "Customer Account Management",
      "Product Reviews & Ratings",
      "Discount & Coupon Management",
      "Multi-Currency Support",
      "Tax Calculation (GST Compliant)",
      "Shipping Calculator",
      "Email & SMS Notifications",
      "Admin Dashboard",
      "Sales Analytics & Reports"
    ],
    benefits: [
      {
        title: "24/7 Sales Channel",
        description: "Your store never closes, generating revenue around the clock without geographical limitations"
      },
      {
        title: "Global Market Access",
        description: "Reach customers across India and worldwide, expanding your market exponentially"
      },
      {
        title: "Lower Operational Costs",
        description: "Reduce expenses on physical stores, staff, and inventory management"
      },
      {
        title: "Data-Driven Insights",
        description: "Comprehensive analytics help understand customer behavior and optimize sales"
      },
      {
        title: "Scalable Growth",
        description: "Easily add products, categories, and features as your business grows"
      },
      {
        title: "Better Customer Experience",
        description: "Provide convenient shopping experience with multiple payment and delivery options"
      }
    ],
    industries: [
      {
        name: "Fashion & Apparel",
        useCases: ["Clothing stores", "Accessories", "Footwear", "Jewelry"]
      },
      {
        name: "Electronics & Gadgets",
        useCases: ["Mobile phones", "Laptops", "Accessories", "Home appliances"]
      },
      {
        name: "Food & Grocery",
        useCases: ["Online supermarkets", "Organic products", "Specialty foods"]
      },
      {
        name: "Beauty & Cosmetics",
        useCases: ["Makeup products", "Skincare", "Haircare", "Wellness products"]
      },
      {
        name: "Home & Lifestyle",
        useCases: ["Furniture", "Home decor", "Kitchen items", "Garden supplies"]
      }
    ],
    testimonials: [
      {
        quote: "Our e-commerce store built by Arka Infotech has exceeded all expectations. Sales increased by 300% in the first quarter. The platform is robust and easy to manage.",
        author: "Vikram Singh",
        company: "ElectroMart",
        rating: 5
      },
      {
        quote: "The team understood our fashion business perfectly. The store looks beautiful and functions flawlessly. Customer feedback has been overwhelmingly positive.",
        author: "Kavya Nair",
        company: "Trendy Threads",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Which e-commerce platform is best for my business?",
        answer: "It depends on your needs. Shopify is great for quick setup and ease of use, WooCommerce offers flexibility with WordPress, Magento is ideal for large enterprises, and custom solutions provide complete control. We'll recommend based on your requirements."
      },
      {
        question: "How secure are the payment transactions?",
        answer: "We implement bank-grade security with SSL certificates, PCI DSS compliance, and secure payment gateways. All transactions are encrypted and protected against fraud."
      },
      {
        question: "Can I integrate Indian payment gateways?",
        answer: "Yes! We integrate all major Indian payment gateways including Razorpay, PayU, CCAvenue, Paytm, PhonePe, and more, supporting UPI, cards, net banking, and wallets."
      },
      {
        question: "Will my store be GST compliant?",
        answer: "Absolutely! We ensure full GST compliance with proper tax calculations, invoicing, and reporting features built into your store."
      },
      {
        question: "Can I manage inventory and orders easily?",
        answer: "Yes, we provide intuitive admin dashboards for easy inventory management, order processing, customer management, and sales reporting."
      }
    ],
    relatedServices: ["website-development", "mobile-app-development", "digital-marketing", "payment-gateway-integration"],
    pricing: {
      starter: "₹75,000 - ₹2,50,000",
      professional: "₹2,50,000 - ₹8,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-12 weeks"
  },

  // Software Development
  {
    id: "4",
    slug: "software-development",
    name: "Software Development",
    category: "Design & Development",
    hero: {
      title: "Custom Software Development Solutions",
      description: "Build powerful, scalable software tailored to your unique business needs. From enterprise applications to specialized tools, we create solutions that streamline operations and drive efficiency.",
      ctaText: "Discuss Your Project",
      image: "/services/software-development.jpg"
    },
    overview: "At Arka Infotech, we understand that every business has unique challenges that require tailored solutions. Our custom software development services deliver robust, scalable applications designed specifically for your business processes. Whether you need enterprise resource planning (ERP) systems, customer relationship management (CRM) tools, or industry-specific software, our experienced development team uses cutting-edge technologies and agile methodologies to build solutions that give you a competitive edge.",
    subServices: [
      {
        name: "Enterprise Software Development",
        description: "Large-scale applications for enterprise resource planning, automation, and business intelligence",
        icon: "Building2"
      },
      {
        name: "SaaS Application Development",
        description: "Cloud-based software-as-a-service platforms with subscription models and multi-tenancy",
        icon: "Cloud"
      },
      {
        name: "Desktop Application Development",
        description: "Cross-platform desktop applications for Windows, macOS, and Linux systems",
        icon: "Monitor"
      },
      {
        name: "Database Management Systems",
        description: "Custom database solutions with complex data structures and relationships",
        icon: "Database"
      },
      {
        name: "Legacy System Modernization",
        description: "Upgrade and migrate legacy applications to modern technology stacks",
        icon: "RefreshCw"
      }
    ],
    technologies: [
      {
        category: "Programming Languages",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "Java", icon: "SiOpenjdk", color: "#007396" },
          { name: "C#", icon: "SiCsharp", color: "#239120" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" }
        ]
      },
      {
        category: "Frameworks",
        items: [
          { name: "Spring Boot", icon: "SiSpring", color: "#6DB33F" },
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "Django", icon: "SiDjango", color: "#092E20" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Oracle", icon: "SiOracle", color: "#F80000" },
          { name: "Microsoft SQL", icon: "SiMicrosoftsqlserver", color: "#CC2927" }
        ]
      },
      {
        category: "Cloud & DevOps",
        items: [
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" }
        ]
      }
    ],
    process: [
      {
        phase: "Requirements Analysis",
        steps: [
          "In-depth consultation to understand business processes and pain points",
          "Stakeholder interviews and workflow analysis",
          "Documentation of functional and non-functional requirements",
          "Feasibility study and technology recommendations",
          "Project scope definition and success metrics"
        ]
      },
      {
        phase: "System Architecture & Design",
        steps: [
          "Design system architecture and database schema",
          "Create technical specifications and documentation",
          "Design user interface and user experience flows",
          "Security architecture and compliance planning",
          "Integration points and API design"
        ]
      },
      {
        phase: "Agile Development",
        steps: [
          "Sprint planning and iterative development cycles",
          "Backend development and business logic implementation",
          "Frontend development and UI implementation",
          "Database design and optimization",
          "Regular client demos and feedback incorporation"
        ]
      },
      {
        phase: "Quality Assurance",
        steps: [
          "Unit testing and integration testing",
          "Performance testing and optimization",
          "Security testing and vulnerability assessment",
          "User acceptance testing with stakeholders",
          "Load testing and scalability verification"
        ]
      },
      {
        phase: "Deployment & Support",
        steps: [
          "Production environment setup and deployment",
          "Data migration from legacy systems if applicable",
          "User training and documentation",
          "Post-launch monitoring and support",
          "Continuous improvement and feature additions"
        ]
      }
    ],
    features: [
      "Custom Business Logic Implementation",
      "Role-Based Access Control (RBAC)",
      "Advanced Data Analytics & Reporting",
      "Automated Workflow Management",
      "Real-time Data Processing",
      "Multi-user Collaboration Tools",
      "Integration with Existing Systems",
      "Scalable Cloud Architecture",
      "Advanced Security Features",
      "API Development & Documentation",
      "Automated Backup & Recovery",
      "Audit Trails & Compliance",
      "Custom Dashboard & Visualizations",
      "Email & SMS Notifications"
    ],
    benefits: [
      {
        title: "Tailored to Your Needs",
        description: "Software built specifically for your business processes, not generic solutions that require workarounds"
      },
      {
        title: "Competitive Advantage",
        description: "Unique features and workflows that differentiate you from competitors using off-the-shelf solutions"
      },
      {
        title: "Improved Efficiency",
        description: "Automate repetitive tasks and streamline operations to boost productivity and reduce costs"
      },
      {
        title: "Scalability & Flexibility",
        description: "Software that grows with your business and adapts to changing requirements"
      },
      {
        title: "Complete Ownership",
        description: "Full ownership of source code and intellectual property with no licensing fees"
      },
      {
        title: "Better ROI",
        description: "Long-term cost savings through automation, efficiency gains, and reduced operational expenses"
      }
    ],
    industries: [
      {
        name: "Manufacturing",
        useCases: ["Production planning", "Inventory management", "Quality control", "Supply chain optimization"]
      },
      {
        name: "Healthcare",
        useCases: ["Patient management systems", "Hospital information systems", "Laboratory management", "Billing systems"]
      },
      {
        name: "Finance & Banking",
        useCases: ["Core banking systems", "Loan management", "Risk assessment tools", "Trading platforms"]
      },
      {
        name: "Logistics & Transportation",
        useCases: ["Fleet management", "Route optimization", "Warehouse management", "Delivery tracking"]
      },
      {
        name: "Retail",
        useCases: ["Point of sale systems", "Inventory management", "Customer loyalty programs", "Analytics dashboards"]
      }
    ],
    testimonials: [
      {
        quote: "Arka Infotech developed a custom ERP system that transformed our manufacturing operations. The automation has saved us countless hours and improved accuracy significantly.",
        author: "Suresh Menon",
        company: "Prime Manufacturing Ltd",
        rating: 5
      },
      {
        quote: "The bespoke software solution exceeded our expectations. It perfectly fits our unique business model and the ROI has been phenomenal.",
        author: "Deepa Krishnan",
        company: "LogiTech Solutions",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How is custom software different from off-the-shelf solutions?",
        answer: "Custom software is built specifically for your business processes and requirements, offering perfect fit, unique features, and competitive advantages. Off-the-shelf software is generic and may require workarounds or compromises."
      },
      {
        question: "How long does custom software development take?",
        answer: "Timeline depends on complexity and scope. Simple applications take 3-6 months, medium complexity 6-12 months, and large enterprise systems 12-24 months. We provide detailed timelines after requirements analysis."
      },
      {
        question: "Will I own the software and source code?",
        answer: "Yes! You get complete ownership of the software, including full source code rights and intellectual property. No licensing fees or ongoing vendor lock-in."
      },
      {
        question: "Can the software integrate with our existing systems?",
        answer: "Absolutely! We specialize in integrating with existing systems, databases, and third-party applications through APIs and custom connectors."
      },
      {
        question: "What about ongoing maintenance and updates?",
        answer: "We offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements to keep your software current and secure."
      }
    ],
    relatedServices: ["api-development", "cloud-solutions", "custom-software-integration", "database-management"],
    pricing: {
      starter: "₹5,00,000 - ₹15,00,000",
      professional: "₹15,00,000 - ₹40,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },

  // Game Development
  {
    id: "5",
    slug: "game-development",
    name: "Game Development",
    category: "Design & Development",
    hero: {
      title: "Professional Game Development Services",
      description: "Create engaging and immersive gaming experiences that captivate players. We develop 2D/3D games for mobile, web, and desktop platforms with stunning graphics and addictive gameplay.",
      ctaText: "Start Your Game Project",
      image: "/services/game-development.jpg"
    },
    overview: "Bring your game ideas to life with Arka Infotech's expert game development services. Our talented team of game designers, developers, and artists creates engaging gaming experiences across multiple platforms. Whether you're looking to build a casual mobile game, an educational game, or a complex multiplayer experience, we combine creative storytelling with cutting-edge technology to deliver games that players love and remember.",
    subServices: [
      {
        name: "Mobile Game Development",
        description: "Engaging games for iOS and Android with touch-optimized controls and social features",
        icon: "Smartphone"
      },
      {
        name: "2D Game Development",
        description: "Classic and modern 2D games with beautiful art, smooth animations, and addictive gameplay",
        icon: "Grid3x3"
      },
      {
        name: "3D Game Development",
        description: "Immersive 3D gaming experiences with realistic graphics and physics simulation",
        icon: "Box"
      },
      {
        name: "Web-Based Games",
        description: "Browser games using HTML5 and WebGL for instant play without downloads",
        icon: "Globe"
      },
      {
        name: "Multiplayer Game Development",
        description: "Real-time multiplayer experiences with matchmaking, leaderboards, and social features",
        icon: "Users"
      }
    ],
    technologies: [
      {
        category: "Game Engines",
        items: [
          { name: "Unity", icon: "SiUnity", color: "#000000" },
          { name: "Unreal Engine", icon: "SiUnrealengine", color: "#0E1128" },
          { name: "Godot", icon: "SiGodotengine", color: "#478CBF" }
        ]
      },
      {
        category: "Programming",
        items: [
          { name: "C#", icon: "SiCsharp", color: "#239120" },
          { name: "C++", icon: "SiCplusplus", color: "#00599C" },
          { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
          { name: "Python", icon: "SiPython", color: "#3776AB" }
        ]
      },
      {
        category: "Web Game Development",
        items: [
          { name: "Phaser", icon: "SiJavascript", color: "#F7DF1E" },
          { name: "Three.js", icon: "SiThreedotjs", color: "#000000" },
          { name: "WebGL", icon: "SiWebgl", color: "#990000" },
          { name: "HTML5", icon: "SiHtml5", color: "#E34F26" }
        ]
      },
      {
        category: "Backend & Services",
        items: [
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
          { name: "PlayFab", icon: "SiMicrosoft", color: "#0078D4" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" }
        ]
      }
    ],
    process: [
      {
        phase: "Concept & Game Design",
        steps: [
          "Game concept ideation and target audience definition",
          "Core gameplay mechanics design and documentation",
          "Storyline, characters, and world-building",
          "Monetization strategy and business model planning",
          "Technical feasibility assessment and platform selection"
        ]
      },
      {
        phase: "Pre-Production",
        steps: [
          "Game design document (GDD) creation",
          "Art style and visual direction finalization",
          "Prototype development for core mechanics",
          "Level design and progression planning",
          "Sound design and music direction"
        ]
      },
      {
        phase: "Production",
        steps: [
          "Character and environment asset creation",
          "Game mechanics and systems programming",
          "Level design and implementation",
          "UI/UX development and integration",
          "Sound effects and music integration"
        ]
      },
      {
        phase: "Testing & Polish",
        steps: [
          "Gameplay testing and balancing",
          "Bug fixing and performance optimization",
          "Quality assurance across devices",
          "Beta testing with real players",
          "Final polish and refinement"
        ]
      },
      {
        phase: "Launch & Live Ops",
        steps: [
          "App store submission and approval",
          "Marketing assets and store optimization",
          "Launch campaign and user acquisition",
          "Analytics setup and monitoring",
          "Post-launch updates and content additions"
        ]
      }
    ],
    features: [
      "Cross-Platform Compatibility",
      "Engaging Gameplay Mechanics",
      "Stunning 2D/3D Graphics",
      "Smooth Animations & Physics",
      "In-Game Purchases & Monetization",
      "Social Features & Sharing",
      "Leaderboards & Achievements",
      "Push Notifications",
      "Offline Mode Support",
      "Cloud Save Functionality",
      "Multiplayer & PvP Modes",
      "Daily Rewards & Events",
      "Analytics & Player Tracking",
      "Ad Integration (Optional)"
    ],
    benefits: [
      {
        title: "Brand Engagement",
        description: "Games provide high engagement rates and create memorable brand experiences"
      },
      {
        title: "Revenue Generation",
        description: "Multiple monetization options including IAP, ads, and premium versions"
      },
      {
        title: "Viral Potential",
        description: "Engaging games naturally encourage sharing and word-of-mouth marketing"
      },
      {
        title: "Educational Value",
        description: "Gamification makes learning fun and improves information retention"
      },
      {
        title: "Community Building",
        description: "Games foster communities around your brand with social features"
      },
      {
        title: "Cross-Platform Reach",
        description: "Deploy on multiple platforms to maximize your audience"
      }
    ],
    industries: [
      {
        name: "Entertainment",
        useCases: ["Casual games", "Puzzle games", "Action games", "Strategy games"]
      },
      {
        name: "Education",
        useCases: ["Educational games", "Training simulations", "Quiz apps", "Language learning games"]
      },
      {
        name: "Marketing & Advertising",
        useCases: ["Brand engagement games", "Promotional campaigns", "Interactive ads", "Product demos"]
      },
      {
        name: "Healthcare & Fitness",
        useCases: ["Fitness games", "Rehabilitation apps", "Mental health games", "Exercise tracking"]
      },
      {
        name: "Corporate Training",
        useCases: ["Employee training", "Simulation games", "Team building", "Skill development"]
      }
    ],
    testimonials: [
      {
        quote: "The game developed by Arka Infotech has been a huge success with over 500K downloads in the first month. The gameplay is addictive and the graphics are stunning!",
        author: "Karthik Iyer",
        company: "PlayNext Gaming",
        rating: 5
      },
      {
        quote: "They transformed our educational concept into an engaging game that students love. Learning outcomes have improved dramatically.",
        author: "Dr. Meera Shah",
        company: "EduFun Academy",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Which game engine should I choose for my game?",
        answer: "Unity is great for cross-platform mobile and 2D/3D games. Unreal Engine excels at high-end 3D graphics. Godot is perfect for indie games. We'll recommend based on your specific requirements, budget, and target platforms."
      },
      {
        question: "How much does game development cost?",
        answer: "Costs vary significantly based on complexity. Simple 2D mobile games start from ₹3,00,000, mid-complexity games range ₹10,00,000-₹25,00,000, and high-end 3D games can be ₹35,00,000+. We provide detailed quotes after understanding your vision."
      },
      {
        question: "Can you help with game monetization?",
        answer: "Yes! We implement various monetization strategies including in-app purchases, rewarded ads, subscriptions, and premium versions. We'll help choose the best model for your game and audience."
      },
      {
        question: "Do you provide game art and sound design?",
        answer: "Absolutely! Our team includes experienced game artists, animators, and sound designers who create all visual and audio assets to bring your game to life."
      },
      {
        question: "What about post-launch support and updates?",
        answer: "We offer ongoing support including bug fixes, performance optimization, new content additions, seasonal events, and feature updates to keep players engaged."
      }
    ],
    relatedServices: ["mobile-app-development", "3d-modeling", "animation-services", "cloud-solutions"],
    pricing: {
      starter: "₹3,00,000 - ₹10,00,000",
      professional: "₹10,00,000 - ₹35,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-32 weeks"
  },

  // Bespoke Development
  {
    id: "6",
    slug: "bespoke-development",
    name: "Bespoke Development",
    category: "Design & Development",
    hero: {
      title: "Bespoke Software Development",
      description: "Completely custom solutions crafted exclusively for your business. We build one-of-a-kind software that perfectly aligns with your vision, processes, and goals.",
      ctaText: "Build Something Unique",
      image: "/services/bespoke-development.jpg"
    },
    overview: "Bespoke development is about creating software that fits your business like a glove. Unlike off-the-shelf solutions or template-based development, our bespoke services deliver truly unique applications built from the ground up to match your exact specifications. We work closely with you to understand your vision, challenges, and goals, then craft custom solutions that provide competitive advantages and drive business transformation. Every line of code is written specifically for you.",
    subServices: [
      {
        name: "Custom Business Applications",
        description: "Unique applications designed around your specific business processes and workflows",
        icon: "Briefcase"
      },
      {
        name: "Enterprise Solutions",
        description: "Large-scale bespoke systems for enterprise-level operations and management",
        icon: "Building2"
      },
      {
        name: "Industry-Specific Software",
        description: "Specialized solutions for niche industries with unique requirements",
        icon: "Target"
      },
      {
        name: "Proprietary Platforms",
        description: "Build your own platform with exclusive features and complete control",
        icon: "Rocket"
      },
      {
        name: "Innovation Projects",
        description: "Experimental and cutting-edge solutions pushing technological boundaries",
        icon: "Sparkles"
      }
    ],
    technologies: [
      {
        category: "Full-Stack Development",
        items: [
          { name: "React", icon: "SiReact", color: "#61DAFB" },
          { name: "Angular", icon: "SiAngular", color: "#DD0031" },
          { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" }
        ]
      },
      {
        category: "Backend Technologies",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "Ruby on Rails", icon: "SiRubyonrails", color: "#CC0000" },
          { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
          { name: "Spring Boot", icon: "SiSpring", color: "#6DB33F" }
        ]
      },
      {
        category: "Architecture",
        items: [
          { name: "Microservices", icon: "SiKubernetes", color: "#326CE5" },
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" }
        ]
      },
      {
        category: "Cloud Platforms",
        items: [
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "DigitalOcean", icon: "SiDigitalocean", color: "#0080FF" }
        ]
      }
    ],
    process: [
      {
        phase: "Deep Discovery",
        steps: [
          "Comprehensive business analysis and stakeholder interviews",
          "Workflow mapping and process documentation",
          "Competitive landscape analysis",
          "Technology stack recommendations",
          "Detailed requirements specification document"
        ]
      },
      {
        phase: "Custom Architecture Design",
        steps: [
          "Tailored system architecture design",
          "Database schema and data model design",
          "Custom API and integration planning",
          "Security and compliance framework",
          "Scalability and performance planning"
        ]
      },
      {
        phase: "Iterative Development",
        steps: [
          "Agile development with regular client feedback",
          "Custom feature development and refinement",
          "Continuous integration and testing",
          "Regular demonstrations and iterations",
          "Code reviews and quality assurance"
        ]
      },
      {
        phase: "Rigorous Testing",
        steps: [
          "Comprehensive functional testing",
          "User experience and usability testing",
          "Performance and stress testing",
          "Security audits and penetration testing",
          "Acceptance testing with stakeholders"
        ]
      },
      {
        phase: "Deployment & Evolution",
        steps: [
          "Phased rollout and deployment",
          "User training and onboarding",
          "Documentation and knowledge transfer",
          "Post-launch monitoring and optimization",
          "Continuous enhancement based on feedback"
        ]
      }
    ],
    features: [
      "100% Custom Development",
      "Proprietary Features & Functionality",
      "Flexible Architecture",
      "Custom User Workflows",
      "Personalized User Experience",
      "Unlimited Customization",
      "Exclusive Integrations",
      "Custom Reporting & Analytics",
      "Bespoke Security Measures",
      "Tailored Performance Optimization",
      "Custom Admin Panels",
      "Unique Business Logic",
      "White-Label Solutions",
      "Full Source Code Ownership"
    ],
    benefits: [
      {
        title: "Perfect Fit",
        description: "Software designed exactly for your needs without compromises or unnecessary features"
      },
      {
        title: "Unique Competitive Edge",
        description: "Proprietary features that competitors cannot replicate give you market advantages"
      },
      {
        title: "Complete Control",
        description: "Full ownership and control over features, roadmap, and future development"
      },
      {
        title: "No License Fees",
        description: "One-time development cost with no recurring license fees or per-user charges"
      },
      {
        title: "Future-Proof",
        description: "Built with scalability in mind to accommodate future growth and changes"
      },
      {
        title: "Integration Freedom",
        description: "Integrate with any system or service without platform restrictions"
      }
    ],
    industries: [
      {
        name: "Specialized Manufacturing",
        useCases: ["Custom production planning", "Quality assurance systems", "Supply chain management", "Compliance tracking"]
      },
      {
        name: "Professional Services",
        useCases: ["Project management tools", "Client portals", "Billing systems", "Resource allocation"]
      },
      {
        name: "Government & Public Sector",
        useCases: ["Citizen portals", "Document management", "Workflow automation", "Compliance systems"]
      },
      {
        name: "Research & Development",
        useCases: ["Laboratory management", "Research data platforms", "Collaboration tools", "Analysis software"]
      },
      {
        name: "Niche Industries",
        useCases: ["Specialized workflows", "Industry compliance", "Custom reporting", "Unique integrations"]
      }
    ],
    testimonials: [
      {
        quote: "The bespoke solution Arka Infotech created for us is exactly what we envisioned. It handles our complex workflows perfectly and has given us a significant competitive advantage.",
        author: "Ramesh Gupta",
        company: "InnovateCorp Industries",
        rating: 5
      },
      {
        quote: "No off-the-shelf solution could meet our unique requirements. The custom software built by Arka Infotech fits our business perfectly and has improved efficiency by 200%.",
        author: "Anjali Verma",
        company: "Precision Systems Ltd",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What makes bespoke development different from custom development?",
        answer: "Bespoke development implies complete customization from scratch with no templates or pre-built components. Every aspect is tailored to your exact requirements, whereas custom development may use some existing frameworks or modules."
      },
      {
        question: "Is bespoke development more expensive?",
        answer: "Initial costs are higher than off-the-shelf solutions, but long-term ROI is better due to no license fees, perfect fit for your processes, and competitive advantages. Total cost of ownership is often lower over 5-10 years."
      },
      {
        question: "How long does bespoke development take?",
        answer: "Timeline varies with scope. Small bespoke applications take 4-6 months, medium complexity 8-16 months, and large enterprise systems 18-48 months. We work in phases to deliver value incrementally."
      },
      {
        question: "Can bespoke software scale with my business?",
        answer: "Absolutely! Scalability is built into the architecture from day one. As your business grows, we can easily add features, increase capacity, and expand functionality."
      },
      {
        question: "What happens if my requirements change during development?",
        answer: "We use agile methodology specifically to accommodate changing requirements. Our iterative approach allows flexibility to refine features based on feedback and evolving needs."
      }
    ],
    relatedServices: ["software-development", "api-development", "cloud-solutions", "consulting-services"],
    pricing: {
      starter: "₹10,00,000 - ₹30,00,000",
      professional: "₹30,00,000 - ₹1,00,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "16-48 weeks"
  },

  // API Development
  {
    id: "7",
    slug: "api-development",
    name: "API Development",
    category: "Design & Development",
    hero: {
      title: "Professional API Development Services",
      description: "Build robust, secure, and scalable APIs that power seamless integrations. We create RESTful and GraphQL APIs that enable your applications to communicate effectively.",
      ctaText: "Build Your API",
      image: "/services/api-development.jpg"
    },
    overview: "APIs are the backbone of modern digital ecosystems, enabling seamless communication between systems, applications, and services. At Arka Infotech, we specialize in designing and developing high-performance APIs that are secure, well-documented, and built to scale. Whether you need RESTful APIs, GraphQL endpoints, or microservices architecture, our expert team delivers solutions that facilitate smooth data exchange and system integration.",
    subServices: [
      {
        name: "RESTful API Development",
        description: "Industry-standard REST APIs with proper HTTP methods and status codes",
        icon: "Workflow"
      },
      {
        name: "GraphQL API Development",
        description: "Flexible query language APIs for efficient data fetching and real-time updates",
        icon: "Network"
      },
      {
        name: "Microservices Architecture",
        description: "Scalable microservices-based systems for complex enterprise applications",
        icon: "Boxes"
      },
      {
        name: "Third-Party API Integration",
        description: "Connect your systems with external services and platforms seamlessly",
        icon: "Link"
      },
      {
        name: "API Gateway Solutions",
        description: "Centralized API management, routing, and security layer",
        icon: "Shield"
      }
    ],
    technologies: [
      {
        category: "API Frameworks",
        items: [
          { name: "Express.js", icon: "SiExpress", color: "#000000" },
          { name: "FastAPI", icon: "SiFastapi", color: "#009688" },
          { name: "Django REST", icon: "SiDjango", color: "#092E20" },
          { name: "Spring Boot", icon: "SiSpring", color: "#6DB33F" }
        ]
      },
      {
        category: "API Technologies",
        items: [
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
          { name: "REST", icon: "SiSwagger", color: "#85EA2D" },
          { name: "WebSocket", icon: "SiSocketdotio", color: "#010101" },
          { name: "gRPC", icon: "SiGrpc", color: "#00ADD8" }
        ]
      },
      {
        category: "Documentation",
        items: [
          { name: "Swagger", icon: "SiSwagger", color: "#85EA2D" },
          { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
          { name: "OpenAPI", icon: "SiOpenapiinitiative", color: "#6BA539" }
        ]
      },
      {
        category: "Security & Testing",
        items: [
          { name: "OAuth 2.0", icon: "SiAuth0", color: "#EB5424" },
          { name: "JWT", icon: "SiJsonwebtokens", color: "#000000" },
          { name: "Jest", icon: "SiJest", color: "#C21325" },
          { name: "Postman", icon: "SiPostman", color: "#FF6C37" }
        ]
      }
    ],
    process: [
      {
        phase: "API Planning & Design",
        steps: [
          "Define API requirements and use cases",
          "Design RESTful or GraphQL endpoints",
          "Plan data models and request/response formats",
          "Define authentication and authorization strategy",
          "Version control and backward compatibility planning"
        ]
      },
      {
        phase: "Development",
        steps: [
          "Set up development environment and frameworks",
          "Implement API endpoints and business logic",
          "Database integration and optimization",
          "Authentication and security implementation",
          "Rate limiting and error handling"
        ]
      },
      {
        phase: "Testing",
        steps: [
          "Unit testing for all endpoints",
          "Integration testing with client applications",
          "Load testing and performance optimization",
          "Security testing and vulnerability scanning",
          "API contract testing"
        ]
      },
      {
        phase: "Documentation",
        steps: [
          "Comprehensive API documentation creation",
          "Interactive API explorer setup",
          "Code examples and SDK development",
          "Versioning and changelog documentation",
          "Developer onboarding guides"
        ]
      },
      {
        phase: "Deployment & Monitoring",
        steps: [
          "Production deployment and configuration",
          "API gateway setup and routing",
          "Monitoring and analytics implementation",
          "Error tracking and logging",
          "Ongoing maintenance and updates"
        ]
      }
    ],
    features: [
      "RESTful & GraphQL APIs",
      "Comprehensive Authentication (OAuth, JWT)",
      "Rate Limiting & Throttling",
      "API Versioning",
      "Detailed API Documentation",
      "Interactive API Explorer",
      "Webhook Support",
      "Real-time Data Streaming",
      "Pagination & Filtering",
      "Error Handling & Validation",
      "CORS Configuration",
      "API Analytics & Monitoring",
      "Caching Strategy",
      "Auto-generated SDKs"
    ],
    benefits: [
      {
        title: "Seamless Integration",
        description: "Enable smooth communication between different systems and applications"
      },
      {
        title: "Enhanced Scalability",
        description: "Handle growing traffic and data volumes without performance degradation"
      },
      {
        title: "Improved Efficiency",
        description: "Automate data exchange and reduce manual data entry across systems"
      },
      {
        title: "Developer-Friendly",
        description: "Well-documented APIs make it easy for developers to integrate and build on top"
      },
      {
        title: "Platform Independence",
        description: "APIs work across different platforms, devices, and programming languages"
      },
      {
        title: "Future-Ready",
        description: "Modular architecture allows easy addition of new features and integrations"
      }
    ],
    industries: [
      {
        name: "FinTech",
        useCases: ["Payment processing APIs", "Banking integrations", "Transaction APIs", "Wallet services"]
      },
      {
        name: "E-commerce",
        useCases: ["Product catalog APIs", "Order management", "Payment gateways", "Shipping integrations"]
      },
      {
        name: "SaaS Platforms",
        useCases: ["Public APIs", "Webhook systems", "Integration marketplaces", "Data sync"]
      },
      {
        name: "Healthcare",
        useCases: ["Patient data APIs", "Lab integrations", "Insurance APIs", "Telemedicine platforms"]
      },
      {
        name: "IoT & Smart Devices",
        useCases: ["Device communication", "Data collection APIs", "Control systems", "Real-time monitoring"]
      }
    ],
    testimonials: [
      {
        quote: "The API developed by Arka Infotech handles millions of requests daily without any issues. The documentation is excellent and integration was seamless.",
        author: "Arjun Malhotra",
        company: "PayFast Solutions",
        rating: 5
      },
      {
        quote: "Their expertise in GraphQL helped us reduce data over-fetching by 80%. Our mobile app performance improved dramatically.",
        author: "Neha Kapoor",
        company: "TechFlow Systems",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Should I choose REST or GraphQL for my API?",
        answer: "REST is simpler, well-established, and great for standard CRUD operations. GraphQL is better for complex data requirements, mobile apps, and when you need flexible queries. We'll recommend based on your specific use case."
      },
      {
        question: "How do you ensure API security?",
        answer: "We implement multiple security layers including OAuth 2.0, JWT tokens, API keys, rate limiting, input validation, HTTPS encryption, and regular security audits to protect your API from threats."
      },
      {
        question: "Will the API documentation be comprehensive?",
        answer: "Yes! We provide detailed documentation using tools like Swagger/OpenAPI, including endpoint descriptions, request/response examples, authentication guides, and interactive API explorers."
      },
      {
        question: "Can you help with API versioning?",
        answer: "Absolutely! We implement proper versioning strategies to ensure backward compatibility while allowing new features. This prevents breaking changes for existing integrations."
      },
      {
        question: "What about API performance and scaling?",
        answer: "We design APIs with performance in mind, implementing caching, database optimization, load balancing, and horizontal scaling to handle high traffic volumes efficiently."
      }
    ],
    relatedServices: ["software-development", "microservices", "cloud-solutions", "database-management"],
    pricing: {
      starter: "₹2,00,000 - ₹6,00,000",
      professional: "₹6,00,000 - ₹20,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-12 weeks"
  },

  // Custom Software Integration
  {
    id: "8",
    slug: "custom-software-integration",
    name: "Custom Software Integration",
    category: "Design & Development",
    hero: {
      title: "Custom Software Integration Services",
      description: "Connect your disparate systems and applications into a unified ecosystem. We specialize in seamless integrations that improve workflow efficiency and data accuracy.",
      ctaText: "Integrate Your Systems",
      image: "/services/software-integration.jpg"
    },
    overview: "In today's complex business environment, organizations use multiple software systems that often don't communicate with each other, creating data silos and inefficiencies. Our custom software integration services solve this challenge by connecting your various applications, databases, and platforms into a cohesive ecosystem. We eliminate manual data entry, reduce errors, and ensure information flows smoothly across your entire technology stack, enabling better decision-making and operational efficiency.",
    subServices: [
      {
        name: "Third-Party API Integration",
        description: "Connect with external services like payment gateways, shipping providers, and social platforms",
        icon: "Plug"
      },
      {
        name: "Legacy System Integration",
        description: "Modernize and connect legacy systems with contemporary applications",
        icon: "Archive"
      },
      {
        name: "Cloud Application Integration",
        description: "Integrate SaaS platforms and cloud services into your existing infrastructure",
        icon: "Cloud"
      },
      {
        name: "Database Integration",
        description: "Synchronize data across multiple databases and data sources",
        icon: "Database"
      },
      {
        name: "Enterprise Application Integration",
        description: "Connect ERP, CRM, and other enterprise systems for unified operations",
        icon: "Network"
      }
    ],
    technologies: [
      {
        category: "Integration Platforms",
        items: [
          { name: "Zapier", icon: "SiZapier", color: "#FF4A00" },
          { name: "MuleSoft", icon: "SiMulesoft", color: "#00A0DF" },
          { name: "Apache Camel", icon: "SiApachecamel", color: "#F69220" }
        ]
      },
      {
        category: "Message Queues",
        items: [
          { name: "Apache Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "RabbitMQ", icon: "SiRabbitmq", color: "#FF6600" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" }
        ]
      },
      {
        category: "API & Protocols",
        items: [
          { name: "REST API", icon: "SiSwagger", color: "#85EA2D" },
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
          { name: "SOAP", icon: "SiSoap", color: "#4B4B4B" },
          { name: "WebSocket", icon: "SiSocketdotio", color: "#010101" }
        ]
      },
      {
        category: "Cloud Services",
        items: [
          { name: "AWS Lambda", icon: "SiAwslambda", color: "#FF9900" },
          { name: "Azure Functions", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" }
        ]
      }
    ],
    process: [
      {
        phase: "Integration Assessment",
        steps: [
          "Analyze current systems and integration points",
          "Identify data flow requirements and dependencies",
          "Evaluate existing APIs and integration capabilities",
          "Define integration objectives and success criteria",
          "Risk assessment and mitigation planning"
        ]
      },
      {
        phase: "Integration Strategy",
        steps: [
          "Design integration architecture and data flow",
          "Select appropriate integration patterns and tools",
          "Plan data transformation and mapping",
          "Define error handling and retry mechanisms",
          "Security and authentication strategy"
        ]
      },
      {
        phase: "Development & Configuration",
        steps: [
          "Develop custom connectors and adapters",
          "Implement data transformation logic",
          "Configure middleware and message queues",
          "Build error handling and logging mechanisms",
          "Create monitoring and alerting systems"
        ]
      },
      {
        phase: "Testing & Validation",
        steps: [
          "End-to-end integration testing",
          "Data accuracy and consistency verification",
          "Performance and load testing",
          "Failure scenario and error handling testing",
          "User acceptance testing"
        ]
      },
      {
        phase: "Deployment & Monitoring",
        steps: [
          "Phased rollout and data migration",
          "Production deployment and configuration",
          "Monitoring and alerting setup",
          "Documentation and knowledge transfer",
          "Ongoing support and optimization"
        ]
      }
    ],
    features: [
      "Real-time Data Synchronization",
      "Bidirectional Data Flow",
      "Custom Data Transformation",
      "Error Handling & Retry Logic",
      "Data Validation & Cleansing",
      "Scheduled & Event-Driven Integration",
      "Secure Data Transmission",
      "Integration Monitoring Dashboard",
      "Automated Workflows",
      "Conflict Resolution",
      "Data Mapping & Transformation",
      "Logging & Audit Trails",
      "Rollback Mechanisms",
      "Performance Optimization"
    ],
    benefits: [
      {
        title: "Improved Data Accuracy",
        description: "Eliminate manual data entry errors and ensure consistency across all systems"
      },
      {
        title: "Time Savings",
        description: "Automate data transfer and reduce time spent on manual reconciliation"
      },
      {
        title: "Better Decision Making",
        description: "Access unified, real-time data from all systems for informed decisions"
      },
      {
        title: "Increased Productivity",
        description: "Free up staff from manual data tasks to focus on high-value activities"
      },
      {
        title: "Cost Reduction",
        description: "Lower operational costs through automation and reduced errors"
      },
      {
        title: "Enhanced Customer Experience",
        description: "Faster service delivery with seamless data flow between customer-facing systems"
      }
    ],
    industries: [
      {
        name: "E-commerce",
        useCases: ["Payment gateway integration", "Shipping provider integration", "Inventory sync", "Marketplace connections"]
      },
      {
        name: "Healthcare",
        useCases: ["EMR/EHR integration", "Insurance claim systems", "Lab system integration", "Appointment scheduling"]
      },
      {
        name: "Financial Services",
        useCases: ["Banking system integration", "Payment processing", "Accounting software sync", "Trading platforms"]
      },
      {
        name: "Retail",
        useCases: ["POS integration", "Inventory management", "E-commerce platforms", "Loyalty programs"]
      },
      {
        name: "Logistics",
        useCases: ["Tracking systems", "Warehouse management", "Route optimization", "Carrier integrations"]
      }
    ],
    testimonials: [
      {
        quote: "Arka Infotech integrated our 5 different systems seamlessly. Data now flows automatically, saving us 20 hours of manual work per week.",
        author: "Sanjay Reddy",
        company: "MultiRetail Chain",
        rating: 5
      },
      {
        quote: "The integration between our ERP and e-commerce platform is flawless. Orders sync instantly and inventory is always accurate.",
        author: "Pooja Desai",
        company: "ShopEase India",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How long does a typical integration project take?",
        answer: "Simple integrations (2 systems) take 4-6 weeks, medium complexity (3-5 systems) take 8-12 weeks, and complex enterprise integrations can take 12-16 weeks. Timeline depends on systems complexity and data volume."
      },
      {
        question: "Can you integrate legacy systems?",
        answer: "Yes! We have extensive experience integrating legacy systems using various methods including API wrappers, database-level integration, file-based transfers, and middleware solutions."
      },
      {
        question: "What if the third-party system doesn't have an API?",
        answer: "We can create custom solutions using database-level integration, file imports/exports, web scraping (where permitted), or work with the vendor to develop API access."
      },
      {
        question: "How do you handle integration failures?",
        answer: "We implement robust error handling with retry mechanisms, fallback procedures, notification systems, and logging. Our integrations are designed to handle failures gracefully without data loss."
      },
      {
        question: "Is my data secure during integration?",
        answer: "Absolutely! We use encrypted connections, secure authentication, data validation, and follow industry best practices for data security and compliance during all integration processes."
      }
    ],
    relatedServices: ["api-development", "cloud-solutions", "erp-implementation", "data-engineering"],
    pricing: {
      starter: "₹1,50,000 - ₹5,00,000",
      professional: "₹5,00,000 - ₹15,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "4-16 weeks"
  },

  // Enterprise Services

  // CRM Solutions
  {
    id: "9",
    slug: "crm-solutions",
    name: "CRM Solutions",
    category: "Enterprise Services",
    hero: {
      title: "Customer Relationship Management Solutions",
      description: "Transform how you manage customer relationships with powerful CRM solutions. Streamline sales, marketing, and customer service to drive growth and loyalty.",
      ctaText: "Transform Your CRM",
      image: "/services/crm-solutions.jpg"
    },
    overview: "A robust CRM system is essential for modern business success. At Arka Infotech, we implement and customize leading CRM platforms to help you manage customer interactions, streamline sales processes, and improve customer satisfaction. Our CRM solutions centralize customer data, automate workflows, and provide actionable insights that drive revenue growth. Whether you're a startup or an enterprise, we tailor CRM systems to fit your unique sales and customer service processes.",
    subServices: [
      {
        name: "CRM Implementation",
        description: "End-to-end implementation of CRM platforms tailored to your business processes",
        icon: "Settings"
      },
      {
        name: "CRM Customization",
        description: "Custom fields, workflows, and modules to match your specific requirements",
        icon: "Wrench"
      },
      {
        name: "CRM Migration",
        description: "Seamless data migration from legacy systems to modern CRM platforms",
        icon: "ArrowRightLeft"
      },
      {
        name: "CRM Integration",
        description: "Connect CRM with email, marketing automation, accounting, and other tools",
        icon: "Workflow"
      },
      {
        name: "CRM Training & Support",
        description: "Comprehensive user training and ongoing technical support",
        icon: "GraduationCap"
      }
    ],
    technologies: [
      {
        category: "CRM Platforms",
        items: [
          { name: "Salesforce", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "HubSpot CRM", icon: "SiHubspot", color: "#FF7A59" },
          { name: "Zoho CRM", icon: "SiZoho", color: "#C8202E" },
          { name: "Microsoft Dynamics", icon: "SiMicrosoft", color: "#0078D4" }
        ]
      },
      {
        category: "Marketing Automation",
        items: [
          { name: "Mailchimp", icon: "SiMailchimp", color: "#FFE01B" },
          { name: "ActiveCampaign", icon: "SiActivecampaign", color: "#356AE6" },
          { name: "Marketo", icon: "SiAdobe", color: "#FF0000" }
        ]
      },
      {
        category: "Analytics",
        items: [
          { name: "Google Analytics", icon: "SiGoogleanalytics", color: "#E37400" },
          { name: "Tableau", icon: "SiTableau", color: "#E97627" },
          { name: "Power BI", icon: "SiPowerbi", color: "#F2C811" }
        ]
      },
      {
        category: "Integration Tools",
        items: [
          { name: "Zapier", icon: "SiZapier", color: "#FF4A00" },
          { name: "Make", icon: "SiMake", color: "#6D00CC" },
          { name: "API", icon: "SiSwagger", color: "#85EA2D" }
        ]
      }
    ],
    process: [
      {
        phase: "Discovery & Planning",
        steps: [
          "Understand current sales and customer management processes",
          "Identify pain points and improvement opportunities",
          "Define CRM objectives and success metrics",
          "Select the right CRM platform for your needs",
          "Create implementation roadmap and timeline"
        ]
      },
      {
        phase: "CRM Configuration",
        steps: [
          "Set up CRM instance and user accounts",
          "Configure custom fields, modules, and objects",
          "Design sales pipeline and lead stages",
          "Set up automation rules and workflows",
          "Configure reports and dashboards"
        ]
      },
      {
        phase: "Data Migration",
        steps: [
          "Clean and prepare existing customer data",
          "Map data fields from old system to CRM",
          "Perform test migration and validation",
          "Execute full data migration",
          "Verify data accuracy and completeness"
        ]
      },
      {
        phase: "Integration & Testing",
        steps: [
          "Integrate with email, calendar, and communication tools",
          "Connect marketing automation and analytics",
          "Set up third-party app integrations",
          "Conduct user acceptance testing",
          "Optimize workflows based on feedback"
        ]
      },
      {
        phase: "Training & Go-Live",
        steps: [
          "Conduct user training sessions",
          "Provide documentation and best practices",
          "Gradual rollout to different teams",
          "Monitor adoption and usage",
          "Ongoing support and optimization"
        ]
      }
    ],
    features: [
      "Contact & Lead Management",
      "Sales Pipeline Visualization",
      "Email Integration & Tracking",
      "Task & Activity Management",
      "Marketing Automation",
      "Custom Reports & Dashboards",
      "Mobile CRM Access",
      "Sales Forecasting",
      "Deal & Opportunity Tracking",
      "Customer Segmentation",
      "Workflow Automation",
      "Document Management",
      "Team Collaboration Tools",
      "Analytics & Insights"
    ],
    benefits: [
      {
        title: "360° Customer View",
        description: "Centralize all customer interactions, communications, and data in one place"
      },
      {
        title: "Increased Sales",
        description: "Better lead management and sales automation lead to higher conversion rates"
      },
      {
        title: "Improved Collaboration",
        description: "Align sales, marketing, and customer service teams with shared data"
      },
      {
        title: "Data-Driven Decisions",
        description: "Access real-time insights and analytics to make informed business decisions"
      },
      {
        title: "Enhanced Productivity",
        description: "Automate routine tasks and focus on building customer relationships"
      },
      {
        title: "Better Customer Service",
        description: "Quick access to customer history enables personalized, efficient support"
      }
    ],
    industries: [
      {
        name: "B2B Services",
        useCases: ["Lead nurturing", "Account management", "Sales pipeline", "Partner portals"]
      },
      {
        name: "Real Estate",
        useCases: ["Property listings", "Client management", "Deal tracking", "Commission tracking"]
      },
      {
        name: "Insurance",
        useCases: ["Policy management", "Claims tracking", "Agent management", "Customer service"]
      },
      {
        name: "Financial Services",
        useCases: ["Client onboarding", "Portfolio management", "Compliance tracking", "Relationship management"]
      },
      {
        name: "Professional Services",
        useCases: ["Client projects", "Time tracking", "Billing", "Resource allocation"]
      }
    ],
    testimonials: [
      {
        quote: "The CRM implementation by Arka Infotech streamlined our sales process. We've seen a 45% increase in lead conversions and our team productivity has doubled.",
        author: "Rahul Mehta",
        company: "SalesPro India",
        rating: 5
      },
      {
        quote: "Excellent CRM customization! They understood our complex sales cycle and configured the system perfectly. Customer service response time improved by 60%.",
        author: "Priya Joshi",
        company: "ServiceFirst Solutions",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Which CRM platform should I choose?",
        answer: "Salesforce is best for large enterprises with complex needs, HubSpot is great for inbound marketing, Zoho offers excellent value for SMBs, and Microsoft Dynamics integrates well with Microsoft ecosystem. We'll recommend based on your size, budget, and requirements."
      },
      {
        question: "How long does CRM implementation take?",
        answer: "Basic implementation takes 4-8 weeks, standard setup with customizations takes 8-12 weeks, and complex enterprise implementations take 12-20 weeks depending on data migration and integrations."
      },
      {
        question: "Will my team actually use the CRM?",
        answer: "User adoption is our priority! We ensure the CRM fits your workflows, provide comprehensive training, and configure it to be intuitive. We also offer ongoing support to encourage adoption."
      },
      {
        question: "Can you migrate our existing customer data?",
        answer: "Yes! We handle complete data migration including contacts, deals, communications history, and custom data. We clean, validate, and safely transfer all your valuable customer information."
      },
      {
        question: "What about CRM customization?",
        answer: "We customize CRMs extensively including custom fields, workflows, pipelines, reports, dashboards, and integrations to match your exact business processes and requirements."
      }
    ],
    relatedServices: ["salesforce", "hubspot", "zoho", "marketing-automation"],
    pricing: {
      starter: "₹2,50,000 - ₹8,00,000",
      professional: "₹8,00,000 - ₹25,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-16 weeks"
  },

  // Cloud Solutions
  {
    id: "10",
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    category: "Enterprise Services",
    hero: {
      title: "Enterprise Cloud Solutions",
      description: "Migrate to the cloud and unlock scalability, flexibility, and cost savings. We help businesses leverage AWS, Azure, and Google Cloud for digital transformation.",
      ctaText: "Move to Cloud",
      image: "/services/cloud-solutions.jpg"
    },
    overview: "Cloud computing is no longer optional—it's essential for business agility and growth. Arka Infotech provides end-to-end cloud solutions including migration, deployment, management, and optimization across major cloud platforms. Whether you're moving from on-premise infrastructure or optimizing existing cloud setup, our certified cloud architects design solutions that improve performance, reduce costs, and enhance security while ensuring seamless business continuity.",
    subServices: [
      {
        name: "Cloud Migration",
        description: "Seamless migration of applications and data from on-premise to cloud infrastructure",
        icon: "CloudUpload"
      },
      {
        name: "Cloud Infrastructure Setup",
        description: "Design and deploy scalable, secure cloud architecture from scratch",
        icon: "Server"
      },
      {
        name: "Cloud Optimization",
        description: "Cost optimization, performance tuning, and resource management",
        icon: "Gauge"
      },
      {
        name: "Disaster Recovery",
        description: "Backup strategies and disaster recovery planning for business continuity",
        icon: "Shield"
      },
      {
        name: "Multi-Cloud Strategy",
        description: "Leverage multiple cloud providers for redundancy and best-of-breed services",
        icon: "Layers"
      }
    ],
    technologies: [
      {
        category: "Cloud Platforms",
        items: [
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Microsoft Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "DigitalOcean", icon: "SiDigitalocean", color: "#0080FF" }
        ]
      },
      {
        category: "Container & Orchestration",
        items: [
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
          { name: "OpenShift", icon: "SiRedhatopenshift", color: "#EE0000" }
        ]
      },
      {
        category: "Infrastructure as Code",
        items: [
          { name: "Terraform", icon: "SiTerraform", color: "#7B42BC" },
          { name: "Ansible", icon: "SiAnsible", color: "#EE0000" },
          { name: "CloudFormation", icon: "SiAmazonaws", color: "#FF9900" }
        ]
      },
      {
        category: "Monitoring & DevOps",
        items: [
          { name: "Prometheus", icon: "SiPrometheus", color: "#E6522C" },
          { name: "Grafana", icon: "SiGrafana", color: "#F46800" },
          { name: "Jenkins", icon: "SiJenkins", color: "#D24939" },
          { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088FF" }
        ]
      }
    ],
    process: [
      {
        phase: "Cloud Assessment",
        steps: [
          "Evaluate current infrastructure and workloads",
          "Identify cloud readiness and migration candidates",
          "Define cloud strategy and objectives",
          "Cost-benefit analysis and ROI calculation",
          "Risk assessment and mitigation planning"
        ]
      },
      {
        phase: "Architecture Design",
        steps: [
          "Design cloud architecture and topology",
          "Plan network, security, and compliance",
          "Select appropriate cloud services",
          "Design disaster recovery strategy",
          "Create detailed migration roadmap"
        ]
      },
      {
        phase: "Migration Execution",
        steps: [
          "Set up cloud environment and infrastructure",
          "Migrate applications and databases",
          "Configure networking and security",
          "Test migrated applications thoroughly",
          "Validate data integrity and performance"
        ]
      },
      {
        phase: "Optimization",
        steps: [
          "Optimize resource allocation and costs",
          "Implement auto-scaling policies",
          "Performance tuning and monitoring",
          "Security hardening and compliance",
          "Cost optimization and right-sizing"
        ]
      },
      {
        phase: "Managed Services",
        steps: [
          "24/7 monitoring and alerting",
          "Proactive maintenance and updates",
          "Performance optimization",
          "Cost management and reporting",
          "Continuous improvement"
        ]
      }
    ],
    features: [
      "Cloud Migration Strategy",
      "Infrastructure as Code (IaC)",
      "Auto-Scaling & Load Balancing",
      "Disaster Recovery & Backup",
      "Cloud Security & Compliance",
      "Cost Optimization",
      "Multi-Cloud Architecture",
      "Container Orchestration",
      "CI/CD Pipeline Setup",
      "Monitoring & Logging",
      "Performance Optimization",
      "Cloud Storage Solutions",
      "Database as a Service (DBaaS)",
      "Serverless Computing"
    ],
    benefits: [
      {
        title: "Reduced IT Costs",
        description: "Pay only for resources you use with no upfront hardware investments"
      },
      {
        title: "Scalability on Demand",
        description: "Scale resources up or down instantly based on business needs"
      },
      {
        title: "Enhanced Security",
        description: "Enterprise-grade security with compliance certifications and regular updates"
      },
      {
        title: "Business Continuity",
        description: "Built-in redundancy and disaster recovery ensure minimal downtime"
      },
      {
        title: "Global Reach",
        description: "Deploy applications closer to users worldwide for better performance"
      },
      {
        title: "Innovation Speed",
        description: "Faster deployment and access to latest technologies accelerate innovation"
      }
    ],
    industries: [
      {
        name: "SaaS Companies",
        useCases: ["Application hosting", "Multi-tenant architecture", "Global scaling", "Auto-scaling"]
      },
      {
        name: "E-commerce",
        useCases: ["Website hosting", "Database management", "CDN services", "Peak traffic handling"]
      },
      {
        name: "Healthcare",
        useCases: ["HIPAA-compliant hosting", "Patient data storage", "Telemedicine platforms", "Secure backups"]
      },
      {
        name: "Financial Services",
        useCases: ["Secure transactions", "Data analytics", "Compliance hosting", "Disaster recovery"]
      },
      {
        name: "Media & Entertainment",
        useCases: ["Content delivery", "Video streaming", "Media storage", "Global distribution"]
      }
    ],
    testimonials: [
      {
        quote: "Arka Infotech migrated our entire infrastructure to AWS with zero downtime. Our costs reduced by 40% and performance improved significantly.",
        author: "Vikram Sethi",
        company: "DataStream Technologies",
        rating: 5
      },
      {
        quote: "The multi-cloud strategy they implemented gives us flexibility and redundancy. Their ongoing cloud management is excellent.",
        author: "Nandini Rao",
        company: "CloudFirst Enterprises",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Which cloud platform is best for my business?",
        answer: "AWS offers the most comprehensive services, Azure integrates well with Microsoft products, and Google Cloud excels in data analytics and ML. We'll recommend based on your specific requirements, existing tech stack, and budget."
      },
      {
        question: "How much does cloud migration cost?",
        answer: "Costs vary based on infrastructure size and complexity. Simple migrations start from ₹5,00,000, medium complexity ₹15,00,000-₹40,00,000, and large enterprise migrations ₹50,00,000+. Plus ongoing cloud service costs."
      },
      {
        question: "Will there be downtime during migration?",
        answer: "We use proven migration strategies to minimize or eliminate downtime. For critical systems, we perform migrations during off-peak hours or use parallel running approaches for zero-downtime migration."
      },
      {
        question: "Is cloud more secure than on-premise?",
        answer: "Yes, when properly configured. Major cloud providers invest billions in security, offer compliance certifications, and provide security features that are difficult to replicate on-premise."
      },
      {
        question: "Can we hybrid cloud (mix of cloud and on-premise)?",
        answer: "Absolutely! We design hybrid cloud architectures that keep sensitive data on-premise while leveraging cloud for scalability and specific services."
      }
    ],
    relatedServices: ["devops", "infrastructure-management", "cybersecurity", "disaster-recovery"],
    pricing: {
      starter: "₹5,00,000 - ₹15,00,000",
      professional: "₹15,00,000 - ₹50,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-20 weeks"
  },

  // IoT Solutions
  {
    id: "11",
    slug: "iot-solutions",
    name: "IoT Solutions",
    category: "Enterprise Services",
    hero: {
      title: "Internet of Things (IoT) Solutions",
      description: "Connect devices, collect data, and automate processes with intelligent IoT solutions. Transform operations with real-time monitoring and smart automation.",
      ctaText: "Explore IoT Solutions",
      image: "/services/iot-solutions.jpg"
    },
    overview: "The Internet of Things is revolutionizing how businesses operate, enabling smarter decisions through connected devices and real-time data. Arka Infotech designs and implements comprehensive IoT solutions that connect your devices, sensors, and systems to collect valuable data, enable remote monitoring, and automate processes. From smart factories to connected healthcare devices, we build IoT ecosystems that drive operational efficiency and unlock new business opportunities.",
    subServices: [
      {
        name: "IoT Application Development",
        description: "Custom applications for device management, data visualization, and control",
        icon: "Smartphone"
      },
      {
        name: "IoT Platform Integration",
        description: "Integration with AWS IoT, Azure IoT, and Google Cloud IoT platforms",
        icon: "Cloud"
      },
      {
        name: "Sensor & Device Integration",
        description: "Connect various sensors, devices, and hardware to your IoT ecosystem",
        icon: "Cpu"
      },
      {
        name: "IoT Data Analytics",
        description: "Real-time and historical data analysis for actionable insights",
        icon: "BarChart"
      },
      {
        name: "Edge Computing",
        description: "Process data at the edge for faster response times and reduced bandwidth",
        icon: "Zap"
      }
    ],
    technologies: [
      {
        category: "IoT Platforms",
        items: [
          { name: "AWS IoT", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure IoT", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Cloud IoT", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "ThingWorx", icon: "SiIot", color: "#007ACC" }
        ]
      },
      {
        category: "Protocols",
        items: [
          { name: "MQTT", icon: "SiMqtt", color: "#660066" },
          { name: "CoAP", icon: "SiIot", color: "#007ACC" },
          { name: "HTTP/HTTPS", icon: "SiHtml5", color: "#E34F26" }
        ]
      },
      {
        category: "Hardware & Edge",
        items: [
          { name: "Raspberry Pi", icon: "SiRaspberrypi", color: "#A22846" },
          { name: "Arduino", icon: "SiArduino", color: "#00979D" },
          { name: "ESP32", icon: "SiEspressif", color: "#E7352C" }
        ]
      },
      {
        category: "Data & Analytics",
        items: [
          { name: "InfluxDB", icon: "SiInfluxdb", color: "#22ADF6" },
          { name: "Grafana", icon: "SiGrafana", color: "#F46800" },
          { name: "Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "Node-RED", icon: "SiNodered", color: "#8F0000" }
        ]
      }
    ],
    process: [
      {
        phase: "IoT Strategy & Planning",
        steps: [
          "Identify IoT use cases and business objectives",
          "Define hardware and sensor requirements",
          "Plan network connectivity and protocols",
          "Design data collection strategy",
          "ROI analysis and feasibility study"
        ]
      },
      {
        phase: "Architecture Design",
        steps: [
          "Design IoT system architecture",
          "Select IoT platform and technologies",
          "Plan data flow and processing",
          "Design security framework",
          "Create scalability roadmap"
        ]
      },
      {
        phase: "Development & Integration",
        steps: [
          "Develop IoT applications and dashboards",
          "Configure sensors and devices",
          "Implement communication protocols",
          "Build data processing pipelines",
          "Integrate with existing systems"
        ]
      },
      {
        phase: "Testing & Deployment",
        steps: [
          "Device connectivity testing",
          "Data accuracy verification",
          "Performance and load testing",
          "Security testing and hardening",
          "Phased deployment and monitoring"
        ]
      },
      {
        phase: "Monitoring & Support",
        steps: [
          "24/7 device and system monitoring",
          "Predictive maintenance alerts",
          "Performance optimization",
          "Security updates and patches",
          "Continuous improvement"
        ]
      }
    ],
    features: [
      "Device Connectivity & Management",
      "Real-time Data Collection",
      "Data Analytics & Visualization",
      "Remote Monitoring & Control",
      "Automated Alerts & Notifications",
      "Edge Computing Capabilities",
      "Predictive Maintenance",
      "Dashboard & Reporting",
      "Device Security & Authentication",
      "Over-the-Air (OTA) Updates",
      "Integration with Cloud Platforms",
      "Historical Data Analysis",
      "API for Third-Party Integration",
      "Mobile App for Monitoring"
    ],
    benefits: [
      {
        title: "Operational Efficiency",
        description: "Automate processes and optimize operations with real-time monitoring"
      },
      {
        title: "Cost Reduction",
        description: "Reduce maintenance costs through predictive maintenance and remote monitoring"
      },
      {
        title: "Data-Driven Insights",
        description: "Make informed decisions based on real-time and historical device data"
      },
      {
        title: "Remote Management",
        description: "Monitor and control devices from anywhere in the world"
      },
      {
        title: "Improved Safety",
        description: "Detect anomalies and potential hazards before they become problems"
      },
      {
        title: "Competitive Advantage",
        description: "Leverage IoT to create new services and revenue streams"
      }
    ],
    industries: [
      {
        name: "Manufacturing",
        useCases: ["Smart factories", "Equipment monitoring", "Quality control", "Predictive maintenance"]
      },
      {
        name: "Agriculture",
        useCases: ["Smart irrigation", "Crop monitoring", "Livestock tracking", "Weather monitoring"]
      },
      {
        name: "Healthcare",
        useCases: ["Patient monitoring", "Medical device connectivity", "Asset tracking", "Remote care"]
      },
      {
        name: "Smart Buildings",
        useCases: ["Energy management", "HVAC control", "Security systems", "Occupancy monitoring"]
      },
      {
        name: "Transportation",
        useCases: ["Fleet tracking", "Vehicle diagnostics", "Route optimization", "Driver monitoring"]
      }
    ],
    testimonials: [
      {
        quote: "The IoT solution transformed our factory operations. Real-time monitoring has reduced downtime by 70% and maintenance costs by 50%.",
        author: "Ashok Kumar",
        company: "SmartManufacture India",
        rating: 5
      },
      {
        quote: "Their IoT expertise helped us launch a connected product line. The platform handles thousands of devices flawlessly.",
        author: "Ritu Sharma",
        company: "ConnectTech Devices",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What is IoT and how can it benefit my business?",
        answer: "IoT connects physical devices to the internet to collect and exchange data. Benefits include operational efficiency, predictive maintenance, remote monitoring, cost reduction, and data-driven decision making."
      },
      {
        question: "How secure are IoT solutions?",
        answer: "We implement multiple security layers including device authentication, encrypted communication, secure boot, regular updates, and network segmentation. Security is built into every aspect of our IoT solutions."
      },
      {
        question: "How much does IoT implementation cost?",
        answer: "Costs depend on scale and complexity. Small IoT projects (10-50 devices) start from ₹5,00,000, medium projects ₹15,00,000-₹40,00,000, and large industrial IoT implementations ₹50,00,000+."
      },
      {
        question: "Can you integrate IoT with our existing systems?",
        answer: "Yes! We specialize in integrating IoT data with ERP, SCADA, MES, and other existing systems through APIs and custom connectors for unified operations."
      },
      {
        question: "What about device management and updates?",
        answer: "We provide comprehensive device management including remote configuration, over-the-air (OTA) updates, health monitoring, and lifecycle management for all connected devices."
      }
    ],
    relatedServices: ["cloud-solutions", "data-engineering", "ai-ml", "mobile-app-development"],
    pricing: {
      starter: "₹5,00,000 - ₹15,00,000",
      professional: "₹15,00,000 - ₹50,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },

  // Data Engineering
  {
    id: "12",
    slug: "data-engineering",
    name: "Data Engineering",
    category: "Enterprise Services",
    hero: {
      title: "Data Engineering Services",
      description: "Build robust data infrastructure and pipelines that turn raw data into valuable insights. We create scalable data systems that power analytics and AI.",
      ctaText: "Engineer Your Data",
      image: "/services/data-engineering.jpg"
    },
    overview: "Data is your most valuable asset, but only if you can access, process, and analyze it effectively. Arka Infotech's data engineering services help you build robust data infrastructure that collects, processes, and transforms data at scale. We design and implement data pipelines, warehouses, and lakes that provide clean, reliable data for analytics, reporting, and machine learning applications. Our solutions handle everything from streaming real-time data to batch processing terabytes of historical information.",
    subServices: [
      {
        name: "Data Pipeline Development",
        description: "Build automated ETL/ELT pipelines for efficient data movement and transformation",
        icon: "GitBranch"
      },
      {
        name: "Data Warehouse Design",
        description: "Design and implement centralized data warehouses for analytics and BI",
        icon: "Database"
      },
      {
        name: "Data Lake Architecture",
        description: "Build scalable data lakes for storing structured and unstructured data",
        icon: "Waves"
      },
      {
        name: "Real-time Data Processing",
        description: "Stream processing for real-time analytics and immediate insights",
        icon: "Zap"
      },
      {
        name: "Data Quality Management",
        description: "Ensure data accuracy, consistency, and reliability across systems",
        icon: "CheckCircle"
      }
    ],
    technologies: [
      {
        category: "Data Processing",
        items: [
          { name: "Apache Spark", icon: "SiApachespark", color: "#E25A1C" },
          { name: "Apache Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "Apache Flink", icon: "SiApacheflink", color: "#E6526F" },
          { name: "Airflow", icon: "SiApacheairflow", color: "#017CEE" }
        ]
      },
      {
        category: "Data Warehouses",
        items: [
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" },
          { name: "BigQuery", icon: "SiGooglebigquery", color: "#669DF6" },
          { name: "Redshift", icon: "SiAmazonredshift", color: "#8C4FFF" },
          { name: "Databricks", icon: "SiDatabricks", color: "#FF3621" }
        ]
      },
      {
        category: "Programming",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "Scala", icon: "SiScala", color: "#DC322F" },
          { name: "SQL", icon: "SiMysql", color: "#4479A1" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "dbt", icon: "SiDbt", color: "#FF694B" },
          { name: "Tableau", icon: "SiTableau", color: "#E97627" },
          { name: "Power BI", icon: "SiPowerbi", color: "#F2C811" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" }
        ]
      }
    ],
    process: [
      {
        phase: "Data Assessment",
        steps: [
          "Analyze current data sources and systems",
          "Assess data quality and completeness",
          "Identify data requirements and use cases",
          "Define data governance policies",
          "Plan data architecture strategy"
        ]
      },
      {
        phase: "Architecture Design",
        steps: [
          "Design data warehouse or lake architecture",
          "Plan ETL/ELT pipeline workflows",
          "Define data models and schemas",
          "Design data security framework",
          "Plan scalability and performance"
        ]
      },
      {
        phase: "Pipeline Development",
        steps: [
          "Build data extraction processes",
          "Implement data transformation logic",
          "Develop data loading mechanisms",
          "Create data quality checks",
          "Implement error handling and monitoring"
        ]
      },
      {
        phase: "Testing & Validation",
        steps: [
          "Data quality and accuracy testing",
          "Performance and load testing",
          "End-to-end pipeline testing",
          "Data reconciliation",
          "Security and compliance validation"
        ]
      },
      {
        phase: "Deployment & Monitoring",
        steps: [
          "Production deployment",
          "Set up monitoring and alerting",
          "Implement data governance",
          "Documentation and training",
          "Ongoing optimization and support"
        ]
      }
    ],
    features: [
      "Automated ETL/ELT Pipelines",
      "Real-time Stream Processing",
      "Data Warehouse Implementation",
      "Data Lake Architecture",
      "Data Quality Monitoring",
      "Schema Management",
      "Data Lineage Tracking",
      "Incremental Data Loading",
      "Error Handling & Recovery",
      "Data Partitioning",
      "Performance Optimization",
      "Data Cataloging",
      "Metadata Management",
      "Orchestration & Scheduling"
    ],
    benefits: [
      {
        title: "Better Data Quality",
        description: "Clean, consistent, and reliable data for accurate analytics and reporting"
      },
      {
        title: "Faster Time to Insights",
        description: "Automated pipelines deliver fresh data quickly for timely decision-making"
      },
      {
        title: "Scalable Infrastructure",
        description: "Handle growing data volumes without performance degradation"
      },
      {
        title: "Cost Efficiency",
        description: "Optimize storage and compute costs with efficient data architecture"
      },
      {
        title: "Self-Service Analytics",
        description: "Empower business users with clean, accessible data for analysis"
      },
      {
        title: "AI/ML Ready",
        description: "Quality data pipelines enable advanced analytics and machine learning"
      }
    ],
    industries: [
      {
        name: "E-commerce",
        useCases: ["Customer behavior analysis", "Inventory optimization", "Sales forecasting", "Recommendation engines"]
      },
      {
        name: "Finance",
        useCases: ["Risk analytics", "Fraud detection", "Trading analytics", "Customer insights"]
      },
      {
        name: "Healthcare",
        useCases: ["Patient analytics", "Clinical research", "Population health", "Operational metrics"]
      },
      {
        name: "Telecommunications",
        useCases: ["Network analytics", "Customer churn prediction", "Usage patterns", "Performance monitoring"]
      },
      {
        name: "Retail",
        useCases: ["Sales analytics", "Supply chain optimization", "Customer segmentation", "Pricing optimization"]
      }
    ],
    testimonials: [
      {
        quote: "The data engineering team built pipelines that process 10TB of data daily without issues. Our analytics are now real-time instead of days old.",
        author: "Sandeep Agarwal",
        company: "BigData Analytics Corp",
        rating: 5
      },
      {
        quote: "Excellent work on our data warehouse! Query performance improved 10x and our analysts finally have reliable, clean data.",
        author: "Lakshmi Narayanan",
        company: "RetailMetrics India",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What's the difference between a data warehouse and data lake?",
        answer: "Data warehouses store structured, processed data optimized for analytics. Data lakes store raw data in any format (structured, semi-structured, unstructured) for flexibility. We'll recommend based on your use cases."
      },
      {
        question: "How much does data engineering cost?",
        answer: "Costs vary by complexity and data volume. Small projects start from ₹8,00,000, medium complexity ₹20,00,000-₹50,00,000, and large enterprise data platforms ₹60,00,000+, plus cloud infrastructure costs."
      },
      {
        question: "Can you handle real-time data processing?",
        answer: "Yes! We build stream processing pipelines using technologies like Kafka, Flink, and Spark Streaming to process and analyze data in real-time for immediate insights."
      },
      {
        question: "How do you ensure data quality?",
        answer: "We implement data validation, cleansing, deduplication, monitoring, and quality metrics at every pipeline stage. We also set up alerts for data quality issues."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely! We integrate with databases, SaaS platforms, APIs, file systems, and any data source your business uses to create unified data pipelines."
      }
    ],
    relatedServices: ["ai-ml", "cloud-solutions", "business-intelligence", "big-data-analytics"],
    pricing: {
      starter: "₹8,00,000 - ₹20,00,000",
      professional: "₹20,00,000 - ₹60,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },

  // AI/ML
  {
    id: "13",
    slug: "ai-ml",
    name: "AI/ML",
    category: "Enterprise Services",
    hero: {
      title: "AI & Machine Learning Solutions",
      description: "Harness the power of artificial intelligence and machine learning to automate processes, predict outcomes, and unlock insights from your data.",
      ctaText: "Explore AI Solutions",
      image: "/services/ai-ml.jpg"
    },
    overview: "Artificial Intelligence and Machine Learning are transforming businesses across industries, enabling automation, prediction, and intelligent decision-making at scale. Arka Infotech helps organizations leverage AI/ML to solve complex problems, improve efficiency, and create competitive advantages. From custom ML models to AI-powered applications, our data scientists and ML engineers build solutions that turn your data into actionable intelligence and automated processes.",
    subServices: [
      {
        name: "Predictive Analytics",
        description: "Build models to forecast trends, customer behavior, and business outcomes",
        icon: "TrendingUp"
      },
      {
        name: "Natural Language Processing",
        description: "Text analysis, sentiment analysis, chatbots, and language understanding",
        icon: "MessageSquare"
      },
      {
        name: "Computer Vision",
        description: "Image recognition, object detection, facial recognition, and visual analytics",
        icon: "Eye"
      },
      {
        name: "Recommendation Systems",
        description: "Personalized product, content, and service recommendations",
        icon: "Sparkles"
      },
      {
        name: "AI Integration",
        description: "Integrate AI capabilities into existing applications and workflows",
        icon: "Cpu"
      }
    ],
    technologies: [
      {
        category: "ML Frameworks",
        items: [
          { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
          { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
          { name: "Scikit-learn", icon: "SiScikitlearn", color: "#F7931E" },
          { name: "Keras", icon: "SiKeras", color: "#D00000" }
        ]
      },
      {
        category: "AI Services",
        items: [
          { name: "OpenAI", icon: "SiOpenai", color: "#412991" },
          { name: "AWS SageMaker", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure ML", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google AI", icon: "SiGoogle", color: "#4285F4" }
        ]
      },
      {
        category: "Programming",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "R", icon: "SiR", color: "#276DC3" },
          { name: "Jupyter", icon: "SiJupyter", color: "#F37626" }
        ]
      },
      {
        category: "MLOps",
        items: [
          { name: "MLflow", icon: "SiMlflow", color: "#0194E2" },
          { name: "Kubeflow", icon: "SiKubernetes", color: "#326CE5" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" }
        ]
      }
    ],
    process: [
      {
        phase: "Problem Definition",
        steps: [
          "Identify AI/ML use cases and business objectives",
          "Assess data availability and quality",
          "Define success metrics and KPIs",
          "Feasibility analysis and ROI estimation",
          "Select appropriate AI/ML approaches"
        ]
      },
      {
        phase: "Data Preparation",
        steps: [
          "Collect and aggregate relevant data",
          "Data cleaning and preprocessing",
          "Feature engineering and selection",
          "Data labeling (if required)",
          "Split data for training and testing"
        ]
      },
      {
        phase: "Model Development",
        steps: [
          "Select and train ML algorithms",
          "Hyperparameter tuning and optimization",
          "Model validation and evaluation",
          "Bias detection and mitigation",
          "Model explainability analysis"
        ]
      },
      {
        phase: "Deployment",
        steps: [
          "Containerize models for deployment",
          "Set up ML infrastructure",
          "Deploy models to production",
          "Implement A/B testing",
          "Create model APIs and endpoints"
        ]
      },
      {
        phase: "Monitoring & Maintenance",
        steps: [
          "Monitor model performance and accuracy",
          "Detect model drift and degradation",
          "Retrain models with new data",
          "Update and improve models",
          "Continuous optimization"
        ]
      }
    ],
    features: [
      "Custom ML Model Development",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Recommendation Engines",
      "Anomaly Detection",
      "Chatbot Development",
      "Sentiment Analysis",
      "Time Series Forecasting",
      "Image Classification",
      "Text Mining & Analysis",
      "Deep Learning Models",
      "Model Deployment & MLOps",
      "AI Model API Services"
    ],
    benefits: [
      {
        title: "Automated Decision Making",
        description: "Let AI make routine decisions based on data patterns and predictions"
      },
      {
        title: "Improved Accuracy",
        description: "Machine learning models improve accuracy over time with more data"
      },
      {
        title: "Cost Reduction",
        description: "Automate manual processes and reduce operational costs significantly"
      },
      {
        title: "Personalization at Scale",
        description: "Deliver personalized experiences to millions of customers automatically"
      },
      {
        title: "Competitive Advantage",
        description: "Leverage AI capabilities that differentiate you from competitors"
      },
      {
        title: "Predictive Insights",
        description: "Forecast trends and outcomes to make proactive business decisions"
      }
    ],
    industries: [
      {
        name: "E-commerce",
        useCases: ["Product recommendations", "Dynamic pricing", "Demand forecasting", "Customer segmentation"]
      },
      {
        name: "Healthcare",
        useCases: ["Disease prediction", "Medical image analysis", "Patient risk assessment", "Drug discovery"]
      },
      {
        name: "Finance",
        useCases: ["Fraud detection", "Credit scoring", "Algorithmic trading", "Risk assessment"]
      },
      {
        name: "Manufacturing",
        useCases: ["Predictive maintenance", "Quality control", "Demand forecasting", "Supply chain optimization"]
      },
      {
        name: "Marketing",
        useCases: ["Customer churn prediction", "Lead scoring", "Campaign optimization", "Sentiment analysis"]
      }
    ],
    testimonials: [
      {
        quote: "The AI model for fraud detection has saved us millions. It catches fraudulent transactions with 95% accuracy in real-time.",
        author: "Manoj Bajpai",
        company: "SecurePay Financial",
        rating: 5
      },
      {
        quote: "Their recommendation engine increased our sales by 35%. The ML team's expertise is world-class.",
        author: "Simran Kaur",
        company: "ShopSmart E-commerce",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Do I need a lot of data for machine learning?",
        answer: "It depends on the problem. Some models work with thousands of records, others need millions. We'll assess your data and recommend appropriate approaches, including data augmentation or transfer learning if needed."
      },
      {
        question: "How accurate will the AI/ML model be?",
        answer: "Accuracy depends on data quality and problem complexity. We aim for industry-standard accuracy and clearly communicate realistic expectations. We continuously improve models through retraining and optimization."
      },
      {
        question: "How long does AI/ML development take?",
        answer: "Simple ML projects take 2-4 months, medium complexity 4-8 months, and complex AI systems 8-16 months. This includes data preparation, model development, testing, and deployment."
      },
      {
        question: "Can AI/ML integrate with our existing systems?",
        answer: "Absolutely! We deploy models as APIs, integrate them into your applications, or build complete AI-powered features within your existing systems."
      },
      {
        question: "What about model maintenance and updates?",
        answer: "We provide MLOps services including model monitoring, performance tracking, automatic retraining, and continuous improvement to ensure models stay accurate over time."
      }
    ],
    relatedServices: ["data-engineering", "big-data-analytics", "chatbot-development", "cloud-solutions"],
    pricing: {
      starter: "₹10,00,000 - ₹30,00,000",
      professional: "₹30,00,000 - ₹80,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-32 weeks"
  },

  // Salesforce
  {
    id: "14",
    slug: "salesforce",
    name: "Salesforce",
    category: "Enterprise Services",
    hero: {
      title: "Salesforce Implementation & Customization",
      description: "Transform your business with the world's #1 CRM platform. We help you leverage Salesforce's full potential through expert implementation, customization, and integration.",
      ctaText: "Get Started with Salesforce",
      image: "/services/salesforce.jpg"
    },
    overview: "As certified Salesforce partners, Arka Infotech helps businesses of all sizes maximize their Salesforce investment. From initial implementation to complex customizations and integrations, our Salesforce experts design solutions tailored to your unique business processes. We specialize in Sales Cloud, Service Cloud, Marketing Cloud, and custom app development on the Salesforce platform, ensuring you get maximum ROI from this powerful CRM ecosystem.",
    subServices: [
      {
        name: "Salesforce Implementation",
        description: "Complete setup and configuration of Salesforce for your organization",
        icon: "Settings"
      },
      {
        name: "Custom App Development",
        description: "Build custom applications on Salesforce platform using Apex and Lightning",
        icon: "Code"
      },
      {
        name: "Salesforce Integration",
        description: "Connect Salesforce with ERP, marketing, and other business systems",
        icon: "Workflow"
      },
      {
        name: "Salesforce Migration",
        description: "Migrate from legacy CRM or other platforms to Salesforce",
        icon: "ArrowRightLeft"
      },
      {
        name: "Salesforce Consulting",
        description: "Strategic consulting to optimize your Salesforce usage and adoption",
        icon: "Lightbulb"
      }
    ],
    technologies: [
      {
        category: "Salesforce Clouds",
        items: [
          { name: "Sales Cloud", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "Service Cloud", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "Marketing Cloud", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "Commerce Cloud", icon: "SiSalesforce", color: "#00A1E0" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Apex", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "Lightning Web Components", icon: "SiJavascript", color: "#F7DF1E" },
          { name: "Visualforce", icon: "SiSalesforce", color: "#00A1E0" }
        ]
      },
      {
        category: "Integration",
        items: [
          { name: "MuleSoft", icon: "SiMulesoft", color: "#00A0DF" },
          { name: "Heroku", icon: "SiHeroku", color: "#430098" },
          { name: "REST API", icon: "SiSwagger", color: "#85EA2D" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Salesforce DX", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "Workbench", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "Data Loader", icon: "SiSalesforce", color: "#00A1E0" }
        ]
      }
    ],
    process: [
      {
        phase: "Discovery",
        steps: [
          "Understand business processes and requirements",
          "Identify Salesforce edition and features needed",
          "Define user roles and permissions",
          "Plan data migration strategy",
          "Create implementation roadmap"
        ]
      },
      {
        phase: "Configuration",
        steps: [
          "Set up Salesforce org and user licenses",
          "Configure objects, fields, and page layouts",
          "Design sales processes and workflows",
          "Set up automation (Process Builder, Flow)",
          "Configure security and sharing rules"
        ]
      },
      {
        phase: "Customization",
        steps: [
          "Develop custom Lightning components",
          "Build Apex triggers and classes",
          "Create custom reports and dashboards",
          "Develop custom integrations",
          "Build mobile-responsive interfaces"
        ]
      },
      {
        phase: "Data Migration",
        steps: [
          "Clean and prepare source data",
          "Map fields and relationships",
          "Test data import with samples",
          "Execute full data migration",
          "Validate data accuracy"
        ]
      },
      {
        phase: "Training & Support",
        steps: [
          "Conduct admin and user training",
          "Provide documentation and guides",
          "Monitor user adoption",
          "Ongoing support and optimization",
          "Regular health checks"
        ]
      }
    ],
    features: [
      "Sales Cloud Implementation",
      "Service Cloud Setup",
      "Lightning Experience",
      "Custom Object Creation",
      "Workflow Automation",
      "Process Builder & Flow",
      "Custom Reports & Dashboards",
      "Email Integration",
      "Mobile App Configuration",
      "AppExchange Integration",
      "Salesforce CPQ",
      "Marketing Automation",
      "Custom Apex Development",
      "API Integration"
    ],
    benefits: [
      {
        title: "Complete Customer View",
        description: "360° view of customers across sales, service, and marketing touchpoints"
      },
      {
        title: "Increased Productivity",
        description: "Automate routine tasks and streamline processes to boost team efficiency"
      },
      {
        title: "Better Collaboration",
        description: "Chatter and collaboration tools keep teams aligned and informed"
      },
      {
        title: "Mobile Access",
        description: "Access customer data and tools anywhere with Salesforce mobile app"
      },
      {
        title: "Scalable Platform",
        description: "Grow from small team to enterprise without platform limitations"
      },
      {
        title: "Ecosystem & AppExchange",
        description: "Access thousands of pre-built integrations and apps"
      }
    ],
    industries: [
      {
        name: "Financial Services",
        useCases: ["Wealth management", "Banking CRM", "Insurance sales", "Client portals"]
      },
      {
        name: "Healthcare",
        useCases: ["Patient relationship management", "Provider networks", "Member services", "Care coordination"]
      },
      {
        name: "Manufacturing",
        useCases: ["Channel partner management", "Service management", "Sales operations", "Quote-to-cash"]
      },
      {
        name: "Non-Profit",
        useCases: ["Donor management", "Grant tracking", "Volunteer management", "Program delivery"]
      },
      {
        name: "Retail",
        useCases: ["Customer service", "Order management", "Loyalty programs", "Omnichannel experience"]
      }
    ],
    testimonials: [
      {
        quote: "Arka Infotech's Salesforce implementation was flawless. Our sales cycle time reduced by 30% and we have complete visibility into our pipeline.",
        author: "Aditya Malhotra",
        company: "EnterpriseWorks India",
        rating: 5
      },
      {
        quote: "The custom Salesforce solution perfectly fits our complex B2B sales process. Their expertise saved us months of trial and error.",
        author: "Kavita Singh",
        company: "TechSolutions Pvt Ltd",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Which Salesforce edition should I choose?",
        answer: "Essentials for small businesses (up to 10 users), Professional for growing teams, Enterprise for larger organizations, and Unlimited for complex customizations. We'll recommend based on your size and requirements."
      },
      {
        question: "How long does Salesforce implementation take?",
        answer: "Basic implementations take 6-8 weeks, standard with customizations 10-16 weeks, and complex enterprise deployments 16-24 weeks depending on data migration and integrations."
      },
      {
        question: "Can you customize Salesforce for our industry?",
        answer: "Absolutely! Salesforce is highly customizable. We've implemented industry-specific solutions for finance, healthcare, manufacturing, non-profits, and more with custom objects, workflows, and processes."
      },
      {
        question: "What about Salesforce training?",
        answer: "We provide comprehensive training including admin training, end-user training, and train-the-trainer programs. We also create custom documentation tailored to your configuration."
      },
      {
        question: "Do you offer ongoing Salesforce support?",
        answer: "Yes! We provide managed services including bug fixes, enhancements, user support, release updates, performance optimization, and strategic consulting."
      }
    ],
    relatedServices: ["crm-solutions", "marketing-automation", "cpq-solutions", "customer-service-solutions"],
    pricing: {
      starter: "₹3,50,000 - ₹10,00,000",
      professional: "₹10,00,000 - ₹30,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "8-20 weeks"
  },

  // HubSpot
  {
    id: "15",
    slug: "hubspot",
    name: "HubSpot",
    category: "Enterprise Services",
    hero: {
      title: "HubSpot Implementation & Services",
      description: "Grow better with HubSpot's all-in-one CRM, marketing, sales, and service platform. We help you implement and optimize HubSpot for maximum growth.",
      ctaText: "Start with HubSpot",
      image: "/services/hubspot.jpg"
    },
    overview: "HubSpot is the complete platform for inbound marketing, sales, and customer service. Arka Infotech, as HubSpot partners, helps businesses leverage this powerful platform to attract, engage, and delight customers. From CRM setup to marketing automation and sales enablement, we configure HubSpot to align with your growth strategy, integrate with your existing tools, and train your team to drive results.",
    subServices: [
      {
        name: "HubSpot CRM Setup",
        description: "Configure HubSpot's free CRM with custom properties, pipelines, and workflows",
        icon: "Settings"
      },
      {
        name: "Marketing Hub Implementation",
        description: "Set up email marketing, landing pages, forms, and marketing automation",
        icon: "Megaphone"
      },
      {
        name: "Sales Hub Configuration",
        description: "Configure sales tools, sequences, and pipeline management",
        icon: "DollarSign"
      },
      {
        name: "Service Hub Setup",
        description: "Implement ticketing, knowledge base, and customer feedback tools",
        icon: "Headphones"
      },
      {
        name: "HubSpot Integration",
        description: "Connect HubSpot with third-party tools and existing systems",
        icon: "Workflow"
      }
    ],
    technologies: [
      {
        category: "HubSpot Hubs",
        items: [
          { name: "Marketing Hub", icon: "SiHubspot", color: "#FF7A59" },
          { name: "Sales Hub", icon: "SiHubspot", color: "#FF7A59" },
          { name: "Service Hub", icon: "SiHubspot", color: "#FF7A59" },
          { name: "CMS Hub", icon: "SiHubspot", color: "#FF7A59" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "HubL", icon: "SiHubspot", color: "#FF7A59" },
          { name: "HubSpot API", icon: "SiSwagger", color: "#85EA2D" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" }
        ]
      },
      {
        category: "Integration",
        items: [
          { name: "Zapier", icon: "SiZapier", color: "#FF4A00" },
          { name: "Salesforce", icon: "SiSalesforce", color: "#00A1E0" },
          { name: "Shopify", icon: "SiShopify", color: "#7AB55C" },
          { name: "Slack", icon: "SiSlack", color: "#4A154B" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Google Analytics", icon: "SiGoogleanalytics", color: "#E37400" },
          { name: "Gmail", icon: "SiGmail", color: "#EA4335" },
          { name: "Outlook", icon: "SiMicrosoftoutlook", color: "#0078D4" }
        ]
      }
    ],
    process: [
      {
        phase: "Strategy & Planning",
        steps: [
          "Define marketing and sales goals",
          "Choose appropriate HubSpot hubs and tiers",
          "Plan buyer journey and content strategy",
          "Define workflows and automation",
          "Create implementation roadmap"
        ]
      },
      {
        phase: "Platform Setup",
        steps: [
          "Configure HubSpot account and settings",
          "Set up users, teams, and permissions",
          "Create custom properties and fields",
          "Design sales pipelines and deal stages",
          "Configure email and domain settings"
        ]
      },
      {
        phase: "Automation & Workflows",
        steps: [
          "Build marketing automation workflows",
          "Create sales sequences and templates",
          "Set up lead scoring and nurturing",
          "Configure chatbots and live chat",
          "Implement reporting dashboards"
        ]
      },
      {
        phase: "Integration",
        steps: [
          "Integrate with email (Gmail, Outlook)",
          "Connect marketing and advertising platforms",
          "Set up website tracking",
          "Integrate with accounting and business tools",
          "Custom API integrations"
        ]
      },
      {
        phase: "Training & Optimization",
        steps: [
          "Train marketing and sales teams",
          "Provide best practice guidance",
          "Monitor adoption and usage",
          "Optimize based on performance data",
          "Ongoing support and consulting"
        ]
      }
    ],
    features: [
      "Free CRM with Unlimited Users",
      "Email Marketing & Automation",
      "Landing Pages & Forms",
      "Sales Pipeline Management",
      "Email Sequences",
      "Meeting Scheduling",
      "Live Chat & Chatbots",
      "Ticketing System",
      "Knowledge Base",
      "Marketing Analytics",
      "A/B Testing",
      "Workflows & Automation",
      "Custom Reporting",
      "Mobile CRM App"
    ],
    benefits: [
      {
        title: "All-in-One Platform",
        description: "Marketing, sales, and service tools integrated in single platform"
      },
      {
        title: "Easy to Use",
        description: "Intuitive interface requires minimal training for team adoption"
      },
      {
        title: "Inbound Marketing",
        description: "Purpose-built for inbound methodology to attract and convert leads"
      },
      {
        title: "Free CRM",
        description: "Start with powerful free CRM and upgrade as you grow"
      },
      {
        title: "Rich Integration Ecosystem",
        description: "Connects with 1000+ popular business tools and apps"
      },
      {
        title: "Transparent Pricing",
        description: "Clear, predictable pricing with no hidden costs"
      }
    ],
    industries: [
      {
        name: "B2B Services",
        useCases: ["Lead generation", "Sales automation", "Content marketing", "Account-based marketing"]
      },
      {
        name: "E-commerce",
        useCases: ["Email campaigns", "Abandoned cart recovery", "Customer segmentation", "Marketing automation"]
      },
      {
        name: "SaaS Companies",
        useCases: ["Trial management", "Onboarding automation", "Churn reduction", "Customer success"]
      },
      {
        name: "Education",
        useCases: ["Student recruitment", "Enrollment management", "Alumni relations", "Event marketing"]
      },
      {
        name: "Professional Services",
        useCases: ["Client acquisition", "Project management", "Proposal tracking", "Client communication"]
      }
    ],
    testimonials: [
      {
        quote: "HubSpot implementation by Arka Infotech streamlined our entire marketing and sales process. Lead conversions increased by 60% in first quarter.",
        author: "Rohan Desai",
        company: "GrowthTech Solutions",
        rating: 5
      },
      {
        quote: "They configured HubSpot perfectly for our B2B sales cycle. The automation saves us 15+ hours per week and our pipeline is always up to date.",
        author: "Meena Patel",
        company: "B2B Services India",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What's the difference between HubSpot and Salesforce?",
        answer: "HubSpot is easier to use, more affordable, and built for inbound marketing. Salesforce offers more customization and is better for complex enterprise needs. We'll help you choose based on your requirements."
      },
      {
        question: "How much does HubSpot cost?",
        answer: "HubSpot CRM is free. Marketing Hub starts at $45/month, Sales Hub at $45/month, and Service Hub at $45/month. Professional and Enterprise tiers offer advanced features. Implementation costs range ₹2,00,000-₹15,00,000."
      },
      {
        question: "Can you migrate our data from another CRM?",
        answer: "Yes! We handle migrations from Salesforce, Zoho, Pipedrive, spreadsheets, and other CRMs, ensuring all your contacts, deals, and history transfer safely to HubSpot."
      },
      {
        question: "Will HubSpot integrate with our existing tools?",
        answer: "HubSpot integrates with 1000+ apps including Gmail, Outlook, Shopify, WordPress, Slack, Zoom, and more. We also build custom integrations via API."
      },
      {
        question: "Do you provide HubSpot training?",
        answer: "Yes! We provide hands-on training for admins and users, create custom documentation, and offer ongoing support to ensure your team uses HubSpot effectively."
      }
    ],
    relatedServices: ["crm-solutions", "marketing-automation", "email-marketing", "sales-enablement"],
    pricing: {
      starter: "₹2,00,000 - ₹6,00,000",
      professional: "₹6,00,000 - ₹18,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-14 weeks"
  },

  // Zoho
  {
    id: "16",
    slug: "zoho",
    name: "Zoho",
    category: "Enterprise Services",
    hero: {
      title: "Zoho Implementation & Customization",
      description: "Transform your business with Zoho's comprehensive suite of business applications. We implement and customize Zoho to streamline your operations.",
      ctaText: "Implement Zoho",
      image: "/services/zoho.jpg"
    },
    overview: "Zoho offers one of the most comprehensive suites of business applications, from CRM to finance, HR, and collaboration tools. As Zoho partners, Arka Infotech helps businesses implement and customize Zoho applications to create integrated business ecosystems. Whether you need just CRM or the entire Zoho suite, we configure these cost-effective tools to match your processes, automate workflows, and drive efficiency across your organization.",
    subServices: [
      {
        name: "Zoho CRM Implementation",
        description: "Complete Zoho CRM setup with custom modules, fields, and automation",
        icon: "Users"
      },
      {
        name: "Zoho Suite Integration",
        description: "Integrate multiple Zoho apps (Books, Projects, Desk, etc.) for unified operations",
        icon: "Grid3x3"
      },
      {
        name: "Zoho Creator Development",
        description: "Build custom applications on Zoho Creator platform",
        icon: "Code"
      },
      {
        name: "Zoho Customization",
        description: "Custom functions, workflows, and Deluge scripting for advanced automation",
        icon: "Wrench"
      },
      {
        name: "Zoho Migration",
        description: "Migrate from other CRMs or legacy systems to Zoho",
        icon: "ArrowRightLeft"
      }
    ],
    technologies: [
      {
        category: "Zoho Applications",
        items: [
          { name: "Zoho CRM", icon: "SiZoho", color: "#C8202E" },
          { name: "Zoho Books", icon: "SiZoho", color: "#C8202E" },
          { name: "Zoho Projects", icon: "SiZoho", color: "#C8202E" },
          { name: "Zoho Desk", icon: "SiZoho", color: "#C8202E" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Deluge Script", icon: "SiZoho", color: "#C8202E" },
          { name: "Zoho Creator", icon: "SiZoho", color: "#C8202E" },
          { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" }
        ]
      },
      {
        category: "Integration",
        items: [
          { name: "Zoho Flow", icon: "SiZoho", color: "#C8202E" },
          { name: "Zapier", icon: "SiZapier", color: "#FF4A00" },
          { name: "REST API", icon: "SiSwagger", color: "#85EA2D" }
        ]
      },
      {
        category: "Analytics",
        items: [
          { name: "Zoho Analytics", icon: "SiZoho", color: "#C8202E" },
          { name: "Zoho Reports", icon: "SiZoho", color: "#C8202E" }
        ]
      }
    ],
    process: [
      {
        phase: "Requirements Analysis",
        steps: [
          "Understand business processes and pain points",
          "Identify which Zoho applications are needed",
          "Define customization requirements",
          "Plan integration with existing tools",
          "Create implementation plan"
        ]
      },
      {
        phase: "Application Setup",
        steps: [
          "Configure Zoho account and users",
          "Set up selected Zoho applications",
          "Create custom modules and fields",
          "Design layouts and views",
          "Configure access controls"
        ]
      },
      {
        phase: "Customization",
        steps: [
          "Develop custom workflows and automation",
          "Build Deluge scripts for complex logic",
          "Create custom apps in Zoho Creator",
          "Design custom reports and dashboards",
          "Configure email templates"
        ]
      },
      {
        phase: "Integration & Migration",
        steps: [
          "Integrate Zoho apps with each other",
          "Connect with third-party applications",
          "Migrate data from legacy systems",
          "Set up Zoho Flow automation",
          "Test all integrations thoroughly"
        ]
      },
      {
        phase: "Training & Support",
        steps: [
          "Conduct user training sessions",
          "Create custom documentation",
          "Monitor system adoption",
          "Provide ongoing support",
          "Continuous optimization"
        ]
      }
    ],
    features: [
      "Zoho CRM Configuration",
      "Multi-Channel Communication",
      "Sales Force Automation",
      "Marketing Automation",
      "Custom Modules",
      "Workflow Rules",
      "Deluge Scripting",
      "Custom Functions",
      "Zoho Creator Apps",
      "Mobile CRM Access",
      "Email Integration",
      "Social Media Integration",
      "Advanced Analytics",
      "Third-Party Integrations"
    ],
    benefits: [
      {
        title: "Cost-Effective",
        description: "Comprehensive features at fraction of cost compared to other platforms"
      },
      {
        title: "All-in-One Suite",
        description: "45+ integrated applications covering all business functions"
      },
      {
        title: "High Customization",
        description: "Extensive customization options with Deluge and Zoho Creator"
      },
      {
        title: "Easy Integration",
        description: "Zoho apps work seamlessly together and with third-party tools"
      },
      {
        title: "Mobile-First",
        description: "Full-featured mobile apps for CRM, projects, and other tools"
      },
      {
        title: "Data Privacy",
        description: "Strong data privacy and security with Indian data centers available"
      }
    ],
    industries: [
      {
        name: "Small & Medium Businesses",
        useCases: ["Complete business suite", "CRM + accounting", "Project management", "Customer support"]
      },
      {
        name: "Consulting Firms",
        useCases: ["Client management", "Project tracking", "Time billing", "Document management"]
      },
      {
        name: "Education",
        useCases: ["Student CRM", "Recruitment", "Communication", "Event management"]
      },
      {
        name: "Real Estate",
        useCases: ["Lead management", "Property management", "Deal tracking", "Client portal"]
      },
      {
        name: "Startups",
        useCases: ["All-in-one operations", "Sales pipeline", "Marketing", "Customer service"]
      }
    ],
    testimonials: [
      {
        quote: "Zoho implementation was smooth and cost-effective. We now manage our entire business from CRM to accounting in one platform.",
        author: "Nitin Gupta",
        company: "SME Solutions India",
        rating: 5
      },
      {
        quote: "The Zoho customization perfectly fits our unique workflow. The team's Deluge scripting expertise is exceptional.",
        author: "Anita Reddy",
        company: "ConsultPro Services",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Which Zoho applications do I need?",
        answer: "Start with Zoho CRM for customer management. Add Zoho Books for accounting, Projects for project management, Desk for support, etc. We'll recommend applications based on your business needs."
      },
      {
        question: "How much does Zoho cost?",
        answer: "Zoho CRM starts at $14/user/month. Most apps range $12-50/user/month. Zoho One (all 45+ apps) is $37/user/month. Implementation costs range ₹1,50,000-₹12,00,000."
      },
      {
        question: "Can Zoho scale with our growth?",
        answer: "Absolutely! Zoho scales from 1 user to 100,000+ users. Start small and add applications and users as you grow without platform migration."
      },
      {
        question: "How does Zoho compare to Salesforce or HubSpot?",
        answer: "Zoho offers similar features at lower cost, better value for SMBs. Salesforce has more customization for enterprises. HubSpot is better for inbound marketing. Zoho excels at comprehensive business suite."
      },
      {
        question: "Can you develop custom apps on Zoho?",
        answer: "Yes! We build custom applications using Zoho Creator and Deluge scripting to create specialized tools that integrate seamlessly with other Zoho apps."
      }
    ],
    relatedServices: ["crm-solutions", "accounting-software", "project-management", "helpdesk-solutions"],
    pricing: {
      starter: "₹1,50,000 - ₹5,00,000",
      professional: "₹5,00,000 - ₹15,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "6-14 weeks"
  },

  // ServiceNow
  {
    id: "17",
    slug: "servicenow",
    name: "ServiceNow",
    category: "Enterprise Services",
    hero: {
      title: "ServiceNow Implementation & Consulting",
      description: "Transform IT service management and enterprise workflows with ServiceNow. We implement ITSM, ITOM, and custom applications on the Now Platform.",
      ctaText: "Transform with ServiceNow",
      image: "/services/servicenow.jpg"
    },
    overview: "ServiceNow is the enterprise platform for digital workflows, helping organizations automate processes and improve service delivery. Arka Infotech's ServiceNow practice helps enterprises implement ITSM, ITOM, ITBM, and custom applications on the Now Platform. Our certified ServiceNow professionals design solutions that streamline IT operations, improve service quality, and enable digital transformation across your organization.",
    subServices: [
      {
        name: "ITSM Implementation",
        description: "Implement IT Service Management including incident, problem, and change management",
        icon: "Wrench"
      },
      {
        name: "ITOM Solutions",
        description: "IT Operations Management for discovery, monitoring, and automation",
        icon: "Activity"
      },
      {
        name: "Custom App Development",
        description: "Build custom applications on ServiceNow platform",
        icon: "Code"
      },
      {
        name: "ServiceNow Integration",
        description: "Integrate with SIEM, monitoring tools, and enterprise systems",
        icon: "Workflow"
      },
      {
        name: "ServiceNow Consulting",
        description: "Strategic consulting and best practice implementation",
        icon: "Lightbulb"
      }
    ],
    technologies: [
      {
        category: "ServiceNow Modules",
        items: [
          { name: "ITSM", icon: "SiServicenow", color: "#62D84E" },
          { name: "ITOM", icon: "SiServicenow", color: "#62D84E" },
          { name: "ITBM", icon: "SiServicenow", color: "#62D84E" },
          { name: "CSM", icon: "SiServicenow", color: "#62D84E" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Flow Designer", icon: "SiServicenow", color: "#62D84E" },
          { name: "GlideScript", icon: "SiJavascript", color: "#F7DF1E" },
          { name: "Service Portal", icon: "SiServicenow", color: "#62D84E" }
        ]
      },
      {
        category: "Integration",
        items: [
          { name: "IntegrationHub", icon: "SiServicenow", color: "#62D84E" },
          { name: "REST API", icon: "SiSwagger", color: "#85EA2D" },
          { name: "SOAP", icon: "SiSoap", color: "#4B4B4B" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Studio", icon: "SiServicenow", color: "#62D84E" },
          { name: "Update Sets", icon: "SiServicenow", color: "#62D84E" },
          { name: "Performance Analytics", icon: "SiServicenow", color: "#62D84E" }
        ]
      }
    ],
    process: [
      {
        phase: "Assessment",
        steps: [
          "Evaluate current IT processes and pain points",
          "Define ServiceNow implementation scope",
          "Identify modules and features needed",
          "Plan integration requirements",
          "Create project roadmap"
        ]
      },
      {
        phase: "Design",
        steps: [
          "Design process workflows and automation",
          "Configure CMDB and service catalog",
          "Design service portal and interfaces",
          "Plan reporting and dashboards",
          "Define security and access controls"
        ]
      },
      {
        phase: "Implementation",
        steps: [
          "Configure ServiceNow modules",
          "Develop custom workflows and scripts",
          "Build custom applications if needed",
          "Configure integrations",
          "Migrate data from legacy ITSM tools"
        ]
      },
      {
        phase: "Testing",
        steps: [
          "Unit and integration testing",
          "User acceptance testing (UAT)",
          "Performance testing",
          "Security validation",
          "Workflow validation"
        ]
      },
      {
        phase: "Deployment & Support",
        steps: [
          "Production deployment",
          "User training and onboarding",
          "Documentation delivery",
          "Hyper-care support period",
          "Ongoing maintenance and enhancements"
        ]
      }
    ],
    features: [
      "Incident Management",
      "Problem Management",
      "Change Management",
      "Service Catalog",
      "CMDB Configuration",
      "Knowledge Management",
      "Self-Service Portal",
      "SLA Management",
      "Asset Management",
      "Request Fulfillment",
      "Performance Analytics",
      "Flow Designer Automation",
      "IntegrationHub",
      "Mobile App Support"
    ],
    benefits: [
      {
        title: "Improved Service Delivery",
        description: "Streamlined ITSM processes lead to faster issue resolution and better service"
      },
      {
        title: "Reduced Downtime",
        description: "Proactive problem management and change control minimize service disruptions"
      },
      {
        title: "Enhanced Visibility",
        description: "Complete visibility into IT services, assets, and performance metrics"
      },
      {
        title: "Automated Processes",
        description: "Workflow automation reduces manual effort and improves consistency"
      },
      {
        title: "Compliance & Audit",
        description: "Built-in compliance controls and audit trails for regulatory requirements"
      },
      {
        title: "Self-Service",
        description: "Empower users with self-service portal and knowledge base"
      }
    ],
    industries: [
      {
        name: "IT Services",
        useCases: ["ITSM operations", "Service desk", "Project management", "Client services"]
      },
      {
        name: "Banking & Finance",
        useCases: ["IT operations", "Compliance management", "Risk management", "Service delivery"]
      },
      {
        name: "Healthcare",
        useCases: ["IT service management", "Asset management", "Compliance", "Clinical IT"]
      },
      {
        name: "Government",
        useCases: ["Service management", "Workflow automation", "Citizen services", "IT operations"]
      },
      {
        name: "Manufacturing",
        useCases: ["IT operations", "Service management", "Asset tracking", "Maintenance"]
      }
    ],
    testimonials: [
      {
        quote: "ServiceNow implementation transformed our IT operations. Ticket resolution time dropped by 50% and our IT team's productivity soared.",
        author: "Ajay Verma",
        company: "TechCorp Enterprises",
        rating: 5
      },
      {
        quote: "The custom ServiceNow workflows perfectly match our ITIL processes. Best ITSM investment we've made.",
        author: "Shalini Nair",
        company: "FinServe Technologies",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What is ServiceNow used for?",
        answer: "ServiceNow is primarily used for IT Service Management (ITSM) including incident, problem, change, and asset management. It also offers ITOM, security operations, HR service delivery, and custom workflow applications."
      },
      {
        question: "How much does ServiceNow cost?",
        answer: "ServiceNow pricing is based on users and modules. Typical implementations range $50-300 per user/month. Implementation costs range ₹15,00,000-₹80,00,000 depending on complexity and modules."
      },
      {
        question: "Is ServiceNow only for large enterprises?",
        answer: "While popular with enterprises, ServiceNow offers solutions for mid-sized organizations too. We'll assess if ServiceNow's capabilities justify the investment for your organization size."
      },
      {
        question: "Can ServiceNow integrate with our existing tools?",
        answer: "Yes! ServiceNow integrates with monitoring tools, SIEM systems, Active Directory, databases, and virtually any system via REST/SOAP APIs or IntegrationHub."
      },
      {
        question: "Do you provide ServiceNow managed services?",
        answer: "Yes! We offer ongoing ServiceNow administration, enhancements, upgrade support, custom development, and strategic consulting to maximize your platform value."
      }
    ],
    relatedServices: ["itsm-consulting", "itil-implementation", "workflow-automation", "enterprise-integration"],
    pricing: {
      starter: "₹15,00,000 - ₹35,00,000",
      professional: "₹35,00,000 - ₹80,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-24 weeks"
  },

  // MS Dynamics
  {
    id: "18",
    slug: "ms-dynamics",
    name: "MS Dynamics",
    category: "Enterprise Services",
    hero: {
      title: "Microsoft Dynamics 365 Services",
      description: "Unify your business with Microsoft Dynamics 365. We implement CRM, ERP, and business applications seamlessly integrated with Microsoft ecosystem.",
      ctaText: "Explore Dynamics 365",
      image: "/services/ms-dynamics.jpg"
    },
    overview: "Microsoft Dynamics 365 unifies CRM and ERP capabilities in cloud-based applications that work seamlessly with Office 365, Power Platform, and Azure. Arka Infotech, as Microsoft partners, helps organizations implement Dynamics 365 to streamline operations, improve customer engagement, and gain insights. From Sales and Customer Service to Finance and Supply Chain, we configure Dynamics 365 to transform your business processes and drive digital transformation.",
    subServices: [
      {
        name: "Dynamics 365 CRM",
        description: "Implement Sales, Marketing, and Customer Service modules",
        icon: "Users"
      },
      {
        name: "Dynamics 365 ERP",
        description: "Finance, Supply Chain, and Operations applications",
        icon: "Building2"
      },
      {
        name: "Power Platform Development",
        description: "Build custom apps with Power Apps, automate with Power Automate",
        icon: "Zap"
      },
      {
        name: "Dynamics 365 Customization",
        description: "Custom entities, workflows, and business logic development",
        icon: "Wrench"
      },
      {
        name: "Azure Integration",
        description: "Integrate with Azure services for advanced capabilities",
        icon: "Cloud"
      }
    ],
    technologies: [
      {
        category: "Dynamics Modules",
        items: [
          { name: "Dynamics Sales", icon: "SiMicrosoft", color: "#0078D4" },
          { name: "Customer Service", icon: "SiMicrosoft", color: "#0078D4" },
          { name: "Finance & Operations", icon: "SiMicrosoft", color: "#0078D4" },
          { name: "Supply Chain", icon: "SiMicrosoft", color: "#0078D4" }
        ]
      },
      {
        category: "Power Platform",
        items: [
          { name: "Power Apps", icon: "SiPowerapps", color: "#742774" },
          { name: "Power Automate", icon: "SiPowerautomate", color: "#0066FF" },
          { name: "Power BI", icon: "SiPowerbi", color: "#F2C811" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "C#", icon: "SiCsharp", color: "#239120" },
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" }
        ]
      },
      {
        category: "Microsoft Stack",
        items: [
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Office 365", icon: "SiMicrosoftoffice", color: "#D83B01" },
          { name: "SharePoint", icon: "SiMicrosoftsharepoint", color: "#0078D4" },
          { name: "Teams", icon: "SiMicrosoftteams", color: "#6264A7" }
        ]
      }
    ],
    process: [
      {
        phase: "Business Analysis",
        steps: [
          "Analyze current business processes",
          "Define Dynamics 365 module requirements",
          "Identify customization needs",
          "Plan integration with Microsoft ecosystem",
          "Create implementation strategy"
        ]
      },
      {
        phase: "System Design",
        steps: [
          "Design solution architecture",
          "Configure data model and entities",
          "Design business process flows",
          "Plan security and access controls",
          "Design custom applications"
        ]
      },
      {
        phase: "Implementation",
        steps: [
          "Configure Dynamics 365 modules",
          "Develop customizations and extensions",
          "Build Power Apps and Power Automate flows",
          "Configure integrations",
          "Migrate data from legacy systems"
        ]
      },
      {
        phase: "Testing & UAT",
        steps: [
          "System integration testing",
          "User acceptance testing",
          "Performance testing",
          "Security testing",
          "Data validation"
        ]
      },
      {
        phase: "Deployment & Support",
        steps: [
          "Production deployment",
          "User training and enablement",
          "Documentation delivery",
          "Post-go-live support",
          "Continuous optimization"
        ]
      }
    ],
    features: [
      "Sales Force Automation",
      "Customer Service Management",
      "Field Service",
      "Marketing Automation",
      "Finance Management",
      "Supply Chain Management",
      "Power Apps Integration",
      "Power Automate Workflows",
      "Power BI Analytics",
      "Microsoft Teams Integration",
      "Office 365 Integration",
      "Mobile Apps",
      "AI-Driven Insights",
      "Custom Entity Development"
    ],
    benefits: [
      {
        title: "Unified Platform",
        description: "CRM and ERP in single platform for complete business management"
      },
      {
        title: "Microsoft Integration",
        description: "Seamless integration with Office 365, Teams, SharePoint, and Azure"
      },
      {
        title: "AI-Powered",
        description: "Built-in AI capabilities for insights, predictions, and automation"
      },
      {
        title: "Flexible Licensing",
        description: "Modular approach allows you to start small and add capabilities"
      },
      {
        title: "Power Platform",
        description: "Low-code tools enable business users to build custom solutions"
      },
      {
        title: "Enterprise-Grade",
        description: "Scalable, secure platform suitable for global enterprises"
      }
    ],
    industries: [
      {
        name: "Manufacturing",
        useCases: ["Sales management", "Supply chain", "Finance operations", "Field service"]
      },
      {
        name: "Financial Services",
        useCases: ["Customer engagement", "Relationship management", "Compliance", "Operations"]
      },
      {
        name: "Retail",
        useCases: ["Unified commerce", "Customer insights", "Supply chain", "Store operations"]
      },
      {
        name: "Professional Services",
        useCases: ["Project service automation", "Resource management", "Client management", "Billing"]
      },
      {
        name: "Healthcare",
        useCases: ["Patient engagement", "Care coordination", "Operations management", "Analytics"]
      }
    ],
    testimonials: [
      {
        quote: "Dynamics 365 implementation unified our sales and finance operations. The Power BI integration provides incredible insights.",
        author: "Rajiv Khanna",
        company: "ManufactureMax India",
        rating: 5
      },
      {
        quote: "The team's Microsoft expertise helped us maximize our existing Office 365 investment. Everything works together seamlessly now.",
        author: "Neha Chopra",
        company: "FinanceFirst Solutions",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What's included in Dynamics 365?",
        answer: "Dynamics 365 includes Sales, Marketing, Customer Service, Field Service, Finance, Supply Chain, Commerce, Human Resources, and Project Operations. You can license modules individually or as bundles."
      },
      {
        question: "How much does Dynamics 365 cost?",
        answer: "Starts at $65/user/month for Sales Professional, $95/user/month for Customer Service, and varies for ERP modules. Implementation costs range ₹12,00,000-₹60,00,000 depending on modules and customization."
      },
      {
        question: "Can Dynamics 365 replace our ERP system?",
        answer: "Yes! Dynamics 365 Finance and Supply Chain Management provide comprehensive ERP capabilities. We can migrate from SAP, Oracle, or other ERP systems to Dynamics 365."
      },
      {
        question: "How does it integrate with our Microsoft tools?",
        answer: "Dynamics 365 integrates natively with Office 365, Teams, SharePoint, Outlook, Excel, Power BI, and Azure services. No additional connectors needed for Microsoft ecosystem."
      },
      {
        question: "Can you build custom apps on Dynamics 365?",
        answer: "Yes! We build custom applications using Power Apps, extend Dynamics with custom entities and logic, and develop integrations using C# and JavaScript."
      }
    ],
    relatedServices: ["power-platform", "azure-services", "office-365", "erp-implementation"],
    pricing: {
      starter: "₹12,00,000 - ₹30,00,000",
      professional: "₹30,00,000 - ₹75,00,000",
      enterprise: "Custom Quote"
    },
    deliveryTime: "12-28 weeks"
  }
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): ServicePageContent | undefined => {
  return services.find(service => service.slug === slug);
};

// Helper function to get services by category
export const getServicesByCategory = (category: string): ServicePageContent[] => {
  return services.filter(service => service.category === category);
};

// Helper function to get all categories
export const getCategories = (): string[] => {
  const categories = services.map(service => service.category);
  return [...new Set(categories)];
};