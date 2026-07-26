"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { motion, MotionConfig } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ClipboardCheck,
  Code2,
  Gauge,
  Globe2,
  GraduationCap,
  HandHeart,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MonitorSmartphone,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Why Build Basilan",
    href: "#why",
  },
  {
    label: "Mission",
    href: "#mission",
  },
  {
    label: "How It Works",
    href: "#process",
  },
  {
    label: "Selection",
    href: "#selection",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

const coreValues = [
  {
    title: "Community First",
    description:
      "We build technology that serves people and strengthens communities.",
    icon: HeartHandshake,
  },
  {
    title: "Transparency",
    description:
      "We follow a clear and fair selection process for every project.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We explore practical digital ideas that help organizations grow.",
    icon: Lightbulb,
  },
  {
    title: "Service",
    description:
      "We use our technical skills to give back with sincerity and purpose.",
    icon: HandHeart,
  },
  {
    title: "Impact",
    description:
      "We focus on digital projects that create meaningful community value.",
    icon: TrendingUp,
  },
  {
    title: "Collaboration",
    description:
      "We involve partner organizations throughout the website project.",
    icon: Handshake,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Application",
    description:
      "Organizations submit information about their mission, needs, and current digital presence.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Selection",
    description:
      "Applications are reviewed through transparent and community-focused criteria.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Development",
    description:
      "We collaborate on the content, design, features, testing, and final revisions.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description:
      "The organization receives a responsive website and basic website training.",
    icon: Rocket,
  },
];

const websiteFeatures = [
  {
    title: "Responsive Website",
    description:
      "A professional website designed to feel clear, polished, and consistent on every screen.",
    label: "Complete foundation",
    icon: MonitorSmartphone,
    points: [
      "Desktop, tablet, and mobile layouts",
      "Accessible navigation",
      "Consistent visual experience",
    ],
  },
  {
    title: "Modern UI and UX",
    description:
      "A thoughtful interface that helps visitors understand your organization and take action.",
    label: "Purposeful design",
    icon: Sparkles,
    points: [
      "Clear content hierarchy",
      "Human-centered experience",
      "Strong calls to action",
    ],
  },
  {
    title: "Fast Performance",
    description:
      "Optimized pages and media that reduce waiting time and improve the visitor experience.",
    label: "Built for speed",
    icon: Gauge,
    points: [
      "Optimized images",
      "Efficient page loading",
      "Smooth interactions",
    ],
  },
  {
    title: "Basic SEO",
    description:
      "A search-friendly structure that helps people find and understand your organization online.",
    label: "Ready for search",
    icon: SearchCheck,
    points: [
      "Page metadata",
      "Semantic headings",
      "Social sharing previews",
    ],
  },
  {
    title: "Website Training",
    description:
      "Practical guidance for understanding the website and managing its essential content.",
    label: "Knowledge transfer",
    icon: GraduationCap,
    points: [
      "Website walkthrough",
      "Content guidance",
      "Basic management training",
    ],
  },
  {
    title: "Future Scalability",
    description:
      "A reusable foundation prepared for future programs, stories, pages, and digital services.",
    label: "Ready to grow",
    icon: BarChart3,
    points: [
      "Reusable components",
      "Expandable page structure",
      "Clean technical foundation",
    ],
  },
];

const selectionCriteria = [
  {
    title: "Community Impact",
    description:
      "The organization provides clear and meaningful value to communities in Basilan.",
  },
  {
    title: "Website Need",
    description:
      "A website would address an important visibility, communication, or access problem.",
  },
  {
    title: "Mission and Vision",
    description:
      "The organization has a defined purpose and responsible direction.",
  },
  {
    title: "Project Readiness",
    description:
      "The organization is ready to provide content, feedback, and approvals.",
  },
  {
    title: "Long-term Value",
    description:
      "The website has a clear purpose and will remain useful after launch.",
  },
];

const applicationUrl = "https://forms.gle/9nweWPH4JneA5NjQ6";

const faqs = [
  {
    question: "Who is eligible to apply?",
    answer:
      "NGOs, youth organizations, community groups, nonprofit initiatives, and advocacy groups serving communities in Basilan are welcome to apply.",
  },
  {
    question: "How much does the website cost?",
    answer:
      "Build Basilan starts as a community service initiative. The exact project coverage, domain costs, hosting costs, and maintenance responsibilities will be explained before development begins.",
  },
  {
    question: "How are organizations selected?",
    answer:
      "Applications are reviewed based on community impact, website need, mission clarity, project readiness, collaboration, and long-term value.",
  },
  {
    question: "Who owns the completed website?",
    answer:
      "Ownership, website access, source files, hosting, domain management, and maintenance responsibilities will be included in a clear project agreement.",
  },
  {
    question: "What should the selected organization provide?",
    answer:
      "The organization should provide accurate written content, contact details, logos, photos, program information, timely feedback, and one main project representative.",
  },
  {
    question: "Does applying guarantee selection?",
    answer:
      "No. Build Basilan has limited project capacity. Every application will follow the same transparent review process.",
  },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  inverse?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
      )}
    >
      <Badge
        variant="secondary"
        className={cn(
          "mb-5 rounded-full px-4 py-1.5",
          inverse
            ? "border-white/10 bg-white/10 text-brand-sky"
            : "text-primary",
        )}
      >
        {eyebrow}
      </Badge>

      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            inverse
              ? "text-white/65"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="site-container flex h-20 items-center justify-between gap-6">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Build Basilan homepage"
          >
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/build-basilan-logo.png"
                alt=""
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>

            <div>
              <span className="block font-heading text-base font-bold text-foreground">
                Build Basilan
              </span>

              <span className="hidden text-xs text-muted-foreground sm:block">
                One Website at a Time
              </span>
            </div>
          </a>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
  href={applicationUrl}
  target="_blank"
  rel="noopener noreferrer"
  className={cn(
    buttonVariants({
      variant: "secondary",
      size: "lg",
    }),
    "min-h-13 rounded-full bg-white px-7 text-primary hover:bg-white/90",
  )}
