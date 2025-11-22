"use client";

import { ExternalLink, Github, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Imaginary - Image Processing Platform",
      year: "2024",
      description:
        "Developed full-stack image processing web application with advanced editing capabilities and cloud storage integration. Implemented Cloudinary API for scalable image storage, manipulation, and optimization with 99% uptime.",
      technologies: ["React.js", "Next.js", "Cloudinary", "Tailwind CSS"],
      liveUrl: "https://imaginary-gules.vercel.app/",
      githubUrl: "https://github.com/Taki7980/Imaginary",
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "blue",
      featured: true,
    },
    {
      title: "Clay Enterprise - Website Copy",
      year: "2023",
      description:
        "A responsive clone of the Clay Enterprise website with modern UI and optimized image handling. Implemented key design elements, interactive components, and Cloudinary integration for image management.",
      technologies: [
        "React.js",
        "Next.js",
        "shadcnUI",
        "Tailwind CSS",
        "Cloudinary",
      ],
      liveUrl: "https://clay-psi.vercel.app/",
      githubUrl: "https://github.com/Taki7980/clay",
      gradient: "from-sky-500/20 to-purple-500/20",
      accentColor: "sky",
    },
    {
      title: "Food You and Me",
      year: "2024",
      description:
        "Built a sleek and responsive food detail finder web application using Next.js and Zustand for state management. Designed to fetch and display curated food data with clean UI and fast navigation.",
      technologies: ["Next.js", "TailwindCSS", "Zustand"],
      liveUrl: "https://food-you-me.vercel.app/",
      githubUrl: "https://github.com/Taki7980/food_you_and_me",
      gradient: "from-emerald-400/20 to-yellow-300/20",
      accentColor: "emerald",
    },
    {
      title: "AI Chat Bot - Conversational AI Application",
      year: "2025",
      description:
        "Built intelligent chatbot application with natural language processing capabilities and real-time messaging. Integrated Firebase for real-time database management, user authentication, and session handling.",
      technologies: ["Next.js", "Firebase", "Shadcn UI", "JavaScript"],
      liveUrl: "https://aichatbot-three-hazel.vercel.app/",
      githubUrl: "https://github.com/Taki7980/aichatbot",
      gradient: "from-green-500/20 to-teal-500/20",
      accentColor: "green",
    },
    {
      title: "Cool-Crawler - Web Scraping Tool",
      year: "2023",
      description:
        "Developed web scraping application for automated data extraction and analysis with 95% accuracy. Created RESTful API endpoints for efficient data processing and frontend interface for data visualization.",
      technologies: ["Node.js", "Express.js", "Cheerio", "React.js", "MongoDB"],
      liveUrl: "https://cool-crawler-5k1v.vercel.app/",
      githubUrl: "https://github.com/Taki7980/Cool_Crawler",
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "orange",
    },
    {
      title: "Admin Dashboard",
      year: "2025",
      description:
        "Developed a responsive and modern admin dashboard interface for managing users, products, and analytics. Utilized Shadcn UI components for consistent UI/UX and TailwindCSS for utility-first styling.",
      technologies: ["Next.js", "TailwindCSS", "ShadcnUI"],
      liveUrl: "https://dashboard-liart-two.vercel.app/",
      githubUrl: "https://github.com/Taki7980/dashboard",
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
    },
    {
      title: "MyValentine - Troll Web App",
      year: "2024",
      description:
        "Created a humorous Valentine's Day troll web app that appears romantic but leads to a classic Rickroll surprise. Built with Next.js and TailwindCSS for fast performance and responsive design.",
      technologies: ["Next.js", "TailwindCSS"],
      liveUrl: "https://valentine-two-opal.vercel.app/",
      githubUrl: "https://github.com/Taki7980/valentine",
      gradient: "from-rose-500/20 to-red-500/20",
      accentColor: "rose",
    },
    {
      title: "KnightRunner - 2D Platformer Game",
      year: "2024",
      description:
        "Developed a retro-styled 2D platformer game using the Godot Engine featuring smooth character animations, obstacle-based gameplay, and collectible items. Designed custom tilemaps, parallax backgrounds, and implemented enemy AI.",
      technologies: ["Godot Engine", "GDScript", "TileMap", "2D Animation"],
      liveUrl: "",
      githubUrl: "https://github.com/Taki7980/knightgame",
      gradient: "from-yellow-400/20 to-rose-500/20",
      accentColor: "yellow",
    },
    {
      title: "AllmightyAPI - Express REST API",
      year: "2025",
      description: "Built a production-ready REST API using Express.js with Docker containerization, Neon PostgreSQL database, and comprehensive security features. Implemented JWT authentication, role-based access control, Drizzle ORM for database operations, and Arcjet for bot detection and rate limiting. Features ephemeral database branches for development and production-ready Docker setup.",
      technologies: [
        "Express.js",
        "Node.js",
        "Docker",
        "Neon PostgreSQL",
        "Drizzle ORM",
        "JWT Auth",
        "Arcjet Security",
        "Winston Logger",
        "Zod Validation"
      ],
      liveUrl: "",
      githubUrl: "https://github.com/Taki7980/AllmightyAPI",
      gradient: "from-cyan-400/20 to-blue-600/20",
      accentColor: "cyan"
    },
  ];

  // Static color mapping for proper Tailwind compilation
  type AccentColor =
    | "blue"
    | "sky"
    | "emerald"
    | "green"
    | "orange"
    | "purple"
    | "rose"
    | "yellow";

  type AccentClasses = {
    titleGradient: string;
    yearBg: string;
    techBg: string;
    buttonBg: string;
    particle1: string;
    particle2: string;
    particle3: string;
  };

  const colorMap: Record<AccentColor, AccentClasses> = {
    blue: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 border-blue-200/50 dark:border-blue-800/50",
      techBg: "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-800/50",
      buttonBg: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-500/25",
      particle1: "bg-blue-400",
      particle2: "bg-blue-500",
      particle3: "bg-blue-300",
    },
    sky: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-sky-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-sky-100 to-sky-200 dark:from-sky-900/30 dark:to-sky-800/30 border-sky-200/50 dark:border-sky-800/50",
      techBg: "bg-gradient-to-r from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200/50 dark:border-sky-800/50",
      buttonBg: "bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 hover:shadow-sky-500/25",
      particle1: "bg-sky-400",
      particle2: "bg-sky-500",
      particle3: "bg-sky-300",
    },
    emerald: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-emerald-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30 border-emerald-200/50 dark:border-emerald-800/50",
      techBg: "bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-950/30 dark:to-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-800/50",
      buttonBg: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-emerald-500/25",
      particle1: "bg-emerald-400",
      particle2: "bg-emerald-500",
      particle3: "bg-emerald-300",
    },
    green: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-green-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 border-green-200/50 dark:border-green-800/50",
      techBg: "bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 text-green-700 dark:text-green-300 border-green-200/50 dark:border-green-800/50",
      buttonBg: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:shadow-green-500/25",
      particle1: "bg-green-400",
      particle2: "bg-green-500",
      particle3: "bg-green-300",
    },
    orange: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 border-orange-200/50 dark:border-orange-800/50",
      techBg: "bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200/50 dark:border-orange-800/50",
      buttonBg: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-500/25",
      particle1: "bg-orange-400",
      particle2: "bg-orange-500",
      particle3: "bg-orange-300",
    },
    purple: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-purple-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 border-purple-200/50 dark:border-purple-800/50",
      techBg: "bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200/50 dark:border-purple-800/50",
      buttonBg: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 hover:shadow-purple-500/25",
      particle1: "bg-purple-400",
      particle2: "bg-purple-500",
      particle3: "bg-purple-300",
    },
    rose: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-rose-500 group-hover:to-rose-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-rose-100 to-rose-200 dark:from-rose-900/30 dark:to-rose-800/30 border-rose-200/50 dark:border-rose-800/50",
      techBg: "bg-gradient-to-r from-rose-50 to-rose-100 dark:from-rose-950/30 dark:to-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200/50 dark:border-rose-800/50",
      buttonBg: "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 hover:shadow-rose-500/25",
      particle1: "bg-rose-400",
      particle2: "bg-rose-500",
      particle3: "bg-rose-300",
    },
    yellow: {
      titleGradient: "group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-yellow-700 group-hover:bg-clip-text group-hover:text-transparent",
      yearBg: "bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 border-yellow-200/50 dark:border-yellow-800/50",
      techBg: "bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-950/30 dark:to-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200/50 dark:border-yellow-800/50",
      buttonBg: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 hover:shadow-yellow-500/25",
      particle1: "bg-yellow-400",
      particle2: "bg-yellow-500",
      particle3: "bg-yellow-300",
    },
  };

  const getAccentClasses = (accentColor: string): AccentClasses => {
    if (accentColor in colorMap) {
      return colorMap[accentColor as AccentColor];
    }
    return colorMap.blue;
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-950/10 dark:via-transparent dark:to-blue-950/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Key Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getAccentClasses(project.accentColor);

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-3 ${project.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
                />

                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                <div className="relative bg-card/80 backdrop-blur-xl p-8 h-full border border-white/20 dark:border-gray-800/20 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className={`text-xl font-bold text-foreground ${colorClasses.titleGradient} transition-all duration-300`}>
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm text-muted-foreground ${colorClasses.yearBg} px-3 py-1 rounded-full`}>
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 ${colorClasses.techBg} rounded-xl text-xs font-medium hover:scale-105 transition-transform duration-200`}
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className={`group/link flex items-center space-x-2 ${colorClasses.buttonBg} text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink
                          size={16}
                          className="group-hover/link:rotate-45 transition-transform duration-300"
                        />
                        <span className="text-sm font-medium">Live Demo</span>
                      </Link>
                    )}
                    <Link
                      href={project.githubUrl}
                      className="group/link flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github
                        size={16}
                        className="group-hover/link:rotate-12 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium">Code</span>
                    </Link>
                  </div>

                  {/* Hover effect particles */}
                  {hoveredProject === index && (
                    <>
                      <div className={`absolute top-8 right-8 w-2 h-2 ${colorClasses.particle1} rounded-full animate-ping`} />
                      <div className={`absolute bottom-8 left-8 w-1 h-1 ${colorClasses.particle2} rounded-full animate-pulse`} />
                      <div className={`absolute top-1/2 left-4 w-1.5 h-1.5 ${colorClasses.particle3} rounded-full animate-bounce`} />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
