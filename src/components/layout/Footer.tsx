export default function Footer() {
  return (
    <footer
      className="flex justify-between items-center px-10 py-8 text-[11px] tracking-[1px] opacity-40"
      style={{ borderTop: '1px solid rgba(14,14,14,.1)' }}
    >
      <span>© {new Date().getFullYear()} Gerardo Ortiz</span>
      <span>Designed & coded from scratch</span>
      <span>San José, Costa Rica</span>
    </footer>
  )
}
