import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const className =
    variant === "primary"
      ? "inline-block rounded-full border border-[#ed5332] bg-[#ed5332] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#ed5332]"
      : "inline-block rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#706F6B] transition-colors hover:border-black/30 hover:text-[#41403F]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
