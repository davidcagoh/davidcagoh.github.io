/*
Design philosophy for this page: Scholarly Marginalia.
This page should read like a compact academic calling card with editorial restraint,
asymmetric composition, quiet authority, and text-led hierarchy. Every section must
reinforce the user's identity as a principled mathematician and purposeful builder.

To edit the text on this page, see client/src/content/home.ts.
To edit the four thread gateway cards, see client/src/content/threads.ts.
*/

import { ArrowUpRight, BookOpenText, Building2, Linkedin, NotebookPen } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { Link } from "wouter";
import { home } from "@/content/home";
import { threads, type Thread } from "@/content/threads";

// Icons for the three sidebar tag chips, in order. If you add or remove
// tags in content/home.ts, mirror the change here.
const tagIcons: ComponentType<SVGProps<SVGSVGElement>>[] = [
  BookOpenText,
  Building2,
  NotebookPen,
];

function ThreadCard({ thread }: { thread: Thread }) {
  return (
    <Link
      href={thread.path}
      className="group flex h-full flex-col justify-between border-paper-edge bg-card px-6 py-6 shadow-paper transition-colors sm:px-7 sm:py-7"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <p className="metadata-label">{thread.kicker}</p>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <h3 className="mt-2 font-display text-[1.75rem] leading-tight text-foreground transition-colors group-hover:text-primary sm:text-[2rem]">
          {thread.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-[0.98rem]">
          {thread.lede}
        </p>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {thread.chips.map((c) => (
          <span
            key={c}
            className="metadata-label inline-flex items-center border border-ink/15 bg-paper-panel px-2 py-1"
          >
            {c}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain" aria-hidden="true" />
      <main className="container relative py-8 sm:py-10 lg:py-14">
        <div className="editorial-grid min-h-[calc(100vh-4rem)] gap-10 lg:gap-14">
          <aside className="flex flex-col justify-between border-paper-edge bg-paper-panel px-6 py-8 shadow-paper sm:px-8 lg:sticky lg:top-8 lg:min-h-[calc(100vh-7rem)] lg:px-10 lg:py-10">
            <div className="space-y-8">
              {home.photo.src && (
                <div className="border-paper-edge shadow-paper" style={{ width: "9rem" }}>
                  <img
                    src={home.photo.src}
                    alt={home.photo.alt}
                    width={144}
                    height={144}
                    loading="eager"
                    className="block h-36 w-36 object-cover"
                    style={{ objectPosition: home.photo.objectPosition }}
                  />
                </div>
              )}
              <div className="space-y-3">
                <p className="section-kicker">{home.nameKicker}</p>
                <h1 className="font-display text-4xl leading-[0.95] font-semibold text-foreground sm:text-5xl lg:text-6xl">
                  {home.hero.line1}
                  <span className="mt-1 block text-accent-foreground/90">{home.hero.line2}</span>
                  {home.hero.line3}
                </h1>
              </div>

              <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-[1.05rem]">
                {home.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="space-y-6 border-t border-ink/10 pt-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {home.tags.map((tag, i) => {
                  const Icon = tagIcons[i] ?? BookOpenText;
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1.5"
                    >
                      <Icon className="h-4 w-4" />
                      {tag}
                    </span>
                  );
                })}
              </div>

              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                {home.sidebarFooter}
              </p>
            </div>
          </aside>

          <section className="space-y-8 lg:space-y-10">
            <div className="border-paper-edge bg-card px-6 py-7 shadow-paper sm:px-8">
              <p className="section-kicker">{home.orientation.kicker}</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
                <div className="space-y-4">
                  {home.orientation.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0
                          ? "text-lg leading-8 text-foreground/90"
                          : "text-base leading-7 text-foreground/80"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
                <div className="space-y-4 border-t border-ink/10 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <div>
                    <p className="metadata-label">{home.orientation.currentStudyLabel}</p>
                    <p className="mt-1 text-base leading-7 text-foreground">
                      {home.orientation.currentStudyLines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < home.orientation.currentStudyLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                  <div>
                    <p className="metadata-label">{home.orientation.publicCommitmentLabel}</p>
                    <p className="mt-1 text-base leading-7 text-foreground">
                      {home.orientation.publicCommitmentText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-paper-edge bg-card px-6 py-7 shadow-paper sm:px-8">
              <p className="section-kicker">{home.elsewhere.kicker}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {home.elsewhere.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block border-b border-ink/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 sm:last:border-r-0 sm:last:pr-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl leading-tight text-foreground transition-colors group-hover:text-primary">
                          {link.label}
                        </h2>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="border-paper-edge bg-paper-panel px-6 py-7 shadow-paper sm:px-8">
              <div className="flex flex-col gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-kicker">{home.threadsIntro.kicker}</p>
                  <h2 className="font-display text-3xl leading-tight text-foreground sm:text-[2.4rem]">
                    {home.threadsIntro.heading}
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  {home.threadsIntro.blurb}
                </p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {threads.map((t) => (
                  <ThreadCard key={t.slug} thread={t} />
                ))}
              </div>
            </div>

            <div className="flex items-start justify-between gap-6 border-t border-ink/10 px-1 pt-4">
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                {home.footer.text}
              </p>
              <a
                href={home.footer.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {home.footer.ctaLabel}
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
