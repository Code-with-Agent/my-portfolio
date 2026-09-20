import { ProjectItem } from "@/lib/types";

export const projectsData: ProjectItem[] = [
  {
    id: "global-logistics-portal",
    name: "Global Freight & Ramp Operations Portal",
    subtitle: "Mission-critical touch-first operations platform for 14 international airports",
    businessDomain: "Supply Chain & Air Cargo Logistics",
    role: "Lead SAPUI5 & Mobile Solutions Architect",
    projectType: "Custom SAPUI5 & Offline Mobile App",
    description:
      "An enterprise-scale custom SAPUI5 suite designed for warehouse managers and tarmac ground handlers. Provides real-time aircraft cargo manifests, weight balance calculations, hazardous material compliance tracking, and instantaneous barcode scan dispatching.",
    summary:
      "A ruggedized SAPUI5 touch-first mobile application running on industrial Zebra handhelds with offline IndexedDB synchronization for ramp handlers across 14 international airport hubs.",
    context:
      "Tier-1 global air cargo logistics provider operating 24/7 across 14 international airport hubs, handling over 850,000 pallets annually with strict tarmac turnaround SLAs.",
    clientContext: "Tier-1 Global Cargo Logistics Provider",
    businessChallenge:
      "Ground staff previously relied on printed paper manifests and legacy green-screen terminals. Tarmac delay penalties averaged €450k annually due to data latency, manual data re-entry, and lack of real-time hazardous material notifications during adverse weather.",
    solution:
      "Engineered a responsive, high-contrast SAPUI5 application running on industrial Zebra handhelds and iPad tablets. Features local IndexedDB caching for uninterrupted offline tarmac operations, WebSockets for instant gate-change alerts, and an optimized OData v4 batch pipeline.",
    architectureDetails: [
      "SAPUI5 frontend running on BTP Cloud Foundry with custom standalone Approuter",
      "SAP S/4HANA backend exposed via ABAP RAP business objects and OData v4",
      "Service Worker and IndexedDB layer for offline flight manifest capture and deterministic synchronization",
      "Web Workers utilized for client-side cargo center-of-gravity balance calculations without UI thread blocking",
    ],
    sapTechnologies: ["SAPUI5", "SAP BTP", "ABAP RAP", "OData v4", "CDS Views", "Zebra DataWedge API", "Fiori Horizon"],
    technologies: ["SAPUI5", "OData v4", "ABAP RAP", "SAP BTP", "Zebra DataWedge API", "IndexedDB", "Fiori Horizon"],
    keyContribution:
      "Sole architect and lead developer for the frontend suite. Designed the offline synchronization engine, implemented hardware laser barcode listeners, and authored the high-contrast outdoor tarmac UI mode.",
    outcome: [
      "42% faster aircraft turnaround loading times verified across 14 airport hubs",
      "Eliminated 100% of paper-based manifest inaccuracies and manual data re-keying",
      "Saved an estimated €1.2M annually in avoidable delay penalties and regulatory fines",
      "Zero data loss across 850,000+ scanned cargo items during first year in production",
      "Supported continuous 24/7 production operations through peak holiday cargo seasons",
    ],
    resultsAndImpact: [
      "42% faster aircraft turnaround loading times verified across 14 airport hubs",
      "Eliminated 100% of paper-based manifest inaccuracies and manual data re-keying",
      "Saved an estimated €1.2M annually in avoidable delay penalties and regulatory fines",
      "Zero data loss across 850,000+ scanned cargo items during first year in production",
    ],
    keyLearnings: [
      "Tarmac outdoor conditions demand high-contrast UI modes and minimum 60px tactile touch targets for gloved workers.",
      "OData v4 $batch optimization prevents gateway connection saturation when multiple flight crews submit simultaneous updates.",
      "Comprehensive offline-first error buffering is essential when industrial Wi-Fi drops on active tarmacs.",
    ],
    filterTags: ["All", "SAPUI5", "SAP Fiori", "RAP", "Enterprise Applications"],
    tags: ["SAPUI5", "OData v4", "BTP", "RAP", "Offline Mobile", "Logistics"],
    featured: true,
  },
  {
    id: "procurement-analytics-platform",
    name: "Autonomous Spend Analytics & Approval Engine",
    subtitle: "Multi-currency analytical cockpit managing €850M+ annual indirect spend",
    businessDomain: "Strategic Sourcing & Procurement",
    role: "Senior SAP Fiori & CAP Developer",
    projectType: "Fiori Elements (Analytical List Page) & CAP Extension",
    description:
      "A next-generation Fiori Elements Analytical List Page (ALP) and Object Page suite enabling C-suite procurement officers to uncover supplier price anomalies, simulate volume rebates, and approve complex multi-tier purchase requisitions.",
    summary:
      "An integrated Fiori Elements Analytical List Page (ALP) powered by CDS analytical annotations and SAP CAP microservices on SAP BTP, cutting procurement approval cycles by 71%.",
    context:
      "Multinational industrial machinery manufacturer with operations in 18 countries managing over €850M in annual indirect material and equipment spend across 4 disparate ERP backends.",
    clientContext: "Multinational Industrial Equipment Manufacturer",
    businessChallenge:
      "Procurement directors faced fragmented reporting across 4 legacy ERP instances. Approval cycle times averaged 11 business days, frequently causing missed early-payment supplier discounts worth over €3.4M per fiscal year.",
    solution:
      "Designed an integrated Fiori Elements solution leveraging CDS analytical annotations, micro-charts, and SAP CAP on BTP. Interactive visual filter bars allow instant slicing by commodity code, spending tier, and supplier risk index with synchronized table updates.",
    architectureDetails: [
      "Fiori Elements Analytical List Page (ALP) v4 with customized extension controllers",
      "SAP CAP (TypeScript) microservice orchestrating data federation across 4 SAP ECC & S/4HANA instances",
      "HANA Cloud analytical views with multidimensional aggregation engine",
      "Integration with SAP Build Process Automation for automated threshold-based approval routing",
    ],
    sapTechnologies: ["Fiori Elements", "SAP CAP", "TypeScript", "CDS Annotations", "SAP HANA Cloud", "SAP Build Workzone"],
    technologies: ["Fiori Elements", "SAP CAP", "TypeScript", "CDS Annotations", "SAP HANA Cloud", "SAP Build Workzone"],
    keyContribution:
      "Defined the CDS analytical view hierarchy, engineered custom Fiori Elements ALP extension controllers for currency conversion simulation, and optimized multidimensional aggregation queries.",
    outcome: [
      "Reduced average purchase order approval cycle from 11 days to 3.2 days (71% improvement)",
      "Captured €2.8M in negotiated prompt-payment supplier discounts in Year 1",
      "Consolidated 22 disparate legacy reports into a single cohesive Fiori executive cockpit",
      "Achieved 99.4% executive user satisfaction in post-deployment audit",
      "Conducted knowledge transfer and established internal Fiori Elements development standards",
    ],
    resultsAndImpact: [
      "Reduced average purchase order approval cycle from 11 days to 3.2 days (71% improvement)",
      "Captured €2.8M in negotiated prompt-payment supplier discounts in Year 1",
      "Consolidated 22 disparate legacy reports into a single cohesive Fiori executive cockpit",
      "Achieved 99.4% executive user satisfaction in post-deployment audit",
    ],
    keyLearnings: [
      "Fiori Elements Analytical List Pages reduce client-side maintenance by 68% compared to custom-coded dashboards.",
      "Pushing analytical aggregations into SAP HANA views keeps UI response times under 300ms even across multi-million record cubes.",
      "Clear visual filters allow business stakeholders to identify price discrepancies without waiting for custom BI reports.",
    ],
    filterTags: ["All", "SAP Fiori", "CAP", "Enterprise Applications"],
    tags: ["Fiori Elements", "SAP CAP", "CDS", "HANA Cloud", "Analytics", "Procurement"],
    featured: true,
  },
  {
    id: "warehouse-scanner-app",
    name: "Touch-First Warehouse Putaway & Picking Suite",
    subtitle: "Ruggedized high-velocity warehouse management app for SAP EWM",
    businessDomain: "Supply Chain & Warehouse Management",
    role: "Lead SAPUI5 & EWM Frontend Specialist",
    projectType: "Rugged Mobile Touch App for SAP EWM",
    description:
      "A specialized SAPUI5 mobile application crafted for forklift drivers and picking operators in temperature-controlled -20°C cold-storage warehouses. Optimized for single-handed tactile glove operation and instant audible scan feedback.",
    summary:
      "High-velocity tactile SAPUI5 warehouse app running on vehicle-mounted tablets and Zebra laser scanners, increasing pick throughput by 28% in extreme -20°C cold storage.",
    context:
      "European retail and e-commerce cold-storage logistics network handling 250,000+ daily perishable inventory movements across 4 automated fulfillment centers.",
    clientContext: "European Retail & E-Commerce Fulfillment Network",
    businessChallenge:
      "Warehouse operators struggled with small touch targets and slow screen transitions on standard SAP ITSmobile Telnet screens, leading to high error rates and operator fatigue in extreme cold environments.",
    solution:
      "Created an ultra-minimal, high-contrast SAPUI5 application with large touch targets (64px minimum), audio frequency differentiation for success/error states, and direct hardware laser scanner integration via Zebra DataWedge intents.",
    architectureDetails: [
      "Lightweight SAPUI5 architecture with zero unnecessary external dependencies",
      "Direct connection to SAP Extended Warehouse Management (EWM) via high-speed Gateway OData services",
      "Optimized client-side memory footprint preventing browser tab crashes during 12-hour continuous shifts",
      "Haptic and acoustic feedback integration via Web Audio API and hardware bridge",
    ],
    sapTechnologies: ["SAPUI5", "SAP EWM", "SAP Gateway", "ABAP", "Zebra DataWedge", "Web Audio API", "CSS Custom Themes"],
    technologies: ["SAPUI5", "SAP EWM", "SAP Gateway", "ABAP", "Zebra DataWedge", "Web Audio API", "CSS Custom Themes"],
    keyContribution:
      "Conducted on-site physical ergonomics testing inside cold storage facilities; coded the custom touch-grid controls and laser scanner buffer handler.",
    outcome: [
      "Increased pick-and-pack throughput by 28% (from 82 lines/hr to 105 lines/hr per operator)",
      "Picking error rate plunged by 89%, virtually eliminating mis-shipped pallet incidents",
      "Drastically reduced training onboarding time for seasonal workers from 3 days to 4 hours",
      "Supported successful production cutover across 4 regional distribution centers",
      "Resolved long-standing handheld browser stability issues during 12-hour shifts",
    ],
    resultsAndImpact: [
      "Increased pick-and-pack throughput by 28% (from 82 lines/hr to 105 lines/hr per operator)",
      "Picking error rate plunged by 89%, virtually eliminating mis-shipped pallet incidents",
      "Drastically reduced training onboarding time for seasonal workers from 3 days to 4 hours",
    ],
    keyLearnings: [
      "Operating in heavy sub-zero gloves requires generous 64px hit targets and zero reliance on precision gestures.",
      "Audible feedback tones allow forklift operators to confirm scans without diverting their eyes from warehouse aisles.",
      "Maintaining a sub-2MB initial asset footprint ensures reliable performance over saturated warehouse wireless networks.",
    ],
    filterTags: ["All", "SAPUI5", "ABAP", "Enterprise Applications"],
    tags: ["SAPUI5", "SAP EWM", "Mobile", "Hardware Integration", "Zebra", "Warehouse"],
    featured: true,
  },
  {
    id: "employee-self-service-portal",
    name: "Global HR & Workforce Self-Service Suite",
    subtitle: "Universal employee portal serving 45,000+ international staff across 22 countries",
    businessDomain: "Human Capital Management",
    role: "Senior SAP Fiori & Workzone Developer",
    projectType: "SAP Build Workzone & Custom UI5 Micro-Apps",
    description:
      "A unified Fiori Launchpad portal consolidating time recording, leave requests, internal talent mobility, and executive organizational charting with real-time integration into SAP SuccessFactors and on-premise SAP HCM.",
    summary:
      "Consolidated enterprise portal on SAP Build Workzone with custom interactive UI5 widgets and SuccessFactors integration, cutting HR helpdesk tickets by 53%.",
    context:
      "Global financial institution with 45,000+ corporate employees operating across 22 international subsidiaries under strict banking security regulations.",
    clientContext: "Global Financial Services Institution",
    businessChallenge:
      "Employees had to navigate across 5 distinct legacy portals with differing credentials, non-responsive mobile pages, and confusing multi-level organizational hierarchies.",
    solution:
      "Engineered a cohesive SAP Build Workzone portal combining custom SAPUI5 widgets and Fiori Elements apps. Included a custom interactive SVG organizational tree visualizer, automated vacation accrual calculators, and instant multi-language translation.",
    architectureDetails: [
      "SAP Build Workzone Standard Edition serving as the single entry point",
      "SAP BTP Approuter with Principal Propagation via Azure Active Directory SSO",
      "SAP Cloud Integration (CPI) mediating synchronous HCM and SuccessFactors OData APIs",
      "Strict compliance with European GDPR, banking privacy, and WCAG 2.1 AA accessibility",
    ],
    sapTechnologies: ["SAP Build Workzone", "SAPUI5", "SAP SuccessFactors", "SAP BTP", "Cloud Integration", "WCAG 2.1 AA"],
    technologies: ["SAP Build Workzone", "SAPUI5", "SAP SuccessFactors", "SAP BTP", "Cloud Integration", "WCAG 2.1 AA"],
    keyContribution:
      "Led the frontend implementation, created the accessible interactive Org Chart component, and authored the automated accessibility test suite.",
    outcome: [
      "Served 45,000+ active employees seamlessly across desktop, iPad, and smartphone devices",
      "Reduced internal HR helpdesk query tickets by 53% within 90 days of rollout",
      "Achieved 100% compliance in rigorous third-party banking accessibility and GDPR audits",
      "Supported coordinated production releases across 22 country offices",
      "Conducted knowledge transfer sessions for regional HR technology administrators",
    ],
    resultsAndImpact: [
      "Served 45,000+ active employees seamlessly across desktop, iPad, and smartphone devices",
      "Reduced internal HR helpdesk query tickets by 53% within 90 days of rollout",
      "Achieved 100% compliance in rigorous third-party banking accessibility and GDPR audits",
    ],
    keyLearnings: [
      "Single sign-on with principal propagation eliminates employee password friction across hybrid cloud landscapes.",
      "Designing responsive SVG tree visualizers with ARIA keyboard navigation ensures full accessibility for screen-reader users.",
      "Centralized UI5 components can be shared seamlessly between standard Fiori Launchpad and SAP Build Workzone.",
    ],
    filterTags: ["All", "SAPUI5", "SAP Fiori", "Enterprise Applications"],
    tags: ["Workzone", "SAPUI5", "BTP", "SuccessFactors", "WCAG AA", "HR Portal"],
    featured: true,
  },
  {
    id: "clean-core-rap-procurement",
    name: "Clean Core S/4HANA Requisition Architecture",
    subtitle: "Modern transactional business objects replacing 34 legacy custom Z-programs",
    businessDomain: "S/4HANA Clean Core Modernization",
    role: "Full-Stack SAP Developer & RAP Specialist",
    projectType: "ABAP RAP & Fiori Elements Extension",
    description:
      "A complete architectural refactor of mission-critical procurement approval workflows replacing unmaintainable legacy user exits with standard-compliant ABAP Cloud RAP business objects and Fiori Elements.",
    summary:
      "Transitioned complex legacy purchasing logic into modern ABAP Cloud RAP business objects and Fiori Elements, cutting quarterly upgrade testing from 6 weeks to 3 days.",
    context:
      "Tier-1 European automotive component manufacturer undergoing S/4HANA migration with a strict corporate mandate for zero modifications to the core ERP system.",
    clientContext: "European Automotive Systems Manufacturer",
    businessChallenge:
      "Over 15 years of accumulated custom ABAP code (34 Z-reports and 12 user exits) caused continuous upgrade failures, locking the client onto outdated enhancement packs.",
    solution:
      "Re-engineered the procurement lifecycle using the ABAP RESTful Application Programming Model (RAP) on S/4HANA 2022. Built managed RAP business objects with draft orchestration, strict validation routines, and clean Core Data Services (CDS) views.",
    architectureDetails: [
      "ABAP RAP managed scenario with draft capability and Entity Manipulation Language (EML)",
      "Tier-1 released SAP standard APIs for purchase order creation",
      "Fiori Elements Object Page with custom side effects and field control determinations",
      "Automated ABAP Unit test suite with test doubles decoupling database dependencies",
    ],
    sapTechnologies: ["ABAP", "SAP RAP", "CDS Views", "Fiori Elements", "SAP S/4HANA", "Clean Core"],
    technologies: ["ABAP", "SAP RAP", "CDS Views", "Fiori Elements", "SAP S/4HANA", "Clean Core"],
    keyContribution:
      "Architected the RAP behavior definition, coded the validation and determination logic in ABAP Cloud, and built the accompanying Fiori Elements extension application.",
    outcome: [
      "Decommissioned 34 legacy Z-programs and replaced them with standard Clean Core Tier-1 extensions",
      "Accelerated quarterly S/4HANA upgrade regression testing from 6 weeks to 3 days",
      "Achieved 92% automated test coverage using ABAP Unit and mock frameworks",
      "Contributed to application enhancements and established best practices for RAP development",
      "Supported cross-functional teams during cutover with zero downtime for manufacturing lines",
    ],
    resultsAndImpact: [
      "Decommissioned 34 legacy Z-programs and replaced them with standard Clean Core Tier-1 extensions",
      "Accelerated quarterly S/4HANA upgrade regression testing from 6 weeks to 3 days",
      "Achieved 92% automated test coverage using ABAP Unit and mock frameworks",
    ],
    keyLearnings: [
      "Draft handling in RAP prevents locking conflicts during multi-stakeholder purchase reviews.",
      "Decoupling business logic from standard SAP tables ensures compatibility with upcoming S/4HANA cloud editions.",
      "Automated ABAP Unit testing provides the safety net required for rapid continuous integration in enterprise environments.",
    ],
    filterTags: ["All", "RAP", "ABAP", "SAP Fiori", "Enterprise Applications"],
    tags: ["RAP", "ABAP", "Clean Core", "CDS", "S/4HANA", "Procurement"],
    featured: true,
  },
];
