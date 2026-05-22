import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Specialty Contractor Site",
  description: "Built for plumbers, electricians, landscapers, HVAC, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
