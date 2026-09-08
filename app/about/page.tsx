import Link from "next/link";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />

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
                  A family business built around clean homes and happy
                  customers.
                </h2>

                <p className="mt-6 leading-8 text-zinc-600">
                  Michael&apos;s Pressure Washing has been serving homeowners
                  for about 20 years. As a family owned and operated business,
                  we believe in treating every property with care and every
                  customer with respect.
                </p>

                <p className="mt-5 leading-8 text-zinc-600">
                  We provide professional pressure washing services throughout
                  Austin and nearby communities, helping homeowners keep their
                  outdoor spaces looking clean and well maintained.
                </p>
              </div>

              <div className="rounded-3xl bg-zinc-100 p-8">
                <h2 className="text-2xl font-bold">How We Work</h2>

                <div className="mt-8 space-y-8">
                  <div>
                    <p className="text-sm font-semibold text-zinc-500">01</p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Request a Quote
                    </h3>

                    <p className="mt-2 leading-7 text-zinc-600">
                      Tell us what surfaces you need cleaned and what kind of
                      service you&apos;re looking for.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-500">02</p>

                    <h3 className="mt-2 text-lg font-semibold">
                      Get Your Plan
                    </h3>

                    <p className="mt-2 leading-7 text-zinc-600">
                      We discuss the work needed and determine the right
                      approach for your property.
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-zinc-500">03</p>

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