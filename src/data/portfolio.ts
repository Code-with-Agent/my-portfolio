import { PortfolioData } from "@/lib/types";
import { projectsData } from "./projects";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Mohd Moin Khan",
    monogram: "MK",
    title: "SAPUI5 & SAP Fiori Developer",
    eyebrow: "SAPUI5 • SAP Fiori • CAP • RAP",
    tagline:
      "Building modern, scalable enterprise experiences across the SAP ecosystem.",
    aboutEyebrow: "ABOUT ME",
    aboutHeadline:
      "Architecting Mission-Critical Enterprise Software Across the SAP S/4HANA & BTP Ecosystem",
    shortBio:
      "Senior SAP Frontend & Full-Stack Developer with 8+ years of experience architecting human-centric enterprise solutions. Specializing in SAPUI5 custom applications, SAP Fiori Elements (v2/v4), ABAP RESTful Application Programming Model (RAP), and SAP Cloud Application Programming Model (CAP). Proven track record delivering Clean Core compliant solutions across Fortune 500 supply chain, finance, and procurement systems.",
    fullBio: [
      "I bridge the gap between heavy enterprise ERP backends and modern, frictionless user interfaces. With over 7 years dedicated strictly to the SAP ecosystem, I lead front-end modernization programs migrating legacy SAP GUI and Web Dynpro transactions to accessible, responsive SAP Fiori applications.",
      "My engineering philosophy centers on Clean Core principles and the modern SAP Fiori Horizon design standard. I craft both rapid Fiori Elements solutions using rich CDS annotations and highly tailored custom SAPUI5 components for demanding industrial and warehouse environments.",
      "Beyond the UI layer, I engineer end-to-end integration via OData v2/v4, build cloud-native services using SAP CAP on BTP Cloud Foundry / Kyma, and model robust core data structures using modern ABAP and CDS Views on SAP S/4HANA.",
    ],
    infoCards: {
      experience: {
        label: "Experience",
        value: "8+ Years",
        subtext: "Enterprise SAP S/4HANA & ECC Modernization",
      },
      specialization: {
        label: "Specialization",
        value: "SAPUI5 & Fiori",
        subtext: "Custom Apps, Elements, CAP & RAP",
      },
      industry: {
        label: "Industry",
        value: "Consulting",
        subtext: "SAP Technology",
      },
      location: {
        label: "Location",
        value: "India",
        subtext: "Delhi NCR (Open to Global Remote)",
      },
    },
    location: "Delhi NCR, India (Open to Global Remote)",
    currentRole: "Lead SAP Fiori & BTP Solutions Developer",
    currentCompany: "Deloitte USI",
    availability: "Available for Enterprise Consulting & Full-Time Senior Roles",
    yearsOfExperience: "8+",
    deliveredProjects: "24+",
    systemsIntegrated: "15+",
    userSatisfaction: "98.4%",
    contactEmail: "moin9997594451@gmail.com",
    socials: {
      linkedin: "https://www.linkedin.com/in/moin-khan-4b4370123/",
      github: "https://github.com/moin9997594451",
      email: "moin9997594451@gmail.com",
    },
    resumeDownloadUrl: "/Moin_Khan_Resume_2026.docx",
    resumePdfFileName: "Moin_Khan_Resume_2026.docx",
    stats: [
      {
        value: "8+ Years",
        label: "Enterprise Experience",
        description: "Specialized strictly in SAPUI5, Fiori, and S/4HANA modernization",
      },
      {
        value: "24+",
        label: "Fiori Apps Deployed",
        description: "Mission-critical custom & Fiori Elements applications in production",
      },
      {
        value: "100k+",
        label: "Daily Active Users",
        description: "Serving global supply chain, logistics, and finance workforces",
      },
      {
        value: "65%",
        label: "Avg. Cycle Reduction",
        description: "Through ergonomic UI design and real-time OData batch processing",
      },
    ],
    corePillars: [
      {
        title: "Clean Core Architecture",
        description:
          "Building side-by-side extensions and decoupling custom code from the ERP core via SAP BTP and modern release-contracted APIs.",
        icon: "ShieldCheck",
      },
      {
        title: "Fiori Horizon Design Standard",
        description:
          "Delivering accessibility (WCAG 2.1 AA), keyboard navigation, and responsive touch-first interfaces using SAP's latest design guidelines.",
        icon: "LayoutTemplate",
      },
      {
        title: "End-to-End Full Stack Synergy",
        description:
          "Seamless orchestration from CDS view modeling and RAP business objects down to OData consumption and client-side caching.",
        icon: "Layers",
      },
      {
        title: "High Performance & Offline Support",
        description:
          "Optimizing component preloaders, manifest routing, delta-token queries, and offline-capable mobile workflows on rugged hardware.",
        icon: "Zap",
      },
    ],
  },

  sapExpertise: [
    {
      id: "sapui5",
      title: "SAPUI5",
      shortDescription:
        "Building responsive, high-performance web applications using SAP's flagship enterprise framework.",
      conciseExplanation:
        "Mastery of declarative XML views, custom controls, manifest routing, two-way data binding, component preload optimization, and internationalization.",
      qualitativeLevel: "Core Expertise",
      category: "Core UI",
      icon: "Code2",
      relatedConcepts: ["XML Views & Fragments", "Custom Controls", "Data Binding", "Manifest Routing", "QUnit / OPA5"],
      ecosystemPathway: "core-erp",
      pathwayStep: 1,
      pathwayNext: "odata",
      enterpriseUseCases: [
        "Complex multi-view wizards with asynchronous validation",
        "High-density data entry grids with keyboard acceleration",
        "Custom SVG visualizers embedded directly into UI5 controllers",
      ],
    },
    {
      id: "sap-fiori",
      title: "SAP Fiori",
      shortDescription:
        "Human-centric enterprise design system enforcing UX consistency across business processes.",
      conciseExplanation:
        "Deep implementation of Fiori design guidelines (Horizon & Quartz), role-based floorplans, accessibility standards (WCAG 2.1 AA), and micro-chart visualizations.",
      qualitativeLevel: "Core Expertise",
      category: "Core UI",
      icon: "LayoutDashboard",
      relatedConcepts: ["Horizon Theme", "Design Guidelines", "Role-Based Floorplans", "WCAG 2.1 AA", "Micro-Charts"],
      ecosystemPathway: "core-erp",
      pathwayStep: 1,
      enterpriseUseCases: [
        "Cross-functional executive cockpits and analytical dashboards",
        "Enterprise-wide standard design consistency across 30+ disparate apps",
        "Co-pilot and conversational AI UI embedding into Fiori shell",
      ],
    },
    {
      id: "fiori-elements",
      title: "Fiori Elements",
      shortDescription:
        "Metadata-driven development accelerating standardized enterprise application delivery.",
      conciseExplanation:
        "Rapid implementation of List Report, Object Page, Analytical List Page (ALP), and Overview Page (OVP) powered by UI annotations with minimal client-side boilerplate.",
      qualitativeLevel: "Core Expertise",
      category: "Core UI",
      icon: "Layers",
      relatedConcepts: ["List Report", "Object Page", "Analytical List Page (ALP)", "Overview Page (OVP)", "Flexible Column Layout"],
      ecosystemPathway: "core-erp",
      pathwayStep: 1,
      enterpriseUseCases: [
        "Rapid enterprise CRUD application rollout with 70% less manual UI code",
        "Multi-dimensional analytical drilldowns with chart-table synchronization",
        "Draft handling and transactional consistency for high-value purchase orders",
      ],
    },
    {
      id: "odata",
      title: "OData",
      shortDescription:
        "Enterprise RESTful data protocol bridging SAP backends and modern web frontends.",
      conciseExplanation:
        "Advanced proficiency in OData v2 and v4 services, $batch optimization, deep inserts, navigation properties, delta tokens, and ETag concurrency control.",
      qualitativeLevel: "Core Expertise",
      category: "Architecture & Services",
      icon: "Network",
      relatedConcepts: ["OData v4 & v2", "$batch Processing", "$expand & $select", "Delta Tokens", "ETag Concurrency"],
      ecosystemPathway: "core-erp",
      pathwayStep: 2,
      pathwayNext: "abap-cds",
      enterpriseUseCases: [
        "Mass transaction processing aggregating 500+ order lines per batch call",
        "Real-time delta synchronization for field service technicians",
        "Optimistic concurrency control preventing lost updates in shared records",
      ],
    },
    {
      id: "abap",
      title: "ABAP",
      shortDescription:
        "Robust enterprise backend business logic and transactional processing on SAP NetWeaver and S/4HANA.",
      conciseExplanation:
        "Modern ABAP 7.5+ object-oriented programming, Clean ABAP standards, unit testing with ABAP Unit, and adherence to Clean Core Tier-1 extension guidelines.",
      qualitativeLevel: "Professional Experience",
      category: "Backend & Data",
      icon: "Terminal",
      relatedConcepts: ["Modern ABAP 7.5+", "Clean ABAP", "ABAP Unit", "OO Design Patterns", "Clean Core Tier 1"],
      ecosystemPathway: "core-erp",
      pathwayStep: 3,
      pathwayNext: "sap-gateway",
      enterpriseUseCases: [
        "High-performance data pipelines processing millions of inventory ledger lines",
        "Custom business logic implementation decoupled from standard SAP packages",
        "Automated regression test suites ensuring zero regression on quarterly upgrades",
      ],
    },
    {
      id: "cds",
      title: "CDS",
      shortDescription:
        "Next-generation semantic data definition and query modeling directly on SAP HANA.",
      conciseExplanation:
        "Architecting Core Data Services views, associations, compositions, virtual elements, table functions, and UI metadata annotations feeding Fiori Elements.",
      qualitativeLevel: "Core Expertise",
      category: "Backend & Data",
      icon: "Database",
      relatedConcepts: ["CDS Annotations", "Compositions", "Virtual Elements", "Table Functions", "AMDP"],
      ecosystemPathway: "core-erp",
      pathwayStep: 3,
      pathwayNext: "sap-gateway",
      enterpriseUseCases: [
        "Complex hierarchical BOM (Bill of Materials) recursive traversals in HANA DB",
        "Zero-code UI binding using @UI annotations",
        "Analytical data cubes feeding real-time financial variance dashboards",
      ],
    },
    {
      id: "sap-rap",
      title: "SAP RAP",
      shortDescription:
        "ABAP RESTful Application Programming Model for modern S/4HANA application architecture.",
      conciseExplanation:
        "Engineering managed and unmanaged RAP scenarios on ABAP Cloud, defining behavior definitions (BDEF), validations, determinations, actions, and draft handling.",
      qualitativeLevel: "Core Expertise",
      category: "Backend & Data",
      icon: "Cpu",
      relatedConcepts: ["ABAP Cloud", "Behavior Definitions", "Draft Orchestration", "EML (Entity Manipulation)", "Authorizations"],
      ecosystemPathway: "core-erp",
      pathwayStep: 3,
      enterpriseUseCases: [
        "Standard-compliant S/4HANA transactional applications with strict validations",
        "Legacy BAPI encapsulation within modern unmanaged RAP business objects",
        "Automated authorization checks at entity and field level via DCLs",
      ],
    },
    {
      id: "sap-gateway",
      title: "SAP Gateway",
      shortDescription:
        "Secure integration layer exposing backend ABAP data as standardized OData services.",
      conciseExplanation:
        "Service enablement in /IWFND/GW_CLIENT, error logging, performance tracing, soft-state tuning, and service registration between hub and embedded architectures.",
      qualitativeLevel: "Professional Experience",
      category: "Architecture & Services",
      icon: "Radio",
      relatedConcepts: ["SEGW Service Builder", "Service Registration", "Soft State", "Trace & Diagnostics", "Embedded vs Hub"],
      ecosystemPathway: "core-erp",
      pathwayStep: 4,
      pathwayNext: "fiori-launchpad",
      enterpriseUseCases: [
        "Diagnosing sub-second latency bottlenecks in mission-critical mobile scan apps",
        "Custom conversion exits and payload normalization for legacy backends",
        "Gateway hub deployment vs embedded deployment strategy planning",
      ],
    },
    {
      id: "fiori-launchpad",
      title: "Fiori Launchpad",
      shortDescription:
        "Universal role-based enterprise entry point for all SAP applications.",
      conciseExplanation:
        "Configuring dynamic KPI tiles, semantic object navigation, Target Mappings, Catalogs, Spaces & Pages on S/4HANA and SAP Build Workzone.",
      qualitativeLevel: "Core Expertise",
      category: "Core UI",
      icon: "AppWindow",
      relatedConcepts: ["Spaces & Pages", "Semantic Navigation", "Dynamic KPI Tiles", "Target Mapping", "SAP Build Workzone"],
      ecosystemPathway: "core-erp",
      pathwayStep: 5,
      enterpriseUseCases: [
        "Multi-tenant role-based FLP personalization for 12 distinct business personas",
        "Cross-app intent-based navigation preserving complex deep filter states",
        "Custom Shell header plugin for real-time plant emergency broadcasts",
      ],
    },
    {
      id: "sap-cap",
      title: "SAP CAP",
      shortDescription:
        "Cloud Application Programming Model for rapid cloud-native service engineering.",
      conciseExplanation:
        "Building enterprise microservices using Node.js / TypeScript, modeling CDS entity definitions, custom event handlers, and SAP HANA Cloud persistence.",
      qualitativeLevel: "Core Expertise",
      category: "Cloud & Platform",
      icon: "Server",
      relatedConcepts: ["Node.js & TypeScript", "CDS Definition Language", "Event Handlers", "HANA Cloud", "SAP Event Mesh"],
      ecosystemPathway: "cloud-native",
      pathwayStep: 1,
      pathwayNext: "sap-btp",
      enterpriseUseCases: [
        "Microservices architecture hosting scalable side-by-side extensions",
        "Event-driven messaging listening to S/4HANA business events via Event Mesh",
        "Automated PDF document generation pipeline triggered by purchase approvals",
      ],
    },
    {
      id: "sap-btp",
      title: "SAP BTP",
      shortDescription:
        "Enterprise Platform-as-a-Service powering side-by-side extension and integration.",
      conciseExplanation:
        "Deploying MTA applications to Cloud Foundry and Kyma, configuring Cloud Connector, Destination Service, XSUAA authorization, and SAP Build Workzone.",
      qualitativeLevel: "Core Expertise",
      category: "Cloud & Platform",
      icon: "Cloud",
      relatedConcepts: ["Cloud Foundry & Kyma", "Cloud Connector", "Destination Service", "XSUAA / IAS", "Approuter"],
      ecosystemPathway: "cloud-native",
      pathwayStep: 2,
      pathwayNext: "cloud-apps",
      enterpriseUseCases: [
        "Secure hybrid connectivity bridging multi-region AWS cloud apps with on-premise S/4HANA",
        "Single Sign-On (SSO) configuration with corporate Azure AD via Identity Authentication",
        "Zero-downtime deployment pipelines using MTA (Multi-Target Application) archives",
      ],
    },
  ],

  techStack: [
    {
      id: "frontend",
      label: "Frontend Engineering",
      description: "Client-side architecture, reactive UI frameworks, and design system engineering",
      items: [
        { name: "SAPUI5", level: "Principal", focus: "Custom Components, Manifest Routing, Component Preload", badge: "Core Mastery" },
        { name: "JavaScript (ES6+)", level: "Expert", focus: "Functional, Async/Await, Web APIs, Event Driven", badge: "Expert" },
        { name: "TypeScript", level: "Expert", focus: "Type-safe UI5, Generics, Compiler Pipeline, TS-UI5", badge: "Modern" },
        { name: "HTML5 & Semantic DOM", level: "Expert", focus: "WCAG 2.1 AA, ARIA, Responsive Layouts", badge: "Accessible" },
        { name: "CSS3 / Custom Styling", level: "Advanced", focus: "Flexbox, CSS Grid, SAP Horizon Theme Tokens", badge: "UI/UX" },
        { name: "XML Views & Fragments", level: "Principal", focus: "Declarative UI, Composition, Dialog Lifecycle", badge: "Core" },
        { name: "UI5 Web Components", level: "Advanced", focus: "Micro-frontends, Framework-agnostic integration", badge: "Future-proof" },
        { name: "QUnit & OPA5", level: "Advanced", focus: "Component & Integration Test Automation", badge: "Testing" },
      ],
    },
    {
      id: "sap",
      label: "SAP Ecosystem & Backend",
      description: "ERP data tier, business logic execution, service modeling, and portal runtime",
      items: [
        { name: "SAP Fiori (Horizon/Quartz)", level: "Principal", focus: "Design Guidelines, Shell Navigation, Workzone", badge: "Design System" },
        { name: "Fiori Elements", level: "Principal", focus: "List Report, Object Page, ALP, OVP, Flexible Column", badge: "Enterprise" },
        { name: "OData (v2 & v4)", level: "Principal", focus: "Batching, Deep Entities, Delta Sync, ETag Handling", badge: "API Standard" },
        { name: "SAP CAP (Node.js/TS)", level: "Expert", focus: "CDS Modeling, Custom Handlers, SQLite/HANA", badge: "Cloud Native" },
        { name: "SAP RAP (ABAP Cloud)", level: "Expert", focus: "Behavior Definitions, Validations, Determinations", badge: "S/4HANA" },
        { name: "ABAP (7.5+ & Cloud)", level: "Expert", focus: "Clean ABAP, OO Design, Unit Tests, Tier 1 Extensions", badge: "Clean Core" },
        { name: "CDS Views & Annotations", level: "Principal", focus: "Table Functions, Virtual Elements, UI Metadata", badge: "Data Modeling" },
        { name: "SAP Gateway (/IWFND/)", level: "Advanced", focus: "Service Maintenance, Traces, Soft State Tuning", badge: "Integration" },
        { name: "Fiori Launchpad (FLP)", level: "Principal", focus: "Spaces, Pages, Catalogs, Target Mappings", badge: "Portal" },
      ],
    },
    {
      id: "cloud-tools",
      label: "BTP and Cloud",
      description: "Cloud infrastructure, developer tooling, CI/CD pipelines, and runtime monitoring",
      items: [
        { name: "SAP BTP", level: "Expert", focus: "Cloud Foundry, Kyma, Subaccount Architecture", badge: "PaaS" },
        { name: "SAP Business Application Studio", level: "Expert", focus: "Productivity Tools, Fiori Generator, Storyboard", badge: "IDE" },
        { name: "SAP Cloud Connector", level: "Expert", focus: "Secure On-Premise Tunneling, RFC/HTTP Mapping", badge: "Security" },
        { name: "Destination & XSUAA", level: "Expert", focus: "OAuth2, Principal Propagation, Role Collections", badge: "Auth" },
        { name: "Git & GitHub Enterprise", level: "Expert", focus: "Branching Strategies, Merge Reviews, Actions", badge: "VCS" },
        { name: "Postman & Insomnia", level: "Expert", focus: "Automated OData Collections, CSRF Token Flows", badge: "Testing" },
        { name: "UI5 Tooling & npm", level: "Expert", focus: "Custom Middlewares, Build Tasks, Component bundling", badge: "DevOps" },
        { name: "VS Code", level: "Expert", focus: "SAP Fiori Tools, XML Toolkit, CDS Language Support", badge: "Environment" },
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      company: "Deloitte",
      companyUrl: "https://example.com",
      role: "Lead SAP Fiori & BTP Solutions Developer",
      location: "Gurgaon, Delhi NCR",
      workMode: "Hybrid",
      startDate: "10th Jan 2022",
      endDate: "Present",
      isCurrent: true,
      businessDomain: "SAP Consulting",
      summary:
        "Directing the frontend architecture and modernization roadmap for enterprise logistics and air freight management across 14 international distribution hubs.",
      responsibilities: [
        "Architecting enterprise-grade SAPUI5 custom applications and Fiori Elements suites integrated with SAP S/4HANA 2022 via BTP Cloud Foundry.",
        "Guiding 8 frontend and backend engineers in adherence to Clean Core development principles and SAP Horizon design guidelines.",
        "Engineering high-volume OData v4 batch services and CDS analytical models delivering sub-300ms query responses on tables exceeding 50 million records.",
        "Implementing automated CI/CD pipelines utilizing Project Piper, UI5 Tooling, and Docker for frictionless MTA package deployments.",
      ],
      keyAchievements: [
        "Engineered an offline-capable mobile ramp dispatching app running on Zebra rugged handhelds, reducing freight loading turnaround times by 42%.",
        "Migrated 18 legacy SAP GUI / Web Dynpro transactions into 4 unified Fiori Launchpad spaces, boosting daily user adoption score to 98.4%.",
        "Spearheaded zero-downtime deployment strategy on SAP BTP, achieving 99.98% service uptime across critical holiday cargo seasons.",
      ],
      technologies: ["SAPUI5", "Fiori Elements", "SAP BTP", "SAP CAP", "OData v4", "CDS Views", "Zebra RFID/Barcode API", "Docker"],
    },
    {
      id: "exp-2",
      company: "IBM",
      companyUrl: "https://example.com",
      role: "SAPUI5 & Fiori Developer",
      location: "Bangalore, Kolkata",
      workMode: "Hybrid",
      startDate: "23rd April 2018",
      endDate: "19th Dec 2021",
      isCurrent: false,
      businessDomain: "Building SAP Solutions",
      summary:
        "Delivered custom manufacturing execution and quality inspection applications for high-precision European industrial manufacturing facilities.",
      responsibilities: [
        "Developed end-to-end custom SAPUI5 responsive applications for factory floor operators with direct integration to SAP PP and QM modules.",
        "Authored custom UI5 controls for interactive visual schematic inspection and touch-based anomaly marking on 3D component renders.",
        "Built ABAP CDS views with analytical annotations and configured OData services in SAP Gateway with advanced server-side paging.",
        "Conducted design thinking workshops with plant managers and machine operators to streamline cumbersome data entry workflows.",
      ],
      keyAchievements: [
        "Cut shop-floor defect logging duration from 6.5 minutes per batch to 45 seconds through streamlined single-screen UI design.",
        "Designed and established the company's reusable SAPUI5 UI component library, slashing subsequent project development time by 35%.",
        "Awarded European Manufacturing IT Innovation of the Year (2020) for the automated Visual Defect Tracker app.",
      ],
      technologies: ["SAPUI5", "Modern ABAP", "CDS Views", "SAP Gateway", "OData v2", "Fiori Launchpad", "QUnit", "Git"],
    },    
  ],

  featuredProjects: projectsData,

  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science & Information Systems",
      institution: "Technical University of Munich (TUM)",
      location: "Munich, Germany",
      startYear: "2013",
      endYear: "2017",
      graduationYear: "2017",
      honors: "Graduated with High Honors (1.3 German scale / top 5% of class)",
      coursework: [
        "Enterprise Software Architecture",
        "Distributed Database Systems & Relational Modeling",
        "Web Engineering & Usability (HCI)",
        "Object-Oriented Design & Algorithms",
        "Cloud Computing & Microservices",
      ],
      description:
        "Rigorous foundation in software engineering and enterprise information systems. Authored an industry-sponsored bachelor's thesis focused on optimizing declarative metadata-driven user interfaces for cloud enterprise resource planning systems.",
      relevantInfo: [
        "Bachelor's Thesis: Optimizing Metadata-Driven UIs for ERP Systems (Grade 1.0)",
        "Focus on In-Memory Computing, Relational Algebra, and Distributed Transactional Systems",
        "Elected Student Representative for the Department of Informatics (2015 — 2016)",
      ],
    },
    {
      id: "edu-2",
      degree: "Executive Specialization in Enterprise Architecture & Cloud Systems",
      institution: "Hasso Plattner Institute (HPI) & openSAP",
      location: "Potsdam, Germany / Hybrid",
      startYear: "2020",
      endYear: "2021",
      graduationYear: "2021",
      honors: "Completed with Distinction (Top 2% score across all capstones)",
      coursework: [
        "S/4HANA Clean Core Extensibility",
        "Event-Driven Microservices on SAP BTP",
        "Domain-Driven Design (DDD) for Large ERP",
        "ABAP RESTful Application Programming Model (RAP)",
      ],
      description:
        "Post-graduate executive engineering curriculum centered on modern enterprise modernization, cloud-native side-by-side extension strategies, and decoupled S/4HANA Clean Core architectures.",
      relevantInfo: [
        "Capstone: Microservice Orchestration and Event Mesh Pipelines on SAP BTP",
        "In-depth research into decoupled extension patterns avoiding core ERP modifications",
        "Published technical whitepaper on RAP Draft Handling and Transactional Buffer Management",
      ],
    },
  ],

  certifications: [
    {
      id: "cert-1",
      title: "SAP Certified Development Associate - SAP Fiori Application Developer",
      issuer: "SAP SE",
      issueYear: "2023",
      issueDate: "Nov 2023",
      credentialId: "C_FIORDEV_22",
      verifyUrl: "https://www.credly.com",
      category: "SAP Official",
      badgeText: "Official SAP Associate",
      status: "Active",
      description:
        "Validates core knowledge and proven engineering skills required to architect and develop custom SAPUI5 applications, enhance standard SAP Fiori applications, and build enterprise extensions adhering to SAP Horizon design guidelines.",
      skills: ["SAPUI5", "Fiori Elements", "OData v4", "XML Views", "Theme Designer"],
    },
    {
      id: "cert-2",
      title: "SAP Certified Development Specialist - ABAP for SAP HANA 2.0",
      issuer: "SAP SE",
      issueYear: "2022",
      issueDate: "Aug 2022",
      credentialId: "E_HANAAW_18",
      verifyUrl: "https://www.credly.com",
      category: "SAP Official",
      badgeText: "Official SAP Specialist",
      status: "Active",
      description:
        "Certifies in-depth expertise in developing high-performance modern ABAP applications optimized for SAP HANA in-memory databases, utilizing Core Data Services (CDS), AMDP, and SQL trace diagnostics.",
      skills: ["ABAP for HANA", "CDS Views", "AMDP", "Code Inspector", "SQL Profiling"],
    },
    {
      id: "cert-3",
      title: "SAP Certified Citizen Developer Associate - SAP Build",
      issuer: "SAP SE",
      issueYear: "2023",
      issueDate: "Mar 2023",
      credentialId: "C_BUILD_01",
      verifyUrl: "https://www.credly.com",
      category: "SAP Official",
      badgeText: "Official SAP Associate",
      status: "Active",
      description:
        "Demonstrates comprehensive mastery in building scalable business processes, workzone portals, and rapid low-code extensions using SAP Build Process Automation and SAP Build Workzone.",
      skills: ["SAP Build Workzone", "Process Automation", "Business Rules", "Low-Code Apps"],
    },
    {
      id: "cert-4",
      title: "SAP Certified Associate - Back-End Developer (ABAP Cloud)",
      issuer: "SAP SE",
      issueYear: "2024",
      issueDate: "Jan 2024",
      credentialId: "C_ABAPD_2309",
      verifyUrl: "https://www.credly.com",
      category: "SAP Official",
      badgeText: "Official SAP Associate",
      status: "Active",
      description:
        "Verifies fundamental knowledge of Clean Core development, modern ABAP Cloud syntax, released APIs, behavior definitions (BDEF), and the ABAP RESTful Application Programming Model (RAP).",
      skills: ["ABAP Cloud", "RAP Model", "Clean Core", "EML", "Behavior Definitions"],
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "European Manufacturing IT Innovation Award",
      organization: "Apex Industrial Solutions",
      year: "2020",
      category: "Award",
      badgeText: "Industry Innovation Award",
      description:
        "Recognized across European manufacturing plants for architecting and shipping the interactive Visual Defect Tracker SAPUI5 custom component, slashing shop-floor defect logging duration from 6.5 minutes to 45 seconds.",
      impact: "88% Reduction in Shop-Floor Defect Logging Latency",
      highlightPills: ["SAPUI5 Custom Controls", "Plant Floor Touch UI", "Manufacturing Innovation"],
    },
    {
      id: "ach-2",
      title: "Enterprise Delivery Excellence Award",
      organization: "AeroTech Global Logistics",
      year: "2023",
      category: "Recognition",
      badgeText: "Executive Recognition",
      description:
        "Commended by the VP of Global Supply Chain for architecting the touch-first offline mobile tarmac dispatching solution deployed across 14 international airport hubs, preventing substantial regulatory delay penalties.",
      impact: "€1.2M Annual Cost Avoidance Across 14 Airport Hubs",
      highlightPills: ["Supply Chain", "Offline Architecture", "Zebra Handhelds"],
    },
    {
      id: "ach-3",
      title: "High-Velocity Zero-Downtime Migration: 50M+ Records",
      organization: "AeroTech Global Logistics",
      year: "2023",
      category: "Major Milestone",
      badgeText: "Production Milestone",
      description:
        "Spearheaded the zero-downtime cutover of a mission-critical global inventory ledger across European and US distribution centers without disrupting 24/7 tarmac flight turnarounds or cargo loading operations.",
      impact: "Zero Flight Delays & 100% Data Integrity Maintained",
      highlightPills: ["S/4HANA Migration", "Zero-Downtime Cutover", "OData v4 Batching"],
    },
    {
      id: "ach-4",
      title: "SAP Community Chapter Lead & Technical Mentor",
      organization: "Frankfurt Regional SAP Community",
      year: "2022 — Present",
      category: "Leadership Contribution",
      badgeText: "Leadership & Mentorship",
      description:
        "Organized regional developer circles, conducted hands-on code labs on Clean ABAP and SAPUI5 TypeScript tooling, and mentored over 12 junior and mid-level consultants transitioning to S/4HANA Cloud.",
      impact: "12+ Enterprise Developers Mentored & Trained",
      highlightPills: ["Developer Mentorship", "Clean Core Advocacy", "UI5 Community"],
    },
    {
      id: "ach-5",
      title: "Enterprise Fiori & Clean Core Technical Speaker",
      organization: "SAP Tech Nights & Community Day",
      year: "2021 — Present",
      category: "Knowledge Sharing",
      badgeText: "Technical Speaker",
      description:
        "Regular speaker and technical author sharing deep-dive architectural insights on OData v4 batch optimization, custom UI5 controls, and Clean Core Tier-1 extension practices.",
      impact: "4 Keynote Sessions & 3 Technical Architecture Guides Published",
      highlightPills: ["Technical Writing", "Tech Night Speaker", "OData v4 Deep Dives"],
    },
  ],
};
