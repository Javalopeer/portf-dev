export interface Project {
  id: number
  title: string
  description: string
  techs: string[]
  github?: string
  live?: string
  featured: boolean
  status: string
  statusType: 'active' | 'live' | 'done'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'SmartBudget',
    description:
      'iPhone expense tracker with a FastAPI + PostgreSQL backend, Celery async workers, and automatic receipt parsing via the Gmail API. Full CI/CD pipeline in progress.',
    techs: ['Flutter', 'FastAPI', 'PostgreSQL', 'Celery', 'Gmail API'],
    github: 'https://github.com/Javalopeer',
    featured: true,
    status: 'In progress',
    statusType: 'active',
  },
  {
    id: 2,
    title: 'Spark Team Dashboard',
    description:
      'Centralized operational dashboard for 100+ users across 4 team pods. Replaced a fragmented multi-file Excel workflow. Shipped as a distributable Windows .exe with real-time queue tracking and data visualizations.',
    techs: ['Electron', 'React', 'Tailwind', 'Recharts', 'Zustand'],
    github: 'https://github.com/Javalopeer',
    featured: true,
    status: 'Shipped',
    statusType: 'live',
  },
  {
    id: 3,
    title: 'Production Tracker',
    description:
      'Internal production-tracking app built with Power Automate and OneDrive integration. Adopted by three separate teams across the company. Reduced manual reporting overhead significantly.',
    techs: ['Power Automate', 'OneDrive', 'Excel'],
    github: 'https://github.com/Javalopeer',
    featured: true,
    status: '3 teams',
    statusType: 'live',
  },
  {
    id: 4,
    title: 'Moving Company Web Form',
    description:
      'Standalone HTML web app with chained dynamic dropdowns, automatic price calculation, contract generation, and WhatsApp + Gmail integration. Zero dependencies, single file.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Javalopeer',
    featured: false,
    status: 'Delivered',
    statusType: 'done',
  },
]
