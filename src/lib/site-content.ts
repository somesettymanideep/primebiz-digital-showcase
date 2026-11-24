import {
  Activity,
  BarChart3,
  Blocks,
  Briefcase,
  Building2,
  Cable,
  Cloud,
  Cpu,
  Database,
  Factory,
  FlaskConical,
  GraduationCap,
  HardHat,
  HeartPulse,
  Layers,
  Lightbulb,
  Microscope,
  Network,
  Pill,
  Store,
  Stethoscope,
  Truck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import aboutImage from "@/assets/about-connected-business.webp";
import contactImage from "@/assets/contact-conversation.webp";
import homeImage from "@/assets/home-connected-ecosystem.webp";
import industriesImage from "@/assets/industries-manufacturing.webp";
import solutionsImage from "@/assets/solutions-architecture.webp";
import technologyImage from "@/assets/technology-data-center.webp";
import whyImage from "@/assets/why-operations.webp";

export const siteTagline = "Connected Business. Intelligent Operations. Sustainable Growth.";

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
  icon: LucideIcon;
};

export const solutionConcepts: SolutionConcept[] = [
  {
    id: "prime-erp",
    name: "PRIME ERP",
    summary: "Enterprise & Business Management.",
    description: "An envisioned approach to bringing core business processes and information into one connected view.",
    icon: Blocks,
  },
  {
    id: "prime-construct",
    name: "PRIME CONSTRUCT",
    summary: "Construction & Project Management.",
    description: "A planned concept for connecting construction projects, teams, and operational workflows.",
    icon: HardHat,
  },
  {
    id: "prime-manufacture",
    name: "PRIME MANUFACTURE",
    summary: "Manufacturing & Industrial Management.",
    description: "A future-facing concept for aligning manufacturing activity and business information.",
    icon: Factory,
  },
  {
    id: "prime-health",
    name: "PRIME HEALTH",
    summary: "Healthcare & Hospital Management.",
    description: "An envisioned digital foundation for more connected healthcare operations.",
    icon: Stethoscope,
  },
  {
    id: "prime-pharma",
    name: "PRIME PHARMA",
    summary: "Pharmaceutical Management.",
    description: "A planned technology concept for connected pharmaceutical business processes.",
    icon: Pill,
  },
  {
    id: "prime-lab",
    name: "PRIME LAB",
    summary: "Laboratory & Diagnostic Management.",
    description: "An envisioned concept for coordinating laboratory and diagnostic operations.",
    icon: FlaskConical,
  },
];

export type Industry = { name: string; description: string; icon: LucideIcon };

export const industries: Industry[] = [
  { name: "Manufacturing", description: "A setting for connected planning, production, and business workflows.", icon: Factory },
  { name: "Healthcare", description: "An environment where coordinated operations and information matter.", icon: HeartPulse },
  { name: "Pharmaceuticals", description: "A sector with distinct processes across business operations.", icon: Pill },
  { name: "Construction", description: "A project-led industry with many moving parts to bring together.", icon: HardHat },
  { name: "Distribution", description: "A business context shaped by orders, inventory, and movement.", icon: Building2 },
  { name: "Retail", description: "A connected view across customer-facing and business operations.", icon: Store },
  { name: "Logistics", description: "A dynamic setting for linked information and operational workflows.", icon: Truck },
  { name: "Education", description: "A service environment with people, processes, and information.", icon: GraduationCap },
  { name: "Professional Services", description: "A people-led sector coordinating projects and business activity.", icon: Briefcase },
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

export type PageMetadata = { title: string; description: string; path: string };

export function buildPageHead({ title, description, path }: PageMetadata) {
  const fullTitle = `${title} | PRIMEBIZPRO`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
  };
}