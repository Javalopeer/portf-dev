import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#skills',   label: 'Skills' },
  { href: '#contact',  label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled]    = useState(false)
  const [menuOpen, setMenuOpen]    = useState(false)
  const [activeSection, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const isVisible = scrolled || menuOpen

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Bar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="h-16 px-10 flex items-center justify-between"
        style={{
          background: isVisible ? 'rgba(245,242,236,.96)' : 'transparent',
          backdropFilter: isVisible ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isVisible ? 'blur(12px)' : 'none',
          borderBottom: `1px solid ${isVisible ? 'rgba(14,14,14,.06)' : 'transparent'}`,
          transition: 'background .3s, border-color .3s',
        }}
      >
        <a href="#" className="font-serif text-[20px] tracking-[-0.5px] text-ink">
          Gera-dev.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const id = href.slice(1)
            return (
              <a
                key={href}
                href={href}
                className={`text-[11px] tracking-[2px] uppercase transition-opacity duration-150 ${
                  activeSection === id ? 'opacity-100' : 'opacity-50 hover:opacity-100'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-all duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </motion.header>

      {/* Mobile dropdown — outside the h-16 bar so it doesn't clip */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(245,242,236,.96)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(14,14,14,.06)',
            }}
          >
            <nav className="px-10 flex flex-col py-5 gap-5">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[11px] tracking-[2px] uppercase opacity-50 hover:opacity-100 transition-opacity duration-150"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
