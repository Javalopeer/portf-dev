import { Briefcase, GraduationCap } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { timeline } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Experiencia y formación</span>
          <h2 className="section-heading mt-2">Trayectoria</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="mt-10 relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-neutral-200 hidden md:block" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.1}>
                <div className="md:pl-14 relative">
                  {/* Icon dot */}
                  <div className="hidden md:flex absolute left-0 top-0 w-8 h-8 rounded-full bg-white border border-neutral-200 items-center justify-center shrink-0 shadow-sm">
                    {item.type === 'work' ? (
                      <Briefcase size={13} className="text-neutral-500" />
                    ) : (
                      <GraduationCap size={13} className="text-neutral-500" />
                    )}
                  </div>

                  <div className="card p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mt-0.5">
                          {item.company}
                          {item.location && (
                            <span className="text-neutral-400"> · {item.location}</span>
                          )}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-neutral-400 whitespace-nowrap mt-0.5">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.highlights.length > 0 && (
                      <ul className="space-y-1.5">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-neutral-500">
                            <span className="w-1 h-1 bg-accent-400 rounded-full mt-1.5 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
