import Link from "next/link";

export default function Home() {
  const highlights = [
    "Weekly cleaning and chemistry balancing",
    "Vacation rental turnover support",
    "Equipment watch and early issue alerts",
  ];

  const metrics = [
    { label: "Pools serviced monthly", value: "120+" },
    { label: "Avg. response time", value: "< 2 hrs" },
    { label: "Client retention", value: "94%" },
  ];

  const process = [
    {
      step: "1",
      title: "Request",
      text: "Tell us your pool details, location, and preferred service schedule.",
    },
    {
      step: "2",
      title: "Plan",
      text: "We recommend the right frequency and treatment plan for your water profile.",
    },
    {
      step: "3",
      title: "Maintain",
      text: "You get consistent visits, chemistry logs, and clear notes after every service.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Our rental pool is finally predictable. Guests always arrive to clear water.",
      author: "Property Manager",
    },
    {
      quote:
        "They caught a filter issue early and saved us from a major repair bill.",
      author: "Homeowner",
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="space-y-5 reveal-up">
            <p className="pill">
              SOS Pool LLC | Trusted Local Pool Care
            </p>
            <h1 className="section-title text-balance">
              A cleaner, safer pool every week without the stress.
            </h1>
            <p className="max-w-2xl text-[1.05rem] leading-7 text-[#35515f]">
              We handle cleaning, balancing, and maintenance so your pool stays crystal-clear for family days and guest check-ins.
            </p>
            <ul className="space-y-2 text-[#27414f]">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 size-2 rounded-full bg-[#0c8f88]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="cta-row">
              <Link href="/booking" className="btn btn-primary">
                Start Booking Request
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <aside className="hero-card reveal-up delay-1">
            <h2 className="mb-4 font-serif text-2xl font-semibold">This Week At A Glance</h2>
            <div className="space-y-3">
              <div className="stat-row">
                <span>Next available start</span>
                <strong>Monday</strong>
              </div>
              <div className="stat-row">
                <span>Service cadence</span>
                <strong>Weekly / Bi-weekly</strong>
              </div>
              <div className="stat-row">
                <span>Coverage area</span>
                <strong>Local + nearby zip codes</strong>
              </div>
            </div>
            <p className="mt-4 rounded-xl bg-[#f2fbfa] p-3 text-sm text-[#2e5969]">
              Fast response for green water, storms, and urgent chemistry corrections.
            </p>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <h2 className="section-title mb-6 reveal-up">Popular Service Plans</h2>
          <div className="card-grid">
            <article className="service-card reveal-up delay-1">
              <h3 className="mb-2 text-xl font-semibold">Weekly Essential</h3>
              <p className="text-[#395566]">
                Complete weekly clean, chemistry balancing, and basket checks.
              </p>
            </article>
            <article className="service-card reveal-up delay-2">
              <h3 className="mb-2 text-xl font-semibold">Vacation Rental Ready</h3>
              <p className="text-[#395566]">
                Extra visit flexibility and same-day communication for turnovers.
              </p>
            </article>
            <article className="service-card reveal-up delay-3">
              <h3 className="mb-2 text-xl font-semibold">Recovery + Restore</h3>
              <p className="text-[#395566]">
                Green-to-clean treatment and filtration recovery after neglect.
              </p>
            </article>
          </div>

          <div className="metrics-grid reveal-up">
            {metrics.map((item) => (
              <article key={item.label} className="metric-card">
                <p className="metric-value">{item.value}</p>
                <p className="metric-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <h2 className="section-title mb-6 reveal-up">How It Works</h2>
          <div className="process-grid">
            {process.map((item, index) => (
              <article key={item.title} className={`service-card reveal-up delay-${index + 1}`}>
                <p className="step-chip">Step {item.step}</p>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-[#395566]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="site-container">
          <h2 className="section-title mb-6 reveal-up">What Clients Say</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <blockquote key={item.author} className={`service-card reveal-up delay-${index + 1}`}>
                <p className="text-lg text-[#24414e]">&quot;{item.quote}&quot;</p>
                <footer className="mt-3 text-sm font-semibold text-[#456172]">- {item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="site-container cta-panel reveal-up">
          <h2 className="section-title mb-3">Need service this week?</h2>
          <p className="mb-5 max-w-2xl text-[#385464]">
            Send your booking request now and we will confirm your service window fast.
          </p>
          <div className="cta-row">
            <Link href="/booking" className="btn btn-primary">
              Get Started
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact SOS Pool LLC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
