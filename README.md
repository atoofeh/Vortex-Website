# Vortex-Website
This is the website for the Vortex company named vortexmind.co

## Assessment email delivery

The consultation form sends new assessment requests through Gmail using Nodemailer. To enable automatic delivery locally or on the production host:

1. Create a Google App Password for the mailbox used by VORTEX. Do not use the normal Gmail password.
2. Copy `.env.example` to `.env.local` for local development, or add the same variables to the production environment.
3. Set `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `CONTACT_EMAIL`.
4. Restart the Next.js server after changing environment variables.

The form sends from `GMAIL_USER` to `CONTACT_EMAIL` and sets the visitor's email as `Reply-To`, so replies go directly to the person who submitted the assessment.
