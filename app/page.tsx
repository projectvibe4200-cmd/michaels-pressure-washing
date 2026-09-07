"use client";

import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
<header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
    
    <Link href="/" className="text-xl font-bold tracking-tight">
      Michael&apos;s Pressure Washing
    </Link>

   <nav className="hidden gap-8 text-sm font-medium md:flex">
  <Link href="/services" className="hover:text-zinc-500">
    Services
  </Link>
<Link href="/contact" className="hover:text-zinc-500">
  Contact
</Link>
  <Link href="#about" className="hover:text-zinc-500">
    About
  </Link>

  <Link href="#areas" className="hover:text-zinc-500">
    Service Areas
  </Link>

  <Link href="#quote" className="hover:text-zinc-500">
    Get a Quote
  </Link>
</nav>

    <button
      type="button"
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold transition hover:bg-zinc-100 md:hidden"      onClick={() => setMenuOpen(!menuOpen)}
    >
{menuOpen ? "Close" : "Menu"}    </button>

  </div>
  {menuOpen && (
  <div className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden">
    <nav className="flex flex-col gap-4 text-sm font-medium">
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
  href="#about"
  onClick={() => setMenuOpen(false)}
  className="hover:text-zinc-500"
>
  About
</Link>

<Link
  href="#areas"
  onClick={() => setMenuOpen(false)}
  className="hover:text-zinc-500"
>
  Service Areas
</Link>

<Link
  href="#quote"
  onClick={() => setMenuOpen(false)}
  className="hover:text-zinc-500"
>
  Get a Quote
</Link>
    </nav>
  </div>
)}
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
  loading="eager"

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
  Professional pressure washing for your home.
</h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
             We help homeowners improve their property&apos;s appearance by
removing dirt, grime, stains, and surface buildup.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
<article className="rounded-2xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"><div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
  Service 01
</div>
              <h3 className="mt-6 text-2xl font-semibold">
                Driveway Cleaning
              </h3>

<p className="mt-4 leading-7 text-zinc-600">
  Restore the look of your driveway by removing built-up dirt,
  grime, stains, and other surface buildup.
</p><p className="mt-4 text-sm font-medium text-zinc-500">
  Concrete &amp; paved surfaces
</p>
            </article>

            <article className="rounded-2xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
<div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
  Service 02
</div>
              <h3 className="mt-6 text-2xl font-semibold">
                House Washing
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
  Refresh your home&apos;s exterior by removing dirt, grime,
  and buildup that can make your siding look dull and weathered.
</p>
<p className="mt-4 text-sm font-medium text-zinc-500">
  Siding &amp; exterior surfaces
</p>
            </article>

            <article className="rounded-2xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
<div className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
  Service 03
</div>
              <h3 className="mt-6 text-2xl font-semibold">
                Deck &amp; Patio Cleaning
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
  Clean your deck or patio by removing dirt, grime, and surface
  buildup so your outdoor space is ready to enjoy.
</p>
<p className="mt-4 text-sm font-medium text-zinc-500">
  Decks, patios &amp; outdoor spaces
</p>
            </article>
          </div>
<div className="mt-12 text-center">  <a
    href="#quote"
    className="inline-flex items-center rounded-full bg-zinc-950 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
  >
    Get a Free Quote
  </a>
</div>   </div>
      </section>

   {/* About / Why Us */}
