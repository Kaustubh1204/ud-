import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abetkaua Landing Page Reveal Animation",
  description: "GSAP-powered landing page reveal animation built with Next.js 14 App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
