import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "home", section: "home" },
  { href: "/events", label: "events", section: "events" },
  { href: "/impact", label: "impact", section: "impact" },
  { href: "/team", label: "team", section: "team" },
  {
    href: "https://tally.so/r/A7J7be",
    label: "mailing list",
    section: "mailing list",
    external: true,
  },
  {
    href: "https://hcb.hackclub.com/donations/start/thecodehatch",
    label: "donate",
    section: "donate",
    external: true,
  },
];

function TickerItem() {
  return (
    <span className="font-manrope text-[1rem] leading-none tracking-[0.01em] text-[#41403F] md:text-[1.15rem]">
      <a
        href="https://codeaz.codehatch.org"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-[#ed5332]"
      >
        Code Arizona
      </a>
      {" is our flagship summer event for Phoenix teenagers "}
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const highlightRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const highlight = highlightRef.current;
    const nav = navRef.current;
    if (!highlight || !nav) return;

    const links = nav.querySelectorAll<HTMLAnchorElement>(".nav-link");
    const rotations: Record<string, string> = {
      story: "-3deg",
      events: "1deg",
      impact: "1deg",
      team: "-2deg",
      sponsor: "-1deg",
      join: "3deg",
      donate: "2deg",
    };

    let activeLink: HTMLAnchorElement | undefined;

    for (const link of links) {
      const href = link.getAttribute("href");
      const isActive = href === pathname || (pathname === "/" && href === "/");

      link.classList.toggle("active", isActive);
      if (isActive) activeLink = link;
    }

    const parent = activeLink?.parentElement;
    if (!activeLink || !parent) {
      highlight.style.opacity = "0";
      return;
    }

    const linkRect = activeLink.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    highlight.style.width = `${linkRect.width}px`;
    highlight.style.left = `${linkRect.left - parentRect.left}px`;
    highlight.style.opacity = "1";
    highlight.style.transform = `rotate(${
      rotations[activeLink.getAttribute("data-section") || ""] || "-2deg"
    })`;
  }, [pathname]);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[10000] w-screen overflow-hidden border-b border-t border-b-black/10 border-t-black/5 bg-[#ebe7de] shadow-[0_8px_24px_rgba(0,0,0,0.06)] backdrop-blur-[8px]"
        aria-label="Launch announcement"
      >
        <div className="ticker-track flex">
          <div className="ticker-content flex shrink-0 items-center whitespace-nowrap py-2 md:py-[0.55rem]">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && (
                  <span className="mx-4 text-[#706F6B] md:mx-[1.1rem]">·</span>
                )}
                <TickerItem />
              </span>
            ))}
          </div>
          <div
            className="ticker-content flex shrink-0 items-center whitespace-nowrap py-2 md:py-[0.55rem]"
            aria-hidden="true"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && (
                  <span className="mx-4 text-[#706F6B] md:mx-[1.1rem]">·</span>
                )}
                <TickerItem />
              </span>
            ))}
          </div>
        </div>
      </div>

      <nav className="fixed left-1/2 top-[4.35rem] z-[9999] w-3/4 -translate-x-1/2 transform sm:w-11/12 md:top-16 md:w-11/12 lg:w-3/4">
        <div className="flex items-center justify-between rounded-full border border-black/10 bg-[#ebe7de] px-8 py-4 shadow-lg shadow-black/5 backdrop-blur-lg backdrop-filter">
          <div className="mr-8 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="The Code Hatch logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="hidden text-lg font-medium tracking-tight text-[#41403F] sm:inline">
                The Code Hatch
              </span>
            </Link>
          </div>

          <div
            ref={navRef}
            className="relative hidden items-center gap-6 md:flex"
          >
            <div
              ref={highlightRef}
              className="pointer-events-none absolute h-8 rounded-full bg-gradient-to-r from-[#ed5332] to-[#d43a1a] opacity-0 transition-all duration-300 ease-out"
              style={{ transform: "rotate(-2deg)" }}
            />
            {navLinks.map(({ href, label, section, external }) =>
              external ? (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link relative z-10 px-3 py-1 text-sm font-medium text-[#706F6B] transition-colors duration-200 ease-in-out hover:text-[#41403F]"
                  data-section={section}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="nav-link relative z-10 px-3 py-1 text-sm font-medium text-[#706F6B] transition-colors duration-200 ease-in-out hover:text-[#41403F]"
                  data-section={section}
                >
                  {label}
                </Link>
              ),
            )}
          </div>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-[#41403F] transition-colors duration-200 hover:text-[#ed5332] md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`mt-4 origin-top transform overflow-hidden rounded-2xl border border-black/10 bg-[#ebe7de] shadow-lg shadow-black/5 backdrop-blur-lg backdrop-filter transition-all duration-300 ease-out md:hidden ${
            mobileOpen
              ? "scale-y-100 opacity-100"
              : "pointer-events-none scale-y-0 opacity-0"
          }`}
        >
          <div className="space-y-4 px-6 py-4">
            <div className="space-y-3">
              {navLinks.map(({ href, label, section, external }) =>
                external ? (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener norefferrer"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-[#706F6B] transition-colors duration-200 ease-in-out hover:bg-black/5 hover:text-[#41403F]"
                    data-section={section}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-[#706F6B] transition-colors duration-200 ease-in-out hover:bg-black/5 hover:text-[#41403F]"
                    data-section={section}
                  >
                    {label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
