import { createFileRoute } from "@tanstack/react-router";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_COMPANY_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5000;

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "hotmail.co.uk", "live.com", "live.co.uk", "msn.com",
  "yahoo.com", "yahoo.co.uk", "ymail.com", "rocketmail.com", "icloud.com", "me.com", "mac.com", "aol.com",
  "proton.me", "protonmail.com", "pm.me", "gmx.com", "gmx.net", "mail.com", "yandex.com", "yandex.ru", "zoho.com",
  "mail.ru", "qq.com", "163.com", "126.com",
]);

function cleanText(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function isWorkEmail(email: string): boolean {
  const parts = email.toLowerCase().split("@");
  if (parts.length !== 2) return false;
  const [localPart, domain] = parts;
  return Boolean(localPart && domain && domain.includes(".") && !FREE_EMAIL_DOMAINS.has(domain));
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try { body = await request.json(); } catch { return Response.json({ error: "Invalid request body" }, { status: 400 }); }

        const input = body as Record<string, unknown>;
        const inquiryReason = cleanText(input.inquiryReason, 80);
        const firstName = cleanText(input.firstName, MAX_NAME_LENGTH);
        const lastName = cleanText(input.lastName, MAX_NAME_LENGTH);
        const email = cleanText(input.email, MAX_EMAIL_LENGTH).toLowerCase();
        const phone = cleanText(input.phone, 60);
        const company = cleanText(input.company, MAX_COMPANY_LENGTH);
        const jobTitle = cleanText(input.jobTitle, 120);
        const companySize = cleanText(input.companySize, 40);
        const country = cleanText(input.country, 100);
        const message = cleanText(input.message, MAX_MESSAGE_LENGTH);
        const name = [firstName, lastName].filter(Boolean).join(" ");

        if (!inquiryReason || !firstName || !lastName || !email || !phone || !company || !jobTitle || !companySize || !country || !message) {
          return Response.json({ error: "All fields are required" }, { status: 400 });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !isWorkEmail(email)) {
          return Response.json({ error: "Please use your company work email. Personal email providers such as Gmail, Outlook and Yahoo are not accepted." }, { status: 400 });
        }

        const resendApiKey = process.env["RESEND_API_KEY"];
        if (!resendApiKey) {
          console.error("RESEND_API_KEY is not configured");
          return Response.json({ error: "Email service is not configured" }, { status: 500 });
        }

        const safe = (value: string, fallback = "Not provided") => escapeHtml(value || fallback);
        const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${resendApiKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "Shyena <contact@shyena.eu>", to: ["sp@shyena.eu"], reply_to: email,
            subject: `New Shyena enquiry from ${name}`,
            html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#17132f"><h2>New Shyena Website Enquiry</h2><p><strong>Inquiry reason:</strong> ${safe(inquiryReason)}</p><p><strong>Name:</strong> ${safe(name)}</p><p><strong>Work email:</strong> ${safe(email)}</p><p><strong>Phone:</strong> ${safe(phone)}</p><p><strong>Company:</strong> ${safe(company)}</p><p><strong>Job title:</strong> ${safe(jobTitle)}</p><p><strong>Company size:</strong> ${safe(companySize)}</p><p><strong>Country:</strong> ${safe(country)}</p><hr /><p><strong>Message</strong></p><p>${safeMessage}</p></div>`,
          }),
          signal: request.signal,
        });

        if (!resendResponse.ok) {
          const errorBody = await resendResponse.text();
          console.error("Resend API error", resendResponse.status, errorBody);
          return Response.json({ error: "Unable to send your message" }, { status: 502 });
        }
        const result = (await resendResponse.json()) as { id?: string };
        return Response.json({ success: true, id: result.id ?? null });
      },
    },
  },
});
