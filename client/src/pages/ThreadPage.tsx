import { ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import { MarkdownProse } from "@/components/MarkdownProse";
import { findThread } from "@/data/threads";
import NotFound from "@/pages/NotFound";

import agentAssistedResearch from "@/content/threads/agent-assisted-research.md?raw";
import builtForPeople from "@/content/threads/built-for-people.md?raw";
import dlTheoryClass from "@/content/threads/dl-theory-class.md?raw";
import resurrectedFromDuke from "@/content/threads/resurrected-from-duke.md?raw";

const content: Record<string, string> = {
  "agent-assisted-research": agentAssistedResearch,
  "resurrected-from-duke": resurrectedFromDuke,
  "dl-theory-class": dlTheoryClass,
  "built-for-people": builtForPeople,
};

export default function ThreadPage() {
  const [, params] = useRoute<{ slug: string }>("/threads/:slug");
  const slug = params?.slug ?? "";
  const thread = findThread(slug);
  const md = content[slug];

  if (!thread || !md) {
    return <NotFound />;
  }

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
            <p className="section-kicker">{thread.kicker}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
              {thread.title}
            </h1>

            <div className="mt-8">
              <MarkdownProse>{md}</MarkdownProse>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
