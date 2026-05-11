import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "wouter";

interface MarkdownProseProps {
  children: string;
}

function isInternal(href: string | undefined): href is string {
  return !!href && href.startsWith("/");
}

function isExternal(href: string | undefined): href is string {
  return !!href && /^https?:\/\//.test(href);
}

export function MarkdownProse({ children }: MarkdownProseProps) {
  return (
    <div className="space-y-6 text-base leading-7 text-foreground/85">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="mt-10 font-display text-2xl leading-tight text-foreground sm:text-[1.75rem]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 font-display text-xl leading-tight text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => <p className="leading-7">{children}</p>,
          ul: ({ children }) => (
            <ul className="space-y-1 pl-0">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="before:mr-2 before:text-muted-foreground before:content-['—']">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          code: ({ children, ...rest }: ComponentProps<"code">) => (
            <code
              className="rounded bg-paper-panel px-1.5 py-0.5 font-mono text-[0.92em]"
              {...rest}
            >
              {children}
            </code>
          ),
          a: ({ href, children }) => {
            if (isInternal(href)) {
              return (
                <Link
                  href={href}
                  className="underline decoration-ink/30 underline-offset-2 transition-colors hover:text-primary"
                >
                  {children}
                </Link>
              );
            }
            if (isExternal(href)) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline gap-1 underline decoration-ink/30 underline-offset-2 transition-colors hover:text-primary"
                >
                  {children}
                  <ArrowUpRight className="h-3.5 w-3.5 self-center" />
                </a>
              );
            }
            return <a href={href}>{children}</a>;
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-ink/20 pl-4 italic text-muted-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
