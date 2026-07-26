import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

const siteName = "Build Basilan";

const siteTitle =
  "Build Basilan | Technology That Builds Communities";

const siteDescription =
  "Build Basilan is a community initiative helping NGOs, youth organizations, and community groups in Basilan strengthen their digital presence through accessible and modern websites.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: "Build Basilan Initiative",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/build-basilan-og.png`,
    width: 1248,
    height: 1248,
  },
  image: `${siteUrl}/build-basilan-og.jpg`,
  description: siteDescription,
  slogan: "Building a Better Basilan, One Website at a Time.",
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Jaymar Maruji",
    jobTitle: "Founder and Solo Developer",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Basilan, Philippines",
  },
  knowsAbout: [
    "Community technology",
    "Website development",
    "Digital accessibility",
    "Digital transformation",
    "Nonprofit websites",
    "Community organizations",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  alternateName: "Build Basilan Initiative",
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en-PH",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  keywords: [
    "Build Basilan",
    "Basilan community initiative",
    "Basilan organizations",
    "NGO websites Basilan",
    "youth organizations Basilan",
    "community groups Basilan",
    "website development Basilan",
    "digital solutions Basilan",
    "technology for communities",
    "social impact technology",
    "nonprofit website development",
    "community technology Philippines",
    "Jaymar Maruji",
  ],

  authors: [
    {
      name: "Jaymar Maruji",
    },
  ],

  creator: "Jaymar Maruji",
  publisher: siteName,

  category: "Community Technology",

  alternates: {
    canonical: "/",
    languages: {
      "en-PH": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName,
    title: siteTitle,
    description:
      "Building a Better Basilan, One Website at a Time. Helping community organizations strengthen their digital presence through accessible websites.",
    images: [
      {
        url: "/build-basilan-og.jpg",
        width: 1200,
        height: 630,
        alt: "Build Basilan, Technology That Builds Communities",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "A community initiative helping organizations in Basilan grow their impact through accessible digital solutions.",
    images: [
      {
        url: "/build-basilan-og.jpg",
        alt: "Build Basilan, Technology That Builds Communities",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/build-basilan-logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/build-basilan-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  other: {
    "apple-mobile-web-app-title": siteName,
    "mobile-web-app-capable": "yes",
  },

  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#061a2c",
    },
  ],
  colorScheme: "light dark",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en-PH" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${manrope.variable}
          min-h-screen
          bg-background
          font-sans
          text-foreground
          antialiased
        `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{ classNames: { toast: "rounded-2xl" } }}
        />
      </body>
    </html>
  );
}