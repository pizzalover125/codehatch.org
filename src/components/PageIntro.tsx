type PageIntroProps = {
  label?: string;
  title: string;
  description?: string;
};

export default function PageIntro({
  label,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="mb-16">
      {label && (
        <p className="mb-4 text-xs uppercase tracking-widest text-[#706F6B]">
          {label}
        </p>
      )}
      <h1 className="font-serif text-4xl leading-tight tracking-tight text-[#41403F] sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#706F6B]">
          {description}
        </p>
      )}
    </header>
  );
}
