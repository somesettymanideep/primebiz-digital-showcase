import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Network, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CallToAction, PageHero, Reveal, SectionHeading } from "@/components/site/site-sections";
import { buildPageHead, siteImages, siteTagline } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => buildPageHead({
    title: "About PRIMEBIZPRO",
    description: "Learn about PRIMEBIZPRO's connected-business vision and its focus on intelligent operations and sustainable growth.",
    path: "/about",
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT PRIMEBIZPRO"
        title={<>Business technology,<br /><span className="accent-text">connected by design.</span></>}
        description="PRIMEBIZPRO is a business technology platform vision centered on bringing operations, information, and people into closer connection."
        image={siteImages.about}
        imageAlt="A collaborative business workspace viewed from above"
      >
        <p className="hero-tagline">{siteTagline}</p>
      </PageHero>

      <section className="section-band about-intent-band">
        <div className="site-container about-intent-layout">
          <Reveal className="about-intent-copy">
            <p className="eyebrow">OUR DIRECTION</p>
            <h2>Business technology should feel <span className="accent-text">connected.</span></h2>
          </Reveal>
          <Reveal className="about-intent-body">
            <p>Businesses bring together people, processes, information, and specialist tools every day. PRIMEBIZPRO is being shaped around the possibility of making those connections clearer through an integrated business technology ecosystem.</p>
            <p>This is a forward-looking platform vision. The PRIME solution names represent planned concepts rather than currently operational software products.</p>
            <Button asChild variant="outline" className="button-outline">
              <a href="#our-approach">Explore our approach <ArrowRight aria-hidden="true" /></a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="our-approach" className="section-band approach-band">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="OUR APPROACH"
              title={<>A technology vision with <span className="accent-text">business at its center.</span></>}
              description="The PRIMEBIZPRO direction is guided by three simple ideas."
            />
          </Reveal>
          <div className="approach-grid">
            <Reveal><article className="approach-item"><span className="approach-index">01 / CONNECTION</span><Network aria-hidden="true" /><h3>Bring the picture together</h3><p>Envisioning a more joined-up relationship between business information, workflows, and teams.</p></article></Reveal>
            <Reveal><article className="approach-item"><span className="approach-index">02 / CONTEXT</span><Compass aria-hidden="true" /><h3>Start with the work</h3><p>Considering the different environments, responsibilities, and processes that shape each industry.</p></article></Reveal>
            <Reveal><article className="approach-item"><span className="approach-index">03 / POSSIBILITY</span><Sparkles aria-hidden="true" /><h3>Keep looking forward</h3><p>Exploring how thoughtful technology could support clearer, more sustainable business growth.</p></article></Reveal>
          </div>
        </div>
      </section>

      <CallToAction
        eyebrow="THE PRIMEBIZPRO VISION"
        title={<>Connected business.<br /><span className="accent-text">Intelligent operations.</span></>}
        description="Start a conversation about the business possibilities you are exploring."
      />
    </>
  );
}