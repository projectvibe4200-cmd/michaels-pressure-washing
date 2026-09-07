"use client";

import Link from "next/link";
import { useState } from "react";
export default function About() {
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
            href="/about"
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
        <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-900">
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-zinc-500"
          >
            Services
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-zinc-500"
          >
            Contact
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-zinc-500"
          >
            About
          </Link>

          <Link
            href="/#areas"
            onClick={() => setMenuOpen(false)}
            className="hover:text-zinc-500"
          >
            Service Areas
          </Link>

          <Link
            href="/#quote"
            onClick={() => setMenuOpen(false)}
            className="hover:text-zinc-500"
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
  The Michael&apos;s Difference
</h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Family owned and operated, serving homeowners in the Austin area
            for about 20 years.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Our Story
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                A family business built around clean homes and happy customers.
              </h2>

              <p className="mt-6 leading-8 text-zinc-600">
                Michael&apos;s Pressure Washing has been serving homeowners for
                about 20 years. As a family owned and operated business, we
                believe in treating every property with care and every
                customer with respect.
              </p>

              <p className="mt-5 leading-8 text-zinc-600">
                We provide professional pressure washing services throughout
                Austin and nearby communities, helping homeowners keep their
                outdoor spaces looking clean and well maintained.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-100 p-8">
              <h2 className="text-2xl font-bold">
                How We Work
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    01
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Request a Quote
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-600">
                    Tell us what surfaces you need cleaned and what kind of
                    service you&apos;re looking for.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    02
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Get Your Plan
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-600">
                    We discuss the work needed and determine the right
                    approach for your property.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    03
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Enjoy a Cleaner Property
                  </h3>
                  <p className="mt-2 leading-7 text-zinc-600">
                    We complete the agreed-upon cleaning and leave your
                    property looking refreshed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Serving the Austin Area
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Michael&apos;s Pressure Washing serves Austin and nearby
            communities including Round Rock, Cedar Park, and Pflugerville.
          </p>
             </div>
    </section>
  </main>
</>
);
}