>
  Apply Now

  <ArrowRight
    data-icon="inline-end"
    className="size-5"
    aria-hidden="true"
  />
</a>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label="Open navigation menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </header>

      <Sheet
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
      >
        <SheetContent
          side="right"
          className="w-[88%] sm:max-w-sm"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-xl">
                <Image
                  src="/build-basilan-logo.png"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </span>

              Build Basilan
            </SheetTitle>

            <SheetDescription>
              Building a Better Basilan, One Website at a Time.
            </SheetDescription>
          </SheetHeader>

          <nav
            className="mt-8 flex flex-col gap-2"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Separator className="my-6" />

          <a
  href={applicationUrl}
  target="_blank"
  rel="noopener noreferrer"
  className={cn(
    buttonVariants({
      variant: "secondary",
      size: "lg",
    }),
    "min-h-13 rounded-full bg-white px-7 text-primary hover:bg-white/90",
  )}
>
  Apply Now

  <ArrowRight
    data-icon="inline-end"
    className="size-5"
    aria-hidden="true"
  />
</a>
        </SheetContent>
      </Sheet>
    </>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-3"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-xl">
              <Image
                src="/build-basilan-logo.png"
                alt=""
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>

            <div>
              <p className="font-heading text-lg font-bold">
                Build Basilan
              </p>

              <p className="text-sm text-muted-foreground">
                One Website at a Time.
              </p>
            </div>
          </a>

          <p className="mt-5 max-w-md leading-7 text-muted-foreground">
            Helping organizations in Basilan grow their impact through
            accessible digital solutions.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.18em]">
            Navigate
          </h2>

          <nav
            className="mt-5 flex flex-col gap-3"
            aria-label="Footer navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold uppercase tracking-[0.18em]">
            Contact
          </h2>

          <div className="mt-5 space-y-4 text-sm text-muted-foreground">
            <p className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              Basilan, Philippines
            </p>

            <a
              href="mailto:jaymmaruji@gmail.com"
              className="flex items-start gap-3 transition-colors hover:text-primary"
            >
              <Mail
                className="mt-0.5 size-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              jaymmaruji@gmail.com
            </a>

            <a
              href="/privacy"
              className="block transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      <Separator />

      <div className="site-container flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Build Basilan. All rights reserved.</p>
        <p>Founded by Jaymar Maruji.</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <SiteHeader />

      <main>
        {/* Section 1: Hero */}
        <section
          id="home"
          className="hero-glow relative flex min-h-screen items-center overflow-hidden pb-20 pt-32 sm:pt-36"
        >
          <div className="hero-grid absolute inset-0 -z-20 opacity-70" />

          <div className="site-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Badge
                variant="secondary"
                className="mb-7 rounded-full px-4 py-2 text-primary"
              >
                <MapPin className="size-4" aria-hidden="true" />
                A community initiative from Basilan
              </Badge>

              <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
                Technology That{" "}
                <span className="text-brand-gradient">
                  Builds Communities.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                Build Basilan helps NGOs and community organizations
                strengthen their digital presence through modern websites,
                making their stories easier to share and their impact easier
                to see.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
  href={applicationUrl}
  target="_blank"
  rel="noopener noreferrer"
