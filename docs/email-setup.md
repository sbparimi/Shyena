# Shyena email setup

The website contact form sends through Resend using the verified `shyena.eu` domain.

- Sender: `contact@shyena.eu`
- Recipient: `sp@shyena.eu`
- Reply-To: the visitor's submitted email address
- Secret: `RESEND_API_KEY` in Vercel Environment Variables

The API key is read only on the server. It is never exposed to browser code.

## Important distinction

Resend provides transactional email sending. It does not create an inbox for `contact@shyena.eu` or `sp@shyena.eu`.

For inbound mail, configure an email routing/mailbox provider separately. For example, an inbound route can forward `contact@shyena.eu` and `sp@shyena.eu` to an existing mailbox.
