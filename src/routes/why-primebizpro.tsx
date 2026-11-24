import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Network, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CallToAction, PageHero, Reveal, SectionHeading, WhyGrid } from "@/components/site/site-sections";
import { buildPageHead, siteImages } from "@/lib/site-content";

export const Route = createFileRoute("/why-primebizpro")({
  component: WhyPage,
  head: () => buildPageHead({
    title: "Why PRIMEBIZPRO",
    description: "Explore the principles behind PRIMEBIZPRO's planned business technology ecosystem and its focus on connected operations.",
    path: "/why-primebizpro",
  }),
});

function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="WHY PRIMEBIZPRO"
        title={<>Technology that moves<br /><span className="accent-text">business forward.</span></>}
        description="A considered platform vision for bringing business functions, industry context, and technology closer together."
        image={siteImages.why}
        imageAlt="Two business professionals in conversation across a glass workspace"
      />

      <section className="section-band why-page-band">
        <div className="site-container">
          <Reveal>
            <SectionHeading
              eyebrow="THE PRIMEBIZPRO VISION"
              title={<>A connected ambition, <span className="accent-text">built around business.</span></>}
              description="Six guiding principles shape the direction of the PRIMEBIZPRO platform concept."
            />
          </Reveal>
          <WhyGrid />
        </div>
      </section>

      <section className="section-band why-perspective-band">
        <div className="site-container why-perspective-layout">
          <Reveal className="why-perspective-heading">
            <p className="eyebrow">A PLATFORM-LED APPROACH</p>
            <h2>Start with the whole picture.<br /><span className="accent-text">Keep the business in view.</span></h2>
          </Reveal>
          <div className="why-perspective-points">
            <Reveal><div><Network aria-hidden="true" /><h3>Connection</h3><p>Consider how teams, workflows, and information can work together.</p></div></Reveal>
            <Reveal><div><Compass aria-hidden="true" /><h3>Context</h3><p>Keep business requirements and industry realities in the conversation.</p></div></Reveal>
            <Reveal><div><ShieldCheck aria-hidden="true" /><h3>Clarity</h3><p>Describe the platform vision honestly, with planned concepts clearly identified.</p></div></Reveal>
          </div>
          <Button asChild variant="outline" className="button-outline"><Link to="/about">Learn about PRIMEBIZPRO <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>

      <CallToAction
        eyebrow="A CONVERSATION ABOUT YOUR BUSINESS"
        title={<>Let’s move the conversation<br /><span className="accent-text">forward together.</span></>}
        description="Tell us about your goals and the opportunities you see ahead."
      />
    </>
  );
}