>
                  Apply Now
                  <ArrowRight
                    data-icon="inline-end"
                    className="size-5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#why"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                    }),
                    "min-h-13 rounded-full bg-background px-7",
                  )}
                >
                  Learn Our Story
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                {[
                  "Community-first",
                  "Transparent selection",
                  "Built in Basilan",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-secondary text-primary">
                      <Check
                        className="size-3.5"
                        aria-hidden="true"
                      />
                    </span>

                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-xl"
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 24,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute inset-10 -z-10 rounded-full bg-primary/20 blur-3xl" />

              <Card className="glass-surface overflow-hidden rounded-4xl border-white/60 p-3 sm:p-5">
                <CardContent className="rounded-3xl bg-background/85 p-7 sm:p-10">
                  <div className="relative mx-auto aspect-square w-full max-w-sm">
                    <Image
                      src="/build-basilan-logo.png"
                      alt="Build Basilan logo"
                      fill
                      priority
                      sizes="(max-width: 1024px) 80vw, 420px"
                      className="object-contain"
                    />
                  </div>

                  <div className="text-center">
                    <p className="font-heading text-xl font-bold sm:text-2xl">
                      Building a Better Basilan
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      One Website at a Time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Why Build Basilan */}
        <section
          id="why"
          className="section-spacing"
        >
          <div className="site-container grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <Card className="brand-gradient-dark relative overflow-hidden rounded-3xl border-0 text-white shadow-[var(--shadow-card)]">
                <CardContent className="relative p-8 sm:p-10">
                  <div className="absolute -right-16 -top-16 size-48 rounded-full bg-brand-sky/20 blur-3xl" />

                  <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10">
                    <UserRound
                      className="size-7"
                      aria-hidden="true"
                    />
                  </span>

                  <blockquote className="mt-10 font-heading text-2xl font-bold leading-tight sm:text-3xl">
                    “As a Computer Science student from Basilan, how do I give
                    back to the place I call home?”
                  </blockquote>

                  <Separator className="my-8 bg-white/15" />

                  <p className="font-heading text-lg font-bold">
                    Jaymar Maruji
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Founder and Solo Developer
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Why Build Basilan?"
                title="Good work deserves a clear place online."
                description="Many organizations already change lives across Basilan. Their challenge is often digital visibility, not purpose."
              />

              <Reveal className="mt-8 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                <p>
                  Build Basilan started from a personal question about how one
                  student’s skills might serve the community.
                </p>

                <p>
                  Many local organizations work tirelessly to improve lives,
                  yet some lack an official website where people might learn
                  about their mission, programs, and community impact.
                </p>

                <p>
                  Build Basilan helps bridge this gap through accessible,
                  purposeful, and well-designed websites.
                </p>

                <p className="font-semibold text-foreground">
                  This is a social impact initiative. This is not an agency or
                  freelancing portfolio.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 3: Mission and Vision */}
        <section
          id="mission"
          className="section-spacing bg-muted/70"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="Purpose and direction"
              title="Built around service, access, and lasting impact."
              description="Build Basilan helps organizations use technology with clarity and purpose."
              centered
            />

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <Reveal>
                <Card className="h-full rounded-3xl">
                  <CardHeader className="p-7 pb-4 sm:p-9 sm:pb-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Rocket className="size-6" aria-hidden="true" />
                    </span>

                    <CardDescription className="pt-5 font-bold uppercase tracking-[0.18em] text-primary">
                      Mission
                    </CardDescription>

                    <CardTitle className="font-heading text-2xl leading-tight sm:text-3xl">
                      Empower organizations through practical technology.
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-7 pb-7 sm:px-9 sm:pb-9">
                    <p className="leading-8 text-muted-foreground">
                      To empower organizations in Basilan through technology
                      by creating digital solutions that amplify their
                      mission, strengthen their impact, and connect them with
                      the communities they serve.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.08}>
                <Card className="brand-gradient-dark h-full rounded-3xl border-0 text-white">
                  <CardHeader className="p-7 pb-4 sm:p-9 sm:pb-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-brand-sky">
                      <Globe2 className="size-6" aria-hidden="true" />
                    </span>

                    <CardDescription className="pt-5 font-bold uppercase tracking-[0.18em] text-brand-sky">
                      Vision
                    </CardDescription>

                    <CardTitle className="font-heading text-2xl leading-tight text-white sm:text-3xl">
                      A digitally empowered Basilan.
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-7 pb-7 sm:px-9 sm:pb-9">
                    <p className="leading-8 text-white/70">
                      A Basilan where every organization has the opportunity
                      to grow, inspire, and create lasting change through
                      accessible technology.
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 4: Core Values */}
        <section
          id="values"
          className="section-spacing"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="Core values"
              title="The principles behind every project."
              description="Every Build Basilan project should reflect service, fairness, collaboration, and long-term community value."
              centered
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value, index) => {
                const Icon = value.icon;

                return (
                  <Reveal
                    key={value.title}
                    delay={index * 0.04}
                  >
                    <Card className="group h-full rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]">
                      <CardHeader>
                        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon
                            className="size-5"
                            aria-hidden="true"
                          />
                        </span>

                        <CardTitle className="pt-4 font-heading text-xl">
                          {value.title}
                        </CardTitle>

                        <CardDescription className="leading-7">
                          {value.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: How It Works */}
        <section
          id="process"
          className="section-spacing bg-muted/70"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="How it works"
              title="A clear path from application to launch."
              description="Each stage keeps the organization involved and keeps expectations visible."
              centered
            />

            <div className="relative mt-14">
              <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-border lg:block" />

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <Reveal
                      key={step.number}
                      delay={index * 0.06}
                    >
                      <Card className="relative h-full rounded-2xl">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-primary)]">
                              <Icon
                                className="size-6"
                                aria-hidden="true"
                              />
                            </span>

                            <span className="font-heading text-3xl font-bold text-primary/20">
                              {step.number}
                            </span>
                          </div>

                          <CardTitle className="pt-4 font-heading text-xl">
                            {step.title}
                          </CardTitle>

                          <CardDescription className="leading-7">
                            {step.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: What Organizations Receive */}
