import Link from "next/link";

interface WorkInProgressProps {
  title?: string;
  message?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function WorkInProgress({
  title = "Work in Progress",
  message = "This page is still under construction. We're working on something great — check back soon!",
  ctaLabel = "Go back home",
  ctaHref = "/",
  className = "",
}: WorkInProgressProps) {
  return (
    <section
      aria-labelledby="wip-title"
      className={`mx-auto mb-[500px] max-w-3xl px-4 py-12 flex items-center justify-center ${className}`}
    >
      <div className="group relative w-full rounded-2xl border border-border bg-gradient-to-b from-background/60 to-background/30 p-8 shadow-md transition-transform duration-300 hover:-translate-y-2">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -right-8 -bottom-8 h-20 w-20 rounded-full bg-gradient-to-br from-secondary/20 to-transparent blur-3xl opacity-50" />

        <div className="flex flex-col items-center text-center">
          {/* Animated icon */}
          <div className="mb-6 flex items-center justify-center">
            <div className="transform transition-transform duration-700 group-hover:rotate-[360deg]">
              <svg
                className="h-20 w-20 animate-bounce-slow text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2c.7 0 2.2.8 3.7 2.2 1.5 1.4 2.1 3.1 2.1 3.1s-.6.2-1.6.7c-1.2.7-2.7 1.9-3.8 3.1-1.1 1.2-1.9 2.5-2.4 3.9-.2.6-.8 1-1.5 1H8c-1.1 0-2-.9-2-2V11.9c0-.7.4-1.3 1-1.6 1.4-.6 2.8-1.6 3.8-2.7C11.4 6.6 12 4.3 12 2z" />
                <circle cx="17.5" cy="6.5" r="1.2" className="fill-secondary" />
              </svg>
            </div>
          </div>

          <h2 id="wip-title" className="mb-2 text-5xl font-semibold">
            {title}
          </h2>

          <p className="max-w-xl text-2xl text-muted-foreground leading-relaxed">
            {message}
          </p>

          {ctaLabel ? (
            <div className="mt-6">
              <Link
                href={ctaHref}
                className="rounded-md bg-primary px-4 py-2 text-xl font-medium text-white shadow hover:brightness-95 transition"
              >
                {ctaLabel}
              </Link>
            </div>
          ) : null}

          <p className="mt-4 text-xl text-muted-foreground/80">
            Estimated time: <span className="font-medium">coming soon</span>
          </p>
        </div>
      </div>
    </section>
  );
}
