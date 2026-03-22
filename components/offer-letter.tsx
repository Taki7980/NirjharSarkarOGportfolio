import { Building2, CalendarDays, IndianRupee, MapPin, ShieldCheck } from "lucide-react"

const responsibilities = [
  "Manage backend configurations for GPS/IoT devices and related software platforms.",
  "Assist with testing, activation, and remote troubleshooting for deployed devices.",
  "Maintain records for installations, service requests, and technical issue resolution.",
  "Generate technical reports and MIS data for the operations and management teams.",
  "Coordinate with sales, support, and field teams to keep service delivery smooth.",
  "Handle CRM updates, invoicing support, data entry, and technical documentation control.",
]

const salaryBreakdown = [
  { label: "Gross Salary", value: "Rs. 12,000 / month" },
  { label: "Professional Tax", value: "Rs. 110 / month" },
  { label: "Net Salary", value: "Rs. 11,890 / month" },
  { label: "Annual CTC", value: "Rs. 1,44,000" },
]

export function OfferLetter() {
  return (
    <section id="offer-letter" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-cyan-50/40 dark:from-emerald-950/15 dark:via-transparent dark:to-cyan-950/10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-emerald-200/60 bg-emerald-100/70 px-4 py-2 backdrop-blur-sm dark:border-emerald-800/50 dark:bg-emerald-900/20">
            <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-300" />
            <span className="text-sm font-medium text-emerald-800 dark:text-emerald-200">Verified Career Update</span>
          </div>
          <h2 className="mt-4 text-4xl font-bold bg-gradient-to-r from-emerald-900 to-cyan-700 bg-clip-text text-transparent dark:from-emerald-100 dark:to-cyan-200">
            Employment Offer
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground">
            A formal offer received from Hunteyed Tech Private Limited for a back-office technical support role,
            reflecting hands-on operational and technical coordination experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-3xl border border-emerald-200/60 bg-card/80 p-8 shadow-lg shadow-emerald-500/5 backdrop-blur-sm dark:border-emerald-900/60">
            <div className="flex flex-col gap-6 border-b border-border/60 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Offer Letter Issued
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Back-office Technical Support Executive</h3>
                  <p className="mt-1 flex items-center gap-2 text-foreground/80">
                    <Building2 className="h-4 w-4 text-emerald-600" />
                    Hunteyed Tech Private Limited
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-muted/50 px-4 py-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-cyan-600" />
                  Issued: 13 February 2026
                </p>
                <p className="mt-2">Acceptance deadline: 16 February 2026</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                <p className="text-sm text-muted-foreground">Reporting Authority</p>
                <p className="mt-1 font-medium text-foreground">Technical Manager / Operations Head</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                <p className="text-sm text-muted-foreground">Work Location</p>
                <p className="mt-1 flex items-start gap-2 font-medium text-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
                  82/3A, Narendra Nagar, Belghoria, near Baranagar Metro Gate, Dunlop, Kolkata 700056
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground">Role Scope</h4>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                The offer positions you in a backend technical operations role focused on device configuration,
                reporting, documentation, troubleshooting, and coordination across technical and customer-facing teams.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground">Key Responsibilities</h4>
              <div className="mt-4 grid gap-3">
                {responsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/70 p-4"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                    <p className="leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-cyan-200/60 bg-card/80 p-6 shadow-lg shadow-cyan-500/5 backdrop-blur-sm dark:border-cyan-900/60">
              <div className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-cyan-600" />
                <h3 className="text-xl font-semibold text-foreground">Compensation Snapshot</h3>
              </div>

              <div className="mt-5 space-y-3">
                {salaryBreakdown.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-muted/40 px-4 py-3">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-1 font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-foreground">Offer Notes</h3>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>The company requested signed acceptance along with Aadhaar Card and PAN Card copies.</p>
                <p>
                  The letter states that a fresh appointment letter would be issued after confirmation of acceptance.
                </p>
                <p>
                  The training and observation clause notes that compensation would be paid on a pro-rata basis if the
                  company ended the engagement during that initial suitability review.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200/60 bg-amber-50/70 p-6 dark:border-amber-900/60 dark:bg-amber-950/20">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                Why this is here
              </p>
              <p className="mt-3 leading-relaxed text-amber-900/80 dark:text-amber-100/80">
                This section documents a formal employment offer as part of the portfolio narrative, giving recruiters
                more context around role alignment, operational ownership, and verified career momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
