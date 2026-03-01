export interface Project {
  id: number
  title: string
  description: string
  techs: string[]
  github: string
  live?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce REST API',
    description:
      'Backend service for an e-commerce platform. Handles product catalog, inventory, orders and payment processing. Designed around domain-driven principles with clear bounded contexts.',
    techs: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Auth Service',
    description:
      'Centralized authentication and authorization microservice with role-based access control, token refresh flows and audit logging. Built to be embedded in larger distributed systems.',
    techs: ['Java', 'Spring Security', 'Redis', 'MySQL', 'Docker Compose'],
    github: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management API',
    description:
      'RESTful API for project and task management with real-time notification support. Follows clean architecture patterns, with a well-separated domain and infrastructure layer.',
    techs: ['Java', 'Spring Boot', 'WebSocket', 'H2 / PostgreSQL', 'Swagger'],
    github: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Dev Portfolio',
    description:
      'This portfolio. Built with React and TypeScript, designed for clarity and performance. Minimal dependencies, clean component structure, responsive layout.',
    techs: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com',
    live: '/',
    featured: false,
  },
]
