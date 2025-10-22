export function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Webliverse",
      location: "Remote",
      period: "August 2023 - March 2025",
      achievements: [
        "Managed and maintained 15+ client websites using WordPress, Elementor CMS, and custom HTML/CSS solutions",
        "Performed troubleshooting and technical issue resolution, reducing downtime by 30%",
        "Implemented website optimizations and performance improvements using caching strategies and code optimization",
      ],
    },
    {
      title: "Website Manager",
      company: "Aventilysi",
      location: "Howrah, West Bengal",
      period: "March 2023 - August 2023",
      achievements: [
        "Managed website content management system and product catalog updates for e-commerce platform",
        "Optimized website performance through systematic improvements, caching strategies, and database optimization",
        "Maintained website security protocols and implemented regular updates, backups, and security patches",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-foreground/80 font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-muted-foreground flex items-start group/item">
                    <span className="text-primary mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
