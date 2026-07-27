import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Database,
    ExternalLink,
    FileText,
    LockKeyhole,
    Mail,
    Scale,
    ShieldCheck,
    UserCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://build-basilan.online";

export const metadata: Metadata = {
    title: "Privacy Policy",

    description:
        "Learn how Build Basilan collects, uses, stores, protects, and manages personal information submitted through its website and application form.",

    alternates: {
        canonical: `${siteUrl}/privacy-policy`,
    },

    openGraph: {
        type: "website",
        locale: "en_PH",
        url: `${siteUrl}/privacy-policy`,
        siteName: "Build Basilan",
        title: "Privacy Policy | Build Basilan",
        description:
            "Learn how Build Basilan manages personal information submitted through its website and project application process.",
        images: [
            {
                url: `${siteUrl}/build-basilan-og.png`,
                width: 1200,
                height: 630,
                alt: "Build Basilan Privacy Policy",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Build Basilan",
        description:
            "Learn how Build Basilan manages personal information submitted through its website and project application process.",
        images: [`${siteUrl}/build-basilan-og.png`],
    },

    robots: {
        index: true,
        follow: true,
    },
};

const lastUpdated = "July 27, 2026";

const privacyPrinciples = [
    {
        title: "Purpose",
        description:
            "Information is collected only for clear and legitimate Build Basilan activities.",
        icon: FileText,
    },
    {
        title: "Limited access",
        description:
            "Access is limited to the founder and authorized project collaborators when needed.",
        icon: LockKeyhole,
    },
    {
        title: "Transparency",
        description:
            "Applicants receive clear information about how their submitted data is handled.",
        icon: ShieldCheck,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-background">
            <div
                className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-60"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute -left-32 top-0 -z-10 size-[30rem] rounded-full bg-brand-sky/15 blur-3xl"
                aria-hidden="true"
            />

            <div
                className="pointer-events-none absolute -right-40 top-80 -z-10 size-[34rem] rounded-full bg-primary/10 blur-3xl"
                aria-hidden="true"
            />

            <header className="border-b border-border/70 bg-background/85 backdrop-blur-xl">
                <div className="site-container flex min-h-20 items-center justify-between gap-5 py-3">
                    <Link
                        href="/"
                        className="flex min-w-0 items-center gap-3"
                        aria-label="Go to Build Basilan homepage"
                    >
                        <div className="relative size-11 shrink-0 overflow-hidden rounded-xl">
                            <Image
                                src="/build-basilan-logo.png"
                                alt=""
                                fill
                                priority
                                sizes="44px"
                                className="object-contain"
                            />
                        </div>

                        <div className="min-w-0">
                            <p className="truncate font-heading text-base font-bold text-foreground">
                                Build Basilan
                            </p>

                            <p className="hidden truncate text-xs text-muted-foreground sm:block">
                                Building a Better Basilan, One Website at a Time.
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({
                                variant: "outline",
                            }),
                            "shrink-0 rounded-full",
                        )}
                    >
                        <ArrowLeft
                            data-icon="inline-start"
                            className="size-4"
                            aria-hidden="true"
                        />

                        <span className="hidden sm:inline">Back to Home</span>
                        <span className="sm:hidden">Home</span>
                    </Link>
                </div>
            </header>

            <section className="pb-14 pt-16 sm:pb-20 sm:pt-24">
                <div className="site-container">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge
                            variant="secondary"
                            className="rounded-full px-4 py-2 text-primary"
                        >
                            <ShieldCheck className="size-4" aria-hidden="true" />
                            Your privacy matters
                        </Badge>

                        <h1 className="mt-7 font-heading text-4xl font-bold tracking-[-0.045em] text-foreground sm:text-5xl lg:text-6xl">
                            Privacy Policy
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                            This Privacy Policy explains how Build Basilan collects, uses,
                            stores, shares, and protects information submitted through the
                            website, application form, email, and project communications.
                        </p>

                        <p className="mt-5 text-sm font-medium text-muted-foreground">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    <Card className="mx-auto mt-12 max-w-5xl rounded-3xl border-primary/15 bg-card/90 shadow-[var(--shadow-soft)] backdrop-blur">
                        <CardContent className="grid gap-6 p-6 sm:p-8 md:grid-cols-3">
                            {privacyPrinciples.map((principle) => {
                                const Icon = principle.icon;

                                return (
                                    <div key={principle.title}>
                                        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                                            <Icon className="size-5" aria-hidden="true" />
                                        </span>

                                        <h2 className="mt-5 font-heading text-lg font-bold text-foreground">
                                            {principle.title}
                                        </h2>

                                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                            {principle.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="pb-20 sm:pb-28">
                <div className="site-container">
                    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[15rem_minmax(0,1fr)]">
                        <aside className="hidden lg:block">
                            <nav
                                className="sticky top-8 rounded-2xl border border-border bg-card p-5 shadow-sm"
                                aria-label="Privacy Policy sections"
                            >
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                    On this page
                                </p>

                                <div className="flex flex-col gap-1">
                                    {[
                                        ["overview", "Overview"],
                                        ["information", "Information collected"],
                                        ["usage", "How information is used"],
                                        ["google-forms", "Google Forms"],
                                        ["sharing", "Information sharing"],
                                        ["retention", "Data retention"],
                                        ["security", "Data security"],
                                        ["rights", "Your privacy rights"],
                                        ["cookies", "Cookies and technical data"],
                                        ["changes", "Policy changes"],
                                        ["contact", "Contact"],
                                    ].map(([href, label]) => (
                                        <a
                                            key={href}
                                            href={`#${href}`}
                                            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                                        >
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </aside>

                        <Card className="rounded-3xl">
                            <CardContent className="space-y-10 p-6 sm:p-10">
                                <PolicySection
                                    id="overview"
                                    number="01"
                                    title="About this Privacy Policy"
                                    icon={<ShieldCheck className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Build Basilan is a community initiative founded by Jaymar
                                        Maruji. It helps qualified NGOs, youth organizations,
                                        nonprofit initiatives, and community groups in Basilan
                                        establish a professional digital presence.
                                    </p>

                                    <p>
                                        This policy applies to personal information received
                                        through:
                                    </p>

                                    <PolicyList
                                        items={[
                                            "The Build Basilan website",
                                            "The Build Basilan Google application form",
                                            "Email communications",
                                            "Project meetings and consultations",
                                            "Content, documents, images, and files submitted for a website project",
                                        ]}
                                    />

                                    <p>
                                        By submitting information to Build Basilan, you acknowledge
                                        the data practices explained in this policy.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="information"
                                    number="02"
                                    title="Information we collect"
                                    icon={<Database className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Build Basilan collects information needed to evaluate
                                        applications, communicate with applicants, plan selected
                                        projects, and develop websites.
                                    </p>

                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        Organization information
                                    </h3>

                                    <PolicyList
                                        items={[
                                            "Organization name and organization type",
                                            "Mission, vision, programs, activities, and beneficiaries",
                                            "Office address or service location",
                                            "Official email address, telephone number, and social media pages",
                                            "Registration or organizational status when provided",
                                            "Existing website, domain, or digital platform information",
                                        ]}
                                    />

                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        Representative information
                                    </h3>

                                    <PolicyList
                                        items={[
                                            "Name of the organization representative",
                                            "Position or role in the organization",
                                            "Email address and telephone number",
                                            "Preferred communication method",
                                            "Information included in messages and project discussions",
                                        ]}
                                    />

                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        Project information
                                    </h3>

                                    <PolicyList
                                        items={[
                                            "Reasons for requesting a website",
                                            "Requested pages, functions, and website goals",
                                            "Target audience and community needs",
                                            "Logos, photos, videos, documents, testimonials, and written content",
                                            "Feedback, approvals, revisions, and project decisions",
                                            "Domain, hosting, website access, and maintenance information",
                                        ]}
                                    />

                                    <p>
                                        Applicants should avoid submitting passwords, banking
                                        information, government identification numbers, medical
                                        records, or other sensitive information unless Build
                                        Basilan specifically requests the information for a clear
                                        and lawful purpose.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="usage"
                                    number="03"
                                    title="How we use information"
                                    icon={<UserCheck className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Information submitted to Build Basilan is used for the
                                        following purposes:
                                    </p>

                                    <PolicyList
                                        items={[
                                            "Receiving and reviewing organization applications",
                                            "Confirming eligibility and project readiness",
                                            "Comparing applications using the published selection criteria",
                                            "Contacting applicants about questions, results, and next steps",
                                            "Planning the structure, content, design, and features of a selected website",
                                            "Preparing project agreements and documenting approvals",
                                            "Developing, testing, reviewing, and launching the website",
                                            "Providing website training and project support",
                                            "Maintaining accurate internal project records",
                                            "Responding to questions, concerns, and privacy requests",
                                            "Protecting Build Basilan, applicants, and partner organizations from misuse or security threats",
                                            "Complying with applicable legal and regulatory obligations",
                                        ]}
                                    />

                                    <p>
                                        Build Basilan does not use application information for
                                        unrelated commercial advertising. Personal information is
                                        not sold or rented.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="google-forms"
                                    number="04"
                                    title="Google Forms and external services"
                                    icon={<ExternalLink className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Build Basilan currently uses Google Forms to receive project
                                        applications. Information entered in the application form
                                        is transmitted to and stored through Google services.
                                    </p>

                                    <p>
                                        Google operates independently and processes information
                                        according to its own terms, security practices, and privacy
                                        policy. Applicants should review Google&apos;s privacy
                                        information before submitting the form.
                                    </p>

                                    <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            buttonVariants({
                                                variant: "outline",
                                            }),
                                            "rounded-full",
                                        )}
                                    >
                                        Read Google&apos;s Privacy Policy

                                        <ExternalLink
                                            data-icon="inline-end"
                                            className="size-4"
                                            aria-hidden="true"
                                        />
                                    </a>

                                    <p>
                                        Build Basilan might also use email, cloud storage, hosting,
                                        domain, analytics, and website deployment services. These
                                        providers process only the information required to deliver
                                        their service.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="sharing"
                                    number="05"
                                    title="When information is shared"
                                    icon={<Scale className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Build Basilan limits disclosure of personal information.
                                        Information is shared only when needed for a legitimate
                                        project purpose.
                                    </p>

                                    <p>Information might be shared with:</p>

                                    <PolicyList
                                        items={[
                                            "Authorized Build Basilan volunteers or project collaborators",
                                            "Technology providers used for forms, email, hosting, storage, domains, and deployment",
                                            "The applicant's authorized organization representatives",
                                            "Professional advisers or authorities when required by law",
                                            "A successor responsible for Build Basilan, subject to equivalent privacy responsibilities",
                                        ]}
                                    />

                                    <p>
                                        Volunteers and collaborators should receive access only to
                                        information needed for their assigned role. They should not
                                        reuse applicant data for personal, promotional, or unrelated
                                        purposes.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="retention"
                                    number="06"
                                    title="Storage and retention"
                                    icon={<Database className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Personal information is kept only for as long as needed to
                                        complete the purpose for which it was collected.
                                    </p>

                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        Unsuccessful applications
                                    </h3>

                                    <p>
                                        Application records from organizations that are not
                                        selected are normally retained for up to six (6) months.
                                        This period supports application review, applicant
                                        questions, future eligibility checks, and process
                                        improvement. Records are then deleted or anonymized unless
                                        a longer period is required by law or approved by the
                                        applicant.
                                    </p>

                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        Selected organizations
                                    </h3>

                                    <p>
                                        Project records for selected organizations are retained
                                        throughout planning, development, launch, training, and
                                        agreed support. Essential agreements, approvals, ownership
                                        records, and project documentation might be retained after
                                        launch for accountability and dispute prevention.
                                    </p>

                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        Public website content
                                    </h3>

                                    <p>
                                        Content approved for publication might remain publicly
                                        available while the partner website remains active.
                                        Organizations should confirm that they have permission to
                                        submit and publish names, photographs, testimonials, logos,
                                        and other materials.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="security"
                                    number="07"
                                    title="How information is protected"
                                    icon={<LockKeyhole className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Build Basilan applies reasonable organizational and
                                        technical safeguards suited to the size and nature of the
                                        initiative.
                                    </p>

                                    <PolicyList
                                        items={[
                                            "Restricted access to application responses and project files",
                                            "Password-protected accounts and devices",
                                            "Two-step verification where supported",
                                            "Controlled sharing permissions",
                                            "Secure website connections through HTTPS",
                                            "Regular review of account and file access",
                                            "Removal of access when a collaborator leaves a project",
                                            "Data minimization and deletion of records no longer needed",
                                        ]}
                                    />

                                    <p>
                                        No online storage or transmission method provides absolute
                                        security. Build Basilan will assess suspected incidents and
                                        take appropriate steps to limit harm, protect affected
                                        information, and provide required notifications.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="rights"
                                    number="08"
                                    title="Your privacy rights"
                                    icon={<Scale className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Subject to applicable Philippine data privacy law, people
                                        whose personal information is processed by Build Basilan
                                        have rights concerning their information.
                                    </p>

                                    <PolicyList
                                        items={[
                                            "The right to be informed about data collection and processing",
                                            "The right to request access to personal information",
                                            "The right to object to certain processing activities",
                                            "The right to correct inaccurate or incomplete information",
                                            "The right to request erasure or blocking when legally appropriate",
                                            "The right to receive eligible information in a portable format",
                                            "The right to file a complaint with the National Privacy Commission",
                                            "The right to seek compensation when legally entitled",
                                        ]}
                                    />

                                    <p>
                                        To submit a request, contact Build Basilan through the email
                                        address listed below. Include your name, organization,
                                        request, and enough information to verify your connection
                                        to the submitted data.
                                    </p>

                                    <p>
                                        Build Basilan might request additional verification before
                                        releasing, changing, or deleting information. This step
                                        protects applicants from unauthorized requests.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="cookies"
                                    number="09"
                                    title="Cookies and technical information"
                                    icon={<Database className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        The main Build Basilan website does not intentionally use
                                        advertising cookies or sell browsing activity for targeted
                                        advertising.
                                    </p>

                                    <p>
                                        The hosting provider and other technical services might
                                        process limited technical information needed for security,
                                        reliability, and website delivery. This information might
                                        include:
                                    </p>

                                    <PolicyList
                                        items={[
                                            "Internet Protocol address",
                                            "Browser and device type",
                                            "Operating system",
                                            "Pages visited",
                                            "Date and time of requests",
                                            "Referring website",
                                            "Errors and performance information",
                                        ]}
                                    />

                                    <p>
                                        If Build Basilan introduces analytics, embedded media,
                                        optional cookies, or new tracking technologies, this policy
                                        and any consent controls will be updated before use.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="changes"
                                    number="10"
                                    title="Changes to this policy"
                                    icon={<FileText className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Build Basilan might update this Privacy Policy when the
                                        website, application process, technology providers, legal
                                        requirements, or project practices change.
                                    </p>

                                    <p>
                                        The current version will remain available on this page. The
                                        date at the top of the policy will show when the latest
                                        revision took effect.
                                    </p>

                                    <p>
                                        Material changes affecting existing application or project
                                        information will be communicated through an appropriate
                                        channel when required.
                                    </p>
                                </PolicySection>

                                <PolicySection
                                    id="contact"
                                    number="11"
                                    title="Privacy questions and requests"
                                    icon={<Mail className="size-5" aria-hidden="true" />}
                                >
                                    <p>
                                        Contact Build Basilan for questions, corrections, access
                                        requests, deletion requests, objections, or privacy
                                        concerns.
                                    </p>

                                    <Card className="rounded-2xl bg-muted/70">
                                        <CardContent className="p-5 sm:p-6">
                                            <p className="font-heading text-lg font-bold text-foreground">
                                                Build Basilan
                                            </p>

                                            <p className="mt-1 text-muted-foreground">
                                                Attention: Privacy Contact
                                            </p>

                                            <div className="mt-5 space-y-3">
                                                <p className="flex items-start gap-3 text-sm text-muted-foreground">
                                                    <Mail
                                                        className="mt-0.5 size-4 shrink-0 text-primary"
                                                        aria-hidden="true"
                                                    />

                                                    <a
                                                        href="mailto:jaymmaruji@gmail.com?subject=Build%20Basilan%20Privacy%20Request"
                                                        className="transition-colors hover:text-primary"
                                                    >
                                                        jaymmaruji@gmail.com
                                                    </a>
                                                </p>

                                                <p className="text-sm text-muted-foreground">
                                                    Location: Basilan, Philippines
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <p>
                                        Please use the subject line “Build Basilan Privacy Request”
                                        so the message is identified and reviewed correctly.
                                    </p>
                                </PolicySection>

                                <Separator />

                                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                                    <div>
                                        <p className="font-heading font-bold text-foreground">
                                            Finished reviewing the policy?
                                        </p>

                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Return to the Build Basilan homepage.
                                        </p>
                                    </div>

                                    <Link
                                        href="/"
                                        className={cn(
                                            buttonVariants({
                                                variant: "default",
                                            }),
                                            "rounded-full",
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
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}

function PolicySection({
    id,
    number,
    title,
    icon,
    children,
}: {
    id: string;
    number: string;
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="scroll-mt-8">
            <div className="mb-6 flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    {icon}
                </span>

                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        Section {number}
                    </p>

                    <h2 className="mt-1 font-heading text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
                        {title}
                    </h2>
                </div>
            </div>

            <div className="space-y-5 leading-8 text-muted-foreground">
                {children}
            </div>
        </section>
    );
}

function PolicyList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <span
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden="true"
                    />

                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}