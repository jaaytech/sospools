"use client";

import { FormEvent, useState } from "react";

export default function BookingPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main className="page-section">
      <section className="site-container max-w-3xl">
        <h1 className="section-title mb-3">Booking Request</h1>
        <p className="mb-6 text-[#395566]">
          Submit a request and we will follow up with availability and a recommended service plan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-[#dce6ea] bg-white p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-[#24404d]">
              Full Name
              <input className="mt-1 w-full rounded-xl border border-[#c6d7dd] p-3" name="name" required />
            </label>
            <label className="text-sm font-semibold text-[#24404d]">
              Phone
              <input className="mt-1 w-full rounded-xl border border-[#c6d7dd] p-3" name="phone" required />
            </label>
          </div>

          <label className="block text-sm font-semibold text-[#24404d]">
            Property Address
            <input className="mt-1 w-full rounded-xl border border-[#c6d7dd] p-3" name="address" required />
          </label>

          <label className="block text-sm font-semibold text-[#24404d]">
            Service Notes
            <textarea className="mt-1 w-full rounded-xl border border-[#c6d7dd] p-3" rows={4} name="notes" placeholder="Pool size, current condition, preferred day/time" />
          </label>

          <button className="btn btn-primary" type="submit">
            Send Request
          </button>

          {sent ? (
            <p className="rounded-xl bg-[#e9f9f5] p-3 text-sm font-semibold text-[#1e6158]">
              Request received. We will contact you shortly.
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
