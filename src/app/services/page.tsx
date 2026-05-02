import Link from "next/link";

const serviceRows = [
  {
    title: "Weekly Cleaning",
    summary:
      "Skimming, brushing, vacuuming, basket cleaning, and chemistry balancing on every visit.",
  },
  {
    title: "Pool Opening & Closing",
    summary:
      "Seasonal prep, startup balancing, and protected close-down with clear checklists.",
  },
  {
    title: "Green Pool Recovery",
    summary:
      "Algae treatment and filtration recovery plans designed to restore safe water quickly.",
  },
  {
    title: "Equipment Watch",
    summary:
      "Routine checks for pumps, filters, chlorinators, and visible leak concerns.",
  },
];

export default function ServicesPage() {
  return (
    <main className="page-section">
      <section className="site-container">
        <h1 className="section-title mb-3">Services Built Around Clean, Reliable Water</h1>
        <p className="mb-8 max-w-3xl text-[#385464]">
          We tailor every plan to your pool size, bather load, and property schedule.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {serviceRows.map((item) => (
            <article key={item.title} className="service-card">
              <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
              <p className="text-[#395566]">{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/booking" className="btn btn-primary">
            Request Service
          </Link>
        </div>
      </section>
    </main>
  );
}
