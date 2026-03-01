import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

const variants = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.45, 0.27, 0.9] } },
  },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="section-container py-24">
        <motion.div
          variants={variants.container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Availability badge */}
          <motion.div variants={variants.item} className="mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 bg-neutral-100 border border-neutral-200 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Disponible para nuevas oportunidades
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={variants.item}
            className="text-5xl md:text-6xl font-semibold tracking-tighter text-neutral-900 mb-3 leading-tight"
          >
            Gerardo
          </motion.h1>

          {/* Role */}
          <motion.div variants={variants.item} className="flex items-center gap-3 mb-6">
            <span className="text-xl md:text-2xl font-light text-neutral-500 tracking-tight">
              Software Engineer
            </span>
            <span className="hidden sm:block w-8 h-px bg-neutral-300" />
            <span className="hidden sm:block font-mono text-sm text-accent-600">Java / Spring Boot</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={variants.item}
            className="text-base md:text-lg text-neutral-500 leading-relaxed mb-10 max-w-lg"
          >
            Construyo sistemas backend sólidos, APIs bien diseñadas y código que se mantiene.
            Creo que la arquitectura limpia no es un lujo — es una decisión técnica correcta.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={variants.item} className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Ver proyectos
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Descargar CV
            </a>
            <a href="#contact" className="btn-outline">
              Contacto
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={variants.item} className="flex items-center gap-4 mt-10">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 transition-colors duration-150"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-700 transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="text-neutral-300"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
