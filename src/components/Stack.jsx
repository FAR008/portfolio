import { Smartphone, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../data/profile'
import SectionEyebrow from './SectionEyebrow'

const icons = [Smartphone, Server, Wrench]

export default function Stack() {
  return (
    <section id="stack" className="hairline max-w-content mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <SectionEyebrow index="02" label="Stack" />

      <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl max-w-xl">
        Tools of the trade.
      </h2>

      <div className="mt-14 grid sm:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => {
          const Icon = icons[i] ?? Smartphone
          return (
            <div
              key={group.label}
              className="group bg-slate-panel border border-slate-line rounded-2xl p-6 sm:p-7 hover:border-lime/50 transition-colors"
            >
              <Icon size={26} className="text-lime" strokeWidth={1.6} />
              <h3 className="mt-5 font-display text-xl">{group.label}</h3>
              <p className="mt-2 text-sm text-bone-dim leading-relaxed">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="mono-label px-3 py-1.5 rounded-full border border-slate-line text-bone-dim group-hover:border-lime/40 group-hover:text-bone transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
