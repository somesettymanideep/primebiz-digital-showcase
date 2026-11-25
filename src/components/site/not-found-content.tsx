import { Link } from "@tanstack/react-router";
import { ArrowRight, Home, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  return (
    <section className="section-band not-found-page" aria-labelledby="not-found-heading">
      <div className="site-container not-found-layout">
        <div className="not-found-content">
          <p className="eyebrow">ERROR 404</p>
          <h1 id="not-found-heading" className="not-found-heading">
            This connection leads <span className="accent-text">nowhere.</span>
          </h1>
          <p className="not-found-lead">
            The page you are looking for does not exist, has been removed, or the link may have expired.
          </p>
          <div className="not-found-buttons">
            <Button asChild size="lg" className="button-primary">
              <Link to="/">
                <Home aria-hidden="true" />
                <span>Return to Homepage</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="button-outline">
              <Link to="/contact">
                <MessageSquare aria-hidden="true" />
                <span>Contact Us</span>
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
