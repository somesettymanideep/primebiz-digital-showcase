import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { WhatsAppIcon } from "@/components/site/site-shell";
import {
  industries,
  siteContact,
  siteImages,
  solutionConcepts,
  technologyPillars,
  whyDifferentiators,
  whyPrinciples,
  type PageMetadata,
  type SolutionConcept,
} from "@/lib/site-content";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading${align === "center" ? " is-centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <img className="page-hero-image" src={image} alt={imageAlt} loading="eager" fetchPriority="high" />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="site-container page-hero-inner">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-description">{description}</p>
          {children}
        </div>
        <span className="hero-index" aria-hidden="true">PRIMEBIZPRO / BUSINESS TECHNOLOGY</span>
      </div>
    </section>
  );
}

export function SolutionGrid({ compact = false }: { compact?: boolean }) {
  const [selectedSolution, setSelectedSolution] = useState<SolutionConcept | null>(null);

  return (
    <>
      <div className={`solution-grid${compact ? " is-compact" : ""}`}>
        {solutionConcepts.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <Reveal key={solution.id} className="solution-reveal">
              <div
                id={compact ? undefined : solution.id}
                className="solution-card"
                onClick={() => setSelectedSolution(solution)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedSolution(solution);
                  }
                }}
                aria-haspopup="dialog"
                aria-label={`Explore ${solution.name}`}
              >
                <div className="solution-card-top">
                  <span className="solution-card-icon"><Icon aria-hidden="true" strokeWidth={1.7} /></span>
                  <span className="card-number">0{index + 1}</span>
                </div>
                <h3>{solution.name}</h3>
                <p className="solution-summary">{solution.summary}</p>
                <p className="solution-detail">{solution.description}</p>
                <button
                  type="button"
                  className="text-link solution-explore-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSolution(solution);
                  }}
                  aria-label={`Explore ${solution.name} details`}
                >
                  Explore solution <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Dialog open={Boolean(selectedSolution)} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        <DialogContent className="solution-modal-content">
          {selectedSolution ? (
            <div className="solution-modal-body">
              <div className="solution-modal-header">
                <div className="solution-modal-brand">
                  <span className="solution-card-icon modal-icon">
                    <selectedSolution.icon aria-hidden="true" strokeWidth={1.8} />
                  </span>
                  <div>
                    <DialogTitle className="solution-modal-title">{selectedSolution.name}</DialogTitle>
                    <p className="solution-modal-subtitle">{selectedSolution.summary.replace(/\.$/, "")}</p>
                  </div>
                </div>
              </div>

              <div className="solution-modal-section">
                <h4 className="solution-modal-section-title">Description</h4>
                <p className="solution-modal-description">{selectedSolution.fullDescription}</p>
              </div>

              <div className="solution-modal-section">
                <h4 className="solution-modal-section-title">Key Functional Areas</h4>
                <ul className="solution-modal-features">
                  {selectedSolution.keyFunctionalAreas.map((area) => (
                    <li key={area}>
                      <span className="feature-check"><Check aria-hidden="true" /></span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="solution-modal-footer">
                <Button asChild size="lg" className="button-primary solution-discuss-btn">
                  <a
                    href={`/contact?solution=${encodeURIComponent(selectedSolution.name)}`}
                    onClick={() => setSelectedSolution(null)}
                  >
                    <span>{selectedSolution.buttonText}</span>
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="solution-whatsapp-btn">
                  <a
                    href={`${siteContact.whatsappUrl}?text=${encodeURIComponent(`Hello PRIMEBIZPRO, I would like to discuss ${selectedSolution.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon aria-hidden="true" />
                    <span>WhatsApp Us</span>
                  </a>
                </Button>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export function IndustryGrid() {
  return (
    <div className="industry-grid">
      {industries.map((industry) => {
        const Icon = industry.icon;
        return (
          <Reveal key={industry.name}>
            <article className="industry-card">
              <img src={industry.image} alt={industry.imageAlt} loading="lazy" decoding="async" />
              <div className="industry-card-content">
                <Icon className="industry-card-icon" aria-hidden="true" strokeWidth={1.7} />
                <h3>{industry.name}</h3>
                <ArrowUpRight className="industry-card-arrow" aria-hidden="true" />
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function WhyGrid() {
  return (
    <div className="why-grid">
      {whyPrinciples.map((principle, index) => {
        const Icon = principle.icon;
        return (
          <Reveal key={principle.title} className={`why-reveal why-reveal-${index + 1}`}>
            <article className="why-card">
              <span className="why-icon"><Icon aria-hidden="true" strokeWidth={1.6} /></span>
              <span className="card-number">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function WhyDifferentiatorGrid() {
  return (
    <div className="why-differentiator-grid">
      {whyDifferentiators.map((principle, index) => {
        const Icon = principle.icon;
        return (
          <Reveal key={principle.title} className="why-differentiator-reveal">
            <article className="why-differentiator">
              <div className="why-differentiator-top">
                <span className="why-differentiator-icon"><Icon aria-hidden="true" strokeWidth={1.6} /></span>
                <span className="why-differentiator-number">0{index + 1}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function TechnologyGrid() {
  return (
    <div className="technology-grid">
      {technologyPillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <Reveal key={pillar.title} className="technology-reveal">
            <article className="technology-row">
              <span className="technology-index">0{index + 1}</span>
              <Icon className="technology-icon" aria-hidden="true" strokeWidth={1.6} />
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.detail}</p>
              </div>
              <ChevronRight className="technology-chevron" aria-hidden="true" />
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function CallToAction({
  eyebrow,
  title,
  description,
  showContactButton = true,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  showContactButton?: boolean;
}) {
  return (
    <section className="cta-band">
      <div className="site-container cta-inner">
        <Reveal className="cta-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </Reveal>
        <div className="cta-actions">
          <Button asChild size="lg" className="button-primary">
            <Link to="/contact">Request a Demo <ArrowRight aria-hidden="true" /></Link>
          </Button>
          {showContactButton ? (
            <Button asChild variant="outline" size="lg" className="button-outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          ) : null}
        </div>
      </div>
      <div className="cta-line" aria-hidden="true" />
    </section>
  );
}

export function FeatureImage({
  image,
  alt,
  label,
  className = "",
}: {
  image: string;
  alt: string;
  label: string;
  className?: string;
}) {
  return (
    <figure className={`feature-image${className ? ` ${className}` : ""}`}>
      <img src={image} alt={alt} loading="lazy" />
      <figcaption><span className="feature-image-dot" />{label}</figcaption>
    </figure>
  );
}

export function ImageSplit({
  image,
  imageAlt,
  eyebrow,
  title,
  children,
  reverse = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={`image-split${reverse ? " is-reversed" : ""}`}>
      <Reveal className="image-split-visual">
        <FeatureImage image={image} alt={imageAlt} label="A connected business vision" />
      </Reveal>
      <Reveal className="image-split-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <div className="image-split-body">{children}</div>
      </Reveal>
    </div>
  );
}

export function SiteBreadcrumb({ items }: { items: PageMetadata[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item) => (
        <span key={item.path} aria-current="page">{item.title}</span>
      ))}
    </nav>
  );
}

export { siteImages };