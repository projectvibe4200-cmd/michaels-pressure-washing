"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="max-w-[180px] text-lg font-black leading-tight tracking-tight sm:max-w-none sm:text-xl"
          >
            Michael&apos;s Pressure Washing
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-semibold text-zinc-700 transition hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-zinc-700 transition hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-zinc-700 transition hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-zinc-700 transition hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:9292999611"
              aria-label="Call Michael's Pressure Washing"
              className="flex h-10 items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Call
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="flex h-10 items-center justify-center rounded-full border border-zinc-300 px-4 text-sm font-semibold text-zinc-900"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t-2 border-blue-600 bg-zinc-50 px-5 py-5 shadow-lg md:hidden">
            <div className="mb-3 px-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Navigation
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white px-4 py-4 font-bold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-blue-600 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white px-4 py-4 font-bold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-blue-600 hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white px-4 py-4 font-bold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-blue-600 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-white px-4 py-4 font-bold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-blue-600 hover:text-white"
              >
                Contact
              </Link>

              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center rounded-xl bg-blue-600 px-4 py-4 font-bold text-white shadow-sm transition hover:bg-blue-700"
              >
                Get a Free Quote
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Austin, Texas
            </p>

            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Professional Pressure Washing in Austin, TX.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Restore your home&apos;s exterior with dependable pressure
              washing services from a family-owned local business with 20+
              years of experience. Serving Austin and surrounding communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-zinc-300">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                20+ Years Experience
              </span>

              <span className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Family Owned
              </span>

              <span className="flex items-center gap-2">
                <span className="text-blue-400">✓</span>
                Free Quotes
              </span>
            </div>

            <div className="mt-9">
              <a
                href="#quote"
                className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Get a Free Quote
              </a>

              <p className="mt-3 text-sm text-zinc-400">
                Free estimates • No obligation
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80"
              alt="Professional pressure washing service in Austin, Texas"
              loading="eager"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-600" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What We Do
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Professional Cleaning That Makes a Difference
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              We help homeowners restore the appearance of their property with
              reliable pressure washing services.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-600">
                01
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Driveway Cleaning
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Remove dirt, grime, stains, and buildup to give your driveway
                a cleaner, brighter appearance.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-600">
                02
              </div>

              <h3 className="mt-6 text-2xl font-black">
                House Washing
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Freshen up your home&apos;s exterior by removing dirt, algae,
                and other buildup from exterior surfaces.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-lg font-black text-blue-600">
                03
              </div>

              <h3 className="mt-6 text-2xl font-black">
                Deck &amp; Patio Cleaning
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Restore outdoor living spaces by removing grime and buildup
                from decks, patios, and other hard surfaces.
              </p>
            </article>
          </div>

          <a
            href="#quote"
            className="mt-10 inline-flex items-center rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* About */}
      <section className="bg-zinc-100 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-600" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why Michael&apos;s
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              A Local Business You Can Count On
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Michael&apos;s Pressure Washing has been serving homeowners for
              about 20 years. We are family owned and operated, and we take
              pride in delivering dependable service and quality results.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 font-black text-blue-600">✓</span>
                <p className="font-semibold text-zinc-800">
                  About 20 years of experience
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 font-black text-blue-600">✓</span>
                <p className="font-semibold text-zinc-800">
                  Family owned and operated
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 font-black text-blue-600">✓</span>
                <p className="font-semibold text-zinc-800">
                  Free quotes with no pressure
                </p>
              </div>
            </div>

            <a
              href="#quote"
              className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Get a Free Quote
            </a>
          </div>

          <div className="rounded-3xl bg-zinc-950 p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Local &amp; Reliable
            </p>

            <h3 className="mt-4 text-3xl font-black">
              Your property deserves to look its best.
            </h3>

            <p className="mt-5 leading-8 text-zinc-300">
              From driveways and patios to the exterior of your home, we help
              bring tired-looking surfaces back to life.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-600" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Customer Feedback
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Homeowners Love the Results
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Sample testimonials for this practice project.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
              <p className="text-lg tracking-widest text-blue-600">
                ★★★★★
              </p>

              <p className="mt-5 leading-7 text-zinc-600">
                “Our driveway looks completely different. The whole process
                was easy and professional.”
              </p>

              <p className="mt-6 font-bold">Sarah M.</p>
              <p className="text-sm text-zinc-500">Austin, TX</p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
              <p className="text-lg tracking-widest text-blue-600">
                ★★★★★
              </p>

              <p className="mt-5 leading-7 text-zinc-600">
                “Great communication and excellent work. Our patio looks brand
                new again.”
              </p>

              <p className="mt-6 font-bold">James R.</p>
              <p className="text-sm text-zinc-500">Round Rock, TX</p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
              <p className="text-lg tracking-widest text-blue-600">
                ★★★★★
              </p>

              <p className="mt-5 leading-7 text-zinc-600">
                “Very happy with the results. The team was friendly,
                professional, and on time.”
              </p>

              <p className="mt-6 font-bold">Emily T.</p>
              <p className="text-sm text-zinc-500">Cedar Park, TX</p>
            </article>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="bg-zinc-100 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-600" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Results
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              See the Difference
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Before-and-after images will be added later. These blocks are
              placeholders for the practice project.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="flex min-h-[320px] items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-200">
              <div className="text-center">
                <p className="font-black text-zinc-700">Before Photo</p>
                <p className="mt-2 text-sm text-zinc-500">
                  Placeholder for a real project image
                </p>
              </div>
            </div>

            <div className="flex min-h-[320px] items-center justify-center rounded-3xl border-2 border-dashed border-blue-200 bg-blue-50">
              <div className="text-center">
                <p className="font-black text-blue-700">After Photo</p>
                <p className="mt-2 text-sm text-blue-600">
                  Placeholder for a real project image
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-8">
            <p className="text-4xl font-black text-blue-600">20+</p>
            <p className="mt-2 font-semibold">Years of Experience</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Decades of experience serving homeowners.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8">
            <p className="text-4xl font-black text-blue-600">Family</p>
            <p className="mt-2 font-semibold">Owned &amp; Operated</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Local service with a personal touch.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8">
            <p className="text-4xl font-black text-blue-600">Free</p>
            <p className="mt-2 font-semibold">Quotes</p>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Get an estimate without pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-zinc-950 px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-400" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Service Areas
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Proudly Serving the Austin Area
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Michael&apos;s Pressure Washing serves homeowners throughout
              Austin and nearby communities.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Austin", "Round Rock", "Cedar Park", "Pflugerville"].map(
              (city) => (
                <span
                  key={city}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-200"
                >
                  {city}
                </span>
              ),
            )}
          </div>

          <a
            href="#quote"
            className="mt-10 inline-flex items-center rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Quote Form */}
      <section
        id="quote"
        className="bg-zinc-950 px-6 py-20 text-white md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-400" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Free Estimate
              </p>
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Let&apos;s Get Your Property Looking Its Best
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              Tell us a little about your project and we&apos;ll get back to
              you about your free quote.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Prefer to call?
              </p>

              <a
                href="tel:9292999611"
                className="mt-2 inline-block text-2xl font-black text-blue-400 hover:text-blue-300"
              >
                929-299-9611
              </a>
            </div>
          </div>

          <form
            aria-label="Request a free quote"
            onSubmit={async (event) => {
              event.preventDefault();

              const form = event.currentTarget;
              const formData = new FormData(form);

              const response = await fetch("/api/quote", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: formData.get("name"),
                  phone: formData.get("phone"),
                  email: formData.get("email"),
                  service: formData.get("service"),
                  message: formData.get("message"),
                }),
              });

              const result = await response.json();

              if (response.ok) {
                setSubmitted(true);
                form.reset();
              } else {
                alert(
                  result.error ||
                    "Something went wrong. Please try again.",
                );
              }
            }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl md:p-8"
          >
            {submitted && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-2xl bg-zinc-800 px-4 py-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                  ✓
                </div>

                <div>
                  <p className="font-bold text-white">
                    Quote request sent!
                  </p>

                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    Thanks for reaching out. We&apos;ll get back to you as
                    soon as possible.
                  </p>
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-zinc-200"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-zinc-200"
              >
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                placeholder="Your phone number"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-zinc-200"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="service"
                className="text-sm font-semibold text-zinc-200"
              >
                Service
              </label>

              <select
                id="service"
                name="service"
                autoComplete="off"
                required
                className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="Driveway Cleaning">
                  Driveway Cleaning
                </option>

                <option value="House Washing">
                  House Washing
                </option>

                <option value="Deck & Patio Cleaning">
                  Deck &amp; Patio Cleaning
                </option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-zinc-200"
              >
                Tell us about your project
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                placeholder="What would you like cleaned?"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Request a Free Quote
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black">Michael&apos;s Pressure Washing</p>
            <p className="mt-1 text-sm text-zinc-500">
              Serving Austin and surrounding communities.
            </p>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 Michael&apos;s Pressure Washing. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}