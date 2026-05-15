/*
About / personal page. The four thread narratives stitched into one scroll.
Thread metadata (title, kicker, lede) comes from content/threads.ts; bodies
come from content/threads/*.md.
*/

import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { MarkdownProse } from "@/components/MarkdownProse";
import { threads } from "@/content/threads";

import agentAssistedResearch from "@/content/threads/agent-assisted-research.md?raw";
import builtForPeople from "@/content/threads/built-for-people.md?raw";
import dlTheoryClass from "@/content/threads/dl-theory-class.md?raw";
import resurrectedFromDuke from "@/content/threads/resurrected-from-duke.md?raw";

const bodies: Record<string, string> = {
  "agent-assisted-research": agentAssistedResearch,
  "resurrected-from-duke": resurrectedFromDuke,
  "dl-theory-class": dlTheoryClass,
  "built-for-people": builtForPeople,
};

export default function About() {
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

          <header className="mt-10">
            <h1 className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
              Threads
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Eighty percent of my brainpower goes on sidequests spun off from something I read,
              overheard, or was trying to build so I could do less work. What follows is less an
              about-me than a history of the daydreams — four threads I keep pulling on.
            </p>
          </header>

          <div className="mt-10 space-y-12">
            {threads.map((t) => {
              const md = bodies[t.slug];
              if (!md) return null;
              return (
                <article
                  key={t.slug}
                  className="border-paper-edge bg-card px-6 py-10 shadow-paper sm:px-10 sm:py-12"
                >
                  <p className="section-kicker">{t.kicker}</p>
                  <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl">
                    {t.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{t.lede}</p>
                  <div className="mt-8">
                    <MarkdownProse>{md}</MarkdownProse>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
