import AnimatedSection from '../ui/AnimatedSection'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-10 text-center relative overflow-hidden">
      {/* Watermark */}
      <span
        className="font-serif absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none"
        style={{ fontSize: 'clamp(80px, 15vw, 200px)', opacity: .04, letterSpacing: -5, lineHeight: 1 }}
      >
        Hello.
      </span>

      <div className="relative z-10 max-w-[600px] mx-auto">
        <div
          className="section-label mb-8 justify-center"
          style={{ textAlign: 'center' }}
        >
          Get in touch
        </div>

        <AnimatedSection>
          <h2
            className="font-serif leading-[1] tracking-[-2px] mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            Let's build<br />something{' '}
            <em className="italic" style={{ color: 'var(--accent)' }}>real.</em>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-[12px] leading-[1.8] opacity-50 mb-12">
            Open to interesting projects, collaborations, and full-time opportunities —
            especially where design thinking meets software engineering.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              className="btn-primary"
              href="mailto:gerardo@email.com"
            >
              ✉ Email me
            </a>
            <a
              className="btn-outline"
              href="https://linkedin.com/in/gerardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="btn-outline"
              href="https://github.com/Javalopeer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
