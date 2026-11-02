import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },

  description: site.description,

  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: siteUrl,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
};

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.dataset.theme =
      stored || (systemDark ? "dark" : "light");
  } catch (_) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${space.variable}`}
    >
      <body className="bg-page text-ink antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
        >
          {themeScript}
        </Script>

        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}