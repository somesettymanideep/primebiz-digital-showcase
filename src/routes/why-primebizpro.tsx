import { createFileRoute } from "@tanstack/react-router";

import { CallToAction, PageHero, Reveal, SectionHeading, WhyDifferentiatorGrid } from "@/components/site/site-sections";
import { buildPageHead, siteImages } from "@/lib/site-content";

export const Route = createFileRoute("/why-primebizpro")({
  component: WhyPage,
  head: () => buildPageHead({
    title: "Why PRIMEBIZPRO",
    description: "Discover PRIMEBIZPRO's business-driven vision for connected, industry-focused technology and intelligent operations.",
    path: "/why-primebizpro",
  }),
});

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="WHY PRIMEBIZPRO"
        title={<>A Smarter Approach<br /><span className="accent-text">to Business Technology.</span></>}
        description="Bringing business understanding, intelligent technology and connected solutions together to support sustainable growth."
        image={siteImages.why}
        imageAlt="Two business professionals in conversation across a glass workspace"
      />

      <section className="section-band why-page-band">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="SIX CORE DIFFERENTIATORS"
              title={<>Designed around <span className="accent-text">business possibility.</span></>}
              description="A business-first technology vision grounded in the needs of different industries and operations."
            />
          </Reveal>
          <WhyDifferentiatorGrid />
        </div>
      </section>

      <section className="why-philosophy-band" aria-labelledby="why-philosophy-heading">
        <div className="site-container">
          <Reveal className="why-philosophy-content">
            <p className="eyebrow">OUR PHILOSOPHY</p>
            <h2 id="why-philosophy-heading" className="why-philosophy-statement">
              <span className="why-philosophy-word"><span className="why-philosophy-count" aria-hidden="true">01</span><span>SIMPLIFY<span className="accent-text">.</span></span></span>
              <span className="why-philosophy-word"><span className="why-philosophy-count" aria-hidden="true">02</span><span>CONNECT<span className="accent-text">.</span></span></span>
              <span className="why-philosophy-word"><span className="why-philosophy-count" aria-hidden="true">03</span><span>EMPOWER<span className="accent-text">.</span></span></span>
              <span className="why-philosophy-word"><span className="why-philosophy-count" aria-hidden="true">04</span><span>EVOLVE<span className="accent-text">.</span></span></span>
            </h2>
            <div className="why-philosophy-rule" aria-hidden="true" />
            <p className="why-philosophy-caption">A considered direction for business technology.</p>
          </Reveal>
        </div>
      </section>

      <CallToAction
        eyebrow="YOUR NEXT STEP"
        title={<>Ready to Explore<br /><span className="accent-text">Smarter Business Possibilities?</span></>}
        description="Start a conversation about the possibilities ahead."
        showContactButton={false}
      />
    </>
  );
}