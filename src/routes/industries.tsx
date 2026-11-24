import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, Factory, Stethoscope } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CallToAction, IndustryGrid, PageHero, Reveal, SectionHeading } from "@/components/site/site-sections";
import { buildPageHead, siteImages } from "@/lib/site-content";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => buildPageHead({
    title: "Industries",
    description: "See the industries considered in the PRIMEBIZPRO business technology vision, from manufacturing and healthcare to logistics and professional services.",
    path: "/industries",
  }),
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title={<>Different industries.<br /><span className="accent-text">Connected possibilities.</span></>}
        description="A broad technology vision that considers the varied operating contexts of modern businesses and institutions."
        image={siteImages.industries}
        imageAlt="A precision manufacturing floor with industrial equipment"
      />

      <section className="section-band industries-page-band">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="INDUSTRY CONTEXTS"
              title={<>One technology vision.<br /><span className="accent-text">Many ways to work.</span></>}
              description="These sectors represent areas of interest for the PRIMEBIZPRO platform vision."
            />
          </Reveal>
          <IndustryGrid />
        </div>
      </section>

      <section className="section-band industry-perspective-band">
        <div className="site-container industry-perspective-layout">
          <Reveal>
            <p className="eyebrow">DESIGNED AROUND CONTEXT</p>
            <h2>Technology should make room for <span className="accent-text">what makes each industry different.</span></h2>
          </Reveal>
          <Reveal className="industry-perspective-list">
            <p><Factory aria-hidden="true" /> Different workflows and responsibilities.</p>
            <p><Stethoscope aria-hidden="true" /> Distinct operating environments.</p>
            <p><Building2 aria-hidden="true" /> Shared need for clearer connections.</p>
            <Button asChild variant="outline" className="button-outline"><Link to="/contact">Talk about your industry <ArrowRight aria-hidden="true" /></Link></Button>
          </Reveal>
        </div>
      </section>

      <CallToAction
        eyebrow="YOUR INDUSTRY, YOUR CONTEXT"
        title={<>Let’s explore what connected<br /><span className="accent-text">business technology could mean.</span></>}
        description="Tell us about your organisation and the possibilities you are considering."
      />
    </>
  );
}