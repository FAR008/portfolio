import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Monogram from './Monogram'
import { sections } from '../data/profile'

const navLinks = sections.filter((s) => s.nav)

export default function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-graphite-900/90 backdrop-blur border-b border-slate-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <Monogram className="w-8 h-8 text-lime" />
          <span className="font-display font-medium text-sm sm:text-base leading-none tracking-tight">
            MUHAMMAD<span className="text-bone-dim"> / </span>FAROOQ
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 mono-label">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors hover:text-lime ${
                  active === link.id ? 'text-lime' : 'text-bone-dim'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-lime text-lime px-4 py-2 rounded-full mono-label hover:bg-lime hover:text-graphite-950 transition-colors"
        >
          Contact
        </a>

        <button
          ref={toggleRef}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 -mr-2 text-bone"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-graphite-900 border-b border-slate-line px-5 pb-6 pt-2"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 font-display text-2xl ${
                    active === link.id ? 'text-lime' : 'text-bone'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center w-full border border-lime text-lime px-4 py-3 rounded-full mono-label"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
