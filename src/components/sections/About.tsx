import AnimatedSection from '../ui/AnimatedSection'

const highlights = [
  { value: '4+', label: 'años escribiendo Java' },
  { value: '10+', label: 'APIs REST en producción' },
  { value: 'Clean', label: 'Architecture first' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-neutral-50">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Sobre mí</span>
          <h2 className="section-heading mt-2">Ingeniería con criterio</h2>
          <div className="section-divider" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Text column */}
          <div className="space-y-5">
            <AnimatedSection delay={0.1}>
              <p className="text-neutral-600 leading-relaxed">
                Soy Ingeniero en Software especializado en el desarrollo de backends con{' '}
                <span className="text-neutral-900 font-medium">Java y Spring Boot</span>.
                Me interesa construir sistemas que funcionen bien hoy y que sigan siendo mantenibles
                en seis meses — lo cual, en la práctica, requiere tanto disciplina técnica como
                capacidad de tomar decisiones de diseño coherentes.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-neutral-600 leading-relaxed">
                Mi enfoque pasa por mantener las capas bien separadas, escribir código que
                comunique la intención, y pensar en los contratos de las APIs antes de en
                la implementación. No soy de los que sobre-diseñan, pero tampoco de los que
                ignoran la arquitectura.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-neutral-600 leading-relaxed">
                Fuera del backend, tengo interés genuino en el frontend moderno — trabajo con
                React y TypeScript — y en cómo sistemas distribuidos resuelven
                problemas de escala sin volverte loco operativamente.
              </p>
            </AnimatedSection>
          </div>

          {/* Stats column */}
          <AnimatedSection delay={0.25}>
            <div className="grid grid-cols-1 gap-6">
              {highlights.map(({ value, label }) => (
                <div key={label} className="flex items-center gap-5 py-5 border-b border-neutral-200 last:border-b-0">
                  <span className="text-2xl font-semibold text-neutral-900 tracking-tight w-16 shrink-0">
                    {value}
                  </span>
                  <span className="text-sm text-neutral-500">{label}</span>
                </div>
              ))}

              {/* Values */}
              <div className="mt-4 p-5 bg-white border border-neutral-200 rounded-xl">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-3">
                  Principios
                </p>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-500 rounded-full shrink-0" />
                    Código legible antes que código inteligente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-500 rounded-full shrink-0" />
                    Las APIs son contratos, no detalles de implementación
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-500 rounded-full shrink-0" />
                    Test primero cuando el dominio lo requiere
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent-500 rounded-full shrink-0" />
                    La complejidad tiene que justificarse
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
