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