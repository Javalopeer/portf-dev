import AnimatedSection from '../ui/AnimatedSection'

const stats = [
  { num: '3+',  label: 'Teams adopted\nmy tools' },
  { num: '5+',  label: 'Projects\nshipped' },
  { num: '4+',  label: 'Languages\n& frameworks' },
  { num: '∞',   label: 'Problems\nto solve' },
]

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

            {/* Stats grid */}
            <div
              className="grid grid-cols-2 border mt-0"
              style={{ gap: 1, background: 'rgba(14,14,14,.1)', borderColor: 'rgba(14,14,14,.1)' }}
            >
              {stats.map(({ num, label }) => (
                <div
                  key={num}
                  className="text-center py-6 px-4"
                  style={{ background: 'var(--paper)' }}
                >
                  <span className="font-serif text-[40px] block mb-1" style={{ color: 'var(--accent)' }}>
                    {num}
                  </span>
                  <span className="text-[10px] tracking-[2px] uppercase opacity-40 whitespace-pre-line leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.2}>
            <div className="pt-2 space-y-5 text-[12px] leading-[1.9] opacity-70">
              <p>
                I'm a self-taught full-stack developer based in San José, Costa Rica. I build
                web apps, mobile apps, and backend systems — from React frontends to FastAPI
                services to Flutter mobile clients — wherever the problem takes me.
              </p>
              <p>
                I've shipped internal dashboards, automation pipelines, and client-facing tools
                that get used in production. 
              </p>
              <p>
                I learn what the problem demands. The stack follows the goal, not the other way
                around. 
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
