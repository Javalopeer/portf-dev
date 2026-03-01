import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '../../data/projects'
import TechBadge from './TechBadge'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="card group flex flex-col h-full"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* Header accent */}
      <div className="w-8 h-0.5 bg-accent-500 mb-5 rounded-full transition-all duration-300 group-hover:w-12" />

      <h3 className="text-base font-semibold text-neutral-900 mb-2.5 tracking-tight">
        {project.title}
      </h3>

      <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techs.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors duration-150"
        >
          <Github size={14} />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-600 hover:text-accent-700 transition-colors duration-150"
          >
            Live
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </motion.div>
  )
}
