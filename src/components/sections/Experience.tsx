import AnimatedSection from '../ui/AnimatedSection'
import { timeline } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-10">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="section-label mb-16">Experience</div>
        </AnimatedSection>

        <div>
          {timeline.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.1}>
              <div
                className="py-10 grid md:grid-cols-[200px_1fr] gap-8 items-start"
                style={{ borderTop: '1px solid rgba(14,14,14,.08)' }}
              >
                {/* Left */}
                <div>
                  <div className="text-[10px] tracking-[2px] uppercase opacity-35 mb-2">{item.period}</div>
                  <div className="text-[11px] opacity-50">{item.company}</div>
                  {item.location && (
                    <div className="text-[11px] opacity-35">{item.location}</div>
                  )}
                </div>

                {/* Right */}
                <div>
                  <h3 className="font-serif text-[22px] mb-3">{item.title}</h3>
                  <p className="text-[12px] leading-[1.9] opacity-60 mb-4">{item.description}</p>
                  {item.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[11px] opacity-50">
                          <span
                            className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                            style={{ background: 'var(--accent)' }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
          <div style={{ borderTop: '1px solid rgba(14,14,14,.08)' }} />
        </div>
      </div>
    </section>
  )
}
