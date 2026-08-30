import Monogram from './Monogram'

export default function Footer() {
  return (
    <footer className="hairline max-w-content mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Monogram className="w-6 h-6 text-bone-faint" />
        <span className="mono-label text-bone-faint">
          Muhammad Farooq — Flutter &amp; Android Developer
        </span>
      </div>
      <a href="#hero" className="mono-label text-bone-faint hover:text-lime transition-colors">
        Back to top ↑
      </a>
    </footer>
  )
}
