import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Database, Network, Users, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CallToAction,
  IndustryGrid,
  Reveal,
  SectionHeading,
  SolutionGrid,
  TechnologyGrid,
  WhyGrid,
} from "@/components/site/site-sections";
import { buildPageHead, siteImages } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => buildPageHead({
    title: "Connected Business Technology",
    description: "Explore PRIMEBIZPRO's vision for connected business operations, industry-focused technology, and sustainable growth.",
    path: "/",
  }),
});

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <img className="home-hero-image" src={siteImages.home} alt="" loading="eager" fetchPriority="high" />
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="site-container home-hero-content">
          <p className="eyebrow">CONNECTED BUSINESS TECHNOLOGY</p>
          <h1>Every Operation.<br /><span className="accent-text">One Intelligent Platform.</span></h1>
          <p className="hero-lede">Connecting Businesses Through Intelligent Technology.</p>
          <p className="hero-description">PRIMEBIZPRO is envisioned as an integrated business technology ecosystem designed to simplify operations, connect processes, and support sustainable business growth.</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="button-primary">
              <Link to="/solutions">Explore Solutions <ArrowRight aria-hidden="true" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="button-outline">
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
          <a className="hero-scroll-cue" href="#introduction"><ArrowDown aria-hidden="true" /><span>Scroll to explore</span></a>
        </div>
        <span className="hero-index" aria-hidden="true">PRIMEBIZPRO / BUSINESS TECHNOLOGY</span>
      </section>

      <section id="introduction" className="section-band introduction-band">
        <div className="site-container introduction-layout">
          <Reveal className="introduction-copy">
            <p className="eyebrow">A CONNECTED BUSINESS VISION</p>
            <h2>One Connected Ecosystem.<br /><span className="accent-text">Endless Business Possibilities.</span></h2>
            <p>PRIMEBIZPRO brings a connected-business vision into focus: digital tools that align workflows, information, and people in one considered ecosystem.</p>
            <Button asChild variant="outline" className="button-outline">
              <Link to="/about">Discover PRIMEBIZPRO <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
          <Reveal className="ecosystem-visual">
            <div className="ecosystem-orbit" aria-label="People, processes, information, and technology connected in one vision">
              <div className="ecosystem-ring ecosystem-ring-outer" />
              <div className="ecosystem-ring ecosystem-ring-inner" />
              <div className="ecosystem-core"><span>PRIME</span><strong>BIZPRO</strong></div>
              <div className="ecosystem-node ecosystem-node-people"><Users aria-hidden="true" /><span>PEOPLE</span></div>
              <div className="ecosystem-node ecosystem-node-process"><Workflow aria-hidden="true" /><span>PROCESSES</span></div>
              <div className="ecosystem-node ecosystem-node-data"><Database aria-hidden="true" /><span>INFORMATION</span></div>
              <div className="ecosystem-node ecosystem-node-systems"><Network aria-hidden="true" /><span>TECHNOLOGY</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-band solutions-band">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="OUR SOLUTIONS"
              title={<>Intelligent Solutions for <span className="accent-text">Every Business Function.</span></>}
              description="Six planned solution concepts, envisioned to bring greater connection to different business contexts."
            />
          </Reveal>
          <SolutionGrid compact />
          <p className="concept-note">PRIME ERP, PRIME CONSTRUCT, PRIME MANUFACTURE, PRIME HEALTH, PRIME PHARMA, and PRIME LAB are planned concepts.</p>
        </div>
      </section>

      <section className="section-band home-why-band">
        <div className="site-container">
          <Reveal className="home-why-heading">
            <SectionHeading
              eyebrow="WHY PRIMEBIZPRO"
              title={<>Technology That Moves <span className="accent-text">Business Forward.</span></>}
              description="An integrated technology vision shaped around the way businesses work, connect, and grow."
            />
          </Reveal>
          <WhyGrid />
          <div className="section-end-link"><Link to="/why-primebizpro">Explore the PRIMEBIZPRO vision <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="section-band industries-band">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="INDUSTRIES"
              title={<>One Technology Vision.<br /><span className="accent-text">Multiple Industries.</span></>}
              description="A broad business-technology vision with industry contexts in mind."
            />
          </Reveal>
          <div className="industry-feature">
            <Reveal className="industry-feature-image">
              <img src={siteImages.industries} alt="A modern manufacturing environment with precision equipment" loading="lazy" />
              <span className="image-caption">INDUSTRY IN CONTEXT / 01</span>
            </Reveal>
            <div className="industry-feature-content">
              <IndustryGrid compact />
              <div className="section-end-link"><Link to="/industries">View all industries <ArrowRight aria-hidden="true" /></Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band technology-band">
        <div className="site-container technology-home-layout">
          <Reveal className="technology-home-visual">
            <img src={siteImages.technology} alt="A data center aisle suggesting connected digital infrastructure" loading="lazy" />
            <div className="technology-image-label"><span>TECHNOLOGY / INNOVATION</span><span>PRIMEBIZPRO</span></div>
          </Reveal>
          <div className="technology-home-content">
            <Reveal>
              <SectionHeading
                eyebrow="TECHNOLOGY & INNOVATION"
                title={<>Building the Future of <span className="accent-text">Business Technology.</span></>}
                description="A future-facing technology vision built around connected systems, useful insight, and thoughtful automation."
              />
            </Reveal>
            <TechnologyGrid />
            <div className="section-end-link"><Link to="/technology-innovation">Explore our technology vision <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="YOUR NEXT CONVERSATION"
        title={<>Simplify Your Business.<br />Connect Your Operations.<br /><span className="accent-text">Explore What’s Possible.</span></>}
        description="Discover how an integrated technology ecosystem could support your business transformation journey."
      />
    </>
  );
}
