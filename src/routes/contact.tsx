import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Globe2, Mail, MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/site/enquiry-form";
import { CallToAction, PageHero, Reveal, SectionHeading } from "@/components/site/site-sections";
import { WhatsAppIcon } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { buildPageHead, siteContact, siteImages } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => buildPageHead({
    title: "Contact PRIMEBIZPRO",
    description: "Contact PRIMEBIZPRO about a business requirement, technology challenge, partnership, or digital transformation idea.",
    path: "/contact",
  }),
});

const contactChannels = [
  {
    label: "Email Address",
    value: siteContact.email,
    href: `mailto:${siteContact.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp / Phone",
    value: siteContact.phone,
    href: siteContact.whatsappUrl,
    icon: Phone,
    isExternal: true,
  },
  {
    label: "Website",
    value: siteContact.website,
    href: siteContact.websiteUrl,
    icon: Globe2,
    isExternal: true,
  },
  {
    label: "Business Location",
    value: siteContact.location,
    icon: MapPin,
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="LET’S CONNECT"
        title={<>Let’s connect and build<br /><span className="accent-text">smarter possibilities.</span></>}
        description="Have a business requirement, a technology challenge, or an idea for digital transformation? Start a conversation with PRIMEBIZPRO."
        image={siteImages.contact}
        imageAlt="A welcoming business meeting space with a city view"
      />

      <section className="section-band contact-page-band">
        <div className="site-container contact-layout">
          <div className="contact-information">
            <Reveal>
              <p className="eyebrow">START A CONVERSATION</p>
              <h2>Tell us what you’re <span className="accent-text">exploring.</span></h2>
              <p className="contact-intro">We welcome business enquiries, technology partnerships, product discussions, and collaboration opportunities.</p>
            </Reveal>
            <div className="contact-placeholder-list">
              {contactChannels.map((item) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label}>
                    <div className="contact-placeholder-row">
                      <span className="contact-placeholder-icon"><Icon aria-hidden="true" /></span>
                      <span>
                        <small>{item.label}</small>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.isExternal ? "_blank" : undefined}
                            rel={item.isExternal ? "noopener noreferrer" : undefined}
                          >
                            <strong>{item.value}</strong>
                          </a>
                        ) : (
                          <strong>{item.value}</strong>
                        )}
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="contact-whatsapp-card">
              <Button asChild size="lg" className="button-outline whatsapp-btn">
                <a href={siteContact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon aria-hidden="true" />
                  <span>Chat on WhatsApp ({siteContact.phone})</span>
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="contact-privacy-note"><ArrowRight aria-hidden="true" /> Enquiry details are stored securely so the PRIMEBIZPRO team can review them.</p>
          </div>

          <Reveal className="enquiry-form-wrap">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <CallToAction
        eyebrow="CONNECTED BUSINESS. INTELLIGENT OPERATIONS."
        title={<>Let’s explore how technology<br /><span className="accent-text">could support your next step.</span></>}
        description="Share your enquiry and start a conversation about the possibilities."
      />
    </>
  );
}