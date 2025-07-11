"use client"

import { Github, Linkedin, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Nirjhar_Sarkar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20 animate-gradient-xy" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Animated greeting */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Welcome to my portfolio</span>
          </div>

          {/* Main heading with enhanced gradient */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight animate-fade-in">
              Full Stack Web Developer
            </h1>
            <div className="flex justify-center">
              <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" />
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Building end-to-end solutions with{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">React.js</span>,{" "}
            <span className="text-green-600 dark:text-green-400 font-semibold">Node.js</span>, and modern frameworks.
            Passionate about creating high-performance applications and exceptional user experiences.
          </p>

          {/* Enhanced social links */}
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <Link
              href="https://github.com/Taki7980"
              className="group relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-4 rounded-2xl hover:shadow-2xl hover:shadow-gray-500/25 transition-all duration-500 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="flex items-center space-x-3">
                <Github
                  size={24}
                  className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                />
                <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  GitHub
                </span>
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/in/nirjhar-sarkar-88878123a/"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="flex items-center space-x-3">
                <Linkedin
                  size={24}
                  className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300"
                />
                <span className="font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  LinkedIn
                </span>
              </div>
            </Link>
          </div>

          {/* Enhanced download button */}
          <div className="pt-6">
            <Button
              onClick={handleDownloadResume}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="flex items-center space-x-3 relative z-10">
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
                <Sparkles size={16} className="group-hover:animate-spin" />
              </span>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground pt-4 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>West Chakpara, Liluah, Howrah 711204 • +91 7980599328</span>
            </div>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="pt-12">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
