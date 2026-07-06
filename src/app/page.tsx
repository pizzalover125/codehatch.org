import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-manrope text-5xl font-medium leading-[1.1] tracking-tight text-[#41403F] sm:text-6xl">
        Coding skills for every teenager in{" "}
        <span
          className="italic"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          Phoenix.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#706F6B]">
        We host coding competitions and workshops to empower Phoenix teenagers
        with future-ready, AI-driven tech skills.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="https://tally.so/r/A7J7be" external>
          Join mailing list
        </Button>
        <Button
          href="https://hcb.hackclub.com/donations/start/thecodehatch"
          variant="secondary"
          external
        >
          Donate
        </Button>
      </div>

      <div className="mt-24 grid gap-px border border-black/10 bg-black/5 sm:grid-cols-3">
        <div className="bg-[#F5F1E8] p-8">
          <p className="font-serif text-3xl text-[#41403F]">70+</p>
          <p className="mt-2 text-sm text-[#706F6B]">
            Participants across events
          </p>
        </div>
        <div className="bg-[#F5F1E8] p-8">
          <p className="font-serif text-3xl text-[#41403F]">2</p>
          <p className="mt-2 text-sm text-[#706F6B]">Flagship events held</p>
        </div>
        <div className="bg-[#F5F1E8] p-8">
          <p className="font-serif text-3xl text-[#41403F]">Free</p>
          <p className="mt-2 text-sm text-[#706F6B]">
            Open to all skill levels
          </p>
        </div>
      </div>

      <div className="mt-24 space-y-0">
        <article className="border-t border-black/10 py-10">
          <p className="mb-2 text-xs uppercase tracking-widest text-[#706F6B]">
            What we are
          </p>
          <h2 className="mb-3 font-serif text-xl text-[#41403F]">
            An open collective of coders, engineers, and designers.
          </h2>
          <p className="max-w-xl leading-relaxed text-[#706F6B]">
            The Code Hatch is a community bringing together teenagers who want
            to make stuff. You&apos;re invited.
          </p>
          <Link
            href="/join"
            className="mt-4 inline-block text-sm text-[#41403F] underline underline-offset-4 hover:text-[#ed5332] hover:no-underline"
          >
            Learn more
          </Link>
        </article>

        <article className="border-t border-black/10 py-10">
          <p className="mb-2 text-xs uppercase tracking-widest text-[#706F6B]">
            How it works
          </p>
          <h2 className="mb-3 font-serif text-xl text-[#41403F]">
            Workshops, talks, project time, and open demos.
          </h2>
          <p className="max-w-xl leading-relaxed text-[#706F6B]">
            The real magic is in the demos — you made something you are proud
            of. Share your work, get feedback, and make new friends along the
            way.
          </p>
          <Link
            href="/events"
            className="mt-4 inline-block text-sm text-[#41403F] underline underline-offset-4 hover:text-[#ed5332] hover:no-underline"
          >
            View events
          </Link>
        </article>

        <article className="border-t border-black/10 py-10">
          <p className="mb-2 text-xs uppercase tracking-widest text-[#706F6B]">
            Who we are
          </p>
          <h2 className="mb-3 font-serif text-xl text-[#41403F]">
            Built by students, for students.
          </h2>
          <p className="max-w-xl leading-relaxed text-[#706F6B]">
            Founded by Aaradhya Panda to create a space where Phoenix teens can
            learn, collaborate, and grow their coding skills.
          </p>
          <Link
            href="/team"
            className="mt-4 inline-block text-sm text-[#41403F] underline underline-offset-4 hover:text-[#ed5332] hover:no-underline"
          >
            Meet the team
          </Link>
        </article>
      </div>
    </div>
  );
}
