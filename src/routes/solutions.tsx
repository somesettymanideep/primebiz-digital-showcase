import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Network } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CallToAction, PageHero, Reveal, SectionHeading, SolutionGrid } from "@/components/site/site-sections";
import { buildPageHead, siteImages } from "@/lib/site-content";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => buildPageHead({
    title: "Our Solutions",
    description: "Explore the six planned PRIMEBIZPRO solution concepts across business management, construction, manufacturing, healthcare, pharmaceuticals, and laboratories.",
    path: "/solutions",
  }),
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SOLUTIONS"
        title={<>One connected vision.<br /><span className="accent-text">Six solution concepts.</span></>}
        description="A family of planned technology concepts, envisioned for different business functions and industry contexts."
        image={siteImages.solutions}
        imageAlt="An abstract architecture diagram linking six business technology workstreams"
      />

      <section className="section-band solutions-page-band">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="THE PRIME ECOSYSTEM"
              title={<>Purpose-led concepts for <span className="accent-text">connected operations.</span></>}
              description="Each PRIME name represents a planned concept within the broader PRIMEBIZPRO business technology vision."
            />
          </Reveal>
          <SolutionGrid />
          <p className="concept-note concept-note-prominent">These are planned concepts, not currently operational software products.</p>
        </div>
      </section>

      <section className="section-band connected-vision-band">
        <div className="site-container connected-vision-layout">
          <Reveal className="connected-vision-mark"><Network aria-hidden="true" /><span>ONE PLATFORM VISION</span></Reveal>
          <Reveal className="connected-vision-copy">
            <p className="eyebrow">CONNECTED BY DESIGN</p>
            <h2>Different business contexts.<br /><span className="accent-text">One connected ambition.</span></h2>
            <p>The concepts are envisioned as part of a broader technology ecosystem, with connection across business information and workflows as a guiding idea.</p>
            <Button asChild variant="outline" className="button-outline">
              <Link to="/contact">Discuss a solution concept <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CallToAction
        eyebrow="EXPLORE THE POSSIBILITIES"
        title={<>Let’s discuss the business<br /><span className="accent-text">you’re building.</span></>}
        description="Share your goals, requirements, or ideas with the PRIMEBIZPRO team."
      />
    </>
  );
}