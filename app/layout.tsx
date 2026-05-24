import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SolvoLab | AI Automation Agency",
  description:
    "AI voice agents, web chat, and CRM automation for home services, dental, real estate, auto, and professional services SMBs. Live in 3 weeks. No new headcount.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  );
}
