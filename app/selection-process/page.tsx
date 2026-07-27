import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Handshake,
  MapPin,
  MessageSquareText,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://build-basilan.online";

const pageUrl = `${siteUrl}/selection-process`;

const applicationUrl =
  "https://forms.gle/9nweWPH4JneA5NjQ6";

const socialImageUrl =
  `${siteUrl}/build-basilan-og.png`;

const applicationDeadline = "July 30, 2026";

const pageTitle =
  "Selection Process | Build Basilan Website Project";

const pageDescription =
  "Learn how Build Basilan reviews and selects one NGO, youth organization, nonprofit initiative, or community group in Basilan for its first website project.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "Build Basilan selection process",
    "Build Basilan application",
    "website project Basilan",
    "NGO website Basilan",
    "youth organization website Basilan",
    "community organization Basilan",
    "nonprofit website Basilan",
    "digital support Basilan",
  ],

  alternates: {
    canonical: pageUrl,

    languages: {
      "en-PH": pageUrl,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_PH",
    url: pageUrl,
    siteName: "Build Basilan",
    title: pageTitle,
    description: pageDescription,

    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Build Basilan selection process",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [socialImageUrl],
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

const selectionSteps = [
  {
    number: "01",
    title: "Application submission",
    description:
      "The organization completes the official application form and explains its mission, community work, website needs, and current digital challenges.",
    note:
      "Applications should contain complete, accurate, and approved organization information.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Eligibility check",
    description:
      "Build Basilan checks whether the organization is based in Basilan or directly serves communities in Basilan.",
    note:
      "Passing the eligibility check does not guarantee final selection.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Application evaluation",
    description:
      "Qualified applications are reviewed using the same published criteria, including community impact, website need, mission clarity, readiness, and long-term value.",
    note:
      "Popularity, follower count, and personal connections are not part of the evaluation.",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "Clarification meeting",
    description:
      "Shortlisted organizations might receive an invitation to discuss their goals, available content, project representative, timeline, and responsibilities.",
    note:
      "The meeting helps clarify the application. It is not a guarantee of selection.",
    icon: MessageSquareText,
  },
  {
    number: "05",
    title: "Final selection",
    description:
      "One organization is selected based on its overall community value, genuine website need, readiness to collaborate, and expected long-term benefit.",
    note:
      "Every qualified applicant is assessed using the same selection standards.",
    icon: BadgeCheck,
  },
  {
    number: "06",
    title: "Agreement and project start",
    description:
      "Build Basilan and the selected organization confirm the website scope, responsibilities, timeline, ownership, domain, hosting, and maintenance arrangements.",
    note:
      "Website development starts after both sides agree to the project terms.",
    icon: Rocket,
  },
];

const selectionCriteria = [
  {
    number: "01",
    title: "Community impact",
    description:
      "The organization provides meaningful programs, services, activities, or advocacy for communities in Basilan.",
    question:
      "How clearly does the organization create positive community value?",
  },
  {
    number: "02",
    title: "Website need",
    description:
      "The organization has a clear communication, visibility, documentation, or access problem that a website could address.",
    question:
      "Would a website solve a real and important organizational need?",
  },
  {
    number: "03",
    title: "Mission clarity",
    description:
      "The organization has a defined purpose, clear beneficiaries, understandable programs, and responsible direction.",
    question:
      "Is the organization’s purpose clear enough to communicate online?",
  },
  {
    number: "04",
    title: "Project readiness",
    description:
      "The organization is prepared to submit content, attend discussions, review drafts, give feedback, and approve decisions.",
    question:
      "Is the organization ready to participate throughout development?",
  },
  {
    number: "05",
    title: "Long-term value",
    description:
      "The website will continue supporting the organization’s communication, programs, credibility, and future growth after launch.",
    question:
      "Will the website remain useful after the first project ends?",
  },
  {
    number: "06",
    title: "Collaboration",
    description:
      "The organization demonstrates accountability, timely communication, openness, and respect for the agreed process.",
    question:
      "Is there a strong foundation for responsible collaboration?",
  },
];

const importantNotes = [
  "Only one organization will be selected for the first project.",
  "Submitting an application does not guarantee selection.",
  "All qualified applicants will be reviewed using the same criteria.",
  "Incomplete or inaccurate information could affect an application.",
  "Shortlisted organizations might be contacted for clarification.",
  "The selected organization must assign one main project representative.",
];

const faqs = [
  {
    question: "Who is eligible to apply?",
    answer:
      "NGOs, youth organizations, nonprofit initiatives, advocacy groups, and community organizations based in Basilan or directly serving communities in Basilan are eligible to apply.",
  },
  {
    question: "How many organizations will be selected?",
    answer:
      "One organization will be selected for the first Build Basilan website project.",
  },
  {
    question: "Does submitting an application guarantee selection?",
    answer:
      "No. Submission confirms that the application will enter the review process. Final selection depends on eligibility, community impact, website need, readiness, collaboration, and long-term value.",
  },
  {
    question: "Does social media popularity affect the result?",
    answer:
      "No. Follower count, online popularity, and personal connections are not selection criteria. The review focuses on the organization’s work, need, readiness, and expected community value.",
  },
  {
    question: "Will shortlisted organizations be interviewed?",
    answer:
      "Build Basilan might invite shortlisted organizations to a short clarification meeting. The meeting will confirm information, expectations, available content, and readiness.",
  },
  {
    question: "What happens after an organization is selected?",
    answer:
      "The selected organization will join a planning meeting and review the project scope, responsibilities, schedule, ownership, domain, hosting, and maintenance terms before development begins.",
  },
];

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en-PH",
      dateModified: "2026-07-27",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#organization`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: socialImageUrl,
        width: 1200,
        height: 630,
      },

      spatialCoverage: {
        "@type": "AdministrativeArea",
        name: "Basilan, Philippines",

        containedInPlace: {
          "@type": "Country",
          name: "Philippines",
        },
      },

      audience: {
        "@type": "Audience",
        audienceType:
          "NGOs, youth organizations, nonprofit initiatives, advocacy groups, and community organizations serving Basilan",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Selection Process",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#steps`,
      name: "Build Basilan selection steps",
      numberOfItems: selectionSteps.length,

      itemListElement: selectionSteps.map(
        (step, index) => ({
          "@type": "ListItem",
          position: index + 1,

          item: {
            "@type": "Thing",
            name: step.title,
            description: step.description,
          },
        }),
      ),
    },

    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,

      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function SelectionProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData,
          ).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen overflow-hidden bg-background text-foreground">
        <div className="border-b border-white/10 bg-brand-navy text-white">
          <div className="site-container flex min-h-11 flex-col items-center justify-center gap-1 py-2 text-center text-xs sm:flex-row sm:gap-3 sm:text-sm">
            <span className="inline-flex items-center gap-2 font-semibold">
              <span
                className="size-2 rounded-full bg-brand-sky shadow-[0_0_12px_rgb(86_199_243_/_0.8)]"
                aria-hidden="true"
              />

              Applications are now open
            </span>

            <span className="hidden text-white/30 sm:inline">
              •
            </span>

            <span className="inline-flex items-center gap-2 text-white/70">
              <CalendarDays
                className="size-3.5 text-brand-sky"
                aria-hidden="true"
              />

              Deadline: {applicationDeadline}
            </span>
          </div>
        </div>

        <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
          <div className="site-container flex min-h-20 items-center justify-between gap-4 py-3">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              aria-label="Go to the Build Basilan homepage"
            >
              <div className="relative size-11 shrink-0 overflow-hidden rounded-xl sm:size-12">
                <Image
                  src="/build-basilan-logo.png"
                  alt=""
                  fill
                  priority
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate font-heading text-base font-bold">
                  Build Basilan
                </p>

                <p className="hidden truncate text-xs text-muted-foreground sm:block">
                  One Website at a Time
                </p>
              </div>
            </Link>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "default",
                  }),
                  "hidden rounded-full sm:inline-flex",
                )}
              >
                <ArrowLeft
                  data-icon="inline-start"
                  className="size-4"
                  aria-hidden="true"
                />

                Back to Home
              </Link>

              <a
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "default",
                  }),
                  "rounded-full bg-primary px-5 text-primary-foreground shadow-[var(--shadow-primary)] hover:bg-primary/90",
                )}
              >
                Apply Now

                <ArrowRight
                  data-icon="inline-end"
                  className="size-4"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero-glow relative overflow-hidden pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
            <div
              className="hero-grid absolute inset-0 -z-20 opacity-60"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -left-40 top-0 -z-10 size-[30rem] rounded-full bg-brand-sky/15 blur-3xl"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-[34rem] rounded-full bg-primary/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="site-container">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
              >
                <Link
                  href="/"
                  className="transition-colors hover:text-primary"
                >
                  Home
                </Link>

                <ChevronRight
                  className="size-4"
                  aria-hidden="true"
                />

                <span className="font-medium text-foreground">
                  Selection Process
                </span>
              </nav>

              <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
                <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
                  <Badge
                    variant="secondary"
                    className="rounded-full px-4 py-2 text-primary"
                  >
                    <ShieldCheck
                      className="size-4"
                      aria-hidden="true"
                    />

                    Transparent selection
                  </Badge>

                  <h1 className="mt-7 max-w-4xl font-heading text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    One organization.{" "}
                    <span className="text-brand-gradient">
                      One fair process.
                    </span>
                  </h1>

                  <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                    Build Basilan will select one organization
                    for its first website project through a
                    clear, consistent, and community-focused
                    review.
                  </p>

                  <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
                    Every qualified application will be
                    assessed using the same criteria.
                    Selection is based on community impact,
                    website need, readiness, collaboration,
                    and long-term value.
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          size: "lg",
                        }),
                        "min-h-13 rounded-full bg-primary px-7 text-primary-foreground shadow-[var(--shadow-primary)] hover:bg-primary/90",
                      )}
                    >
                      Start Your Application

                      <ArrowRight
                        data-icon="inline-end"
                        className="size-5"
                        aria-hidden="true"
                      />
                    </a>

                    <a
                      href="#steps"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "lg",
                        }),
                        "min-h-13 rounded-full bg-background px-7",
                      )}
                    >
                      View the Steps
                    </a>
                  </div>
                </div>

                <Card
                  className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 overflow-hidden rounded-[2rem] border-primary/15 bg-card/90 shadow-[var(--shadow-card)] backdrop-blur"
                  style={{
                    animationDelay: "140ms",
                    animationFillMode: "both",
                  }}
                >
                  <CardHeader className="border-b border-border/70 p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <ClipboardCheck
                          className="size-6"
                          aria-hidden="true"
                        />
                      </span>

                      <Badge
                        variant="secondary"
                        className="rounded-full text-primary"
                      >
                        First project
                      </Badge>
                    </div>

                    <CardTitle className="pt-5 font-heading text-2xl sm:text-3xl">
                      Selection at a glance
                    </CardTitle>

                    <CardDescription className="text-base leading-7">
                      The key facts applicants should know.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="divide-y divide-border p-0">
                    <QuickFact
                      icon={Users}
                      label="Organizations selected"
                      value="One organization"
                    />

                    <QuickFact
                      icon={MapPin}
                      label="Priority area"
                      value="Basilan, Philippines"
                    />

                    <QuickFact
                      icon={CalendarDays}
                      label="Application deadline"
                      value={applicationDeadline}
                    />

                    <QuickFact
                      icon={SearchCheck}
                      label="Review basis"
                      value="Impact, need, readiness, and value"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section
            id="steps"
            className="section-spacing bg-muted/60"
          >
            <div className="site-container">
              <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
                <div className="lg:sticky lg:top-28">
                  <Badge
                    variant="secondary"
                    className="rounded-full px-4 py-1.5 text-primary"
                  >
                    Step-by-step process
                  </Badge>

                  <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    How applications move from submission to selection.
                  </h2>

                  <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                    Each stage has a clear purpose. Applicants
                    receive the same review process and the
                    same expectations.
                  </p>

                  <div className="mt-8 rounded-2xl border border-primary/15 bg-background p-5">
                    <p className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <ShieldCheck
                        className="mt-0.5 size-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />

                      An application moves forward based on
                      its content and alignment with the
                      published criteria.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="absolute bottom-8 left-[1.45rem] top-8 w-px bg-primary/20 sm:left-[1.7rem]"
                    aria-hidden="true"
                  />

                  <div className="space-y-5">
                    {selectionSteps.map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <article
                          key={step.number}
                          className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 motion-safe:duration-700 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-5"
                          style={{
                            animationDelay: `${index * 80}ms`,
                            animationFillMode: "both",
                          }}
                        >
                          <span className="relative z-10 flex size-12 items-center justify-center rounded-2xl border-4 border-muted bg-primary text-primary-foreground shadow-[var(--shadow-primary)] sm:size-14">
                            <Icon
                              className="size-5 sm:size-6"
                              aria-hidden="true"
                            />
                          </span>

                          <Card className="rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[var(--shadow-soft)]">
                            <CardContent className="p-6 sm:p-8">
                              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                                Step {step.number}
                              </p>

                              <h3 className="mt-2 font-heading text-xl font-bold sm:text-2xl">
                                {step.title}
                              </h3>

                              <p className="mt-4 leading-8 text-muted-foreground">
                                {step.description}
                              </p>

                              <div className="mt-5 rounded-2xl border border-primary/10 bg-secondary/45 p-4">
                                <p className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                                  <Check
                                    className="mt-0.5 size-4 shrink-0 text-primary"
                                    aria-hidden="true"
                                  />

                                  {step.note}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="criteria"
            className="section-spacing"
          >
            <div className="site-container">
              <div className="mx-auto max-w-3xl text-center">
                <Badge
                  variant="secondary"
                  className="rounded-full px-4 py-1.5 text-primary"
                >
                  Evaluation criteria
                </Badge>

                <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  What does Build Basilan evaluate?
                </h2>

                <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                  These six criteria guide the review of
                  every qualified application.
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2">
                {selectionCriteria.map(
                  (criterion, index) => (
                    <Card
                      key={criterion.number}
                      className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 group h-full rounded-3xl motion-safe:duration-700 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
                      style={{
                        animationDelay: `${index * 70}ms`,
                        animationFillMode: "both",
                      }}
                    >
                      <CardHeader className="p-6 pb-4 sm:p-7 sm:pb-4">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary font-heading text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            {criterion.number}
                          </span>

                          <SearchCheck
                            className="size-5 text-primary"
                            aria-hidden="true"
                          />
                        </div>

                        <CardTitle className="pt-5 font-heading text-xl">
                          {criterion.title}
                        </CardTitle>

                        <CardDescription className="text-base leading-7">
                          {criterion.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-6 pb-6 sm:px-7 sm:pb-7">
                        <Separator className="mb-5" />

                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                          Review question
                        </p>

                        <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                          {criterion.question}
                        </p>
                      </CardContent>
                    </Card>
                  ),
                )}
              </div>

              <Card className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-3xl border-0 bg-brand-navy text-white shadow-[var(--shadow-card)]">
                <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-sky">
                    <ShieldCheck
                      className="size-6"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                      Selection is not a popularity contest.
                    </h3>

                    <p className="mt-3 max-w-4xl leading-7 text-white/70">
                      Social media follower count, public
                      popularity, and personal connections do
                      not determine the result. The review
                      focuses on community value, genuine
                      website need, readiness, and long-term
                      benefit.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="section-spacing bg-muted/60">
            <div className="site-container">
              <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                <div>
                  <Badge
                    variant="secondary"
                    className="rounded-full px-4 py-1.5 text-primary"
                  >
                    Important reminders
                  </Badge>

                  <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                    What applicants should understand.
                  </h2>

                  <p className="mt-5 leading-8 text-muted-foreground">
                    Review these points before submitting the
                    application form.
                  </p>
                </div>

                <Card className="rounded-3xl">
                  <CardContent className="grid gap-4 p-6 sm:p-8">
                    {importantNotes.map((note) => (
                      <div
                        key={note}
                        className="flex items-start gap-4 rounded-2xl border border-border bg-background p-4"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                          <Check
                            className="size-4"
                            aria-hidden="true"
                          />
                        </span>

                        <p className="pt-1 text-sm leading-6 text-muted-foreground sm:text-base">
                          {note}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section
            id="faq"
            className="section-spacing"
          >
            <div className="site-container">
              <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
                <div>
                  <Badge
                    variant="secondary"
                    className="rounded-full px-4 py-1.5 text-primary"
                  >
                    Frequently asked questions
                  </Badge>

                  <h2 className="mt-5 font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                    Clear answers about selection.
                  </h2>

                  <p className="mt-5 leading-8 text-muted-foreground">
                    These answers explain the review and
                    selection process before you apply.
                  </p>
                </div>

                <Card className="rounded-3xl">
                  <CardContent className="p-5 sm:p-7">
                    <Accordion
                      defaultValue={["faq-0"]}
                      className="w-full"
                    >
                      {faqs.map((faq, index) => (
                        <AccordionItem
                          key={faq.question}
                          value={`faq-${index}`}
                        >
                          <AccordionTrigger className="text-left font-heading text-base font-bold sm:text-lg">
                            {faq.question}
                          </AccordionTrigger>

                          <AccordionContent className="leading-7 text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="pb-20 sm:pb-28">
            <div className="site-container">
              <div className="brand-gradient relative overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white shadow-[var(--shadow-primary)] sm:px-10 sm:py-16 lg:px-16">
                <div
                  className="absolute -left-20 top-0 size-64 rounded-full bg-white/10 blur-3xl"
                  aria-hidden="true"
                />

                <div
                  className="absolute -right-20 bottom-0 size-64 rounded-full bg-brand-navy/20 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative mx-auto max-w-3xl">
                  <Badge className="rounded-full border-white/20 bg-white/15 text-white hover:bg-white/15">
                    <CalendarDays
                      className="size-4"
                      aria-hidden="true"
                    />

                    Apply by {applicationDeadline}
                  </Badge>

                  <h2 className="mt-6 font-heading text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                    Ready to submit your application?
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
                    Review the selection steps, prepare
                    accurate organization information, and
                    submit the official application before
                    the deadline.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href={applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({
                          variant: "default",
                          size: "lg",
                        }),
                        "min-h-13 rounded-full bg-brand-navy px-7 text-white shadow-xl hover:bg-brand-navy/90",
                      )}
                    >
                      Start Your Application

                      <ArrowRight
                        data-icon="inline-end"
                        className="size-5"
                        aria-hidden="true"
                      />
                    </a>

                    <Link
                      href="/"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "lg",
                        }),
                        "min-h-13 rounded-full border-white/30 bg-white/10 px-7 text-white hover:bg-white/20 hover:text-white",
                      )}
                    >
                      <ArrowLeft
                        data-icon="inline-start"
                        className="size-4"
                        aria-hidden="true"
                      />

                      Back to Home
                    </Link>
                  </div>

                  <p className="mt-6 text-sm text-white/65">
                    Application submission does not guarantee
                    selection.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border bg-background">
          <div className="site-container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="relative size-11 overflow-hidden rounded-xl">
                <Image
                  src="/build-basilan-logo.png"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="font-heading font-bold">
                  Build Basilan
                </p>

                <p className="text-sm text-muted-foreground">
                  Built in Basilan. Built for Basilan.
                </p>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <Link
                href="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>

              <Link
                href="/privacy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>

              <a
                href="mailto:jaymmaruji@gmail.com"
                className="transition-colors hover:text-primary"
              >
                Contact
              </a>
            </div>
          </div>

          <Separator />

          <div className="site-container flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Build Basilan. All rights reserved.
            </p>

            <p>Founded by Jaymar Maruji.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

function QuickFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Globe2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 px-6 py-5 sm:px-8">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
        <Icon
          className="size-5"
          aria-hidden="true"
        />
      </span>

      <div>
        <p className="text-sm text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 font-heading font-bold">
          {value}
        </p>
      </div>
    </div>
  );
}