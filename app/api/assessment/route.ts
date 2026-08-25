import nodemailer from "nodemailer";

export const runtime = "nodejs";

type AssessmentPayload = {
  serviceType?: string;
  stage?: string;
  needs?: string[];
  solutionDescription?: string;
  timeline?: string;
  name?: string;
  email?: string;
  company?: string;
};

const clean = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_EMAIL || "contact@vortexmind.co";

  if (!gmailUser || !gmailAppPassword) {
    return Response.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }

  let payload: AssessmentPayload;
  try {
    payload = (await request.json()) as AssessmentPayload;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const serviceType = clean(payload.serviceType, 160);
  const stage = clean(payload.stage, 120);
  const needs = Array.isArray(payload.needs) ? payload.needs.filter((item): item is string => typeof item === "string").map((item) => clean(item, 120)).slice(0, 12) : [];
  const solutionDescription = clean(payload.solutionDescription, 5000);
  const timeline = clean(payload.timeline, 120);
  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254);
  const company = clean(payload.company, 200);

  if (!serviceType || !stage || !needs.length || !solutionDescription || !timeline || !name || !email || !email.includes("@")) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const message = [
    "VORTEX System Assessment Request",
    "",
    `Name: ${name}`,
    `Work email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Requested service: ${serviceType}`,
    `Project stage: ${stage || "Not provided"}`,
    `Needs: ${needs.length ? needs.join(", ") : "Not provided"}`,
    `Timeline: ${timeline || "Not provided"}`,
    "",
    "Solution brief:",
    solutionDescription,
    "",
    `Submitted from ${request.headers.get("origin") || "vortexmind.co"}`,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: `VORTEX Website <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `VORTEX System Assessment — ${serviceType}`,
      text: message,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Assessment email failed", error);
    return Response.json({ error: "The request could not be delivered. Please try again." }, { status: 502 });
  }
}
