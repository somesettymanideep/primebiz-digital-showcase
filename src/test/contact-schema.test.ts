import { describe, expect, it } from "vitest";

import {
  contactSubmissionSchema,
  industryOptions,
  solutionOptions,
  type ContactSubmission,
} from "@/lib/contact-schema";

const validSubmission: ContactSubmission = {
  fullName: "Jordan Lee",
  companyName: "Northstar Group",
  emailAddress: "jordan@example.com",
  mobileNumber: "+1 (555) 010-2020",
  industry: "Manufacturing",
  interestedSolution: "PRIME MANUFACTURE",
  message: "I would like to discuss a connected business platform.",
};

describe("contactSubmissionSchema", () => {
  it("requires a full name", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, fullName: " " }).success).toBe(false);
  });

  it("requires a valid email address", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, emailAddress: "not-an-email" }).success).toBe(false);
  });

  it("requires a message", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, message: " " }).success).toBe(false);
  });

  it("accepts the supplied industry and solution choices", () => {
    for (const industry of industryOptions) {
      expect(contactSubmissionSchema.safeParse({ ...validSubmission, industry }).success).toBe(true);
    }
    for (const interestedSolution of solutionOptions) {
      expect(contactSubmissionSchema.safeParse({ ...validSubmission, interestedSolution }).success).toBe(true);
    }
  });

  it("rejects choices outside the contact form options", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, industry: "Finance" }).success).toBe(false);
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, interestedSolution: "PRIME CRM" }).success).toBe(false);
  });

  it("enforces the name, company, email, mobile, and message length limits", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, fullName: "a".repeat(121) }).success).toBe(false);
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, companyName: "a".repeat(161) }).success).toBe(false);
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, emailAddress: `${"a".repeat(247)}@example.com` }).success).toBe(false);
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, mobileNumber: "1".repeat(41) }).success).toBe(false);
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, message: "a".repeat(2001) }).success).toBe(false);
  });

  it("rejects mobile numbers containing non-phone text", () => {
    expect(contactSubmissionSchema.safeParse({ ...validSubmission, mobileNumber: "call me tomorrow" }).success).toBe(false);
  });
});