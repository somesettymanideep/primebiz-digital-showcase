import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactSubmissionSchema, industryOptions, solutionOptions, type ContactSubmission } from "@/lib/contact-schema";
import { submitContactSubmission } from "@/lib/contact.functions";

const emptyValues: ContactSubmission = {
  fullName: "",
  companyName: "",
  emailAddress: "",
  mobileNumber: "",
  industry: "",
  interestedSolution: "",
  message: "",
};

type FieldName = keyof ContactSubmission;
type FieldErrors = Record<FieldName, string>;

const emptyErrors: FieldErrors = {
  fullName: "",
  companyName: "",
  emailAddress: "",
  mobileNumber: "",
  industry: "",
  interestedSolution: "",
  message: "",
};

export function EnquiryForm() {
  const submitEnquiry = useServerFn(submitContactSubmission);
  const [values, setValues] = useState<ContactSubmission>(emptyValues);
  const [errors, setErrors] = useState<FieldErrors>(emptyErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField<K extends FieldName>(name: K, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitError("");
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(false);
    setSubmitError("");

    const parsed = contactSubmissionSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = { ...emptyErrors };
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && field in fieldErrors && !fieldErrors[field as FieldName]) {
          fieldErrors[field as FieldName] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors(emptyErrors);
    setIsSubmitting(true);
    try {
      const response = await submitEnquiry({ data: parsed.data });
      if (!response.success) throw new Error("Enquiry submission failed.");
      setValues(emptyValues);
      setSuccess(true);
    } catch {
      setSubmitError("We couldn't save your enquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <p className="eyebrow">YOUR ENQUIRY</p>
        <h2>Tell us what you’re looking for.</h2>
        <p>Fields marked <span className="required-mark">*</span> are required.</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="fullName">Full Name <span className="required-mark" aria-hidden="true">*</span></label>
          <input id="fullName" name="fullName" className="field-control" autoComplete="name" maxLength={120} required value={values.fullName} onChange={(event) => updateField("fullName", event.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} />
          {errors.fullName ? <p className="field-error" id="fullName-error">{errors.fullName}</p> : null}
        </div>

        <div className="form-field">
          <label htmlFor="companyName">Company Name</label>
          <input id="companyName" name="companyName" className="field-control" autoComplete="organization" maxLength={160} value={values.companyName} onChange={(event) => updateField("companyName", event.target.value)} aria-invalid={Boolean(errors.companyName)} aria-describedby={errors.companyName ? "companyName-error" : undefined} />
          {errors.companyName ? <p className="field-error" id="companyName-error">{errors.companyName}</p> : null}
        </div>

        <div className="form-field">
          <label htmlFor="emailAddress">Email Address <span className="required-mark" aria-hidden="true">*</span></label>
          <input id="emailAddress" name="emailAddress" className="field-control" type="email" autoComplete="email" maxLength={254} required value={values.emailAddress} onChange={(event) => updateField("emailAddress", event.target.value)} aria-invalid={Boolean(errors.emailAddress)} aria-describedby={errors.emailAddress ? "emailAddress-error" : undefined} />
          {errors.emailAddress ? <p className="field-error" id="emailAddress-error">{errors.emailAddress}</p> : null}
        </div>

        <div className="form-field">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input id="mobileNumber" name="mobileNumber" className="field-control" type="tel" autoComplete="tel" maxLength={40} value={values.mobileNumber} onChange={(event) => updateField("mobileNumber", event.target.value)} aria-invalid={Boolean(errors.mobileNumber)} aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined} />
          {errors.mobileNumber ? <p className="field-error" id="mobileNumber-error">{errors.mobileNumber}</p> : null}
        </div>

        <div className="form-field">
          <label htmlFor="industry">Industry</label>
          <select id="industry" name="industry" className="field-control" value={values.industry} onChange={(event) => updateField("industry", event.target.value)}>
            <option value="">Select an industry</option>
            {industryOptions.map((industry) => <option key={industry} value={industry}>{industry}</option>)}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="interestedSolution">Interested Solution</label>
          <select id="interestedSolution" name="interestedSolution" className="field-control" value={values.interestedSolution} onChange={(event) => updateField("interestedSolution", event.target.value)}>
            <option value="">Select a solution</option>
            {solutionOptions.map((solution) => <option key={solution} value={solution}>{solution}</option>)}
          </select>
        </div>

        <div className="form-field form-field-wide">
          <label htmlFor="message">Your Message <span className="required-mark" aria-hidden="true">*</span></label>
          <textarea id="message" name="message" className="field-control field-textarea" maxLength={2000} required value={values.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-count"} />
          {errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : <p className="field-hint" id="message-count">{values.message.length} / 2,000</p>}
        </div>
      </div>

      {submitError ? <p className="form-error" role="alert">{submitError}</p> : null}
      {success ? <p className="form-success" role="status"><CheckCircle2 aria-hidden="true" /> Thank you. Your enquiry has been received.</p> : null}

      <div className="form-submit-row">
        <Button type="submit" size="lg" className="button-primary form-submit" disabled={isSubmitting}>
          {isSubmitting ? <><LoaderCircle aria-hidden="true" className="loading-icon" /> Sending…</> : <>Send Enquiry <span aria-hidden="true">↗</span></>}
        </Button>
        <p>Your details will be used to respond to this enquiry.</p>
      </div>
    </form>
  );
}