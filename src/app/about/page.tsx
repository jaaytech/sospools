export default function AboutPage() {
  return (
    <main className="page-section">
      <section className="site-container grid gap-6 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <h1 className="section-title">About SOS Pool LLC</h1>
          <p className="text-[#395566] leading-7">
            SOS Pool LLC is a local-first service company focused on consistent maintenance, clear communication, and long-term water quality.
          </p>
          <p className="text-[#395566] leading-7">
            We document service visits, monitor chemistry trends, and help owners avoid expensive emergency repairs by catching issues early.
          </p>
        </div>

        <div className="hero-card">
          <h2 className="mb-3 text-2xl font-semibold">Why Homeowners Choose Us</h2>
          <ul className="space-y-2 text-[#27414f]">
            <li>• Reliable arrival windows</li>
            <li>• Clear service notes after each visit</li>
            <li>• Proactive recommendations</li>
            <li>• Friendly, no-pressure communication</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
