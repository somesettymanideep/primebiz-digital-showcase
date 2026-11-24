import { createServerFn } from "@tanstack/react-start";

import { contactSubmissionSchema } from "./contact-schema";

export const submitContactSubmission = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSubmissionSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      full_name: data.fullName,
      company_name: data.companyName || null,
      email: data.emailAddress,
      mobile_number: data.mobileNumber || null,
      industry: data.industry || null,
      interested_solution: data.interestedSolution || null,
      message: data.message,
    });

    if (error) {
      console.error("Contact enquiry could not be saved", error.code);
      throw new Error("We couldn't save your enquiry right now. Please try again.");
    }

    return { success: true };
  });