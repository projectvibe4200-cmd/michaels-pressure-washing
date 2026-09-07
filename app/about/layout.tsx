import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Michael's Pressure Washing | Austin, TX",
  description:
    "Learn about Michael's Pressure Washing, a family owned and operated pressure washing business serving Austin, Round Rock, Cedar Park, and Pflugerville.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}