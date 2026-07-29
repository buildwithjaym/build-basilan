import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import BBAssistant from "@/components/bb/bb-assistant";
import { GoogleAnalytics } from "@next/third-parties/google";
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

const siteUrl = "https://www.build-basilan.online";

const siteName = "Build Basilan";

const siteTitle =
  "Build Basilan | Technology That Builds Communities";

const siteDescription =
  "Build Basilan helps NGOs, youth organizations, and community groups in Basilan build accessible websites and strengthen their digital presence.";

const logoPath = "/build-basilan-logo.png";
const socialImagePath = "/build-basilan-og.png";

const logoUrl = `${siteUrl}${logoPath}`;
const socialImageUrl = `${siteUrl}${socialImagePath}`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  alternateName: "Build Basilan Initiative",
  url: siteUrl,

  logo: {
    "@type": "ImageObject",
    url: logoUrl,
  },

  image: {
    "@type": "ImageObject",
    url: socialImageUrl,
    width: 1200,
    height: 630,
  },

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


const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Build Basilan",
  url: siteUrl,
  image: socialImageUrl,

  description: siteDescription,

  founder: {
    "@type": "Person",
    name: "Jaymar Maruji",
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Basilan",
    addressRegion: "BARMM",
    addressCountry: "PH",
  },

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Basilan",
    },
    {
      "@type": "Country",
      name: "Philippines",
    },
  ],

  serviceType: [
    "Website Development",
    "NGO Website Development",
    "Community Organization Websites",
    "Digital Accessibility Solutions",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is Build Basilan?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Build Basilan is a community technology initiative helping NGOs, youth groups, and community organizations create accessible websites.",
      },
    },

    {
      "@type": "Question",
      name: "Who does Build Basilan help?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Build Basilan helps community organizations, nonprofit groups, and youth organizations in Basilan strengthen their online presence.",
      },
    },

    {
      "@type": "Question",
      name: "What services does Build Basilan provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Build Basilan provides website development, digital accessibility improvements, and online presence solutions.",
      },
    },
  ],
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  "@id": `${siteUrl}/#webpage`,

  url: siteUrl,

  name: siteTitle,

  description: siteDescription,

  isPartOf: {
    "@id": `${siteUrl}/#website`,
  },

  about: {
    "@id": `${siteUrl}/#organization`,
  },

  inLanguage: "en-PH",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  "@id": `${siteUrl}/#jaymar-maruji`,

  name: "Jaymar Maruji",

  jobTitle: "Founder and Solo Developer",

  worksFor: {
    "@id": `${siteUrl}/#organization`,
  },

  knowsAbout: [
    "Web development",
    "SEO",
    "Community technology",
    "Digital accessibility",
    "Software Engineer",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,

  name: "Build Basilan",

  alternateName: [
    "Build Basilan Initiative",
  ],

  url: siteUrl,

  description: siteDescription,

  inLanguage: "en-PH",

  publisher: {
    "@id": `${siteUrl}/#organization`,
  },

  image: socialImageUrl,
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
    "Basilan initiative",
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
    "youth organization websites",
    "Jaymar Maruji",
  ],

  authors: [
    {
      name: "Jaymar Maruji",
      url: siteUrl,
    },
  ],

  creator: "Jaymar Maruji",
  publisher: siteName,

  category: "Community Technology",

  alternates: {
    canonical: siteUrl,

    languages: {
      "en-PH": siteUrl,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description:
      "Building a Better Basilan, One Website at a Time. Helping community organizations strengthen their digital presence through accessible websites.",

    images: [
      {
        url: socialImageUrl,
        secureUrl: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Build Basilan, Technology That Builds Communities",
        type: "image/png",
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
        url: socialImageUrl,
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
        url: logoPath,
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: logoPath,
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
    <html
      lang="en-PH"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(
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
          toastOptions={{
            classNames: {
              toast: "rounded-2xl",
            },
          }}
        />

        <BBAssistant />
        <GoogleAnalytics
          gaId="G-2L4ZP8LCJH"
        />
      </body>
    </html>
  );
}