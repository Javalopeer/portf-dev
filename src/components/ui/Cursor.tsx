import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top  = e.clientY + 'px'
    }

    const checkHover = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button')) {
        el.classList.add('hover')
      } else {
        el.classList.remove('hover')
      }
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', checkHover)
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', checkHover)
    }
  }, [])

  return <div ref={ref} className="cursor" />
}
