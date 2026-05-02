import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="site-container hero-grid">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-[#afd8d3] bg-white px-3 py-1 text-sm font-semibold text-[#0c8f88]">
              Trusted Local Pool Care
            </p>
            <h1 className="section-title text-balance">
              The pool service team that keeps your water guest-ready every week.
            </h1>
            <p className="max-w-2xl text-[1.05rem] leading-7 text-[#35515f]">
              SOS Pool LLC provides full-service cleaning, chemistry balancing, and proactive maintenance for busy homeowners and short-term rentals.
            </p>
            <div className="cta-row">
              <Link href="/booking" className="btn btn-primary">
                Start Booking Request
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>

          <aside className="hero-card">
            <h2 className="mb-3 font-serif text-2xl font-semibold">What You Get</h2>
            <ul className="space-y-2 text-[#27414f]">
              <li>• Weekly skimming, brushing, and vacuuming</li>
              <li>• Full chemistry checks with treatment logs</li>
              <li>• Pump, filter, and equipment spot checks</li>
              <li>• Clear service notes after each visit</li>
            </ul>
            <p className="mt-4 rounded-xl bg-[#f2fbfa] p-3 text-sm text-[#2e5969]">
              Most clients choose recurring weekly care. One-time deep clean options are available for openings and post-storm recovery.
            </p>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <h2 className="section-title mb-6">Popular Plans</h2>
          <div className="card-grid">
            <article className="service-card">
              <h3 className="mb-2 text-xl font-semibold">Weekly Essential</h3>
              <p className="text-[#395566]">
                Complete weekly clean, chemistry balancing, and basket checks.
              </p>
            </article>
            <article className="service-card">
              <h3 className="mb-2 text-xl font-semibold">Vacation Rental Ready</h3>
              <p className="text-[#395566]">
                Extra visit flexibility and same-day communication for turnovers.
              </p>
            </article>
            <article className="service-card">
              <h3 className="mb-2 text-xl font-semibold">Recovery + Restore</h3>
              <p className="text-[#395566]">
                Green-to-clean treatment and filtration recovery after neglect.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="site-container rounded-3xl border border-[#dce6ea] bg-white p-6 md:p-9">
          <h2 className="section-title mb-3">Need service this week?</h2>
          <p className="mb-5 max-w-2xl text-[#385464]">
            Submit your booking request and we will confirm your service window.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact SOS Pool LLC
          </Link>
        </div>
      </section>
    </main>
  );
}
