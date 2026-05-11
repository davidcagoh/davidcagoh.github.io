import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "wouter";
type StatusChip = string;

interface WorkLayoutProps {
  title: string;
  kicker: string;
  status: StatusChip[];
  lede: string;
  children: ReactNode;
}

export function WorkLayout({ title, kicker, status, lede, children }: WorkLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain" aria-hidden="true" />
      <main className="container relative py-8 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to index
          </Link>

          <article className="mt-10 border-paper-edge bg-card px-6 py-10 shadow-paper sm:px-10 sm:py-12">
            <p className="section-kicker">{kicker}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
              {title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-1.5">
              {status.map((s) => (
                <span
                  key={s}
                  className="metadata-label inline-flex items-center border border-ink/15 bg-paper-panel px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-foreground/90">{lede}</p>

            <div className="mt-8 space-y-8 text-base leading-7 text-foreground/85">
              {children}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-2xl leading-tight text-foreground sm:text-[1.75rem]">
      {children}
    </h2>
  );
}

export function LinkRow({ links }: { links: Array<{ label: string; href: string; note?: string }> }) {
  return (
    <ul className="space-y-3 border-t border-ink/10 pt-4">
      {links.map((l) => (
        <li key={l.href + l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-baseline gap-2 text-foreground transition-colors hover:text-primary"
          >
            <span className="font-medium">{l.label}</span>
            <ArrowUpRight className="h-4 w-4 self-center text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
          </a>
          {l.note && (
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{l.note}</p>
          )}
        </li>
      ))}
    </ul>
  );
}
