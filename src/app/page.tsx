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
      <section className="hero-hd">
        <div className="site-container hero-hd-content">
          <div className="hero-copy reveal-up">
            <p className="hero-kicker">Enjoy a crystal-clear pool</p>
            <h1 className="hero-title text-balance">
              Fast, friendly, and stress-free pool care by <span className="sos-highlight">SOS</span>.
            </h1>
            <p className="hero-subtitle">
              From weekly maintenance to emergency cleanup, we keep your pool sparkling, safe, and ready for family weekends and guest stays.
            </p>
            <ul className="space-y-2 text-[#d9ecf3]">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 size-2 rounded-full bg-[#6fe5db]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="cta-row mt-4">
              <Link href="/contact" className="btn btn-accent">
                Contact Us
              </Link>
              <Link href="/services" className="btn btn-ghost-light">
                Our Services
              </Link>
            </div>
          </div>

          <aside className="hero-float-card reveal-up delay-1">
            <h2 className="mb-3 font-serif text-2xl font-semibold text-[#113646]">Next Open Slot</h2>
            <p className="text-[#355464]">Saturday morning service window available now.</p>
            <div className="clarity-meter mt-4" aria-label="Water Clarity Meter">
              <div className="clarity-fill" />
              <span>Clarity Goal: 98%</span>
            </div>
            <Link href="/booking" className="btn btn-primary mt-4">
              Book An Appointment
            </Link>
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
