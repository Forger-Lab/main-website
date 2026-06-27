import type { Metadata } from "next";
import { Hanken_Grotesk, Schibsted_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import ClientReveal from "@/components/ClientReveal";
import "./global.css";

const GA_MEASUREMENT_ID = "G-TF9M22BP03";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.solvolab.com";
const SITE_NAME = "SolvoLab";
const DEFAULT_TITLE = "SolvoLab | Never Miss A Lead";
const DEFAULT_DESCRIPTION =
  "AI voice agents, web chat, and CRM automation for home services, dental, real estate, auto, and professional services SMBs. Live in 3 weeks. No new headcount.";
const OG_IMAGE = "/brandlogo/SolvoLabLogo.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | SolvoLab",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "AI voice agent",
    "AI receptionist",
    "AI web chat",
    "CRM automation",
    "lead automation",
    "home services automation",
    "dental front desk AI",
    "real estate inbound",
    "auto shop AI",
    "professional services AI",
    "SolvoLab",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        alt: "SolvoLab, AI agents that answer the calls you keep missing.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${schibsted.variable} ${hanken.variable} ${ibmPlexMono.variable}`}>
        {children}
        <ClientReveal />

        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
