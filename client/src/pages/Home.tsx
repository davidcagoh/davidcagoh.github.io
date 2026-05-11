/*
Design philosophy for this page: Scholarly Marginalia.
This page should read like a compact academic calling card with editorial restraint,
asymmetric composition, quiet authority, and text-led hierarchy. Every section must
reinforce the user's identity as a principled mathematician and purposeful builder.
*/

import { ArrowUpRight, BookOpenText, Building2, Linkedin, NotebookPen } from "lucide-react";
import { Link } from "wouter";
import {
  buildingProjects,
  mathematicsProjects,
  type Project,
} from "@/data/projects";

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

function StatusChips({ status }: { status: Project["status"] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {status.map((s) => (
        <span
          key={s}
          className="metadata-label inline-flex items-center border border-ink/15 bg-paper-panel px-2 py-1"
        >
          {s}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ordinal = String(index + 1).padStart(2, "0");

  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="metadata-label">{ordinal}</p>
          <h3 className="mt-1 font-display text-[1.55rem] leading-tight text-foreground transition-colors group-hover:text-primary sm:text-[1.75rem]">
            {project.title}
          </h3>
        </div>
        {(project.detailPath || project.primary) && (
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        )}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-[0.98rem]">
        {project.pitch}
      </p>
      {project.highlights.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm leading-6 text-foreground/75">
          {project.highlights.map((h) => (
            <li key={h} className="before:mr-2 before:text-muted-foreground before:content-['—']">
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <StatusChips status={project.status} />
        {project.primary && !project.detailPath && (
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-primary">
            {project.primary.label} →
          </span>
        )}
        {project.detailPath && (
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-primary">
            Read more →
          </span>
        )}
      </div>
    </>
  );

  const sharedClass =
    "group block border-paper-edge bg-card px-5 py-5 shadow-paper transition-colors sm:px-6";

  if (project.detailPath) {
    return (
      <Link href={project.detailPath} className={sharedClass}>
        {inner}
      </Link>
    );
  }

  if (project.primary) {
    return (
      <a
        href={project.primary.href}
        target="_blank"
        rel="noreferrer"
        className={sharedClass}
      >
        {inner}
      </a>
    );
  }

  return <div className={sharedClass}>{inner}</div>;
}

function ProjectSection({
  kicker,
  heading,
  blurb,
  items,
  startIndex,
}: {
  kicker: string;
  heading: string;
  blurb: string;
  items: Project[];
  startIndex: number;
}) {
  return (
    <div className="border-paper-edge bg-paper-panel px-6 py-7 shadow-paper sm:px-8">
      <div className="flex flex-col gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">{kicker}</p>
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-[2.4rem]">
            {heading}
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">{blurb}</p>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {items.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={startIndex + i} />
        ))}
      </div>
    </div>
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
                <div>
                  <p className="text-lg leading-8 text-foreground/90">
                    My long-run interest is in helping shape education through public
                    leadership, institution-building, and careful thought. Mathematics
                    grounds how I reason. Building lets me test ideas in practice. Writing
                    helps me clarify what is worth doing.
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

            <ProjectSection
              kicker="Mathematics"
              heading="Papers and proofs"
              blurb="Formal and theoretical work, mostly machine-checked, mostly in flight."
              items={mathematicsProjects}
              startIndex={0}
            />

            <ProjectSection
              kicker="Building"
              heading="Systems in use"
              blurb="Software shipped to real users — students, family, myself — and the lessons that fell out."
              items={buildingProjects}
              startIndex={mathematicsProjects.length}
            />

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
