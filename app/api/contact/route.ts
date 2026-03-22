import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be no more than 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(100, "Email must be no more than 100 characters"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be no more than 100 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be no more than 1000 characters")
    .trim(),
})

const emailJsConfigSchema = z.object({
  EMAILJS_SERVICE_ID: z.string().min(1),
  EMAILJS_TEMPLATE_ID: z.string().min(1),
  EMAILJS_PUBLIC_KEY: z.string().min(1),
  EMAILJS_PRIVATE_KEY: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(err => ({
        field: err.path[0],
        message: err.message
      }))

      return NextResponse.json(
        {
          error: "Validation failed",
          details: errors 
        }, 
        { status: 400 }
      )
    }

    const configResult = emailJsConfigSchema.safeParse(process.env)

    if (!configResult.success) {
      console.error("Missing EmailJS configuration for contact form")

      return NextResponse.json(
        {
          error: "The contact form is temporarily unavailable. Please use the direct email option instead.",
          code: "CONTACT_FORM_NOT_CONFIGURED",
        },
        { status: 503 },
      )
    }

    const { name, email, subject, message } = validationResult.data
    const {
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      EMAILJS_PUBLIC_KEY,
      EMAILJS_PRIVATE_KEY,
    } = configResult.data

    const emailjsResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        accessToken: EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_name: "Nirjhar Sarkar",
          reply_to: email,
        },
      }),
    })

    if (!emailjsResponse.ok) {
      const errorData = await emailjsResponse.text()
      console.error("EmailJS Error:", errorData)

      return NextResponse.json(
        {
          error: "Message could not be delivered right now. Please try again or use the direct email option.",
          code: "EMAIL_DELIVERY_FAILED",
        },
        { status: 502 },
      )
    }

    console.log("Contact form submission sent successfully:", {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)

    return NextResponse.json(
      {
        error: "Unexpected error while sending your message. Please use the direct email option if this keeps happening.",
        code: "CONTACT_FORM_ERROR",
      },
      { status: 500 },
    )
  }
}
