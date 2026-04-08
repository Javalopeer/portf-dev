import AnimatedSection from '../ui/AnimatedSection'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-12 pb-24 px-10 scroll-mt-16"
      style={{ background: 'var(--ink)', color: 'var(--paper)' }}
    >
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div
            className="section-label mb-16"
            style={{ color: 'var(--paper)', opacity: 1 }}
          >
            <span className="opacity-30">Selected work</span>
            <span
              className="flex-1 h-px block"
              style={{ background: 'var(--paper)', opacity: .1 }}
            />
          </div>
        </AnimatedSection>

        <div>
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <div
                className="py-10 grid items-start"
                style={{
                  borderTop: '1px solid rgba(245,242,236,.08)',
                  gridTemplateColumns: '60px 1fr auto',
                  gap: '2rem',
                }}
              >
                {/* Number */}
                <span
                  className="font-serif text-[32px] leading-none pt-1 opacity-40"
                  style={{ color: 'var(--accent)' }}
                >
                  {String(project.id).padStart(2, '0')}
                </span>

                {/* Body */}
                <div>
                  <h3 className="font-serif text-[28px] leading-tight mb-2.5">{project.title}</h3>
                  <p className="text-[12px] leading-[1.8] mb-4 max-w-[500px]" style={{ opacity: .45 }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.featured && (
                      <span className="proj-tag featured">{project.status}</span>
                    )}
                    {project.techs.map((t) => (
                      <span key={t} className="proj-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col items-end gap-3 pt-1">
                  <span className="text-[22px]" style={{ color: 'var(--accent)' }}>↗</span>
                  <span
                    className="text-[10px] tracking-[2px] uppercase"
                    style={{ color: project.statusType === 'done' ? undefined : 'var(--accent-2, #e8a020)', opacity: project.statusType === 'done' ? .3 : .8 }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(245,242,236,.08)' }} />
        </div>
      </div>
    </section>
  )
}
