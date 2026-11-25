import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, ChevronDown, Menu, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import primebizLogo from "@/assets/primebizpro-logo.png.asset.json";
import { siteTagline, solutionConcepts } from "@/lib/site-content";

const footerNavigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Technology & Innovation", to: "/technology-innovation" },
  { label: "Why PRIMEBIZPRO", to: "/why-primebizpro" },
  { label: "Contact Us", to: "/contact" },
] as const;

function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <Link to="/" className={`brand-lockup${footer ? " is-footer" : ""}`} aria-label="PRIMEBIZPRO home">
      <img src={primebizLogo.url} alt="" width="210" height="70" />
    </Link>
  );
}

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!solutionsOpen) return;
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !dropdownRef.current?.contains(event.target)) {
        setSolutionsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSolutionsOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [solutionsOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="site-container header-inner">
        <BrandMark />
        <nav className="desktop-navigation" aria-label="Main navigation">
          <Link to="/" activeOptions={{ exact: true }} className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <div className="solutions-navigation" ref={dropdownRef}>
            <Button
              type="button"
              variant="ghost"
              className="nav-link solutions-trigger"
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
              aria-controls="solutions-mega-menu"
              onClick={() => setSolutionsOpen((open) => !open)}
            >
              Solutions <ChevronDown aria-hidden="true" className={solutionsOpen ? "chevron-up" : ""} />
            </Button>
            {solutionsOpen ? (
              <div className="mega-menu" id="solutions-mega-menu">
                <div className="mega-menu-heading">
                  <div><p className="eyebrow">THE PRIME ECOSYSTEM</p><p>Six planned solution concepts.</p></div>
                  <Link to="/solutions" onClick={() => setSolutionsOpen(false)} className="mega-overview-link">View all <ArrowRight aria-hidden="true" /></Link>
                </div>
                <div className="mega-menu-grid">
                  {solutionConcepts.map((solution) => {
                    const Icon = solution.icon;
                    return (
                      <Link key={solution.id} to="/solutions" hash={solution.id} className="mega-menu-item" onClick={() => setSolutionsOpen(false)}>
                        <Icon aria-hidden="true" />
                        <span><strong>{solution.name}</strong><small>{solution.summary}</small></span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
          <Link to="/industries" className="nav-link">Industries</Link>
          <Link to="/technology-innovation" className="nav-link">Technology</Link>
          <Link to="/why-primebizpro" className="nav-link">Why PRIMEBIZPRO</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        <div className="header-actions">
          <Button asChild size="lg" className="button-primary header-demo-button">
            <Link to="/contact">Request a Demo <ArrowRight aria-hidden="true" /></Link>
          </Button>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button type="button" variant="outline" className="mobile-menu-trigger" aria-label="Open navigation">
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="mobile-navigation-sheet">
              <SheetHeader className="mobile-sheet-header">
                <SheetTitle><BrandMark /></SheetTitle>
                <SheetDescription>Navigate PRIMEBIZPRO</SheetDescription>
              </SheetHeader>
              <nav className="mobile-navigation" aria-label="Mobile navigation">
                {footerNavigation.map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeMobile}>{item.label}</Link>
                ))}
                <div className="mobile-solution-links">
                  <p className="eyebrow">SOLUTION CONCEPTS</p>
                  {solutionConcepts.map((solution) => (
                    <Link key={solution.id} to="/solutions" hash={solution.id} onClick={closeMobile}>{solution.name}</Link>
                  ))}
                </div>
              </nav>
              <Button asChild size="lg" className="button-primary mobile-demo-button">
                <Link to="/contact" onClick={closeMobile}>Request a Demo <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <BrandMark footer />
            <p className="footer-tagline">{siteTagline}</p>
            <p className="footer-description">Technology designed to connect, simplify and empower businesses for the future.</p>
            <Button asChild variant="outline" className="footer-contact-button">
              <Link to="/contact">Start a conversation <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
          <div className="footer-link-column">
            <h2>Quick Links</h2>
            <ul>{footerNavigation.map((item) => <li key={item.to}><Link to={item.to}>{item.label}</Link></li>)}</ul>
          </div>
          <div className="footer-link-column">
            <h2>Our Solutions</h2>
            <ul>{solutionConcepts.map((solution) => <li key={solution.id}><Link to="/solutions" hash={solution.id}>{solution.name}</Link></li>)}</ul>
          </div>
          <div className="footer-contact-column">
            <h2>Contact</h2>
            <p>For business enquiries</p>
            <Link to="/contact" className="footer-contact-link">Use the enquiry form <ArrowRight aria-hidden="true" /></Link>
            <div className="contact-placeholders">
              <span>Email address</span><strong>To be confirmed</strong>
              <span>Phone number</span><strong>To be confirmed</strong>
              <span>Business location</span><strong>To be confirmed</strong>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2026 PRIMEBIZPRO. All Rights Reserved.</p>
          <p className="social-placeholder">Social channels <span>To be confirmed</span></p>
        </div>
      </div>
    </footer>
  );
}

function FloatingControls() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      progressRef.current?.style.setProperty("--scroll-progress", String(progress));
      setShowTop(window.scrollY > 420);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function returnToTop() {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  }

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <Button asChild variant="outline" className="floating-contact">
        <Link to="/contact" aria-label="Start an enquiry">
          <MessageCircle aria-hidden="true" /><span>Start an enquiry</span>
        </Link>
      </Button>
      {showTop ? (
        <Button type="button" variant="outline" className="back-to-top" aria-label="Back to top" title="Back to top" onClick={returnToTop}>
          <ArrowUp aria-hidden="true" />
        </Button>
      ) : null}
    </>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content" className="site-main">{children}</main>
      <SiteFooter />
      <FloatingControls />
    </>
  );
}