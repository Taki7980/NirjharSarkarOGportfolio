"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-3xl border border-white/20 dark:border-gray-800/20 backdrop-blur-sm">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Send Me a Message
        </h3>
        <p className="text-muted-foreground">Have a project in mind? Let's discuss how we can work together.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className={`bg-white/50 dark:bg-gray-800/50 border-2 transition-all duration-300 focus:scale-105 ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 dark:border-gray-700 focus:border-blue-500"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle size={14} />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`bg-white/50 dark:bg-gray-800/50 border-2 transition-all duration-300 focus:scale-105 ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-200 dark:border-gray-700 focus:border-blue-500"
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <div className="flex items-center space-x-1 text-red-500 text-sm">
                <AlertCircle size={14} />
                <span>{errors.email}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Subject *
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            className={`bg-white/50 dark:bg-gray-800/50 border-2 transition-all duration-300 focus:scale-105 ${
              errors.subject
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 dark:border-gray-700 focus:border-blue-500"
            }`}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <div className="flex items-center space-x-1 text-red-500 text-sm">
              <AlertCircle size={14} />
              <span>{errors.subject}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={6}
            className={`bg-white/50 dark:bg-gray-800/50 border-2 transition-all duration-300 focus:scale-105 resize-none ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 dark:border-gray-700 focus:border-blue-500"
            }`}
            placeholder="Tell me about your project, ideas, or just say hello!"
          />
          {errors.message && (
            <div className="flex items-center space-x-1 text-red-500 text-sm">
              <AlertCircle size={14} />
              <span>{errors.message}</span>
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <Loader2 size={18} className="animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Send size={18} />
              <span>Send Message</span>
            </div>
          )}
        </Button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-950/20 p-4 rounded-2xl border border-green-200 dark:border-green-800">
            <CheckCircle size={20} />
            <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 dark:bg-red-950/20 p-4 rounded-2xl border border-red-200 dark:border-red-800">
            <AlertCircle size={20} />
            <span className="font-medium">Failed to send message. Please try again or contact me directly.</span>
          </div>
        )}
      </form>
    </div>
  )
}
