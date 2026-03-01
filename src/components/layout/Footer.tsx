import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-neutral-400 font-mono">
          © {new Date().getFullYear()} Gerardo — Built with React & TypeScript
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-700 transition-colors duration-150"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-700 transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:gerardo@email.com"
            className="text-neutral-400 hover:text-neutral-700 transition-colors duration-150"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
