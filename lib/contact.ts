export const CONTACT_EMAIL = "nirjharsarkar8@gmail.com"

interface MailtoParams {
  name: string
  email: string
  subject: string
  message: string
}

export function buildContactMailtoUrl({ name, email, subject, message }: MailtoParams) {
  const lines = [
    `Name: ${name || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    "",
    message || "",
  ]

  const params = new URLSearchParams({
    subject: subject || "Portfolio contact",
    body: lines.join("\n"),
  })

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}
