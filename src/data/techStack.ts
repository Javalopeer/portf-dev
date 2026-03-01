export interface TechItem {
  name: string
  icon: string
}

export interface TechGroup {
  label: string
  items: TechItem[]
}

export const techStack: TechGroup[] = [
  {
    label: 'Backend',
    items: [
      { name: 'Java',        icon: 'java' },
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'REST APIs',   icon: 'api' },
      { name: 'SQL',         icon: 'database' },
      { name: 'PostgreSQL',  icon: 'postgresql' },
      { name: 'MySQL',       icon: 'mysql' },
      { name: 'Redis',       icon: 'redis' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React',       icon: 'react' },
      { name: 'TypeScript',  icon: 'typescript' },
      { name: 'JavaScript',  icon: 'javascript' },
      { name: 'TailwindCSS', icon: 'tailwind' },
      { name: 'HTML & CSS',  icon: 'html' },
    ],
  },
  {
    label: 'Herramientas',
    items: [
      { name: 'Git',         icon: 'git' },
      { name: 'Docker',      icon: 'docker' },
      { name: 'Linux',       icon: 'linux' },
      { name: 'Maven',       icon: 'maven' },
      { name: 'Postman',     icon: 'postman' },
      { name: 'IntelliJ',    icon: 'intellij' },
    ],
  },
]
