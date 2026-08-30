import { capabilities } from '../data/profile'
import SectionEyebrow from './SectionEyebrow'

export default function Services() {
  return (
    <section id="services" className="hairline max-w-content mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <SectionEyebrow index="05" label="Capabilities" />
      <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl max-w-xl">
        What I can take on.
      </h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {capabilities.map((cap, i) => (
          <div
            key={cap.id}
            className="border border-slate-line rounded-2xl p-6 hover:border-lime/50 hover:bg-slate-panel/60 transition-colors"
          >
            <span className="mono-label text-bone-faint">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 font-display text-lg leading-snug">{cap.title}</h3>
            <p className="mt-2 text-sm text-bone-dim leading-relaxed">{cap.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
