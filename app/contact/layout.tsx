import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Michael's Pressure Washing | Austin, TX",
  description:
    "Contact Michael's Pressure Washing for a free, no-obligation quote. Serving Austin, Round Rock, Cedar Park, and Pflugerville.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}