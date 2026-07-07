import type { ApplicationInput } from "@/lib/application-validation";
import type { WaitlistInput } from "@/lib/waitlist-validation";

const resendEmailsEndpoint = "https://api.resend.com/emails";
export const applicationNotificationEmail = "sammi@completecoach.fit";

type StoredApplication = {
  id: number;
  submitted_at: Date;
};

type StoredWaitlistSignup = {
  id: string;
  email: string;
};

type EmailSection = {
  title: string;
  rows: Array<[string, string | undefined]>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatList(value: string[] | undefined) {
  return value && value.length > 0 ? value.join(", ") : undefined;
}

function formatYesNo(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatTier(value: ApplicationInput["tier"]) {
  return value === "design_partner" ? "Design Partner" : "Founding Coach";
}

function createSections(input: ApplicationInput): EmailSection[] {
  return [
    {
      title: "Application Tier",
      rows: [["Tier", formatTier(input.tier)]],
    },
    {
      title: "Basic Information",
      rows: [
        ["Full Name", input.fullName],
        ["Email Address", input.email],
        ["Phone Number", input.phone],
        ["Country", input.country],
        ["Instagram / Main Social Profile", input.socialProfile],
        ["Website", input.website],
      ],
    },
    {
      title: "Coaching Business Details",
      rows: [
        ["Coaching Business Name", input.businessName],
        ["Coach Type", formatList(input.coachTypes)],
        ["Active Clients", input.activeClients],
        ["Coaches Online", formatYesNo(input.coachesOnline)],
        ["Uses Coaching Software", formatYesNo(input.usesSoftware)],
        ["Current Tools", formatList(input.currentTools)],
      ],
    },
    {
      title: "Pain Points",
      rows: [
        ["Biggest Operational Challenge", input.biggestChallenge],
        ["Weekly Check-In Review Time", input.weeklyCheckInTime],
        ["Switch Reason", input.switchReason],
      ],
    },
    {
      title: "AI Check-In Analysis",
      rows: [
        ["Collects Check-Ins", formatYesNo(input.collectsCheckIns)],
        ["Check-In Data", formatList(input.checkInIncludes)],
        ["AI Would Save Time", formatYesNo(input.aiWouldSaveTime)],
      ],
    },
    {
      title: "Commitment",
      rows: [
        ["Early Access Reason", input.earlyAccessReason],
        ["Willing To Use With Real Clients", formatYesNo(input.willingToUseWithClients)],
        ["Willing To Give Feedback", formatYesNo(input.willingToGiveFeedback)],
        ["Willing To Attend Feedback Calls", formatYesNo(input.willingToAttendFeedbackCalls)],
        ["Open To Case Study", formatYesNo(input.openToCaseStudy)],
        ["Understands Early Access", input.understandsEarlyAccess ? "Yes" : "No"],
        ["Agrees To Contact", input.agreesToContact ? "Yes" : "No"],
      ],
    },
  ];
}

function renderRows(rows: EmailSection["rows"]) {
  return rows
    .filter(([, value]) => value && value.trim().length > 0)
    .map(
      ([label, value]) => `
        <tr>
          <th style="width: 34%; padding: 12px 14px; text-align: left; vertical-align: top; color: #474554; font-size: 13px; line-height: 20px; background: #fbf9f8; border-bottom: 1px solid #f0eeec;">
            ${escapeHtml(label)}
          </th>
          <td style="padding: 12px 14px; color: #1b1c1c; font-size: 14px; line-height: 22px; border-bottom: 1px solid #f0eeec;">
            ${escapeHtml(value ?? "")}
          </td>
        </tr>
      `,
    )
    .join("");
}

function renderSection(section: EmailSection) {
  const rows = renderRows(section.rows);

  if (!rows) {
    return "";
  }

  return `
    <section style="margin-top: 24px;">
      <h2 style="margin: 0 0 10px; color: #1b1c1c; font-size: 18px; line-height: 24px;">
        ${escapeHtml(section.title)}
      </h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; overflow: hidden; border: 1px solid #f0eeec; border-radius: 14px;">
        ${rows}
      </table>
    </section>
  `;
}

export function createApplicationNotificationEmail(
  input: ApplicationInput,
  application: StoredApplication,
) {
  const submittedAt = application.submitted_at.toISOString();
  const sections = createSections(input).map(renderSection).join("");

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin: 0; padding: 0; background: #fbf9f8; font-family: Arial, sans-serif;">
        <main style="max-width: 760px; margin: 0 auto; padding: 32px 18px;">
          <div style="border-radius: 24px; background: #ffffff; padding: 28px; box-shadow: 0 12px 28px rgba(27, 28, 28, 0.08);">
            <p style="display: inline-block; margin: 0 0 14px; border-radius: 18px; background: #f2eeff; padding: 8px 12px; color: #4f40cf; font-size: 12px; font-weight: 700; letter-spacing: 1px;">
              NEW FOUNDER PROGRAM APPLICATION
            </p>
            <h1 style="margin: 0; color: #1b1c1c; font-size: 28px; line-height: 34px;">
              ${escapeHtml(input.fullName)} applied for Complete Coach Early Access
            </h1>
            <p style="margin: 12px 0 0; color: #474554; font-size: 15px; line-height: 24px;">
              Application #${application.id} submitted at ${escapeHtml(submittedAt)}.
            </p>
            ${sections}
          </div>
        </main>
      </body>
    </html>
  `;
}

export function createWaitlistNotificationEmail(
  input: WaitlistInput,
  signup: StoredWaitlistSignup,
) {
  const sections = [
    renderSection({
      title: "Waitlist Signup",
      rows: [
        ["Email Address", input.email],
        ["Source", input.source],
        ["Signup ID", signup.id],
      ],
    }),
  ].join("");

  return `
    <!doctype html>
    <html lang="en">
      <body style="margin: 0; padding: 0; background: #fbf9f8; font-family: Arial, sans-serif;">
        <main style="max-width: 760px; margin: 0 auto; padding: 32px 18px;">
          <div style="border-radius: 24px; background: #ffffff; padding: 28px; box-shadow: 0 12px 28px rgba(27, 28, 28, 0.08);">
            <p style="display: inline-block; margin: 0 0 14px; border-radius: 18px; background: #f2eeff; padding: 8px 12px; color: #4f40cf; font-size: 12px; font-weight: 700; letter-spacing: 1px;">
              NEW WAITLIST SIGNUP
            </p>
            <h1 style="margin: 0; color: #1b1c1c; font-size: 28px; line-height: 34px;">
              ${escapeHtml(signup.email)} joined the Complete Coach waitlist
            </h1>
            <p style="margin: 12px 0 0; color: #474554; font-size: 15px; line-height: 24px;">
              A new coach has joined the early access waitlist.
            </p>
            ${sections}
          </div>
        </main>
      </body>
    </html>
  `;
}

async function sendNotificationEmail({
  html,
  missingEnvMessage,
  subject,
}: {
  html: string;
  missingEnvMessage: string;
  subject: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = applicationNotificationEmail;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.warn(missingEnvMessage);
    return;
  }

  const response = await fetch(resendEmailsEndpoint, {
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(`Resend notification failed with ${response.status}: ${errorBody}`);
  }
}

export async function sendApplicationNotification(
  input: ApplicationInput,
  application: StoredApplication,
) {
  await sendNotificationEmail({
    html: createApplicationNotificationEmail(input, application),
    missingEnvMessage:
      "Application notification email skipped; Resend env vars are not configured.",
    subject: `New Complete Coach application: ${input.fullName}`,
  });
}

export async function sendWaitlistNotification(
  input: WaitlistInput,
  signup: StoredWaitlistSignup,
) {
  await sendNotificationEmail({
    html: createWaitlistNotificationEmail(input, signup),
    missingEnvMessage:
      "Waitlist notification email skipped; Resend env vars are not configured.",
    subject: `New Complete Coach waitlist signup: ${signup.email}`,
  });
}
