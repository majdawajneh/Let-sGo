import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Majd | Software Engineer",
  description:
    "Professional portfolio of Majd - Full-Stack Developer and UI/UX Designer based in Amman",

  keywords: [
    "portfolio",
    "full-stack developer",
    "UI/UX designer",
    "web development",
  ],

  icons: {
    icon: "/assets/icon/LogoIcon.png",
  },
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

