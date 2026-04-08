import AnimatedSection from '../ui/AnimatedSection'
import { Player } from '@lottiefiles/react-lottie-player'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const lines = [
  <span key="0">Building</span>,
  <em key="1" className="italic" style={{ color: 'var(--accent)' }}>things</em>,
  <span key="2">that work.</span>,
]

function AnimatedLine({ word, i }: { word: React.ReactNode; i: number }) {
  const controls = useAnimationControls()

  useEffect(() => {
    const run = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.65, delay: i * 0.13, ease: [0.21, 0.45, 0.27, 0.9] },
      })
      controls.start({
        y: [0, -7, 0],
        transition: {
          duration: 2 + i * 0.8,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: i * 0.6,
        },
      })
    }
    run()
  }, [])

  return (
    <span className="block">
      <motion.span
        className="block"
        initial={{ y: 40, opacity: 0 }}
        animate={controls}
      >
        {word}
      </motion.span>
    </span>
  )
}

function AnimatedHeadline() {
  return (
    <h1
      className="font-serif leading-[.95] tracking-[-2px] mb-7"
      style={{ fontSize: 'clamp(52px, 9vw, 120px)' }}
    >
      {lines.map((word, i) => (
        <AnimatedLine key={i} word={word} i={i} />
      ))}
    </h1>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-10 pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(14,14,14,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,14,14,.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 'clamp(280px, 50vw, 600px)', height: 'clamp(280px, 50vw, 600px)', background: '#c8401a', opacity: .12, top: -80, right: -100 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 'clamp(160px, 28vw, 300px)', height: 'clamp(160px, 28vw, 300px)', background: '#e8a020', opacity: .12, bottom: 60, left: -60 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-content mx-auto w-full grid grid-cols-[1fr_auto] items-start gap-4 md:gap-8 min-w-0">
        <div>
        {/* Tag */}
        <AnimatedSection>
          <div className="flex items-center gap-3 text-[11px] tracking-[3px] uppercase opacity-40 mb-5">
            <span className="w-10 h-px bg-current inline-block shrink-0" />
            Software Engineer
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedHeadline />

        </div>

        {/* Character */}
        <AnimatedSection delay={0.3}>
          <div style={{ width: 'clamp(100px, 18vw, 200px)', height: 'clamp(100px, 18vw, 200px)', marginTop: 'clamp(52px, 9vw, 66px)', flexShrink: 0 }}>
            <Player autoplay loop src="/Web Development.json" style={{ width: '100%', height: '100%' }} />
          </div>
        </AnimatedSection>
      </div>

      {/* Description + scroll */}
      <div className="relative z-10 max-w-content mx-auto w-full mt-8">
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center gap-5">
            <p className="leading-[1.8] opacity-60 text-[12px] text-center" style={{ maxWidth: 360 }}>
              Full-stack developer crafting web apps, mobile apps, and backend systems
              that solve real problems — from idea to production.
            </p>
            <div className="flex flex-col items-center gap-2 opacity-30 text-[10px] tracking-[2px] uppercase">
              <span
                className="w-px animate-scrollpulse"
                style={{ height: 50, background: 'var(--ink)', display: 'block' }}
              />
              Scroll
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
