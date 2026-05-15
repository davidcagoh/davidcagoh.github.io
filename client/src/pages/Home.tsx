/*
Home page — single-column index.
Photo + name + role, short bio, contact line, Selected work grouped by thread,
link to /about for the long-form narrative. Edit text in content/home.ts and
content/selected-work.ts.
*/

import { Link } from "wouter";
import { home } from "@/content/home";
import { selectedWork } from "@/content/selected-work";
import { findThread } from "@/content/threads";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain" aria-hidden="true" />
      <main className="container relative py-10 sm:py-14 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
            {home.photo.src && (
              <div className="border-paper-edge shadow-paper shrink-0" style={{ width: "7rem" }}>
                <img
                  src={home.photo.src}
                  alt={home.photo.alt}
                  width={112}
                  height={112}
                  loading="eager"
                  className="block h-28 w-28 object-cover"
                  style={{ objectPosition: home.photo.objectPosition }}
                />
              </div>
            )}
            <div className="min-w-0">
              <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
                {home.name}
              </h1>
              <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                {home.role}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {home.contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="text-foreground underline decoration-ink/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <section className="mt-8 text-base leading-7 text-foreground/85 sm:text-[1.05rem]">
            <p>{home.bio}</p>
          </section>

          <section className="mt-12">
            <h2 className="section-kicker">{home.selectedWorkHeading}</h2>
            <div className="mt-4 space-y-8">
              {selectedWork.map((group) => {
                const thread = findThread(group.threadSlug);
                if (!thread) return null;
                return (
                  <div key={group.threadSlug}>
                    <h3 className="font-display text-xl text-foreground sm:text-2xl">
                      {thread.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {thread.lede}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-base leading-7">
                      {group.items.map((item) => (
                        <li key={item.title} className="flex items-baseline gap-2">
                          <span className="text-muted-foreground/60" aria-hidden="true">
                            ·
                          </span>
                          <span>
                            <span className="text-foreground">{item.title}</span>
                            {item.kicker && (
                              <span className="text-muted-foreground"> — {item.kicker}</span>
                            )}
                            {item.links && item.links.length > 0 && (
                              <span className="text-muted-foreground">
                                {" ("}
                                {item.links.map((l, i) => (
                                  <span key={l.href}>
                                    {i > 0 && " · "}
                                    <a
                                      href={l.href}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                                    >
                                      {l.label}
                                    </a>
                                  </span>
                                ))}
                                {")"}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <div className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-ink/30 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              {home.aboutLinkLabel}
            </Link>
          </div>

          <footer className="mt-12 border-t border-ink/10 pt-6">
            <p className="text-sm leading-6 text-muted-foreground">{home.footerText}</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
