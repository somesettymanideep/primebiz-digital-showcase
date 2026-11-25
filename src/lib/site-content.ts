import {
  Activity,
  BarChart3,
  Blocks,
  Boxes,
  Building2,
  Cable,
  Cloud,
  Cpu,
  Database,
  Factory,
  FlaskConical,
  HardHat,
  HeartPulse,
  Layers,
  Lightbulb,
  Microscope,
  Network,
  Pill,
  Store,
  Stethoscope,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import aboutImage from "@/assets/about-connected-business.webp";
import contactImage from "@/assets/contact-conversation.webp";
import homeImage from "@/assets/home-connected-ecosystem.webp";
import industriesImage from "@/assets/industries-manufacturing.webp";
import manufacturingIndustryImage from "@/assets/industries-manufacturing.webp.asset.json";
import healthcareIndustryImage from "@/assets/industries-healthcare.webp.asset.json";
import pharmaceuticalsIndustryImage from "@/assets/industries-pharmaceuticals.webp.asset.json";
import constructionIndustryImage from "@/assets/industries-construction.webp.asset.json";
import distributionIndustryImage from "@/assets/industries-distribution.webp.asset.json";
import retailIndustryImage from "@/assets/industries-retail.webp.asset.json";
import solutionsImage from "@/assets/solutions-architecture.webp";
import technologyImage from "@/assets/technology-data-center.webp";
import whyImage from "@/assets/why-operations.webp";

export const siteTagline = "Connected Business. Intelligent Operations. Sustainable Growth.";

export const siteContact = {
  email: "Info@primebizpro.in",
  phone: "+91 9989120202",
  phoneRaw: "9989120202",
  whatsappUrl: "https://wa.me/919989120202",
  website: "primebizpro.in",
  websiteUrl: "https://primebizpro.in",
  location: "India",
};

export const siteImages = {
  about: aboutImage,
  contact: contactImage,
  home: homeImage,
  industries: industriesImage,
  solutions: solutionsImage,
  technology: technologyImage,
  why: whyImage,
};

export type SolutionConcept = {
  id: string;
  name: string;
  summary: string;
  description: string;
  fullDescription: string;
  keyFunctionalAreas: string[];
  buttonText: string;
  icon: LucideIcon;
};

export const solutionConcepts: SolutionConcept[] = [
  {
    id: "prime-erp",
    name: "PRIME ERP",
    summary: "Enterprise & Business Management",
    description: "An integrated business management solution to connect essential business functions, streamline workflows, and simplify operations.",
    fullDescription: "PRIME ERP is an integrated business management solution designed to connect essential business functions, streamline workflows, and simplify day-to-day business operations. It helps organizations manage resources, improve operational visibility, and make informed business decisions.",
    keyFunctionalAreas: [
      "Finance & Accounting",
      "Sales & Customer Management",
      "Purchase & Procurement",
      "Inventory & Warehouse Management",
      "HR & Workforce Management",
      "Supply Chain Management",
      "Business Reports & Analytics",
    ],
    buttonText: "Discuss PRIME ERP",
    icon: Blocks,
  },
  {
    id: "prime-construct",
    name: "PRIME CONSTRUCT",
    summary: "Construction & Project Management",
    description: "A digital solution designed for construction companies, contractors, and infrastructure developers to manage projects and site operations.",
    fullDescription: "PRIME CONSTRUCT is a digital solution designed for construction companies, contractors, and infrastructure developers. It helps manage construction projects, coordinate resources, monitor site activities, and maintain better control over project operations.",
    keyFunctionalAreas: [
      "Project Management",
      "Site Operations",
      "Material Management",
      "Procurement Management",
      "Contractor Management",
      "Project Costing",
      "Work Progress Monitoring",
    ],
    buttonText: "Discuss PRIME CONSTRUCT",
    icon: HardHat,
  },
  {
    id: "prime-manufacture",
    name: "PRIME MANUFACTURE",
    summary: "Manufacturing & Industrial Management",
    description: "A technology solution designed to connect production activities, manufacturing processes, inventory, and industrial operations.",
    fullDescription: "PRIME MANUFACTURE is a technology solution designed to connect production activities, manufacturing processes, inventory, and industrial operations. It helps businesses streamline production workflows, manage resources, and improve operational efficiency.",
    keyFunctionalAreas: [
      "Production Planning",
      "Manufacturing Operations",
      "Raw Material Management",
      "Bill of Materials",
      "Quality Management",
      "Maintenance Management",
      "Inventory Control",
    ],
    buttonText: "Discuss PRIME MANUFACTURE",
    icon: Factory,
  },
  {
    id: "prime-health",
    name: "PRIME HEALTH",
    summary: "Healthcare & Hospital Management",
    description: "A digital healthcare management solution designed to support hospitals and healthcare organizations in managing their daily operations.",
    fullDescription: "PRIME HEALTH is a digital healthcare management solution designed to support hospitals and healthcare organizations in managing their daily operations. It helps coordinate patient services, administrative activities, billing, and healthcare workflows.",
    keyFunctionalAreas: [
      "Hospital Administration",
      "Patient Management",
      "Appointment Management",
      "Billing & Accounts",
      "Pharmacy Management",
      "Staff Management",
      "Healthcare Reports",
    ],
    buttonText: "Discuss PRIME HEALTH",
    icon: Stethoscope,
  },
  {
    id: "prime-pharma",
    name: "PRIME PHARMA",
    summary: "Pharmaceutical Management & Distribution",
    description: "A technology solution for pharma companies, distributors, and stockists to manage inventory, batch tracking, and distribution.",
    fullDescription: "PRIME PHARMA is a technology solution designed for pharmaceutical companies, distributors, stockists, and pharma supply-chain businesses. It helps manage pharmaceutical inventory, batch details, expiry tracking, orders, and distribution operations.",
    keyFunctionalAreas: [
      "Pharma Inventory",
      "Batch Management",
      "Expiry Tracking",
      "Purchase & Sales",
      "Order Management",
      "Distribution Management",
      "Supplier Management",
    ],
    buttonText: "Discuss PRIME PHARMA",
    icon: Pill,
  },
  {
    id: "prime-lab",
    name: "PRIME LAB",
    summary: "Laboratory & Diagnostic Management",
    description: "A digital solution for diagnostic centres and laboratories to manage testing workflows, sample tracking, and reporting.",
    fullDescription: "PRIME LAB is a digital solution designed for diagnostic centres and laboratories to manage testing workflows and daily operational activities. It helps organize sample tracking, test management, reporting, and laboratory processes.",
    keyFunctionalAreas: [
      "Laboratory Management",
      "Sample Tracking",
      "Test Management",
      "Report Management",
      "Laboratory Workflow",
      "Inventory Management",
      "Operational Reports",
    ],
    buttonText: "Discuss PRIME LAB",
    icon: FlaskConical,
  },
];

export type Industry = {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const industries: Industry[] = [
  {
    name: "Manufacturing & Industrial",
    description: "A setting for connected planning, production, and business workflows.",
    icon: Factory,
    image: manufacturingIndustryImage.url,
    imageAlt: "A yellow industrial robot working on a bright modern factory floor",
  },
  {
    name: "Healthcare & Hospitals",
    description: "An environment where coordinated operations and information matter.",
    icon: HeartPulse,
    image: healthcareIndustryImage.url,
    imageAlt: "A healthcare professional walking through a modern hospital corridor",
  },
  {
    name: "Pharmaceuticals & Life Sciences",
    description: "A sector with distinct processes across business operations.",
    icon: Pill,
    image: pharmaceuticalsIndustryImage.url,
    imageAlt: "A scientist inspecting stainless equipment in a pharmaceutical cleanroom",
  },
  {
    name: "Construction & Infrastructure",
    description: "A project-led industry with many moving parts to bring together.",
    icon: HardHat,
    image: constructionIndustryImage.url,
    imageAlt: "Tower cranes above an active urban construction project",
  },
  {
    name: "Wholesale & Distribution",
    description: "A business context shaped by orders, inventory, and movement.",
    icon: Boxes,
    image: distributionIndustryImage.url,
    imageAlt: "A forklift moving through a well-organized distribution warehouse",
  },
  {
    name: "Retail & Commerce",
    description: "A connected view across customer-facing and business operations.",
    icon: Store,
    image: retailIndustryImage.url,
    imageAlt: "A shopper browsing a contemporary clothing boutique",
  },
];

export const technologyPillars = [
  { title: "Cloud-Based Applications", detail: "A design direction for accessible, connected business applications.", icon: Cloud },
  { title: "Artificial Intelligence", detail: "An area of exploration for more informed business workflows.", icon: Cpu },
  { title: "Business Process Automation", detail: "A future focus on simplifying repeatable operational steps.", icon: Workflow },
  { title: "Data Analytics", detail: "A considered approach to turning business information into insight.", icon: BarChart3 },
  { title: "Enterprise Integration", detail: "A vision for connecting systems, teams, and information flows.", icon: Cable },
  { title: "Smart Business Applications", detail: "Purpose-led digital tools shaped around business context.", icon: Lightbulb },
];

export const whyPrinciples = [
  { title: "Integrated Business Solutions", description: "A connected ecosystem vision across essential business functions.", icon: Network },
  { title: "Industry-Focused Technology", description: "Concepts shaped around the different contexts in which businesses operate.", icon: Building2 },
  { title: "Intelligent Business Management", description: "A clearer relationship between information, decisions, and everyday work.", icon: Activity },
  { title: "Digital Process Automation", description: "An ambition to make repeatable processes easier to coordinate.", icon: Workflow },
  { title: "Business Intelligence & Analytics", description: "A future-facing focus on useful, connected business insight.", icon: Database },
  { title: "Scalable Technology Ecosystem", description: "A platform vision designed to grow alongside changing business needs.", icon: Layers },
];

export const whyDifferentiators = [
  { title: "Connected Ecosystem", description: "A unified technology vision designed to bring multiple business functions and solutions together.", icon: Network },
  { title: "Industry-Focused Solutions", description: "Technology designed around the practical requirements of different industries.", icon: Building2 },
  { title: "Business-Driven Innovation", description: "Solutions focused on real business challenges and operational requirements.", icon: Lightbulb },
  { title: "Intelligent Operations", description: "Supporting better workflows, business visibility, and informed decision-making.", icon: Workflow },
  { title: "Flexible & Scalable", description: "A technology ecosystem envisioned to grow and evolve with changing business needs.", icon: Layers },
  { title: "Future-Ready Approach", description: "Embracing digital transformation, automation, analytics, and emerging technologies.", icon: Cpu },
];

export type PageMetadata = { title: string; description: string; path: string };

export function buildPageHead({ title, description, path }: PageMetadata) {
  const fullTitle = `${title} | PRIMEBIZPRO`;
  const canonicalUrl = new URL(path, "https://primebiz-digital-showcase.lovable.app").href;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}