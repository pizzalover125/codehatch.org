type SectionProps = {
  label: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ label, title, children }: SectionProps) {
  return (
    <section className="border-t border-white/10 py-14 first:border-t-0 first:pt-0">
      <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
        {label}
      </p>
      <h2 className="mb-5 font-serif text-2xl leading-snug tracking-tight text-white">
        {title}
      </h2>
      <div className="max-w-xl text-base leading-relaxed text-gray-400">
        {children}
      </div>
    </section>
  );
}