<section id="about" className="bg-zinc-100 px-6 py-24">
  <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Why Choose Michael&apos;s?
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight">
        20 years of experience. One family. Quality you can trust.
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Michael&apos;s Pressure Washing is a family-owned and operated
        business with about 20 years of experience helping homeowners
        keep their properties looking their best.
      </p>

      <p className="mt-4 text-lg leading-8 text-zinc-600">
        We believe in doing quality work, treating every property with care,
        and leaving your home looking cleaner, brighter, and better maintained.
      </p>

      <div className="mt-8 space-y-4">
        <div className="flex gap-3">
          <span className="font-bold text-zinc-900">✓</span>
          <p className="text-zinc-600">
            Family owned and operated
          </p>
        </div>

        <div className="flex gap-3">
          <span className="font-bold text-zinc-900">✓</span>
          <p className="text-zinc-600">
            About 20 years of experience
          </p>
        </div>

        <div className="flex gap-3">
          <span className="font-bold text-zinc-900">✓</span>
          <p className="text-zinc-600">
            Serving homeowners throughout the Austin area
          </p>
        </div>
      </div>

      <a
        href="#quote"
        className="mt-8 inline-flex items-center rounded-full bg-zinc-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
      >
        Get a Free Quote
      </a>
    </div>

    <div className="rounded-3xl bg-zinc-950 p-10 text-white">
      <p className="text-6xl font-bold">20+</p>

      <p className="mt-2 text-xl font-semibold">
        Years of experience
      </p>

      <p className="mt-4 leading-7 text-zinc-400">
        Family-owned and operated, serving homeowners throughout Austin
        and the surrounding communities.
      </p>

      <div className="mt-8 border-t border-zinc-800 pt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Local service
        </p>

        <p className="mt-2 text-lg font-semibold text-white">
          Austin, Round Rock, Cedar Park &amp; Pflugerville
        </p>
      </div>
    </div>
  </div>
</section>
<section className="bg-white px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Customer Reviews
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight">
        Trusted by homeowners across the Austin area.
      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-600">
        Here&apos;s what some of our customers say about working with
        Michael&apos;s Pressure Washing.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <article className="rounded-2xl border border-zinc-200 p-8">
        <div className="text-lg tracking-wide">★★★★★</div>

        <p className="mt-5 leading-7 text-zinc-600">
          “The driveway looks completely different. The team was professional,
          quick, and left everything looking great.”
        </p>

        <p className="mt-6 font-semibold">— Sarah M.</p>
        <p className="mt-1 text-sm text-zinc-500">Austin, TX</p>
      </article>

      <article className="rounded-2xl border border-zinc-200 p-8">
        <div className="text-lg tracking-wide">★★★★★</div>

        <p className="mt-5 leading-7 text-zinc-600">
          “Our house had years of dirt buildup on the outside. Michael&apos;s
          Pressure Washing made it look fresh again.”
        </p>

        <p className="mt-6 font-semibold">— James R.</p>
        <p className="mt-1 text-sm text-zinc-500">Round Rock, TX</p>
      </article>

      <article className="rounded-2xl border border-zinc-200 p-8">
        <div className="text-lg tracking-wide">★★★★★</div>

        <p className="mt-5 leading-7 text-zinc-600">
          “Easy to work with, great communication, and the patio came out
          looking fantastic. I&apos;d definitely use them again.”
        </p>

        <p className="mt-6 font-semibold">— Emily T.</p>
        <p className="mt-1 text-sm text-zinc-500">Cedar Park, TX</p>
      </article>
    </div>
  </div>
</section>
<section className="bg-zinc-100 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Before &amp; After
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight">
        See the difference professional cleaning can make.
      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-600">
        Pressure washing can remove years of dirt, grime, stains, and buildup
        from outdoor surfaces.
      </p>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
        <div className="flex h-72 items-center justify-center bg-zinc-300">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Before
          </p>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold">Dirty driveway</h3>
          <p className="mt-2 text-zinc-600">
            Built-up dirt, stains, and surface grime.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
        <div className="flex h-72 items-center justify-center bg-zinc-950">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
            After
          </p>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold">Clean driveway</h3>
          <p className="mt-2 text-zinc-600">
            A refreshed surface with a cleaner, brighter appearance.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-white px-6 py-20">
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-zinc-200 p-8">
        <p className="text-4xl font-bold">20+</p>
        <h3 className="mt-3 text-xl font-bold">
          Years of Experience
        </h3>
        <p className="mt-3 leading-7 text-zinc-600">
          About two decades of experience helping homeowners keep their
          properties looking their best.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-8">
        <p className="text-4xl font-bold">Family</p>
        <h3 className="mt-3 text-xl font-bold">
          Owned &amp; Operated
        </h3>
        <p className="mt-3 leading-7 text-zinc-600">
          A family business focused on treating every customer and property
          with care.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 p-8">
        <p className="text-4xl font-bold">Free</p>
        <h3 className="mt-3 text-xl font-bold">
          No-Obligation Quotes
        </h3>
        <p className="mt-3 leading-7 text-zinc-600">
          Tell us what you need cleaned and get a straightforward quote with
          no pressure.
        </p>
      </div>
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
  Pressure washing across Austin and nearby communities.
