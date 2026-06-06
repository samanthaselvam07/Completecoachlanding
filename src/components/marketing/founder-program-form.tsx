"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import {
  activeClientOptions,
  applicationTiers,
  checkInIncludesOptions,
  coachTypeOptions,
  countries,
  currentToolOptions,
  earlyAccessSubmitCta,
  type ApplicationTier,
  weeklyCheckInTimeOptions,
} from "@/lib/site";

const inputClass =
  "h-[52px] rounded-[18px] border border-[#e5e1dd] bg-white px-4 text-[15px] text-[#1b1c1c] outline-none transition-colors focus:border-[#4f40cf]";
const textareaClass =
  "min-h-[132px] resize-y rounded-[18px] border border-[#e5e1dd] bg-white px-4 py-3 text-[15px] leading-[24px] text-[#1b1c1c] outline-none transition-colors focus:border-[#4f40cf]";

function FieldLabel({
  children,
  optional = false,
}: {
  children: ReactNode;
  optional?: boolean;
}) {
  return (
    <span className="text-[13px] font-semibold tracking-[0.5px] text-[#474554]">
      {children}
      {optional ? <span className="font-medium text-[#787586]"> Optional</span> : null}
    </span>
  );
}

function TextField({
  label,
  name,
  type = "text",
  optional = false,
}: {
  label: string;
  name: string;
  type?: "email" | "text" | "url";
  optional?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <FieldLabel optional={optional}>{label}</FieldLabel>
      <input className={inputClass} name={name} required={!optional} type={type} />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="grid gap-2">
      <FieldLabel>{label}</FieldLabel>
      <select className={inputClass} defaultValue="" name={name} required>
        <option disabled value="">
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function LongTextField({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <FieldLabel>{label}</FieldLabel>
      <textarea
        className={textareaClass}
        name={name}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

function RadioGroup({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly { label: string; value: string }[];
}) {
  return (
    <fieldset className="grid gap-3">
      <legend>
        <FieldLabel>{label}</FieldLabel>
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <label
            className="inline-flex min-h-[44px] items-center gap-2 rounded-[18px] border border-[#e5e1dd] bg-white px-4 text-[14px] font-medium text-[#1b1c1c]"
            key={option.value}
          >
            <input name={name} required type="radio" value={option.value} />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function CheckboxGroup({
  label,
  name,
  options,
  optional = false,
}: {
  label: string;
  name: string;
  options: readonly string[];
  optional?: boolean;
}) {
  return (
    <fieldset className="grid gap-3">
      <legend>
        <FieldLabel optional={optional}>{label}</FieldLabel>
      </legend>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label
            className="inline-flex min-h-[44px] items-center gap-2 rounded-[16px] border border-[#e5e1dd] bg-white px-4 text-[14px] font-medium text-[#1b1c1c]"
            key={option}
          >
            <input name={name} type="checkbox" value={option} />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function FormSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="grid gap-5 rounded-[28px] bg-[#fbf9f8] p-5 shadow-[inset_0_0_0_1px_#f0eeec] md:p-7">
      <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] font-bold leading-[30px] text-[#1b1c1c]">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function FounderProgramForm() {
  const [tier, setTier] = useState<ApplicationTier>("design_partner");
  const [confirmation, setConfirmation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedTier =
    applicationTiers.find((option) => option.value === tier) ?? applicationTiers[0];

  return (
    <form
      className="grid gap-6"
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (formData.getAll("coachTypes").length === 0) {
          setConfirmation(null);
          setError("Please select at least one coach type.");
          return;
        }

        setIsSubmitting(true);
        setError(null);

        const stringValue = (key: string) => String(formData.get(key) ?? "");
        const optionalStringValue = (key: string) => {
          const value = stringValue(key).trim();
          return value.length > 0 ? value : undefined;
        };

        const payload = {
          tier,
          fullName: stringValue("fullName"),
          email: stringValue("email"),
          phone: optionalStringValue("phone"),
          country: stringValue("country"),
          socialProfile: stringValue("socialProfile"),
          website: optionalStringValue("website"),
          businessName: stringValue("businessName"),
          coachTypes: formData.getAll("coachTypes").map(String),
          activeClients: stringValue("activeClients"),
          coachesOnline: stringValue("coachesOnline"),
          usesSoftware: stringValue("usesSoftware"),
          currentTools: formData.getAll("currentTools").map(String),
          biggestChallenge: stringValue("biggestChallenge"),
          weeklyCheckInTime: stringValue("weeklyCheckInTime"),
          switchReason: stringValue("switchReason"),
          collectsCheckIns: stringValue("collectsCheckIns"),
          checkInIncludes: formData.getAll("checkInIncludes").map(String),
          aiWouldSaveTime: stringValue("aiWouldSaveTime"),
          earlyAccessReason: stringValue("earlyAccessReason"),
          willingToUseWithClients: stringValue("willingToUseWithClients"),
          willingToGiveFeedback: stringValue("willingToGiveFeedback"),
          willingToAttendFeedbackCalls:
            tier === "design_partner"
              ? stringValue("willingToAttendFeedbackCalls")
              : undefined,
          openToCaseStudy: stringValue("openToCaseStudy"),
          understandsEarlyAccess:
            formData.get("understandsEarlyAccess") === "on",
          agreesToContact: formData.get("agreesToContact") === "on",
        };

        try {
          const response = await fetch("/api/founder-program/applications", {
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          });

          if (!response.ok) {
            const result = (await response.json().catch(() => null)) as {
              error?: string;
            } | null;
            throw new Error(result?.error ?? "Application could not be submitted.");
          }

          setConfirmation(selectedTier.confirmation);
          event.currentTarget.reset();
          setTier("design_partner");
        } catch (submitError) {
          setConfirmation(null);
          setError(
            submitError instanceof Error
              ? submitError.message
              : "Application could not be submitted.",
          );
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <section className="grid gap-5 rounded-[28px] bg-white p-5 shadow-[0px_12px_28px_0px_rgba(27,28,28,0.08)] md:p-7">
        <div>
          <p className="mb-2 text-[12px] font-semibold tracking-[1.44px] text-[#4f40cf]">
            CHOOSE YOUR PATH
          </p>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[28px] font-bold leading-[34px] text-[#1b1c1c]">
            Application Tier
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {applicationTiers.map((option) => (
            <label
              className={`grid cursor-pointer gap-4 rounded-[24px] border p-5 transition-colors ${
                tier === option.value
                  ? "border-[#4f40cf] bg-[#f2eeff]"
                  : "border-[#e5e1dd] bg-[#fbf9f8]"
              }`}
              key={option.value}
            >
              <span className="flex items-start gap-3">
                <input
                  checked={tier === option.value}
                  name="tier"
                  onChange={() => setTier(option.value)}
                  required
                  type="radio"
                  value={option.value}
                />
                <span>
                  <span className="block font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-bold text-[#1b1c1c]">
                    {option.label} — {option.price}
                  </span>
                  <span className="mt-1 block text-[13px] font-semibold uppercase tracking-[1.1px] text-[#787586]">
                    Limited to {option.limit}
                  </span>
                </span>
              </span>
              <span className="text-[14px] font-semibold leading-[22px] text-[#4f40cf]">
                Best for: {option.bestFor}
              </span>
              <span className="text-[14px] leading-[22px] text-[#474554]">
                {option.description}
              </span>
              <span className="grid gap-3 md:grid-cols-2">
                <span>
                  <span className="mb-2 block text-[12px] font-semibold tracking-[1.1px] text-[#787586]">
                    INCLUDES
                  </span>
                  <span className="grid gap-1">
                    {option.includes.map((item) => (
                      <span className="text-[13px] leading-[20px] text-[#474554]" key={item}>
                        {item}
                      </span>
                    ))}
                  </span>
                </span>
                <span>
                  <span className="mb-2 block text-[12px] font-semibold tracking-[1.1px] text-[#787586]">
                    REQUIREMENTS
                  </span>
                  <span className="grid gap-1">
                    {option.requirements.map((item) => (
                      <span className="text-[13px] leading-[20px] text-[#474554]" key={item}>
                        {item}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
            </label>
          ))}
        </div>
      </section>

      <FormSection title="Basic Information">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <TextField label="Full Name" name="fullName" />
          <TextField label="Email Address" name="email" type="email" />
          <TextField label="Phone Number" name="phone" optional />
          <SelectField label="Country" name="country" options={countries} />
          <TextField label="Instagram / Main Social Profile" name="socialProfile" />
          <TextField label="Website" name="website" optional type="url" />
        </div>
      </FormSection>

      <FormSection title="Coaching Business Details">
        <TextField label="Coaching Business Name" name="businessName" />
        <CheckboxGroup label="What type of coach are you?" name="coachTypes" options={coachTypeOptions} />
        <SelectField label="How many active clients do you currently coach?" name="activeClients" options={activeClientOptions} />
        <RadioGroup
          label="Do you currently coach clients online?"
          name="coachesOnline"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
            { label: "Partially", value: "partially" },
          ]}
        />
        <RadioGroup
          label="Are you currently using coaching software?"
          name="usesSoftware"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <CheckboxGroup label="Which tools do you currently use?" name="currentTools" options={currentToolOptions} optional />
      </FormSection>

      <FormSection title="Pain Points">
        <LongTextField
          label="What is your biggest operational challenge right now?"
          name="biggestChallenge"
          placeholder="Example: reviewing check-ins takes too long, managing leads is messy, client data is spread across too many tools, etc."
        />
        <SelectField label="How much time do you currently spend reviewing client check-ins each week?" name="weeklyCheckInTime" options={weeklyCheckInTimeOptions} />
        <LongTextField label="What would make Complete Coach valuable enough for you to switch from your current system?" name="switchReason" />
      </FormSection>

      <FormSection title="AI Check-In Analysis">
        <RadioGroup
          label="Do you currently collect client check-ins?"
          name="collectsCheckIns"
          options={[
            { label: "Yes, weekly", value: "yes_weekly" },
            { label: "Yes, fortnightly", value: "yes_fortnightly" },
            { label: "Yes, monthly", value: "yes_monthly" },
            { label: "No", value: "no" },
          ]}
        />
        <CheckboxGroup label="What do your check-ins usually include?" name="checkInIncludes" options={checkInIncludesOptions} optional />
        <RadioGroup
          label="Would AI-assisted check-in analysis save you time?"
          name="aiWouldSaveTime"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
            { label: "Not sure", value: "not_sure" },
          ]}
        />
      </FormSection>

      <FormSection title="Commitment">
        <LongTextField label="Why do you want early access to Complete Coach?" name="earlyAccessReason" />
        <RadioGroup
          label="Are you willing to use Complete Coach with real clients during the early access period?"
          name="willingToUseWithClients"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
            { label: "Not immediately", value: "not_immediately" },
          ]}
        />
        <RadioGroup
          label="Are you willing to provide feedback to the Complete Coach team?"
          name="willingToGiveFeedback"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        {tier === "design_partner" ? (
          <RadioGroup
            label="For Design Partner applicants only: Are you willing to attend short feedback calls every 2 weeks?"
            name="willingToAttendFeedbackCalls"
            options={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
          />
        ) : null}
        <RadioGroup
          label="Are you open to being featured in a case study if the platform helps your business?"
          name="openToCaseStudy"
          options={[
            { label: "Yes", value: "yes" },
            { label: "Maybe", value: "maybe" },
            { label: "No", value: "no" },
          ]}
        />
        <div className="grid gap-3">
          <label className="flex items-start gap-3 rounded-[18px] bg-white p-4 text-[14px] leading-[22px] text-[#474554]">
            <input name="understandsEarlyAccess" required type="checkbox" />
            I understand that Complete Coach is currently in early access/prototype development and that features may evolve based on feedback.
          </label>
          <label className="flex items-start gap-3 rounded-[18px] bg-white p-4 text-[14px] leading-[22px] text-[#474554]">
            <input name="agreesToContact" required type="checkbox" />
            I agree to be contacted by the Complete Coach team regarding my application.
          </label>
        </div>
      </FormSection>

      <button
        className="h-[58px] rounded-[29px] bg-[#4f40cf] px-8 text-[15px] font-semibold text-white shadow-[0px_10px_24px_0px_rgba(79,64,207,0.16)] transition-colors hover:bg-[#3d31a8] disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Submitting..." : earlyAccessSubmitCta}
      </button>

      {error ? (
        <p className="rounded-[22px] bg-[#ffebe8] p-5 text-[15px] font-medium leading-[24px] text-[#ba1a1a]">
          {error}
        </p>
      ) : null}

      {confirmation ? (
        <p className="rounded-[22px] bg-[#e6f9ef] p-5 text-[15px] font-medium leading-[24px] text-[#1f6b46]">
          {confirmation}
        </p>
      ) : null}
    </form>
  );
}
