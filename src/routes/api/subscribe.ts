import { createFileRoute } from "@tanstack/react-router";

const MAX_EMAIL_LENGTH = 254;
const TOPIC_ID = process.env["RESEND_NEWSLETTER_TOPIC_ID"];

function cleanEmail(value: unknown): string {
  return typeof value === "string" ? value.trim().slice(0, MAX_EMAIL_LENGTH).toLowerCase() : "";
}

export const Route = createFileRoute("/api/subscribe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request body" }, { status: 400 });
        }

        const email = cleanEmail((body as Record<string, unknown>).email);
        if (!/^\S+@\S+\.\S+$/.test(email)) {
          return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        const resendApiKey = process.env["RESEND_API_KEY"];
        if (!resendApiKey || !TOPIC_ID) {
          console.error("Newsletter subscription is not configured.");
          return Response.json({ error: "Subscription service is not configured." }, { status: 503 });
        }

        const response = await fetch("https://api.resend.com/contacts", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            unsubscribed: false,
            topics: [{ id: TOPIC_ID, subscription: "opt_in" }],
          }),
          signal: request.signal,
        });

        if (!response.ok) {
          const errorBody = await response.text();
          console.error("Resend subscription error", response.status, errorBody);
          return Response.json({ error: "Unable to subscribe." }, { status: 502 });
        }

        return Response.json({ success: true });
      },
    },
  },
});
