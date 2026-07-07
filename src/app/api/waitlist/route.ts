import { NextResponse } from "next/server";
import { upsertWaitlistSignup } from "@/lib/waitlist-repository";
import { waitlistInputSchema } from "@/lib/waitlist-validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = waitlistInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Enter a valid email address.",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 },
    );
  }

  try {
    const signup = await upsertWaitlistSignup(parsed.data, {
      userAgent: request.headers.get("user-agent"),
      referer: request.headers.get("referer"),
    });

    return NextResponse.json(
      {
        ok: true,
        id: signup.id,
        email: signup.email,
      },
      { status: 202 },
    );
  } catch (error) {
    console.error("Failed to create waitlist signup", error);

    return NextResponse.json(
      { error: "Something went wrong, please try again" },
      { status: 500 },
    );
  }
}
