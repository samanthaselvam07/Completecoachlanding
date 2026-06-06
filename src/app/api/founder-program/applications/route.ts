import { NextResponse } from "next/server";
import { applicationInputSchema } from "@/lib/application-validation";
import { createFounderProgramApplication } from "@/lib/application-repository";
import { sendApplicationNotification } from "@/lib/application-notification";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = applicationInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the application form and try again.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 },
    );
  }

  try {
    const application = await createFounderProgramApplication(parsed.data, {
      userAgent: request.headers.get("user-agent"),
    });

    try {
      await sendApplicationNotification(parsed.data, application);
    } catch (notificationError) {
      console.error(
        "Failed to send founder program application notification",
        notificationError,
      );
    }

    return NextResponse.json(
      {
        ok: true,
        id: application.id,
        submittedAt: application.submitted_at,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create founder program application", error);

    return NextResponse.json(
      { error: "Application could not be submitted right now." },
      { status: 500 },
    );
  }
}
