import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, CircuitBoard, GitBranch } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CallToAction, PageHero, Reveal, SectionHeading, TechnologyGrid } from "@/components/site/site-sections";
import { buildPageHead, siteImages } from "@/lib/site-content";

export const Route = createFileRoute("/technology-innovation")({
  component: TechnologyPage,
  head: () => buildPageHead({
    title: "Technology & Innovation",
    description: "Discover the technology directions PRIMEBIZPRO is exploring, including cloud applications, AI, process automation, analytics, and integration.",
    path: "/technology-innovation",
  }),
});

function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="TECHNOLOGY & INNOVATION"
        title={<>Building the future of<br /><span className="accent-text">business technology.</span></>}
        description="A forward-looking exploration of connected systems, practical intelligence, and technology shaped around business needs."
        image={siteImages.technology}
        imageAlt="A modern data center aisle representing connected digital infrastructure"
      />

      <section className="section-band technology-page-band">
        <div className="site-container technology-page-layout">
          <Reveal className="technology-page-intro">
            <p className="eyebrow">A THOUGHTFUL TECHNOLOGY DIRECTION</p>
            <h2>Innovation with a <span className="accent-text">business purpose.</span></h2>
            <p>Technology is most useful when it helps people understand their work, connect information, and make better-informed decisions. These are directions being explored within the PRIMEBIZPRO vision.</p>
            <div className="technology-principles">
              <p><Brain aria-hidden="true" /><span>Intelligence with context</span></p>
              <p><GitBranch aria-hidden="true" /><span>Workflows that connect</span></p>
              <p><CircuitBoard aria-hidden="true" /><span>Systems designed to work together</span></p>
            </div>
            <Button asChild variant="outline" className="button-outline"><Link to="/contact">Discuss the technology vision <ArrowRight aria-hidden="true" /></Link></Button>
          </Reveal>
          <div className="technology-page-pillars">
            <Reveal><SectionHeading eyebrow="AREAS OF EXPLORATION" title={<>A connected <span className="accent-text">technology foundation.</span></>} /></Reveal>
            <TechnologyGrid />
            <p className="concept-note">These describe areas of focus in the platform vision, not claims about currently available product features.</p>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="INNOVATION, WITH INTENT"
        title={<>Explore the next possibilities<br /><span className="accent-text">for your business.</span></>}
        description="Share a technology challenge or idea you would like to explore."
      />
    </>
  );
}