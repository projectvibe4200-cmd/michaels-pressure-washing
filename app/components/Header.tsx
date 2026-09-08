"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
              href="/#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-xl bg-blue-600 px-4 py-4 font-bold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get a Free Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}