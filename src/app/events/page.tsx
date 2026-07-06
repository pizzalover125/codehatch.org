import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Events",
};

const pastEvents = [
  {
    date: "Meltdown",
    participants: "20+ participants",
    description: "September 2025: The Code Hatch's first flagship event",
    photos: "https://photos.app.goo.gl/zG6YGrTqjPqLeJVL6",
  },
  {
    date: "Frostbyte",
    participants: "45+ participants",
    description: "February 2026: The Code Hatch's second flagship event",
    photos: "https://aspiringyouthacademy.pixieset.com/2026frostbytehackathon/",
  },
];

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <PageIntro
        label="Events"
        title="Learn, build, and win."
        description="Learn real-world coding skills, build amazing projects, and win exciting prizes."
      />

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          Past events
        </p>
        <h2 className="mb-10 font-serif text-2xl leading-snug tracking-tight text-[#41403F]">
          Where we&apos;ve been.
        </h2>
        <ul className="divide-y divide-black/10">
          {pastEvents.map((event) => (
            <li key={event.date} className="py-8 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-serif text-lg text-[#41403F]">
                  {event.date}
                </p>
                <p className="text-sm text-[#706F6B]">{event.participants}</p>
              </div>
              <p className="mt-2 text-[#706F6B]">{event.description}</p>
              {event.photos && (
                <a
                  href={event.photos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-[#41403F] underline underline-offset-4 hover:text-[#ed5332] hover:no-underline"
                >
                  View photos
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          Code Arizona
        </p>
        <h2 className="mb-5 font-serif text-2xl leading-snug tracking-tight text-[#41403F]">
          Our flagship summer event.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-[#706F6B]">
          Code Arizona brings together Phoenix teenagers for a full day of
          coding, collaboration, and community. Stay tuned for upcoming dates by
          joining our mailing list.
        </p>
        <a
          href="https://codeaz.codehatch.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-[#41403F] underline underline-offset-4 hover:text-[#ed5332] hover:no-underline"
        >
          Visit Code Arizona
        </a>
      </section>
    </div>
  );
}
