import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-4 text-xs uppercase tracking-widest text-[#706F6B]">
        404
      </p>
      <h1 className="font-serif text-4xl tracking-tight text-[#41403F]">
        Page not found.
      </h1>
      <p className="mt-6 max-w-xl leading-relaxed text-[#706F6B]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm text-[#41403F] underline underline-offset-4 hover:text-[#ed5332] hover:no-underline"
      >
        Back to home
      </Link>
    </div>
  );
}
