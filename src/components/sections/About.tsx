import AnimatedSection from '../ui/AnimatedSection'


export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 px-10 scroll-mt-16">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="section-label mb-10">About me</div>
        </AnimatedSection>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-20 items-start">
          {/* Dark card + stats */}
          <AnimatedSection>
            <div
              className="relative overflow-hidden p-10 rounded-sm"
              style={{ background: 'var(--ink)', color: 'var(--paper)' }}
            >
              {/* Watermark */}
              <span
                className="font-serif absolute pointer-events-none select-none"
                style={{ fontSize: 200, right: -30, bottom: -60, opacity: .07, lineHeight: 1, color: 'var(--paper)' }}
              >
                G
              </span>
              <div className="text-[11px] tracking-[2px] uppercase opacity-40 mb-4">Software Engineer</div>
              <div className="font-serif text-[32px] leading-tight mb-8">Gerardo<br />Gómez</div>
              <div className="text-[11px] leading-[1.8] mb-8" style={{ opacity: .5 }}>
                Mathematician turned software engineer.<br />
                Gym, meditation & endless curiosity.
              </div>
              <div className="flex flex-wrap gap-2">
                {['San José, CR', 'Full-stack', 'Open to roles'].map((b) => (
                  <span
                    key={b}
                    className="px-3.5 py-1.5 text-[10px] tracking-[1.5px] uppercase rounded-full border"
                    style={{ borderColor: 'rgba(245,242,236,.15)' }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.2}>
            <div className="pt-2 space-y-5 text-[12px] leading-[1.9] opacity-70">
              <p>
                I'm 26, based in San José, Costa Rica. I studied Mathematics Education and
                I'm currently finishing a Software Engineering degree — a path that shaped
                how I think: structured, patient, and precise.
              </p>
              <p>
                I'm self-taught at heart. I don't wait for a course to tell me what to learn —
                I find the problem first, then go deep on whatever it takes to solve it.
                The stack follows the goal, not the other way around.
              </p>
              <p>
                What drives me is breaking hard problems into small, solvable pieces and
                building something from nothing. I'm detail-oriented and deliberate — I care
                about getting things right, not just getting them done.
              </p>
              <p>
                Outside of code I'm at the gym, meditating, or down a rabbit hole learning
                something completely unrelated to software. Curiosity doesn't clock out.
              </p>
            </div>

          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
