CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  mobile_number text,
  industry text,
  interested_solution text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON TABLE public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Secure server access to contact submissions"
  ON public.contact_submissions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);