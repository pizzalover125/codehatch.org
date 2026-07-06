import Carousel from "@/components/Carousel";
import PageIntro from "@/components/PageIntro";

const carouselImages = [
  {
    src: "https://cdn.hackclub.com/019f2f84-56f4-79e9-bde6-497156a7c9eb/dsc05900.jpg",
    alt: "Code Arizona workshop",
  },
  {
    src: "https://cdn.hackclub.com/019f2f84-5b64-7cf6-9f85-1ae7ed899afb/dsc05906.jpg",
    alt: "Code Arizona event",
  },
  {
    src: "https://cdn.hackclub.com/019f2f84-5d75-7456-982c-4659f81650f3/dsc05910.jpg",
    alt: "Code Arizona participants",
  },
  {
    src: "https://cdn.hackclub.com/019f2f84-611e-7947-8c42-5dbba84c702d/dsc05974.jpg",
    alt: "Code Arizona mentorship",
  },
  {
    src: "https://cdn.hackclub.com/019f2f84-6359-7b3e-9379-f4984ed176a9/dsc06009.jpg",
    alt: "Code Arizona hacking",
  },
  {
    src: "https://cdn.hackclub.com/019f2f84-655b-7279-b34a-ceda50f6f4a6/dsc06245.jpg",
    alt: "Code Arizona group",
  },
  {
    src: "https://cdn.hackclub.com/019f2f84-6768-7bdd-840b-814aac58e7fa/dsc06485.jpg",
    alt: "Code Arizona celebration",
  },
  {
    src: "https://cdn.hackclub.com/019f2f84-69c5-7524-9e22-511f41d6c022/img_1191.jpg",
    alt: "Code Arizona photo",
  },
];

export const metadata = {
  title: "Impact",
};

const stats = [
  { number: "70+", label: "participants across two flagship hackathons" },
  { number: "11", label: "different schools represented" },
  { number: "70%", label: "first-time or beginner coders" },
  { number: "$5k", label: "raised to fund free STEM events" },
];

const events = [
  {
    name: "Meltdown",
    date: "September 2025",
    description:
      "Our very first hackathon, launching The Code Hatch with over 20 participants.",
  },
  {
    name: "Frostbyte",
    date: "February 2026",
    description:
      "More than double the turnout, with 45+ students building projects, competing for prizes, and connecting with mentors and judges from the tech community.",
  },
];

const partners = [
  "BASIS Charter Schools",
  "J. Orin Edson Entrepreneurship + Innovation Institute @ ASU",
  "Hack Club",
  "Arizona Science Center",
  "Aspiring Youth Academy",
];

const testimonials = [
  {
    quote:
      "The event was very well organized. The organizers gave clear and timely instructions, and the venue was great... There was a positive framework and vibe that encouraged learning.",
    author: "Samip",
  },
  {
    quote:
      "I loved the venue, and having mentors on hand to help was great. The judges were amazing, genuinely interested in every project and super kind.",
    author: "Niveditha",
  },
  {
    quote:
      "The volunteers were friendly and helpful, and the prizes, especially the internships, were fantastic. I loved that there were awards for 'most creative' and 'most inventive.' Overall an amazing event; you should host more in the future!",
    author: "Anonymous",
  },
  {
    quote:
      "A very fun and inviting community! It helped me see so many wonderful projects I wouldn't have discovered otherwise.",
    author: "Anonymous",
  },
  {
    quote:
      "Very clear instructions and directions for the students. The organizers encouraged them to think outside the box, face the challenge, and give their best.",
    author: "Sanju",
  },
];

export default function ImpactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <PageIntro
        label="Our Impact"
        title="The Code Hatch exists to make technology accessible to every teenager in Arizona."
        description="No experience required, no cost to attend. In our first year, we've turned that mission into real momentum."
      />

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          Photo Gallery
        </p>
        <h2 className="mb-6 font-serif text-2xl leading-snug tracking-tight text-[#41403F]">
          Moments from our events.
        </h2>
        <Carousel images={carouselImages} />
      </section>

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          By the Numbers
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-[#41403F]">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-[#706F6B]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          Our Events
        </p>
        <ul className="divide-y divide-black/10">
          {events.map((event) => (
            <li key={event.name} className="py-8 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-serif text-lg text-[#41403F]">
                  {event.name}
                </p>
                <p className="text-sm text-[#706F6B]">{event.date}</p>
              </div>
              <p className="mt-2 text-[#706F6B]">{event.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-[#706F6B]">
          Both events were free to attend, thanks to community support, removing
          cost as a barrier to entry for Arizona teens.
        </p>
        <a
          href="https://aspiringyouth.org/47-teens-build-compete-and-innovate-at-frostbyte-hackathon-at-asu-skysong/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-sm text-[#41403F] underline underline-offset-4 hover:text-[#ed5332] hover:no-underline"
        >
          Read the Aspiring Youth Academy feature on Frostbyte &rarr;
        </a>
      </section>

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          Our Partners
        </p>
        <p className="mb-6 max-w-xl text-base leading-relaxed text-[#706F6B]">
          We&apos;re proud to work alongside organizations that share our
          commitment to youth STEM education:
        </p>
        <ul className="space-y-3">
          {partners.map((partner) => (
            <li
              key={partner}
              className="rounded-xl border border-black/10 bg-black/[0.02] px-5 py-3 font-serif text-lg text-[#41403F]"
            >
              {partner}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          What Participants Are Saying
        </p>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 bg-black/[0.02] p-6"
            >
              <p className="text-base leading-relaxed italic text-[#41403F]">
                &ldquo;{t.quote}&rdquo;
              </p>
              {t.author && (
                <p className="mt-4 text-sm font-medium text-[#706F6B]">
                  — {t.author}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 py-14">
        <p className="mb-3 text-xs uppercase tracking-widest text-[#706F6B]">
          Looking Ahead
        </p>
        <h2 className="mb-5 font-serif text-2xl leading-snug tracking-tight text-[#41403F]">
          We&apos;re just getting started.
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-[#706F6B]">
          With growing support, we&apos;re planning our next event to reach even
          more students across Arizona, expanding to new schools, deepening
          partnerships, and continuing to prove that a great hackathon
          experience shouldn&apos;t come with a price tag. Help us reach the
          next hundred students.
        </p>
        <a
          href="https://hcb.hackclub.com/donations/start/thecodehatch"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#ed5332] to-[#d43a1a] px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
        >
          Donate
        </a>
      </section>
    </div>
  );
}
