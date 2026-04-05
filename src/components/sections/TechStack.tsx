import AnimatedSection from '../ui/AnimatedSection'
import { techStack } from '../../data/techStack'

export default function TechStack() {
  return (
    <section id="skills" className="py-28 px-10">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="section-label mb-16">Toolkit</div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            className="grid md:grid-cols-3"
            style={{
              gap: 1,
              background: 'rgba(14,14,14,.08)',
              border: '1px solid rgba(14,14,14,.08)',
            }}
          >
            {techStack.map((group) => (
              <div
                key={group.label}
                className="px-7 py-8"
                style={{ background: 'var(--paper)' }}
              >
                <div className="text-[11px] tracking-[2px] uppercase opacity-35 mb-5">
                  {group.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span key={tech.name} className="skill-pill">{tech.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
