import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <PageIntro
        label="Team"
        title="The people behind The Code Hatch."
        description="A small team with a big belief: every Phoenix teenager deserves a place to learn and build."
      />

      <section className="border-t border-black/10 py-14">
        <div className="max-w-xl">
          <p className="mb-1 font-serif text-xl text-[#41403F]">Aaradhya Panda</p>
          <p className="mb-6 text-sm text-[#706F6B]">Founder</p>
          <p className="text-base leading-relaxed text-[#706F6B]">
            From a young age, I&apos;ve loved coding and hackathons. But when I
            found out that Phoenix had no hackathons for teenagers, I started The
            Code Hatch — to create a space where teens can learn, collaborate,
            and grow their coding skills in a supportive environment.
          </p>
        </div>
      </section>
    </div>
  );
}
