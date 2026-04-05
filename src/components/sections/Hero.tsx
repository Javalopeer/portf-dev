import AnimatedSection from '../ui/AnimatedSection'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end relative overflow-hidden pb-16 px-10">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(14,14,14,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,14,14,.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 600, height: 600, background: '#c8401a', opacity: .12, top: -100, right: -150 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 300, height: 300, background: '#e8a020', opacity: .12, bottom: 100, left: -80 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto w-full">
        {/* Tag */}
        <AnimatedSection>
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase opacity-40 mb-6">
            <span className="w-10 h-px bg-current inline-block" />
            Software Engineer
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h1
            className="font-serif leading-[.95] tracking-[-2px] mb-8"
            style={{ fontSize: 'clamp(64px, 9vw, 120px)' }}
          >
            Building<br />
            <em className="italic" style={{ color: 'var(--accent)' }}>things</em>
            <br />that work.
          </h1>
        </AnimatedSection>

        {/* Bottom row */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-end justify-between flex-wrap gap-5">
            <p className="leading-[1.8] opacity-60 text-[12px]" style={{ maxWidth: 360 }}>
              Full-stack developer crafting web apps, mobile apps, and backend systems
              that solve real problems — from idea to production.
            </p>
            <div className="flex flex-col items-center gap-2 opacity-30 text-[10px] tracking-[2px] uppercase">
              <span
                className="w-px animate-scrollpulse"
                style={{ height: 50, background: 'var(--ink)', display: 'block' }}
              />
              Scroll
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
