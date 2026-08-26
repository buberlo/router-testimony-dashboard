import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Home Network Courtroom",
    template: "%s | Home Network Courtroom",
  },
  description:
    "A courtroom-style dashboard that presents household network activity as witness testimony, credibility scores, cross-examination clues, and printable transcripts.",
  applicationName: "Network Testimony",
  keywords: [
    "network dashboard",
    "courtroom",
    "device testimony",
    "bandwidth",
    "credibility",
    "transcript",
  ],
  openGraph: {
    title: "Home Network Courtroom",
    description:
      "Household network activity rendered as witness testimony, cross-examination clues, and an exportable transcript.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}