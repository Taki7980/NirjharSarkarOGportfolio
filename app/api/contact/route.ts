import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be no more than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be no more than 100 characters"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be no more than 100 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be no more than 1000 characters")
    .trim(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body with Zod
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

    const { name, email, subject, message } = validationResult.data

    // Send email using EmailJS
    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_name: 'Nirjhar sarkar', // Replace with your name
          reply_to: email,
        },
      }),
    })

    if (!emailjsResponse.ok) {
      const errorData = await emailjsResponse.text()
      console.error('EmailJS Error:', errorData)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    // Log successful submission
    console.log("Contact form submission sent successfully:", {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}