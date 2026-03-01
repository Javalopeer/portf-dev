import AnimatedSection from '../ui/AnimatedSection'
import { techStack } from '../../data/techStack'

export default function TechStack() {
  return (
    <section id="stack" className="py-28">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Stack tecnológico</span>
          <h2 className="section-heading mt-2">Herramientas de trabajo</h2>
          <div className="section-divider" />
          <p className="text-sm text-neutral-500 max-w-md">
            Las tecnologías con las que trabajo habitualmente. Backend como foco principal,
            con capacidad real en frontend.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {techStack.map((group, gi) => (
            <AnimatedSection key={group.label} delay={gi * 0.1}>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-widest">
                    {group.label}
                  </span>
                  <span className="flex-1 h-px bg-neutral-100" />
                </div>
                <div className="flex flex-col gap-2">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-neutral-50 transition-colors duration-150 group cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-accent-500 transition-colors duration-200 shrink-0" />
                      <span className="text-sm text-neutral-700 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
