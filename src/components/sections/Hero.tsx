import AnimatedSection from '../ui/AnimatedSection'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-10 pt-24 pb-16">
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
          style={{ width: 'clamp(280px, 50vw, 600px)', height: 'clamp(280px, 50vw, 600px)', background: '#c8401a', opacity: .12, top: -80, right: -100 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 'clamp(160px, 28vw, 300px)', height: 'clamp(160px, 28vw, 300px)', background: '#e8a020', opacity: .12, bottom: 60, left: -60 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto w-full">
        {/* Tag */}
        <AnimatedSection>
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase opacity-40 mb-5">
            <span className="w-10 h-px bg-current inline-block shrink-0" />
            Software Engineer
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h1
            className="font-serif leading-[.95] tracking-[-2px] mb-7"
            style={{ fontSize: 'clamp(52px, 9vw, 120px)' }}
          >
            Building<br />
            <em className="italic" style={{ color: 'var(--accent)' }}>things</em>
            <br />that work.
          </h1>
        </AnimatedSection>

        {/* Description + scroll */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-end justify-between flex-wrap gap-5">
            <p className="leading-[1.8] opacity-60 text-[12px]" style={{ maxWidth: 360 }}>
              Full-stack developer crafting web apps, mobile apps, and backend systems
              that solve real problems — from idea to production.
            </p>
            <div className="hidden sm:flex flex-col items-center gap-2 opacity-30 text-[10px] tracking-[2px] uppercase">
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
