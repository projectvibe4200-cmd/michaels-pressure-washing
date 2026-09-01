import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
<header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
  Michael&apos;s Pressure Washing
</Link>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
  <Link href="/services" className="hover:text-zinc-500">
    Services
  </Link>
  <Link href="/#about" className="hover:text-zinc-500">
    About
  </Link>
  <Link href="/#areas" className="hover:text-zinc-500">
    Service Areas
  </Link>
  <Link href="/#quote" className="hover:text-zinc-500">
    Get a Quote
  </Link>
</nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Austin, Texas
            </p>

           <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
  Make Your Home Look Brand New.
</h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Professional pressure washing for homeowners in Austin and
              surrounding communities. Family owned and operated with about 20
              years of experience.
            </p>
<div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-zinc-300">
  <span>✓ Family Owned & Operated</span>
  <span>✓ 20+ Years Experience</span>
  <span>✓ Free Quotes</span>
</div>
            <div className="mt-8">
              <a
                href="#quote"
className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-bold text-zinc-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-xl"              >
                Get a Free Quote
              </a>
            </div>
          </div>

         <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-2xl md:min-h-[420px]">
  <img
  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80"
  alt="Professional pressure washing service"
  className="h-full w-full object-cover"
/>
</div>
        </div>
      </section>

<div className="h-1 w-full bg-zinc-800" />

{/* Services */}
<section id="services" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Our Services
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Professional cleaning for your property.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              We help homeowners keep their outdoor surfaces looking clean,
              fresh, and well maintained.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 p-8">
              <div className="text-4xl">🏠</div>

              <h3 className="mt-6 text-2xl font-semibold">
                Driveway Cleaning
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Remove built-up dirt, grime, and stains to give your driveway
                a cleaner, more refreshed appearance.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 p-8">
              <div className="text-4xl">🧼</div>

              <h3 className="mt-6 text-2xl font-semibold">
                House Washing
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Give the exterior of your home a fresh appearance by cleaning
                away accumulated dirt and buildup.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 p-8">
              <div className="text-4xl">🌿</div>

              <h3 className="mt-6 text-2xl font-semibold">
                Deck &amp; Patio Cleaning
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                Clean outdoor living spaces so your deck or patio looks ready
                for relaxing, entertaining, and enjoying.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section id="about" className="bg-zinc-100 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Why Michael&apos;s
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Family owned. Experienced. Local.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Michael&apos;s Pressure Washing is a family-owned and operated
              business with about 20 years of experience in the pressure
              washing industry.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              We believe in doing quality work and helping homeowners take
              pride in the appearance of their property.
            </p>
          </div>

          <div className="rounded-3xl bg-zinc-950 p-10 text-white">
            <p className="text-6xl font-bold">20</p>
            <p className="mt-2 text-xl font-semibold">
              Years of experience
            </p>
            <p className="mt-4 leading-7 text-zinc-400">
              Family-owned and operated, serving homeowners in the Austin
              area.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Service Areas
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Proudly serving the Austin area.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-zinc-100 p-8 text-center">
              <h3 className="text-xl font-semibold">Round Rock</h3>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-8 text-center">
              <h3 className="text-xl font-semibold">Cedar Park</h3>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-8 text-center">
              <h3 className="text-xl font-semibold">Pflugerville</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section id="quote" className="bg-zinc-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to make your property look its best?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Request a free quote from Michael&apos;s Pressure Washing.
          </p>

          <div className="mt-8">
            <button
              type="button"
              className="rounded-full bg-white px-7 py-4 font-semibold text-zinc-950"
            >
              Get a Free Quote
            </button>
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            Contact details and the quote form will be added next.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black px-6 py-8 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} Michael&apos;s Pressure Washing
        </p>
        <p className="mt-2">Austin, Texas</p>
      </footer>
    </main>
  );
}