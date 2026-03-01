import AnimatedSection from '../ui/AnimatedSection'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-neutral-50">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Proyectos</span>
          <h2 className="section-heading mt-2">Lo que he construido</h2>
          <div className="section-divider" />
          <p className="text-sm text-neutral-500 max-w-md">
            Una selección de proyectos personales y académicos. Todos con código disponible en GitHub.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver todos en GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
