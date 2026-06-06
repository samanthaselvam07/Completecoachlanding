CREATE TABLE IF NOT EXISTS founder_program_applications (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  tier text NOT NULL CHECK (tier IN ('design_partner', 'founding_coach')),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text NOT NULL,
  social_profile text NOT NULL,
  website text,
  business_name text NOT NULL,
  coach_types text[] NOT NULL DEFAULT '{}',
  active_clients text NOT NULL,
  coaches_online text NOT NULL CHECK (coaches_online IN ('yes', 'no', 'partially')),
  uses_software text NOT NULL CHECK (uses_software IN ('yes', 'no')),
  current_tools text[] NOT NULL DEFAULT '{}',
  biggest_challenge text NOT NULL,
  weekly_check_in_time text NOT NULL,
  switch_reason text NOT NULL,
  collects_check_ins text NOT NULL,
  check_in_includes text[] NOT NULL DEFAULT '{}',
  ai_would_save_time text NOT NULL CHECK (ai_would_save_time IN ('yes', 'no', 'not_sure')),
  early_access_reason text NOT NULL,
  willing_to_use_with_clients text NOT NULL CHECK (willing_to_use_with_clients IN ('yes', 'no', 'not_immediately')),
  willing_to_give_feedback text NOT NULL CHECK (willing_to_give_feedback IN ('yes', 'no')),
  willing_to_attend_feedback_calls text CHECK (willing_to_attend_feedback_calls IN ('yes', 'no')),
  open_to_case_study text NOT NULL CHECK (open_to_case_study IN ('yes', 'maybe', 'no')),
  understands_early_access boolean NOT NULL,
  agrees_to_contact boolean NOT NULL,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  user_agent text,
  source_path text NOT NULL DEFAULT '/founder-program'
);

CREATE INDEX IF NOT EXISTS founder_program_applications_submitted_at_idx
  ON founder_program_applications (submitted_at DESC);

CREATE INDEX IF NOT EXISTS founder_program_applications_tier_idx
  ON founder_program_applications (tier);

CREATE INDEX IF NOT EXISTS founder_program_applications_email_idx
  ON founder_program_applications (email);
