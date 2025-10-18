export interface DataAIServiceContent {
  id: string;
  slug: string;
  name: string;
  category: 'Data' | 'AI';
  tagline: string;
  hero: {
    title: string;
    description: string;
    ctaText: string;
    image: string;
    showContactForm: boolean;
  };
  overview: string;
  metrics: Array<{
    value: number;
    suffix: string;
    label: string;
    description: string;
  }>;
  services: Array<{
    title: string;
    description: string;
    icon: string;
    features: string[];
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  whyChooseUs: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  techStack: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
      color: string;
    }>;
  }>;
  process: Array<{
    phase: string;
    title: string;
    description: string;
    steps: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  useCases?: Array<{
    title: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
  }>;
  // Optional properties for compatibility with Cloud components
  tools?: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
      lucideIcon: string;
      description: string;
    }>;
  }>;
  technologies?: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
      color: string;
    }>;
  }>;
  otherTechnologies?: Array<{
    name: string;
    slug: string;
    icon: string;
    description: string;
  }>;
}

export const dataAIServices: DataAIServiceContent[] = [
  // Data Strategy Consulting
  {
    id: "1",
    slug: "data-strategy-consulting",
    name: "Data Strategy Consulting",
    category: "Data",
    tagline: "Transform Data into Strategic Business Value",
    hero: {
      title: "Strategic Data Consulting Services",
      description: "Unlock the full potential of your data with expert strategy consulting. We help you build data-driven cultures, optimize data architecture, and create roadmaps that align with your business objectives.",
      ctaText: "Get Strategic Guidance",
      image: "/data-ai/strategy-hero.jpg",
      showContactForm: true
    },
    overview: "In today's data-driven world, having a clear data strategy is essential for business success. Arka Infotech provides comprehensive data strategy consulting services that help organizations define their data vision, establish governance frameworks, and create actionable roadmaps. Our expert consultants work with C-level executives and data leaders to assess current data capabilities, identify gaps, and design strategies that drive measurable business outcomes. From defining data architecture principles to establishing data democratization initiatives, we ensure your data strategy aligns with business goals and delivers competitive advantage.",
    metrics: [
      {
        value: 85,
        suffix: "%",
        label: "Improved Decision Making",
        description: "Clients report faster and more accurate decisions"
      },
      {
        value: 50,
        suffix: "+",
        label: "Strategy Projects",
        description: "Successfully delivered data strategies across industries"
      },
      {
        value: 40,
        suffix: "%",
        label: "Cost Reduction",
        description: "Average reduction in data management costs"
      }
    ],
    services: [
      {
        title: "Data Maturity Assessment",
        description: "Evaluate your organization's data capabilities and readiness for transformation.",
        icon: "BarChart3",
        features: [
          "Current state assessment",
          "Data capability evaluation",
          "Gap analysis and recommendations",
          "Maturity roadmap development",
          "Benchmark against industry standards"
        ]
      },
      {
        title: "Data Roadmap Development",
        description: "Create comprehensive, actionable roadmaps aligned with business objectives.",
        icon: "Map",
        features: [
          "Strategic vision definition",
          "Priority use case identification",
          "Technology stack recommendations",
          "Implementation timeline",
          "Resource and budget planning"
        ]
      },
      {
        title: "Data Governance Framework",
        description: "Establish policies, processes, and standards for effective data management.",
        icon: "Shield",
        features: [
          "Governance model design",
          "Data stewardship programs",
          "Policy and standard creation",
          "Compliance framework setup",
          "Data quality rules definition"
        ]
      },
      {
        title: "Business Case Development",
        description: "Build compelling business cases for data initiatives with clear ROI projections.",
        icon: "TrendingUp",
        features: [
          "ROI analysis and modeling",
          "Cost-benefit analysis",
          "Risk assessment",
          "Stakeholder presentations",
          "Executive reporting"
        ]
      }
    ],
    benefits: [
      {
        title: "Clear Data Vision",
        description: "Establish a unified vision for how data will drive business value across your organization.",
        icon: "Eye"
      },
      {
        title: "Aligned Investments",
        description: "Ensure technology investments align with business priorities and deliver measurable results.",
        icon: "Target"
      },
      {
        title: "Reduced Risk",
        description: "Minimize risks through comprehensive governance, compliance, and quality frameworks.",
        icon: "ShieldCheck"
      },
      {
        title: "Faster Time-to-Value",
        description: "Accelerate data initiatives with clear roadmaps and prioritized use cases.",
        icon: "Zap"
      },
      {
        title: "Competitive Advantage",
        description: "Leverage data as a strategic asset to differentiate and outperform competitors.",
        icon: "Award"
      },
      {
        title: "Cultural Transformation",
        description: "Build data-driven cultures where insights guide decisions at all levels.",
        icon: "Users"
      }
    ],
    whyChooseUs: [
      {
        title: "Industry Expertise",
        description: "Deep experience across multiple industries with proven frameworks and best practices that accelerate your strategy development.",
        icon: "Building"
      },
      {
        title: "Executive-Level Partnership",
        description: "We work directly with C-suite and board members to ensure strategy alignment and executive buy-in for data initiatives.",
        icon: "Briefcase"
      },
      {
        title: "Practical Approach",
        description: "Focus on actionable strategies with clear implementation paths, not just theoretical frameworks or lengthy documents.",
        icon: "CheckCircle"
      },
      {
        title: "Proven Methodologies",
        description: "Leverage battle-tested frameworks and accelerators that have delivered results for Fortune 500 companies.",
        icon: "BookOpen"
      }
    ],
    techStack: [
      {
        category: "Strategy Tools",
        items: [
          { name: "Tableau", icon: "SiTableau", color: "#E97627" },
          { name: "Power BI", icon: "SiPowerbi", color: "#F2C811" },
          { name: "Collibra", icon: "SiDatabase", color: "#00B4D8" },
          { name: "Alation", icon: "SiDatabase", color: "#FF6F00" }
        ]
      },
      {
        category: "Data Governance",
        items: [
          { name: "Informatica", icon: "SiInformatica", color: "#FF4F00" },
          { name: "Atlan", icon: "SiDatabase", color: "#4A90E2" },
          { name: "Apache Atlas", icon: "SiApache", color: "#D22128" },
          { name: "Azure Purview", icon: "SiMicrosoftazure", color: "#0078D4" }
        ]
      },
      {
        category: "Analytics Platforms",
        items: [
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" },
          { name: "Databricks", icon: "SiDatabricks", color: "#FF3621" },
          { name: "Google BigQuery", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" }
        ]
      },
      {
        category: "Collaboration",
        items: [
          { name: "Confluence", icon: "SiConfluence", color: "#172B4D" },
          { name: "Miro", icon: "SiMiro", color: "#FFD02F" },
          { name: "Microsoft Teams", icon: "SiMicrosoftteams", color: "#6264A7" },
          { name: "Jira", icon: "SiJira", color: "#0052CC" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Assessment",
        description: "Understanding your business, data landscape, and strategic objectives",
        steps: [
          "Executive stakeholder interviews",
          "Current state data assessment",
          "Business objectives alignment",
          "Quick wins identification",
          "Assessment report delivery"
        ]
      },
      {
        phase: "Phase 2",
        title: "Strategy Design",
        description: "Crafting your comprehensive data strategy",
        steps: [
          "Data vision and principles definition",
          "Target operating model design",
          "Governance framework development",
          "Technology architecture recommendations",
          "Use case prioritization"
        ]
      },
      {
        phase: "Phase 3",
        title: "Roadmap Creation",
        description: "Building actionable implementation roadmaps",
        steps: [
          "Multi-year roadmap development",
          "Quick wins vs. strategic initiatives",
          "Resource and capability planning",
          "Budget and ROI modeling",
          "Risk mitigation strategies"
        ]
      },
      {
        phase: "Phase 4",
        title: "Stakeholder Alignment",
        description: "Securing buy-in across the organization",
        steps: [
          "Executive presentation preparation",
          "Board-level communications",
          "Department-level workshops",
          "Change management planning",
          "Communication strategy"
        ]
      },
      {
        phase: "Phase 5",
        title: "Implementation Support",
        description: "Helping you execute the strategy",
        steps: [
          "Implementation planning",
          "Governance body establishment",
          "Pilot project execution",
          "Progress monitoring and reporting",
          "Continuous optimization"
        ]
      }
    ],
    faq: [
      {
        question: "How long does it take to develop a data strategy?",
        answer: "A comprehensive data strategy typically takes 8-12 weeks, depending on organization size and complexity. This includes assessment, strategy development, roadmap creation, and stakeholder alignment. We can also provide accelerated options for urgent needs."
      },
      {
        question: "What's included in a data strategy?",
        answer: "Our data strategy includes: current state assessment, future state vision, governance framework, technology architecture, use case prioritization, implementation roadmap, organizational design, change management plan, and business case with ROI projections."
      },
      {
        question: "Do we need a data strategy if we're already using analytics tools?",
        answer: "Yes! Many organizations have tools but lack strategic direction, leading to fragmented efforts and poor ROI. A strategy ensures all initiatives align with business goals, data is properly governed, and investments deliver maximum value."
      },
      {
        question: "How do you ensure our data strategy aligns with business goals?",
        answer: "We start with business objectives, not technology. Our approach involves extensive stakeholder interviews, business case development, and use case prioritization directly tied to KPIs. Every recommendation is linked to specific business outcomes."
      },
      {
        question: "What if our organization lacks data maturity?",
        answer: "That's perfect! We specialize in helping organizations at all maturity levels. We'll create a pragmatic roadmap with quick wins to build momentum while establishing foundations for long-term success. We focus on practical, achievable steps."
      },
      {
        question: "Can you help with implementation after strategy development?",
        answer: "Absolutely! We offer end-to-end services from strategy through implementation. We can help you execute the roadmap, establish governance, implement technology, and build capabilities to ensure your strategy delivers results."
      },
      {
        question: "What industries do you work with?",
        answer: "We work across all industries including financial services, healthcare, retail, manufacturing, technology, telecommunications, and government. Our frameworks are industry-agnostic but we tailor recommendations to your specific industry context."
      },
      {
        question: "What's the typical ROI of a data strategy?",
        answer: "Clients typically see 3-5x ROI within 18-24 months through improved decision-making, cost reduction, revenue growth, and risk mitigation. Specific ROI depends on your use cases, but we build detailed financial models during strategy development."
      }
    ]
  },

  // Data Processing
  {
    id: "2",
    slug: "data-processing",
    name: "Data Processing",
    category: "Data",
    tagline: "Transform Raw Data into Business Intelligence",
    hero: {
      title: "Enterprise Data Processing Solutions",
      description: "Build scalable, efficient data processing pipelines that transform raw data into actionable insights. Handle batch and real-time processing with enterprise-grade reliability.",
      ctaText: "Optimize Your Data Processing",
      image: "/data-ai/processing-hero.jpg",
      showContactForm: true
    },
    overview: "Modern businesses generate massive volumes of data from diverse sources. Arka Infotech designs and implements robust data processing solutions that efficiently transform, enrich, and prepare data for analytics and AI applications. Our expertise spans batch processing, stream processing, ETL/ELT pipelines, and real-time data integration. We leverage cutting-edge technologies like Apache Spark, Apache Kafka, AWS Glue, and Azure Data Factory to build scalable, fault-tolerant processing architectures that handle data at any scale. Whether you need to process terabytes of historical data or handle millions of real-time events per second, we deliver solutions that ensure data accuracy, timeliness, and reliability.",
    metrics: [
      {
        value: 99.9,
        suffix: "%",
        label: "Pipeline Reliability",
        description: "Uptime for production data pipelines"
      },
      {
        value: 10,
        suffix: "B+",
        label: "Records Processed Daily",
        description: "Across all client platforms"
      },
      {
        value: 70,
        suffix: "%",
        label: "Faster Processing",
        description: "Compared to legacy systems"
      }
    ],
    services: [
      {
        title: "Batch Data Processing",
        description: "Process large volumes of historical data efficiently with optimized batch workflows.",
        icon: "Database",
        features: [
          "Large-scale ETL/ELT pipelines",
          "Distributed processing with Spark",
          "Data validation and quality checks",
          "Incremental and full load processing",
          "Schedule orchestration"
        ]
      },
      {
        title: "Real-Time Stream Processing",
        description: "Process data in motion with low-latency streaming architectures.",
        icon: "Activity",
        features: [
          "Event-driven architectures",
          "Apache Kafka implementation",
          "Real-time transformation",
          "Stream analytics",
          "Complex event processing"
        ]
      },
      {
        title: "Data Integration",
        description: "Connect and integrate data from diverse sources into unified platforms.",
        icon: "Link",
        features: [
          "API integration",
          "Database replication",
          "File-based ingestion",
          "Cloud data migration",
          "Change data capture (CDC)"
        ]
      },
      {
        title: "Data Transformation",
        description: "Clean, enrich, and transform data to meet business requirements.",
        icon: "RefreshCw",
        features: [
          "Data cleansing and normalization",
          "Business rule implementation",
          "Data enrichment",
          "Format conversion",
          "Aggregation and summarization"
        ]
      },
      {
        title: "Data Orchestration",
        description: "Automate and manage complex data workflows across systems.",
        icon: "GitBranch",
        features: [
          "Apache Airflow pipelines",
          "Dependency management",
          "Error handling and retry logic",
          "Monitoring and alerting",
          "SLA management"
        ]
      },
      {
        title: "Data Quality Management",
        description: "Ensure data accuracy and completeness throughout processing.",
        icon: "CheckCircle",
        features: [
          "Data validation rules",
          "Quality metrics and monitoring",
          "Anomaly detection",
          "Reconciliation processes",
          "Data profiling"
        ]
      }
    ],
    benefits: [
      {
        title: "Scalable Performance",
        description: "Handle growing data volumes without performance degradation using distributed processing architectures.",
        icon: "TrendingUp"
      },
      {
        title: "Reduced Latency",
        description: "Get insights faster with optimized pipelines and real-time processing capabilities.",
        icon: "Zap"
      },
      {
        title: "Cost Efficiency",
        description: "Optimize resource utilization and reduce infrastructure costs through efficient processing designs.",
        icon: "DollarSign"
      },
      {
        title: "Data Quality",
        description: "Ensure accuracy and reliability with built-in validation, monitoring, and quality controls.",
        icon: "ShieldCheck"
      },
      {
        title: "Operational Excellence",
        description: "Achieve high availability and reliability with fault-tolerant, self-healing architectures.",
        icon: "Settings"
      },
      {
        title: "Business Agility",
        description: "Respond quickly to changing requirements with flexible, modular processing frameworks.",
        icon: "Sparkles"
      }
    ],
    whyChooseUs: [
      {
        title: "Technology Expertise",
        description: "Deep expertise in modern data processing technologies including Spark, Kafka, Airflow, and cloud-native services from AWS, Azure, and GCP.",
        icon: "Code"
      },
      {
        title: "Performance Optimization",
        description: "Proven track record of optimizing pipelines for maximum throughput and minimum latency, handling billions of records efficiently.",
        icon: "Gauge"
      },
      {
        title: "Reliability Focus",
        description: "Build fault-tolerant, self-healing systems with comprehensive monitoring, alerting, and automated recovery mechanisms.",
        icon: "Shield"
      },
      {
        title: "Best Practices",
        description: "Follow industry best practices for data processing including data quality, lineage, observability, and governance.",
        icon: "Award"
      }
    ],
    techStack: [
      {
        category: "Processing Engines",
        items: [
          { name: "Apache Spark", icon: "SiApachespark", color: "#E25A1C" },
          { name: "Apache Flink", icon: "SiApacheflink", color: "#E6526F" },
          { name: "Apache Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "Apache Beam", icon: "SiApache", color: "#D22128" }
        ]
      },
      {
        category: "Cloud Services",
        items: [
          { name: "AWS Glue", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure Data Factory", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Dataflow", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Databricks", icon: "SiDatabricks", color: "#FF3621" }
        ]
      },
      {
        category: "Orchestration",
        items: [
          { name: "Apache Airflow", icon: "SiApacheairflow", color: "#017CEE" },
          { name: "Prefect", icon: "SiPrefect", color: "#3B5BDB" },
          { name: "Dagster", icon: "SiDagster", color: "#654FF0" },
          { name: "AWS Step Functions", icon: "SiAmazonaws", color: "#FF9900" }
        ]
      },
      {
        category: "Data Quality",
        items: [
          { name: "Great Expectations", icon: "SiPython", color: "#3776AB" },
          { name: "Apache Griffin", icon: "SiApache", color: "#D22128" },
          { name: "Soda", icon: "SiDatabase", color: "#00B4D8" },
          { name: "dbt", icon: "SiDbt", color: "#FF694B" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Requirements Analysis",
        description: "Understanding data sources, volumes, and processing needs",
        steps: [
          "Data source assessment",
          "Volume and velocity analysis",
          "Business rule documentation",
          "SLA and performance requirements",
          "Architecture recommendations"
        ]
      },
      {
        phase: "Phase 2",
        title: "Architecture Design",
        description: "Designing scalable processing architecture",
        steps: [
          "Pipeline architecture design",
          "Technology stack selection",
          "Data flow modeling",
          "Error handling strategy",
          "Monitoring and alerting design"
        ]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Building robust processing pipelines",
        steps: [
          "Pipeline development",
          "Data quality rule implementation",
          "Integration development",
          "Unit and integration testing",
          "Performance optimization"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & Validation",
        description: "Ensuring accuracy and performance",
        steps: [
          "Data validation testing",
          "Performance and load testing",
          "End-to-end testing",
          "Reconciliation and verification",
          "User acceptance testing"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment & Support",
        description: "Production deployment and ongoing optimization",
        steps: [
          "Production deployment",
          "Monitoring setup",
          "Documentation delivery",
          "Team training",
          "Ongoing optimization and support"
        ]
      }
    ],
    faq: [
      {
        question: "What's the difference between batch and real-time processing?",
        answer: "Batch processing handles large volumes of data at scheduled intervals (hourly, daily), ideal for historical analysis. Real-time (streaming) processing handles data as it arrives with low latency, perfect for immediate insights and alerts. We help you choose the right approach based on your use case."
      },
      {
        question: "How do you ensure data quality in processing pipelines?",
        answer: "We implement multi-layer quality checks including schema validation, business rule validation, anomaly detection, reconciliation processes, and data profiling. We use tools like Great Expectations and build custom quality frameworks with automated alerts."
      },
      {
        question: "Can you handle processing at massive scale?",
        answer: "Yes! We've built pipelines processing billions of records daily using distributed technologies like Apache Spark and cloud-native services. Our architectures are designed for horizontal scalability to handle any data volume."
      },
      {
        question: "What happens if a pipeline fails?",
        answer: "Our pipelines include comprehensive error handling with automatic retries, dead letter queues, and alerting. We implement idempotent processing to safely retry failed jobs without data duplication. Critical failures trigger immediate alerts with automated escalation."
      },
      {
        question: "How long does it take to build a data pipeline?",
        answer: "Simple pipelines take 2-4 weeks, moderate complexity 1-2 months, and enterprise-grade pipelines with multiple sources 3-6 months. We use agile methodology to deliver incremental value, starting with high-priority data sources first."
      },
      {
        question: "Can you migrate our existing ETL processes to modern platforms?",
        answer: "Absolutely! We specialize in modernizing legacy ETL systems built on tools like Informatica, DataStage, or SSIS to cloud-native solutions. We ensure zero data loss during migration and often achieve significant performance improvements."
      },
      {
        question: "Do you provide support after deployment?",
        answer: "Yes! We offer managed services including 24/7 monitoring, performance optimization, issue resolution, and enhancement development. We also provide training for your team to operate pipelines independently if preferred."
      },
      {
        question: "What about data security during processing?",
        answer: "Security is built into every layer. We implement encryption at rest and in transit, role-based access control, data masking for sensitive fields, audit logging, and compliance with regulations like GDPR and HIPAA."
      }
    ]
  },

  // Data Governance Solution
  {
    id: "3",
    slug: "data-governance",
    name: "Data Governance Solution",
    category: "Data",
    tagline: "Establish Trust and Control Over Your Data",
    hero: {
      title: "Enterprise Data Governance Solutions",
      description: "Build comprehensive governance frameworks that ensure data quality, security, compliance, and accountability across your organization.",
      ctaText: "Strengthen Your Governance",
      image: "/data-ai/governance-hero.jpg",
      showContactForm: true
    },
    overview: "Effective data governance is the foundation of successful data initiatives. Arka Infotech helps organizations implement comprehensive governance frameworks that balance control with accessibility, ensuring data is trustworthy, secure, and compliant while remaining available for business use. Our governance solutions span policies, processes, technology, and organizational structures to create sustainable governance programs. We implement leading platforms like Collibra, Alation, and Azure Purview, while establishing data stewardship, quality management, metadata management, and compliance frameworks. Whether you're starting from scratch or maturing existing programs, we help you build governance that enables, not hinders, data-driven innovation.",
    metrics: [
      {
        value: 95,
        suffix: "%",
        label: "Improved Data Quality",
        description: "Increase in data accuracy after governance implementation"
      },
      {
        value: 60,
        suffix: "%",
        label: "Faster Compliance",
        description: "Reduction in time to prove compliance"
      },
      {
        value: 75,
        suffix: "%",
        label: "Reduced Risk",
        description: "Decrease in data-related incidents"
      }
    ],
    services: [
      {
        title: "Governance Framework Design",
        description: "Establish comprehensive governance structures, policies, and procedures.",
        icon: "Building",
        features: [
          "Operating model design",
          "Governance council establishment",
          "Policy and standard development",
          "RACI matrix definition",
          "Escalation procedures"
        ]
      },
      {
        title: "Data Stewardship Program",
        description: "Build effective stewardship programs with clear roles and responsibilities.",
        icon: "Users",
        features: [
          "Steward role definition",
          "Domain ownership model",
          "Training and certification",
          "Stewardship workflows",
          "Performance metrics"
        ]
      },
      {
        title: "Metadata Management",
        description: "Implement centralized metadata repositories for data discovery and lineage.",
        icon: "Database",
        features: [
          "Business glossary creation",
          "Technical metadata harvesting",
          "Data lineage mapping",
          "Impact analysis",
          "Search and discovery portals"
        ]
      },
      {
        title: "Data Quality Management",
        description: "Establish quality standards, monitoring, and improvement processes.",
        icon: "CheckCircle",
        features: [
          "Quality dimension definitions",
          "Quality rules and metrics",
          "Automated quality monitoring",
          "Issue management workflows",
          "Quality reporting dashboards"
        ]
      },
      {
        title: "Data Privacy & Compliance",
        description: "Ensure compliance with regulations like GDPR, CCPA, and industry standards.",
        icon: "Shield",
        features: [
          "Privacy policy implementation",
          "Data classification",
          "Consent management",
          "Right to deletion processes",
          "Audit trail and reporting"
        ]
      },
      {
        title: "Access Governance",
        description: "Manage who can access what data with robust access control frameworks.",
        icon: "Lock",
        features: [
          "Access policy definition",
          "Role-based access control",
          "Access request workflows",
          "Access reviews and certifications",
          "Privileged access management"
        ]
      }
    ],
    benefits: [
      {
        title: "Trusted Data",
        description: "Build confidence in data through quality controls, validation, and transparent lineage.",
        icon: "ShieldCheck"
      },
      {
        title: "Regulatory Compliance",
        description: "Meet regulatory requirements efficiently with built-in compliance frameworks and audit trails.",
        icon: "FileCheck"
      },
      {
        title: "Risk Mitigation",
        description: "Reduce data breaches, privacy violations, and compliance penalties through proactive governance.",
        icon: "AlertTriangle"
      },
      {
        title: "Improved Collaboration",
        description: "Break down silos with clear ownership, shared vocabulary, and discoverable data assets.",
        icon: "Users"
      },
      {
        title: "Faster Time-to-Insight",
        description: "Enable self-service analytics with trusted, well-documented, easily discoverable data.",
        icon: "Zap"
      },
      {
        title: "Cost Efficiency",
        description: "Reduce redundancy, eliminate poor quality data, and optimize data storage and processing.",
        icon: "DollarSign"
      }
    ],
    whyChooseUs: [
      {
        title: "Holistic Approach",
        description: "We address all governance dimensions: people, process, technology, and culture. Not just technology implementation but sustainable programs.",
        icon: "Target"
      },
      {
        title: "Platform Expertise",
        description: "Certified experts in leading platforms including Collibra, Alation, Azure Purview, Informatica, and open-source solutions like Apache Atlas.",
        icon: "Award"
      },
      {
        title: "Practical Implementation",
        description: "Focus on pragmatic, business-driven governance that delivers value quickly. We avoid bureaucracy and over-engineering.",
        icon: "CheckCircle"
      },
      {
        title: "Change Management",
        description: "Strong focus on adoption through training, communication, and cultural transformation. Technology alone doesn't create governance success.",
        icon: "Users"
      }
    ],
    techStack: [
      {
        category: "Governance Platforms",
        items: [
          { name: "Collibra", icon: "SiDatabase", color: "#00B4D8" },
          { name: "Alation", icon: "SiDatabase", color: "#FF6F00" },
          { name: "Azure Purview", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Informatica", icon: "SiInformatica", color: "#FF4F00" }
        ]
      },
      {
        category: "Data Quality",
        items: [
          { name: "Ataccama", icon: "SiDatabase", color: "#0066CC" },
          { name: "Talend", icon: "SiTalend", color: "#1675BC" },
          { name: "Great Expectations", icon: "SiPython", color: "#3776AB" },
          { name: "Soda", icon: "SiDatabase", color: "#00B4D8" }
        ]
      },
      {
        category: "Metadata & Lineage",
        items: [
          { name: "Apache Atlas", icon: "SiApache", color: "#D22128" },
          { name: "Atlan", icon: "SiDatabase", color: "#4A90E2" },
          { name: "Manta", icon: "SiDatabase", color: "#FF6B6B" },
          { name: "OpenMetadata", icon: "SiDatabase", color: "#7C3AED" }
        ]
      },
      {
        category: "Privacy & Security",
        items: [
          { name: "OneTrust", icon: "SiSecurity", color: "#000000" },
          { name: "BigID", icon: "SiSecurity", color: "#0066FF" },
          { name: "Securiti.ai", icon: "SiSecurity", color: "#6366F1" },
          { name: "Immuta", icon: "SiSecurity", color: "#00A3E0" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Current State Assessment",
        description: "Understanding existing governance maturity and gaps",
        steps: [
          "Governance maturity assessment",
          "Stakeholder interviews",
          "Policy and process review",
          "Technology landscape evaluation",
          "Risk and compliance assessment"
        ]
      },
      {
        phase: "Phase 2",
        title: "Framework Design",
        description: "Designing comprehensive governance framework",
        steps: [
          "Operating model design",
          "Policy and standard creation",
          "Roles and responsibilities definition",
          "Governance workflow design",
          "Technology platform selection"
        ]
      },
      {
        phase: "Phase 3",
        title: "Platform Implementation",
        description: "Implementing governance technology platform",
        steps: [
          "Platform setup and configuration",
          "Metadata integration",
          "Business glossary creation",
          "Workflow automation",
          "User interface customization"
        ]
      },
      {
        phase: "Phase 4",
        title: "Program Rollout",
        description: "Launching governance program organization-wide",
        steps: [
          "Steward training and certification",
          "Communication and change management",
          "Pilot domain implementation",
          "Quick wins demonstration",
          "Feedback and refinement"
        ]
      },
      {
        phase: "Phase 5",
        title: "Sustain & Optimize",
        description: "Continuous improvement and expansion",
        steps: [
          "Governance metrics and reporting",
          "Regular effectiveness reviews",
          "Program expansion",
          "Continuous training",
          "Maturity enhancement"
        ]
      }
    ],
    faq: [
      {
        question: "Why do we need data governance?",
        answer: "Data governance ensures data is accurate, secure, compliant, and usable. Without it, organizations face data quality issues, compliance violations, security breaches, and inability to trust data for decisions. Governance is essential for data-driven success."
      },
      {
        question: "How long does it take to implement data governance?",
        answer: "Initial framework and platform implementation takes 3-6 months. However, governance is a continuous program that matures over time. We focus on delivering quick wins in first 90 days while building sustainable long-term programs."
      },
      {
        question: "Will governance slow down our data teams?",
        answer: "Done right, governance accelerates teams by providing trusted, discoverable data with clear ownership. We implement 'light touch' governance that enables agility while maintaining control. Poor governance creates bureaucracy; good governance creates efficiency."
      },
      {
        question: "What's the difference between data governance and data management?",
        answer: "Data governance is the framework of policies, roles, and processes that guide data management. Data management is the operational execution. Governance is 'what' and 'who', while management is 'how'. We help with both."
      },
      {
        question: "Do we need expensive tools for governance?",
        answer: "Not necessarily. We can start with process-based governance using existing tools. As programs mature, specialized platforms provide efficiency. We help you choose the right approach based on maturity, budget, and scale."
      },
      {
        question: "How do you measure governance success?",
        answer: "We track metrics like data quality scores, compliance incidents, time-to-access data, user satisfaction, policy adherence, and business value delivered. We establish baselines and demonstrate continuous improvement through dashboards."
      },
      {
        question: "What's a data steward and do we need them?",
        answer: "Data stewards are business representatives responsible for data quality, definitions, and access within their domains. They bridge business and IT. Yes, stewards are critical for governance success—we help identify, train, and support them."
      },
      {
        question: "Can governance work with our existing systems?",
        answer: "Yes! Modern governance platforms integrate with diverse systems through APIs and connectors. We harvest metadata from databases, BI tools, cloud platforms, and applications to provide unified governance across your ecosystem."
      }
    ]
  },

  // Data Storage Solution
  {
    id: "4",
    slug: "data-storage",
    name: "Data Storage Solution",
    category: "Data",
    tagline: "Scalable, Secure, High-Performance Data Storage",
    hero: {
      title: "Modern Data Storage Solutions",
      description: "Design and implement optimal storage architectures for structured, unstructured, and semi-structured data. From data lakes to warehouses, we build storage solutions that scale with your needs.",
      ctaText: "Optimize Your Storage",
      image: "/data-ai/storage-hero.jpg",
      showContactForm: true
    },
    overview: "Data storage is the foundation of your data ecosystem. Arka Infotech designs and implements modern storage solutions that balance performance, cost, scalability, and security. Whether you need a data lake for raw data, a data warehouse for analytics, or specialized storage for specific workloads, we architect solutions using leading technologies like Snowflake, AWS S3, Azure Data Lake, Google BigQuery, and Databricks. Our expertise spans storage strategy, architecture design, migration, optimization, and ongoing management. We help you navigate the complex landscape of storage options to select and implement solutions that meet your technical requirements while optimizing costs.",
    metrics: [
      {
        value: 50,
        suffix: "%",
        label: "Storage Cost Reduction",
        description: "Average savings through optimization"
      },
      {
        value: 1000,
        suffix: "+",
        label: "Petabytes Managed",
        description: "Total data under management"
      },
      {
        value: 99.99,
        suffix: "%",
        label: "Data Availability",
        description: "Uptime for storage platforms"
      }
    ],
    services: [
      {
        title: "Data Lake Implementation",
        description: "Build scalable data lakes for storing raw, unprocessed data at any scale.",
        icon: "Waves",
        features: [
          "Data lake architecture design",
          "Landing zone setup",
          "Data organization and cataloging",
          "Lifecycle management policies",
          "Security and access controls"
        ]
      },
      {
        title: "Data Warehouse Solutions",
        description: "Implement modern cloud data warehouses for high-performance analytics.",
        icon: "Database",
        features: [
          "Snowflake / BigQuery / Redshift setup",
          "Schema design and modeling",
          "Performance optimization",
          "Workload management",
          "Cost optimization"
        ]
      },
      {
        title: "Lakehouse Architecture",
        description: "Combine data lake flexibility with data warehouse performance using Databricks.",
        icon: "Layers",
        features: [
          "Delta Lake implementation",
          "Unified analytics platform",
          "ACID transactions on data lakes",
          "Schema evolution",
          "Time travel and versioning"
        ]
      },
      {
        title: "Storage Migration",
        description: "Migrate data from on-premise or legacy systems to modern cloud storage.",
        icon: "Upload",
        features: [
          "Migration strategy and planning",
          "Data transfer services",
          "Zero-downtime migration",
          "Validation and reconciliation",
          "Legacy system decommissioning"
        ]
      },
      {
        title: "Storage Optimization",
        description: "Reduce costs and improve performance through intelligent optimization.",
        icon: "TrendingUp",
        features: [
          "Storage tiering strategies",
          "Compression and partitioning",
          "Query performance tuning",
          "Cost analysis and optimization",
          "Capacity planning"
        ]
      },
      {
        title: "Backup & Disaster Recovery",
        description: "Protect your data with robust backup and recovery solutions.",
        icon: "HardDrive",
        features: [
          "Backup strategy design",
          "Automated backup solutions",
          "Point-in-time recovery",
          "Cross-region replication",
          "Disaster recovery testing"
        ]
      }
    ],
    benefits: [
      {
        title: "Infinite Scalability",
        description: "Handle growing data volumes seamlessly with cloud-native storage that scales elastically.",
        icon: "ArrowUpCircle"
      },
      {
        title: "Cost Efficiency",
        description: "Pay only for what you use and optimize costs through intelligent tiering and lifecycle management.",
        icon: "DollarSign"
      },
      {
        title: "High Performance",
        description: "Deliver fast query performance with optimized storage formats, partitioning, and caching strategies.",
        icon: "Zap"
      },
      {
        title: "Data Security",
        description: "Protect data with encryption, access controls, audit logging, and compliance certifications.",
        icon: "ShieldCheck"
      },
      {
        title: "Unified Access",
        description: "Access all data types through unified interfaces and enable self-service analytics.",
        icon: "Grid"
      },
      {
        title: "Future-Proof",
        description: "Adopt modern architectures that evolve with your needs and support emerging technologies.",
        icon: "Sparkles"
      }
    ],
    whyChooseUs: [
      {
        title: "Platform Expertise",
        description: "Certified experts in all major platforms: Snowflake, Databricks, AWS, Azure, GCP. We help you choose and implement the right solution.",
        icon: "Award"
      },
      {
        title: "Cost Optimization Focus",
        description: "Deep expertise in storage economics. We design for cost efficiency and continuously optimize to reduce your cloud bill.",
        icon: "PiggyBank"
      },
      {
        title: "Performance Engineering",
        description: "Proven track record optimizing storage for query performance through partitioning, indexing, materialization, and caching strategies.",
        icon: "Gauge"
      },
      {
        title: "Security & Compliance",
        description: "Build secure storage with encryption, access controls, audit trails, and compliance with regulations like GDPR, HIPAA, and SOC2.",
        icon: "Lock"
      }
    ],
    techStack: [
      {
        category: "Cloud Data Warehouses",
        items: [
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" },
          { name: "Google BigQuery", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Amazon Redshift", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure Synapse", icon: "SiMicrosoftazure", color: "#0078D4" }
        ]
      },
      {
        category: "Data Lakes",
        items: [
          { name: "AWS S3", icon: "SiAmazons3", color: "#569A31" },
          { name: "Azure Data Lake", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Cloud Storage", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "MinIO", icon: "SiMinio", color: "#C72E49" }
        ]
      },
      {
        category: "Lakehouse Platforms",
        items: [
          { name: "Databricks", icon: "SiDatabricks", color: "#FF3621" },
          { name: "Delta Lake", icon: "SiDeltalake", color: "#00ADD4" },
          { name: "Apache Iceberg", icon: "SiApache", color: "#0088CC" },
          { name: "Apache Hudi", icon: "SiApache", color: "#D22128" }
        ]
      },
      {
        category: "Database Systems",
        items: [
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Cassandra", icon: "SiApachecassandra", color: "#1287B1" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Storage Assessment",
        description: "Understanding your data and storage requirements",
        steps: [
          "Current storage analysis",
          "Data volume and growth projections",
          "Access patterns and use cases",
          "Performance requirements",
          "Budget and cost targets"
        ]
      },
      {
        phase: "Phase 2",
        title: "Architecture Design",
        description: "Designing optimal storage architecture",
        steps: [
          "Platform selection and sizing",
          "Storage architecture design",
          "Security and access design",
          "Data organization strategy",
          "Cost estimation and optimization"
        ]
      },
      {
        phase: "Phase 3",
        title: "Implementation",
        description: "Building and configuring storage infrastructure",
        steps: [
          "Platform provisioning",
          "Security configuration",
          "Network and connectivity setup",
          "Initial data loading",
          "Integration with tools and applications"
        ]
      },
      {
        phase: "Phase 4",
        title: "Migration",
        description: "Migrating data to new storage platform",
        steps: [
          "Migration planning and testing",
          "Historical data migration",
          "Incremental sync setup",
          "Validation and reconciliation",
          "Cutover execution"
        ]
      },
      {
        phase: "Phase 5",
        title: "Optimization & Support",
        description: "Ongoing optimization and management",
        steps: [
          "Performance monitoring",
          "Cost optimization",
          "Capacity planning",
          "User training and support",
          "Continuous improvement"
        ]
      }
    ],
    faq: [
      {
        question: "What's the difference between a data lake and data warehouse?",
        answer: "Data lakes store raw data in native formats (ideal for all data types, future use cases). Data warehouses store structured, processed data optimized for queries (ideal for BI and reporting). Modern lakehouses combine both benefits."
      },
      {
        question: "How much does cloud storage cost?",
        answer: "Costs vary by platform and usage. Storage itself is cheap ($0.02-$0.05 per GB/month), but compute for queries adds cost. We provide detailed cost estimates and implement optimization strategies that typically reduce costs 40-60%."
      },
      {
        question: "Should we use Snowflake, BigQuery, or Redshift?",
        answer: "Depends on your needs. Snowflake offers best-in-class ease of use and multi-cloud. BigQuery excels at massive scale analytics. Redshift integrates tightly with AWS. We help evaluate based on your requirements, existing infrastructure, and budget."
      },
      {
        question: "How do you ensure data security in cloud storage?",
        answer: "We implement multi-layer security: encryption at rest and in transit, role-based access control, network isolation, audit logging, data masking for sensitive fields, and compliance with regulations. All major platforms are highly secure."
      },
      {
        question: "Can we migrate our on-premise data warehouse to cloud?",
        answer: "Yes! We specialize in migrating from on-premise systems (Teradata, Oracle, Netezza, SQL Server) to cloud warehouses. We handle schema conversion, data migration, ETL modernization, and ensure performance equals or exceeds on-premise."
      },
      {
        question: "How long does storage implementation take?",
        answer: "Basic setup takes 2-4 weeks. Full implementation with migration can take 2-6 months depending on data volume and complexity. We use agile approach to deliver value incrementally, starting with critical datasets."
      },
      {
        question: "What about vendor lock-in with cloud storage?",
        answer: "We design for portability where possible using open formats (Parquet, Delta) and tools. However, some lock-in is acceptable given the benefits. We can also implement multi-cloud strategies if independence is critical."
      },
      {
        question: "How do you optimize storage costs?",
        answer: "Through storage tiering (hot/warm/cold), compression, efficient file formats, partitioning, lifecycle policies, query optimization, workload management, and continuous monitoring. We typically achieve 40-60% cost reduction."
      }
    ]
  },

  // Data Quality Management
  {
    id: "5",
    slug: "data-quality-management",
    name: "Data Quality Management",
    category: "Data",
    tagline: "Ensure Accuracy, Completeness, and Trustworthiness",
    hero: {
      title: "Enterprise Data Quality Management",
      description: "Build trust in your data with comprehensive quality management solutions. Monitor, measure, and improve data quality across your entire organization.",
      ctaText: "Improve Your Data Quality",
      image: "/data-ai/quality-hero.jpg",
      showContactForm: true
    },
    overview: "Data quality is the cornerstone of reliable analytics and AI. Arka Infotech implements comprehensive data quality management solutions that ensure your data is accurate, complete, consistent, and timely. We establish quality frameworks spanning profiling, validation, monitoring, and remediation. Using leading tools and custom frameworks, we implement automated quality checks, establish data quality metrics, and create sustainable quality improvement programs. Our approach addresses both technical and business quality dimensions, ensuring data meets fitness-for-purpose requirements across all use cases.",
    metrics: [
      {
        value: 95,
        suffix: "%",
        label: "Data Accuracy",
        description: "Average improvement in data accuracy"
      },
      {
        value: 80,
        suffix: "%",
        label: "Error Reduction",
        description: "Decrease in data-related errors"
      },
      {
        value: 60,
        suffix: "%",
        label: "Faster Issue Resolution",
        description: "Reduction in time to identify and fix issues"
      }
    ],
    services: [
      {
        title: "Data Profiling & Discovery",
        description: "Analyze data to understand patterns, anomalies, and quality issues.",
        icon: "Search",
        features: [
          "Statistical analysis",
          "Pattern recognition",
          "Anomaly detection",
          "Completeness assessment",
          "Relationship discovery"
        ]
      },
      {
        title: "Quality Rule Definition",
        description: "Establish comprehensive business and technical quality rules.",
        icon: "FileText",
        features: [
          "Business rule definition",
          "Technical validation rules",
          "Threshold setting",
          "Rule prioritization",
          "Quality dimension mapping"
        ]
      },
      {
        title: "Automated Quality Monitoring",
        description: "Continuous monitoring and alerting for quality issues.",
        icon: "Bell",
        features: [
          "Real-time quality checks",
          "Batch validation",
          "Trend analysis",
          "Automated alerts",
          "Quality dashboards"
        ]
      },
      {
        title: "Data Cleansing & Enrichment",
        description: "Fix quality issues and enhance data with additional information.",
        icon: "Sparkles",
        features: [
          "Automated cleansing rules",
          "Manual remediation workflows",
          "Data standardization",
          "Third-party enrichment",
          "Duplicate detection and resolution"
        ]
      },
      {
        title: "Quality Metrics & Reporting",
        description: "Track and report on data quality performance over time.",
        icon: "BarChart",
        features: [
          "Quality scorecards",
          "Trend reporting",
          "Business impact analysis",
          "SLA tracking",
          "Executive dashboards"
        ]
      },
      {
        title: "Root Cause Analysis",
        description: "Identify and address underlying causes of quality issues.",
        icon: "AlertCircle",
        features: [
          "Issue investigation",
          "Lineage-based analysis",
          "Impact assessment",
          "Remediation planning",
          "Process improvement"
        ]
      }
    ],
    benefits: [
      {
        title: "Better Decisions",
        description: "Make confident decisions based on accurate, reliable data you can trust.",
        icon: "Target"
      },
      {
        title: "Cost Savings",
        description: "Reduce costs associated with poor quality data including rework, returns, and lost opportunities.",
        icon: "DollarSign"
      },
      {
        title: "Regulatory Compliance",
        description: "Meet regulatory requirements for data accuracy and completeness with documented quality controls.",
        icon: "FileCheck"
      },
      {
        title: "Customer Satisfaction",
        description: "Improve customer experience by ensuring accurate information in all customer touchpoints.",
        icon: "Heart"
      },
      {
        title: "Operational Efficiency",
        description: "Eliminate manual data validation and correction efforts through automation.",
        icon: "Zap"
      },
      {
        title: "AI/ML Success",
        description: "Improve AI and ML model accuracy by training on high-quality, clean data.",
        icon: "Brain"
      }
    ],
    whyChooseUs: [
      {
        title: "Proven Frameworks",
        description: "Leverage our tested quality frameworks covering all six quality dimensions: accuracy, completeness, consistency, timeliness, validity, and uniqueness.",
        icon: "CheckCircle"
      },
      {
        title: "Tool Expertise",
        description: "Expertise across leading quality tools including Informatica, Talend, Ataccama, Great Expectations, and custom frameworks.",
        icon: "Wrench"
      },
      {
        title: "Business-Focused",
        description: "Focus on business impact, not just technical metrics. We measure quality improvements in business terms that stakeholders understand.",
        icon: "TrendingUp"
      },
      {
        title: "Sustainable Programs",
        description: "Build lasting quality cultures with clear ownership, processes, and continuous improvement mechanisms.",
        icon: "RefreshCw"
      }
    ],
    techStack: [
      {
        category: "Quality Platforms",
        items: [
          { name: "Informatica DQ", icon: "SiInformatica", color: "#FF4F00" },
          { name: "Talend", icon: "SiTalend", color: "#1675BC" },
          { name: "Ataccama", icon: "SiDatabase", color: "#0066CC" },
          { name: "Precisely", icon: "SiDatabase", color: "#006DB7" }
        ]
      },
      {
        category: "Open Source Tools",
        items: [
          { name: "Great Expectations", icon: "SiPython", color: "#3776AB" },
          { name: "Soda", icon: "SiDatabase", color: "#00B4D8" },
          { name: "Apache Griffin", icon: "SiApache", color: "#D22128" },
          { name: "dbt Tests", icon: "SiDbt", color: "#FF694B" }
        ]
      },
      {
        category: "Profiling & Analysis",
        items: [
          { name: "Pandas Profiling", icon: "SiPandas", color: "#150458" },
          { name: "Ydata Profiling", icon: "SiPython", color: "#3776AB" },
          { name: "OpenRefine", icon: "SiDatabase", color: "#2E3436" },
          { name: "Trifacta", icon: "SiDatabase", color: "#00B5AD" }
        ]
      },
      {
        category: "Monitoring",
        items: [
          { name: "Monte Carlo", icon: "SiDatabase", color: "#5046E5" },
          { name: "Bigeye", icon: "SiDatabase", color: "#FF6B6B" },
          { name: "Datafold", icon: "SiDatabase", color: "#4F46E5" },
          { name: "Grafana", icon: "SiGrafana", color: "#F46800" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Quality Assessment",
        description: "Understanding current data quality state",
        steps: [
          "Data profiling and analysis",
          "Quality issue identification",
          "Business impact assessment",
          "Quality dimensions evaluation",
          "Current process review"
        ]
      },
      {
        phase: "Phase 2",
        title: "Framework Design",
        description: "Designing comprehensive quality framework",
        steps: [
          "Quality standards definition",
          "Rule catalog creation",
          "Monitoring strategy",
          "Remediation workflows",
          "Roles and responsibilities"
        ]
      },
      {
        phase: "Phase 3",
        title: "Tool Implementation",
        description: "Implementing quality management tools",
        steps: [
          "Platform selection and setup",
          "Rule implementation",
          "Integration with data pipelines",
          "Dashboard configuration",
          "Alert setup"
        ]
      },
      {
        phase: "Phase 4",
        title: "Operationalization",
        description: "Rolling out quality program",
        steps: [
          "Quality checks activation",
          "Steward training",
          "Issue management setup",
          "Reporting implementation",
          "Process documentation"
        ]
      },
      {
        phase: "Phase 5",
        title: "Continuous Improvement",
        description: "Ongoing quality enhancement",
        steps: [
          "Quality metrics tracking",
          "Trend analysis",
          "Rule refinement",
          "Process optimization",
          "Expansion to new domains"
        ]
      }
    ],
    faq: [
      {
        question: "What are the dimensions of data quality?",
        answer: "Six key dimensions: Accuracy (correctness), Completeness (no missing values), Consistency (agreement across systems), Timeliness (available when needed), Validity (conforms to rules), and Uniqueness (no duplicates). We assess and improve all dimensions."
      },
      {
        question: "How do you measure data quality?",
        answer: "We define quality rules for each dimension, automate measurement, and create quality scores. Scores are tracked over time and reported via dashboards. We measure both technical quality and business impact of quality issues."
      },
      {
        question: "Can data quality tools fix bad data automatically?",
        answer: "Partially. Tools can automatically fix simple issues (formatting, standardization) but complex issues need manual review. We implement workflows for manual steward review where automation isn't appropriate or trusted."
      },
      {
        question: "How long does it take to improve data quality?",
        answer: "Quick wins in 4-6 weeks (fix critical issues). Comprehensive programs take 3-6 months to fully implement. Quality improvement is continuous—we establish sustainable programs that improve quality over time."
      },
      {
        question: "What's the ROI of data quality?",
        answer: "Organizations see 3-5x ROI through reduced errors, improved efficiency, better decisions, and lower risk. Specific benefits include reduced customer churn, lower operational costs, and improved compliance. We help quantify ROI for your specific use cases."
      },
      {
        question: "Do we need specialized tools for data quality?",
        answer: "Depends on scale and complexity. Small initiatives can use open-source tools or custom scripts. Large programs benefit from enterprise platforms with advanced profiling, monitoring, and remediation capabilities. We help you choose appropriately."
      },
      {
        question: "Who is responsible for data quality?",
        answer: "It's a shared responsibility. Data stewards own business quality, data engineers implement technical controls, and data governance oversees the program. Everyone who creates or uses data has a role. We help define clear accountability."
      },
      {
        question: "How do you handle quality in real-time data?",
        answer: "We implement stream-based quality checks that validate data as it flows through pipelines. Issues can trigger alerts, quarantine records, or route to error handling workflows. We balance thoroughness with performance for real-time scenarios."
      }
    ]
  },

  // Data Modelling Design
  {
    id: "6",
    slug: "data-modelling",
    name: "Data Modelling Design",
    category: "Data",
    tagline: "Design Optimal Data Models for Performance and Flexibility",
    hero: {
      title: "Expert Data Modelling Services",
      description: "Create robust, scalable data models that optimize query performance and support evolving business needs. From conceptual to physical modeling.",
      ctaText: "Design Your Data Model",
      image: "/data-ai/modelling-hero.jpg",
      showContactForm: true
    },
    overview: "Effective data modeling is crucial for database performance, data quality, and business agility. Arka Infotech provides expert data modeling services spanning conceptual, logical, and physical models for operational databases, data warehouses, and data lakes. Our modeling experts design schemas optimized for your specific use cases—whether OLTP performance, analytical query speed, or flexible data lake structures. We employ modern modeling techniques including dimensional modeling, Data Vault 2.0, anchor modeling, and denormalized designs for cloud warehouses. From legacy normalization to modern ELT-friendly structures, we ensure your data models support both current needs and future evolution.",
    metrics: [
      {
        value: 80,
        suffix: "%",
        label: "Query Performance Improvement",
        description: "Average speedup after model optimization"
      },
      {
        value: 200,
        suffix: "+",
        label: "Models Designed",
        description: "Across diverse industries and use cases"
      },
      {
        value: 50,
        suffix: "%",
        label: "Faster Development",
        description: "Development speed with well-designed models"
      }
    ],
    services: [
      {
        title: "Conceptual Data Modeling",
        description: "High-level business entity and relationship modeling.",
        icon: "Lightbulb",
        features: [
          "Business entity identification",
          "Relationship definition",
          "Business rule documentation",
          "Subject area modeling",
          "Stakeholder workshops"
        ]
      },
      {
        title: "Logical Data Modeling",
        description: "Platform-independent detailed data models with attributes and relationships.",
        icon: "Network",
        features: [
          "Entity-relationship diagrams",
          "Attribute definition",
          "Normalization",
          "Business key identification",
          "Referential integrity"
        ]
      },
      {
        title: "Physical Data Modeling",
        description: "Platform-specific implementation models optimized for performance.",
        icon: "Database",
        features: [
          "Schema design (star, snowflake, Data Vault)",
          "Indexing strategy",
          "Partitioning design",
          "Denormalization decisions",
          "Performance optimization"
        ]
      },
      {
        title: "Dimensional Modeling",
        description: "Design star and snowflake schemas for data warehouses and BI.",
        icon: "Grid",
        features: [
          "Fact table design",
          "Dimension design (SCD types)",
          "Grain definition",
          "Conformed dimensions",
          "Aggregate tables"
        ]
      },
      {
        title: "Data Vault Modeling",
        description: "Implement agile, scalable Data Vault 2.0 architectures.",
        icon: "Layers",
        features: [
          "Hub, Link, Satellite design",
          "Business vault creation",
          "Multi-temporal modeling",
          "Auditability by design",
          "Scalable architecture"
        ]
      },
      {
        title: "Model Optimization",
        description: "Tune existing models for better performance and maintainability.",
        icon: "TrendingUp",
        features: [
          "Performance analysis",
          "Bottleneck identification",
          "Schema refactoring",
          "Index optimization",
          "Query pattern analysis"
        ]
      }
    ],
    benefits: [
      {
        title: "Optimized Performance",
        description: "Achieve fast query response times through models optimized for your specific access patterns.",
        icon: "Zap"
      },
      {
        title: "Data Integrity",
        description: "Maintain accuracy and consistency with well-designed constraints and relationships.",
        icon: "ShieldCheck"
      },
      {
        title: "Business Agility",
        description: "Adapt quickly to changing requirements with flexible, extensible model designs.",
        icon: "Sparkles"
      },
      {
        title: "Reduced Complexity",
        description: "Simplify development and maintenance with clear, well-documented models.",
        icon: "CheckCircle"
      },
      {
        title: "Scalability",
        description: "Support growing data volumes and new use cases without major redesigns.",
        icon: "ArrowUpCircle"
      },
      {
        title: "Better Insights",
        description: "Enable richer analytics with models that properly capture business semantics.",
        icon: "Eye"
      }
    ],
    whyChooseUs: [
      {
        title: "Modeling Expertise",
        description: "Certified data modelers with deep expertise in all modeling techniques: dimensional, Data Vault, 3NF, and modern cloud-native approaches.",
        icon: "Award"
      },
      {
        title: "Platform Knowledge",
        description: "Experience modeling for all major platforms: traditional RDBMS, cloud warehouses (Snowflake, BigQuery), and data lakes.",
        icon: "Database"
      },
      {
        title: "Performance Focus",
        description: "Models designed for performance from the start, not as an afterthought. We optimize for your specific query patterns and SLAs.",
        icon: "Gauge"
      },
      {
        title: "Documentation",
        description: "Comprehensive documentation including ERDs, data dictionaries, lineage, and business rules for model sustainability.",
        icon: "BookOpen"
      }
    ],
    techStack: [
      {
        category: "Modeling Tools",
        items: [
          { name: "Erwin", icon: "SiDatabase", color: "#0066CC" },
          { name: "PowerDesigner", icon: "SiSap", color: "#0FAAFF" },
          { name: "ER/Studio", icon: "SiDatabase", color: "#FF6600" },
          { name: "Lucidchart", icon: "SiLucidchart", color: "#F96F1C" }
        ]
      },
      {
        category: "Cloud Warehouses",
        items: [
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" },
          { name: "BigQuery", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Redshift", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure Synapse", icon: "SiMicrosoftazure", color: "#0078D4" }
        ]
      },
      {
        category: "Data Vault Tools",
        items: [
          { name: "dbt", icon: "SiDbt", color: "#FF694B" },
          { name: "DataVault Builder", icon: "SiDatabase", color: "#4A90E2" },
          { name: "Talend", icon: "SiTalend", color: "#1675BC" },
          { name: "WhereScape", icon: "SiDatabase", color: "#00A3E0" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
          { name: "Oracle", icon: "SiOracle", color: "#F80000" },
          { name: "SQL Server", icon: "SiMicrosoftsqlserver", color: "#CC2927" },
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Requirements Gathering",
        description: "Understanding business requirements and use cases",
        steps: [
          "Stakeholder interviews",
          "Use case documentation",
          "Source system analysis",
          "Query pattern analysis",
          "Performance requirements"
        ]
      },
      {
        phase: "Phase 2",
        title: "Conceptual Modeling",
        description: "Creating high-level business models",
        steps: [
          "Entity identification",
          "Relationship definition",
          "Business rule capture",
          "Subject area organization",
          "Model validation with business"
        ]
      },
      {
        phase: "Phase 3",
        title: "Logical Modeling",
        description: "Detailed platform-independent models",
        steps: [
          "Logical ERD creation",
          "Attribute definition",
          "Normalization",
          "Business key design",
          "Model review and approval"
        ]
      },
      {
        phase: "Phase 4",
        title: "Physical Modeling",
        description: "Platform-specific implementation design",
        steps: [
          "Physical schema design",
          "Indexing and partitioning",
          "Performance optimization",
          "Storage estimation",
          "DDL script generation"
        ]
      },
      {
        phase: "Phase 5",
        title: "Implementation & Validation",
        description: "Building and testing the data model",
        steps: [
          "Schema creation",
          "Sample data loading",
          "Query testing",
          "Performance validation",
          "Documentation finalization"
        ]
      }
    ],
    faq: [
      {
        question: "What's the difference between dimensional and Data Vault modeling?",
        answer: "Dimensional (star schema) is optimized for BI queries with denormalized structures. Data Vault is designed for enterprise data warehouses with auditability, scalability, and agility. Dimensional is simpler for reporting; Data Vault better for complex, evolving enterprises."
      },
      {
        question: "Do I need a data model for cloud data warehouses?",
        answer: "Yes! While cloud warehouses handle some complexity, proper modeling dramatically improves performance and costs. We design models that leverage cloud capabilities (clustering, partitioning) while maintaining good design principles."
      },
      {
        question: "What's the best modeling approach for data lakes?",
        answer: "Data lakes benefit from schema-on-read but still need conceptual/logical models for understanding. We use techniques like Data Vault for raw data, with dimensional models in curated layers. The approach depends on use cases."
      },
      {
        question: "How do you handle slowly changing dimensions (SCD)?",
        answer: "We implement appropriate SCD types based on business needs: Type 1 (overwrite), Type 2 (add row with version), or Type 3 (add column). Type 2 is most common for maintaining history. We automate SCD handling in ETL processes."
      },
      {
        question: "Can you help optimize our existing data model?",
        answer: "Absolutely! We analyze current models, identify bottlenecks, and optimize through denormalization, better indexing, partitioning, materialized views, or schema redesign. We've improved query performance by 10-100x through optimization."
      },
      {
        question: "How long does data modeling take?",
        answer: "Depends on complexity. Simple models take 2-4 weeks, moderate complexity 1-2 months, enterprise-wide models 3-6 months. We work iteratively, delivering priority subject areas first so you can start development while modeling continues."
      },
      {
        question: "What tools do you use for modeling?",
        answer: "We use industry-standard tools like Erwin, PowerDesigner, ER/Studio for traditional modeling, and modern tools like dbt for transformation modeling. Choice depends on your environment and preferences."
      },
      {
        question: "How do you ensure models stay current?",
        answer: "We establish model governance including change management processes, version control, impact analysis, and documentation standards. Models should be living artifacts maintained alongside your data architecture."
      }
    ]
  },

  // Data Architecture
  {
    id: "7",
    slug: "data-architecture",
    name: "Data Architecture",
    category: "Data",
    tagline: "Design Scalable, Future-Proof Data Architectures",
    hero: {
      title: "Enterprise Data Architecture Services",
      description: "Build robust, scalable data architectures that support your business objectives. From on-premise to cloud, we design architectures that grow with you.",
      ctaText: "Architect Your Data Platform",
      image: "/data-ai/architecture-hero.jpg",
      showContactForm: true
    },
    overview: "Modern data architecture is the backbone of successful data initiatives. Arka Infotech designs enterprise-grade data architectures that balance scalability, performance, security, and cost. Our architects have deep experience across traditional, cloud, hybrid, and multi-cloud architectures. We design end-to-end solutions spanning data ingestion, storage, processing, analytics, and governance. Whether you need a modern data lakehouse, real-time streaming architecture, or hybrid cloud solution, we create reference architectures and detailed designs that guide implementation. Our architectures follow industry best practices while being tailored to your specific technical requirements, organizational capabilities, and business goals.",
    metrics: [
      {
        value: 100,
        suffix: "+",
        label: "Architectures Designed",
        description: "Across diverse industries and scales"
      },
      {
        value: 99.9,
        suffix: "%",
        label: "System Availability",
        description: "For production architectures"
      },
      {
        value: 60,
        suffix: "%",
        label: "Cost Optimization",
        description: "Through efficient architecture design"
      }
    ],
    services: [
      {
        title: "Architecture Assessment & Strategy",
        description: "Evaluate current architecture and design future-state roadmaps.",
        icon: "Compass",
        features: [
          "Current state assessment",
          "Gap analysis",
          "Future state vision",
          "Migration roadmap",
          "Technology stack recommendations"
        ]
      },
      {
        title: "Cloud Data Architecture",
        description: "Design modern cloud-native data architectures on AWS, Azure, or GCP.",
        icon: "Cloud",
        features: [
          "Data lake and lakehouse design",
          "Cloud warehouse architecture",
          "Serverless architectures",
          "Multi-cloud strategies",
          "Cloud cost optimization"
        ]
      },
      {
        title: "Real-Time Streaming Architecture",
        description: "Build architectures for real-time data processing and analytics.",
        icon: "Activity",
        features: [
          "Event-driven architectures",
          "Kafka-based streaming",
          "Lambda architecture",
          "Kappa architecture",
          "Stream processing design"
        ]
      },
      {
        title: "Data Integration Architecture",
        description: "Design robust integration patterns for diverse data sources.",
        icon: "Link",
        features: [
          "API-first design",
          "ETL/ELT architecture",
          "Change data capture (CDC)",
          "Data virtualization",
          "Integration patterns"
        ]
      },
      {
        title: "Data Security Architecture",
        description: "Implement comprehensive security at every architecture layer.",
        icon: "Shield",
        features: [
          "Zero-trust architecture",
          "Encryption strategies",
          "Access control design",
          "Data masking and tokenization",
          "Compliance architecture"
        ]
      },
      {
        title: "Hybrid & Multi-Cloud Architecture",
        description: "Design architectures spanning on-premise and multiple clouds.",
        icon: "Layers",
        features: [
          "Hybrid cloud design",
          "Multi-cloud strategies",
          "Data replication patterns",
          "Disaster recovery architecture",
          "Vendor independence strategies"
        ]
      }
    ],
    benefits: [
      {
        title: "Scalable Foundation",
        description: "Build architectures that scale elastically with growing data volumes and users.",
        icon: "ArrowUpCircle"
      },
      {
        title: "Cost Efficiency",
        description: "Optimize costs through right-sized infrastructure and efficient resource utilization.",
        icon: "DollarSign"
      },
      {
        title: "High Performance",
        description: "Deliver fast response times through optimized data flows and caching strategies.",
        icon: "Zap"
      },
      {
        title: "Security & Compliance",
        description: "Meet security and regulatory requirements with architectures built for compliance.",
        icon: "ShieldCheck"
      },
      {
        title: "Future-Proof Design",
        description: "Adopt flexible architectures that evolve with emerging technologies and requirements.",
        icon: "Sparkles"
      },
      {
        title: "Operational Excellence",
        description: "Achieve high availability and reliability with resilient, self-healing designs.",
        icon: "Settings"
      }
    ],
    whyChooseUs: [
      {
        title: "Certified Architects",
        description: "Team of certified solution architects across AWS, Azure, GCP, and enterprise platforms with proven track records.",
        icon: "Award"
      },
      {
        title: "End-to-End Expertise",
        description: "We design complete architectures from ingestion to analytics, not just isolated components.",
        icon: "GitBranch"
      },
      {
        title: "Proven Patterns",
        description: "Leverage battle-tested architecture patterns and reference architectures that have succeeded at scale.",
        icon: "BookOpen"
      },
      {
        title: "Implementation Partnership",
        description: "We don't just deliver diagrams—we partner through implementation to ensure architecture success.",
        icon: "Handshake"
      }
    ],
    techStack: [
      {
        category: "Cloud Platforms",
        items: [
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Databricks", icon: "SiDatabricks", color: "#FF3621" }
        ]
      },
      {
        category: "Streaming & Messaging",
        items: [
          { name: "Apache Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "Apache Pulsar", icon: "SiApache", color: "#188FFF" },
          { name: "AWS Kinesis", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure Event Hubs", icon: "SiMicrosoftazure", color: "#0078D4" }
        ]
      },
      {
        category: "Data Storage",
        items: [
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" },
          { name: "Delta Lake", icon: "SiDeltalake", color: "#00ADD4" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" }
        ]
      },
      {
        category: "Architecture Tools",
        items: [
          { name: "Terraform", icon: "SiTerraform", color: "#7B42BC" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
          { name: "Lucidchart", icon: "SiLucidchart", color: "#F96F1C" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Requirements",
        description: "Understanding your business and technical requirements",
        steps: [
          "Business objective alignment",
          "Current architecture review",
          "Use case documentation",
          "Non-functional requirements",
          "Constraint identification"
        ]
      },
      {
        phase: "Phase 2",
        title: "Architecture Design",
        description: "Creating comprehensive architecture designs",
        steps: [
          "Conceptual architecture",
          "Logical architecture design",
          "Technology stack selection",
          "Integration patterns definition",
          "Security architecture design"
        ]
      },
      {
        phase: "Phase 3",
        title: "Detailed Design & Planning",
        description: "Detailed component design and planning",
        steps: [
          "Component specifications",
          "Data flow diagrams",
          "Capacity planning",
          "Cost estimation",
          "Implementation roadmap"
        ]
      },
      {
        phase: "Phase 4",
        title: "Validation & Refinement",
        description: "Validating design through prototyping and reviews",
        steps: [
          "Architecture review boards",
          "Proof of concept development",
          "Performance validation",
          "Security assessment",
          "Design refinement"
        ]
      },
      {
        phase: "Phase 5",
        title: "Documentation & Handoff",
        description: "Comprehensive documentation and knowledge transfer",
        steps: [
          "Architecture documentation",
          "Design patterns library",
          "Implementation guidelines",
          "Team training",
          "Implementation support"
        ]
      }
    ],
    faq: [
      {
        question: "What's the difference between data architecture and database design?",
        answer: "Data architecture is the overall blueprint for how data moves, is stored, processed, and accessed across the enterprise. Database design is one component focused on schema design. Architecture encompasses databases, pipelines, integrations, analytics, governance, and more."
      },
      {
        question: "Do I need data architecture if I'm using cloud services?",
        answer: "Absolutely! Cloud provides building blocks, but you still need architecture to select right services, design data flows, ensure security, optimize costs, and create maintainable solutions. Poor architecture leads to expensive, slow, insecure systems even on cloud."
      },
      {
        question: "How long does architecture design take?",
        answer: "Depends on scope. High-level architecture takes 4-6 weeks. Detailed enterprise architecture takes 2-4 months. We work iteratively, delivering priority areas first so implementation can start while architecture work continues."
      },
      {
        question: "What's a data lakehouse and should I use it?",
        answer: "Lakehouse combines data lake flexibility (store any data) with warehouse performance (fast queries). Built on technologies like Delta Lake or Iceberg. Great for organizations needing both data science and BI. We assess if it fits your needs."
      },
      {
        question: "Should we go multi-cloud or single cloud?",
        answer: "Depends on your needs. Single cloud is simpler and often cheaper. Multi-cloud provides vendor independence and best-of-breed capabilities but adds complexity. We help evaluate tradeoffs based on your priorities, capabilities, and use cases."
      },
      {
        question: "How do you ensure architecture is scalable?",
        answer: "We design for horizontal scalability, use distributed systems, implement caching strategies, design for elasticity, and conduct capacity planning. We also build in monitoring and auto-scaling. All architectures are tested under load before production."
      },
      {
        question: "What about architecture for real-time analytics?",
        answer: "We design Lambda (batch + stream) or Kappa (stream only) architectures using Kafka, Flink, or cloud services. Includes event streaming, stream processing, fast storage (Redis, Druid), and real-time visualization. We balance latency requirements with complexity."
      },
      {
        question: "Can you help modernize our legacy architecture?",
        answer: "Yes! We specialize in modernization—assessing legacy systems, designing target architectures, and creating migration roadmaps. We use strangler fig pattern for gradual migration, minimizing risk while delivering incremental value."
      }
    ]
  },

  {
    id: "8",
    slug: "analytics-visualization",
    name: "Analytics & Visualization",
    category: "Data",
    tagline: "Transform Data into Actionable Visual Insights",
    hero: {
      title: "Advanced Analytics & Data Visualization Services",
      description: "Empower decision-makers with interactive dashboards, advanced analytics, and stunning visualizations. Turn complex data into compelling stories.",
      ctaText: "Visualize Your Data",
      image: "/data-ai/analytics-hero.jpg",
      showContactForm: true
    },
    overview: "Data without insights is just noise. Arka Infotech transforms your data into actionable intelligence through advanced analytics and compelling visualizations. Our team combines data science expertise with design thinking to create intuitive dashboards and reports that drive decisions. We implement solutions using leading platforms like Tableau, Power BI, Looker, and custom visualization frameworks. From executive dashboards to operational reports, from descriptive to predictive analytics, we deliver solutions that make data accessible and actionable for all stakeholders. Whether you need embedded analytics, mobile dashboards, or real-time monitoring, we create visualization solutions that resonate with your audience.",
    metrics: [
      {
        value: 85,
        suffix: "%",
        label: "Faster Decision Making",
        description: "With visual insights vs traditional reports"
      },
      {
        value: 500,
        suffix: "+",
        label: "Dashboards Delivered",
        description: "Across industries and use cases"
      },
      {
        value: 95,
        suffix: "%",
        label: "User Adoption",
        description: "For well-designed analytics solutions"
      }
    ],
    services: [
      {
        title: "Business Intelligence Dashboards",
        description: "Interactive dashboards that provide real-time insights into business performance.",
        icon: "BarChart",
        features: [
          "Executive dashboards",
          "Operational dashboards",
          "KPI scorecards",
          "Drill-down capabilities",
          "Mobile-responsive design"
        ]
      },
      {
        title: "Self-Service Analytics",
        description: "Empower business users to explore data and create their own insights.",
        icon: "Search",
        features: [
          "Data catalog implementation",
          "User-friendly interfaces",
          "Ad-hoc query capabilities",
          "Report builders",
          "Governed self-service"
        ]
      },
      {
        title: "Advanced Analytics",
        description: "Leverage statistical analysis, ML, and AI for predictive insights.",
        icon: "TrendingUp",
        features: [
          "Predictive analytics",
          "Forecasting models",
          "What-if analysis",
          "Statistical modeling",
          "Anomaly detection"
        ]
      },
      {
        title: "Custom Visualizations",
        description: "Create bespoke visualizations tailored to your specific needs.",
        icon: "Palette",
        features: [
          "Custom chart types",
          "Interactive visualizations",
          "D3.js implementations",
          "Geospatial visualizations",
          "Network graphs"
        ]
      },
      {
        title: "Embedded Analytics",
        description: "Integrate analytics and visualizations directly into your applications.",
        icon: "Code",
        features: [
          "White-label dashboards",
          "API-based integration",
          "Multi-tenant architecture",
          "Custom branding",
          "Seamless user experience"
        ]
      },
      {
        title: "Real-Time Analytics",
        description: "Monitor and visualize data as it flows through your systems.",
        icon: "Activity",
        features: [
          "Live dashboards",
          "Streaming data visualization",
          "Alert and notification systems",
          "Real-time KPI monitoring",
          "Event-driven updates"
        ]
      }
    ],
    benefits: [
      {
        title: "Faster Decisions",
        description: "Make data-driven decisions quickly with instant access to relevant insights.",
        icon: "Zap"
      },
      {
        title: "Better Understanding",
        description: "Understand complex data patterns through intuitive visualizations that reveal hidden insights.",
        icon: "Eye"
      },
      {
        title: "Increased Adoption",
        description: "Drive user adoption with beautiful, intuitive interfaces that make analytics accessible to everyone.",
        icon: "Users"
      },
      {
        title: "Actionable Insights",
        description: "Move beyond descriptive to prescriptive analytics that suggest actions to take.",
        icon: "Target"
      },
      {
        title: "Competitive Advantage",
        description: "Gain competitive edge by spotting trends and opportunities before competitors.",
        icon: "Award"
      },
      {
        title: "ROI Visibility",
        description: "Track and demonstrate ROI of initiatives with clear, measurable metrics.",
        icon: "DollarSign"
      }
    ],
    whyChooseUs: [
      {
        title: "Design + Analytics Expertise",
        description: "Unique combination of data science expertise and design thinking. We create visualizations that are both beautiful and insightful.",
        icon: "Sparkles"
      },
      {
        title: "Platform Mastery",
        description: "Certified experts in Tableau, Power BI, Looker, Qlik, and custom frameworks. We help you choose and implement the right platform.",
        icon: "Award"
      },
      {
        title: "User-Centric Approach",
        description: "We design for your users, not just for data. Extensive user research ensures solutions that people actually want to use.",
        icon: "Heart"
      },
      {
        title: "End-to-End Delivery",
        description: "From data modeling to visualization to deployment and training. Complete service ensures cohesive, production-ready solutions.",
        icon: "CheckCircle"
      }
    ],
    techStack: [
      {
        category: "BI Platforms",
        items: [
          { name: "Tableau", icon: "SiTableau", color: "#E97627" },
          { name: "Power BI", icon: "SiPowerbi", color: "#F2C811" },
          { name: "Looker", icon: "SiLooker", color: "#4285F4" },
          { name: "Qlik Sense", icon: "SiQlik", color: "#009848" }
        ]
      },
      {
        category: "Visualization Libraries",
        items: [
          { name: "D3.js", icon: "SiD3Dotjs", color: "#F9A03C" },
          { name: "Chart.js", icon: "SiChartdotjs", color: "#FF6384" },
          { name: "Plotly", icon: "SiPlotly", color: "#3F4F75" },
          { name: "Apache ECharts", icon: "SiApache", color: "#AA344D" }
        ]
      },
      {
        category: "Analytics Engines",
        items: [
          { name: "Apache Superset", icon: "SiApache", color: "#20A6C9" },
          { name: "Metabase", icon: "SiDatabase", color: "#509EE3" },
          { name: "Redash", icon: "SiDatabase", color: "#FF7964" },
          { name: "Grafana", icon: "SiGrafana", color: "#F46800" }
        ]
      },
      {
        category: "Data Science",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "R", icon: "SiR", color: "#276DC3" },
          { name: "Jupyter", icon: "SiJupyter", color: "#F37626" },
          { name: "Pandas", icon: "SiPandas", color: "#150458" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Design",
        description: "Understanding users, use cases, and visualization requirements",
        steps: [
          "User research and personas",
          "Use case documentation",
          "Data source identification",
          "Wireframe and mockup design",
          "Design approval"
        ]
      },
      {
        phase: "Phase 2",
        title: "Data Preparation",
        description: "Preparing and modeling data for analytics",
        steps: [
          "Data source integration",
          "Data modeling for BI",
          "Calculated fields and metrics",
          "Performance optimization",
          "Data validation"
        ]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Building dashboards and visualizations",
        steps: [
          "Dashboard development",
          "Visualization creation",
          "Interactivity implementation",
          "Filter and parameter setup",
          "Performance tuning"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & Refinement",
        description: "Validating accuracy and usability",
        steps: [
          "Data accuracy testing",
          "User acceptance testing",
          "Performance testing",
          "Feedback incorporation",
          "Design refinement"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment & Training",
        description: "Rolling out and enabling users",
        steps: [
          "Production deployment",
          "User training sessions",
          "Documentation delivery",
          "Support setup",
          "Continuous improvement"
        ]
      }
    ],
    faq: [
      {
        question: "Which BI tool is best: Tableau, Power BI, or Looker?",
        answer: "Depends on your needs. Tableau excels at complex visualizations and design flexibility. Power BI integrates well with Microsoft ecosystem and is cost-effective. Looker is great for technical teams and embedded analytics. We help you evaluate based on requirements, existing stack, and budget."
      },
      {
        question: "How long does it take to build a dashboard?",
        answer: "Simple dashboards take 1-2 weeks, moderate complexity 3-4 weeks, enterprise dashboards 2-3 months. Timeline depends on data preparation needs, complexity, and number of data sources. We deliver iteratively, starting with high-priority views."
      },
      {
        question: "Can you integrate analytics into our existing application?",
        answer: "Yes! We specialize in embedded analytics using platforms like Tableau Embedded, Power BI Embedded, or custom solutions. We white-label dashboards to match your brand and integrate seamlessly into your application workflow."
      },
      {
        question: "What's the difference between descriptive and predictive analytics?",
        answer: "Descriptive analytics tells you what happened (historical reporting). Predictive analytics forecasts what will happen using ML models. Prescriptive analytics suggests what to do. We implement all three, progressively maturing your analytics capability."
      },
      {
        question: "How do you ensure dashboard performance?",
        answer: "Through data modeling optimization, aggregations, caching, incremental refreshes, extracts vs live connections, query optimization, and platform-specific techniques. We conduct load testing and continuously monitor performance in production."
      },
      {
        question: "Can users create their own reports?",
        answer: "Yes! We implement self-service analytics with guardrails. Users can explore data, create ad-hoc reports, and save personal dashboards while governance ensures data security and quality. We provide training for self-service capabilities."
      },
      {
        question: "What about mobile analytics?",
        answer: "All our solutions are mobile-responsive. We design dashboards that work beautifully on phones and tablets, with touch-optimized interactions. Some platforms offer native mobile apps which we configure and deploy."
      },
      {
        question: "How do you handle dashboard governance?",
        answer: "We establish governance including content approval workflows, version control, access controls, certified vs sandbox content, and deprecation policies. Governance ensures quality while enabling innovation."
      }
    ]
  },

  // Cloud Data Migration
  {
    id: "9",
    slug: "cloud-data-migration",
    name: "Cloud Data Migration",
    category: "Data",
    tagline: "Seamless Migration to Modern Cloud Platforms",
    hero: {
      title: "Enterprise Cloud Data Migration Services",
      description: "Migrate your data to cloud with zero downtime and complete confidence. From legacy systems to modern cloud platforms, we handle migrations of any complexity.",
      ctaText: "Plan Your Migration",
      image: "/data-ai/migration-hero.jpg",
      showContactForm: true
    },
    overview: "Moving to the cloud is transformative but complex. Arka Infotech specializes in enterprise data migrations to AWS, Azure, GCP, and modern cloud data platforms. We've migrated petabytes of data from legacy systems including mainframes, on-premise databases, and older data warehouses to cloud platforms like Snowflake, Databricks, BigQuery, and cloud databases. Our proven methodologies minimize risk, ensure data integrity, and maintain business continuity throughout migration. We handle all aspects: assessment, planning, data profiling, transformation, testing, cutover, and validation. Whether you need a lift-and-shift, re-platforming, or complete modernization, we deliver successful migrations on time and on budget.",
    metrics: [
      {
        value: 150,
        suffix: "+",
        label: "Successful Migrations",
        description: "Completed without data loss"
      },
      {
        value: 99.99,
        suffix: "%",
        label: "Data Accuracy",
        description: "In migrated systems"
      },
      {
        value: 0,
        suffix: "",
        label: "Zero Downtime",
        description: "For mission-critical systems"
      }
    ],
    services: [
      {
        title: "Migration Assessment & Planning",
        description: "Comprehensive assessment and detailed migration roadmaps.",
        icon: "Clipboard",
        features: [
          "Current state assessment",
          "Data profiling and analysis",
          "Dependency mapping",
          "Risk assessment",
          "Detailed migration plan"
        ]
      },
      {
        title: "Database Migration",
        description: "Migrate databases from on-premise to cloud platforms.",
        icon: "Database",
        features: [
          "Oracle to PostgreSQL/Aurora",
          "SQL Server to Azure SQL",
          "MySQL to cloud variants",
          "NoSQL migrations",
          "Schema conversion"
        ]
      },
      {
        title: "Data Warehouse Migration",
        description: "Modernize legacy data warehouses to cloud platforms.",
        icon: "Warehouse",
        features: [
          "Teradata to Snowflake/BigQuery",
          "Oracle EDW to cloud",
          "Netezza modernization",
          "SQL Server DW to Synapse",
          "ETL modernization"
        ]
      },
      {
        title: "Mainframe Migration",
        description: "Move data from mainframe systems to modern platforms.",
        icon: "Server",
        features: [
          "VSAM to relational",
          "IMS/DB2 migration",
          "Data extraction and transformation",
          "COBOL copybook conversion",
          "Legacy system decommissioning"
        ]
      },
      {
        title: "Application Data Migration",
        description: "Migrate application databases during system upgrades or replacements.",
        icon: "Package",
        features: [
          "ERP data migration",
          "CRM data migration",
          "Custom application migration",
          "Version upgrades",
          "Platform changes"
        ]
      },
      {
        title: "Zero-Downtime Migration",
        description: "Execute migrations with minimal or no business disruption.",
        icon: "Zap",
        features: [
          "Replication-based migration",
          "Parallel run strategies",
          "Incremental sync",
          "Fast cutover execution",
          "Rollback planning"
        ]
      }
    ],
    benefits: [
      {
        title: "Risk Mitigation",
        description: "Minimize migration risks through proven methodologies and comprehensive testing.",
        icon: "Shield"
      },
      {
        title: "Data Integrity",
        description: "Ensure 100% data accuracy through automated validation and reconciliation processes.",
        icon: "CheckCircle"
      },
      {
        title: "Business Continuity",
        description: "Maintain operations throughout migration with zero or minimal downtime strategies.",
        icon: "Activity"
      },
      {
        title: "Cost Savings",
        description: "Reduce infrastructure costs by 40-60% by moving to cloud platforms.",
        icon: "DollarSign"
      },
      {
        title: "Modern Capabilities",
        description: "Unlock cloud capabilities like scalability, elasticity, and advanced analytics.",
        icon: "Sparkles"
      },
      {
        title: "Future-Ready",
        description: "Build foundation for AI, ML, and advanced analytics on modern platforms.",
        icon: "TrendingUp"
      }
    ],
    whyChooseUs: [
      {
        title: "Migration Specialists",
        description: "Dedicated team with 150+ successful migrations including complex enterprise and mainframe migrations.",
        icon: "Award"
      },
      {
        title: "Proven Methodology",
        description: "Battle-tested migration methodology covering assessment, planning, execution, validation, and optimization.",
        icon: "BookOpen"
      },
      {
        title: "Zero Data Loss Guarantee",
        description: "Comprehensive validation ensures 100% data accuracy. We've never lost data in a migration.",
        icon: "ShieldCheck"
      },
      {
        title: "Platform Expertise",
        description: "Deep expertise in all major cloud platforms (AWS, Azure, GCP) and modern data platforms (Snowflake, Databricks, BigQuery).",
        icon: "Cloud"
      }
    ],
    techStack: [
      {
        category: "Cloud Platforms",
        items: [
          { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Cloud", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" }
        ]
      },
      {
        category: "Migration Tools",
        items: [
          { name: "AWS DMS", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure Data Factory", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Dataflow", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Fivetran", icon: "SiDatabase", color: "#0073E6" }
        ]
      },
      {
        category: "Data Integration",
        items: [
          { name: "Informatica", icon: "SiInformatica", color: "#FF4F00" },
          { name: "Talend", icon: "SiTalend", color: "#1675BC" },
          { name: "Apache NiFi", icon: "SiApache", color: "#7B8794" },
          { name: "StreamSets", icon: "SiDatabase", color: "#0066CC" }
        ]
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Assessment",
        description: "Understanding what needs to be migrated",
        steps: [
          "Current system inventory",
          "Data profiling and analysis",
          "Dependency mapping",
          "Application impact assessment",
          "Migration approach selection"
        ]
      },
      {
        phase: "Phase 2",
        title: "Planning & Design",
        description: "Creating detailed migration plan",
        steps: [
          "Target architecture design",
          "Migration strategy definition",
          "Data transformation rules",
          "Testing strategy",
          "Detailed project plan and timeline"
        ]
      },
      {
        phase: "Phase 3",
        title: "Preparation & Setup",
        description: "Setting up environments and tools",
        steps: [
          "Target environment setup",
          "Migration tool configuration",
          "Network connectivity setup",
          "Security and access configuration",
          "Test environment creation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Execution & Testing",
        description: "Executing migration and validation",
        steps: [
          "Historical data migration",
          "Incremental sync setup",
          "Data validation and reconciliation",
          "Application testing",
          "Performance testing"
        ]
      },
      {
        phase: "Phase 5",
        title: "Cutover & Support",
        description: "Final migration and go-live",
        steps: [
          "Final sync execution",
          "Application cutover",
          "Go-live validation",
          "Hypercare support",
          "Legacy system decommissioning"
        ]
      }
    ],
    faq: [
      {
        question: "How long does cloud data migration take?",
        answer: "Depends on data volume and complexity. Small databases take 2-4 weeks, moderate systems 2-3 months, large enterprise migrations 6-12 months. We provide accurate timelines after assessment. We use agile approach to deliver incremental value."
      },
      {
        question: "Will there be downtime during migration?",
        answer: "We minimize downtime through replication-based migration, parallel running, and fast cutover strategies. Many migrations achieve zero downtime. For others, downtime is limited to hours during final cutover window, scheduled for off-peak times."
      },
      {
        question: "How do you ensure data accuracy after migration?",
        answer: "We implement comprehensive validation including row count reconciliation, checksum validation, sample data verification, and business rule validation. Automated tools compare source and target at multiple levels. We achieve 99.99%+ accuracy."
      },
      {
        question: "What if something goes wrong during migration?",
        answer: "We have detailed rollback plans for every migration. If issues arise during cutover, we can quickly rollback to source system. We also run multiple test migrations before production cutover to identify and fix issues early."
      },
      {
        question: "Can you migrate from mainframe systems?",
        answer: "Yes! We specialize in mainframe migrations including VSAM, IMS, DB2 on mainframe. We extract data, transform COBOL copybooks, convert to relational structures, and migrate to modern platforms. We've successfully decommissioned multiple mainframes."
      },
      {
        question: "How much does cloud migration cost?",
        answer: "Costs vary by source system, data volume, complexity, and target platform. We provide detailed estimates after assessment. While migration has upfront costs, cloud typically delivers 40-60% cost savings in years 2-3 through reduced infrastructure and operational costs."
      },
      {
        question: "Do you migrate applications too or just data?",
        answer: "We primarily focus on data migration but partner with application teams. For databases, we can refactor application code for new platforms. For data warehouses, we modernize ETL processes. We coordinate closely with application migration efforts."
      },
      {
        question: "What about ETL/data pipeline migration?",
        answer: "Yes! We modernize legacy ETL from tools like Informatica, DataStage, SSIS to cloud-native solutions like AWS Glue, Azure Data Factory, or modern platforms like dbt, Airflow. We convert logic, implement in new platform, and validate outputs."
      }
    ]
  },

  // Custom AI Development
  {
    id: "10",
    slug: "custom-ai-development",
    name: "Custom AI Development",
    category: "AI",
    tagline: "Build Intelligent Solutions Tailored to Your Business",
    hero: {
      title: "Custom AI & Machine Learning Development",
      description: "Develop custom AI solutions that solve your unique business challenges. From computer vision to NLP, we build AI that delivers measurable results.",
      ctaText: "Build Your AI Solution",
      image: "/data-ai/custom-ai-hero.jpg",
      showContactForm: true
    },
    overview: "Arka Infotech develops custom AI and machine learning solutions tailored to your specific business needs. Our data scientists and ML engineers have expertise across computer vision, natural language processing, predictive analytics, recommendation systems, and more. We follow a rigorous methodology from problem definition through model development, deployment, and monitoring. Using cutting-edge frameworks like TensorFlow, PyTorch, and scikit-learn, we build models that deliver accuracy and performance. We don't just build models—we deliver complete AI solutions including data pipelines, model serving infrastructure, monitoring, and continuous improvement. Whether you need to automate processes, predict outcomes, or extract insights from unstructured data, we build AI that works.",
    metrics: [
      {
        value: 92,
        suffix: "%",
        label: "Average Model Accuracy",
        description: "Across production AI systems"
      },
      {
        value: 100,
        suffix: "+",
        label: "AI Models Deployed",
        description: "In production environments"
      },
      {
        value: 3,
        suffix: "X",
        label: "Productivity Improvement",
        description: "Through AI automation"
      }
    ],
    services: [
      {
        title: "Computer Vision",
        description: "Build AI that can see, understand, and analyze visual content.",
        icon: "Eye",
        features: [
          "Image classification",
          "Object detection and tracking",
          "Face recognition",
          "Optical character recognition (OCR)",
          "Video analytics"
        ]
      },
      {
        title: "Natural Language Processing",
        description: "Extract meaning and insights from text and speech.",
        icon: "MessageSquare",
        features: [
          "Text classification",
          "Named entity recognition",
          "Sentiment analysis",
          "Document understanding",
          "Chatbots and virtual assistants"
        ]
      },
      {
        title: "Predictive Analytics",
        description: "Forecast outcomes and trends using machine learning models.",
        icon: "TrendingUp",
        features: [
          "Demand forecasting",
          "Customer churn prediction",
          "Sales forecasting",
          "Risk prediction",
          "Time series analysis"
        ]
      },
      {
        title: "Recommendation Systems",
        description: "Personalize experiences with intelligent recommendation engines.",
        icon: "Star",
        features: [
          "Product recommendations",
          "Content recommendations",
          "Collaborative filtering",
          "Hybrid recommendation systems",
          "Real-time personalization"
        ]
      },
      {
        title: "Anomaly Detection",
        description: "Identify unusual patterns and outliers in your data.",
        icon: "AlertTriangle",
        features: [
          "Fraud detection",
          "Quality control",
          "System monitoring",
          "Predictive maintenance",
          "Security threat detection"
        ]
      },
      {
        title: "MLOps & Model Deployment",
        description: "Productionize and monitor AI models at scale.",
        icon: "Settings",
        features: [
          "Model serving infrastructure",
          "CI/CD for ML",
          "Model monitoring",
          "A/B testing frameworks",
          "Model retraining pipelines"
        ]
      }
    ],
    benefits: [
      {
        title: "Automation",
        description: "Automate complex tasks that previously required human intelligence and judgment.",
        icon: "Zap"
      },
      {
        title: "Better Predictions",
        description: "Make more accurate predictions about future outcomes and behaviors.",
        icon: "Target"
      },
      {
        title: "Cost Reduction",
        description: "Reduce operational costs through intelligent automation and optimization.",
        icon: "DollarSign"
      },
      {
        title: "Enhanced Experience",
        description: "Deliver personalized, intelligent experiences that delight customers.",
        icon: "Heart"
      },
      {
        title: "Competitive Edge",
        description: "Gain advantages through AI capabilities that competitors lack.",
        icon: "Award"
      },
      {
        title: "Scalable Intelligence",
        description: "Scale intelligent decision-making beyond human capacity limits.",
        icon: "ArrowUpCircle"
      }
    ],
    whyChooseUs: [
      {
        title: "Proven AI Expertise",
        description: "Team of data scientists and ML engineers with advanced degrees and real-world experience delivering production AI systems.",
        icon: "Brain"
      },
      {
        title: "End-to-End Delivery",
        description: "We handle everything from data preparation through model deployment and monitoring. Not just models, but complete AI solutions.",
        icon: "CheckCircle"
      },
      {
        title: "Business-Focused",
        description: "We prioritize business outcomes over academic metrics. Our models deliver ROI, not just high accuracy scores.",
        icon: "TrendingUp"
      },
      {
        title: "Latest Technologies",
        description: "Expertise in cutting-edge frameworks and techniques including deep learning, transformers, and foundation models.",
        icon: "Sparkles"
      }
    ],
    techStack: [
      {
        category: "ML Frameworks",
        items: [
          { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
          { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
          { name: "scikit-learn", icon: "SiScikitlearn", color: "#F7931E" },
          { name: "Keras", icon: "SiKeras", color: "#D00000" }
        ]
      },
      {
        category: "NLP & Vision",
        items: [
          { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E" },
          { name: "spaCy", icon: "SiSpacy", color: "#09A3D5" },
          { name: "OpenCV", icon: "SiOpencv", color: "#5C3EE8" },
          { name: "YOLO", icon: "SiYolo", color: "#00FFFF" }
        ]
      },
      {
        category: "MLOps Platforms",
        items: [
          { name: "MLflow", icon: "SiMlflow", color: "#0194E2" },
          { name: "Kubeflow", icon: "SiKubeflow", color: "#326CE5" },
          { name: "AWS SageMaker", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure ML", icon: "SiMicrosoftazure", color: "#0078D4" }
        ]
      },
      {
        category: "Programming",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "R", icon: "SiR", color: "#276DC3" },
          { name: "Jupyter", icon: "SiJupyter", color: "#F37626" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Problem Definition",
        description: "Understanding the business problem and AI opportunity",
        steps: [
          "Business objective definition",
          "Success metrics establishment",
          "Data availability assessment",
          "Feasibility study",
          "ROI estimation"
        ]
      },
      {
        phase: "Phase 2",
        title: "Data Preparation",
        description: "Preparing high-quality training data",
        steps: [
          "Data collection and integration",
          "Data cleaning and preprocessing",
          "Feature engineering",
          "Data labeling (if needed)",
          "Train/validation/test split"
        ]
      },
      {
        phase: "Phase 3",
        title: "Model Development",
        description: "Building and training AI models",
        steps: [
          "Algorithm selection",
          "Model architecture design",
          "Model training and tuning",
          "Hyperparameter optimization",
          "Model evaluation and validation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Deployment",
        description: "Putting models into production",
        steps: [
          "Model serving infrastructure",
          "API development",
          "Integration with applications",
          "Performance optimization",
          "Security implementation"
        ]
      },
      {
        phase: "Phase 5",
        title: "Monitoring & Improvement",
        description: "Continuous monitoring and model enhancement",
        steps: [
          "Model performance monitoring",
          "Data drift detection",
          "Model retraining pipeline",
          "A/B testing of model versions",
          "Continuous optimization"
        ]
      }
    ],
    faq: [
      {
        question: "How do I know if AI can solve my business problem?",
        answer: "We conduct a feasibility assessment evaluating: availability of data, problem suitability for ML, expected accuracy requirements, and ROI potential. Not every problem needs AI—we'll be honest about whether AI is the right solution for your specific case."
      },
      {
        question: "How much data do I need for AI?",
        answer: "Depends on problem complexity. Simple classification might need thousands of examples, computer vision tens of thousands, complex NLP hundreds of thousands. We can also use transfer learning and data augmentation to work with smaller datasets."
      },
      {
        question: "How long does AI development take?",
        answer: "Simple models take 6-8 weeks, moderate complexity 3-4 months, complex systems 6-12 months. We use agile methodology delivering MVPs quickly, then iterating. You'll see working models early in the process, not months later."
      },
      {
        question: "What accuracy can I expect from AI models?",
        answer: "Depends on use case and data quality. We typically achieve 85-95% accuracy for classification problems, though it varies. More importantly, we focus on business metrics (ROI, cost savings) not just technical metrics. We establish success criteria upfront."
      },
      {
        question: "How do you ensure AI models don't become biased?",
        answer: "We implement fairness checks, diverse training data, bias detection algorithms, and regular audits. We test models across demographic groups and use techniques like adversarial debiasing. Fairness is evaluated alongside accuracy."
      },
      {
        question: "Can you explain how your AI models work?",
        answer: "Yes! We prioritize model explainability. We use techniques like SHAP, LIME, and attention visualization to explain model decisions. For regulated industries, we can build inherently interpretable models. Transparency is built into our process."
      },
      {
        question: "What happens after deployment?",
        answer: "We set up monitoring for model performance, data drift, and business metrics. Models degrade over time, so we implement retraining pipelines. We offer ongoing support including model updates, performance optimization, and feature additions."
      },
      {
        question: "Can AI integrate with our existing systems?",
        answer: "Absolutely! We deploy models via APIs, embed them in applications, integrate with databases and data warehouses. We work with your existing technology stack and ensure seamless integration with minimal disruption."
      }
    ]
  },

  // AI Consulting Strategy
  {
    id: "11",
    slug: "ai-consulting-strategy",
    name: "AI Consulting & Strategy",
    category: "AI",
    tagline: "Chart Your AI Transformation Journey",
    hero: {
      title: "Strategic AI Consulting Services",
      description: "Develop comprehensive AI strategies that align with business goals. From opportunity identification to roadmap creation, we guide your AI transformation.",
      ctaText: "Start Your AI Journey",
      image: "/data-ai/ai-strategy-hero.jpg",
      showContactForm: true
    },
    overview: "Embarking on an AI journey requires strategic planning and expert guidance. Arka Infotech provides comprehensive AI consulting services that help organizations identify opportunities, assess readiness, and create actionable AI strategies. Our consultants combine deep technical expertise with business acumen to chart realistic, impactful AI transformation roadmaps. We help you navigate the hype, understand what's possible, and prioritize initiatives that deliver ROI. From AI maturity assessment to use case identification, from responsible AI frameworks to organizational capability building, we provide strategic advisory that sets you up for AI success.",
    metrics: [
      {
        value: 75,
        suffix: "+",
        label: "AI Strategies Developed",
        description: "Across diverse industries"
      },
      {
        value: 4,
        suffix: "X",
        label: "Average ROI",
        description: "From strategic AI initiatives"
      },
      {
        value: 90,
        suffix: "%",
        label: "Strategy Execution Success",
        description: "Implementation success rate"
      }
    ],
    services: [
      {
        title: "AI Opportunity Assessment",
        description: "Identify high-impact AI use cases specific to your business.",
        icon: "Search",
        features: [
          "Process analysis",
          "Use case identification",
          "Feasibility evaluation",
          "ROI estimation",
          "Priority ranking"
        ]
      },
      {
        title: "AI Maturity Assessment",
        description: "Evaluate your organization's readiness for AI adoption.",
        icon: "BarChart",
        features: [
          "Data maturity evaluation",
          "Technical capability assessment",
          "Organizational readiness",
          "Gap analysis",
          "Maturity roadmap"
        ]
      },
      {
        title: "AI Strategy Development",
        description: "Create comprehensive AI strategies aligned with business objectives.",
        icon: "Target",
        features: [
          "Vision and objectives definition",
          "Use case roadmap",
          "Technology stack recommendations",
          "Organizational design",
          "Investment planning"
        ]
      },
      {
        title: "Responsible AI Framework",
        description: "Establish ethical AI practices and governance.",
        icon: "Shield",
        features: [
          "AI ethics principles",
          "Bias mitigation strategies",
          "Explainability frameworks",
          "AI governance models",
          "Regulatory compliance"
        ]
      },
      {
        title: "AI Capability Building",
        description: "Develop organizational capabilities to sustain AI initiatives.",
        icon: "Users",
        features: [
          "Operating model design",
          "Team structure and roles",
          "Training programs",
          "Center of Excellence setup",
          "Vendor ecosystem management"
        ]
      },
      {
        title: "POC & Pilot Programs",
        description: "Validate AI concepts through proof-of-concept projects.",
        icon: "Lightbulb",
        features: [
          "POC scoping and execution",
          "Pilot program design",
          "Quick wins identification",
          "Results measurement",
          "Scale-up planning"
        ]
      }
    ],
    benefits: [
      {
        title: "Clear Direction",
        description: "Gain clarity on where AI can drive value and how to get started.",
        icon: "Compass"
      },
      {
        title: "Reduced Risk",
        description: "Avoid costly mistakes through expert guidance and proven frameworks.",
        icon: "ShieldCheck"
      },
      {
        title: "Faster Time to Value",
        description: "Accelerate AI adoption by focusing on high-impact, feasible initiatives first.",
        icon: "Zap"
      },
      {
        title: "Aligned Investments",
        description: "Ensure AI investments directly support strategic business objectives.",
        icon: "Target"
      },
      {
        title: "Sustainable Capability",
        description: "Build lasting AI capabilities, not just one-off projects.",
        icon: "TrendingUp"
      },
      {
        title: "Competitive Advantage",
        description: "Position your organization as an AI leader in your industry.",
        icon: "Award"
      }
    ],
    whyChooseUs: [
      {
        title: "Strategic + Technical",
        description: "Unique blend of strategy consulting and deep technical AI expertise. We understand both boardroom and codebase.",
        icon: "GitBranch"
      },
      {
        title: "Industry Experience",
        description: "Worked across 20+ industries with proven frameworks adapted to your sector-specific challenges and opportunities.",
        icon: "Building"
      },
      {
        title: "Pragmatic Approach",
        description: "We cut through AI hype to focus on realistic, achievable initiatives that deliver measurable business value.",
        icon: "CheckCircle"
      },
      {
        title: "Implementation Partnership",
        description: "We don't just deliver strategy documents—we partner through implementation to ensure success.",
        icon: "Handshake"
      }
    ],
    techStack: [
      {
        category: "Assessment Tools",
        items: [
          { name: "Process Mining", icon: "SiDatabase", color: "#0066CC" },
          { name: "Data Profiling", icon: "SiApache", color: "#D22128" },
          { name: "Analytics", icon: "SiTableau", color: "#E97627" },
          { name: "Visualization", icon: "SiPowerbi", color: "#F2C811" }
        ]
      },
      {
        category: "AI Platforms",
        items: [
          { name: "AWS AI Services", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Azure AI", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Google Cloud AI", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "OpenAI", icon: "SiOpenai", color: "#412991" }
        ]
      },
      {
        category: "MLOps & Governance",
        items: [
          { name: "MLflow", icon: "SiMlflow", color: "#0194E2" },
          { name: "Kubeflow", icon: "SiKubeflow", color: "#326CE5" },
          { name: "DataRobot", icon: "SiDatabase", color: "#00B4A0" },
          { name: "H2O.ai", icon: "SiDatabase", color: "#FEC925" }
        ]
      },
      {
        category: "Collaboration",
        items: [
          { name: "Miro", icon: "SiMiro", color: "#FFD02F" },
          { name: "Confluence", icon: "SiConfluence", color: "#172B4D" },
          { name: "Jira", icon: "SiJira", color: "#0052CC" },
          { name: "Microsoft Teams", icon: "SiMicrosoftteams", color: "#6264A7" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Assessment",
        description: "Understanding your business and AI potential",
        steps: [
          "Executive stakeholder interviews",
          "Business process analysis",
          "Data and technology assessment",
          "Competitive landscape review",
          "Quick wins identification"
        ]
      },
      {
        phase: "Phase 2",
        title: "Use Case Development",
        description: "Identifying and prioritizing AI opportunities",
        steps: [
          "Use case ideation workshops",
          "Feasibility analysis",
          "ROI modeling",
          "Risk assessment",
          "Priority ranking"
        ]
      },
      {
        phase: "Phase 3",
        title: "Strategy Formulation",
        description: "Creating comprehensive AI strategy",
        steps: [
          "Vision and goals definition",
          "Multi-year roadmap creation",
          "Capability development plan",
          "Technology architecture",
          "Investment and resource planning"
        ]
      },
      {
        phase: "Phase 4",
        title: "Stakeholder Alignment",
        description: "Securing organizational buy-in",
        steps: [
          "Executive presentation",
          "Board-level communications",
          "Department workshops",
          "Change management planning",
          "Governance framework"
        ]
      },
      {
        phase: "Phase 5",
        title: "Implementation Launch",
        description: "Kicking off AI initiatives",
        steps: [
          "POC project initiation",
          "Team formation and training",
          "Vendor selection support",
          "Progress tracking setup",
          "Ongoing advisory"
        ]
      }
    ],
    faq: [
      {
        question: "Do we need an AI strategy?",
        answer: "If AI is important to your future competitiveness, yes. A strategy ensures focused, coordinated efforts rather than scattered experiments. It aligns investments with business goals, builds necessary capabilities, and avoids costly mistakes. Without strategy, most AI initiatives fail."
      },
      {
        question: "How long does AI strategy development take?",
        answer: "Typically 8-12 weeks for comprehensive strategy including assessment, use case development, roadmap, and alignment. We can provide accelerated approaches for urgent needs. Strategy is living document that evolves as you learn."
      },
      {
        question: "What's included in an AI strategy?",
        answer: "Current state assessment, AI vision and objectives, prioritized use case roadmap, technology recommendations, organizational design, capability development plan, governance framework, investment plan, and implementation approach. Deliverables are actionable, not theoretical."
      },
      {
        question: "How do you identify which AI use cases to pursue?",
        answer: "We evaluate use cases across multiple dimensions: business value potential, technical feasibility, data availability, implementation complexity, risk level, and strategic fit. We use scoring frameworks to objectively prioritize, recommending quick wins alongside strategic initiatives."
      },
      {
        question: "What if we don't have data scientists?",
        answer: "That's common! Strategy includes capability building plan addressing: build vs. buy decisions, hiring roadmap, training programs, partnership models, and Center of Excellence setup. We help you build AI capabilities appropriate to your ambitions and resources."
      },
      {
        question: "Can you help with implementation after strategy?",
        answer: "Absolutely! We offer end-to-end services from strategy through implementation. We can build AI solutions, establish AI teams, implement governance, and provide ongoing advisory. Many clients engage us for multi-year AI transformation partnerships."
      },
      {
        question: "How do you address AI ethics and responsible AI?",
        answer: "Ethics is core to our approach. We help establish AI principles, bias detection/mitigation practices, explainability requirements, governance models, and compliance frameworks. Responsible AI isn't afterthought—it's built into strategy from day one."
      },
      {
        question: "What's the ROI of AI strategy?",
        answer: "Strategy itself delivers ROI by preventing costly failures and focusing resources on high-value initiatives. Organizations with AI strategy achieve 3-5x better outcomes than those without. Specific use cases typically deliver 2-10x ROI depending on the problem solved."
      }
    ]
  },

  // AI Business Intelligence
  {
    id: "12",
    slug: "ai-business-intelligence",
    name: "AI-Powered Business Intelligence",
    category: "AI",
    tagline: "Intelligent Analytics That Predict and Prescribe",
    hero: {
      title: "AI-Enhanced Business Intelligence Solutions",
      description: "Go beyond traditional BI with AI-powered analytics that predict trends, detect anomalies, and recommend actions automatically.",
      ctaText: "Enhance Your BI with AI",
      image: "/data-ai/ai-bi-hero.jpg",
      showContactForm: true
    },
    overview: "Traditional business intelligence tells you what happened. AI-powered BI tells you what will happen and what to do about it. Arka Infotech enhances your analytics with artificial intelligence capabilities including automated insights, predictive analytics, natural language query, smart alerts, and automated reporting. We integrate AI into existing BI platforms like Tableau, Power BI, and Looker, or build custom AI analytics solutions. Our AI-enhanced BI solutions surface insights automatically, predict future trends, detect anomalies in real-time, and recommend optimal actions. Transform your BI from reactive reporting to proactive intelligence that drives business outcomes.",
    metrics: [
      {
        value: 70,
        suffix: "%",
        label: "Faster Insights",
        description: "AI surfaces insights automatically"
      },
      {
        value: 85,
        suffix: "%",
        label: "Prediction Accuracy",
        description: "For forecasting models"
      },
      {
        value: 90,
        suffix: "%",
        label: "Anomaly Detection Rate",
        description: "Catch issues before impact"
      }
    ],
    services: [
      {
        title: "Automated Insights",
        description: "AI automatically discovers and surfaces relevant insights from data.",
        icon: "Sparkles",
        features: [
          "Automated pattern detection",
          "Insight generation and ranking",
          "Natural language explanations",
          "Contextual recommendations",
          "Proactive alerts"
        ]
      },
      {
        title: "Predictive Analytics",
        description: "Forecast future trends and outcomes with machine learning.",
        icon: "TrendingUp",
        features: [
          "Sales forecasting",
          "Demand prediction",
          "Customer behavior prediction",
          "Risk scoring",
          "Scenario modeling"
        ]
      },
      {
        title: "Natural Language Query",
        description: "Ask questions in plain English and get instant answers.",
        icon: "MessageCircle",
        features: [
          "Conversational BI",
          "Voice-enabled analytics",
          "Automated question answering",
          "Context-aware responses",
          "Multi-turn dialogue"
        ]
      },
      {
        title: "Anomaly Detection",
        description: "Automatically detect unusual patterns and outliers.",
        icon: "AlertCircle",
        features: [
          "Real-time anomaly detection",
          "Root cause analysis",
          "Smart alerting",
          "False positive reduction",
          "Impact assessment"
        ]
      },
      {
        title: "Prescriptive Analytics",
        description: "Get AI-powered recommendations on actions to take.",
        icon: "Target",
        features: [
          "Action recommendations",
          "Optimization suggestions",
          "What-if scenario analysis",
          "Decision support",
          "Next-best-action"
        ]
      },
      {
        title: "Automated Reporting",
        description: "AI generates and distributes reports automatically.",
        icon: "FileText",
        features: [
          "Auto-generated narratives",
          "Intelligent report scheduling",
          "Personalized content",
          "Key insights highlighting",
          "Multi-channel distribution"
        ]
      }
    ],
    benefits: [
      {
        title: "Proactive Intelligence",
        description: "Move from reactive reporting to proactive insights that predict and prevent issues.",
        icon: "Zap"
      },
      {
        title: "Democratized Analytics",
        description: "Enable non-technical users to get insights through natural language interactions.",
        icon: "Users"
      },
      {
        title: "Faster Decision Making",
        description: "Reduce time from data to decision with automated insight discovery and recommendations.",
        icon: "Clock"
      },
      {
        title: "Reduced Blind Spots",
        description: "AI surfaces insights humans might miss in large, complex datasets.",
        icon: "Eye"
      },
      {
        title: "Operational Efficiency",
        description: "Automate manual analysis tasks, freeing analysts for strategic work.",
        icon: "Settings"
      },
      {
        title: "Better Outcomes",
        description: "Improve business results through more accurate predictions and optimized decisions.",
        icon: "Award"
      }
    ],
    whyChooseUs: [
      {
        title: "BI + AI Expertise",
        description: "Unique combination of traditional BI expertise and cutting-edge AI capabilities. We understand both domains deeply.",
        icon: "GitBranch"
      },
      {
        title: "Platform Agnostic",
        description: "Enhance your existing BI platform (Tableau, Power BI, Looker) with AI or build custom solutions. Not locked into specific vendors.",
        icon: "Layers"
      },
      {
        title: "User-Centric Design",
        description: "Focus on making AI accessible to business users, not just data scientists. Intuitive interfaces that anyone can use.",
        icon: "Heart"
      },
      {
        title: "Production-Ready",
        description: "Deliver AI that works reliably in production, not just impressive demos. We handle scalability, monitoring, and maintenance.",
        icon: "CheckCircle"
      }
    ],
    techStack: [
      {
        category: "BI Platforms",
        items: [
          { name: "Tableau", icon: "SiTableau", color: "#E97627" },
          { name: "Power BI", icon: "SiPowerbi", color: "#F2C811" },
          { name: "Looker", icon: "SiLooker", color: "#4285F4" },
          { name: "ThoughtSpot", icon: "SiDatabase", color: "#FF6600" }
        ]
      },
      {
        category: "AI & ML",
        items: [
          { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
          { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
          { name: "scikit-learn", icon: "SiScikitlearn", color: "#F7931E" },
          { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E" }
        ]
      },
      {
        category: "NLP & Analytics",
        items: [
          { name: "OpenAI", icon: "SiOpenai", color: "#412991" },
          { name: "Azure Cognitive", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "AWS AI Services", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "spaCy", icon: "SiSpacy", color: "#09A3D5" }
        ]
      },
      {
        category: "Data Platforms",
        items: [
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" },
          { name: "Databricks", icon: "SiDatabricks", color: "#FF3621" },
          { name: "BigQuery", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Current State Assessment",
        description: "Understanding your current BI landscape",
        steps: [
          "BI platform review",
          "User need assessment",
          "Data quality evaluation",
          "Use case identification",
          "AI opportunity mapping"
        ]
      },
      {
        phase: "Phase 2",
        title: "AI Solution Design",
        description: "Designing AI enhancements to BI",
        steps: [
          "Use case prioritization",
          "Architecture design",
          "Model selection",
          "Integration planning",
          "User experience design"
        ]
      },
      {
        phase: "Phase 3",
        title: "Development",
        description: "Building AI-powered analytics",
        steps: [
          "Data pipeline development",
          "Model development and training",
          "BI integration",
          "UI/UX implementation",
          "Testing and validation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Deployment & Training",
        description: "Rolling out AI-enhanced BI",
        steps: [
          "Production deployment",
          "User training",
          "Documentation",
          "Monitoring setup",
          "Support enablement"
        ]
      },
      {
        phase: "Phase 5",
        title: "Optimization",
        description: "Continuous improvement of AI capabilities",
        steps: [
          "User feedback collection",
          "Model retraining",
          "Feature enhancements",
          "Performance optimization",
          "New capability addition"
        ]
      }
    ],
    faq: [
      {
        question: "How is AI-powered BI different from traditional BI?",
        answer: "Traditional BI is descriptive (what happened) and diagnostic (why it happened). AI-powered BI adds predictive (what will happen), prescriptive (what should we do), and automated insight discovery. AI also enables natural language query and proactive alerts."
      },
      {
        question: "Can we add AI to our existing BI platform?",
        answer: "Yes! We enhance existing platforms like Tableau, Power BI, and Looker with AI capabilities through extensions, embedded models, and integrated services. We work with your current investments rather than replacing them."
      },
      {
        question: "What kind of predictions can AI provide?",
        answer: "Common predictions include sales forecasts, demand planning, customer churn, equipment failure, inventory optimization, price optimization, and risk scoring. Specific predictions depend on your data and business problems."
      },
      {
        question: "How accurate are automated insights?",
        answer: "Our insight engines achieve 80-90% relevance, meaning most surfaced insights are actually interesting and actionable. We use ML to learn from user feedback, continuously improving relevance. False positive insights decrease over time."
      },
      {
        question: "Will natural language query work with our specific data?",
        answer: "Yes! We train NLP models on your specific data schema, business terminology, and common questions. The system learns your organization's language. Initially might require some training, but improves quickly with use."
      },
      {
        question: "How long does implementation take?",
        answer: "Depends on scope. Single AI capability (e.g., automated insights) takes 6-8 weeks. Comprehensive AI-BI platform takes 3-6 months. We deliver iteratively, so you see value early and often, not after months of waiting."
      },
      {
        question: "What about explainability? Can users understand AI insights?",
        answer: "Absolutely critical! We implement explainable AI techniques and generate natural language explanations for all AI outputs. Users see not just predictions, but why the AI made them. Transparency builds trust."
      },
      {
        question: "Can AI-powered BI work with real-time data?",
        answer: "Yes! We implement streaming analytics with real-time anomaly detection, live predictions, and instant alerts. Latency depends on use case but can be seconds for critical applications."
      }
    ]
  },

  // Large Language Models Solutions
  {
    id: "13",
    slug: "large-language-models",
    name: "Large Language Models Solutions",
    category: "AI",
    tagline: "Harness the Power of Generative AI and LLMs",
    hero: {
      title: "Enterprise LLM & Generative AI Solutions",
      description: "Deploy custom LLM solutions powered by GPT-4, Claude, and open-source models. Build intelligent chatbots, content generation, and document processing systems.",
      ctaText: "Explore LLM Solutions",
      image: "/data-ai/llm-hero.jpg",
      showContactForm: true
    },
    overview: "Large Language Models are transforming how businesses interact with text, generate content, and process information. Arka Infotech helps organizations harness LLMs like GPT-4, Claude, Llama, and specialized models for enterprise applications. We build custom LLM solutions including intelligent chatbots, document processing systems, content generation platforms, code assistants, and knowledge management systems. Our expertise spans prompt engineering, fine-tuning, retrieval-augmented generation (RAG), and LLMOps. We ensure responsible AI deployment with hallucination mitigation, bias detection, and enterprise security. Whether you need customer support automation, content creation at scale, or intelligent document extraction, we deliver LLM solutions that work reliably in production.",
    metrics: [
      {
        value: 80,
        suffix: "%",
        label: "Automation Rate",
        description: "For repetitive knowledge work"
      },
      {
        value: 50,
        suffix: "+",
        label: "LLM Projects Delivered",
        description: "Across industries and use cases"
      },
      {
        value: 90,
        suffix: "%",
        label: "User Satisfaction",
        description: "With LLM-powered applications"
      }
    ],
    services: [
      {
        title: "Intelligent Chatbots",
        description: "Build conversational AI powered by LLMs for customer support and internal assistance.",
        icon: "MessageCircle",
        features: [
          "GPT-4/Claude-powered chatbots",
          "Multi-turn conversations",
          "Context-aware responses",
          "Integration with knowledge bases",
          "Multi-language support"
        ]
      },
      {
        title: "Document Intelligence",
        description: "Extract insights and automate processing of documents using LLMs.",
        icon: "FileText",
        features: [
          "Intelligent document extraction",
          "Summarization and analysis",
          "Q&A over documents",
          "Contract analysis",
          "Compliance checking"
        ]
      },
      {
        title: "Content Generation",
        description: "Automate content creation for marketing, documentation, and more.",
        icon: "Edit",
        features: [
          "Blog and article generation",
          "Marketing copy creation",
          "Product descriptions",
          "Email drafting",
          "Social media content"
        ]
      },
      {
        title: "RAG Systems",
        description: "Build retrieval-augmented generation systems for accurate, grounded responses.",
        icon: "Database",
        features: [
          "Vector database integration",
          "Semantic search",
          "Citation and sourcing",
          "Knowledge base creation",
          "Context retrieval optimization"
        ]
      },
      {
        title: "LLM Fine-Tuning",
        description: "Customize LLMs for your specific domain and use cases.",
        icon: "Settings",
        features: [
          "Domain-specific fine-tuning",
          "Instruction tuning",
          "Few-shot learning",
          "RLHF implementation",
          "Model evaluation"
        ]
      },
      {
        title: "LLMOps & Monitoring",
        description: "Operationalize LLM applications with robust infrastructure and monitoring.",
        icon: "Activity",
        features: [
          "Prompt management",
          "Version control",
          "Cost optimization",
          "Quality monitoring",
          "Hallucination detection"
        ]
      }
    ],
    benefits: [
      {
        title: "Productivity Boost",
        description: "Automate knowledge work and free employees for high-value tasks.",
        icon: "Zap"
      },
      {
        title: "24/7 Availability",
        description: "Provide instant, intelligent responses around the clock without human intervention.",
        icon: "Clock"
      },
      {
        title: "Scalable Intelligence",
        description: "Handle unlimited simultaneous conversations and tasks that would require armies of people.",
        icon: "ArrowUpCircle"
      },
      {
        title: "Consistent Quality",
        description: "Deliver consistent, high-quality responses every time without variation.",
        icon: "CheckCircle"
      },
      {
        title: "Cost Savings",
        description: "Reduce operational costs by automating repetitive knowledge work.",
        icon: "DollarSign"
      },
      {
        title: "Competitive Advantage",
        description: "Deploy cutting-edge AI capabilities that differentiate your offerings.",
        icon: "Award"
      }
    ],
    whyChooseUs: [
      {
        title: "LLM Expertise",
        description: "Deep expertise across GPT-4, Claude, Llama, and open-source models. We know which model fits which use case.",
        icon: "Brain"
      },
      {
        title: "Production-Ready",
        description: "We build reliable systems, not demos. Our solutions handle production scale with proper error handling, monitoring, and fallbacks.",
        icon: "Shield"
      },
      {
        title: "Responsible AI Focus",
        description: "We implement guardrails against hallucinations, bias detection, content filtering, and privacy protection from day one.",
        icon: "ShieldCheck"
      },
      {
        title: "Cost Optimization",
        description: "We optimize LLM costs through prompt engineering, caching, model selection, and intelligent routing. Typical 40-60% cost reduction.",
        icon: "DollarSign"
      }
    ],
    techStack: [
      {
        category: "LLM Providers",
        items: [
          { name: "OpenAI", icon: "SiOpenai", color: "#412991" },
          { name: "Anthropic", icon: "SiDatabase", color: "#191919" },
          { name: "Google AI", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "AWS Bedrock", icon: "SiAmazonaws", color: "#FF9900" }
        ]
      },
      {
        category: "Open Source LLMs",
        items: [
          { name: "Llama", icon: "SiMeta", color: "#0081FB" },
          { name: "Mistral", icon: "SiDatabase", color: "#FF7000" },
          { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E" },
          { name: "LangChain", icon: "SiDatabase", color: "#1C3C3C" }
        ]
      },
      {
        category: "Vector Databases",
        items: [
          { name: "Pinecone", icon: "SiDatabase", color: "#000000" },
          { name: "Weaviate", icon: "SiDatabase", color: "#00C795" },
          { name: "Chroma", icon: "SiDatabase", color: "#FF6F3C" },
          { name: "pgvector", icon: "SiPostgresql", color: "#336791" }
        ]
      },
      {
        category: "Frameworks",
        items: [
          { name: "LangChain", icon: "SiPython", color: "#3776AB" },
          { name: "LlamaIndex", icon: "SiPython", color: "#3776AB" },
          { name: "Haystack", icon: "SiPython", color: "#3776AB" },
          { name: "Semantic Kernel", icon: "SiMicrosoft", color: "#5E5E5E" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Use Case Definition",
        description: "Understanding your LLM requirements and constraints",
        steps: [
          "Business problem definition",
          "Success criteria establishment",
          "Data sensitivity assessment",
          "Model selection",
          "Proof of concept planning"
        ]
      },
      {
        phase: "Phase 2",
        title: "Prompt Engineering",
        description: "Developing optimal prompts and workflows",
        steps: [
          "Prompt template design",
          "Few-shot example curation",
          "Chain-of-thought implementation",
          "Iterative testing and refinement",
          "Prompt versioning setup"
        ]
      },
      {
        phase: "Phase 3",
        title: "RAG Implementation",
        description: "Building retrieval-augmented generation systems",
        steps: [
          "Knowledge base preparation",
          "Vector database setup",
          "Chunking strategy implementation",
          "Retrieval optimization",
          "Grounding and citation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Application Development",
        description: "Building the complete LLM application",
        steps: [
          "API integration",
          "User interface development",
          "Guardrails implementation",
          "Error handling and fallbacks",
          "Testing and validation"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment & Monitoring",
        description: "Production deployment with observability",
        steps: [
          "Production deployment",
          "Performance monitoring",
          "Cost tracking and optimization",
          "Quality metrics tracking",
          "Continuous improvement"
        ]
      }
    ],
    faq: [
      {
        question: "Which LLM should we use: GPT-4, Claude, or open-source?",
        answer: "Depends on use case. GPT-4 excels at complex reasoning, Claude at long context and safety, open-source (Llama) for cost and data privacy. We evaluate based on requirements, budget, privacy concerns, and latency needs. Often we use multiple models for different tasks."
      },
      {
        question: "How do you prevent LLM hallucinations?",
        answer: "Multiple techniques: RAG with retrieval for factual grounding, confidence scoring, citation requirements, temperature tuning, and output validation. We also implement human-in-the-loop for high-stakes decisions. No solution is perfect, but we dramatically reduce hallucinations."
      },
      {
        question: "How much does it cost to run LLM applications?",
        answer: "Varies by usage. GPT-4 costs $0.01-0.06 per 1K tokens, smaller models less. We optimize costs through prompt engineering, caching, model selection, and batching. Most applications cost $500-5000/month depending on scale. We provide detailed cost projections."
      },
      {
        question: "Can LLMs work with our proprietary data securely?",
        answer: "Yes! We implement RAG where your data stays in your control. For sensitive use cases, we deploy private LLMs (self-hosted Llama, private GPT) or use zero-retention APIs. We never fine-tune commercial models on sensitive data without explicit consent."
      },
      {
        question: "How long does LLM implementation take?",
        answer: "Simple chatbot: 4-6 weeks. Complex RAG system: 2-3 months. Enterprise LLM platform: 4-6 months. We use rapid prototyping to show value in weeks, then iterate. You'll see working prototypes early, not after months of development."
      },
      {
        question: "Do you fine-tune LLMs or just use APIs?",
        answer: "Both! For most use cases, prompt engineering + RAG with commercial APIs works well and is faster/cheaper. For specialized domains or specific behaviors, we fine-tune. We help you choose the right approach based on your needs and resources."
      },
      {
        question: "What about prompt injection and security?",
        answer: "Critical concern! We implement input sanitization, output filtering, privilege separation, and prompt injection detection. We follow OWASP LLM security guidelines and conduct security testing. LLM security is built in, not bolted on."
      },
      {
        question: "Can LLMs integrate with our existing systems?",
        answer: "Yes! We integrate LLMs with CRMs, databases, APIs, document repositories, and custom applications. We build secure APIs and proper authentication. LLMs become intelligent layers on top of your existing systems."
      }
    ]
  },

  // AI Personalized Customer Experience
  {
    id: "14",
    slug: "ai-personalized-customer-experience",
    name: "AI Personalized Customer Experience",
    category: "AI",
    tagline: "Deliver Hyper-Personalized Experiences at Scale",
    hero: {
      title: "AI-Powered Personalization Solutions",
      description: "Transform customer experiences with AI-driven personalization. Deliver the right content, products, and experiences to each individual customer in real-time.",
      ctaText: "Personalize Your Customer Experience",
      image: "/data-ai/personalization-hero.jpg",
      showContactForm: true
    },
    overview: "Modern customers expect personalized experiences. Arka Infotech builds AI-powered personalization engines that deliver individualized experiences across all touchpoints. Our solutions leverage machine learning to understand customer behavior, preferences, and context to dynamically personalize content, recommendations, offers, and journeys. We implement real-time personalization using techniques including collaborative filtering, deep learning, reinforcement learning, and contextual bandits. From e-commerce product recommendations to content personalization to dynamic pricing, we build systems that increase engagement, conversion, and lifetime value. Our personalization solutions integrate seamlessly with your existing platforms while delivering measurable business impact.",
    metrics: [
      {
        value: 35,
        suffix: "%",
        label: "Conversion Rate Increase",
        description: "Average lift from personalization"
      },
      {
        value: 45,
        suffix: "%",
        label: "Engagement Boost",
        description: "Improvement in customer engagement"
      },
      {
        value: 25,
        suffix: "%",
        label: "Revenue Growth",
        description: "Increase through personalization"
      }
    ],
    services: [
      {
        title: "Product Recommendations",
        description: "Intelligent recommendation engines that drive discovery and purchases.",
        icon: "ShoppingCart",
        features: [
          "Personalized product recommendations",
          "Collaborative filtering",
          "Content-based filtering",
          "Hybrid recommendation systems",
          "Real-time recommendations"
        ]
      },
      {
        title: "Content Personalization",
        description: "Dynamically personalize website content for each visitor.",
        icon: "Layout",
        features: [
          "Dynamic content delivery",
          "Personalized landing pages",
          "Email personalization",
          "Content recommendations",
          "A/B testing integration"
        ]
      },
      {
        title: "Customer Journey Optimization",
        description: "Optimize customer journeys using AI-driven insights.",
        icon: "TrendingUp",
        features: [
          "Journey mapping and analysis",
          "Next-best-action recommendations",
          "Churn prediction and prevention",
          "Cross-sell and upsell optimization",
          "Lifecycle stage personalization"
        ]
      },
      {
        title: "Dynamic Pricing",
        description: "AI-powered pricing optimization for maximum revenue.",
        icon: "DollarSign",
        features: [
          "Price optimization algorithms",
          "Demand forecasting",
          "Competitive pricing intelligence",
          "Personalized pricing",
          "Promotion optimization"
        ]
      },
      {
        title: "Behavioral Targeting",
        description: "Target customers based on behavioral patterns and signals.",
        icon: "Target",
        features: [
          "Real-time behavior tracking",
          "Segment-of-one personalization",
          "Intent prediction",
          "Contextual targeting",
          "Cross-channel orchestration"
        ]
      },
      {
        title: "Marketing Automation",
        description: "AI-enhanced marketing automation for personalized campaigns.",
        icon: "Mail",
        features: [
          "Predictive send time optimization",
          "Content recommendation",
          "Campaign optimization",
          "Automated segmentation",
          "Multi-channel orchestration"
        ]
      }
    ],
    benefits: [
      {
        title: "Increased Conversions",
        description: "Drive higher conversion rates by showing customers what they actually want.",
        icon: "TrendingUp"
      },
      {
        title: "Enhanced Engagement",
        description: "Keep customers engaged longer with relevant, personalized experiences.",
        icon: "Heart"
      },
      {
        title: "Higher Revenue",
        description: "Increase average order value and lifetime value through intelligent recommendations.",
        icon: "DollarSign"
      },
      {
        title: "Reduced Churn",
        description: "Retain customers by proactively addressing their needs and preventing churn.",
        icon: "Shield"
      },
      {
        title: "Better ROI",
        description: "Maximize marketing ROI by targeting the right people with the right message.",
        icon: "Target"
      },
      {
        title: "Competitive Edge",
        description: "Stand out with experiences that feel tailored to each individual customer.",
        icon: "Award"
      }
    ],
    whyChooseUs: [
      {
        title: "Personalization Experts",
        description: "Deep expertise in recommendation systems, personalization algorithms, and real-time decisioning across industries.",
        icon: "Brain"
      },
      {
        title: "Measurable Results",
        description: "We focus on business metrics: conversion rate, revenue, engagement. Every personalization has clear KPIs and we measure impact.",
        icon: "BarChart"
      },
      {
        title: "Real-Time Capability",
        description: "Our solutions operate in real-time, personalizing experiences based on current context and behavior, not just historical data.",
        icon: "Zap"
      },
      {
        title: "Privacy-First",
        description: "We implement personalization that respects privacy, complies with regulations, and maintains customer trust.",
        icon: "Lock"
      }
    ],
    techStack: [
      {
        category: "Recommendation Engines",
        items: [
          { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
          { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
          { name: "Surprise", icon: "SiPython", color: "#3776AB" },
          { name: "LightFM", icon: "SiPython", color: "#3776AB" }
        ]
      },
      {
        category: "Personalization Platforms",
        items: [
          { name: "Segment", icon: "SiSegment", color: "#52BD95" },
          { name: "Optimizely", icon: "SiOptimizely", color: "#0073E5" },
          { name: "Adobe Target", icon: "SiAdobe", color: "#FF0000" },
          { name: "Dynamic Yield", icon: "SiDatabase", color: "#FF6B6B" }
        ]
      },
      {
        category: "Real-Time Processing",
        items: [
          { name: "Apache Kafka", icon: "SiApachekafka", color: "#231F20" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" },
          { name: "AWS Kinesis", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Apache Flink", icon: "SiApacheflink", color: "#E6526F" }
        ]
      },
      {
        category: "Analytics",
        items: [
          { name: "Google Analytics", icon: "SiGoogleanalytics", color: "#E37400" },
          { name: "Mixpanel", icon: "SiMixpanel", color: "#7856FF" },
          { name: "Amplitude", icon: "SiAmplitude", color: "#047BF8" },
          { name: "Snowflake", icon: "SiSnowflake", color: "#29B5E8" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Strategy",
        description: "Understanding personalization opportunities",
        steps: [
          "Customer journey mapping",
          "Use case identification",
          "Data availability assessment",
          "Personalization strategy",
          "Success metrics definition"
        ]
      },
      {
        phase: "Phase 2",
        title: "Data Foundation",
        description: "Building data infrastructure for personalization",
        steps: [
          "Customer data platform setup",
          "Behavioral tracking implementation",
          "Data integration",
          "Feature engineering",
          "Real-time pipeline setup"
        ]
      },
      {
        phase: "Phase 3",
        title: "Model Development",
        description: "Building personalization algorithms",
        steps: [
          "Algorithm selection",
          "Model training",
          "Cold-start strategy",
          "A/B testing framework",
          "Performance optimization"
        ]
      },
      {
        phase: "Phase 4",
        title: "Integration & Deployment",
        description: "Integrating personalization into experiences",
        steps: [
          "API development",
          "Platform integration",
          "Real-time deployment",
          "Fallback strategies",
          "Quality assurance"
        ]
      },
      {
        phase: "Phase 5",
        title: "Optimization",
        description: "Continuous improvement through testing",
        steps: [
          "Performance monitoring",
          "A/B test execution",
          "Model retraining",
          "Feature iteration",
          "ROI measurement"
        ]
      }
    ],
    faq: [
      {
        question: "How is AI personalization different from basic segmentation?",
        answer: "Traditional segmentation groups customers into broad categories. AI personalization creates unique experiences for each individual based on their specific behavior, preferences, context, and real-time signals. It's segment-of-one marketing at scale."
      },
      {
        question: "How quickly can we see results from personalization?",
        answer: "Initial implementations show lift in 4-8 weeks. Full optimization takes 3-6 months as models learn from data. We start with high-impact, low-complexity use cases to demonstrate value quickly, then expand to more sophisticated personalization."
      },
      {
        question: "How much data do we need for personalization?",
        answer: "Basic personalization can start with thousands of users. Sophisticated systems benefit from millions of interactions. We handle cold-start problems (new users/products) through hybrid approaches, content-based recommendations, and transfer learning."
      },
      {
        question: "Will personalization work for B2B or just B2C?",
        answer: "Personalization works excellently for B2B! We personalize content, product recommendations, and journeys for B2B buyers. The principles are similar but we account for longer sales cycles, multiple stakeholders, and account-level personalization."
      },
      {
        question: "How do you handle privacy and consent for personalization?",
        answer: "We implement privacy-first personalization complying with GDPR, CCPA. Users control their data, can opt out, and we're transparent about personalization. Effective personalization doesn't require invasive tracking—contextual signals and first-party data work well."
      },
      {
        question: "Can personalization integrate with our existing tech stack?",
        answer: "Yes! We integrate with e-commerce platforms (Shopify, Magento), CDPs (Segment, mParticle), marketing tools (Braze, Iterable), and analytics platforms. We build flexible APIs that work with your stack."
      },
      {
        question: "How do you measure personalization success?",
        answer: "We track business metrics: conversion rate, revenue per visitor, engagement, cart size, churn rate, and lifetime value. We run rigorous A/B tests comparing personalized vs. non-personalized experiences. Success is measured in dollars, not just algorithmic metrics."
      },
      {
        question: "What if personalization recommendations are wrong?",
        answer: "We implement feedback loops, monitoring, and quality controls. Bad recommendations are detected quickly and models adapt. We use ensemble approaches and hybrid systems to improve robustness. Fallback strategies ensure graceful degradation."
      }
    ]
  },

  // Blockchain
  {
    id: "15",
    slug: "blockchain",
    name: "Blockchain Solutions",
    category: "AI",
    tagline: "Build Secure, Transparent, Decentralized Systems",
    hero: {
      title: "Enterprise Blockchain Development Services",
      description: "Leverage blockchain technology for transparency, security, and trust. From smart contracts to DeFi, we build blockchain solutions that solve real business problems.",
      ctaText: "Explore Blockchain Solutions",
      image: "/data-ai/blockchain-hero.jpg",
      showContactForm: true
    },
    overview: "Blockchain technology offers unprecedented transparency, security, and decentralization for business applications. Arka Infotech develops enterprise blockchain solutions across Ethereum, Hyperledger, Polygon, and other platforms. Our blockchain engineers build smart contracts, decentralized applications (dApps), NFT platforms, DeFi protocols, and private blockchain networks. We help organizations leverage blockchain for supply chain transparency, digital identity, tokenization, secure data sharing, and automated settlements. Whether you need a public blockchain application or a permissioned enterprise network, we deliver production-ready blockchain solutions that solve real business problems while navigating the complex landscape of consensus mechanisms, gas optimization, and security best practices.",
    metrics: [
      {
        value: 40,
        suffix: "+",
        label: "Blockchain Projects",
        description: "Delivered across industries"
      },
      {
        value: 100,
        suffix: "%",
        label: "Smart Contract Audits",
        description: "Security audits passed"
      },
      {
        value: 99.9,
        suffix: "%",
        label: "Uptime",
        description: "For production blockchain systems"
      }
    ],
    services: [
      {
        title: "Smart Contract Development",
        description: "Build secure, audited smart contracts on leading blockchain platforms.",
        icon: "FileCode",
        features: [
          "Solidity development",
          "Smart contract auditing",
          "Gas optimization",
          "Upgradeable contracts",
          "Security best practices"
        ]
      },
      {
        title: "DApp Development",
        description: "Create decentralized applications with intuitive user experiences.",
        icon: "Smartphone",
        features: [
          "Full-stack dApp development",
          "Web3 integration",
          "Wallet connectivity",
          "IPFS integration",
          "Cross-chain compatibility"
        ]
      },
      {
        title: "NFT Platforms",
        description: "Build NFT marketplaces and platforms for digital assets.",
        icon: "Image",
        features: [
          "NFT minting platforms",
          "Marketplace development",
          "Royalty mechanisms",
          "Metadata management",
          "Multi-chain support"
        ]
      },
      {
        title: "DeFi Solutions",
        description: "Develop decentralized finance protocols and applications.",
        icon: "Coins",
        features: [
          "DEX development",
          "Lending protocols",
          "Yield farming",
          "Token staking",
          "Liquidity pools"
        ]
      },
      {
        title: "Enterprise Blockchain",
        description: "Implement permissioned blockchain networks for enterprises.",
        icon: "Building",
        features: [
          "Hyperledger Fabric",
          "Private blockchain networks",
          "Consortium management",
          "Identity management",
          "Integration with legacy systems"
        ]
      },
      {
        title: "Tokenization",
        description: "Tokenize real-world assets on blockchain.",
        icon: "Gem",
        features: [
          "Asset tokenization",
          "Security token offerings",
          "Token economics design",
          "Regulatory compliance",
          "Fractional ownership"
        ]
      }
    ],
    benefits: [
      {
        title: "Transparency",
        description: "Immutable, auditable records that all stakeholders can verify and trust.",
        icon: "Eye"
      },
      {
        title: "Security",
        description: "Cryptographic security and decentralization eliminate single points of failure.",
        icon: "ShieldCheck"
      },
      {
        title: "Automation",
        description: "Smart contracts automate processes, reducing costs and eliminating intermediaries.",
        icon: "Zap"
      },
      {
        title: "Trust",
        description: "Build trust without trusted intermediaries through cryptographic verification.",
        icon: "Award"
      },
      {
        title: "Efficiency",
        description: "Streamline processes by removing intermediaries and enabling direct peer-to-peer transactions.",
        icon: "TrendingUp"
      },
      {
        title: "New Business Models",
        description: "Enable novel business models like tokenization, DAOs, and decentralized marketplaces.",
        icon: "Lightbulb"
      }
    ],
    whyChooseUs: [
      {
        title: "Blockchain Expertise",
        description: "Deep expertise across Ethereum, Hyperledger, Polygon, Solana, and emerging blockchain platforms.",
        icon: "Code"
      },
      {
        title: "Security First",
        description: "All smart contracts undergo rigorous security audits. We follow security best practices and have zero security incidents.",
        icon: "Lock"
      },
      {
        title: "Business Focus",
        description: "We focus on blockchain applications that solve real business problems, not just technology for technology's sake.",
        icon: "Target"
      },
      {
        title: "End-to-End Delivery",
        description: "From ideation through smart contract development to dApp deployment and maintenance. Complete blockchain solutions.",
        icon: "CheckCircle"
      }
    ],
    techStack: [
      {
        category: "Blockchain Platforms",
        items: [
          { name: "Ethereum", icon: "SiEthereum", color: "#3C3C3D" },
          { name: "Polygon", icon: "SiPolygon", color: "#8247E5" },
          { name: "Hyperledger", icon: "SiHyperledger", color: "#2F3134" },
          { name: "Solana", icon: "SiSolana", color: "#14F195" }
        ]
      },
      {
        category: "Development",
        items: [
          { name: "Solidity", icon: "SiSolidity", color: "#363636" },
          { name: "Rust", icon: "SiRust", color: "#000000" },
          { name: "Web3.js", icon: "SiWeb3Dotjs", color: "#F16822" },
          { name: "Hardhat", icon: "SiEthereum", color: "#3C3C3D" }
        ]
      },
      {
        category: "Infrastructure",
        items: [
          { name: "IPFS", icon: "SiIpfs", color: "#65C2CB" },
          { name: "Infura", icon: "SiEthereum", color: "#FF6B4A" },
          { name: "Alchemy", icon: "SiDatabase", color: "#4E6EE5" },
          { name: "The Graph", icon: "SiGraphql", color: "#6B4FBB" }
        ]
      },
      {
        category: "Security & Testing",
        items: [
          { name: "OpenZeppelin", icon: "SiOpenzeppelin", color: "#4E5EE4" },
          { name: "Slither", icon: "SiPython", color: "#3776AB" },
          { name: "Mythril", icon: "SiEthereum", color: "#3C3C3D" },
          { name: "Truffle", icon: "SiTruffle", color: "#5E4692" }
        ]
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Strategy",
        description: "Understanding blockchain opportunity",
        steps: [
          "Use case evaluation",
          "Blockchain selection",
          "Architecture design",
          "Token economics (if applicable)",
          "Regulatory assessment"
        ]
      },
      {
        phase: "Phase 2",
        title: "Smart Contract Development",
        description: "Building secure smart contracts",
        steps: [
          "Contract design",
          "Solidity development",
          "Gas optimization",
          "Unit testing",
          "Test deployment"
        ]
      },
      {
        phase: "Phase 3",
        title: "Security Audit",
        description: "Comprehensive security assessment",
        steps: [
          "Code review",
          "Automated security tools",
          "Manual penetration testing",
          "Vulnerability remediation",
          "Audit report"
        ]
      },
      {
        phase: "Phase 4",
        title: "DApp Development",
        description: "Building user-facing application",
        steps: [
          "Frontend development",
          "Web3 integration",
          "Wallet connectivity",
          "Backend services",
          "User testing"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment & Support",
        description: "Mainnet deployment and ongoing support",
        steps: [
          "Mainnet deployment",
          "Monitoring setup",
          "Documentation",
          "User training",
          "Ongoing maintenance"
        ]
      }
    ],
    faq: [
      {
        question: "When should we use blockchain vs. traditional databases?",
        answer: "Use blockchain when you need: decentralization, immutability, transparency across untrusted parties, or elimination of intermediaries. Use traditional databases for: centralized control, high transaction volume, data privacy, or complex queries. We help you assess if blockchain is right fit."
      },
      {
        question: "Which blockchain platform should we use?",
        answer: "Depends on requirements. Ethereum for maximum decentralization and ecosystem, Polygon for lower costs, Hyperledger for private enterprise networks, Solana for high throughput. We evaluate based on performance needs, privacy requirements, cost constraints, and ecosystem maturity."
      },
      {
        question: "How do you ensure smart contract security?",
        answer: "Multi-layer approach: secure coding practices, extensive unit testing, automated security tools (Slither, Mythril), manual code review, third-party audits, bug bounties, and formal verification for critical contracts. We follow OpenZeppelin security patterns."
      },
      {
        question: "What are gas fees and how do you optimize them?",
        answer: "Gas fees are transaction costs on Ethereum. We optimize through: efficient Solidity code, batching operations, using Layer 2 solutions (Polygon, Arbitrum), upgradeable contracts, and off-chain computation. Typical 40-60% gas reduction through optimization."
      },
      {
        question: "How long does blockchain development take?",
        answer: "Simple smart contract: 4-6 weeks. Complex DApp: 3-4 months. Enterprise blockchain: 4-8 months. Timeline includes development, testing, security audits, and deployment. We deliver iteratively with testnet deployments early in process."
      },
      {
        question: "Can blockchain integrate with our existing systems?",
        answer: "Yes! We build APIs and oracles to connect blockchain with traditional systems. Common patterns: blockchain for verification/audit trail while traditional databases handle high-volume operations. Hybrid architectures balance blockchain benefits with practical requirements."
      },
      {
        question: "What about regulatory compliance for blockchain?",
        answer: "Complex and evolving area. We help navigate regulations including securities laws for tokens, AML/KYC for financial applications, and data privacy. We implement compliance features like permissioned access, identity verification, and regulatory reporting where needed."
      },
      {
        question: "What are the ongoing costs of running blockchain applications?",
        answer: "Costs include: gas fees for transactions (variable), node hosting (if running own nodes), storage (IPFS/Arweave), development updates, and security monitoring. Layer 2 solutions dramatically reduce transaction costs. We provide detailed cost projections and optimization strategies."
      }
    ]
  }
];

export const getDataAIServiceBySlug = (slug: string): DataAIServiceContent | undefined => {
  return dataAIServices.find(service => service.slug === slug);
};

export const getDataAIServicesByCategory = (category: 'Data' | 'AI'): DataAIServiceContent[] => {
  return dataAIServices.filter(service => service.category === category);
};

export const getAllDataAIServices = (): DataAIServiceContent[] => {
  return dataAIServices;
};

