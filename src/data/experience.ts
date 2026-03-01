export interface ExperienceItem {
  id: number
  type: 'work' | 'education'
  title: string
  company: string
  location: string
  period: string
  description: string
  highlights: string[]
}

export const timeline: ExperienceItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Backend Developer',
    company: 'Tech Company',
    location: 'Remote',
    period: '2023 — Presente',
    description:
      'Desarrollo y mantenimiento de APIs REST con Java y Spring Boot. Diseño de esquemas SQL, optimización de consultas y colaboración en decisiones de arquitectura.',
    highlights: [
      'Diseño e implementación de microservicios con Spring Boot y Docker',
      'Optimización de consultas SQL que redujeron tiempos de respuesta un 40%',
      'Implementación de autenticación basada en JWT y control de acceso por roles',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: 'Junior Java Developer',
    company: 'Startup / Proyecto freelance',
    location: 'Remoto',
    period: '2022 — 2023',
    description:
      'Desarrollo de funcionalidades backend, integración con servicios externos e implementación de pruebas unitarias e integración.',
    highlights: [
      'Integración con APIs de terceros usando WebClient y RestTemplate',
      'Mantenimiento de base de código con Spring MVC y Hibernate',
      'Escritura de tests con JUnit 5 y Mockito',
    ],
  },
  {
    id: 3,
    type: 'education',
    title: 'Ingeniería en Software',
    company: 'Universidad',
    location: '',
    period: '2019 — 2023',
    description:
      'Formación en fundamentos de ingeniería de software, algoritmos y estructuras de datos, bases de datos relacionales y diseño de sistemas.',
    highlights: [
      'Proyecto de titulación: sistema web con Spring Boot y React',
      'Materias destacadas: Algoritmos, BD relacionales, Arquitectura de software',
    ],
  },
]
