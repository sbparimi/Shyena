import { createFileRoute } from "@tanstack/react-router";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5000;

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;

        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request body" }, { status: 400 });
        }

        const input = body as Record<string, unknown>;
        const name = cleanText(input.name, MAX_NAME_LENGTH);
        const email = cleanText(input.email, MAX_EMAIL_LENGTH);
        const company = cleanText(input.company, MAX_COMPANY_LENGTH);
        const companySize = cleanText(input.companySize, 40);
        const message = cleanText(input.message, MAX_MESSAGE_LENGTH);

        if (!name || !email || !company || !message) {
          return Response.json(
            { error: "Name, email, company, and message are required" },
            { status: 400 },
          );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return Response.json(
            { error: "Please provide a valid email address" },
            { status: 400 },
          );
        }

        const resendApiKey = process.env["RESEND_API_KEY"];
        if (!resendApiKey) {
          console.error("RESEND_API_KEY is not configured");
          return Response.json(
            { error: "Email service is not configured" },
            { status: 500 },
          );
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeCompany = escapeHtml(company);
        const safeCompanySize = escapeHtml(companySize || "Not provided");
        const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Shyena <contact@shyena.eu>",
            to: ["sp@shyena.eu"],
            reply_to: email,
            subject: `New Shyena demo request from ${name}`,
            html: `
              <div style="font-family:Arial,sans-serif;line-height:1.6;color:#17132f">
                <h2>New Shyena Website Enquiry</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Work email:</strong> ${safeEmail}</p>
                <p><strong>Company:</strong> ${safeCompany}</p>
                <p><strong>Company size:</strong> ${safeCompanySize}</p>
                <hr />
                <p><strong>Message</strong></p>
                <p>${safeMessage}</p>
              </div>
            `,
          }),
          signal: request.signal,
        });

        if (!resendResponse.ok) {
          const errorBody = await resendResponse.text();
          console.error("Resend API error", resendResponse.status, errorBody);
          return Response.json(
            { error: "Unable to send your message" },
            { status: 502 },
          );
        }

        const result = (await resendResponse.json()) as { id?: string };
        return Response.json({ success: true, id: result.id ?? null });
      },
    },
  },
});
