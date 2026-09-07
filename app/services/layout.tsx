import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pressure Washing Services | Michael's Pressure Washing",
  description:
    "Professional driveway cleaning, house washing, and deck and patio cleaning services in Austin and surrounding communities.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}