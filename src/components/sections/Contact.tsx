import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [form, setForm]     = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Replace with your form handler (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-28 bg-neutral-50">
      <div className="section-container">
        <AnimatedSection>
          <span className="section-label">Contacto</span>
          <h2 className="section-heading mt-2">Hablemos</h2>
          <div className="section-divider" />
          <p className="text-sm text-neutral-500 max-w-md">
            Si tienes algún proyecto interesante, quieres hablar sobre una oportunidad o simplemente
            conectar — estoy disponible.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-14">
          {/* Left: contact info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:gerardo@email.com"
                className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-all duration-200 group"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-neutral-100 rounded-lg group-hover:bg-accent-50 transition-colors duration-200">
                  <Mail size={15} className="text-neutral-600 group-hover:text-accent-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-0.5">Email</p>
                  <p className="text-sm font-medium text-neutral-800">gerardo@email.com</p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-all duration-200 group"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-neutral-100 rounded-lg group-hover:bg-accent-50 transition-colors duration-200">
                  <Github size={15} className="text-neutral-600 group-hover:text-accent-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-0.5">GitHub</p>
                  <p className="text-sm font-medium text-neutral-800">github.com/gerardo</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-all duration-200 group"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-neutral-100 rounded-lg group-hover:bg-accent-50 transition-colors duration-200">
                  <Linkedin size={15} className="text-neutral-600 group-hover:text-accent-600 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium text-neutral-800">linkedin.com/in/gerardo</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={0.2}>
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-3 py-12 text-center"
              >
                <CheckCircle size={32} className="text-green-500" />
                <p className="text-sm font-medium text-neutral-800">Mensaje enviado</p>
                <p className="text-xs text-neutral-500">Te respondo en menos de 48 h.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all duration-150"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all duration-150"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-600 mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntame en qué puedo ayudarte..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-200 rounded-lg text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-200 focus:border-accent-400 transition-all duration-150 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send size={13} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