<section
  id="features"
  className="section-spacing brand-gradient-dark relative overflow-hidden text-white"
>
  <div className="hero-grid absolute inset-0 opacity-[0.08]" />

  <div className="absolute -left-40 top-20 size-[28rem] rounded-full bg-brand-sky/15 blur-3xl" />

  <div className="absolute -right-40 bottom-0 size-[32rem] rounded-full bg-primary/20 blur-3xl" />

  <div className="site-container relative">
    <SectionHeading
      eyebrow="What organizations receive"
      title="More than a website. A digital home for your mission."
      description="Every selected organization receives a thoughtful digital foundation designed to build trust, explain its work, and help more people take part."
      centered
      inverse
    />

    <Reveal className="mt-7 flex justify-center">
      <Badge className="rounded-full border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/10">
        <BadgeCheck
          className="size-4 text-brand-sky"
          aria-hidden="true"
        />
        Six essential website foundations
      </Badge>
    </Reveal>

    <div className="mt-12 grid auto-rows-auto gap-5 lg:grid-cols-12">
      {websiteFeatures.map((feature, index) => {
        const Icon = feature.icon;

        const gridClass =
          index === 0
            ? "lg:col-span-7 lg:row-span-2"
            : index === 1 || index === 2
              ? "lg:col-span-5"
              : "lg:col-span-4";

        return (
          <Reveal
            key={feature.title}
            className={gridClass}
            delay={index * 0.04}
          >
            <motion.div
              className="h-full"
              whileHover={{
                y: -7,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <Card
                className={cn(
                  "group relative h-full overflow-hidden rounded-3xl border-white/10 bg-white/[0.065] text-white shadow-none backdrop-blur-xl transition-colors hover:border-brand-sky/30 hover:bg-white/[0.095]",
                  index === 0 && "min-h-[32rem]",
                )}
              >
                <div className="absolute right-0 top-0 size-40 rounded-full bg-brand-sky/10 blur-3xl transition-transform duration-500 group-hover:scale-150" />

                <CardHeader className="relative p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-brand-sky">
                      <Icon
                        className="size-6"
                        aria-hidden="true"
                      />
                    </span>

                    <Badge className="rounded-full border-white/10 bg-white/[0.07] text-xs text-white/70 hover:bg-white/[0.07]">
                      {feature.label}
                    </Badge>
                  </div>

                  <CardTitle
                    className={cn(
                      "pt-5 font-heading font-bold text-white",
                      index === 0
                        ? "text-2xl sm:text-3xl"
                        : "text-xl",
                    )}
                  >
                    {feature.title}
                  </CardTitle>

                  <CardDescription className="max-w-xl text-base leading-7 text-white/65">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative flex h-full flex-col px-6 pb-6 sm:px-7 sm:pb-7">
                  <div className="flex flex-wrap gap-2">
                    {feature.points.map((point) => (
                      <span
                        key={point}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-medium text-white/75"
                      >
                        <Check
                          className="size-3.5 text-brand-sky"
                          aria-hidden="true"
                        />

                        {point}
                      </span>
                    ))}
                  </div>

                  {index === 0 ? (
                    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#061a2c] p-3 shadow-2xl">
                      <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
                        <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
                        <span className="size-2.5 rounded-full bg-[#ffd166]" />
                        <span className="size-2.5 rounded-full bg-[#36c98f]" />

                        <div className="ml-3 h-7 flex-1 rounded-md bg-white/[0.06]" />
                      </div>

                      <div className="grid gap-3 pt-3 sm:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-xl bg-white/[0.055] p-5">
                          <div className="flex items-center gap-3">
                            <div className="relative size-11 overflow-hidden rounded-xl bg-white">
                              <Image
                                src="/build-basilan-logo.png"
                                alt=""
                                fill
                                sizes="44px"
                                className="object-contain p-1"
                              />
                            </div>

                            <div>
                              <div className="h-2.5 w-24 rounded-full bg-white/25" />
                              <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
                            </div>
                          </div>

                          <div className="mt-8 h-4 w-full rounded-full bg-white/85" />
                          <div className="mt-3 h-4 w-4/5 rounded-full bg-white/85" />

                          <div className="mt-6 h-10 w-28 rounded-full bg-primary" />
                        </div>

                        <div className="grid gap-3">
                          <div className="brand-gradient rounded-xl p-5">
                            <Globe2
                              className="size-7 text-white"
                              aria-hidden="true"
                            />

                            <div className="mt-10 h-2.5 w-20 rounded-full bg-white/40" />
                            <div className="mt-2 h-2.5 w-28 rounded-full bg-white/25" />
                          </div>

                          <div className="rounded-xl border border-white/10 bg-white/[0.055] p-5">
                            <Users
                              className="size-7 text-brand-sky"
                              aria-hidden="true"
                            />

                            <div className="mt-8 flex gap-2">
                              <span className="h-2 flex-1 rounded-full bg-brand-sky/45" />
                              <span className="h-2 flex-1 rounded-full bg-primary/55" />
                              <span className="h-2 flex-1 rounded-full bg-white/15" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <div className="h-px w-full bg-white/10" />

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
                          Build Basilan
                        </span>

                        <ArrowRight
                          className="size-5 text-brand-sky transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Reveal>
        );
      })}
    </div>

    <Reveal className="mt-6">
      <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/[0.07] text-white backdrop-blur-xl">
        <CardContent className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto]">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-sky text-brand-navy">
            <HeartHandshake
              className="size-7"
              aria-hidden="true"
            />
          </span>

          <div>
            <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
              Your mission stays at the center.
            </h3>

            <p className="mt-2 max-w-2xl leading-7 text-white/65">
              The website will reflect your organization’s identity, goals,
              community, and story. Build Basilan provides the technical
              foundation while your organization shapes the message.
            </p>
          </div>

          <a
            href={applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "lg",
              }),
              "w-full rounded-full bg-white px-6 text-primary hover:bg-white/90 lg:w-auto",
            )}
          >
            Apply for the Project

            <ArrowRight
              data-icon="inline-end"
              className="size-4"
              aria-hidden="true"
            />
          </a>
        </CardContent>
      </Card>
    </Reveal>
  </div>
