"use client"

import { useState } from "react"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
      icon: "💻",
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20",
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Material UI"],
      icon: "🎨",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
      icon: "⚙️",
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL"],
      icon: "🗄️",
      gradient: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "Docker", "Firebase", "Vercel"],
      icon: "☁️",
      gradient: "from-indigo-400 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/10 dark:via-transparent dark:to-purple-950/10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">My Expertise</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-gradient-to-br ${category.bgGradient} p-8 rounded-3xl border border-white/20 dark:border-gray-800/20 hover:shadow-2xl hover:shadow-${category.gradient.split(" ")[1].split("-")[0]}-500/20 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              />

              {/* Icon with animation */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div className="relative text-4xl p-3 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="relative px-4 py-2 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 cursor-default hover:scale-105 backdrop-blur-sm border border-white/30 dark:border-gray-700/30"
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                    {hoveredSkill === skill && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10 rounded-xl`} />
                    )}
                  </span>
                ))}
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
