"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
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

const founderQuestion =
  "As a Computer Science student from Basilan, how do I give back to the place I call home?";

function FounderTypingQuote() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedText(founderQuestion);
      return;
    }

    let characterIndex = 0;

    const typingTimer = window.setInterval(() => {
      characterIndex += 1;

      setDisplayedText(
        founderQuestion.slice(0, characterIndex),
      );

      if (characterIndex >= founderQuestion.length) {
        window.clearInterval(typingTimer);
      }
    }, 65);

    return () => {
      window.clearInterval(typingTimer);
    };
  }, []);

  return (
    <blockquote className="max-w-xl">
      <span className="sr-only">
        “{founderQuestion}”
      </span>

      <span
        aria-hidden="true"
        className="font-heading text-xl font-bold leading-[1.25] tracking-[-0.025em] text-white sm:text-2xl xl:text-3xl"
      >
        “{displayedText}

        <motion.span
          className="ml-1 inline-block text-brand-sky"
          animate={{
            opacity: [1, 0.25, 1],
          }}
          transition={{
            duration: 1.2, //from 0.9
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          |
        </motion.span>

        {displayedText.length === founderQuestion.length
          ? "”"
          : ""}
      </span>
    </blockquote>
  );
}


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

const applicationDeadline = "July 30, 2026";

const announcementItems = [
  {
    icon: BadgeCheck,
    text: "Applications for the first Build Basilan website project are now open.",
  },
  {
    icon: CalendarDays,
    text: `Application deadline: ${applicationDeadline}`,
  },
  {
    icon: Globe2,
    text: "Open to NGOs, youth organizations, and community groups in Basilan.",
  },
];

const applyButtonClass = cn(
  buttonVariants({
    variant: "default",
    size: "lg",
  }),
  "min-h-13 rounded-full bg-primary px-7 text-primary-foreground shadow-[var(--shadow-primary)] transition-all hover:-translate-y-0.5 hover:bg-primary/90",
);

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

function ApplicationStatusBar() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="h-11 overflow-hidden border-b border-white/10 bg-brand-navy text-white">
      <div className="flex h-full items-center">
        <p className="sr-only">
          Applications for the first Build Basilan website project are now
          open. Application deadline: {applicationDeadline}.
        </p>

        <div className="relative min-w-0 flex-1 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-brand-navy to-transparent"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-brand-navy to-transparent"
            aria-hidden="true"
          />

          <motion.div
            className="flex w-max items-center"
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                  x: ["0%", "-50%"],
                }
            }
            transition={
              reduceMotion
                ? undefined
                : {
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }
            }
          >
            {[0, 1].map((copyIndex) => (
              <div
                key={copyIndex}
                className="flex shrink-0 items-center gap-8 pr-8"
              >
                {announcementItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={`${copyIndex}-${item.text}`}
                      className="flex shrink-0 items-center gap-2 whitespace-nowrap text-xs font-medium text-white/80 sm:text-sm"
                    >
                      <Icon
                        className="size-4 shrink-0 text-brand-sky"
                        aria-hidden="true"
                      />

                      <span>{item.text}</span>

                      <span
                        className="ml-6 size-1.5 rounded-full bg-brand-sky"
                        aria-hidden="true"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>

        
      </div>
    </div>
  );
}

function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <ApplicationStatusBar />

        <header className="border-b border-border/70 bg-background/90 backdrop-blur-xl">
          <div className="site-container flex h-20 items-center justify-between gap-6">
            <a
              href="#home"
              className="flex min-w-0 items-center gap-3"
              aria-label="Build Basilan homepage"
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
                <span className="block truncate font-heading text-base font-bold text-foreground">
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
                className={applyButtonClass}
              >
                Apply Now

               
              </a>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="shrink-0 rounded-full lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </header>
      </div>

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
              <span className="relative size-11 overflow-hidden rounded-xl">
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
            className={cn(applyButtonClass, "w-full")}
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now

           
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
          className="hero-glow relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-44 sm:pt-40 lg:pt-44"
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
                  className={applyButtonClass}
                >
                  Apply Now

                  
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
          className="section-spacing relative overflow-hidden"
        >
          <div
            className="pointer-events-none absolute -left-40 top-10 size-[28rem] rounded-full bg-brand-sky/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="site-container relative grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16 xl:gap-20">
            <Reveal className="mx-auto w-full max-w-[38rem] lg:max-w-none">
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <Card className="group relative overflow-hidden rounded-[1.75rem] border border-primary/15 bg-foreground p-0 shadow-[var(--shadow-card)] sm:rounded-[2rem]">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]">
                      <Image
                        src="/jaymar.jpg"
                        alt="Jaymar Maruji, founder of Build Basilan"
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 42vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                      />

                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#061a2c] via-[#0b2b4c]/55 to-transparent"
                        aria-hidden="true"
                      />

                      <div
                        className="absolute inset-x-0 bottom-0 h-[74%] bg-gradient-to-t from-primary/35 via-primary/10 to-transparent"
                        aria-hidden="true"
                      />

                      <div className="absolute left-4 top-4 sm:left-6 sm:top-6 lg:left-8 lg:top-8">
                        <Badge className="rounded-full border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-md hover:bg-white/10 sm:px-4 sm:py-2 sm:text-sm">
                          <Code2
                            className="size-3.5 text-brand-sky sm:size-4"
                            aria-hidden="true"
                          />
                          Founder’s question
                        </Badge>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8 xl:p-9">
                        <FounderTypingQuote />

                        <Separator className="my-5 bg-white/20 sm:my-7" />

                        <div className="flex items-center justify-between gap-4">
                          <div className="min-w-0">
                            <p className="truncate font-heading text-base font-bold text-white sm:text-lg lg:text-xl">
                              Jaymar Maruji
                            </p>

                            <p className="mt-1 text-xs text-white/70 sm:text-sm">
                              Founder and Solo Developer
                            </p>
                          </div>

                          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-brand-sky backdrop-blur-md sm:size-12 sm:rounded-2xl">
                            <Code2
                              className="size-4 sm:size-5"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>

            <div className="min-w-0">
              <SectionHeading
                eyebrow="Why Build Basilan?"
                title="Technology should serve the community where it begins."
                description="Build Basilan started from a personal commitment to use technology in support of organizations already creating meaningful change across Basilan."
              />

              <Reveal className="mt-7 sm:mt-8">
                <div className="border-l-2 border-primary pl-5 sm:pl-6">
                  <p className="font-heading text-lg font-bold leading-7 text-foreground sm:text-xl sm:leading-8 lg:text-2xl">
                    Their work already creates impact.
                    <span className="block text-primary">
                      Their stories deserve to reach further.
                    </span>
                  </p>
                </div>
              </Reveal>

              <Reveal className="mt-7 space-y-4 text-[0.98rem] leading-7 text-muted-foreground sm:mt-8 sm:space-y-5 sm:text-lg sm:leading-8">
                <p>
                  Across Basilan, local organizations support families, empower young
                  people, lead community programs, and respond to real needs.
                </p>

                <p>
                  Many rely only on social media. Without an official website, their
                  mission, programs, and achievements are harder to find, understand,
                  and support.
                </p>

                <p>
                  Build Basilan provides a clear digital home where organizations share
                  their story, build trust, connect with partners, and reach more
                  people.
                </p>
              </Reveal>

              <Reveal className="mt-7 sm:mt-8">
                <Card className="overflow-hidden rounded-2xl border-primary/15 bg-secondary/60 shadow-none">
                  <CardContent className="relative p-5 sm:p-6 lg:p-7">
                    <div
                      className="absolute inset-y-0 left-0 w-1.5 bg-primary"
                      aria-hidden="true"
                    />

                    <div className="flex items-start gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground sm:size-11">
                        <HeartHandshake
                          className="size-5"
                          aria-hidden="true"
                        />
                      </span>

                      <div className="min-w-0">
                        <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                          More than a student project.
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                          Build Basilan is a long-term commitment to give back through
                          technology, one organization and one website at a time.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
                {[
                  "Rooted in Basilan",
                  "Community-first",
                  "Built through service",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-3.5 py-2 text-xs font-medium text-muted-foreground shadow-sm sm:px-4 sm:text-sm"
                  >
                    <Check
                      className="size-3.5 text-primary sm:size-4"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
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
                      To help organizations in Basilan strengthen their digital presence so they can reach more people, share their impact, and continue serving their communities.
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
                      A digitally empowered Basilan where every organization has the opportunity to inspire, connect, and create lasting change through technology.
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
                      applyButtonClass,
                      "w-full lg:w-auto",
                    )}
                  >
                    Apply for the Project

                    <ArrowRight
                      data-icon="inline-end"
                      className="size-5"
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
  className="section-spacing relative overflow-hidden"
>
  <div
    className="pointer-events-none absolute -left-40 top-10 size-[26rem] rounded-full bg-brand-sky/10 blur-3xl"
    aria-hidden="true"
  />

  <div
    className="pointer-events-none absolute -right-40 bottom-0 size-[28rem] rounded-full bg-primary/10 blur-3xl"
    aria-hidden="true"
  />

  <div className="site-container relative">
    <SectionHeading
      eyebrow="Transparent selection"
      title="Clear criteria. Fair review. Shared expectations."
      description="Build Basilan reviews every qualified application using the same community-focused criteria. Selection is based on genuine need, readiness, and long-term value, not popularity."
      centered
    />

    <Reveal className="mx-auto mt-10 max-w-4xl">
      <Card className="overflow-hidden rounded-3xl border-primary/15 bg-secondary/50 shadow-none">
        <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-primary)]">
            <ShieldCheck
              className="size-6"
              aria-hidden="true"
            />
          </span>

          <div>
            <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
              Every applicant receives the same fair review.
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
              Social media followers, public popularity, and personal
              connections do not determine the result. The review focuses on
              the organization&apos;s work, website need, readiness to
              collaborate, and expected community benefit.
            </p>
          </div>
        </CardContent>
      </Card>
    </Reveal>

    <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2">
      {selectionCriteria.map((criterion, index) => {
        const isLastOddItem =
          selectionCriteria.length % 2 !== 0 &&
          index === selectionCriteria.length - 1;

        return (
          <Reveal
            key={criterion.title}
            delay={index * 0.05}
            className={cn(
              "h-full",
              isLastOddItem && "md:col-span-2",
            )}
          >
            <Card className="group h-full overflow-hidden rounded-3xl border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]">
              <CardContent className="relative flex h-full flex-col p-6 sm:p-7">
                <div
                  className="absolute right-0 top-0 size-32 rounded-full bg-primary/5 blur-3xl transition-transform duration-500 group-hover:scale-150"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between gap-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary font-heading text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <SearchCheck
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                </div>

                <div className="relative mt-6">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {criterion.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {criterion.description}
                  </p>
                </div>

                <div className="relative mt-auto pt-6">
                  <div className="h-px bg-border" />

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Selection criterion
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        );
      })}
    </div>

    <Reveal className="mx-auto mt-8 max-w-5xl">
      <Card className="brand-gradient-dark relative overflow-hidden rounded-3xl border-0 text-white shadow-[var(--shadow-card)]">
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand-sky/20 blur-3xl"
          aria-hidden="true"
        />

        <CardContent className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-brand-sky">
              <ClipboardCheck
                className="size-6"
                aria-hidden="true"
              />
            </span>

            <div>
              <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">
                Review the complete selection process.
              </h3>

              <p className="mt-2 max-w-2xl leading-7 text-white/70">
                Learn about eligibility, application requirements, evaluation
                steps, responsibilities, project coverage, and what happens
                after an organization is selected.
              </p>
            </div>
          </div>

          <Link
            href="/selection-process"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "min-h-13 w-full shrink-0 rounded-full bg-primary px-7 text-primary-foreground shadow-[var(--shadow-primary)] hover:bg-primary/90 lg:w-auto",
            )}
          >
            View Full Selection Process

            <ArrowRight
              data-icon="inline-end"
              className="size-5"
              aria-hidden="true"
            />
          </Link>
        </CardContent>
      </Card>
    </Reveal>
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
                    Applications are now open
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
                        applyButtonClass,
                        "w-full lg:w-auto",
                      )}
                    >
                      Apply for the Project

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