</section>

        {/* Section 7: Selection Process */}
        <section
          id="selection"
          className="section-spacing"
        >
          <div className="site-container">
            <SectionHeading
              eyebrow="Transparent selection"
              title="Clear criteria. Fair review. Shared expectations."
              description="Build Basilan selects projects based on community value and project readiness, not popularity."
              centered
            />

            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border bg-card shadow-[var(--shadow-soft)]">
              {selectionCriteria.map((criterion, index) => (
                <Reveal
                  key={criterion.title}
                  className="grid gap-4 border-b p-6 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:p-8"
                >
                  <span className="font-heading text-2xl font-bold text-primary/35">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="font-heading text-xl font-bold">
                      {criterion.title}
                    </h3>

                    <p className="mt-2 leading-7 text-muted-foreground">
                      {criterion.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: FAQ and Call to Action */}
        <section
          id="faq"
          className="section-spacing bg-muted/70"
        >
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <SectionHeading
                eyebrow="Frequently asked questions"
                title="Clear answers before you apply."
                description="The application page will include full project terms, responsibilities, and privacy information."
              />

              <Reveal>
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
              </Reveal>
            </div>

            <Reveal className="mt-16">
              <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white shadow-[var(--shadow-primary)] sm:px-10 lg:px-16">
                <div className="relative mx-auto max-w-3xl">
                  <Badge className="rounded-full border-white/20 bg-white/15 text-white">
                    Applications opening soon
                  </Badge>

                  <h2 className="mt-6 font-heading text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                    Ready to share your story with the world?
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
                    Apply to become the next Build Basilan partner and take the
                    first step toward a stronger digital presence.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
  href={applicationUrl}
  target="_blank"
  rel="noopener noreferrer"
  className={cn(
    buttonVariants({
      variant: "secondary",
      size: "lg",
    }),
    "min-h-13 rounded-full bg-white px-7 text-primary hover:bg-white/90",
  )}
>
  Apply Now

  <ArrowRight
    data-icon="inline-end"
    className="size-5"
    aria-hidden="true"
  />
</a>

                    <a
                      href="#selection"
                      className={cn(
                        buttonVariants({
                          variant: "outline",
                          size: "lg",
                        }),
                        "min-h-13 rounded-full border-white/30 bg-white/10 px-7 text-white hover:bg-white/20 hover:text-white",
                      )}
                    >
                      Review Selection Criteria
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </MotionConfig>
  );
}