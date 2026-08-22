import nodemailer from "nodemailer";

export const runtime = "nodejs";

type AssessmentPayload = {
  serviceType?: string;
  solutionDescription?: string;
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
  const solutionDescription = clean(payload.solutionDescription, 5000);
  const name = clean(payload.name, 120);
  const email = clean(payload.email, 254);
  const company = clean(payload.company, 200);

  if (!serviceType || !solutionDescription || !name || !email || !email.includes("@")) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const message = [
    "VORTEX System Assessment Request",
    "",
    `Name: ${name}`,
    `Work email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Requested service: ${serviceType}`,
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
