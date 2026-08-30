import { ArrowUpRight } from 'lucide-react'
import { archiveProjects } from '../data/profile'

export default function ArchiveRow() {
  return (
    <div className="mt-8">
      <p className="mono-label text-bone-faint">
        Additional projects — screenshots not supplied yet
      </p>
      <ul className="mt-4 divide-y divide-slate-line border-t border-b border-slate-line">
        {archiveProjects.map((project, i) => (
          <li key={project.id}>
            <a
              href="#contact"
              className="group flex items-center justify-between gap-4 py-5 hover:bg-slate-panel/60 transition-colors px-1 -mx-1 rounded-lg"
            >
              <div className="flex items-center gap-5 min-w-0">
                <span className="mono-label text-bone-faint w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <div className="font-display text-lg sm:text-xl">{project.name}</div>
                  <div className="mono-label text-bone-dim">{project.category}</div>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-bone-faint group-hover:text-lime transition-colors"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
