export interface CloudServiceContent {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  hero: {
    title: string;
    description: string;
    ctaText: string;
    image: string;
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
  tools: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
      lucideIcon: string;
      description: string;
    }>;
  }>;
  technologies: Array<{
    category: string;
    items: Array<{
      name: string;
      icon: string;
      color: string;
    }>;
  }>;
  whyChooseUs: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  otherTechnologies: Array<{
    name: string;
    slug: string;
    icon: string;
    description: string;
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
  caseStudies?: Array<{
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  }>;
}

export const cloudProviders: CloudServiceContent[] = [
  // AWS
  {
    id: "1",
    slug: "aws",
    name: "Amazon Web Services (AWS)",
    tagline: "Transform Your Business with AWS Cloud Solutions",
    hero: {
      title: "Expert AWS Cloud Solutions & Services",
      description: "Accelerate your digital transformation with our comprehensive AWS cloud services. From migration to optimization, we help businesses leverage the full power of Amazon Web Services.",
      ctaText: "Start Your AWS Journey",
      image: "/cloud/aws-hero.jpg"
    },
    overview: "At Arka Infotech, we specialize in helping businesses harness the full potential of Amazon Web Services (AWS) - the world's most comprehensive cloud platform. Our certified AWS architects and engineers design, implement, and optimize cloud solutions that reduce costs, improve scalability, and enhance security. Whether you're migrating from on-premise infrastructure, optimizing existing AWS deployments, or building new cloud-native applications, we provide end-to-end AWS services tailored to your business needs. With expertise across compute, storage, databases, networking, AI/ML, and security, we transform your AWS investment into measurable business value through improved performance, reduced operational overhead, and accelerated innovation.",
    metrics: [
      {
        value: 10,
        suffix: "+",
        label: "Certified AWS Architects",
        description: "Team of AWS-certified professionals with deep expertise"
      },
      {
        value: 70,
        suffix: "%",
        label: "Average Cost Savings",
        description: "Reduction in infrastructure costs through optimization"
      },
      {
        value: 100,
        suffix: "+",
        label: "Projects Delivered",
        description: "Successfully deployed AWS solutions worldwide"
      }
    ],
    services: [
      {
        title: "AWS Cloud Migration",
        description: "Seamlessly migrate your applications, databases, and infrastructure to AWS with minimal downtime and maximum efficiency.",
        icon: "CloudUpload",
        features: [
          "Lift-and-shift migrations",
          "Re-platforming and refactoring",
          "Database migration (DMS)",
          "Zero-downtime strategies",
          "Legacy system modernization"
        ]
      },
      {
        title: "AWS Architecture & Design",
        description: "Build scalable, secure, and cost-effective cloud architectures following AWS Well-Architected Framework principles.",
        icon: "Network",
        features: [
          "Well-Architected reviews",
          "Multi-tier architecture design",
          "Microservices architecture",
          "Serverless solutions",
          "High availability setup"
        ]
      },
      {
        title: "AWS DevOps & CI/CD",
        description: "Automate your deployment pipeline with AWS DevOps tools for faster releases and improved reliability.",
        icon: "GitBranch",
        features: [
          "CodePipeline setup",
          "Infrastructure as Code (CloudFormation)",
          "Container orchestration (ECS/EKS)",
          "Automated testing",
          "Blue-green deployments"
        ]
      },
      {
        title: "AWS Security & Compliance",
        description: "Implement enterprise-grade security with AWS best practices and ensure compliance with industry standards.",
        icon: "Shield",
        features: [
          "IAM policies and roles",
          "Security groups and NACLs",
          "AWS WAF and Shield",
          "Compliance frameworks (HIPAA, PCI-DSS)",
          "Security audits and monitoring"
        ]
      },
      {
        title: "AWS Data & Analytics",
        description: "Build powerful data pipelines and analytics solutions using AWS's comprehensive data services.",
        icon: "Database",
        features: [
          "Data lakes (S3, Glue)",
          "Real-time analytics (Kinesis)",
          "Data warehousing (Redshift)",
          "Business intelligence (QuickSight)",
          "Machine learning (SageMaker)"
        ]
      },
      {
        title: "AWS Managed Services",
        description: "24/7 monitoring, management, and optimization of your AWS infrastructure by certified experts.",
        icon: "Settings",
        features: [
          "Proactive monitoring",
          "Cost optimization",
          "Performance tuning",
          "Backup and disaster recovery",
          "24/7 technical support"
        ]
      },
      {
        title: "AWS Serverless Solutions",
        description: "Build and deploy serverless applications with AWS Lambda, API Gateway, and managed services.",
        icon: "Zap",
        features: [
          "Lambda function development",
          "API Gateway configuration",
          "Event-driven architectures",
          "Step Functions workflows",
          "Serverless databases (DynamoDB)"
        ]
      },
      {
        title: "AWS Networking & CDN",
        description: "Design secure, high-performance networks with VPC, Direct Connect, and CloudFront CDN.",
        icon: "Wifi",
        features: [
          "VPC design and setup",
          "Direct Connect implementation",
          "Route 53 DNS management",
          "CloudFront CDN",
          "VPN and hybrid connectivity"
        ]
      },
      {
        title: "AWS Cost Optimization",
        description: "Reduce cloud spending without compromising performance through intelligent resource management.",
        icon: "DollarSign",
        features: [
          "Cost analysis and reporting",
          "Right-sizing recommendations",
          "Reserved instance planning",
          "Spot instance strategies",
          "Budget alerts and governance"
        ]
      }
    ],
    tools: [
      {
        category: "Compute Services",
        items: [
          { 
            name: "Amazon EC2", 
            icon: "SiAmazonec2", 
            lucideIcon: "Server",
            description: "Secure and resizable compute capacity in the cloud. Launch virtual servers with complete control over configuration, operating systems, and applications for any workload." 
          },
          { 
            name: "AWS Lambda", 
            icon: "SiAwslambda", 
            lucideIcon: "Zap",
            description: "Run code without provisioning servers. Execute functions in response to events, automatically scale, and pay only for compute time consumed - perfect for microservices." 
          },
          { 
            name: "Amazon ECS", 
            icon: "SiAmazonecs", 
            lucideIcon: "Box",
            description: "Fully managed container orchestration service that makes it easy to deploy, manage, and scale containerized applications using Docker containers." 
          },
          { 
            name: "Amazon EKS", 
            icon: "SiAmazoneks", 
            lucideIcon: "Boxes",
            description: "Managed Kubernetes service to run Kubernetes on AWS without needing to install, operate, and maintain your own control plane or nodes." 
          }
        ]
      },
      {
        category: "Storage & Database",
        items: [
          { 
            name: "Amazon S3", 
            icon: "SiAmazons3", 
            lucideIcon: "HardDrive",
            description: "A versatile object storage service designed to enhance scalability, durability, and performance for a wide range of data types and workloads, from backup and restore to big data analytics." 
          },
          { 
            name: "Amazon RDS", 
            icon: "SiAmazonrds", 
            lucideIcon: "Database",
            description: "Managed relational database service supporting MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB. Automates backups, patches, and scaling for production databases." 
          },
          { 
            name: "Amazon DynamoDB", 
            icon: "SiAmazondynamodb", 
            lucideIcon: "CircuitBoard",
            description: "Fast and flexible NoSQL database service for any scale. Delivers single-digit millisecond performance with built-in security, backup, and in-memory caching." 
          },
          { 
            name: "Amazon EFS", 
            icon: "SiAmazonefs", 
            lucideIcon: "FolderOpen",
            description: "Scalable, elastic file storage for use with AWS services and on-premise resources. Automatically grows and shrinks as you add and remove files." 
          }
        ]
      },
      {
        category: "Networking & CDN",
        items: [
          { 
            name: "Amazon VPC", 
            icon: "SiAmazonvpc", 
            lucideIcon: "Network",
            description: "Provision a logically isolated section of AWS cloud where you can launch resources in a virtual network. Complete control over networking environment including IP ranges, subnets, and routing." 
          },
          { 
            name: "CloudFront", 
            icon: "SiAmazoncloudfront", 
            lucideIcon: "Globe",
            description: "Fast content delivery network (CDN) that securely delivers data, videos, applications, and APIs globally with low latency and high transfer speeds from edge locations." 
          },
          { 
            name: "Route 53", 
            icon: "SiAmazonroute53", 
            lucideIcon: "MapPin",
            description: "Highly available and scalable Domain Name System (DNS) web service. Route users to applications with health checks and traffic flow for optimal performance." 
          },
          { 
            name: "API Gateway", 
            icon: "SiAmazonapigateway", 
            lucideIcon: "Workflow",
            description: "Create, publish, maintain, and secure APIs at any scale. Acts as a front door for applications to access data, business logic, or functionality from backend services." 
          }
        ]
      },
      {
        category: "DevOps & Monitoring",
        items: [
          { 
            name: "AWS CodePipeline", 
            icon: "SiAwscodepipeline", 
            lucideIcon: "GitBranch",
            description: "Continuous integration and delivery service for fast and reliable application updates. Automate build, test, and deploy phases for every code change." 
          },
          { 
            name: "CloudWatch", 
            icon: "SiAmazoncloudwatch", 
            lucideIcon: "Activity",
            description: "Monitoring and observability service for AWS resources and applications. Collect metrics, logs, and events, set alarms, and visualize performance with dashboards." 
          },
          { 
            name: "CloudFormation", 
            icon: "SiCloudformation", 
            lucideIcon: "FileCode",
            description: "Model and provision all cloud resources using infrastructure as code. Create templates to deploy complete environments consistently and repeatedly." 
          },
          { 
            name: "AWS CLI", 
            icon: "SiAwscli", 
            lucideIcon: "Terminal",
            description: "Unified command-line interface to manage AWS services. Control multiple services from the command line and automate them through scripts for efficient management." 
          }
        ]
      }
    ],
    technologies: [
      {
        category: "Programming Languages",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "Java", icon: "SiOpenjdk", color: "#007396" },
          { name: "Go", icon: "SiGo", color: "#00ADD8" }
        ]
      },
      {
        category: "Containers & Orchestration",
        items: [
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
          { name: "Amazon ECS", icon: "SiAmazonecs", color: "#FF9900" },
          { name: "Amazon EKS", icon: "SiAmazoneks", color: "#FF9900" }
        ]
      },
      {
        category: "Infrastructure as Code",
        items: [
          { name: "Terraform", icon: "SiTerraform", color: "#7B42BC" },
          { name: "AWS CloudFormation", icon: "SiAmazonaws", color: "#FF9900" },
          { name: "Ansible", icon: "SiAnsible", color: "#EE0000" },
          { name: "Pulumi", icon: "SiPulumi", color: "#8A3391" }
        ]
      },
      {
        category: "CI/CD & DevOps",
        items: [
          { name: "AWS CodePipeline", icon: "SiAwscodepipeline", color: "#FF9900" },
          { name: "Jenkins", icon: "SiJenkins", color: "#D24939" },
          { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088FF" },
          { name: "Git", icon: "SiGit", color: "#F05032" }
        ]
      }
    ],
    whyChooseUs: [
      {
        title: "AWS Certified Experts",
        description: "Our team holds multiple AWS certifications including Solutions Architect, DevOps Engineer, and Security Specialty certifications.",
        icon: "Award"
      },
      {
        title: "Proven Track Record",
        description: "Successfully delivered 100+ AWS projects across various industries with 95% customer satisfaction rate.",
        icon: "TrendingUp"
      },
      {
        title: "Cost Optimization Focus",
        description: "We've helped clients reduce AWS costs by an average of 40-60% through intelligent architecture and resource optimization.",
        icon: "DollarSign"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock monitoring and support to ensure your AWS infrastructure runs smoothly without interruption.",
        icon: "Headphones"
      },
      {
        title: "Security First Approach",
        description: "We implement AWS security best practices and compliance frameworks to protect your data and applications.",
        icon: "ShieldCheck"
      },
      {
        title: "Agile Methodology",
        description: "Fast iterations, continuous delivery, and transparent communication throughout your AWS journey.",
        icon: "Zap"
      }
    ],
    otherTechnologies: [
      {
        name: "Microsoft Azure",
        slug: "azure",
        icon: "SiMicrosoftazure",
        description: "Enterprise cloud platform with seamless Microsoft integration"
      },
      {
        name: "Google Cloud Platform",
        slug: "gcp",
        icon: "SiGooglecloud",
        description: "Advanced cloud infrastructure with AI/ML capabilities"
      },
      {
        name: "DigitalOcean",
        slug: "digitalocean",
        icon: "SiDigitalocean",
        description: "Simple and affordable cloud hosting for developers"
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Assessment",
        description: "Understanding your business needs and current infrastructure",
        steps: [
          "Initial consultation and requirement gathering",
          "Current infrastructure audit and assessment",
          "AWS service recommendations",
          "Cost estimation and ROI analysis",
          "Migration or implementation roadmap"
        ]
      },
      {
        phase: "Phase 2",
        title: "Design & Planning",
        description: "Architecting your AWS solution for optimal performance",
        steps: [
          "Architecture design following Well-Architected Framework",
          "Security and compliance planning",
          "Network topology design",
          "Disaster recovery strategy",
          "Detailed project timeline and milestones"
        ]
      },
      {
        phase: "Phase 3",
        title: "Implementation",
        description: "Building and deploying your AWS infrastructure",
        steps: [
          "Environment setup and configuration",
          "Infrastructure as Code implementation",
          "Application migration or deployment",
          "Integration with existing systems",
          "Security implementation and hardening"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & Optimization",
        description: "Ensuring everything works perfectly",
        steps: [
          "Comprehensive testing across all components",
          "Performance testing and tuning",
          "Security testing and vulnerability assessment",
          "Cost optimization review",
          "User acceptance testing"
        ]
      },
      {
        phase: "Phase 5",
        title: "Launch & Support",
        description: "Going live with ongoing management",
        steps: [
          "Production deployment",
          "Monitoring setup and alerting",
          "Documentation and knowledge transfer",
          "Team training on AWS services",
          "24/7 managed support (optional)"
        ]
      }
    ],
    faq: [
      {
        question: "How long does AWS migration take?",
        answer: "Migration timelines vary based on infrastructure complexity. Simple migrations take 4-8 weeks, medium complexity 2-4 months, and large enterprise migrations 4-12 months. We provide detailed timelines after assessment."
      },
      {
        question: "What is the cost of AWS services?",
        answer: "AWS follows a pay-as-you-go model. Costs depend on services used, data transfer, and storage. We help optimize costs and typically clients save 40-60% compared to on-premise infrastructure. We provide detailed cost estimates during planning."
      },
      {
        question: "How do you ensure zero downtime during migration?",
        answer: "We use proven migration strategies including parallel running, incremental migration, and AWS Database Migration Service for databases. Critical systems are migrated during off-peak hours with rollback plans."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes! We provide comprehensive AWS training covering architecture, security, operations, and best practices. Training is customized to your team's roles and can lead to AWS certification preparation."
      },
      {
        question: "What AWS certifications does your team hold?",
        answer: "Our team holds multiple AWS certifications including Solutions Architect Professional, DevOps Engineer Professional, Security Specialty, Advanced Networking, and more. We maintain active certifications for latest AWS services."
      },
      {
        question: "Can you help with AWS cost optimization?",
        answer: "Absolutely! We conduct cost audits, implement right-sizing, utilize reserved instances, leverage spot instances, and set up cost monitoring. Most clients see 30-50% cost reduction within first 3 months."
      },
      {
        question: "What about AWS security and compliance?",
        answer: "We implement AWS security best practices including IAM policies, encryption, VPC security, WAF, Shield, and compliance frameworks (HIPAA, PCI-DSS, SOC2, GDPR). Regular security audits are included."
      },
      {
        question: "Do you offer 24/7 AWS support?",
        answer: "Yes, we offer managed AWS services with 24/7 monitoring, support, and incident response. We also provide different SLA tiers based on your business criticality and requirements."
      }
    ]
  },

  // Microsoft Azure
  {
    id: "2",
    slug: "azure",
    name: "Microsoft Azure",
    tagline: "Enterprise Cloud Solutions with Azure",
    hero: {
      title: "Transform Your Business with Microsoft Azure",
      description: "Leverage Microsoft Azure's enterprise-grade cloud platform for seamless digital transformation. From migration to AI-powered solutions, we help you maximize Azure's potential.",
      ctaText: "Explore Azure Solutions",
      image: "/cloud/azure-hero.jpg"
    },
    overview: "Microsoft Azure is the ideal cloud platform for enterprises deeply integrated with the Microsoft ecosystem. Arka Infotech helps organizations leverage Azure's comprehensive suite of cloud services to modernize infrastructure, enhance productivity, and drive innovation. Our Microsoft-certified professionals excel at implementing Azure solutions that seamlessly integrate with Office 365, Active Directory, and on-premise systems. We specialize in hybrid cloud architectures, leveraging Azure's unique capabilities like Azure Arc and Azure Stack to bridge your on-premise and cloud environments. From migrating SQL Server workloads to building intelligent applications with Azure AI, we deliver solutions that maximize your Microsoft investment while reducing costs and improving security.",
    metrics: [
      {
        value: 8,
        suffix: "+",
        label: "Azure Certified Experts",
        description: "Microsoft-certified professionals with extensive Azure experience"
      },
      {
        value: 65,
        suffix: "%",
        label: "Cost Optimization",
        description: "Average reduction in cloud infrastructure expenses"
      },
      {
        value: 100,
        suffix: "+",
        label: "Azure Deployments",
        description: "Successfully implemented Azure solutions globally"
      }
    ],
    services: [
      {
        title: "Azure Migration Services",
        description: "Migrate your applications and infrastructure to Azure with minimal disruption and maximum efficiency.",
        icon: "CloudUpload",
        features: [
          "Azure Migrate assessment",
          "Hybrid cloud migrations",
          "SQL Server to Azure SQL",
          "VMware to Azure migration",
          "Application modernization"
        ]
      },
      {
        title: "Azure Infrastructure",
        description: "Design and implement robust, scalable Azure infrastructure tailored to your business needs.",
        icon: "Server",
        features: [
          "Virtual machines and scale sets",
          "Azure Virtual Network",
          "Load balancing and traffic manager",
          "Storage solutions",
          "Backup and disaster recovery"
        ]
      },
      {
        title: "Azure DevOps",
        description: "Implement end-to-end DevOps practices with Azure DevOps Services for faster, reliable deployments.",
        icon: "GitBranch",
        features: [
          "Azure Pipelines CI/CD",
          "Azure Repos and version control",
          "Infrastructure as Code (ARM/Bicep)",
          "Container services (AKS)",
          "Automated testing"
        ]
      },
      {
        title: "Microsoft 365 Integration",
        description: "Seamlessly integrate Azure with Microsoft 365 for unified identity and collaboration.",
        icon: "Users",
        features: [
          "Azure Active Directory",
          "Single Sign-On (SSO)",
          "Microsoft Teams integration",
          "SharePoint and OneDrive",
          "Power Platform integration"
        ]
      },
      {
        title: "Azure Security & Compliance",
        description: "Implement comprehensive security and meet compliance requirements with Azure security services.",
        icon: "Shield",
        features: [
          "Azure Security Center",
          "Microsoft Defender",
          "Key Vault for secrets management",
          "Compliance certifications",
          "Identity and access management"
        ]
      },
      {
        title: "Azure Data & AI",
        description: "Build intelligent applications with Azure's data and AI services.",
        icon: "Brain",
        features: [
          "Azure SQL Database",
          "Cosmos DB NoSQL",
          "Azure Synapse Analytics",
          "Azure Machine Learning",
          "Cognitive Services"
        ]
      },
      {
        title: "Azure App Services",
        description: "Deploy and scale web applications quickly with Azure's managed app platform.",
        icon: "Globe",
        features: [
          "App Service hosting",
          "Azure Functions serverless",
          "API Management",
          "Logic Apps workflows",
          "Container Instances"
        ]
      },
      {
        title: "Hybrid Cloud Solutions",
        description: "Bridge on-premise and cloud with Azure's hybrid capabilities.",
        icon: "Network",
        features: [
          "Azure Arc",
          "Azure Stack",
          "Hybrid connectivity",
          "Site-to-Site VPN",
          "ExpressRoute"
        ]
      },
      {
        title: "Azure Managed Services",
        description: "Comprehensive monitoring, management, and optimization of your Azure environment.",
        icon: "Settings",
        features: [
          "24/7 monitoring with Azure Monitor",
          "Cost management and optimization",
          "Performance tuning",
          "Update management",
          "Technical support"
        ]
      }
    ],
    tools: [
      {
        category: "Compute & Containers",
        items: [
          { 
            name: "Azure Virtual Machines", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Server",
            description: "On-demand, scalable computing resources with support for Linux and Windows. Deploy VMs in seconds with flexible sizing options and pay only for what you use." 
          },
          { 
            name: "Azure Kubernetes Service", 
            icon: "SiKubernetes", 
            lucideIcon: "Box",
            description: "Fully managed Kubernetes container orchestration service. Simplify deployment, management, and operations of Kubernetes with built-in CI/CD and enterprise-grade security." 
          },
          { 
            name: "Azure Functions", 
            icon: "SiAzurefunctions", 
            lucideIcon: "Zap",
            description: "Event-driven serverless compute platform. Run code on-demand without managing infrastructure, automatically scale, and integrate seamlessly with Azure services." 
          },
          { 
            name: "App Service", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Globe",
            description: "Fully managed platform for building, deploying, and scaling web apps. Support for .NET, Java, Node.js, Python, and PHP with built-in DevOps capabilities." 
          }
        ]
      },
      {
        category: "Data & Analytics",
        items: [
          { 
            name: "Azure SQL Database", 
            icon: "SiMicrosoftsqlserver", 
            lucideIcon: "Database",
            description: "Intelligent, scalable cloud database service built on SQL Server engine. Automated backups, patching, and monitoring with 99.99% availability SLA." 
          },
          { 
            name: "Cosmos DB", 
            icon: "SiAzurecosmosdb", 
            lucideIcon: "CircuitBoard",
            description: "Globally distributed, multi-model NoSQL database. Guarantees single-digit millisecond response times and 99.999% availability for mission-critical applications." 
          },
          { 
            name: "Synapse Analytics", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "BarChart",
            description: "Enterprise analytics service combining big data and data warehousing. Query data on your terms using serverless or dedicated resources at scale." 
          },
          { 
            name: "Data Factory", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Workflow",
            description: "Cloud-based data integration service to create, schedule, and orchestrate ETL/ELT workflows. Connect to 90+ data sources with code-free or code-based approaches." 
          }
        ]
      },
      {
        category: "AI & Machine Learning",
        items: [
          { 
            name: "Azure Machine Learning", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Brain",
            description: "Enterprise-grade machine learning service to build, train, and deploy models faster. Supports all popular frameworks with automated ML and drag-and-drop designer." 
          },
          { 
            name: "Cognitive Services", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Eye",
            description: "Pre-built AI capabilities including vision, speech, language, and decision APIs. Add intelligence to applications without ML expertise through REST APIs." 
          },
          { 
            name: "Bot Service", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "MessageSquare",
            description: "Build, test, deploy, and manage intelligent bots. Create conversational AI experiences across channels like Teams, Slack, and Facebook Messenger." 
          },
          { 
            name: "OpenAI Service", 
            icon: "SiOpenai", 
            lucideIcon: "Sparkles",
            description: "Access powerful OpenAI models including GPT-4, GPT-3.5, and DALL-E through Azure. Enterprise-grade security, compliance, and responsible AI built-in." 
          }
        ]
      },
      {
        category: "DevOps & Management",
        items: [
          { 
            name: "Azure DevOps", 
            icon: "SiAzuredevops", 
            lucideIcon: "GitBranch",
            description: "Complete DevOps toolchain for planning, developing, testing, and deploying applications. Includes Azure Repos, Pipelines, Boards, and Artifacts." 
          },
          { 
            name: "Azure Monitor", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Activity",
            description: "Full-stack monitoring service providing insights into applications, infrastructure, and networks. Collect, analyze, and act on telemetry data from cloud and on-premise." 
          },
          { 
            name: "Resource Manager", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Settings",
            description: "Deployment and management service for Azure. Organize resources with groups, apply tags, and control access through role-based permissions." 
          },
          { 
            name: "Azure CLI", 
            icon: "SiMicrosoftazure", 
            lucideIcon: "Terminal",
            description: "Cross-platform command-line tool to create and manage Azure resources. Script complex operations and automate deployment workflows efficiently." 
          }
        ]
      }
    ],
    technologies: [
      {
        category: "Programming & Frameworks",
        items: [
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "C#", icon: "SiCsharp", color: "#239120" },
          { name: "PowerShell", icon: "SiPowershell", color: "#5391FE" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" }
        ]
      },
      {
        category: "Containers & Kubernetes",
        items: [
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Azure Kubernetes Service", icon: "SiKubernetes", color: "#326CE5" },
          { name: "Azure Container Instances", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Helm", icon: "SiHelm", color: "#0F1689" }
        ]
      },
      {
        category: "Infrastructure as Code",
        items: [
          { name: "Terraform", icon: "SiTerraform", color: "#7B42BC" },
          { name: "ARM Templates", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Bicep", icon: "SiMicrosoftazure", color: "#0078D4" },
          { name: "Ansible", icon: "SiAnsible", color: "#EE0000" }
        ]
      },
      {
        category: "DevOps & Tools",
        items: [
          { name: "Azure DevOps", icon: "SiAzuredevops", color: "#0078D7" },
          { name: "GitHub", icon: "SiGithub", color: "#181717" },
          { name: "Visual Studio", icon: "SiVisualstudio", color: "#5C2D91" },
          { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" }
        ]
      }
    ],
    whyChooseUs: [
      {
        title: "Microsoft Gold Partner",
        description: "Official Microsoft partner with proven expertise in Azure solutions and access to latest technologies.",
        icon: "Award"
      },
      {
        title: "Microsoft 365 Integration",
        description: "Seamlessly integrate Azure with your existing Microsoft ecosystem for unified identity and productivity.",
        icon: "Layers"
      },
      {
        title: "Enterprise Experience",
        description: "Successfully deployed Azure solutions for Fortune 500 companies and enterprises across industries.",
        icon: "Building"
      },
      {
        title: "Hybrid Cloud Expertise",
        description: "Specialists in Azure hybrid solutions bridging on-premise infrastructure with cloud capabilities.",
        icon: "Network"
      },
      {
        title: "Cost Optimization",
        description: "Azure cost management strategies that reduce spending by 40-60% while maintaining performance.",
        icon: "DollarSign"
      },
      {
        title: "24/7 Azure Support",
        description: "Dedicated support team providing round-the-clock monitoring and incident response.",
        icon: "Headphones"
      }
    ],
    otherTechnologies: [
      {
        name: "Amazon Web Services",
        slug: "aws",
        icon: "SiAmazonaws",
        description: "Leading cloud platform with comprehensive services"
      },
      {
        name: "Google Cloud Platform",
        slug: "gcp",
        icon: "SiGooglecloud",
        description: "Advanced cloud infrastructure with AI/ML capabilities"
      },
      {
        name: "DigitalOcean",
        slug: "digitalocean",
        icon: "SiDigitalocean",
        description: "Simple and affordable cloud hosting for developers"
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Assessment & Planning",
        description: "Understanding your Azure requirements",
        steps: [
          "Business requirements gathering",
          "Current infrastructure assessment",
          "Azure Migrate evaluation",
          "Cost analysis and TCO calculation",
          "Migration or deployment strategy"
        ]
      },
      {
        phase: "Phase 2",
        title: "Architecture Design",
        description: "Designing optimal Azure solution",
        steps: [
          "Azure architecture design",
          "Network topology planning",
          "Security and compliance framework",
          "High availability design",
          "Disaster recovery planning"
        ]
      },
      {
        phase: "Phase 3",
        title: "Implementation",
        description: "Building your Azure environment",
        steps: [
          "Azure subscription and resource setup",
          "Infrastructure deployment (ARM/Bicep)",
          "Application migration or deployment",
          "Microsoft 365 integration",
          "Security implementation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & Validation",
        description: "Ensuring everything works perfectly",
        steps: [
          "Functional testing",
          "Performance and load testing",
          "Security assessment",
          "Disaster recovery testing",
          "User acceptance testing"
        ]
      },
      {
        phase: "Phase 5",
        title: "Launch & Optimization",
        description: "Go-live with continuous improvement",
        steps: [
          "Production deployment",
          "Azure Monitor setup",
          "Cost optimization",
          "Documentation and training",
          "Ongoing managed services"
        ]
      }
    ],
    faq: [
      {
        question: "What are the benefits of Azure over other cloud providers?",
        answer: "Azure offers seamless Microsoft 365 integration, hybrid cloud capabilities with Azure Arc, extensive compliance certifications, and deep Windows/SQL Server integration. It's ideal for enterprises already using Microsoft technologies."
      },
      {
        question: "How much does Azure migration cost?",
        answer: "Migration costs depend on infrastructure complexity and services. We provide detailed assessments and typically migrations range from ₹5,00,000 for small workloads to ₹50,00,000+ for enterprise migrations. Azure itself follows pay-as-you-go pricing."
      },
      {
        question: "Can Azure integrate with our on-premise infrastructure?",
        answer: "Yes! Azure excels at hybrid cloud scenarios. We implement Azure Arc, VPN/ExpressRoute connectivity, Azure Stack, and hybrid identity solutions for seamless on-premise and cloud integration."
      },
      {
        question: "What Azure certifications does your team hold?",
        answer: "Our team holds Azure Solutions Architect Expert, Azure DevOps Engineer Expert, Azure Security Engineer, Azure Administrator, and specialty certifications. We're also a Microsoft Gold Partner."
      },
      {
        question: "How do you ensure Azure security?",
        answer: "We implement Azure Security Center, Microsoft Defender, Azure Firewall, DDoS Protection, encryption, Azure AD security, and compliance frameworks. Regular security assessments and monitoring are included."
      },
      {
        question: "What about Azure cost optimization?",
        answer: "We use Azure Cost Management, right-sizing, reserved instances, Azure Hybrid Benefit, spot instances, and automation to optimize costs. Most clients achieve 40-60% cost reduction."
      },
      {
        question: "Do you provide Azure training?",
        answer: "Yes! We offer comprehensive Azure training customized to your team's needs, covering architecture, development, operations, and security. Training can include Azure certification preparation."
      },
      {
        question: "What industries do you serve with Azure?",
        answer: "We serve healthcare, financial services, retail, manufacturing, education, government, and more. We have experience with industry-specific compliance like HIPAA, PCI-DSS, and FedRAMP."
      }
    ]
  },

  // Google Cloud Platform
  {
    id: "3",
    slug: "gcp",
    name: "Google Cloud Platform",
    tagline: "Innovate with Google Cloud",
    hero: {
      title: "Advanced Cloud Solutions with Google Cloud Platform",
      description: "Harness the power of Google's infrastructure and AI capabilities. Build, deploy, and scale applications on the same infrastructure that powers Google's products.",
      ctaText: "Get Started with GCP",
      image: "/cloud/gcp-hero.jpg"
    },
    overview: "Google Cloud Platform (GCP) stands out for its exceptional performance in data analytics, machine learning, and containerized applications. Arka Infotech's GCP-certified team helps businesses leverage Google's cutting-edge infrastructure to build intelligent, data-driven applications. We specialize in BigQuery for processing massive datasets, Vertex AI for machine learning workloads, and Google Kubernetes Engine for cloud-native applications. Our expertise extends to building real-time data pipelines with Dataflow, implementing serverless architectures with Cloud Run and Cloud Functions, and creating scalable analytics platforms. Whether you need to process petabytes of data, deploy ML models at scale, or build high-performance applications, we deliver GCP solutions that provide competitive advantages through Google's world-class technology and our proven implementation methodologies.",
    metrics: [
      {
        value: 7,
        suffix: "+",
        label: "GCP Certified Professionals",
        description: "Google Cloud certified experts with deep platform knowledge"
      },
      {
        value: 60,
        suffix: "%",
        label: "Performance Improvement",
        description: "Average boost in application performance on GCP"
      },
      {
        value: 100,
        suffix: "+",
        label: "GCP Projects",
        description: "Successfully delivered across diverse industries"
      }
    ],
    services: [
      {
        title: "GCP Cloud Migration",
        description: "Migrate your workloads to Google Cloud with our proven migration strategies and tools.",
        icon: "CloudUpload",
        features: [
          "Migration assessment",
          "VMware Engine migrations",
          "Database migrations",
          "Application modernization",
          "Anthos hybrid deployments"
        ]
      },
      {
        title: "GCP Infrastructure",
        description: "Design and deploy scalable, resilient infrastructure on Google Cloud.",
        icon: "Server",
        features: [
          "Compute Engine VMs",
          "Virtual Private Cloud (VPC)",
          "Cloud Load Balancing",
          "Cloud Storage solutions",
          "Persistent disk management"
        ]
      },
      {
        title: "Google Kubernetes Engine",
        description: "Deploy and manage containerized applications with GKE's managed Kubernetes service.",
        icon: "Box",
        features: [
          "GKE cluster setup",
          "Autopilot mode",
          "Multi-cluster management",
          "Service mesh with Anthos",
          "Container security"
        ]
      },
      {
        title: "AI & Machine Learning",
        description: "Build intelligent applications with Google's industry-leading AI and ML services.",
        icon: "Brain",
        features: [
          "Vertex AI platform",
          "AutoML solutions",
          "TensorFlow on GCP",
          "Vision and Natural Language APIs",
          "Recommendation engines"
        ]
      },
      {
        title: "BigQuery & Analytics",
        description: "Process massive datasets and gain insights with Google's serverless data warehouse.",
        icon: "BarChart",
        features: [
          "BigQuery data warehouse",
          "Real-time analytics",
          "Data Studio visualization",
          "Looker business intelligence",
          "Data pipeline orchestration"
        ]
      },
      {
        title: "Cloud Native Development",
        description: "Build modern, cloud-native applications with GCP's developer services.",
        icon: "Code",
        features: [
          "Cloud Run serverless",
          "App Engine PaaS",
          "Cloud Functions",
          "Firebase integration",
          "Apigee API management"
        ]
      },
      {
        title: "Data Engineering",
        description: "Build robust data pipelines and workflows on Google Cloud.",
        icon: "Database",
        features: [
          "Cloud Dataflow streaming",
          "Cloud Composer workflows",
          "Pub/Sub messaging",
          "Cloud Dataproc Spark",
          "Data Fusion ETL"
        ]
      },
      {
        title: "Security & Compliance",
        description: "Implement Google's security model with BeyondCorp and comprehensive protection.",
        icon: "ShieldCheck",
        features: [
          "Cloud IAM policies",
          "Security Command Center",
          "Cloud Armor DDoS protection",
          "VPC Service Controls",
          "Compliance certifications"
        ]
      },
      {
        title: "GCP Managed Services",
        description: "Comprehensive management and optimization of your Google Cloud environment.",
        icon: "Settings",
        features: [
          "24/7 monitoring with Cloud Monitoring",
          "Cost optimization strategies",
          "Performance tuning",
          "Incident response",
          "Architecture reviews"
        ]
      }
    ],
    tools: [
      {
        category: "Compute & Kubernetes",
        items: [
          { 
            name: "Compute Engine", 
            icon: "SiGooglecloud", 
            lucideIcon: "Server",
            description: "Scalable, high-performance virtual machines running on Google's infrastructure. Choose from predefined or custom machine types with per-second billing and sustained use discounts." 
          },
          { 
            name: "Google Kubernetes Engine", 
            icon: "SiKubernetes", 
            lucideIcon: "Box",
            description: "Managed Kubernetes built on Google's container expertise. Auto-repair, auto-upgrade, and built-in monitoring make running production workloads simple and secure." 
          },
          { 
            name: "Cloud Run", 
            icon: "SiGooglecloud", 
            lucideIcon: "Zap",
            description: "Fully managed serverless platform for containerized applications. Deploy containers without managing infrastructure, automatically scale to zero, and pay per use." 
          },
          { 
            name: "App Engine", 
            icon: "SiGooglecloud", 
            lucideIcon: "Globe",
            description: "Fully managed platform-as-a-service for building scalable applications. Focus on code while App Engine handles deployment, scaling, and infrastructure management." 
          }
        ]
      },
      {
        category: "Data & Analytics",
        items: [
          { 
            name: "BigQuery", 
            icon: "SiGooglebigquery", 
            lucideIcon: "Database",
            description: "Serverless, highly scalable data warehouse for analytics. Query petabytes of data in seconds with SQL, integrate with BI tools, and leverage built-in ML capabilities." 
          },
          { 
            name: "Cloud Dataflow", 
            icon: "SiGooglecloud", 
            lucideIcon: "Workflow",
            description: "Unified stream and batch data processing service. Build real-time data pipelines with Apache Beam, auto-scale workers, and process millions of events per second." 
          },
          { 
            name: "Looker", 
            icon: "SiLooker", 
            lucideIcon: "BarChart",
            description: "Modern business intelligence and analytics platform. Create interactive dashboards, share insights, and embed analytics into applications with LookML modeling." 
          },
          { 
            name: "Pub/Sub", 
            icon: "SiGooglecloud", 
            lucideIcon: "Radio",
            description: "Real-time messaging service for event-driven systems and streaming analytics. Reliably deliver messages at scale with exactly-once processing guarantees." 
          }
        ]
      },
      {
        category: "AI & Machine Learning",
        items: [
          { 
            name: "Vertex AI", 
            icon: "SiGooglecloud", 
            lucideIcon: "Brain",
            description: "Unified ML platform to build, deploy, and scale AI models faster. Access pre-trained APIs, AutoML, custom training, and MLOps tools in one integrated environment." 
          },
          { 
            name: "TensorFlow", 
            icon: "SiTensorflow", 
            lucideIcon: "Cpu",
            description: "Open-source machine learning framework developed by Google. Train and deploy ML models with support for production-scale deployment on GCP infrastructure." 
          },
          { 
            name: "AutoML", 
            icon: "SiGooglecloud", 
            lucideIcon: "Sparkles",
            description: "Train high-quality custom machine learning models with minimal ML expertise. Automated feature engineering, model selection, and hyperparameter tuning." 
          },
          { 
            name: "Vision AI", 
            icon: "SiGooglecloud", 
            lucideIcon: "Eye",
            description: "Derive insights from images with powerful pre-trained or custom ML models. Detect objects, faces, text, and more with Google's computer vision technology." 
          }
        ]
      },
      {
        category: "DevOps & Tools",
        items: [
          { 
            name: "Cloud Build", 
            icon: "SiGooglecloud", 
            lucideIcon: "GitBranch",
            description: "Continuous integration and delivery platform executing builds on Google Cloud infrastructure. Import source from GitHub, Bitbucket, or Cloud Repositories." 
          },
          { 
            name: "Cloud Monitoring", 
            icon: "SiGooglecloud", 
            lucideIcon: "Activity",
            description: "Full-stack monitoring, logging, and diagnostics for applications on GCP and beyond. Gain visibility with metrics, logs, traces, and application performance management." 
          },
          { 
            name: "Terraform", 
            icon: "SiTerraform", 
            lucideIcon: "FileCode",
            description: "Infrastructure as code tool officially supported by Google Cloud. Define and provision GCP resources using declarative configuration files for repeatable deployments." 
          },
          { 
            name: "Cloud SDK", 
            icon: "SiGooglecloud", 
            lucideIcon: "Terminal",
            description: "Command-line tools and libraries to manage GCP resources. Includes gcloud CLI, client libraries, and tools for efficient cloud resource management." 
          }
        ]
      }
    ],
    technologies: [
      {
        category: "Programming Languages",
        items: [
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "Go", icon: "SiGo", color: "#00ADD8" },
          { name: "Java", icon: "SiOpenjdk", color: "#007396" },
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" }
        ]
      },
      {
        category: "ML & AI",
        items: [
          { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
          { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
          { name: "Vertex AI", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Apache Beam", icon: "SiApache", color: "#F68D2E" }
        ]
      },
      {
        category: "Containers & Kubernetes",
        items: [
          { name: "Google Kubernetes Engine", icon: "SiKubernetes", color: "#326CE5" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Cloud Run", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Helm", icon: "SiHelm", color: "#0F1689" }
        ]
      },
      {
        category: "Infrastructure & DevOps",
        items: [
          { name: "Terraform", icon: "SiTerraform", color: "#7B42BC" },
          { name: "Cloud Build", icon: "SiGooglecloud", color: "#4285F4" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088FF" }
        ]
      }
    ],
    whyChooseUs: [
      {
        title: "GCP Certified Experts",
        description: "Team of Google Cloud certified professionals with Professional Cloud Architect and Data Engineer certifications.",
        icon: "Award"
      },
      {
        title: "AI/ML Specialists",
        description: "Deep expertise in leveraging Google's AI and machine learning services for intelligent applications.",
        icon: "Brain"
      },
      {
        title: "BigQuery Experts",
        description: "Specialists in designing and optimizing BigQuery data warehouses for analytics at scale.",
        icon: "Database"
      },
      {
        title: "Kubernetes Excellence",
        description: "Extensive experience with GKE and cloud-native architectures using Kubernetes.",
        icon: "Box"
      },
      {
        title: "Cost Efficiency",
        description: "Leverage sustained use discounts, committed use contracts, and preemptible VMs for significant savings.",
        icon: "DollarSign"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock monitoring, support, and optimization of your GCP infrastructure.",
        icon: "Headphones"
      }
    ],
    otherTechnologies: [
      {
        name: "Amazon Web Services",
        slug: "aws",
        icon: "SiAmazonaws",
        description: "Leading cloud platform with comprehensive services"
      },
      {
        name: "Microsoft Azure",
        slug: "azure",
        icon: "SiMicrosoftazure",
        description: "Enterprise cloud platform with Microsoft integration"
      },
      {
        name: "DigitalOcean",
        slug: "digitalocean",
        icon: "SiDigitalocean",
        description: "Simple and affordable cloud hosting for developers"
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Discovery & Assessment",
        description: "Understanding your GCP needs",
        steps: [
          "Business objectives analysis",
          "Current infrastructure evaluation",
          "GCP service recommendations",
          "Cost estimation and planning",
          "Migration or deployment strategy"
        ]
      },
      {
        phase: "Phase 2",
        title: "Architecture & Design",
        description: "Designing your GCP solution",
        steps: [
          "Cloud architecture design",
          "Network and security planning",
          "Data architecture design",
          "High availability planning",
          "Disaster recovery strategy"
        ]
      },
      {
        phase: "Phase 3",
        title: "Implementation",
        description: "Building on Google Cloud",
        steps: [
          "GCP project and resource setup",
          "Infrastructure deployment with Terraform",
          "Application migration or development",
          "CI/CD pipeline setup",
          "Security implementation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & Optimization",
        description: "Validation and fine-tuning",
        steps: [
          "Comprehensive testing",
          "Performance optimization",
          "Security testing",
          "Load testing",
          "Cost optimization review"
        ]
      },
      {
        phase: "Phase 5",
        title: "Launch & Support",
        description: "Production deployment and ongoing management",
        steps: [
          "Production go-live",
          "Cloud Monitoring setup",
          "Documentation and training",
          "Knowledge transfer",
          "Managed services engagement"
        ]
      }
    ],
    faq: [
      {
        question: "What makes Google Cloud different from AWS and Azure?",
        answer: "GCP excels in data analytics (BigQuery), AI/ML (Vertex AI, TensorFlow), Kubernetes (GKE), and network performance. It offers sustained use discounts automatically and has strong open-source integration. Best for data-intensive and ML workloads."
      },
      {
        question: "How much does Google Cloud cost?",
        answer: "GCP uses pay-as-you-go pricing with automatic sustained use discounts (up to 30% off) and committed use contracts (up to 57% off). Costs vary by services used. We provide detailed cost estimates and optimization strategies."
      },
      {
        question: "Can you help us leverage Google's AI and ML services?",
        answer: "Absolutely! We're specialists in Vertex AI, AutoML, TensorFlow, Vision AI, Natural Language API, and Recommendations AI. We can build custom ML models or integrate pre-trained models into your applications."
      },
      {
        question: "What is your experience with BigQuery?",
        answer: "We're BigQuery experts with experience processing petabyte-scale datasets. We design data warehouses, optimize query performance, implement BI dashboards with Looker/Data Studio, and build real-time analytics pipelines."
      },
      {
        question: "Do you provide GKE and Kubernetes services?",
        answer: "Yes! We specialize in Google Kubernetes Engine including GKE Autopilot, multi-cluster management, service mesh with Anthos, and cloud-native application development. Our team holds CKA/CKAD certifications."
      },
      {
        question: "Can Google Cloud integrate with our AWS or Azure resources?",
        answer: "Yes, we implement multi-cloud architectures. GCP integrates with other clouds via VPN, Anthos (hybrid/multi-cloud), and third-party tools. We design solutions that work across cloud providers."
      },
      {
        question: "What about GCP security?",
        answer: "We implement Cloud IAM, VPC Service Controls, Cloud Armor, Security Command Center, encryption at rest/in transit, and BeyondCorp zero-trust security. GCP has strong compliance certifications."
      },
      {
        question: "Do you offer GCP training?",
        answer: "Yes! We provide hands-on GCP training covering architecture, data engineering, machine learning, and DevOps. Training can include Google Cloud certification preparation for your team."
      }
    ]
  },

  // DigitalOcean
  {
    id: "4",
    slug: "digitalocean",
    name: "DigitalOcean",
    tagline: "Simple, Affordable Cloud Computing",
    hero: {
      title: "Developer-Friendly Cloud Solutions with DigitalOcean",
      description: "Build and scale your applications with DigitalOcean's simple, affordable cloud infrastructure. Perfect for startups, developers, and growing businesses.",
      ctaText: "Start with DigitalOcean",
      image: "/cloud/digitalocean-hero.jpg"
    },
    overview: "DigitalOcean provides a refreshingly simple cloud platform that's perfect for developers, startups, and growing businesses who want powerful infrastructure without enterprise complexity. Arka Infotech helps organizations deploy and scale applications on DigitalOcean with significantly lower costs than AWS or Azure while maintaining excellent performance. We specialize in setting up Droplets (virtual servers), managed Kubernetes clusters (DOKS), managed databases, and App Platform for seamless deployments. Our expertise includes optimizing DigitalOcean's straightforward pricing model, implementing scalable architectures with load balancers and VPC, and leveraging Spaces object storage for cost-effective file management. Whether you're hosting websites, deploying web applications, or running containerized workloads, we deliver DigitalOcean solutions that provide exceptional value, transparent pricing, and developer-friendly infrastructure perfect for agile teams.",
    metrics: [
      {
        value: 5,
        suffix: "+",
        label: "DigitalOcean Experts",
        description: "Experienced developers specializing in DigitalOcean"
      },
      {
        value: 50,
        suffix: "%",
        label: "Cost Savings",
        description: "More affordable than traditional cloud providers"
      },
      {
        value: 100,
        suffix: "+",
        label: "Apps Deployed",
        description: "Applications successfully hosted on DigitalOcean"
      }
    ],
    services: [
      {
        title: "Droplet Management",
        description: "Deploy and manage virtual private servers (Droplets) with SSD storage and scalable resources.",
        icon: "Server",
        features: [
          "Droplet deployment",
          "Automated backups",
          "Monitoring and alerts",
          "Vertical scaling",
          "Custom images"
        ]
      },
      {
        title: "Kubernetes on DO",
        description: "Managed Kubernetes clusters for containerized applications without the complexity.",
        icon: "Box",
        features: [
          "DOKS cluster setup",
          "One-click deployments",
          "Auto-scaling",
          "Integrated load balancers",
          "Container registry"
        ]
      },
      {
        title: "App Platform",
        description: "Deploy apps directly from GitHub with automatic builds, deployments, and scaling.",
        icon: "Rocket",
        features: [
          "GitHub integration",
          "Auto-deployments",
          "Static sites",
          "Managed databases",
          "Zero DevOps required"
        ]
      },
      {
        title: "Managed Databases",
        description: "Fully managed database clusters with automated backups and high availability.",
        icon: "Database",
        features: [
          "PostgreSQL clusters",
          "MySQL databases",
          "Redis caching",
          "MongoDB hosting",
          "Automated backups"
        ]
      },
      {
        title: "Spaces Object Storage",
        description: "S3-compatible object storage for files, backups, and static content.",
        icon: "HardDrive",
        features: [
          "Unlimited scalability",
          "CDN integration",
          "S3 compatibility",
          "Access control",
          "Backup storage"
        ]
      },
      {
        title: "Networking Solutions",
        description: "Build secure, high-performance networks with load balancers and VPC.",
        icon: "Network",
        features: [
          "Load balancers",
          "Virtual Private Cloud (VPC)",
          "Floating IPs",
          "DNS management",
          "Firewalls"
        ]
      },
      {
        title: "Website & App Hosting",
        description: "Host websites, web applications, and APIs with high performance and reliability.",
        icon: "Globe",
        features: [
          "WordPress hosting",
          "Node.js apps",
          "Python/Django apps",
          "Ruby on Rails",
          "Static site hosting"
        ]
      },
      {
        title: "Developer Tools",
        description: "Streamline development with CI/CD, monitoring, and collaboration tools.",
        icon: "Code",
        features: [
          "Marketplace 1-click apps",
          "API access",
          "CLI tools",
          "Monitoring dashboards",
          "Team management"
        ]
      },
      {
        title: "Migration Services",
        description: "Move your applications to DigitalOcean from other providers or on-premise.",
        icon: "ArrowRightLeft",
        features: [
          "Server migration",
          "Database migration",
          "DNS configuration",
          "Minimal downtime",
          "Post-migration support"
        ]
      }
    ],
    tools: [
      {
        category: "Compute & Storage",
        items: [
          { 
            name: "Droplets", 
            icon: "SiDigitalocean", 
            lucideIcon: "Server",
            description: "Linux-based virtual machines (VMs) with SSD storage. Deploy in 55 seconds with flexible sizing from $4/month, perfect for websites, applications, and development environments." 
          },
          { 
            name: "Spaces", 
            icon: "SiDigitalocean", 
            lucideIcon: "HardDrive",
            description: "S3-compatible object storage for storing and serving large amounts of data. Built-in CDN, predictable pricing at $5/month for 250GB storage and 1TB transfer." 
          },
          { 
            name: "Volumes", 
            icon: "SiDigitalocean", 
            lucideIcon: "Database",
            description: "Block storage volumes that can be attached to Droplets. Scale up to 16TB per volume with automatic backups and the ability to move between Droplets." 
          },
          { 
            name: "Snapshots", 
            icon: "SiDigitalocean", 
            lucideIcon: "Camera",
            description: "Point-in-time images of Droplets and Volumes for backup and recovery. Create consistent backups, clone servers quickly, and restore systems in minutes." 
          }
        ]
      },
      {
        category: "Platform & Containers",
        items: [
          { 
            name: "App Platform", 
            icon: "SiDigitalocean", 
            lucideIcon: "Rocket",
            description: "Deploy apps from GitHub in minutes without DevOps complexity. Auto-deploy on git push with built-in CI/CD, databases, and automatic HTTPS - zero configuration needed." 
          },
          { 
            name: "Kubernetes", 
            icon: "SiKubernetes", 
            lucideIcon: "Box",
            description: "Managed Kubernetes clusters (DOKS) without the complexity. Get production-ready clusters in minutes with automatic upgrades, monitoring, and security patches included." 
          },
          { 
            name: "Container Registry", 
            icon: "SiDocker", 
            lucideIcon: "Package",
            description: "Private Docker image registry integrated with Kubernetes. Store, manage, and deploy container images with automatic vulnerability scanning and access controls." 
          },
          { 
            name: "Marketplace", 
            icon: "SiDigitalocean", 
            lucideIcon: "Store",
            description: "One-click applications and development stacks. Deploy WordPress, Docker, MongoDB, and 100+ pre-configured applications instantly without manual setup." 
          }
        ]
      },
      {
        category: "Databases",
        items: [
          { 
            name: "PostgreSQL", 
            icon: "SiPostgresql", 
            lucideIcon: "Database",
            description: "Fully managed PostgreSQL database clusters with automated backups, high availability, and point-in-time recovery. Scales vertically and horizontally with zero downtime." 
          },
          { 
            name: "MySQL", 
            icon: "SiMysql", 
            lucideIcon: "Database",
            description: "Managed MySQL database with automated maintenance, backups, and replication. Choose from flexible plans starting at $15/month with standby replicas for high availability." 
          },
          { 
            name: "Redis", 
            icon: "SiRedis", 
            lucideIcon: "Zap",
            description: "In-memory data structure store for caching, session management, and real-time analytics. Managed service with automatic failover and data persistence options." 
          },
          { 
            name: "MongoDB", 
            icon: "SiMongodb", 
            lucideIcon: "CircuitBoard",
            description: "Managed MongoDB clusters for document-based NoSQL workloads. Automatic backups, monitoring, and scaling with support for replica sets and sharding." 
          }
        ]
      },
      {
        category: "Networking",
        items: [
          { 
            name: "Load Balancers", 
            icon: "SiDigitalocean", 
            lucideIcon: "Network",
            description: "Distribute traffic across multiple Droplets for high availability. SSL termination, health checks, and automatic failover included at $12/month." 
          },
          { 
            name: "VPC", 
            icon: "SiDigitalocean", 
            lucideIcon: "Shield",
            description: "Private network for secure communication between resources. Isolate environments, control network access, and build secure multi-tier architectures." 
          },
          { 
            name: "DNS", 
            icon: "SiDigitalocean", 
            lucideIcon: "Globe",
            description: "Free DNS hosting with fast propagation. Manage domain records, subdomains, and DNS configurations with easy-to-use interface and API access." 
          },
          { 
            name: "Firewalls", 
            icon: "SiDigitalocean", 
            lucideIcon: "ShieldCheck",
            description: "Cloud firewalls to control inbound and outbound traffic. Define rules for Droplets and Kubernetes clusters with tags for easy management at no additional cost." 
          }
        ]
      }
    ],
    technologies: [
      {
        category: "Operating Systems",
        items: [
          { name: "Linux", icon: "SiLinux", color: "#FCC624" },
          { name: "Ubuntu", icon: "SiUbuntu", color: "#E95420" },
          { name: "CentOS", icon: "SiCentos", color: "#262577" },
          { name: "Debian", icon: "SiDebian", color: "#A81D33" }
        ]
      },
      {
        category: "Containers & Kubernetes",
        items: [
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes (DOKS)", icon: "SiKubernetes", color: "#326CE5" },
          { name: "Docker Compose", icon: "SiDocker", color: "#2496ED" },
          { name: "Containerd", icon: "SiContainerd", color: "#575757" }
        ]
      },
      {
        category: "Programming & Frameworks",
        items: [
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "PHP", icon: "SiPhp", color: "#777BB4" },
          { name: "Ruby", icon: "SiRuby", color: "#CC342D" }
        ]
      },
      {
        category: "Infrastructure & Tools",
        items: [
          { name: "Nginx", icon: "SiNginx", color: "#009639" },
          { name: "Terraform", icon: "SiTerraform", color: "#7B42BC" },
          { name: "Git", icon: "SiGit", color: "#F05032" },
          { name: "Apache", icon: "SiApache", color: "#D22128" }
        ]
      }
    ],
    whyChooseUs: [
      {
        title: "Affordable Pricing",
        description: "DigitalOcean offers predictable pricing starting at $4/month, significantly cheaper than AWS/Azure for similar resources.",
        icon: "DollarSign"
      },
      {
        title: "Developer-Friendly",
        description: "Simple UI, excellent documentation, and intuitive APIs make DigitalOcean perfect for developers and startups.",
        icon: "Code"
      },
      {
        title: "Fast Deployment",
        description: "Deploy Droplets in 55 seconds with 1-click applications from the Marketplace for instant setup.",
        icon: "Zap"
      },
      {
        title: "Transparent Pricing",
        description: "No hidden fees, no complex pricing calculators. Pay only for what you use with clear, predictable costs.",
        icon: "FileText"
      },
      {
        title: "Great Performance",
        description: "SSD storage, modern processors, and global data centers ensure fast, reliable performance.",
        icon: "TrendingUp"
      },
      {
        title: "Excellent Support",
        description: "Comprehensive documentation, community tutorials, and responsive support team.",
        icon: "Headphones"
      }
    ],
    otherTechnologies: [
      {
        name: "Amazon Web Services",
        slug: "aws",
        icon: "SiAmazonaws",
        description: "Enterprise cloud with extensive services"
      },
      {
        name: "Microsoft Azure",
        slug: "azure",
        icon: "SiMicrosoftazure",
        description: "Enterprise cloud with Microsoft integration"
      },
      {
        name: "Google Cloud Platform",
        slug: "gcp",
        icon: "SiGooglecloud",
        description: "Advanced cloud with AI/ML capabilities"
      }
    ],
    process: [
      {
        phase: "Phase 1",
        title: "Planning & Setup",
        description: "Getting started with DigitalOcean",
        steps: [
          "Requirements analysis",
          "Account setup and billing",
          "Droplet sizing recommendations",
          "Region selection for optimal performance",
          "Cost estimation"
        ]
      },
      {
        phase: "Phase 2",
        title: "Infrastructure Deployment",
        description: "Setting up your cloud infrastructure",
        steps: [
          "Droplet creation and configuration",
          "VPC and networking setup",
          "Database cluster deployment",
          "Load balancer configuration",
          "Firewall and security rules"
        ]
      },
      {
        phase: "Phase 3",
        title: "Application Deployment",
        description: "Deploying your applications",
        steps: [
          "Application setup and configuration",
          "Domain and DNS configuration",
          "SSL certificate installation",
          "Database migration",
          "Testing and validation"
        ]
      },
      {
        phase: "Phase 4",
        title: "Optimization",
        description: "Fine-tuning for performance",
        steps: [
          "Performance optimization",
          "Caching implementation",
          "CDN setup with Spaces",
          "Monitoring and alerts",
          "Backup configuration"
        ]
      },
      {
        phase: "Phase 5",
        title: "Management & Support",
        description: "Ongoing maintenance",
        steps: [
          "Regular monitoring",
          "Security updates",
          "Scaling as needed",
          "Backup management",
          "Technical support"
        ]
      }
    ],
    faq: [
      {
        question: "Why choose DigitalOcean over AWS or Azure?",
        answer: "DigitalOcean is simpler, more affordable, and developer-friendly. It's perfect for startups, SMBs, and developers who want powerful cloud infrastructure without enterprise complexity. Droplets start at $4/month vs $10+ on AWS."
      },
      {
        question: "What types of applications can I host on DigitalOcean?",
        answer: "Websites, web applications, APIs, mobile backends, e-commerce stores, WordPress sites, Node.js/Python/Ruby apps, databases, and more. DigitalOcean supports virtually any web-based application."
      },
      {
        question: "How much does DigitalOcean hosting cost?",
        answer: "Droplets start at $4/month (1GB RAM). Typical setups: Basic website $10-20/month, Small app $20-40/month, Medium app $50-100/month, Large app $200-500/month. Much more affordable than AWS/Azure."
      },
      {
        question: "Can you migrate our existing website/app to DigitalOcean?",
        answer: "Yes! We handle complete migrations from shared hosting, VPS, AWS, Azure, or on-premise servers. We minimize downtime and ensure everything works perfectly post-migration."
      },
      {
        question: "Do you provide DigitalOcean managed services?",
        answer: "Yes, we offer managed services including monitoring, updates, backups, security patches, performance optimization, and 24/7 support. Let us handle the DevOps while you focus on development."
      },
      {
        question: "Is DigitalOcean secure and reliable?",
        answer: "Yes! DigitalOcean has 99.99% uptime SLA, DDoS protection, cloud firewalls, VPC isolation, and regular security updates. We implement additional security hardening and monitoring."
      },
      {
        question: "Can DigitalOcean scale with our growth?",
        answer: "Absolutely! You can scale vertically (bigger Droplets) or horizontally (more Droplets with load balancers). Kubernetes (DOKS) provides auto-scaling for containerized apps."
      },
      {
        question: "Do you offer DigitalOcean consulting?",
        answer: "Yes! We provide architecture design, performance optimization, cost optimization, security hardening, and best practices implementation. We help you get the most out of DigitalOcean."
      }
    ]
  }
];

// Helper functions
export const getCloudProviderBySlug = (slug: string): CloudServiceContent | undefined => {
  return cloudProviders.find(provider => provider.slug === slug);
};

export const getAllCloudProviders = (): CloudServiceContent[] => {
  return cloudProviders;
};

