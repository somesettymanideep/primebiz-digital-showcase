import { z } from "zod";

export const industryOptions = [
  "Manufacturing",
  "Healthcare",
  "Pharmaceuticals",
  "Construction",
  "Distribution",
  "Retail",
  "Logistics",
  "Education",
  "Other",
] as const;

export const solutionOptions = [
  "PRIME ERP",
  "PRIME CONSTRUCT",
  "PRIME MANUFACTURE",
  "PRIME HEALTH",
  "PRIME PHARMA",
  "PRIME LAB",
  "General Enquiry",
  "Partnership",
] as const;

export const contactSubmissionSchema = z.object({
  fullName: z.string().trim().min(1, "Enter your full name.").max(120, "Use 120 characters or fewer."),
  companyName: z.string().trim().max(160, "Use 160 characters or fewer.").default(""),
  emailAddress: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Use 254 characters or fewer."),
  mobileNumber: z
    .string()
    .trim()
    .max(40, "Use 40 characters or fewer.")
    .regex(/^[0-9+().\s-]*$/, "Use digits and standard phone punctuation.")
    .default(""),
  industry: z.union([z.enum(industryOptions), z.literal("")]).default(""),
  interestedSolution: z.union([z.enum(solutionOptions), z.literal("")]).default(""),
  message: z.string().trim().min(1, "Add a short message.").max(2000, "Use 2,000 characters or fewer."),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;