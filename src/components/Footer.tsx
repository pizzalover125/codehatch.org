import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "home" },
  { href: "/events", label: "events" },
  { href: "/team", label: "team" },
  { href: "/join", label: "join" },
  {
    href: "https://tally.so/r/A7J7be",
    label: "mailing list",
    external: true,
  },
  {
    href: "https://hcb.hackclub.com/donations/start/thecodehatch",
    label: "donate",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="footer-below-cta relative z-10 w-full overflow-hidden bg-transparent pb-10 pt-24 font-manrope text-[#41403F]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between md:mb-24 md:flex-row">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="The Code Hatch logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-2xl font-medium tracking-tight">
                  The Code Hatch
                </span>
              </div>
              <p className="max-w-xs text-lg font-light leading-relaxed text-[#706F6B]">
                A home for teenagers learning to code, build, and create
                together.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 text-left md:mt-0 md:text-right">
            {footerLinks.map(({ href, label, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light text-[#706F6B] transition-colors hover:text-[#41403F]"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="text-lg font-light text-[#706F6B] transition-colors hover:text-[#41403F]"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="relative z-0 mt-4 flex w-full items-end justify-center">
          <h1 className="clipped-text select-none text-center text-[18vw] font-bold leading-[0.7] tracking-tighter md:text-[22vw] whitespace-nowrap">
            code hatch
          </h1>
        </div>
      </div>
    </footer>
  );
}
