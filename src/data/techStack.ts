export interface TechItem {
  name: string
}

export interface TechGroup {
  label: string
  items: TechItem[]
}

export const techStack: TechGroup[] = [
  {
    label: 'Frontend',
    items: [
      { name: 'React' },
      { name: 'Flutter' },
      { name: 'HTML/CSS' },
      { name: 'Tailwind' },
      { name: 'Electron' },
      { name: 'Vite' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'FastAPI' },
      { name: 'PostgreSQL' },
      { name: 'Celery' },
      { name: 'Alembic' },
      { name: 'Firebase' },
      { name: 'Python' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'Power Automate' },
      { name: 'OneDrive' },
      { name: 'Gmail API' },
      { name: 'Codemagic' },
      { name: 'Excel' },
      { name: 'Git' },
    ],
  },
  {
    label: 'Mobile',
    items: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Firebase' },
      { name: 'Codemagic' },
      { name: 'iOS / Android' },
    ],
  },
  {
    label: 'Interests',
    items: [
      { name: 'Automation' },
      { name: 'API design' },
      { name: 'Product' },
      { name: 'Data pipelines' },
    ],
  },
  {
    label: 'Currently learning',
    items: [
      { name: 'Algorithms' },
      { name: 'System design' },
      { name: 'CI/CD' },
    ],
  },
]
