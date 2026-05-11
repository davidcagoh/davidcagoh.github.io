/*
Design philosophy for this page: Scholarly Marginalia.
This page should read like a compact academic calling card with editorial restraint,
asymmetric composition, quiet authority, and text-led hierarchy. Every section must
reinforce the user's identity as a principled mathematician and purposeful builder.
*/

import { ArrowUpRight, BookOpenText, Building2, Linkedin, NotebookPen } from "lucide-react";
import { Link } from "wouter";
import { threads, type Thread } from "@/data/threads";

const publicLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/davidcagoh?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    description: "Professional profile, experience, and writing-adjacent public record.",
  },
  {
    label: "GitHub",
    href: "https://github.com/davidcagoh",
    description: "Code, notebooks, and public technical work.",
  },
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
              <div className="space-y-3">
                <p className="section-kicker">David Goh</p>
                <h1 className="font-display text-5xl leading-[0.95] font-semibold text-foreground sm:text-6xl lg:text-7xl">
                  Principled
                  <span className="mt-1 block text-accent-foreground/90">mathematician,</span>
                  purposeful builder.
                </h1>
              </div>

              <div className="space-y-4 text-base leading-7 text-muted-foreground sm:text-[1.05rem]">
                <p>
                  I want to be a force that shapes education. To that end, I will lead,
                  build, and write.
                </p>
                <p>
                  I am a Master of Science in Applied Computing (Applied Mathematics)
                  student at the University of Toronto and a Singapore Public Service
                  Commission (Teaching Service) Scholar on a public-sector leadership
                  grooming path that begins after my studies.
                </p>
                <p>
                  In the meantime, I am trying to become both an able and principled
                  mathematician and an able and purposeful builder.
                </p>
              </div>
            </div>

            <div className="space-y-6 border-t border-ink/10 pt-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1.5">
                  <BookOpenText className="h-4 w-4" />
                  Applied Mathematics
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1.5">
                  <Building2 className="h-4 w-4" />
                  Education & public service
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-3 py-1.5">
                  <NotebookPen className="h-4 w-4" />
                  Writing in progress
                </span>
              </div>

              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                This site is a compact record of direction and work: a place to locate the
                institutions, commitments, and projects shaping what I am trying to build.
              </p>
            </div>
          </aside>

          <section className="space-y-8 lg:space-y-10">
            <div className="border-paper-edge bg-card px-6 py-7 shadow-paper sm:px-8">
              <p className="section-kicker">Orientation</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
                <div className="space-y-4">
                  <p className="text-lg leading-8 text-foreground/90">
                    My long-run interest is in helping shape education through public
                    leadership, institution-building, and careful thought. Mathematics
                    grounds how I reason. Building lets me test ideas in practice.
                    Writing helps me clarify what is worth doing.
                  </p>
                  <p className="text-base leading-7 text-foreground/80">
                    I tend to wander sideways from whatever I'm assigned — a class topic
                    becomes three side projects, an old undergrad result wants to be
                    revived, a tool I built for myself becomes the paper. The work below
                    is grouped by the thread it sits on, not by topic.
                  </p>
                </div>
                <div className="space-y-4 border-t border-ink/10 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <div>
                    <p className="metadata-label">Current study</p>
                    <p className="mt-1 text-base leading-7 text-foreground">
                      MScAC, Applied Mathematics<br />
                      University of Toronto
                    </p>
                  </div>
                  <div>
                    <p className="metadata-label">Public commitment</p>
                    <p className="mt-1 text-base leading-7 text-foreground">
                      Singapore Public Service Commission (Teaching Service) Scholar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-paper-edge bg-card px-6 py-7 shadow-paper sm:px-8">
              <p className="section-kicker">Elsewhere</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {publicLinks.map((link) => (
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
                  <p className="section-kicker">Threads</p>
                  <h2 className="font-display text-3xl leading-tight text-foreground sm:text-[2.4rem]">
                    Four lines of work
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-muted-foreground">
                  Each card opens a side page that walks through the projects on that
                  thread, what produced them, and where they stand.
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
                Mathematics, the institutions that decide what gets built, and the craft
                of building things that clarify difficult questions in education.
              </p>
              <a
                href="https://www.linkedin.com/in/davidcagoh?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Continue on LinkedIn
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
