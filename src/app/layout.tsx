import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";

import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL =
  "https://social-proof-section.abdelrhman-ahmed8881.workers.dev";

const name = "Ovation";
const title = `${name} | Rated 5 stars by 10,000+ customers`;
const description =
  "Five-star ratings across three review sites, and what verified buyers say about our products, our service and our delivery.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Five-star rating badges beside the heading 10,000+ of our users love our products.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
