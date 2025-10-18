export interface TechnologyContent {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  hero: {
    title: string;
    description: string;
    ctaText: string;
    image: string;
  };
  overview: string;
  useCases?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  keyFeatures?: string[];
  techStack?: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
      color: string;
    }>;
  }>;
  whyChoose?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  industries?: Array<{
    name: string;
    applications: string[];
  }>;
  developmentProcess?: Array<{
    phase: string;
    title: string;
    description: string;
    deliverables: string[];
  }>;
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  relatedTechnologies?: Array<{
    name: string;
    slug: string;
  }>;
  pricing?: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  deliveryTime?: string;
  metrics?: Array<{
    value: number;
    suffix: string;
    label: string;
    description: string;
  }>;
}

export const technologies: TechnologyContent[] = [
  // React Native
  {
    id: "1",
    slug: "react-native",
    name: "React Native",
    category: "Mobile Development",
    tagline: "Build Native Mobile Apps with JavaScript",
    hero: {
      title: "React Native Mobile App Development",
      description: "Create powerful cross-platform mobile applications for iOS and Android using React Native. Build once, deploy everywhere with native performance and user experience.",
      ctaText: "Build Your React Native App",
      image: "/technologies/react-native.jpg"
    },
    overview: "React Native is Facebook's open-source framework for building mobile applications using React and JavaScript. At Arka Infotech, our React Native developers create high-performance, cross-platform mobile apps that deliver native-like experiences on both iOS and Android. By sharing a single codebase across platforms, we reduce development time and costs by up to 40% while maintaining platform-specific optimizations. Our expertise spans from simple apps to complex enterprise solutions, leveraging React Native's extensive ecosystem, hot reloading, and native module integration to deliver apps that users love.",
    useCases: [
      {
        title: "E-commerce Apps",
        description: "Build feature-rich shopping apps with smooth animations, real-time updates, and native payment integrations",
        icon: "ShoppingCart"
      },
      {
        title: "Social Media Apps",
        description: "Create engaging social platforms with real-time messaging, media sharing, and interactive features",
        icon: "Users"
      },
      {
        title: "Enterprise Apps",
        description: "Develop internal business apps for productivity, communication, and workflow management",
        icon: "Briefcase"
      },
      {
        title: "On-Demand Services",
        description: "Build marketplace and on-demand service apps like ride-sharing, food delivery, and booking platforms",
        icon: "Zap"
      }
    ],
    keyFeatures: [
      "Cross-platform development (iOS & Android)",
      "Native performance and UI components",
      "Hot reloading for faster development",
      "Large ecosystem of libraries and plugins",
      "Reusable components and code sharing",
      "Native module integration",
      "Over-the-air updates with CodePush",
      "Strong community support",
      "Cost-effective development",
      "Fast development cycles"
    ],
    techStack: [
      {
        category: "Core Technologies",
        items: [
          { name: "React Native", icon: "SiReact", color: "#61DAFB" },
          { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { name: "Expo", icon: "SiExpo", color: "#000020" }
        ]
      },
      {
        category: "State Management",
        items: [
          { name: "Redux", icon: "SiRedux", color: "#764ABC" },
          { name: "MobX", icon: "SiMobx", color: "#FF9955" },
          { name: "React Query", icon: "SiReactquery", color: "#FF4154" },
          { name: "Context API", icon: "SiReact", color: "#61DAFB" }
        ]
      },
      {
        category: "Backend & APIs",
        items: [
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
          { name: "REST APIs", icon: "SiSwagger", color: "#85EA2D" }
        ]
      },
      {
        category: "Tools & Testing",
        items: [
          { name: "Jest", icon: "SiJest", color: "#C21325" },
          { name: "Detox", icon: "SiJest", color: "#C21325" },
          { name: "React Native Debugger", icon: "SiReact", color: "#61DAFB" },
          { name: "Flipper", icon: "SiFacebook", color: "#1877F2" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Write Once, Run Anywhere",
        description: "Single codebase for both iOS and Android reduces development time by 30-40% and maintenance costs significantly",
        icon: "Code"
      },
      {
        title: "Native Performance",
        description: "Apps run smoothly with native components and platform-specific optimizations for excellent user experience",
        icon: "Zap"
      },
      {
        title: "Fast Development",
        description: "Hot reloading, reusable components, and large library ecosystem accelerate development cycles",
        icon: "Rocket"
      },
      {
        title: "Cost-Effective",
        description: "Lower development and maintenance costs compared to building separate native apps for each platform",
        icon: "DollarSign"
      },
      {
        title: "Large Community",
        description: "Backed by Facebook and a massive developer community with extensive libraries, plugins, and support",
        icon: "Users"
      },
      {
        title: "Easy Updates",
        description: "Push updates instantly with CodePush without waiting for app store approvals for non-native changes",
        icon: "RefreshCw"
      }
    ],
    industries: [
      {
        name: "E-commerce & Retail",
        applications: ["Shopping apps", "Product catalogs", "Payment integration", "Order tracking"]
      },
      {
        name: "Social & Media",
        applications: ["Social networks", "Chat applications", "Content sharing", "Live streaming"]
      },
      {
        name: "Healthcare",
        applications: ["Telemedicine apps", "Health tracking", "Appointment booking", "Patient portals"]
      },
      {
        name: "Finance & Banking",
        applications: ["Mobile banking", "Payment apps", "Investment platforms", "Expense trackers"]
      },
      {
        name: "Food & Delivery",
        applications: ["Food delivery", "Restaurant apps", "Order management", "Delivery tracking"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Discovery & Planning",
        description: "Understanding your app requirements and goals",
        deliverables: [
          "Requirements documentation",
          "Feature specifications",
          "Technical architecture",
          "Project timeline and milestones",
          "Cost estimation"
        ]
      },
      {
        phase: "Phase 2",
        title: "UI/UX Design",
        description: "Creating beautiful, intuitive app interfaces",
        deliverables: [
          "User flow diagrams",
          "Wireframes",
          "High-fidelity mockups",
          "Interactive prototypes",
          "Design system"
        ]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Building your React Native application",
        deliverables: [
          "Cross-platform codebase",
          "API integrations",
          "Database implementation",
          "Third-party service integration",
          "Code documentation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & QA",
        description: "Ensuring quality and performance",
        deliverables: [
          "Unit and integration tests",
          "Device compatibility testing",
          "Performance optimization",
          "Bug fixes",
          "Security testing"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment & Support",
        description: "Launching and maintaining your app",
        deliverables: [
          "App Store submission",
          "Play Store submission",
          "Production deployment",
          "User documentation",
          "Ongoing support and updates"
        ]
      }
    ],
    faq: [
      {
        question: "What is React Native and how is it different from React?",
        answer: "React Native is a framework for building mobile apps using React and JavaScript. Unlike React (which builds web apps), React Native compiles to native mobile components for iOS and Android, providing native performance and look-and-feel."
      },
      {
        question: "Can React Native apps access native device features?",
        answer: "Yes! React Native provides APIs for camera, GPS, push notifications, biometrics, and more. For features not available, we can create custom native modules or use community packages."
      },
      {
        question: "How much does React Native development cost?",
        answer: "React Native development is typically 30-40% cheaper than building separate native apps. Costs range from ₹3,00,000 for simple apps to ₹25,00,000+ for complex applications, depending on features and complexity."
      },
      {
        question: "What's the performance difference between React Native and native apps?",
        answer: "React Native apps perform nearly identical to native apps for most use cases. For computationally intensive tasks like gaming or complex animations, native development might be preferred, but React Native handles 95% of app requirements excellently."
      },
      {
        question: "Can you convert our existing web app to React Native?",
        answer: "Yes! If your web app is built with React, we can share significant business logic and components. We'll adapt the UI for mobile and implement platform-specific features for optimal mobile experience."
      }
    ],
    relatedTechnologies: [
      { name: "Flutter", slug: "flutter" },
      { name: "iOS", slug: "ios" },
      { name: "Android", slug: "android" },
      { name: "Node.js", slug: "nodejs" }
    ],
    metrics: [
      { value: 15, suffix: "+", label: "Expert Developers", description: "Specialized React Native development team" },
      { value: 50, suffix: "+", label: "Apps Delivered", description: "Cross-platform mobile applications" },
      { value: 60, suffix: "%", label: "Code Reusability", description: "Share code between iOS and Android" }
    ]
  },

  // Flutter
  {
    id: "2",
    slug: "flutter",
    name: "Flutter",
    category: "Mobile Development",
    tagline: "Google's UI Toolkit for Beautiful Apps",
    hero: {
      title: "Flutter Mobile App Development",
      description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Google's Flutter framework.",
      ctaText: "Start Flutter Development",
      image: "/technologies/flutter.jpg"
    },
    overview: "Flutter is Google's revolutionary UI toolkit for building beautiful, natively compiled applications across mobile, web, and desktop from a single codebase. At Arka Infotech, our Flutter experts create stunning, high-performance apps with expressive UIs and smooth animations. Flutter's widget-based architecture, hot reload feature, and excellent performance make it ideal for building modern mobile applications. We leverage Flutter's rich set of pre-built widgets, powerful rendering engine, and growing ecosystem to deliver apps that stand out in the marketplace with exceptional user experiences and faster time-to-market.",
    useCases: [
      {
        title: "MVP Development",
        description: "Rapidly build and test minimum viable products for both platforms simultaneously",
        icon: "Rocket"
      },
      {
        title: "E-commerce Solutions",
        description: "Create beautiful shopping experiences with smooth animations and native performance",
        icon: "ShoppingCart"
      },
      {
        title: "Enterprise Apps",
        description: "Build scalable business applications with complex UI requirements and data visualization",
        icon: "Building"
      },
      {
        title: "Real-time Apps",
        description: "Develop chat, collaboration, and live-streaming applications with Flutter's reactive framework",
        icon: "MessageSquare"
      }
    ],
    metrics: [
      { value: 15, suffix: "+", label: "Expert Developers", description: "Specialized React Native development team" },
      { value: 50, suffix: "+", label: "Apps Delivered", description: "Cross-platform mobile applications" },
      { value: 60, suffix: "%", label: "Code Reusability", description: "Share code between iOS and Android" }
    ],
    keyFeatures: [
      "Single codebase for iOS, Android, Web, and Desktop",
      "Beautiful Material Design and Cupertino widgets",
      "Hot reload for instant UI updates",
      "Excellent performance (60fps animations)",
      "Rich set of customizable widgets",
      "Native compilation for each platform",
      "Growing package ecosystem",
      "Backed by Google",
      "Strong typing with Dart",
      "Excellent documentation"
    ],
    techStack: [
      {
        category: "Core Technologies",
        items: [
          { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
          { name: "Dart", icon: "SiDart", color: "#0175C2" },
          { name: "Material Design", icon: "SiMaterialdesign", color: "#757575" },
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" }
        ]
      },
      {
        category: "State Management",
        items: [
          { name: "Provider", icon: "SiFlutter", color: "#02569B" },
          { name: "Riverpod", icon: "SiFlutter", color: "#02569B" },
          { name: "BLoC", icon: "SiFlutter", color: "#02569B" },
          { name: "GetX", icon: "SiFlutter", color: "#02569B" }
        ]
      },
      {
        category: "Backend & Services",
        items: [
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
          { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" }
        ]
      },
      {
        category: "Tools & Testing",
        items: [
          { name: "Android Studio", icon: "SiAndroidstudio", color: "#3DDC84" },
          { name: "Xcode", icon: "SiXcode", color: "#147EFB" },
          { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
          { name: "Git", icon: "SiGit", color: "#F05032" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Stunning UI",
        description: "Create beautiful, custom UIs with Flutter's rich widget library and flexible design system",
        icon: "Palette"
      },
      {
        title: "Fast Development",
        description: "Hot reload feature enables instant UI updates without restarting the app, speeding up development",
        icon: "Zap"
      },
      {
        title: "Native Performance",
        description: "Compiles to native ARM code for optimal performance with 60fps smooth animations",
        icon: "Gauge"
      },
      {
        title: "Single Codebase",
        description: "Write once, deploy on iOS, Android, Web, and Desktop - massive time and cost savings",
        icon: "Code"
      },
      {
        title: "Growing Ecosystem",
        description: "Rapidly expanding package ecosystem with thousands of plugins and strong community support",
        icon: "Package"
      },
      {
        title: "Google Backed",
        description: "Supported by Google with continuous improvements, updates, and long-term commitment",
        icon: "Award"
      }
    ],
    industries: [
      {
        name: "Fintech",
        applications: ["Mobile banking", "Payment apps", "Investment platforms", "Expense trackers"]
      },
      {
        name: "Healthcare",
        applications: ["Telemedicine", "Health monitoring", "Appointment scheduling", "Medical records"]
      },
      {
        name: "E-commerce",
        applications: ["Shopping apps", "Marketplace platforms", "Order tracking", "Loyalty programs"]
      },
      {
        name: "Education",
        applications: ["E-learning apps", "Student portals", "Course management", "Quiz applications"]
      },
      {
        name: "Entertainment",
        applications: ["Streaming apps", "Gaming platforms", "Social media", "Content sharing"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning & Design",
        description: "Define app requirements and create beautiful designs",
        deliverables: [
          "Requirements analysis",
          "Feature specifications",
          "UI/UX designs in Figma",
          "Flutter widget planning",
          "Project roadmap"
        ]
      },
      {
        phase: "Phase 2",
        title: "Development Setup",
        description: "Setting up Flutter project architecture",
        deliverables: [
          "Flutter project initialization",
          "State management setup",
          "API integration architecture",
          "Navigation structure",
          "Reusable widget library"
        ]
      },
      {
        phase: "Phase 3",
        title: "Feature Implementation",
        description: "Building app features with Flutter",
        deliverables: [
          "UI implementation with widgets",
          "Business logic development",
          "API integrations",
          "Database implementation",
          "Platform-specific features"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & Polish",
        description: "Quality assurance and optimization",
        deliverables: [
          "Widget and integration testing",
          "Device compatibility testing",
          "Performance optimization",
          "Bug fixes and refinements",
          "App store preparation"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Launching your Flutter app",
        deliverables: [
          "iOS App Store submission",
          "Google Play Store submission",
          "CI/CD setup",
          "Monitoring implementation",
          "Post-launch support"
        ]
      }
    ],
    faq: [
      {
        question: "Is Flutter better than React Native?",
        answer: "Both are excellent. Flutter offers better performance and more consistent UI across platforms. React Native has a larger ecosystem and JavaScript familiarity. We'll recommend based on your specific needs, team expertise, and project requirements."
      },
      {
        question: "Can Flutter apps access native device features?",
        answer: "Yes! Flutter provides plugins for camera, GPS, sensors, biometrics, and more. We can also create custom platform channels to access any native functionality."
      },
      {
        question: "How long does Flutter app development take?",
        answer: "Flutter development is typically 20-30% faster than native development. Simple apps take 2-3 months, medium complexity 4-6 months, and complex apps 6-12 months."
      },
      {
        question: "Can Flutter build for iOS, Android, and Web?",
        answer: "Yes! Flutter supports iOS, Android, Web, Windows, macOS, and Linux from a single codebase. However, web and desktop support may require additional optimization."
      },
      {
        question: "What's the learning curve for Flutter?",
        answer: "Flutter uses Dart language which is easy to learn for developers familiar with Java, JavaScript, or C#. The widget-based architecture is intuitive and well-documented."
      }
    ],
    relatedTechnologies: [
      { name: "React Native", slug: "react-native" },
      { name: "Android", slug: "android" },
      { name: "iOS", slug: "ios" },
      { name: "Firebase", slug: "firebase" }
    ]
  },

  // Node.js
  {
    id: "3",
    slug: "nodejs",
    name: "Node.js",
    category: "Backend Development",
    tagline: "JavaScript Runtime for Scalable Applications",
    hero: {
      title: "Node.js Backend Development",
      description: "Build fast, scalable server-side applications with Node.js. Perfect for real-time applications, APIs, microservices, and data-intensive solutions.",
      ctaText: "Start Node.js Development",
      image: "/technologies/nodejs.jpg"
    },
    overview: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine, enabling developers to build fast and scalable server-side applications. At Arka Infotech, our Node.js developers create high-performance backends, RESTful APIs, real-time applications, and microservices that handle millions of requests. Node.js's non-blocking I/O model makes it perfect for data-intensive real-time applications like chat systems, collaboration tools, and streaming platforms. We leverage Node.js's vast npm ecosystem, asynchronous architecture, and event-driven programming to deliver backends that are fast, scalable, and maintainable.",
    useCases: [
      {
        title: "RESTful APIs",
        description: "Build robust, scalable APIs for web and mobile applications with Express.js or Fastify",
        icon: "Workflow"
      },
      {
        title: "Real-time Applications",
        description: "Create chat apps, collaboration tools, and live updates with WebSocket and Socket.io",
        icon: "MessageSquare"
      },
      {
        title: "Microservices",
        description: "Develop lightweight, independently deployable services for complex enterprise applications",
        icon: "Boxes"
      },
      {
        title: "Streaming Applications",
        description: "Handle data streaming, video/audio processing, and file uploads efficiently",
        icon: "Radio"
      }
    ],
    metrics: [
      { value: 12, suffix: "+", label: "Flutter Experts", description: "Specialized Flutter developers" },
      { value: 45, suffix: "+", label: "Apps Built", description: "Cross-platform mobile apps" },
      { value: 50, suffix: "%", label: "Cost Savings", description: "Single codebase for both platforms" }
    ],
  },

  // Android
  {
    id: "4",
    slug: "android",
    name: "Android",
    category: "Mobile Development",
    tagline: "Native Android App Development",
    hero: {
      title: "Native Android App Development",
      description: "Build powerful, feature-rich Android applications using Kotlin and Java. Reach billions of users on the world's most popular mobile platform.",
      ctaText: "Build Android App",
      image: "/technologies/android.jpg"
    },
    overview: "Android is the world's most widely used mobile operating system, powering billions of devices globally. At Arka Infotech, our Android developers create native applications using Kotlin and Java that leverage the full power of the Android platform. We build apps that utilize Android's extensive API ecosystem, Material Design guidelines, and platform-specific features like widgets, notifications, and deep system integration. From consumer apps to enterprise solutions, we deliver Android applications that provide superior performance, seamless integration with Google services, and access to the massive Google Play Store ecosystem.",
    useCases: [
      {
        title: "Consumer Apps",
        description: "Entertainment, productivity, lifestyle apps reaching billions of Android users worldwide",
        icon: "Smartphone"
      },
      {
        title: "Enterprise Solutions",
        description: "Business apps with MDM integration, security features, and offline capabilities",
        icon: "Building"
      },
      {
        title: "IoT & Wearables",
        description: "Apps for Android Things, Wear OS, Android Auto, and smart home devices",
        icon: "Watch"
      },
      {
        title: "Gaming",
        description: "High-performance games using Android NDK and game development frameworks",
        icon: "Gamepad2"
      }
    ],
    metrics: [
      { value: 15, suffix: "+", label: "Expert Developers", description: "Specialized React Native development team" },
      { value: 50, suffix: "+", label: "Apps Delivered", description: "Cross-platform mobile applications" },
      { value: 60, suffix: "%", label: "Code Reusability", description: "Share code between iOS and Android" }
    ],
    keyFeatures: [
      "Native performance with Kotlin/Java",
      "Material Design 3 UI components",
      "Access to all Android APIs",
      "Google Play Services integration",
      "Widgets and live wallpapers",
      "Background services and notifications",
      "Deep linking and app shortcuts",
      "Android Jetpack libraries",
      "Camera2 API and ML Kit",
      "Google Pay and in-app billing"
    ],
    techStack: [
      {
        category: "Languages & Core",
        items: [
          { name: "Kotlin", icon: "SiKotlin", color: "#7F52FF" },
          { name: "Java", icon: "SiOpenjdk", color: "#007396" },
          { name: "Android SDK", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Jetpack Compose", icon: "SiAndroid", color: "#3DDC84" }
        ]
      },
      {
        category: "Tools & IDE",
        items: [
          { name: "Android Studio", icon: "SiAndroidstudio", color: "#3DDC84" },
          { name: "Gradle", icon: "SiGradle", color: "#02303A" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" }
        ]
      },
      {
        category: "Architecture",
        items: [
          { name: "MVVM", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Clean Architecture", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Dagger/Hilt", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Room Database", icon: "SiAndroid", color: "#3DDC84" }
        ]
      },
      {
        category: "Testing",
        items: [
          { name: "JUnit", icon: "SiJunit", color: "#25A162" },
          { name: "Espresso", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Mockito", icon: "SiMockito", color: "#C5D9C8" },
          { name: "Robolectric", icon: "SiAndroid", color: "#3DDC84" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Largest Market Share",
        description: "Reach 70%+ of global mobile users on Android devices across all price points",
        icon: "Globe"
      },
      {
        title: "Full Platform Access",
        description: "Native development provides complete access to all Android features and APIs",
        icon: "Unlock"
      },
      {
        title: "Google Integration",
        description: "Seamless integration with Google services, Maps, Drive, and Firebase",
        icon: "Cloud"
      },
      {
        title: "Customization",
        description: "Android's open nature allows deep customization and system-level integration",
        icon: "Settings"
      },
      {
        title: "Modern Languages",
        description: "Kotlin provides modern language features with null safety and concise syntax",
        icon: "Code"
      },
      {
        title: "Jetpack Libraries",
        description: "Rich set of libraries for navigation, lifecycle, data binding, and more",
        icon: "Package"
      }
    ],
    industries: [
      {
        name: "E-commerce",
        applications: ["Shopping apps", "Marketplace platforms", "Payment solutions", "Delivery tracking"]
      },
      {
        name: "Social & Media",
        applications: ["Social networks", "Messaging apps", "Video streaming", "Photo sharing"]
      },
      {
        name: "Enterprise",
        applications: ["Business tools", "Productivity apps", "Field service", "Inventory management"]
      },
      {
        name: "Healthcare",
        applications: ["Telemedicine", "Health tracking", "Medical devices", "Patient apps"]
      },
      {
        name: "Finance",
        applications: ["Banking apps", "Payment wallets", "Trading platforms", "Expense trackers"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning & Design",
        description: "Define requirements and create Material Design interfaces",
        deliverables: ["Requirements analysis", "UI/UX design", "Architecture planning", "Technical specifications", "Timeline estimation"]
      },
      {
        phase: "Phase 2",
        title: "Setup & Architecture",
        description: "Configure Android project with best practices",
        deliverables: ["Android Studio setup", "Project structure", "Architecture implementation", "Dependency injection", "Build configuration"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Building Android app features",
        deliverables: ["UI implementation", "Business logic", "API integration", "Database setup", "Google services integration"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance and optimization",
        deliverables: ["Unit testing", "UI testing", "Device compatibility", "Performance optimization", "Security testing"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Publishing to Google Play Store",
        deliverables: ["Play Store submission", "Release management", "Crash reporting", "Analytics setup", "Post-launch support"]
      }
    ],
    faq: [
      {
        question: "Should I build native Android or use cross-platform?",
        answer: "Native Android is best for apps needing maximum performance, complex UI, or deep platform integration. Cross-platform (React Native/Flutter) is better for simpler apps or when you need iOS version too. We'll recommend based on your requirements."
      },
      {
        question: "What's the difference between Kotlin and Java for Android?",
        answer: "Kotlin is Google's preferred language - more modern, concise, and safer with null-safety built-in. Java is still supported but Kotlin is recommended for new projects. We primarily use Kotlin for Android development."
      },
      {
        question: "How long does Android app development take?",
        answer: "Simple apps take 2-3 months, medium complexity 4-6 months, and complex apps 6-12 months. Native Android development is typically faster than building for multiple platforms."
      },
      {
        question: "Can Android apps work on tablets and Android TV?",
        answer: "Yes! Android apps can be optimized for tablets, foldables, Chrome OS, Android TV, and Wear OS. We design responsive layouts that adapt to different screen sizes and form factors."
      },
      {
        question: "What about Android app monetization?",
        answer: "We implement various monetization: Google Play billing for in-app purchases and subscriptions, AdMob for advertising, and integration with payment gateways for e-commerce."
      }
    ],
    relatedTechnologies: [
      { name: "Kotlin", slug: "kotlin" },
      { name: "Java", slug: "java" },
      { name: "Flutter", slug: "flutter" },
      { name: "React Native", slug: "react-native" }
    ]
  },

  // iOS
  {
    id: "5",
    slug: "ios",
    name: "iOS",
    category: "Mobile Development",
    tagline: "Premium iOS App Development",
    hero: {
      title: "Native iOS App Development",
      description: "Create elegant, high-performance iOS applications using Swift and SwiftUI. Reach premium users on iPhone, iPad, and Apple Watch.",
      ctaText: "Build iOS App",
      image: "/technologies/ios.jpg"
    },
    overview: "iOS is Apple's mobile operating system powering iPhones and iPads worldwide. At Arka Infotech, our iOS developers create premium native applications using Swift and SwiftUI that deliver exceptional user experiences following Apple's Human Interface Guidelines. We build apps that leverage iOS's powerful frameworks, seamless ecosystem integration, and platform-specific features. From consumer apps to enterprise solutions, we deliver iOS applications that maintain Apple's high standards for design, performance, and security while taking advantage of features like Face ID, Apple Pay, iCloud, and deep integration with Apple services.",
    useCases: [
      {
        title: "Premium Apps",
        description: "High-quality apps targeting affluent iOS users who spend more on apps and in-app purchases",
        icon: "Gem"
      },
      {
        title: "Enterprise Apps",
        description: "Business applications with enterprise features, MDM support, and corporate security",
        icon: "Building"
      },
      {
        title: "Apple Ecosystem",
        description: "Apps integrated with Apple Watch, iPad, Mac, and Apple TV using shared codebase",
        icon: "Smartphone"
      },
      {
        title: "AR Experiences",
        description: "Augmented reality apps using ARKit for immersive experiences",
        icon: "Box"
      }
    ],
    metrics: [
      { value: 18, suffix: "+", label: "React Developers", description: "Expert frontend engineers" },
      { value: 90, suffix: "+", label: "Web Apps Built", description: "Modern React applications" },
      { value: 99, suffix: "%", label: "Performance Score", description: "Optimized applications" }
    ],
  },

  // Python
  {
    id: "6",
    slug: "python",
    name: "Python",
    category: "Backend Development",
    tagline: "Versatile Programming for Every Need",
    hero: {
      title: "Python Development Services",
      description: "Build scalable web applications, data pipelines, AI/ML solutions, and automation tools with Python. The most versatile programming language for modern development.",
      ctaText: "Start Python Project",
      image: "/technologies/python.jpg"
    },
    overview: "Python is one of the world's most popular and versatile programming languages, powering everything from web applications to artificial intelligence. At Arka Infotech, our Python developers build robust backends, data processing pipelines, machine learning models, automation scripts, and scientific computing solutions. Python's readability, extensive libraries, and strong frameworks like Django and Flask make it perfect for rapid development. We leverage Python's strengths in web development, data science, AI/ML, automation, and DevOps to deliver solutions that are maintainable, scalable, and powerful.",
    useCases: [
      {
        title: "Web Applications",
        description: "Build scalable web apps and APIs using Django, Flask, or FastAPI frameworks",
        icon: "Globe"
      },
      {
        title: "Data Science & ML",
        description: "Develop machine learning models, data analysis tools, and AI applications",
        icon: "Brain"
      },
      {
        title: "Automation",
        description: "Automate workflows, web scraping, data processing, and system administration tasks",
        icon: "Zap"
      },
      {
        title: "Enterprise Solutions",
        description: "Build business applications, ETL pipelines, and backend services",
        icon: "Building"
      }
    ],
    metrics: [
      { value: 12, suffix: "+", label: "Flutter Experts", description: "Specialized Flutter developers" },
      { value: 45, suffix: "+", label: "Apps Built", description: "Cross-platform mobile apps" },
      { value: 50, suffix: "%", label: "Cost Savings", description: "Single codebase for both platforms" }
    ],
  },

  // React
  {
    id: "7",
    slug: "react",
    name: "React",
    category: "Frontend Development",
    tagline: "Build Modern User Interfaces",
    hero: {
      title: "React.js Development Services",
      description: "Create dynamic, high-performance web applications with React. Build interactive user interfaces that scale from simple sites to complex enterprise applications.",
      ctaText: "Build with React",
      image: "/technologies/react.jpg"
    },
    overview: "React is the world's most popular JavaScript library for building user interfaces, created and maintained by Meta (Facebook). At Arka Infotech, our React developers build fast, interactive web applications using component-based architecture and virtual DOM for optimal performance. We create everything from single-page applications to complex enterprise dashboards, leveraging React's ecosystem of tools, libraries, and frameworks. Whether you need a modern website, progressive web app, or sophisticated dashboard, we deliver React solutions that provide exceptional user experiences with maintainable, scalable code.",
    useCases: [
      {
        title: "Single Page Applications",
        description: "Build fast, responsive SPAs with smooth navigation and instant updates",
        icon: "Layout"
      },
      {
        title: "Dashboards & Admin Panels",
        description: "Create data-rich dashboards with real-time updates and complex visualizations",
        icon: "BarChart"
      },
      {
        title: "E-commerce Frontends",
        description: "Develop dynamic shopping experiences with cart, checkout, and product catalogs",
        icon: "ShoppingCart"
      },
      {
        title: "Progressive Web Apps",
        description: "Build PWAs that work offline and provide app-like experiences on the web",
        icon: "Smartphone"
      }
    ],
    metrics: [
      { value: 15, suffix: "+", label: "Python Developers", description: "Expert Python engineers" },
      { value: 80, suffix: "+", label: "Projects Delivered", description: "Web apps, APIs, and automation" },
      { value: 40, suffix: "%", label: "Faster Development", description: "Rapid prototyping capabilities" }
    ],
    keyFeatures: [
      "Component-based architecture",
      "Virtual DOM for performance",
      "Unidirectional data flow",
      "Reusable UI components",
      "Rich ecosystem (React Router, Redux)",
      "Server-side rendering (Next.js)",
      "React Hooks for state management",
      "Strong TypeScript support",
      "Excellent developer tools",
      "Massive community"
    ],
    techStack: [
      {
        category: "Core & Frameworks",
        items: [
          { name: "React", icon: "SiReact", color: "#61DAFB" },
          { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { name: "Vite", icon: "SiVite", color: "#646CFF" }
        ]
      },
      {
        category: "State Management",
        items: [
          { name: "Redux", icon: "SiRedux", color: "#764ABC" },
          { name: "Zustand", icon: "SiReact", color: "#61DAFB" },
          { name: "React Query", icon: "SiReactquery", color: "#FF4154" },
          { name: "Jotai", icon: "SiReact", color: "#61DAFB" }
        ]
      },
      {
        category: "UI Libraries",
        items: [
          { name: "Material-UI", icon: "SiMui", color: "#007FFF" },
          { name: "Ant Design", icon: "SiAntdesign", color: "#0170FE" },
          { name: "Chakra UI", icon: "SiChakraui", color: "#319795" },
          { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" }
        ]
      },
      {
        category: "Tools & Testing",
        items: [
          { name: "Jest", icon: "SiJest", color: "#C21325" },
          { name: "React Testing Library", icon: "SiTestinglibrary", color: "#E33332" },
          { name: "Webpack", icon: "SiWebpack", color: "#8DD6F9" },
          { name: "ESLint", icon: "SiEslint", color: "#4B32C3" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Most Popular",
        description: "Used by Facebook, Netflix, Airbnb, and millions of websites - proven at scale",
        icon: "TrendingUp"
      },
      {
        title: "Component Reusability",
        description: "Build once, reuse everywhere - accelerates development and maintains consistency",
        icon: "Copy"
      },
      {
        title: "Performance",
        description: "Virtual DOM ensures fast updates and excellent performance even with complex UIs",
        icon: "Zap"
      },
      {
        title: "Rich Ecosystem",
        description: "Thousands of libraries, tools, and frameworks for any need",
        icon: "Package"
      },
      {
        title: "SEO Friendly",
        description: "Server-side rendering with Next.js provides excellent SEO capabilities",
        icon: "Search"
      },
      {
        title: "Easy to Learn",
        description: "Straightforward concepts and extensive documentation make React accessible",
        icon: "BookOpen"
      }
    ],
    industries: [
      {
        name: "SaaS",
        applications: ["Cloud applications", "Admin dashboards", "Analytics platforms", "Collaboration tools"]
      },
      {
        name: "E-commerce",
        applications: ["Online stores", "Product catalogs", "Shopping carts", "Customer portals"]
      },
      {
        name: "Media",
        applications: ["Content platforms", "Streaming services", "News sites", "Social networks"]
      },
      {
        name: "Finance",
        applications: ["Trading platforms", "Banking dashboards", "Analytics tools", "Payment systems"]
      },
      {
        name: "Enterprise",
        applications: ["Business tools", "CRM systems", "Project management", "Internal portals"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Define application structure",
        deliverables: ["Requirements analysis", "Component hierarchy", "State management strategy", "API design", "Technology selection"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Configure React project",
        deliverables: ["Project scaffolding", "TypeScript setup", "Routing configuration", "State management", "Build tools"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Building React application",
        deliverables: ["Component development", "State logic", "API integration", "Styling implementation", "Performance optimization"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "E2E tests", "Performance testing", "Cross-browser testing"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production launch",
        deliverables: ["Build optimization", "Hosting setup", "CI/CD pipeline", "Monitoring", "Documentation"]
      }
    ],
    faq: [
      {
        question: "What's the difference between React and Next.js?",
        answer: "React is a library for building UIs. Next.js is a React framework adding server-side rendering, routing, API routes, and optimizations. Next.js is better for SEO and full websites; React alone is great for SPAs and embedded widgets."
      },
      {
        question: "Should we use TypeScript with React?",
        answer: "Yes, we strongly recommend TypeScript for React projects. It catches errors during development, improves code quality, provides better IDE support, and makes large codebases more maintainable."
      },
      {
        question: "How does React compare to Angular or Vue?",
        answer: "React is more flexible and has the largest ecosystem. Angular is more opinionated with everything built-in. Vue is simpler to learn. React's component model and Virtual DOM make it fastest for complex UIs."
      },
      {
        question: "Can React be used for mobile apps?",
        answer: "React itself is for web. However, React Native uses React concepts to build native mobile apps. If you know React, learning React Native is easy. We can build web apps with React and mobile apps with React Native sharing business logic."
      },
      {
        question: "How long does React development take?",
        answer: "Simple React apps take 4-8 weeks, medium complexity 8-16 weeks, and large enterprise applications 16-32 weeks. React's component reusability often accelerates development compared to traditional approaches."
      }
    ],
    relatedTechnologies: [
      { name: "Next.js", slug: "nextjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Node.js", slug: "nodejs" },
      { name: "React Native", slug: "react-native" }
    ]
  },

  // Angular
  {
    id: "8",
    slug: "angular",
    name: "Angular",
    category: "Frontend Development",
    tagline: "Enterprise-Grade Frontend Framework",
    hero: {
      title: "Angular Development Services",
      description: "Build robust, scalable enterprise applications with Angular. Google's comprehensive framework for building complex single-page applications.",
      ctaText: "Build with Angular",
      image: "/technologies/angular.jpg"
    },
    overview: "Angular is Google's powerful TypeScript-based framework for building enterprise-grade web applications. At Arka Infotech, our Angular developers create sophisticated single-page applications with complex requirements, data-heavy interfaces, and enterprise features. Angular's opinionated structure, dependency injection, two-way data binding, and comprehensive tooling make it ideal for large-scale applications. We leverage Angular's CLI, RxJS for reactive programming, and extensive built-in features to deliver applications that are maintainable, testable, and scalable across enterprise organizations.",
    useCases: [
      {
        title: "Enterprise Applications",
        description: "Large-scale business applications with complex workflows and data management",
        icon: "Building"
      },
      {
        title: "Admin Dashboards",
        description: "Feature-rich admin panels with data tables, charts, and real-time updates",
        icon: "LayoutDashboard"
      },
      {
        title: "Progressive Web Apps",
        description: "Build PWAs with offline capabilities and app-like experiences",
        icon: "Smartphone"
      },
      {
        title: "Data-Intensive Apps",
        description: "Applications handling large datasets with filtering, sorting, and visualization",
        icon: "Database"
      }
    ],
    metrics: [
      { value: 18, suffix: "+", label: "React Developers", description: "Expert frontend engineers" },
      { value: 90, suffix: "+", label: "Web Apps Built", description: "Modern React applications" },
      { value: 99, suffix: "%", label: "Performance Score", description: "Optimized applications" }
    ],
  },

  // Swift
  {
    id: "9",
    slug: "swift",
    name: "Swift",
    category: "Mobile Development",
    tagline: "Apple's Powerful Programming Language",
    hero: {
      title: "Swift Development Services",
      description: "Build fast, safe iOS, macOS, watchOS, and tvOS applications with Swift. Apple's modern programming language for the entire Apple ecosystem.",
      ctaText: "Develop with Swift",
      image: "/technologies/swift.jpg"
    },
    overview: "Swift is Apple's powerful and intuitive programming language for building apps across the entire Apple ecosystem. At Arka Infotech, our Swift developers create high-performance native applications that leverage Swift's modern features like optionals, type safety, and protocol-oriented programming. Swift's speed, safety features, and clean syntax make it perfect for building everything from iPhone apps to server-side applications. We use Swift with SwiftUI and UIKit to deliver apps that are fast, secure, and maintainable while providing the best possible user experience on Apple platforms.",
    useCases: [
      {
        title: "iOS Applications",
        description: "Native iPhone and iPad apps with full iOS SDK access and optimal performance",
        icon: "Smartphone"
      },
      {
        title: "Multi-Platform Apps",
        description: "Apps for iPhone, iPad, Mac, Apple Watch, and Apple TV with shared code",
        icon: "Layers"
      },
      {
        title: "SwiftUI Apps",
        description: "Modern declarative UI apps with beautiful animations and responsive layouts",
        icon: "Paintbrush"
      },
      {
        title: "AR Applications",
        description: "Augmented reality experiences using ARKit and RealityKit",
        icon: "Box"
      }
    ],
    metrics: [
      { value: 15, suffix: "+", label: "Expert Developers", description: "Specialized React Native development team" },
      { value: 50, suffix: "+", label: "Apps Delivered", description: "Cross-platform mobile applications" },
      { value: 60, suffix: "%", label: "Code Reusability", description: "Share code between iOS and Android" }
    ],
    keyFeatures: [
      "Fast and powerful performance",
      "Type-safe and null-safe by design",
      "Modern syntax and features",
      "Protocol-oriented programming",
      "Automatic memory management",
      "Interoperability with Objective-C",
      "SwiftUI declarative framework",
      "Playgrounds for quick prototyping",
      "Open source with Linux support",
      "Growing server-side ecosystem"
    ],
    techStack: [
      {
        category: "Frameworks",
        items: [
          { name: "SwiftUI", icon: "SiSwift", color: "#F05138" },
          { name: "UIKit", icon: "SiApple", color: "#000000" },
          { name: "Combine", icon: "SiSwift", color: "#F05138" },
          { name: "Core Data", icon: "SiApple", color: "#000000" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Xcode", icon: "SiXcode", color: "#147EFB" },
          { name: "Swift Package Manager", icon: "SiSwift", color: "#F05138" },
          { name: "CocoaPods", icon: "SiCocoapods", color: "#EE3322" },
          { name: "Carthage", icon: "SiSwift", color: "#F05138" }
        ]
      },
      {
        category: "Backend & Services",
        items: [
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
          { name: "Vapor", icon: "SiSwift", color: "#F05138" },
          { name: "Alamofire", icon: "SiSwift", color: "#F05138" },
          { name: "CloudKit", icon: "SiIcloud", color: "#3693F3" }
        ]
      },
      {
        category: "Testing",
        items: [
          { name: "XCTest", icon: "SiXcode", color: "#147EFB" },
          { name: "Quick", icon: "SiSwift", color: "#F05138" },
          { name: "Nimble", icon: "SiSwift", color: "#F05138" },
          { name: "Fastlane", icon: "SiFastlane", color: "#00B0FF" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Modern Language",
        description: "Swift is fast, safe, and expressive with modern programming features",
        icon: "Code"
      },
      {
        title: "Apple's Choice",
        description: "Preferred by Apple with first-class support and continuous improvements",
        icon: "Award"
      },
      {
        title: "Performance",
        description: "Compiled to native code for maximum speed and efficiency",
        icon: "Zap"
      },
      {
        title: "Safety",
        description: "Type safety and optionals prevent common programming errors",
        icon: "Shield"
      },
      {
        title: "Ecosystem",
        description: "Access to entire Apple ecosystem and frameworks",
        icon: "Package"
      },
      {
        title: "Future-Proof",
        description: "Active development with regular updates and new features",
        icon: "TrendingUp"
      }
    ],
    industries: [
      {
        name: "Consumer Apps",
        applications: ["Social media", "Entertainment", "Productivity", "Lifestyle apps"]
      },
      {
        name: "Enterprise",
        applications: ["Business apps", "Field service", "Corporate tools", "B2B solutions"]
      },
      {
        name: "Finance",
        applications: ["Mobile banking", "Payment apps", "Investment tools", "Crypto wallets"]
      },
      {
        name: "Healthcare",
        applications: ["Medical apps", "Health tracking", "HealthKit integration", "Telemedicine"]
      },
      {
        name: "Gaming",
        applications: ["Mobile games", "AR games", "Casual games", "Game engines"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Design",
        description: "App concept and interface design",
        deliverables: ["Requirements", "SwiftUI/UIKit decision", "Architecture plan", "Design mockups", "Timeline"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Xcode project configuration",
        deliverables: ["Xcode project", "SPM dependencies", "Project structure", "Git setup", "CI/CD"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Swift code implementation",
        deliverables: ["UI development", "Business logic", "API integration", "Local storage", "Apple services"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "UI tests", "Device testing", "Performance tuning", "Beta testing"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "App Store release",
        deliverables: ["App Store submission", "TestFlight", "Release notes", "Analytics", "Support"]
      }
    ],
    faq: [
      {
        question: "Is Swift only for iOS development?",
        answer: "No! Swift works for iOS, macOS, watchOS, tvOS, and even server-side development with frameworks like Vapor. It's Apple's unified language for their entire ecosystem."
      },
      {
        question: "Should we use SwiftUI or UIKit?",
        answer: "SwiftUI is Apple's modern declarative framework - better for new apps. UIKit is mature with more resources. For iOS 14+, we recommend SwiftUI. For complex custom UI or older iOS support, UIKit is still excellent."
      },
      {
        question: "Can Swift code be reused across Apple platforms?",
        answer: "Yes! Swift code, especially business logic, can be shared across iOS, macOS, watchOS, and tvOS. With SwiftUI, UI code is also highly reusable across platforms."
      },
      {
        question: "Is Swift better than Objective-C?",
        answer: "Yes, for new development. Swift is faster, safer, more modern, and easier to read. Objective-C is only maintained for legacy apps. Swift can interoperate with Objective-C code."
      },
      {
        question: "How does Swift compare to cross-platform frameworks?",
        answer: "Swift provides best performance and access to latest iOS features immediately. Cross-platform (React Native/Flutter) allows code sharing with Android. Choose Swift for iOS-only premium apps; cross-platform for multi-platform launch."
      }
    ],
    relatedTechnologies: [
      { name: "iOS", slug: "ios" },
      { name: "SwiftUI", slug: "swiftui" },
      { name: "Objective-C", slug: "objective-c" },
      { name: "Xcode", slug: "xcode" }
    ]
  },

  // Kotlin
  {
    id: "10",
    slug: "kotlin",
    name: "Kotlin",
    category: "Mobile Development",
    tagline: "Modern Android Development",
    hero: {
      title: "Kotlin Development Services",
      description: "Build modern Android applications with Kotlin. Google's preferred language for Android development with concise, safe, and expressive code.",
      ctaText: "Develop with Kotlin",
      image: "/technologies/kotlin.jpg"
    },
    overview: "Kotlin is a modern, statically-typed programming language that has become Google's preferred choice for Android development. At Arka Infotech, our Kotlin developers build robust Android applications leveraging Kotlin's concise syntax, null safety, and modern features. Kotlin is 100% interoperable with Java while providing significant improvements in code readability, safety, and developer productivity. We use Kotlin with Jetpack Compose for modern UI development, coroutines for asynchronous programming, and the full Android ecosystem to deliver apps that are maintainable, efficient, and delightful to use.",
    useCases: [
      {
        title: "Android Applications",
        description: "Modern Android apps with Material Design and latest Android features",
        icon: "Smartphone"
      },
      {
        title: "Cross-Platform Mobile",
        description: "Kotlin Multiplatform for sharing code between Android, iOS, and web",
        icon: "Layers"
      },
      {
        title: "Server-Side Apps",
        description: "Backend services using Ktor or Spring Boot with Kotlin",
        icon: "Server"
      },
      {
        title: "Enterprise Android",
        description: "Business apps with complex requirements and security features",
        icon: "Building"
      }
    ],
    metrics: [
      { value: 18, suffix: "+", label: "React Developers", description: "Expert frontend engineers" },
      { value: 90, suffix: "+", label: "Web Apps Built", description: "Modern React applications" },
      { value: 99, suffix: "%", label: "Performance Score", description: "Optimized applications" }
    ],
    keyFeatures: [
      "Google's official Android language",
      "Null safety built into the type system",
      "Concise syntax (less boilerplate)",
      "100% Java interoperability",
      "Coroutines for async programming",
      "Extension functions",
      "Data classes",
      "Smart type inference",
      "Multiplatform support (KMM)",
      "Growing ecosystem"
    ],
    techStack: [
      {
        category: "Core & Frameworks",
        items: [
          { name: "Kotlin", icon: "SiKotlin", color: "#7F52FF" },
          { name: "Jetpack Compose", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Android SDK", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Ktor", icon: "SiKtor", color: "#087CFA" }
        ]
      },
      {
        category: "Architecture",
        items: [
          { name: "Coroutines", icon: "SiKotlin", color: "#7F52FF" },
          { name: "Flow", icon: "SiKotlin", color: "#7F52FF" },
          { name: "Hilt/Dagger", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Room", icon: "SiAndroid", color: "#3DDC84" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Android Studio", icon: "SiAndroidstudio", color: "#3DDC84" },
          { name: "Gradle", icon: "SiGradle", color: "#02303A" },
          { name: "IntelliJ IDEA", icon: "SiIntellijidea", color: "#000000" },
          { name: "Git", icon: "SiGit", color: "#F05032" }
        ]
      },
      {
        category: "Testing",
        items: [
          { name: "JUnit", icon: "SiJunit", color: "#25A162" },
          { name: "MockK", icon: "SiKotlin", color: "#7F52FF" },
          { name: "Espresso", icon: "SiAndroid", color: "#3DDC84" },
          { name: "Kotest", icon: "SiKotlin", color: "#7F52FF" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Google Recommended",
        description: "Official language for Android with Google's full support and tooling",
        icon: "Award"
      },
      {
        title: "Null Safety",
        description: "Eliminates null pointer exceptions at compile time, not runtime",
        icon: "Shield"
      },
      {
        title: "Concise Code",
        description: "Write 40% less code than Java while maintaining readability",
        icon: "Code"
      },
      {
        title: "Java Compatible",
        description: "Works seamlessly with existing Java code and libraries",
        icon: "Link"
      },
      {
        title: "Modern Features",
        description: "Coroutines, extension functions, sealed classes, and more",
        icon: "Sparkles"
      },
      {
        title: "Multiplatform",
        description: "Share code across Android, iOS, and backend with Kotlin Multiplatform",
        icon: "Globe"
      }
    ],
    industries: [
      {
        name: "Mobile Apps",
        applications: ["Android apps", "KMM apps", "Enterprise mobility", "Consumer apps"]
      },
      {
        name: "Finance",
        applications: ["Banking apps", "Payment solutions", "Trading apps", "Fintech platforms"]
      },
      {
        name: "E-commerce",
        applications: ["Shopping apps", "Marketplace apps", "Delivery apps", "Retail solutions"]
      },
      {
        name: "Healthcare",
        applications: ["Medical apps", "Health monitoring", "Telemedicine", "Fitness tracking"]
      },
      {
        name: "Gaming",
        applications: ["Mobile games", "Casual games", "Game engines", "Gaming platforms"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "App requirements and architecture",
        deliverables: ["Requirements doc", "Architecture design", "UI/UX designs", "Tech stack", "Milestones"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project configuration",
        deliverables: ["Android Studio setup", "Kotlin project", "Dependencies", "Architecture setup", "CI/CD"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Kotlin app development",
        deliverables: ["UI with Compose", "Business logic", "API integration", "Local storage", "Features implementation"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Instrumented tests", "UI tests", "Performance optimization", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Launch",
        description: "Play Store deployment",
        deliverables: ["Play Store submission", "Release management", "Analytics", "Monitoring", "Support"]
      }
    ],
    faq: [
      {
        question: "Why use Kotlin instead of Java for Android?",
        answer: "Kotlin is more concise, safer (null safety), modern, and officially recommended by Google. It reduces boilerplate code by 40% and prevents common errors at compile time. Google has made Kotlin the preferred language for Android."
      },
      {
        question: "Can Kotlin be used for iOS development?",
        answer: "Yes, with Kotlin Multiplatform Mobile (KMM)! Share business logic between Android and iOS while keeping native UI. It's great for teams wanting code sharing without compromising native experience."
      },
      {
        question: "Is Kotlin only for Android?",
        answer: "No! Kotlin works for Android, iOS (via KMM), server-side (Ktor, Spring), web (Kotlin/JS), and even desktop applications. It's a versatile language growing beyond mobile."
      },
      {
        question: "How long does it take to learn Kotlin?",
        answer: "Java developers can learn Kotlin in 1-2 weeks. Developers from other languages typically take 2-4 weeks. Kotlin's clean syntax and excellent documentation make it approachable."
      },
      {
        question: "Can Kotlin apps use Java libraries?",
        answer: "Yes! Kotlin is 100% interoperable with Java. You can use all existing Java libraries, frameworks, and call Java code from Kotlin seamlessly."
      }
    ],
    relatedTechnologies: [
      { name: "Android", slug: "android" },
      { name: "Java", slug: "java" },
      { name: "Jetpack Compose", slug: "jetpack-compose" },
      { name: "Spring Boot", slug: "spring" }
    ]
  },

  // Laravel  
  {
    id: "11",
    slug: "laravel",
    name: "Laravel",
    category: "Backend Development",
    tagline: "The PHP Framework for Web Artisans",
    hero: {
      title: "Laravel Development Services",
      description: "Build elegant, powerful web applications with Laravel. The most popular PHP framework known for its expressive syntax and developer happiness.",
      ctaText: "Build with Laravel",
      image: "/technologies/laravel.jpg"
    },
    overview: "Laravel is the world's most popular PHP framework, known for its elegant syntax, comprehensive features, and developer-friendly approach. At Arka Infotech, our Laravel developers create robust web applications, APIs, and enterprise systems using Laravel's powerful ecosystem. From built-in authentication to queue management, database migrations to real-time event broadcasting, Laravel provides everything needed for modern web development. We leverage Laravel's Eloquent ORM, Blade templating, and extensive package ecosystem to deliver applications that are maintainable, secure, and scalable.",
    useCases: [
      {
        title: "Web Applications",
        description: "Full-featured web apps with authentication, authorization, and complex business logic",
        icon: "Globe"
      },
      {
        title: "RESTful APIs",
        description: "Robust APIs for mobile apps and single-page applications",
        icon: "Workflow"
      },
      {
        title: "E-commerce Platforms",
        description: "Custom online stores with payment integration and inventory management",
        icon: "ShoppingCart"
      },
      {
        title: "Enterprise Solutions",
        description: "Business applications, CMS, and admin panels",
        icon: "Building"
      }
    ],
    metrics: [
      { value: 10, suffix: "+", label: "iOS Developers", description: "Apple certified development team" },
      { value: 50, suffix: "+", label: "Apps Published", description: "Live on App Store" },
      { value: 95, suffix: "%", label: "User Satisfaction", description: "Exceptional app quality" }
    ],
    keyFeatures: [
      "Elegant and expressive syntax",
      "Eloquent ORM for databases",
      "Built-in authentication & authorization",
      "Artisan CLI for productivity",
      "Blade templating engine",
      "Queue and job processing",
      "Real-time event broadcasting",
      "Task scheduling",
      "Comprehensive testing tools",
      "Large package ecosystem"
    ],
    techStack: [
      {
        category: "Core & Tools",
        items: [
          { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
          { name: "PHP", icon: "SiPhp", color: "#777BB4" },
          { name: "Composer", icon: "SiComposer", color: "#885630" },
          { name: "Artisan", icon: "SiLaravel", color: "#FF2D20" }
        ]
      },
      {
        category: "Frontend",
        items: [
          { name: "Laravel Livewire", icon: "SiLivewire", color: "#FB70A9" },
          { name: "Inertia.js", icon: "SiInertia", color: "#9553E9" },
          { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
          { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" }
        ]
      },
      {
        category: "Database",
        items: [
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { name: "Laravel Forge", icon: "SiLaravel", color: "#FF2D20" },
          { name: "Laravel Vapor", icon: "SiLaravel", color: "#FF2D20" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Nginx", icon: "SiNginx", color: "#009639" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Developer Happiness",
        description: "Elegant syntax and comprehensive documentation make development enjoyable",
        icon: "Smile"
      },
      {
        title: "Full-Featured",
        description: "Everything included - authentication, queues, caching, broadcasting, and more",
        icon: "Package"
      },
      {
        title: "Rapid Development",
        description: "Build features faster with Laravel's conventions and helper functions",
        icon: "Rocket"
      },
      {
        title: "Strong Ecosystem",
        description: "Extensive packages (Laravel Nova, Sanctum, Horizon, Telescope) for any need",
        icon: "Box"
      },
      {
        title: "Active Community",
        description: "Massive community with tutorials, packages, and support",
        icon: "Users"
      },
      {
        title: "Enterprise Ready",
        description: "Powers millions of applications from startups to Fortune 500 companies",
        icon: "Building"
      }
    ],
    industries: [
      {
        name: "E-commerce",
        applications: ["Online stores", "Marketplaces", "Payment systems", "Inventory management"]
      },
      {
        name: "SaaS",
        applications: ["Cloud applications", "Subscription platforms", "APIs", "Multi-tenant systems"]
      },
      {
        name: "Enterprise",
        applications: ["Business applications", "CRM systems", "ERP solutions", "Portals"]
      },
      {
        name: "Education",
        applications: ["Learning platforms", "Course management", "Student portals", "Online exams"]
      },
      {
        name: "Healthcare",
        applications: ["Patient portals", "Appointment systems", "Medical records", "Telemedicine"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and architecture",
        deliverables: ["Requirements doc", "Database design", "API specifications", "Architecture plan", "Timeline"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Laravel project initialization",
        deliverables: ["Laravel installation", "Environment config", "Database setup", "Authentication", "Version control"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Feature implementation",
        deliverables: ["Models & migrations", "Controllers & routes", "Views & components", "API endpoints", "Business logic"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Feature tests", "Browser tests", "Performance optimization", "Security audit"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production launch",
        deliverables: ["Server deployment", "Database migration", "Queue setup", "Monitoring", "Documentation"]
      }
    ],
    faq: [
      {
        question: "Why choose Laravel over other PHP frameworks?",
        answer: "Laravel offers the best developer experience with elegant syntax, comprehensive features, and excellent documentation. It's more modern than CodeIgniter, more beginner-friendly than Symfony, and has the largest PHP community."
      },
      {
        question: "Is Laravel suitable for large applications?",
        answer: "Absolutely! Laravel powers large-scale applications for companies like Disney, Pfizer, and BBC. With proper architecture and optimization, Laravel handles high-traffic enterprise applications excellently."
      },
      {
        question: "Can Laravel build APIs for mobile apps?",
        answer: "Yes! Laravel is excellent for building RESTful APIs and GraphQL endpoints. Laravel Sanctum provides API authentication, and the framework includes comprehensive API resource transformations."
      },
      {
        question: "What about Laravel performance?",
        answer: "Laravel performs well with proper optimization (caching, queue workers, database indexing). We use Laravel Octane for even faster performance. For most applications, Laravel's performance is excellent."
      },
      {
        question: "Does Laravel work with modern frontend frameworks?",
        answer: "Yes! Laravel works great with Vue.js (default), React, or Angular. Laravel also offers Livewire for reactive UIs without JavaScript frameworks, and Inertia.js for SPA-like experiences."
      }
    ],
    relatedTechnologies: [
      { name: "PHP", slug: "php" },
      { name: "Vue.js", slug: "vuejs" },
      { name: "MySQL", slug: "mysql" },
      { name: "Tailwind CSS", slug: "tailwind" }
    ]
  },

  // WordPress
  {
    id: "12",
    slug: "wordpress",
    name: "WordPress",
    category: "CMS",
    tagline: "Power Your Website with WordPress",
    hero: {
      title: "WordPress Development Services",
      description: "Build stunning websites, blogs, and e-commerce stores with WordPress. The world's most popular CMS powering 43% of all websites.",
      ctaText: "Build WordPress Site",
      image: "/technologies/wordpress.jpg"
    },
    overview: "WordPress is the world's most popular content management system, powering over 43% of all websites on the internet. At Arka Infotech, our WordPress developers create everything from simple blogs to complex e-commerce stores and custom web applications. We leverage WordPress's extensive theme and plugin ecosystem, user-friendly admin panel, and powerful customization capabilities to deliver websites that are easy to manage, SEO-friendly, and scalable. Whether you need a corporate website, blog, portfolio, or online store, we build WordPress solutions that meet your unique requirements.",
    useCases: [
      {
        title: "Business Websites",
        description: "Corporate sites, portfolios, and landing pages with easy content management",
        icon: "Building"
      },
      {
        title: "Blogs & Publishing",
        description: "News sites, magazines, and personal blogs with powerful content tools",
        icon: "FileText"
      },
      {
        title: "E-commerce Stores",
        description: "Online shops using WooCommerce with products, payments, and shipping",
        icon: "ShoppingCart"
      },
      {
        title: "Membership Sites",
        description: "Gated content, courses, and communities with subscription management",
        icon: "Users"
      }
    ],
    metrics: [
      { value: 12, suffix: "+", label: "Android Developers", description: "Certified Android experts" },
      { value: 60, suffix: "+", label: "Apps Published", description: "Live on Google Play Store" },
      { value: 4.5, suffix: "+", label: "Average Rating", description: "High user satisfaction scores" }
    ],
    keyFeatures: [
      "User-friendly admin interface",
      "60,000+ plugins available",
      "Thousands of themes",
      "SEO-friendly by design",
      "WooCommerce for e-commerce",
      "Gutenberg block editor",
      "Multi-site capability",
      "REST API built-in",
      "Regular security updates",
      "Massive community support"
    ],
    techStack: [
      {
        category: "Core Technologies",
        items: [
          { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
          { name: "PHP", icon: "SiPhp", color: "#777BB4" },
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "WooCommerce", icon: "SiWoo", color: "#96588A" }
        ]
      },
      {
        category: "Page Builders",
        items: [
          { name: "Elementor", icon: "SiElementor", color: "#92003B" },
          { name: "Gutenberg", icon: "SiWordpress", color: "#21759B" },
          { name: "WPBakery", icon: "SiWordpress", color: "#21759B" },
          { name: "Divi", icon: "SiWordpress", color: "#21759B" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Advanced Custom Fields", icon: "SiWordpress", color: "#21759B" },
          { name: "Custom Post Types", icon: "SiWordpress", color: "#21759B" },
          { name: "WordPress REST API", icon: "SiWordpress", color: "#21759B" },
          { name: "Theme Development", icon: "SiWordpress", color: "#21759B" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "WP-CLI", icon: "SiWordpress", color: "#21759B" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Composer", icon: "SiComposer", color: "#885630" },
          { name: "Local by Flywheel", icon: "SiWordpress", color: "#21759B" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Market Leader",
        description: "Powers 43% of all websites - proven, reliable, and trusted globally",
        icon: "TrendingUp"
      },
      {
        title: "Easy to Use",
        description: "Non-technical users can manage content easily without developer help",
        icon: "Smile"
      },
      {
        title: "Cost-Effective",
        description: "Open-source with thousands of free themes and plugins reduces development costs",
        icon: "DollarSign"
      },
      {
        title: "SEO Friendly",
        description: "Built-in SEO features and plugins like Yoast make ranking easier",
        icon: "Search"
      },
      {
        title: "Flexible",
        description: "From simple blogs to complex e-commerce - WordPress handles it all",
        icon: "Puzzle"
      },
      {
        title: "Community",
        description: "Largest CMS community with endless resources, tutorials, and support",
        icon: "Users"
      }
    ],
    industries: [
      {
        name: "Small Business",
        applications: ["Company websites", "Portfolios", "Service sites", "Local businesses"]
      },
      {
        name: "E-commerce",
        applications: ["WooCommerce stores", "Product catalogs", "Digital downloads", "Subscriptions"]
      },
      {
        name: "Publishing",
        applications: ["News sites", "Magazines", "Blogs", "Content portals"]
      },
      {
        name: "Education",
        applications: ["School sites", "Course platforms", "LMS integration", "Student portals"]
      },
      {
        name: "Non-Profit",
        applications: ["Organization sites", "Donation platforms", "Event management", "Member portals"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Website requirements and design",
        deliverables: ["Requirements gathering", "Site structure", "Design mockups", "Plugin selection", "Content strategy"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "WordPress installation",
        deliverables: ["WP installation", "Theme setup", "Plugin installation", "Security hardening", "Backup configuration"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Customization and features",
        deliverables: ["Theme customization", "Custom functionality", "Page building", "E-commerce setup", "Integrations"]
      },
      {
        phase: "Phase 4",
        title: "Content & Testing",
        description: "Content migration and QA",
        deliverables: ["Content migration", "SEO optimization", "Cross-browser testing", "Performance optimization", "Security testing"]
      },
      {
        phase: "Phase 5",
        title: "Launch",
        description: "Website deployment",
        deliverables: ["Domain setup", "SSL certificate", "Go-live deployment", "Training", "Maintenance plan"]
      }
    ],
    faq: [
      {
        question: "Is WordPress only for blogs?",
        answer: "No! WordPress started as a blogging platform but now powers all types of websites - corporate sites, e-commerce stores, membership sites, forums, and complex web applications."
      },
      {
        question: "Is WordPress secure?",
        answer: "Yes, when properly maintained. We implement security best practices, regular updates, security plugins, SSL, firewalls, and regular backups to ensure your WordPress site is secure."
      },
      {
        question: "Can WordPress handle high traffic?",
        answer: "Absolutely! With proper hosting, caching (WP Rocket, Redis), CDN (Cloudflare), and optimization, WordPress handles millions of visitors. Major sites like TechCrunch and The New Yorker use WordPress."
      },
      {
        question: "Will I be able to update content myself?",
        answer: "Yes! WordPress's intuitive admin panel allows non-technical users to easily update content, add pages, upload images, and manage the site without developer help."
      },
      {
        question: "Custom WordPress vs theme-based?",
        answer: "Theme-based is faster and cheaper using premium themes like Avada or Divi. Custom development provides unique design and specific functionality. We recommend based on budget, timeline, and requirements."
      }
    ],
    relatedTechnologies: [
      { name: "PHP", slug: "php" },
      { name: "WooCommerce", slug: "woocommerce" },
      { name: "MySQL", slug: "mysql" },
      { name: "Elementor", slug: "elementor" }
    ]
  },

  // Xamarin
  {
    id: "13",
    slug: "xamarin",
    name: "Xamarin",
    category: "Mobile Development",
    tagline: "Cross-Platform Mobile with .NET",
    hero: {
      title: "Xamarin Development Services",
      description: "Build native iOS and Android apps with C# and .NET. Share code across platforms while delivering native performance and user experiences.",
      ctaText: "Develop with Xamarin",
      image: "/technologies/xamarin.jpg"
    },
    overview: "Xamarin is Microsoft's cross-platform mobile development framework that allows building native iOS, Android, and Windows apps using C# and .NET. At Arka Infotech, our Xamarin developers create mobile applications that share up to 90% of code across platforms while delivering 100% native performance and UI. With Xamarin.Forms for shared UI and Xamarin.Native for platform-specific code, we provide the best of both worlds. Ideal for organizations already invested in .NET ecosystem, Xamarin accelerates development while maintaining native app quality.",
    useCases: [
      {
        title: "Enterprise Mobile Apps",
        description: "Business apps leveraging .NET ecosystem and Azure services",
        icon: "Building"
      },
      {
        title: "Cross-Platform Apps",
        description: "iOS and Android apps with 90% shared C# codebase",
        icon: "Smartphone"
      },
      {
        title: "Line-of-Business Apps",
        description: "Internal tools, field service apps, and productivity solutions",
        icon: "Briefcase"
      },
      {
        title: "Azure-Integrated Apps",
        description: "Mobile apps connected to Azure services and Microsoft ecosystem",
        icon: "Cloud"
      }
    ],
    keyFeatures: [
      "Native performance",
      "90% code sharing",
      "C# and .NET framework",
      "Xamarin.Forms for shared UI",
      "Platform-specific APIs access",
      "Visual Studio integration",
      "Azure and Microsoft ecosystem",
      "Hot Reload for fast development",
      "MVVM architecture support",
      "Comprehensive testing tools"
    ],
    techStack: [
      {
        category: "Core",
        items: [
          { name: "Xamarin", icon: "SiXamarin", color: "#3498DB" },
          { name: "C#", icon: "SiCsharp", color: "#239120" },
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "Xamarin.Forms", icon: "SiXamarin", color: "#3498DB" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Visual Studio", icon: "SiVisualstudio", color: "#5C2D91" },
          { name: "Visual Studio Code", icon: "SiVisualstudiocode", color: "#007ACC" },
          { name: "NuGet", icon: "SiNuget", color: "#004880" },
          { name: "Azure DevOps", icon: "SiAzuredevops", color: "#0078D7" }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "ASP.NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "SQL Server", icon: "SiMicrosoftsqlserver", color: "#CC2927" },
          { name: "Azure Functions", icon: "SiMicrosoftazure", color: "#0078D4" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "App Center", icon: "SiMicrosoft", color: "#5E5E5E" },
          { name: "Xamarin Test Cloud", icon: "SiXamarin", color: "#3498DB" },
          { name: "NUnit", icon: "SiDotnet", color: "#512BD4" },
          { name: "Git", icon: "SiGit", color: "#F05032" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Code Reusability",
        description: "Share up to 90% of code between iOS, Android, and Windows apps",
        icon: "Copy"
      },
      {
        title: "Native Performance",
        description: "Compiles to native code for full native performance and capabilities",
        icon: "Zap"
      },
      {
        title: ".NET Ecosystem",
        description: "Leverage existing .NET skills, libraries, and Azure integration",
        icon: "Package"
      },
      {
        title: "Microsoft Support",
        description: "Backed by Microsoft with excellent tools, documentation, and support",
        icon: "Award"
      },
      {
        title: "Enterprise Ready",
        description: "Perfect for enterprises already using Microsoft technologies",
        icon: "Building"
      },
      {
        title: "Fast Development",
        description: "Rapid development with shared code and Hot Reload feature",
        icon: "Rocket"
      }
    ],
    industries: [
      {
        name: "Enterprise",
        applications: ["Business apps", "Employee tools", "Internal systems", "Field service"]
      },
      {
        name: "Healthcare",
        applications: ["Patient apps", "Medical records", "Healthcare portals", "Clinical tools"]
      },
      {
        name: "Finance",
        applications: ["Banking apps", "Investment tools", "Insurance apps", "Financial services"]
      },
      {
        name: "Retail",
        applications: ["POS systems", "Inventory apps", "Customer apps", "Store management"]
      },
      {
        name: "Manufacturing",
        applications: ["Production tracking", "Quality control", "Warehouse management", "Supply chain"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and architecture",
        deliverables: ["Requirements analysis", "Architecture design", "Shared code strategy", "UI/UX design", "Project plan"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["Visual Studio setup", "Xamarin project", "Shared libraries", "Azure setup", "CI/CD pipeline"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "App implementation",
        deliverables: ["Shared business logic", "Xamarin.Forms UI", "Platform-specific code", "Azure integration", "Features"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "UI tests", "Device testing", "Performance optimization", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Store submission",
        deliverables: ["App Store submission", "Play Store submission", "App Center distribution", "Monitoring", "Documentation"]
      }
    ],
    faq: [
      {
        question: "How does Xamarin compare to React Native or Flutter?",
        answer: "Xamarin compiles to native code for true native performance. It's ideal for enterprises using .NET/Microsoft stack. React Native/Flutter have larger communities. Choose Xamarin if you're invested in Microsoft ecosystem."
      },
      {
        question: "Can Xamarin apps access platform-specific features?",
        answer: "Yes! Xamarin provides full access to all native iOS and Android APIs. You can use any platform-specific feature while sharing business logic across platforms."
      },
      {
        question: "Is Xamarin being replaced by .NET MAUI?",
        answer: ".NET MAUI is the evolution of Xamarin.Forms with improvements. We develop in both Xamarin and MAUI depending on project requirements and timeline. Both are supported by Microsoft."
      },
      {
        question: "Do we need to know iOS/Android development?",
        answer: "Not necessary! If you know C#, you can build Xamarin apps. Platform-specific knowledge helps for customizations, but Xamarin.Forms handles most UI needs with shared code."
      },
      {
        question: "What about Xamarin development costs?",
        answer: "Xamarin reduces costs by sharing code across platforms - develop once, deploy everywhere. Initial development is similar to native, but maintenance costs are significantly lower."
      }
    ],
    relatedTechnologies: [
      { name: ".NET", slug: "dotnet" },
      { name: "C#", slug: "csharp" },
      { name: "Azure", slug: "azure" },
      { name: ".NET MAUI", slug: "maui" }
    ],
    metrics: [
      { value: 15, suffix: "+", label: "Xamarin Developers", description: "Expert Xamarin development team" },
      { value: 69, suffix: "+", label: "Apps Delivered", description: "Successfully published applications" },
      { value: 95, suffix: "%", label: "Client Satisfaction", description: "High-quality mobile solutions" }
    ]
  },

  // PHP
  {
    id: "14",
    slug: "php",
    name: "PHP",
    category: "Backend Development",
    tagline: "Server-Side Scripting for the Web",
    hero: {
      title: "PHP Development Services",
      description: "Build dynamic websites and web applications with PHP. The most widely-used server-side language powering millions of websites worldwide.",
      ctaText: "Develop with PHP",
      image: "/technologies/php.jpg"
    },
    overview: "PHP is the most popular server-side scripting language, powering over 77% of websites including WordPress, Facebook, and Wikipedia. At Arka Infotech, our PHP developers create robust web applications, REST APIs, and enterprise systems using modern PHP practices. From simple websites to complex web applications, PHP's flexibility, extensive framework ecosystem (Laravel, Symfony, CodeIgniter), and massive community make it a reliable choice. We develop clean, secure, and scalable PHP applications following modern standards (PSR, Composer, OOP) for optimal performance and maintainability.",
    useCases: [
      {
        title: "Web Applications",
        description: "Dynamic websites, portals, and web-based business applications",
        icon: "Globe"
      },
      {
        title: "E-commerce Platforms",
        description: "Online stores, marketplaces, and shopping cart systems",
        icon: "ShoppingCart"
      },
      {
        title: "Content Management",
        description: "Custom CMS, WordPress sites, and content-heavy platforms",
        icon: "FileText"
      },
      {
        title: "RESTful APIs",
        description: "Backend APIs for mobile apps and SPAs",
        icon: "Workflow"
      }
    ],
    keyFeatures: [
      "Easy to learn and deploy",
      "Cross-platform (Linux, Windows, macOS)",
      "Extensive framework ecosystem",
      "Database support (MySQL, PostgreSQL, MongoDB)",
      "Large community and resources",
      "Modern features (PHP 8+)",
      "Composer package manager",
      "OOP and functional programming",
      "Built-in web server",
      "Excellent hosting support"
    ],
    techStack: [
      {
        category: "Frameworks",
        items: [
          { name: "Laravel", icon: "SiLaravel", color: "#FF2D20" },
          { name: "Symfony", icon: "SiSymfony", color: "#000000" },
          { name: "CodeIgniter", icon: "SiCodeigniter", color: "#EF4223" },
          { name: "Yii", icon: "SiYii", color: "#0073BB" }
        ]
      },
      {
        category: "CMS",
        items: [
          { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
          { name: "Drupal", icon: "SiDrupal", color: "#0678BE" },
          { name: "Joomla", icon: "SiJoomla", color: "#5091CD" },
          { name: "Magento", icon: "SiMagento", color: "#EE672F" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Composer", icon: "SiComposer", color: "#885630" },
          { name: "PHPUnit", icon: "SiPhp", color: "#777BB4" },
          { name: "Xdebug", icon: "SiPhp", color: "#777BB4" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Widely Used",
        description: "Powers 77% of websites - WordPress, Facebook, Wikipedia all use PHP",
        icon: "TrendingUp"
      },
      {
        title: "Easy to Deploy",
        description: "Works on any web hosting with simple deployment and configuration",
        icon: "Upload"
      },
      {
        title: "Cost-Effective",
        description: "Open-source with affordable hosting makes PHP very cost-effective",
        icon: "DollarSign"
      },
      {
        title: "Rich Ecosystem",
        description: "Thousands of frameworks, libraries, and CMS platforms available",
        icon: "Package"
      },
      {
        title: "Large Talent Pool",
        description: "Easy to find experienced PHP developers worldwide",
        icon: "Users"
      },
      {
        title: "Modern PHP",
        description: "PHP 8+ brings modern features like JIT compiler, attributes, and strong typing",
        icon: "Code"
      }
    ],
    industries: [
      {
        name: "E-commerce",
        applications: ["Online stores", "Marketplaces", "Payment systems", "Shopping platforms"]
      },
      {
        name: "Publishing",
        applications: ["News sites", "Blogs", "Content platforms", "Digital magazines"]
      },
      {
        name: "SaaS",
        applications: ["Web applications", "Cloud platforms", "Business tools", "APIs"]
      },
      {
        name: "Enterprise",
        applications: ["Business applications", "Portals", "Intranets", "CRM systems"]
      },
      {
        name: "Education",
        applications: ["Learning platforms", "School portals", "Course management", "Student systems"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and architecture",
        deliverables: ["Requirements doc", "Architecture design", "Framework selection", "Database design", "Timeline"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Environment configuration",
        deliverables: ["Development environment", "Version control", "Composer setup", "Database setup", "Server config"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Feature implementation",
        deliverables: ["Backend logic", "Database schema", "API endpoints", "Frontend integration", "Business logic"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "Security testing", "Performance optimization", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production launch",
        deliverables: ["Server deployment", "SSL setup", "Database migration", "Monitoring", "Documentation"]
      }
    ],
    faq: [
      {
        question: "Is PHP still relevant in 2024?",
        answer: "Absolutely! PHP powers 77% of websites and continues evolving. Modern PHP (7.4+, 8.x) is fast, typed, and has excellent frameworks like Laravel. It's not going anywhere."
      },
      {
        question: "How does PHP compare to Node.js?",
        answer: "PHP excels at traditional web applications and has mature ecosystem. Node.js is better for real-time apps. PHP has easier hosting and larger talent pool. Both are excellent choices depending on requirements."
      },
      {
        question: "Is PHP secure?",
        answer: "Yes, when following best practices. We implement input validation, prepared statements, CSRF protection, and regular updates. Modern frameworks like Laravel have security features built-in."
      },
      {
        question: "Can PHP handle high traffic?",
        answer: "Yes! Facebook and Wikipedia use PHP at massive scale. With proper architecture (caching, load balancing, database optimization), PHP handles high traffic excellently."
      },
      {
        question: "Should we use a PHP framework?",
        answer: "Yes, for most projects. Frameworks like Laravel provide structure, security, and productivity. Raw PHP is fine for very simple sites, but frameworks accelerate development significantly."
      }
    ],
    relatedTechnologies: [
      { name: "Laravel", slug: "laravel" },
      { name: "MySQL", slug: "mysql" },
      { name: "WordPress", slug: "wordpress" },
      { name: "Symfony", slug: "symfony" }
    ],
    metrics: [
      { value: 14, suffix: "+", label: "PHP Engineers", description: "Specialized PHP development team" },
      { value: 76, suffix: "+", label: "Projects Completed", description: "Production-ready applications" },
      { value: 98, suffix: "%", label: "Uptime", description: "Reliable and stable systems" }
    ]
  },

  // Java
  {
    id: "15",
    slug: "java",
    name: "Java",
    category: "Backend Development",
    tagline: "Enterprise-Grade Application Development",
    hero: {
      title: "Java Development Services",
      description: "Build robust, scalable enterprise applications with Java. The most popular language for large-scale systems, Android apps, and enterprise software.",
      ctaText: "Develop with Java",
      image: "/technologies/java.jpg"
    },
    overview: "Java is one of the world's most popular programming languages, known for its 'write once, run anywhere' philosophy and enterprise-grade capabilities. At Arka Infotech, our Java developers create high-performance applications ranging from Android apps to large-scale enterprise systems. With frameworks like Spring Boot for backend, Android SDK for mobile, and a vast ecosystem of libraries, Java powers millions of applications worldwide. We leverage Java's robustness, scalability, and security features to build applications that handle complex business logic and high transaction volumes.",
    useCases: [
      {
        title: "Enterprise Applications",
        description: "Large-scale business systems, ERP, and enterprise software",
        icon: "Building"
      },
      {
        title: "Android Applications",
        description: "Native Android mobile apps for phones and tablets",
        icon: "Smartphone"
      },
      {
        title: "Web Applications",
        description: "Backend services, REST APIs, and microservices",
        icon: "Globe"
      },
      {
        title: "Big Data",
        description: "Data processing with Hadoop, Spark, and enterprise analytics",
        icon: "Database"
      }
    ],
    keyFeatures: [
      "Platform independent (JVM)",
      "Object-oriented programming",
      "Robust and secure",
      "Multithreading support",
      "Automatic memory management",
      "Rich API and libraries",
      "Strong typing",
      "Excellent performance",
      "Mature ecosystem",
      "Enterprise support"
    ],
    techStack: [
      {
        category: "Frameworks",
        items: [
          { name: "Spring Boot", icon: "SiSpring", color: "#6DB33F" },
          { name: "Spring", icon: "SiSpring", color: "#6DB33F" },
          { name: "Hibernate", icon: "SiHibernate", color: "#59666C" },
          { name: "Jakarta EE", icon: "SiOpenjdk", color: "#007396" }
        ]
      },
      {
        category: "Build Tools",
        items: [
          { name: "Maven", icon: "SiApachemaven", color: "#C71A36" },
          { name: "Gradle", icon: "SiGradle", color: "#02303A" },
          { name: "JUnit", icon: "SiJunit", color: "#25A162" },
          { name: "Jenkins", icon: "SiJenkins", color: "#D24939" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "Oracle", icon: "SiOracle", color: "#F80000" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" }
        ]
      },
      {
        category: "Microservices",
        items: [
          { name: "Spring Cloud", icon: "SiSpring", color: "#6DB33F" },
          { name: "Apache Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Enterprise Standard",
        description: "Industry standard for enterprise applications with proven reliability",
        icon: "Award"
      },
      {
        title: "Platform Independent",
        description: "Write once, run anywhere - works on any platform with JVM",
        icon: "Globe"
      },
      {
        title: "Scalability",
        description: "Handles massive scale - from startups to Fortune 500 companies",
        icon: "TrendingUp"
      },
      {
        title: "Security",
        description: "Built-in security features for enterprise-grade applications",
        icon: "Shield"
      },
      {
        title: "Rich Ecosystem",
        description: "Thousands of libraries, frameworks, and tools available",
        icon: "Package"
      },
      {
        title: "Strong Community",
        description: "Huge community with extensive resources and support",
        icon: "Users"
      }
    ],
    industries: [
      {
        name: "Enterprise",
        applications: ["ERP systems", "CRM platforms", "Business applications", "Enterprise portals"]
      },
      {
        name: "Finance",
        applications: ["Banking systems", "Trading platforms", "Payment processing", "Financial services"]
      },
      {
        name: "E-commerce",
        applications: ["Online stores", "Marketplaces", "Inventory systems", "Order management"]
      },
      {
        name: "Healthcare",
        applications: ["Hospital management", "Medical records", "Healthcare platforms", "Patient portals"]
      },
      {
        name: "Telecom",
        applications: ["Billing systems", "Network management", "Customer portals", "Service platforms"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and architecture",
        deliverables: ["Requirements analysis", "System architecture", "Technology selection", "Database design", "Project roadmap"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["Project structure", "Maven/Gradle setup", "Spring Boot config", "Database setup", "CI/CD pipeline"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Implementation",
        deliverables: ["Backend services", "Business logic", "REST APIs", "Database integration", "Security implementation"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "Load testing", "Security testing", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production release",
        deliverables: ["Server deployment", "Database migration", "Performance tuning", "Monitoring", "Documentation"]
      }
    ],
    faq: [
      {
        question: "Is Java still relevant with newer languages?",
        answer: "Absolutely! Java remains the #1 choice for enterprise applications. Major companies like Amazon, Google, and banks rely on Java. It continues evolving with regular updates and new features."
      },
      {
        question: "Java vs Kotlin for Android?",
        answer: "Kotlin is now preferred for new Android apps due to modern syntax and null safety. However, Java still powers millions of Android apps and both work great. Kotlin is 100% interoperable with Java."
      },
      {
        question: "How does Java compare to Python or Node.js?",
        answer: "Java excels at large enterprise applications with its strong typing and performance. Python is better for data science. Node.js for real-time apps. Java's robustness makes it ideal for complex business systems."
      },
      {
        question: "Is Java difficult to learn?",
        answer: "Java has a learning curve due to verbosity and OOP concepts. However, its structure makes large codebases manageable. With proper training, developers become productive in 2-3 months."
      },
      {
        question: "What about Java performance?",
        answer: "Modern Java (11+) has excellent performance with JIT compilation. For most applications, Java performance is comparable to compiled languages like C++, while being safer and more productive."
      }
    ],
    relatedTechnologies: [
      { name: "Spring Boot", slug: "spring" },
      { name: "Kotlin", slug: "kotlin" },
      { name: "Android", slug: "android" },
      { name: "Microservices", slug: "microservices" }
    ],
    metrics: [
      { value: 11, suffix: "+", label: "Java Engineers", description: "Specialized Java development team" },
      { value: 65, suffix: "+", label: "Projects Completed", description: "Production-ready applications" },
      { value: 98, suffix: "%", label: "Uptime", description: "Reliable and stable systems" }
    ]
  },

  // Ruby on Rails
  {
    id: "16",
    slug: "ruby-on-rails",
    name: "Ruby on Rails",
    category: "Backend Development",
    tagline: "Web Development That Doesn't Hurt",
    hero: {
      title: "Ruby on Rails Development Services",
      description: "Build web applications faster with Ruby on Rails. The framework that revolutionized web development with convention over configuration.",
      ctaText: "Build with Rails",
      image: "/technologies/rails.jpg"
    },
    overview: "Ruby on Rails is a powerful web application framework known for its developer productivity and elegant code. At Arka Infotech, our Rails developers build web applications, APIs, and SaaS platforms using Rails' convention-over-configuration philosophy. Rails powers successful companies like GitHub, Shopify, Airbnb, and Basecamp. With its 'batteries included' approach, strong conventions, and vibrant community, Rails accelerates development while maintaining code quality. We leverage Rails' scaffolding, Active Record ORM, and extensive gem ecosystem to deliver applications quickly without sacrificing quality.",
    useCases: [
      {
        title: "SaaS Platforms",
        description: "Multi-tenant SaaS applications with subscriptions and user management",
        icon: "Cloud"
      },
      {
        title: "E-commerce",
        description: "Online stores with Spree Commerce or custom implementations",
        icon: "ShoppingCart"
      },
      {
        title: "MVPs & Startups",
        description: "Rapid prototyping and MVPs for startups and new products",
        icon: "Rocket"
      },
      {
        title: "Web Applications",
        description: "Full-featured web apps with complex business logic",
        icon: "Globe"
      }
    ],
    keyFeatures: [
      "Convention over configuration",
      "Don't Repeat Yourself (DRY)",
      "Active Record ORM",
      "RESTful architecture",
      "Built-in testing framework",
      "Database migrations",
      "Asset pipeline",
      "Action Cable for WebSockets",
      "Active Storage for uploads",
      "Rich ecosystem (gems)"
    ],
    techStack: [
      {
        category: "Core",
        items: [
          { name: "Ruby on Rails", icon: "SiRubyonrails", color: "#CC0000" },
          { name: "Ruby", icon: "SiRuby", color: "#CC342D" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" }
        ]
      },
      {
        category: "Frontend",
        items: [
          { name: "Hotwire", icon: "SiRubyonrails", color: "#CC0000" },
          { name: "Turbo", icon: "SiRubyonrails", color: "#CC0000" },
          { name: "Stimulus", icon: "SiRubyonrails", color: "#CC0000" },
          { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" }
        ]
      },
      {
        category: "Testing",
        items: [
          { name: "RSpec", icon: "SiRspec", color: "#CC0000" },
          { name: "Capybara", icon: "SiRuby", color: "#CC342D" },
          { name: "FactoryBot", icon: "SiRuby", color: "#CC342D" },
          { name: "SimpleCov", icon: "SiRuby", color: "#CC342D" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { name: "Heroku", icon: "SiHeroku", color: "#430098" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Capistrano", icon: "SiRuby", color: "#CC342D" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Rapid Development",
        description: "Build features 30-40% faster than other frameworks with Rails conventions",
        icon: "Rocket"
      },
      {
        title: "Developer Happiness",
        description: "Clean, readable code and excellent conventions make development enjoyable",
        icon: "Smile"
      },
      {
        title: "Proven Success",
        description: "Powers GitHub, Shopify, Airbnb, Stripe - proven at massive scale",
        icon: "Award"
      },
      {
        title: "Full-Stack Solution",
        description: "Everything included - ORM, routing, testing, asset pipeline, and more",
        icon: "Package"
      },
      {
        title: "Great for Startups",
        description: "Perfect for MVPs and rapid iteration with quick time-to-market",
        icon: "TrendingUp"
      },
      {
        title: "Strong Community",
        description: "Active community with thousands of gems and excellent documentation",
        icon: "Users"
      }
    ],
    industries: [
      {
        name: "SaaS",
        applications: ["Cloud platforms", "Subscription services", "Business tools", "Collaboration software"]
      },
      {
        name: "E-commerce",
        applications: ["Online stores", "Marketplaces", "B2C platforms", "Subscription boxes"]
      },
      {
        name: "Startups",
        applications: ["MVPs", "Product prototypes", "Web apps", "API backends"]
      },
      {
        name: "Social",
        applications: ["Social networks", "Community platforms", "Content sharing", "Messaging apps"]
      },
      {
        name: "Fintech",
        applications: ["Payment platforms", "Financial dashboards", "Accounting tools", "Banking apps"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and design",
        deliverables: ["Requirements doc", "Database schema", "API design", "UI mockups", "Sprint planning"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Rails project initialization",
        deliverables: ["Rails app setup", "Database config", "Authentication", "Testing framework", "CI/CD"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Feature implementation",
        deliverables: ["Models & migrations", "Controllers & routes", "Views & UI", "API endpoints", "Business logic"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["RSpec tests", "Integration tests", "Feature tests", "Performance optimization", "Security audit"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production launch",
        deliverables: ["Heroku/AWS deployment", "Database setup", "Monitoring", "Performance tuning", "Documentation"]
      }
    ],
    faq: [
      {
        question: "Is Rails still relevant with newer frameworks?",
        answer: "Yes! Rails continues evolving with Hotwire, better performance, and modern features. Major companies still choose Rails for productivity. GitHub, Shopify, and Basecamp use Rails at scale."
      },
      {
        question: "How does Rails compare to Laravel or Django?",
        answer: "Rails pioneered many conventions others copied. Laravel (PHP) has similar philosophy. Django (Python) is more explicit. Rails excels at developer productivity and has the most mature ecosystem."
      },
      {
        question: "Is Ruby/Rails slow?",
        answer: "Modern Rails with proper optimization (caching, background jobs, CDN) handles high traffic well. GitHub and Shopify serve millions. For most apps, Rails performance is excellent."
      },
      {
        question: "Can Rails handle enterprise applications?",
        answer: "Absolutely! While known for startups, Rails powers enterprise apps too. Proper architecture, background jobs, and caching make Rails scale. GitHub is one of the largest Rails apps."
      },
      {
        question: "Should we use Rails for new projects in 2024?",
        answer: "Yes, especially for MVPs, SaaS, and web apps where rapid development matters. Rails' productivity and Hotwire (modern real-time features) make it an excellent choice for modern web apps."
      }
    ],
    relatedTechnologies: [
      { name: "Ruby", slug: "ruby" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "React", slug: "react" },
      { name: "Hotwire", slug: "hotwire" }
    ],
    metrics: [
      { value: 14, suffix: "+", label: "Ruby on Rails Engineers", description: "Specialized Ruby on Rails development team" },
      { value: 62, suffix: "+", label: "Projects Completed", description: "Production-ready applications" },
      { value: 98, suffix: "%", label: "Uptime", description: "Reliable and stable systems" }
    ]
  },

  // .NET (DotNet)
  {
    id: "17",
    slug: "dotnet",
    name: ".NET",
    category: "Backend Development",
    tagline: "Modern, Cross-Platform Development",
    hero: {
      title: ".NET Development Services",
      description: "Build powerful applications with .NET. Microsoft's comprehensive framework for web, desktop, mobile, and cloud applications.",
      ctaText: "Develop with .NET",
      image: "/technologies/dotnet.jpg"
    },
    overview: ".NET is Microsoft's powerful, open-source developer platform for building various types of applications. At Arka Infotech, our .NET developers create enterprise applications, web services, desktop software, and mobile apps using .NET's vast ecosystem. With .NET Core/.NET 5+, the platform is now cross-platform (Windows, macOS, Linux), high-performance, and modern. We leverage ASP.NET Core for web development, Entity Framework for data access, and Azure integration to deliver scalable, secure applications that meet enterprise standards.",
    useCases: [
      {
        title: "Enterprise Applications",
        description: "Large-scale business applications with complex requirements",
        icon: "Building"
      },
      {
        title: "Web Applications",
        description: "ASP.NET Core web apps and REST APIs",
        icon: "Globe"
      },
      {
        title: "Desktop Applications",
        description: "Windows desktop apps with WPF or WinForms",
        icon: "Monitor"
      },
      {
        title: "Cloud Services",
        description: "Microservices and cloud-native apps on Azure",
        icon: "Cloud"
      }
    ],
    metrics: [
      { value: 12, suffix: "+", label: "Android Developers", description: "Certified Android experts" },
      { value: 60, suffix: "+", label: "Apps Published", description: "Live on Google Play Store" },
      { value: 4.5, suffix: "+", label: "Average Rating", description: "High user satisfaction scores" }
    ],
    keyFeatures: [
      "Cross-platform (Windows, Linux, macOS)",
      "High performance",
      "Modern C# language",
      "ASP.NET Core framework",
      "Entity Framework ORM",
      "Built-in dependency injection",
      "Azure integration",
      "Strong typing and safety",
      "Excellent tooling (Visual Studio)",
      "Enterprise support"
    ],
    techStack: [
      {
        category: "Frameworks",
        items: [
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "ASP.NET Core", icon: "SiDotnet", color: "#512BD4" },
          { name: "Entity Framework", icon: "SiDotnet", color: "#512BD4" },
          { name: "Blazor", icon: "SiBlazor", color: "#512BD4" }
        ]
      },
      {
        category: "Languages",
        items: [
          { name: "C#", icon: "SiCsharp", color: "#239120" },
          { name: "F#", icon: "SiFsharp", color: "#378BBA" },
          { name: "VB.NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" }
        ]
      },
      {
        category: "Cloud & Databases",
        items: [
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "SQL Server", icon: "SiMicrosoftsqlserver", color: "#CC2927" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Visual Studio", icon: "SiVisualstudio", color: "#5C2D91" },
          { name: "NuGet", icon: "SiNuget", color: "#004880" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Azure DevOps", icon: "SiAzuredevops", color: "#0078D7" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Microsoft Backing",
        description: "Full support from Microsoft with regular updates and long-term commitment",
        icon: "Award"
      },
      {
        title: "Cross-Platform",
        description: ".NET Core runs on Windows, Linux, and macOS with same codebase",
        icon: "Globe"
      },
      {
        title: "High Performance",
        description: "Among the fastest frameworks - beats Node.js and Java in many benchmarks",
        icon: "Zap"
      },
      {
        title: "Enterprise-Ready",
        description: "Perfect for large organizations with security, scalability, and support needs",
        icon: "Building"
      },
      {
        title: "Complete Ecosystem",
        description: "Everything needed - web, desktop, mobile, cloud, IoT all from one platform",
        icon: "Package"
      },
      {
        title: "Modern Language",
        description: "C# is constantly evolving with modern features and excellent tooling",
        icon: "Code"
      }
    ],
    industries: [
      {
        name: "Enterprise",
        applications: ["Business systems", "ERP solutions", "Enterprise portals", "Internal tools"]
      },
      {
        name: "Finance",
        applications: ["Banking systems", "Trading platforms", "Insurance apps", "Payment systems"]
      },
      {
        name: "Healthcare",
        applications: ["Hospital systems", "Medical software", "Patient portals", "Healthcare platforms"]
      },
      {
        name: "E-commerce",
        applications: ["Online stores", "B2B platforms", "Marketplaces", "Payment processing"]
      },
      {
        name: "Gaming",
        applications: ["Game servers", "Unity game development", "Gaming platforms", "Game engines"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and architecture",
        deliverables: ["Requirements analysis", "Solution architecture", "Technology selection", "Database design", "Project plan"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["Visual Studio solution", ".NET project setup", "NuGet packages", "Database setup", "CI/CD pipeline"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Implementation",
        deliverables: ["Backend services", "Business logic", "API development", "Database layer", "Frontend integration"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests (xUnit)", "Integration tests", "Performance testing", "Security audit", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production release",
        deliverables: ["Azure deployment", "IIS configuration", "Database migration", "Monitoring setup", "Documentation"]
      }
    ],
    faq: [
      {
        question: "Is .NET Core different from .NET Framework?",
        answer: ".NET Core is the modern, cross-platform evolution. .NET Framework is Windows-only legacy version. As of .NET 5+, it's just called '.NET' and is cross-platform. We recommend .NET 6+ for all new projects."
      },
      {
        question: "Can .NET run on Linux?",
        answer: "Yes! .NET Core/.NET 5+ is fully cross-platform and runs excellently on Linux, Windows, and macOS. Many companies deploy .NET applications on Linux servers for cost savings."
      },
      {
        question: "How does .NET performance compare to others?",
        answer: ".NET is extremely fast - often beating Node.js, Python, and Java in benchmarks. ASP.NET Core is one of the fastest web frameworks available, making it excellent for high-performance applications."
      },
      {
        question: "Is .NET only for enterprise?",
        answer: "No! While excellent for enterprise, .NET works great for startups and SMBs too. Being open-source and free, it's cost-effective for any project size. The tooling and productivity benefits apply to all."
      },
      {
        question: "Do we need Windows servers for .NET?",
        answer: "Not anymore! .NET Core/.NET 5+ runs on Linux containers and servers. Many companies host .NET apps on Linux for better costs. Azure also provides excellent hosting options."
      }
    ],
    relatedTechnologies: [
      { name: "C#", slug: "csharp" },
      { name: "Azure", slug: "azure" },
      { name: "ASP.NET", slug: "aspnet" },
      { name: "Blazor", slug: "blazor" }
    ]
  },

  // JavaScript
  {
    id: "18",
    slug: "javascript",
    name: "JavaScript",
    category: "Full Stack Development",
    tagline: "The Language of the Web",
    hero: {
      title: "JavaScript Development Services",
      description: "Build dynamic web applications with JavaScript. The world's most popular programming language for frontend and backend development.",
      ctaText: "Develop with JavaScript",
      image: "/technologies/javascript.jpg"
    },
    overview: "JavaScript is the most widely-used programming language, powering interactive websites, mobile apps, desktop software, and server-side applications. At Arka Infotech, our JavaScript developers create full-stack applications using modern ES6+ features, frameworks like React, Vue, Angular for frontend, and Node.js for backend. JavaScript's versatility allows us to build everything from simple websites to complex web applications using a single language. We leverage JavaScript's vast ecosystem of npm packages, tools, and frameworks to deliver solutions that are modern, maintainable, and high-performing.",
    useCases: [
      {
        title: "Web Applications",
        description: "Interactive websites and single-page applications",
        icon: "Globe"
      },
      {
        title: "Backend Services",
        description: "Server-side applications with Node.js",
        icon: "Server"
      },
      {
        title: "Mobile Apps",
        description: "Cross-platform mobile apps with React Native",
        icon: "Smartphone"
      },
      {
        title: "Desktop Applications",
        description: "Cross-platform desktop apps with Electron",
        icon: "Monitor"
      }
    ],
    metrics: [
      { value: 18, suffix: "+", label: "React Developers", description: "Expert frontend engineers" },
      { value: 90, suffix: "+", label: "Web Apps Built", description: "Modern React applications" },
      { value: 99, suffix: "%", label: "Performance Score", description: "Optimized applications" }
    ],
    keyFeatures: [
      "Runs everywhere (browser, server, mobile)",
      "Massive ecosystem (npm)",
      "Modern ES6+ syntax",
      "Asynchronous programming",
      "Dynamic and flexible",
      "Event-driven architecture",
      "JSON-native",
      "First-class functions",
      "Prototype-based OOP",
      "Active community"
    ],
    techStack: [
      {
        category: "Frontend Frameworks",
        items: [
          { name: "React", icon: "SiReact", color: "#61DAFB" },
          { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
          { name: "Angular", icon: "SiAngular", color: "#DD0031" },
          { name: "Svelte", icon: "SiSvelte", color: "#FF3E00" }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "Express", icon: "SiExpress", color: "#000000" },
          { name: "NestJS", icon: "SiNestjs", color: "#E0234E" },
          { name: "Deno", icon: "SiDeno", color: "#000000" }
        ]
      },
      {
        category: "Tools & Build",
        items: [
          { name: "Webpack", icon: "SiWebpack", color: "#8DD6F9" },
          { name: "Vite", icon: "SiVite", color: "#646CFF" },
          { name: "npm", icon: "SiNpm", color: "#CB3837" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" }
        ]
      },
      {
        category: "Testing",
        items: [
          { name: "Jest", icon: "SiJest", color: "#C21325" },
          { name: "Mocha", icon: "SiMocha", color: "#8D6748" },
          { name: "Cypress", icon: "SiCypress", color: "#17202C" },
          { name: "Playwright", icon: "SiPlaywright", color: "#2EAD33" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Universal Language",
        description: "One language for frontend, backend, mobile, and desktop development",
        icon: "Globe"
      },
      {
        title: "Massive Ecosystem",
        description: "Millions of npm packages for any functionality imaginable",
        icon: "Package"
      },
      {
        title: "Easy to Learn",
        description: "Beginner-friendly syntax with gentle learning curve",
        icon: "BookOpen"
      },
      {
        title: "High Demand",
        description: "Most popular language with huge job market and community",
        icon: "TrendingUp"
      },
      {
        title: "Real-Time Capable",
        description: "Perfect for real-time applications with WebSockets and event-driven architecture",
        icon: "Zap"
      },
      {
        title: "Full-Stack JS",
        description: "Build entire applications with JavaScript from database to UI",
        icon: "Layers"
      }
    ],
    industries: [
      {
        name: "Web Development",
        applications: ["Websites", "Web apps", "SPAs", "Progressive Web Apps"]
      },
      {
        name: "SaaS",
        applications: ["Cloud platforms", "Business tools", "Dashboards", "APIs"]
      },
      {
        name: "E-commerce",
        applications: ["Online stores", "Shopping carts", "Product catalogs", "Payment systems"]
      },
      {
        name: "Real-Time",
        applications: ["Chat applications", "Live dashboards", "Collaboration tools", "Streaming platforms"]
      },
      {
        name: "Mobile",
        applications: ["Cross-platform apps", "Hybrid apps", "Mobile web apps", "PWAs"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Project requirements",
        deliverables: ["Requirements doc", "Architecture design", "Technology stack", "UI/UX mockups", "Timeline"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["Project scaffolding", "Package setup", "Build configuration", "Version control", "Development environment"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Implementation",
        deliverables: ["Frontend development", "Backend APIs", "Database integration", "Business logic", "Features"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "E2E tests", "Performance optimization", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production launch",
        deliverables: ["Build optimization", "Hosting setup", "CI/CD pipeline", "Monitoring", "Documentation"]
      }
    ],
    faq: [
      {
        question: "Should I use JavaScript or TypeScript?",
        answer: "For new projects, we recommend TypeScript. It adds type safety, catches errors early, and improves code quality. TypeScript compiles to JavaScript, so you get JavaScript's ecosystem with added safety."
      },
      {
        question: "Is JavaScript suitable for backend development?",
        answer: "Yes! Node.js makes JavaScript excellent for backend. It's fast, scalable, and allows full-stack development with one language. Companies like Netflix, PayPal, and Uber use Node.js at scale."
      },
      {
        question: "What about JavaScript performance?",
        answer: "Modern JavaScript engines (V8) are very fast. Node.js handles high concurrency well. For CPU-intensive tasks, we can use Worker Threads or pair JavaScript with other languages for specific needs."
      },
      {
        question: "Is JavaScript secure?",
        answer: "JavaScript itself is secure when following best practices. We implement input validation, HTTPS, CORS, CSP, and regular security audits. Modern frameworks also include security features by default."
      },
      {
        question: "Can JavaScript build mobile apps?",
        answer: "Yes! React Native, Ionic, and Capacitor allow building native-quality mobile apps with JavaScript. You can share code between web and mobile for faster development."
      }
    ],
    relatedTechnologies: [
      { name: "TypeScript", slug: "typescript" },
      { name: "Node.js", slug: "nodejs" },
      { name: "React", slug: "react" },
      { name: "Vue.js", slug: "vuejs" }
    ]
  },

  // MERN Stack
  {
    id: "19",
    slug: "mern",
    name: "MERN Stack",
    category: "Full Stack Development",
    tagline: "Full-Stack JavaScript Development",
    hero: {
      title: "MERN Stack Development Services",
      description: "Build modern web applications with MERN Stack. MongoDB, Express, React, and Node.js for full-stack JavaScript development.",
      ctaText: "Build with MERN",
      image: "/technologies/mern.jpg"
    },
    overview: "MERN Stack combines MongoDB, Express.js, React, and Node.js to create a powerful full-stack JavaScript development environment. At Arka Infotech, our MERN developers build scalable web applications using JavaScript across the entire stack - from database to frontend. This unified language approach accelerates development, simplifies deployment, and allows code reuse between frontend and backend. MERN is perfect for building modern SPAs, real-time applications, and dynamic web platforms with JSON data flow throughout the entire application architecture.",
    useCases: [
      {
        title: "Single Page Applications",
        description: "Dynamic SPAs with React frontend and Node.js backend",
        icon: "Layout"
      },
      {
        title: "Real-Time Applications",
        description: "Chat apps, dashboards, and collaborative tools",
        icon: "Zap"
      },
      {
        title: "Social Platforms",
        description: "Social networks, community platforms, and content sharing",
        icon: "Users"
      },
      {
        title: "E-commerce Solutions",
        description: "Online stores with modern UX and real-time updates",
        icon: "ShoppingCart"
      }
    ],
    keyFeatures: [
      "Full-stack JavaScript",
      "JSON everywhere",
      "React for dynamic UI",
      "Node.js high performance",
      "MongoDB flexibility",
      "Express.js simplicity",
      "Isomorphic code (reusable)",
      "Real-time capable",
      "Scalable architecture",
      "Active community"
    ],
    techStack: [
      {
        category: "Core Stack",
        items: [
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Express.js", icon: "SiExpress", color: "#000000" },
          { name: "React", icon: "SiReact", color: "#61DAFB" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" }
        ]
      },
      {
        category: "Additional Tools",
        items: [
          { name: "Redux", icon: "SiRedux", color: "#764ABC" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { name: "Socket.io", icon: "SiSocketdotio", color: "#010101" },
          { name: "JWT", icon: "SiJsonwebtokens", color: "#000000" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Vite", icon: "SiVite", color: "#646CFF" },
          { name: "npm", icon: "SiNpm", color: "#CB3837" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Vercel", icon: "SiVercel", color: "#000000" },
          { name: "MongoDB Atlas", icon: "SiMongodb", color: "#47A248" },
          { name: "Heroku", icon: "SiHeroku", color: "#430098" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Single Language",
        description: "Use JavaScript/TypeScript across the entire stack for consistency",
        icon: "Code"
      },
      {
        title: "Fast Development",
        description: "Rapid prototyping and development with unified stack",
        icon: "Rocket"
      },
      {
        title: "JSON Native",
        description: "Seamless data flow with JSON from database to frontend",
        icon: "Database"
      },
      {
        title: "Modern Stack",
        description: "Latest technologies with active development and community",
        icon: "TrendingUp"
      },
      {
        title: "Scalable",
        description: "Handles growth from MVP to enterprise-scale applications",
        icon: "BarChart"
      },
      {
        title: "Cost-Effective",
        description: "Open-source stack reduces licensing costs significantly",
        icon: "DollarSign"
      }
    ],
    industries: [
      {
        name: "Startups",
        applications: ["MVPs", "SaaS platforms", "Web apps", "Prototypes"]
      },
      {
        name: "Social Media",
        applications: ["Social networks", "Content platforms", "Community sites", "Messaging apps"]
      },
      {
        name: "E-commerce",
        applications: ["Online stores", "Marketplaces", "B2C platforms", "Shopping apps"]
      },
      {
        name: "Enterprise",
        applications: ["Dashboards", "Admin panels", "Internal tools", "Business apps"]
      },
      {
        name: "Real-Time",
        applications: ["Live dashboards", "Collaboration tools", "Chat applications", "Streaming platforms"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and design",
        deliverables: ["Requirements analysis", "System architecture", "Database schema", "API design", "UI/UX mockups"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["MongoDB setup", "Express API structure", "React app setup", "Authentication", "Development environment"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Feature implementation",
        deliverables: ["Backend APIs", "Database models", "React components", "State management", "Integration"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "E2E tests", "Performance optimization", "Security audit"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production launch",
        deliverables: ["MongoDB Atlas setup", "Node.js deployment", "React build deployment", "CI/CD", "Monitoring"]
      }
    ],
    faq: [
      {
        question: "Why MERN over MEAN stack?",
        answer: "React is more popular and flexible than Angular, with a gentler learning curve. React's component-based architecture and virtual DOM provide excellent performance. Both stacks are excellent; MERN is preferred for most modern web apps."
      },
      {
        question: "Is MongoDB suitable for all projects?",
        answer: "MongoDB is excellent for flexible schemas and rapid development. For complex relations, PostgreSQL/MySQL might be better. We can use PERN (Postgres instead of MongoDB) when relational data is critical."
      },
      {
        question: "Can MERN handle enterprise applications?",
        answer: "Yes! With proper architecture (microservices, caching, load balancing), MERN scales excellently. Companies like Netflix and LinkedIn use similar stacks at massive scale."
      },
      {
        question: "What about MERN Stack security?",
        answer: "We implement JWT authentication, input validation, HTTPS, CORS, rate limiting, and regular security audits. Express and MongoDB have good security practices when properly configured."
      },
      {
        question: "How long does MERN development take?",
        answer: "MERN accelerates development. Simple apps take 4-8 weeks, medium complexity 8-16 weeks, and large applications 16-32 weeks. Rapid prototyping is a key MERN advantage."
      }
    ],
    relatedTechnologies: [
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodejs" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "MEAN Stack", slug: "mean" }
    ],
    metrics: [
      { value: 22, suffix: "+", label: "Full-Stack Developers", description: "Expert MERN Stack engineers" },
      { value: 70, suffix: "+", label: "Apps Deployed", description: "End-to-end solutions" },
      { value: 3, suffix: "x", label: "Faster Development", description: "Single language across stack" }
    ]
  },

  // Shopify
  {
    id: "20",
    slug: "shopify",
    name: "Shopify",
    category: "E-commerce",
    tagline: "Build Your Online Store with Shopify",
    hero: {
      title: "Shopify Development Services",
      description: "Create beautiful, high-converting online stores with Shopify. The world's leading e-commerce platform powering over 4 million businesses.",
      ctaText: "Build Shopify Store",
      image: "/technologies/shopify.jpg"
    },
    overview: "Shopify is the world's most popular e-commerce platform, trusted by over 4 million businesses worldwide. At Arka Infotech, our Shopify developers create stunning online stores that convert visitors into customers. From theme customization to custom app development, payment integration to inventory management, we leverage Shopify's powerful ecosystem to build stores that scale. Whether you're launching a new store or migrating from another platform, we deliver Shopify solutions that drive sales, provide excellent user experiences, and grow with your business.",
    useCases: [
      {
        title: "Online Stores",
        description: "Product-based businesses selling physical or digital goods",
        icon: "ShoppingCart"
      },
      {
        title: "Dropshipping",
        description: "Dropshipping businesses with automated order fulfillment",
        icon: "Package"
      },
      {
        title: "Multi-Channel Selling",
        description: "Sell on website, social media, marketplaces simultaneously",
        icon: "Share2"
      },
      {
        title: "Subscription Services",
        description: "Recurring revenue with subscription products",
        icon: "RefreshCw"
      }
    ],
    metrics: [
      { value: 18, suffix: "+", label: "React Developers", description: "Expert frontend engineers" },
      { value: 90, suffix: "+", label: "Web Apps Built", description: "Modern React applications" },
      { value: 99, suffix: "%", label: "Performance Score", description: "Optimized applications" }
    ],
  },

  // WooCommerce
  {
    id: "21",
    slug: "woocommerce",
    name: "WooCommerce",
    category: "E-commerce",
    tagline: "WordPress E-commerce Made Easy",
    hero: {
      title: "WooCommerce Development Services",
      description: "Transform your WordPress site into a powerful online store with WooCommerce. The world's most popular e-commerce plugin powering 28% of all online stores.",
      ctaText: "Build WooCommerce Store",
      image: "/technologies/woocommerce.jpg"
    },
    overview: "WooCommerce is the most popular e-commerce solution, powering 28% of all online stores worldwide. At Arka Infotech, our WooCommerce developers create fully-featured online stores that integrate seamlessly with WordPress. With complete control, unlimited products, and thousands of extensions, WooCommerce is perfect for businesses wanting flexibility and ownership. We build WooCommerce stores that are customizable, scalable, and SEO-friendly, leveraging WordPress's content management power combined with robust e-commerce functionality.",
    useCases: [
      {
        title: "WordPress E-commerce",
        description: "Add e-commerce to existing WordPress sites",
        icon: "ShoppingCart"
      },
      {
        title: "Custom Online Stores",
        description: "Fully customizable stores with unique requirements",
        icon: "Store"
      },
      {
        title: "Content + Commerce",
        description: "Blogs or content sites selling products",
        icon: "FileText"
      },
      {
        title: "Membership Sites",
        description: "Sell digital products, courses, and memberships",
        icon: "Users"
      }
    ],
    keyFeatures: [
      "Open-source and free",
      "Seamless WordPress integration",
      "Unlimited products and orders",
      "800+ extensions available",
      "Complete control and ownership",
      "SEO-friendly by design",
      "Multiple payment gateways",
      "Flexible shipping options",
      "Content marketing capabilities",
      "Strong community support"
    ],
    techStack: [
      {
        category: "Core",
        items: [
          { name: "WooCommerce", icon: "SiWoo", color: "#96588A" },
          { name: "WordPress", icon: "SiWordpress", color: "#21759B" },
          { name: "PHP", icon: "SiPhp", color: "#777BB4" },
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" }
        ]
      },
      {
        category: "Frontend",
        items: [
          { name: "HTML/CSS", icon: "SiHtml5", color: "#E34F26" },
          { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
          { name: "jQuery", icon: "SiJquery", color: "#0769AD" },
          { name: "React", icon: "SiReact", color: "#61DAFB" }
        ]
      },
      {
        category: "Payment & Shipping",
        items: [
          { name: "Stripe", icon: "SiStripe", color: "#008CDD" },
          { name: "PayPal", icon: "SiPaypal", color: "#00457C" },
          { name: "WooCommerce Payments", icon: "SiWoo", color: "#96588A" },
          { name: "ShipStation", icon: "SiWoo", color: "#96588A" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "WP-CLI", icon: "SiWordpress", color: "#21759B" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Composer", icon: "SiComposer", color: "#885630" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Free & Open Source",
        description: "No platform fees - only pay for hosting and extensions you choose",
        icon: "DollarSign"
      },
      {
        title: "Complete Control",
        description: "Own your store, data, and customizations completely",
        icon: "Key"
      },
      {
        title: "WordPress Power",
        description: "Leverage WordPress's content management and SEO capabilities",
        icon: "Package"
      },
      {
        title: "Highly Customizable",
        description: "Unlimited customization with themes, plugins, and code",
        icon: "Code"
      },
      {
        title: "Cost-Effective",
        description: "Lower total cost of ownership compared to hosted platforms",
        icon: "TrendingDown"
      },
      {
        title: "SEO Advantage",
        description: "Built on WordPress, the best CMS for SEO",
        icon: "Search"
      }
    ],
    industries: [
      {
        name: "Content + Commerce",
        applications: ["Blogs with products", "Magazine stores", "Recipe sites", "Tutorial platforms"]
      },
      {
        name: "Small Business",
        applications: ["Local shops", "Handmade goods", "Specialty stores", "Service-based businesses"]
      },
      {
        name: "Digital Products",
        applications: ["Courses", "Ebooks", "Software", "Downloads"]
      },
      {
        name: "B2B Commerce",
        applications: ["Wholesale", "Bulk ordering", "Quote-based", "Trade portals"]
      },
      {
        name: "Niche Markets",
        applications: ["Custom products", "Specialty items", "Collectibles", "Unique offerings"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Store requirements",
        deliverables: ["Requirements doc", "Product catalog", "Store structure", "Extension needs", "Design mockups"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "WordPress and WooCommerce installation",
        deliverables: ["WordPress setup", "WooCommerce installation", "Theme selection", "SSL certificate", "Hosting optimization"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Customization and features",
        deliverables: ["Theme customization", "Product setup", "Payment gateways", "Shipping methods", "Extensions"]
      },
      {
        phase: "Phase 4",
        title: "Content & Testing",
        description: "Products and QA",
        deliverables: ["Product upload", "Content creation", "Testing", "Performance optimization", "Security hardening"]
      },
      {
        phase: "Phase 5",
        title: "Launch",
        description: "Store go-live",
        deliverables: ["Store launch", "SEO optimization", "Analytics setup", "Training", "Maintenance plan"]
      }
    ],
    faq: [
      {
        question: "Is WooCommerce really free?",
        answer: "WooCommerce plugin is free, but you need hosting ($10-50/month), domain ($10/year), SSL (often free), and optional paid extensions. Still more cost-effective than platform fees on Shopify."
      },
      {
        question: "WooCommerce vs Shopify - which is better?",
        answer: "WooCommerce: better for custom needs, content-heavy sites, lower long-term costs, complete control. Shopify: easier for beginners, fully hosted, better support. We recommend based on your specific needs."
      },
      {
        question: "Can WooCommerce handle large stores?",
        answer: "Yes! With proper hosting, caching, and optimization, WooCommerce handles thousands of products and high traffic. Many large stores run on WooCommerce successfully."
      },
      {
        question: "Do I need technical knowledge?",
        answer: "Basic WordPress knowledge helps, but not required. We set up everything and provide training. WooCommerce's admin panel is user-friendly for managing products and orders."
      },
      {
        question: "Can I migrate to WooCommerce from another platform?",
        answer: "Yes! We migrate from Shopify, Magento, custom solutions, or other platforms. Products, customers, and order history can be transferred with minimal downtime."
      }
    ],
    relatedTechnologies: [
      { name: "WordPress", slug: "wordpress" },
      { name: "PHP", slug: "php" },
      { name: "MySQL", slug: "mysql" },
      { name: "JavaScript", slug: "javascript" }
    ],
    metrics: [
      { value: 9, suffix: "+", label: "WooCommerce Experts", description: "Certified WooCommerce developers" },
      { value: 45, suffix: "+", label: "Stores Launched", description: "Successful e-commerce sites" },
      { value: 75, suffix: "%", label: "Sales Increase", description: "Average revenue growth" }
    ]
  },

  // MEAN Stack
  {
    id: "22",
    slug: "mean-stack",
    name: "MEAN Stack",
    category: "Full Stack Development",
    tagline: "Full-Stack JavaScript with Angular",
    hero: {
      title: "MEAN Stack Development Services",
      description: "Build enterprise-grade applications with MEAN Stack. MongoDB, Express, Angular, and Node.js for comprehensive full-stack development.",
      ctaText: "Build with MEAN",
      image: "/technologies/mean.jpg"
    },
    overview: "MEAN Stack combines MongoDB, Express.js, Angular, and Node.js to create a powerful full-stack JavaScript development framework ideal for enterprise applications. At Arka Infotech, our MEAN developers build robust, scalable web applications using JavaScript/TypeScript across the entire stack. Angular's structure and TypeScript make MEAN perfect for large teams and complex enterprise applications. We leverage MEAN's consistency, JSON data flow, and powerful tooling to deliver applications that are maintainable, testable, and performant at scale.",
    useCases: [
      {
        title: "Enterprise Applications",
        description: "Large-scale business apps with complex requirements",
        icon: "Building"
      },
      {
        title: "Real-Time Dashboards",
        description: "Admin panels and analytics dashboards with live data",
        icon: "BarChart"
      },
      {
        title: "SaaS Platforms",
        description: "Multi-tenant SaaS applications with enterprise features",
        icon: "Cloud"
      },
      {
        title: "Data-Heavy Apps",
        description: "Applications handling large datasets and complex workflows",
        icon: "Database"
      }
    ],
    metrics: [
      { value: 18, suffix: "+", label: "React Developers", description: "Expert frontend engineers" },
      { value: 90, suffix: "+", label: "Web Apps Built", description: "Modern React applications" },
      { value: 99, suffix: "%", label: "Performance Score", description: "Optimized applications" }
    ],
  },

  // Unity
  {
    id: "23",
    slug: "unity",
    name: "Unity",
    category: "Game Development",
    tagline: "Create Stunning Games & Experiences",
    hero: {
      title: "Unity Game Development Services",
      description: "Build immersive games and 3D experiences with Unity. The world's leading game development platform powering over 50% of all mobile games.",
      ctaText: "Create with Unity",
      image: "/technologies/unity.jpg"
    },
    overview: "Unity is the world's most popular game development platform, powering over 50% of mobile games and used across mobile, PC, console, VR, and AR. At Arka Infotech, our Unity developers create engaging games, interactive 3D experiences, simulations, and immersive AR/VR applications. Unity's powerful editor, C# scripting, cross-platform deployment, and vast asset store make it perfect for 2D/3D games and interactive content. We leverage Unity's real-time rendering, physics engine, and animation tools to deliver experiences that captivate users across all platforms.",
    useCases: [
      {
        title: "Mobile Games",
        description: "2D and 3D mobile games for iOS and Android",
        icon: "Smartphone"
      },
      {
        title: "PC & Console Games",
        description: "High-quality games for PC, PlayStation, Xbox, Nintendo",
        icon: "Gamepad2"
      },
      {
        title: "AR/VR Experiences",
        description: "Immersive augmented and virtual reality applications",
        icon: "Glasses"
      },
      {
        title: "Simulations & Training",
        description: "Educational simulations and professional training applications",
        icon: "GraduationCap"
      }
    ],
    keyFeatures: [
      "Cross-platform deployment",
      "Powerful visual editor",
      "C# scripting language",
      "Real-time 3D rendering",
      "Physics and animation",
      "Asset Store with 70,000+ assets",
      "AR/VR support",
      "2D and 3D capabilities",
      "Visual scripting (Bolt)",
      "Large community"
    ],
    techStack: [
      {
        category: "Core",
        items: [
          { name: "Unity Engine", icon: "SiUnity", color: "#000000" },
          { name: "C#", icon: "SiCsharp", color: "#239120" },
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "Unity Asset Store", icon: "SiUnity", color: "#000000" }
        ]
      },
      {
        category: "Graphics & Rendering",
        items: [
          { name: "Universal Render Pipeline", icon: "SiUnity", color: "#000000" },
          { name: "Shader Graph", icon: "SiUnity", color: "#000000" },
          { name: "Cinemachine", icon: "SiUnity", color: "#000000" },
          { name: "Post-Processing", icon: "SiUnity", color: "#000000" }
        ]
      },
      {
        category: "AR/VR",
        items: [
          { name: "ARKit", icon: "SiApple", color: "#000000" },
          { name: "ARCore", icon: "SiGoogle", color: "#4285F4" },
          { name: "Oculus SDK", icon: "SiOculus", color: "#1C1E20" },
          { name: "XR Interaction Toolkit", icon: "SiUnity", color: "#000000" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Visual Studio", icon: "SiVisualstudio", color: "#5C2D91" },
          { name: "Blender", icon: "SiBlender", color: "#F5792A" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Unity Cloud Build", icon: "SiUnity", color: "#000000" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Market Leader",
        description: "50%+ of mobile games use Unity - industry standard",
        icon: "Award"
      },
      {
        title: "Cross-Platform",
        description: "Build once, deploy to 25+ platforms including mobile, PC, console, VR",
        icon: "Globe"
      },
      {
        title: "Asset Store",
        description: "70,000+ ready-made assets, tools, and plugins save development time",
        icon: "Package"
      },
      {
        title: "Easy to Learn",
        description: "User-friendly editor and C# make Unity accessible to beginners",
        icon: "BookOpen"
      },
      {
        title: "AR/VR Ready",
        description: "First-class support for augmented and virtual reality",
        icon: "Glasses"
      },
      {
        title: "Huge Community",
        description: "Massive community with tutorials, forums, and resources",
        icon: "Users"
      }
    ],
    industries: [
      {
        name: "Gaming",
        applications: ["Mobile games", "PC games", "Console games", "Casual games"]
      },
      {
        name: "Education",
        applications: ["Training simulations", "Educational games", "Interactive learning", "Virtual labs"]
      },
      {
        name: "Architecture",
        applications: ["Visualizations", "Virtual tours", "Design reviews", "Client presentations"]
      },
      {
        name: "Automotive",
        applications: ["Car configurators", "Training simulators", "VR showrooms", "Product demos"]
      },
      {
        name: "Healthcare",
        applications: ["Medical simulations", "Surgical training", "Patient education", "Therapy applications"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Concept",
        description: "Game design and planning",
        deliverables: ["Game design document", "Art style", "Mechanics design", "Platform selection", "Technical specification"]
      },
      {
        phase: "Phase 2",
        title: "Prototyping",
        description: "Core mechanics and gameplay",
        deliverables: ["Unity project setup", "Core gameplay", "Prototype levels", "Basic UI", "Technical validation"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Full game production",
        deliverables: ["Level design", "Graphics & art", "Audio integration", "Gameplay features", "Multiplayer (if needed)"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Playtesting", "Bug fixing", "Performance optimization", "Balance tuning", "Platform testing"]
      },
      {
        phase: "Phase 5",
        title: "Launch",
        description: "Release and support",
        deliverables: ["Store submission", "Marketing assets", "Launch", "Analytics", "Post-launch support"]
      }
    ],
    faq: [
      {
        question: "Unity vs Unreal - which is better?",
        answer: "Unity is better for mobile games, 2D games, indie projects, and AR/VR. Unreal excels at high-end 3D graphics for PC/console AAA games. Unity has easier learning curve and better mobile performance."
      },
      {
        question: "Can Unity build AAA games?",
        answer: "Yes! Games like Hearthstone, Pokémon GO, and Hollow Knight use Unity. While Unreal is more common for AAA, Unity can absolutely create high-quality games with proper optimization."
      },
      {
        question: "Is Unity free?",
        answer: "Yes, Unity Personal is free for individuals and companies making less than $100K/year. Unity Plus ($399/year) and Unity Pro ($1,800/year) offer additional features for larger studios."
      },
      {
        question: "Do I need to know programming?",
        answer: "Basic C# knowledge helps significantly. Unity has visual scripting (Bolt) for beginners, but serious game development benefits from programming skills. We can handle the technical development."
      },
      {
        question: "How long does Unity game development take?",
        answer: "Simple mobile games: 2-4 months. Medium complexity: 4-8 months. Large projects: 8-18 months. Prototypes can be ready in weeks."
      }
    ],
    relatedTechnologies: [
      { name: "C#", slug: "csharp" },
      { name: ".NET", slug: "dotnet" },
      { name: "Unreal", slug: "unreal" },
      { name: "Blender", slug: "blender" }
    ],
    metrics: [
      { value: 9, suffix: "+", label: "Unity Developers", description: "Professional Unity game developers" },
      { value: 31, suffix: "+", label: "Games Released", description: "Published across platforms" },
      { value: 4.5, suffix: "+", label: "Average Rating", description: "High user engagement" }
    ]
  },

  // Golang
  {
    id: "24",
    slug: "golang",
    name: "Golang (Go)",
    category: "Backend Development",
    tagline: "Simple, Fast, Reliable Backend Development",
    hero: {
      title: "Golang Development Services",
      description: "Build high-performance backend systems with Go. Google's programming language designed for speed, simplicity, and scalability.",
      ctaText: "Develop with Go",
      image: "/technologies/golang.jpg"
    },
    overview: "Go (Golang) is Google's modern programming language designed for building fast, reliable, and efficient software. At Arka Infotech, our Go developers create high-performance backend services, microservices, APIs, and cloud-native applications. Go's simplicity, built-in concurrency, fast compilation, and excellent standard library make it perfect for scalable systems. We leverage Go's efficiency and performance to build services that handle high loads, from APIs and web services to distributed systems and DevOps tools.",
    useCases: [
      {
        title: "Microservices",
        description: "High-performance microservices and distributed systems",
        icon: "Boxes"
      },
      {
        title: "RESTful APIs",
        description: "Fast, scalable API backends with excellent performance",
        icon: "Workflow"
      },
      {
        title: "Cloud Services",
        description: "Cloud-native applications and serverless functions",
        icon: "Cloud"
      },
      {
        title: "DevOps Tools",
        description: "CLI tools, automation, and infrastructure software",
        icon: "Terminal"
      }
    ],
    metrics: [
      { value: 18, suffix: "+", label: "Backend Developers", description: "Expert Node.js engineers" },
      { value: 70, suffix: "+", label: "APIs Built", description: "Production-ready RESTful APIs" },
      { value: 3, suffix: "x", label: "Faster Development", description: "Compared to traditional backends" }
    ],
    keyFeatures: [
      "Fast compilation and execution",
      "Built-in concurrency (goroutines)",
      "Simple and readable syntax",
      "Strong standard library",
      "Static typing with inference",
      "Excellent performance",
      "Cross-platform compilation",
      "Memory efficient",
      "Built-in testing",
      "Great tooling"
    ],
    techStack: [
      {
        category: "Core & Frameworks",
        items: [
          { name: "Go", icon: "SiGo", color: "#00ADD8" },
          { name: "Gin", icon: "SiGo", color: "#00ADD8" },
          { name: "Echo", icon: "SiGo", color: "#00ADD8" },
          { name: "Fiber", icon: "SiGo", color: "#00ADD8" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" },
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" }
        ]
      },
      {
        category: "Cloud & DevOps",
        items: [
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "GCP", icon: "SiGooglecloud", color: "#4285F4" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Go Modules", icon: "SiGo", color: "#00ADD8" },
          { name: "gRPC", icon: "SiGrpc", color: "#00ADD8" },
          { name: "Cobra CLI", icon: "SiGo", color: "#00ADD8" },
          { name: "Prometheus", icon: "SiPrometheus", color: "#E6522C" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "High Performance",
        description: "Compiled language with performance close to C/C++, faster than Node.js/Python",
        icon: "Zap"
      },
      {
        title: "Built for Scale",
        description: "Goroutines enable easy handling of thousands of concurrent requests",
        icon: "TrendingUp"
      },
      {
        title: "Simple Language",
        description: "Easy to learn with clean syntax - productive quickly",
        icon: "Smile"
      },
      {
        title: "Cloud Native",
        description: "Docker, Kubernetes, and cloud infrastructure tools built with Go",
        icon: "Cloud"
      },
      {
        title: "Google Backed",
        description: "Created and maintained by Google with strong enterprise support",
        icon: "Award"
      },
      {
        title: "Fast Compilation",
        description: "Compiles to single binary - fast builds and easy deployment",
        icon: "Rocket"
      }
    ],
    industries: [
      {
        name: "Cloud & SaaS",
        applications: ["Cloud services", "Microservices", "APIs", "Backend systems"]
      },
      {
        name: "DevOps",
        applications: ["CLI tools", "Infrastructure automation", "Monitoring", "Container orchestration"]
      },
      {
        name: "Fintech",
        applications: ["Payment processing", "Trading systems", "Blockchain", "Financial APIs"]
      },
      {
        name: "IoT",
        applications: ["Device management", "Data processing", "Edge computing", "Real-time systems"]
      },
      {
        name: "Enterprise",
        applications: ["Backend services", "Data processing", "Distributed systems", "Network services"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Architecture and design",
        deliverables: ["Requirements analysis", "System architecture", "API design", "Database schema", "Technology decisions"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["Go project structure", "Module setup", "CI/CD pipeline", "Development environment", "Containerization"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Implementation",
        deliverables: ["API endpoints", "Business logic", "Database layer", "Authentication", "Concurrency patterns"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "Load testing", "Security testing", "Performance optimization"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production release",
        deliverables: ["Container deployment", "Kubernetes setup", "Monitoring", "Documentation", "Support"]
      }
    ],
    faq: [
      {
        question: "Is Go better than Node.js or Python?",
        answer: "Go is faster than both, better for CPU-intensive tasks and high concurrency. Node.js is better for rapid prototyping. Python is better for data science/ML. Choose Go for performance-critical backend services."
      },
      {
        question: "Is Go difficult to learn?",
        answer: "No! Go is one of the easiest languages to learn. Simple syntax, no classes/inheritance complexity, and excellent documentation make Go accessible. Most developers become productive in 1-2 weeks."
      },
      {
        question: "Can Go build web applications?",
        answer: "Yes! Go has excellent web frameworks (Gin, Echo, Fiber). While not as common for full-stack as Node.js, Go is perfect for APIs and backend services powering React/Vue/Angular frontends."
      },
      {
        question: "What companies use Go?",
        answer: "Google, Uber, Dropbox, Netflix, Docker, Kubernetes, and thousands more. Go is especially popular for cloud services, microservices, and DevOps tools."
      },
      {
        question: "Go vs Rust - which is better?",
        answer: "Go prioritizes simplicity and developer productivity. Rust prioritizes safety and performance. Go compiles faster, easier to learn, better for most backend services. Rust for systems programming and maximum performance."
      }
    ],
    relatedTechnologies: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Microservices", slug: "microservices" },
      { name: "gRPC", slug: "grpc" }
    ]
  },

  // Flutter (HIGH PRIORITY - Very Popular)
  {
    id: "25",
    slug: "flutter",
    name: "Flutter",
    category: "Mobile Development",
    tagline: "Beautiful Native Apps from Single Codebase",
    hero: {
      title: "Flutter Development Services",
      description: "Build stunning native mobile apps for iOS and Android with Flutter. Google's UI toolkit for crafting beautiful, natively compiled applications from a single codebase.",
      ctaText: "Build with Flutter",
      image: "/technologies/flutter.jpg"
    },
    overview: "Flutter is Google's revolutionary UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. At Arka Infotech, our Flutter developers create high-performance apps with stunning UIs using Dart programming language. Flutter's hot reload, rich widget library, and native performance make it the fastest-growing mobile framework. We leverage Flutter's expressiveness and flexibility to deliver apps that look and feel native on both iOS and Android while sharing 95%+ of the codebase.",
    useCases: [
      {
        title: "Cross-Platform Mobile Apps",
        description: "iOS and Android apps from single codebase with native performance",
        icon: "Smartphone"
      },
      {
        title: "Beautiful UIs",
        description: "Custom designs with Material Design and Cupertino widgets",
        icon: "Paintbrush"
      },
      {
        title: "MVPs & Startups",
        description: "Fast development for launching products quickly",
        icon: "Rocket"
      },
      {
        title: "Enterprise Apps",
        description: "Business applications with complex requirements",
        icon: "Building"
      }
    ],
    keyFeatures: [
      "Single codebase for iOS/Android",
      "Hot reload for instant updates",
      "Rich widget library",
      "Native performance",
      "Beautiful Material Design",
      "Expressive and flexible UI",
      "Dart programming language",
      "Growing ecosystem",
      "Google backing",
      "Fast development"
    ],
    techStack: [
      {
        category: "Core",
        items: [
          { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
          { name: "Dart", icon: "SiDart", color: "#0175C2" },
          { name: "Material Design", icon: "SiMaterialdesign", color: "#757575" },
          { name: "Cupertino", icon: "SiFlutter", color: "#02569B" }
        ]
      },
      {
        category: "State Management",
        items: [
          { name: "Provider", icon: "SiFlutter", color: "#02569B" },
          { name: "Riverpod", icon: "SiFlutter", color: "#02569B" },
          { name: "Bloc", icon: "SiFlutter", color: "#02569B" },
          { name: "GetX", icon: "SiFlutter", color: "#02569B" }
        ]
      },
      {
        category: "Backend",
        items: [
          { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
          { name: "REST APIs", icon: "SiPostman", color: "#FF6C37" },
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
          { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Android Studio", icon: "SiAndroidstudio", color: "#3DDC84" },
          { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
          { name: "Xcode", icon: "SiXcode", color: "#147EFB" },
          { name: "Flutter DevTools", icon: "SiFlutter", color: "#02569B" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Fastest Growing",
        description: "Most loved framework with rapidly growing adoption and community",
        icon: "TrendingUp"
      },
      {
        title: "Single Codebase",
        description: "95%+ code sharing between iOS and Android reduces costs significantly",
        icon: "Copy"
      },
      {
        title: "Native Performance",
        description: "Compiles to native ARM code for excellent performance",
        icon: "Zap"
      },
      {
        title: "Beautiful UI",
        description: "Rich widgets for creating stunning, custom designs easily",
        icon: "Sparkles"
      },
      {
        title: "Hot Reload",
        description: "See changes instantly without losing app state - 10x faster development",
        icon: "Rocket"
      },
      {
        title: "Google Backed",
        description: "Strong support from Google with continuous improvements",
        icon: "Award"
      }
    ],
    industries: [
      {
        name: "Startups",
        applications: ["MVPs", "Consumer apps", "Social apps", "On-demand services"]
      },
      {
        name: "E-commerce",
        applications: ["Shopping apps", "Marketplaces", "Retail solutions", "B2C platforms"]
      },
      {
        name: "Finance",
        applications: ["Banking apps", "Payment solutions", "Investment apps", "Crypto wallets"]
      },
      {
        name: "Healthcare",
        applications: ["Patient apps", "Telemedicine", "Health tracking", "Medical services"]
      },
      {
        name: "Enterprise",
        applications: ["Business apps", "Field service", "Employee tools", "B2B solutions"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "App design and architecture",
        deliverables: ["Requirements", "UI/UX design", "Architecture", "State management choice", "Timeline"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Flutter project initialization",
        deliverables: ["Flutter project", "Dependencies", "Project structure", "CI/CD", "Development environment"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "App implementation",
        deliverables: ["UI widgets", "Business logic", "API integration", "State management", "Features"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Widget tests", "Integration tests", "Device testing", "Performance optimization", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Launch",
        description: "App Store deployment",
        deliverables: ["iOS App Store", "Google Play Store", "Analytics", "Monitoring", "Support"]
      }
    ],
    faq: [
      {
        question: "Flutter vs React Native - which is better?",
        answer: "Flutter has better performance (compiles to native), faster development (hot reload), and more consistent UI. React Native has larger community and more packages. Choose Flutter for performance and beautiful UI, React Native for JavaScript ecosystem."
      },
      {
        question: "Do I need to know Dart?",
        answer: "Dart is easy to learn, especially if you know JavaScript, Java, or C#. Most developers become productive in Dart within days. Its syntax is clean and modern."
      },
      {
        question: "Can Flutter apps access native features?",
        answer: "Yes! Flutter can access all native iOS and Android features via platform channels. Many packages provide ready-made native integrations for camera, location, sensors, etc."
      },
      {
        question: "Is Flutter ready for production?",
        answer: "Absolutely! Google Ads, Alibaba, BMW, and thousands of apps in stores use Flutter. It's mature, stable, and production-ready."
      },
      {
        question: "How much does Flutter development cost?",
        answer: "Flutter reduces costs by 40-60% compared to native development since you build once for both platforms. Development is also faster due to hot reload and rich widgets."
      }
    ],
    relatedTechnologies: [
      { name: "Dart", slug: "dart" },
      { name: "React Native", slug: "react-native" },
      { name: "Firebase", slug: "firebase" },
      { name: "Material Design", slug: "material-design" }
    ],
    metrics: [
      { value: 12, suffix: "+", label: "Flutter Developers", description: "Expert Flutter development team" },
      { value: 53, suffix: "+", label: "Apps Delivered", description: "Successfully published applications" },
      { value: 95, suffix: "%", label: "Client Satisfaction", description: "High-quality mobile solutions" }
    ]
  },

  // Spring (HIGH PRIORITY - Java Framework)
  {
    id: "26",
    slug: "spring",
    name: "Spring Boot",
    category: "Backend Development",
    tagline: "Enterprise Java Made Easy",
    hero: {
      title: "Spring Boot Development Services",
      description: "Build production-ready applications with Spring Boot. The most popular Java framework for creating stand-alone, production-grade Spring applications.",
      ctaText: "Build with Spring",
      image: "/technologies/spring.jpg"
    },
    overview: "Spring Boot is the most popular framework for building Java applications, simplifying Spring's configuration and enabling rapid development of production-ready applications. At Arka Infotech, our Spring developers create robust enterprise applications, microservices, and REST APIs using Spring's comprehensive ecosystem. Spring Boot's auto-configuration, embedded servers, and production-ready features make Java development faster and more enjoyable. We leverage Spring Security, Spring Data, and Spring Cloud to deliver secure, scalable applications that meet enterprise standards.",
    useCases: [
      {
        title: "Enterprise Applications",
        description: "Large-scale business systems with complex requirements",
        icon: "Building"
      },
      {
        title: "Microservices",
        description: "Distributed microservice architectures with Spring Cloud",
        icon: "Boxes"
      },
      {
        title: "RESTful APIs",
        description: "Robust backend APIs with comprehensive features",
        icon: "Workflow"
      },
      {
        title: "Cloud Applications",
        description: "Cloud-native applications for AWS, Azure, GCP",
        icon: "Cloud"
      }
    ],
    metrics: [
      { value: 12, suffix: "+", label: "Flutter Experts", description: "Specialized Flutter developers" },
      { value: 45, suffix: "+", label: "Apps Built", description: "Cross-platform mobile apps" },
      { value: 50, suffix: "%", label: "Cost Savings", description: "Single codebase for both platforms" }
    ],
    keyFeatures: [
      "Auto-configuration",
      "Embedded servers (Tomcat, Jetty)",
      "Production-ready features",
      "Spring Security integration",
      "Spring Data for databases",
      "Comprehensive testing support",
      "Microservices ready",
      "Cloud-native capabilities",
      "Extensive ecosystem",
      "Enterprise-grade"
    ],
    techStack: [
      {
        category: "Core",
        items: [
          { name: "Spring Boot", icon: "SiSpring", color: "#6DB33F" },
          { name: "Spring Framework", icon: "SiSpring", color: "#6DB33F" },
          { name: "Java", icon: "SiOpenjdk", color: "#007396" },
          { name: "Maven/Gradle", icon: "SiApachemaven", color: "#C71A36" }
        ]
      },
      {
        category: "Data & Security",
        items: [
          { name: "Spring Data JPA", icon: "SiSpring", color: "#6DB33F" },
          { name: "Spring Security", icon: "SiSpring", color: "#6DB33F" },
          { name: "Hibernate", icon: "SiHibernate", color: "#59666C" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" }
        ]
      },
      {
        category: "Microservices",
        items: [
          { name: "Spring Cloud", icon: "SiSpring", color: "#6DB33F" },
          { name: "Netflix OSS", icon: "SiNetflix", color: "#E50914" },
          { name: "Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "IntelliJ IDEA", icon: "SiIntellijidea", color: "#000000" },
          { name: "JUnit", icon: "SiJunit", color: "#25A162" },
          { name: "Actuator", icon: "SiSpring", color: "#6DB33F" },
          { name: "Swagger", icon: "SiSwagger", color: "#85EA2D" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Industry Standard",
        description: "Most popular Java framework used by millions of developers worldwide",
        icon: "Award"
      },
      {
        title: "Rapid Development",
        description: "Auto-configuration and starters accelerate development significantly",
        icon: "Rocket"
      },
      {
        title: "Production Ready",
        description: "Built-in monitoring, metrics, and health checks for production",
        icon: "CheckCircle"
      },
      {
        title: "Microservices",
        description: "Excellent support for building microservice architectures",
        icon: "Boxes"
      },
      {
        title: "Enterprise Adoption",
        description: "Trusted by Fortune 500 companies for mission-critical applications",
        icon: "Building"
      },
      {
        title: "Comprehensive",
        description: "Batteries included - security, data access, cloud, messaging, all built-in",
        icon: "Package"
      }
    ],
    industries: [
      {
        name: "Enterprise",
        applications: ["Business systems", "ERP", "CRM", "Enterprise portals"]
      },
      {
        name: "Finance",
        applications: ["Banking systems", "Trading platforms", "Payment processing", "Financial services"]
      },
      {
        name: "E-commerce",
        applications: ["Online stores", "Order management", "Inventory systems", "Payment gateways"]
      },
      {
        name: "Healthcare",
        applications: ["Hospital systems", "Medical records", "Patient portals", "Healthcare platforms"]
      },
      {
        name: "Telecom",
        applications: ["Billing systems", "Network management", "Customer portals", "Service platforms"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and architecture",
        deliverables: ["Requirements", "Architecture design", "Database design", "API design", "Technology stack"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["Spring Boot project", "Maven/Gradle config", "Database setup", "Security config", "CI/CD"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Implementation",
        deliverables: ["REST APIs", "Business logic", "Data layer", "Security", "Integration"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "Security testing", "Performance tuning", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production launch",
        deliverables: ["Server deployment", "Database migration", "Monitoring setup", "Documentation", "Support"]
      }
    ],
    faq: [
      {
        question: "Spring vs Spring Boot - what's the difference?",
        answer: "Spring is the comprehensive framework. Spring Boot builds on Spring, adding auto-configuration and embedded servers for faster development. Spring Boot is the modern way to use Spring."
      },
      {
        question: "Is Spring Boot good for microservices?",
        answer: "Excellent! Spring Boot with Spring Cloud provides everything needed for microservices - service discovery, config server, API gateway, circuit breakers, and more."
      },
      {
        question: "Can Spring Boot applications be containerized?",
        answer: "Absolutely! Spring Boot applications work perfectly in Docker containers and Kubernetes. They're ideal for cloud-native deployments."
      },
      {
        question: "Is Spring Boot suitable for small projects?",
        answer: "Yes! While powerful for enterprise, Spring Boot's ease of setup makes it great for projects of any size. Start small and scale as needed."
      },
      {
        question: "How does Spring Boot compare to Node.js?",
        answer: "Spring Boot excels at enterprise applications with strong typing and structure. Node.js is better for real-time apps. Choose Spring Boot for robust, type-safe enterprise systems."
      }
    ],
    relatedTechnologies: [
      { name: "Java", slug: "java" },
      { name: "Microservices", slug: "microservices" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Docker", slug: "docker" }
    ]
  },

  // C# (HIGH PRIORITY - Popular Language)
  {
    id: "27",
    slug: "csharp",
    name: "C#",
    category: "Backend Development",
    tagline: "Modern, Versatile Programming Language",
    hero: {
      title: "C# Development Services",
      description: "Build powerful applications with C#. Microsoft's modern, object-oriented language for .NET, Unity, Xamarin, and enterprise applications.",
      ctaText: "Develop with C#",
      image: "/technologies/csharp.jpg"
    },
    overview: "C# is Microsoft's powerful, modern programming language used for building Windows applications, web services, games, and mobile apps. At Arka Infotech, our C# developers create enterprise software using .NET, Unity games, Xamarin mobile apps, and ASP.NET web applications. C#'s strong typing, modern features, excellent tooling, and versatility make it perfect for various application types. We leverage C#'s async/await, LINQ, and rich ecosystem to deliver robust, maintainable applications across platforms.",
    useCases: [
      {
        title: "Enterprise Applications",
        description: ".NET applications for business systems",
        icon: "Building"
      },
      {
        title: "Web Applications",
        description: "ASP.NET Core web apps and APIs",
        icon: "Globe"
      },
      {
        title: "Game Development",
        description: "Unity games using C# scripting",
        icon: "Gamepad2"
      },
      {
        title: "Mobile Apps",
        description: "Xamarin cross-platform mobile development",
        icon: "Smartphone"
      }
    ],
    metrics: [
      { value: 15, suffix: "+", label: "Expert Developers", description: "Specialized React Native development team" },
      { value: 50, suffix: "+", label: "Apps Delivered", description: "Cross-platform mobile applications" },
      { value: 60, suffix: "%", label: "Code Reusability", description: "Share code between iOS and Android" }
    ],
    keyFeatures: [
      "Modern language features",
      "Strong typing and null safety",
      "Async/await for concurrency",
      "LINQ for data queries",
      "Excellent tooling (Visual Studio)",
      "Cross-platform (.NET Core)",
      "Unity game development",
      "Xamarin mobile development",
      "Enterprise-grade",
      "Active development"
    ],
    techStack: [
      {
        category: "Platforms",
        items: [
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "ASP.NET Core", icon: "SiDotnet", color: "#512BD4" },
          { name: "Unity", icon: "SiUnity", color: "#000000" },
          { name: "Xamarin", icon: "SiXamarin", color: "#3498DB" }
        ]
      },
      {
        category: "Tools",
        items: [
          { name: "Visual Studio", icon: "SiVisualstudio", color: "#5C2D91" },
          { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
          { name: "Rider", icon: "SiRider", color: "#000000" },
          { name: "NuGet", icon: "SiNuget", color: "#004880" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "SQL Server", icon: "SiMicrosoftsqlserver", color: "#CC2927" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Entity Framework", icon: "SiDotnet", color: "#512BD4" }
        ]
      },
      {
        category: "Cloud",
        items: [
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" }
        ]
      }
    ],
    whyChoose: [
      {
        title: "Versatile",
        description: "Build web, desktop, mobile, games, cloud - all with C#",
        icon: "Layers"
      },
      {
        title: "Modern Language",
        description: "Constantly evolving with modern features and best practices",
        icon: "Code"
      },
      {
        title: "Excellent Tooling",
        description: "Visual Studio provides world-class development experience",
        icon: "Wrench"
      },
      {
        title: "Strong Typing",
        description: "Type safety prevents errors and improves code quality",
        icon: "Shield"
      },
      {
        title: "Microsoft Backing",
        description: "Full support from Microsoft with enterprise commitment",
        icon: "Award"
      },
      {
        title: "Performance",
        description: "Fast execution with excellent optimization and compilation",
        icon: "Zap"
      }
    ],
    industries: [
      {
        name: "Enterprise",
        applications: ["Business systems", "ERP", "CRM", "Enterprise applications"]
      },
      {
        name: "Gaming",
        applications: ["Unity games", "Mobile games", "PC games", "VR/AR experiences"]
      },
      {
        name: "Finance",
        applications: ["Banking systems", "Trading platforms", "Financial services", "Payment processing"]
      },
      {
        name: "Healthcare",
        applications: ["Medical software", "Hospital systems", "Patient portals", "Healthcare platforms"]
      },
      {
        name: "Mobile",
        applications: ["Xamarin apps", "Enterprise mobility", "Cross-platform apps", "Business apps"]
      }
    ],
    developmentProcess: [
      {
        phase: "Phase 1",
        title: "Planning",
        description: "Requirements and design",
        deliverables: ["Requirements", "Architecture", "Technology selection", "Database design", "Timeline"]
      },
      {
        phase: "Phase 2",
        title: "Setup",
        description: "Project initialization",
        deliverables: ["Visual Studio solution", "Project structure", "NuGet packages", "Database setup", "Version control"]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Implementation",
        deliverables: ["Business logic", "Data layer", "UI development", "API integration", "Features"]
      },
      {
        phase: "Phase 4",
        title: "Testing",
        description: "Quality assurance",
        deliverables: ["Unit tests", "Integration tests", "Performance testing", "Security audit", "Bug fixes"]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        description: "Production release",
        deliverables: ["Deployment", "Configuration", "Monitoring", "Documentation", "Support"]
      }
    ],
    faq: [
      {
        question: "Is C# only for Windows?",
        answer: "No! With .NET Core/.NET 5+, C# runs on Windows, Linux, and macOS. You can build cross-platform applications, web services, and even mobile apps."
      },
      {
        question: "C# vs Java - which is better?",
        answer: "Both are excellent enterprise languages. C# has more modern features and better tooling. Java has larger ecosystem. Choose C# for Microsoft stack, Java for platform independence."
      },
      {
        question: "Can I use C# for game development?",
        answer: "Yes! C# is the primary language for Unity, one of the world's most popular game engines. Many successful games are built with C# and Unity."
      },
      {
        question: "Is C# difficult to learn?",
        answer: "C# has a learning curve due to OOP concepts, but excellent documentation and tooling make it approachable. Developers typically become productive in 2-4 weeks."
      },
      {
        question: "What can I build with C#?",
        answer: "Almost anything - web apps, desktop software, mobile apps, games, cloud services, APIs, microservices, IoT applications, and more. C# is incredibly versatile."
      }
    ],
    relatedTechnologies: [
      { name: ".NET", slug: "dotnet" },
      { name: "Unity", slug: "unity" },
      { name: "Xamarin", slug: "xamarin" },
      { name: "Azure", slug: "azure" }
    ]
  }
];

// Helper functions
export const getTechnologyBySlug = (slug: string): TechnologyContent | undefined => {
  return technologies.find(tech => tech.slug === slug);
};

export const getTechnologiesByCategory = (category: string): TechnologyContent[] => {
  return technologies.filter(tech => tech.category === category);
};

export const getAllTechnologies = (): TechnologyContent[] => {
  return technologies;
};

export const getAllCategories = (): string[] => {
  const categories = technologies.map(tech => tech.category);
  return Array.from(new Set(categories));
};

