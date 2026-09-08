import Link from "next/link";
import Header from "../components/Header";

export default function Services() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-zinc-900">
        {/* Page Header */}
        <section className="bg-zinc-950 px-6 py-24 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Michael&apos;s Pressure Washing
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
              Pressure Washing Services in Austin
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Professional pressure washing services designed to help keep your
              home&apos;s outdoor surfaces looking clean and well maintained.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-stretch gap-8 md:grid-cols-3">
              {/* Driveway Cleaning */}
              <article className="flex h-full flex-col rounded-3xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Service 01
                </p>

                <h2 className="mt-6 text-2xl font-bold">
                  Driveway Cleaning
                </h2>

                <p className="mt-4 leading-7 text-zinc-600">
                  Give your driveway a cleaner, refreshed appearance by
                  removing built-up dirt, grime, and surface stains.
                </p>

                <div className="mt-8 border-t border-zinc-200 pt-6">
                  <h3 className="font-semibold">What&apos;s included</h3>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <li>✓ Surface cleaning</li>
                    <li>✓ Removal of dirt and buildup</li>
                    <li>✓ Thorough cleaning of the driveway area</li>
                  </ul>

                  <Link
                    href="/#quote"
                    className="mt-8 inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-100"
                  >
                    Request a Quote
                  </Link>
                </div>
              </article>

              {/* House Washing */}
              <article className="flex h-full flex-col rounded-3xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Service 02
                </p>

                <h2 className="mt-6 text-2xl font-bold">
                  House Washing
                </h2>

                <p className="mt-4 leading-7 text-zinc-600">
                  Refresh the exterior appearance of your home by cleaning away
                  accumulated dirt, grime, and buildup.
                </p>

                <div className="mt-8 border-t border-zinc-200 pt-6">
                  <h3 className="font-semibold">What&apos;s included</h3>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <li>✓ Exterior surface cleaning</li>
                    <li>✓ Removal of dirt and buildup</li>
                    <li>✓ Careful cleaning around your home</li>
                  </ul>

                  <Link
                    href="/#quote"
                    className="mt-8 inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-100"
                  >
                    Request a Quote
                  </Link>
                </div>
              </article>

              {/* Deck & Patio Cleaning */}
              <article className="flex h-full flex-col rounded-3xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Service 03
                </p>

                <h2 className="mt-6 text-2xl font-bold">
                  Deck &amp; Patio Cleaning
                </h2>

                <p className="mt-4 leading-7 text-zinc-600">
                  Clean your outdoor living spaces so your deck or patio looks
                  fresh and ready for relaxing or entertaining.
                </p>

                <div className="mt-8 border-t border-zinc-200 pt-6">
                  <h3 className="font-semibold">What&apos;s included</h3>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                    <li>✓ Surface cleaning</li>
                    <li>✓ Removal of dirt and buildup</li>
                    <li>✓ Cleaning of outdoor living areas</li>
                  </ul>

                  <Link
                    href="/#quote"
                    className="mt-8 inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-100"
                  >
                    Request a Quote
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Quote CTA */}
        <section className="bg-zinc-100 px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight">
              Ready to make your home look its best?
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Get in touch with Michael&apos;s Pressure Washing today for a
              free, no-obligation quote.
            </p>

            <Link
              href="/#quote"
              className="mt-8 inline-flex rounded-full bg-zinc-950 px-7 py-4 font-semibold text-white transition hover:bg-zinc-800"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}