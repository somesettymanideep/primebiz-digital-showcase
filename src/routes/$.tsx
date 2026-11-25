import { createFileRoute } from "@tanstack/react-router";

import { NotFoundPage } from "./404";
import { buildPageHead } from "@/lib/site-content";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => buildPageHead({
    title: "404 Page Not Found",
    description: "The requested page could not be found on PRIMEBIZPRO.",
    path: "/404",
  }),
});