</h2>
          </div>

         <div className="mt-12 grid gap-4 sm:grid-cols-4">
  <div className="rounded-2xl bg-zinc-100 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-semibold">Austin</h3>
    <p className="mt-2 text-sm text-zinc-500">
  Pressure washing services
</p>
  </div>

  <div className="rounded-2xl bg-zinc-100 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-semibold">Round Rock</h3>
    <p className="mt-2 text-sm text-zinc-500">
      Pressure washing services
    </p>
  </div>

  <div className="rounded-2xl bg-zinc-100 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-semibold">Cedar Park</h3>
    <p className="mt-2 text-sm text-zinc-500">
      Pressure washing services
    </p>
  </div>

  <div className="rounded-2xl bg-zinc-100 p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
    <h3 className="text-xl font-semibold">Pflugerville</h3>
    <p className="mt-2 text-sm text-zinc-500">
      Pressure washing services
    </p>
  </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-zinc-950 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>

     {/* Quote Form */}
<section id="quote" className="bg-zinc-950 px-6 py-24 text-white">
  <div className="mx-auto max-w-3xl">
 <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
  Free, No-Obligation Quote
</p>
    <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
      Get a Free Quote
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-300">
      Tell us a little about your project and Michael&apos;s Pressure Washing
      will get back to you.
    </p>

<form
  className="mt-10 border-t border-zinc-800 pt-8 space-y-7"
 onSubmit={async (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

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
    alert("Your quote request was sent successfully!");
  } else {
    alert(result.error || "Something went wrong. Please try again.");
  }
}}
>      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
  Name <span className="text-zinc-400">*</span>
</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"
        />
      </div>

      {/* Phone */}
      <div>
       <label htmlFor="phone" className="mb-2 block text-sm font-medium">
  Phone <span className="text-zinc-400">*</span>
</label>
        <input
          id="phone"
          name="phone"
          type="tel"
placeholder="(512) 555-0123"
          required
          autoComplete="tel"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email <span className="text-zinc-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium">
          Service Needed <span className="text-zinc-400">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          autoComplete="off"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-white"
          defaultValue=""
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

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Project Details <span className="text-zinc-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your project..."
          required
className="w-full resize-y rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:border-white"        />
      </div>

      {/* Submit */}
      <button
        type="submit"
className="w-full rounded-full bg-white px-7 py-4 font-bold text-zinc-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-200 hover:shadow-xl"      >
        Request a Free Quote
      </button>
 <p className="text-center text-sm text-zinc-500">
  We&apos;ll review your request and get back to you as soon as possible.
</p>

<div className="mt-6 text-center">
<p className="text-sm font-medium text-zinc-400">
  Prefer to call us directly?
</p>
  <a
    href="tel:9292999611"
    className="mt-1 inline-block text-lg font-semibold text-white underline underline-offset-4 hover:text-zinc-300"
  >
    929-299-9611
 </a>
</div>

<p className="mt-6 text-center text-xs leading-5 text-zinc-600">
  We&apos;ll only use your information to respond to your quote request.
</p>
</form>
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