export default function ContactPage() {
  return (
    <main className="page-section">
      <section className="site-container max-w-3xl space-y-4 rounded-2xl border border-[#dce6ea] bg-white p-6 md:p-8">
        <h1 className="section-title">Contact SOS Pool LLC</h1>
        <p className="text-[#395566]">
          Reach out for service availability, quote requests, or urgent water quality concerns.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-[#dce6ea] bg-[#f6fbfb] p-4">
            <h2 className="mb-2 text-lg font-semibold">Call or Text</h2>
            <p className="text-[#35515f]">754 316 2012</p>
          </article>
          <article className="rounded-xl border border-[#dce6ea] bg-[#fff8f3] p-4">
            <h2 className="mb-2 text-lg font-semibold">Email</h2>
            <p className="text-[#35515f]">service@sospoolllc.com</p>
          </article>
        </div>
      </section>
    </main>
  );
}
