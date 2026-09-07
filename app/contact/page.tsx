"use client";

import Link from "next/link";
import { useState } from "react";
export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-zinc-900"
        >
          Michael&apos;s Pressure Washing
        </Link>

        <nav className="hidden gap-8 text-sm font-semibold text-zinc-900 md:flex">
          <Link
            href="/services"
            className="text-zinc-900 transition hover:text-zinc-500"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-zinc-900 transition hover:text-zinc-500"
          >
            Contact
          </Link>

          <Link
            href="/#about"
            className="text-zinc-900 transition hover:text-zinc-500"
          >
            About
          </Link>

          <Link
            href="/#areas"
            className="text-zinc-900 transition hover:text-zinc-500"
          >
            Service Areas
          </Link>

          <Link
            href="/#quote"
            className="text-zinc-900 transition hover:text-zinc-500"
          >
            Get a Quote
          </Link>
        </nav> 
        <button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 md:hidden"
>
  {menuOpen ? "Close" : "Menu"}
</button>
      </div>
      {menuOpen && (
  <div className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden">
    <nav className="flex flex-col gap-4 text-sm font-medium">
      <Link
        href="/services"
        onClick={() => setMenuOpen(false)}
        className="text-zinc-900 hover:text-zinc-500"
      >
        Services
      </Link>

      <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className="text-zinc-900 hover:text-zinc-500"
      >
        Contact
      </Link>

      <Link
        href="/#about"
        onClick={() => setMenuOpen(false)}
        className="text-zinc-900 hover:text-zinc-500"
      >
        About
      </Link>

      <Link
        href="/#areas"
        onClick={() => setMenuOpen(false)}
        className="text-zinc-900 hover:text-zinc-500"
      >
        Service Areas
      </Link>

      <Link
        href="/#quote"
        onClick={() => setMenuOpen(false)}
        className="text-zinc-900 hover:text-zinc-500"
      >
        Get a Quote
      </Link>
    </nav>
  </div>
)}
    </header>

    <main className="min-h-screen bg-white text-zinc-900">
  <section className="bg-zinc-950 px-6 py-24 text-white">
    <div className="mx-auto max-w-5xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
        Michael&apos;s Pressure Washing
      </p>

      <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
  Contact Michael&apos;s Pressure Washing
</h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        Ready to get your home looking its best? Contact us today for a free,
        no-obligation quote.
      </p>
    </div>
  </section>
  <section className="px-6 py-24">
  <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Contact Information
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight">
        Let&apos;s talk about your project.
      </h2>

      <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
        Have questions about pressure washing or ready to request a quote?
        Get in touch with Michael&apos;s Pressure Washing today.
      </p>
    </div>

    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-200 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Phone
        </p>

        <a
          href="tel:9292999611"
          className="mt-2 inline-block text-2xl font-bold hover:text-zinc-500"
        >
          929-299-9611
        </a>

        <p className="mt-2 text-sm text-zinc-500">
          Call us to discuss your project.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Service Area
        </p>

        <p className="mt-2 text-xl font-bold">
          Austin &amp; Surrounding Areas
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          Serving Austin, Round Rock, Cedar Park, and Pflugerville.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-zinc-950 px-6 py-24 text-white">
  <div className="mx-auto max-w-3xl">
    <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
      Free, No-Obligation Quote
    </p>

    <h2 className="mt-3 text-center text-4xl font-bold tracking-tight sm:text-5xl">
      Request a Quote
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-300">
      Tell us a little about your project and Michael&apos;s Pressure Washing
      will get back to you.
    </p>

    <form className="mt-10 space-y-7 border-t border-zinc-800 pt-8">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
          Name <span className="text-zinc-400">*</span>
        </label>

        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium">
          Phone <span className="text-zinc-400">*</span>
        </label>

        <input
          id="contact-phone"
          type="tel"
          placeholder="(512) 555-0123"
          required
          autoComplete="tel"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
          Email <span className="text-zinc-400">*</span>
        </label>

        <input
          id="contact-email"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"
        />
      </div>

      <div>
        <label htmlFor="contact-service" className="mb-2 block text-sm font-medium">
          Service Needed <span className="text-zinc-400">*</span>
        </label>

        <select
          id="contact-service"
          defaultValue=""
          required
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-white"
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="house-washing">House Washing</option>
          <option value="driveway-cleaning">Driveway Cleaning</option>
          <option value="patio-cleaning">Patio Cleaning</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
          Project Details <span className="text-zinc-400">*</span>
        </label>

        <textarea
          id="contact-message"
          rows={6}
          placeholder="Tell us about your project..."
          required
          className="w-full resize-y rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-white px-7 py-4 font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-200"
      >
        Request a Free Quote
      </button>

      <p className="text-center text-sm text-zinc-500">
        We&apos;ll review your request and get back to you as soon as possible.
      </p>
    </form>
    <div className="mt-8 text-center">
  <p className="text-sm font-medium text-zinc-400">
    Prefer to call us directly?
  </p>

  <a
    href="tel:9292999611"
    className="mt-2 inline-block text-lg font-semibold text-white underline underline-offset-4 hover:text-zinc-300"
  >
    929-299-9611
  </a>
</div>
  </div>
</section>
<section className="bg-zinc-100 px-6 py-16">
  <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
    <div className="rounded-2xl bg-white p-6 text-center">
      <p className="text-2xl font-bold">20+</p>
      <p className="mt-2 text-sm text-zinc-600">
        Years of experience
      </p>
    </div>

    <div className="rounded-2xl bg-white p-6 text-center">
      <p className="text-2xl font-bold">Local</p>
      <p className="mt-2 text-sm text-zinc-600">
        Austin-area service
      </p>
    </div>

    <div className="rounded-2xl bg-white p-6 text-center">
      <p className="text-2xl font-bold">Free</p>
      <p className="mt-2 text-sm text-zinc-600">
        No-obligation quotes
      </p>
    </div>
  </div>
</section>
</main>
  </>
  );
}