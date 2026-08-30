import { experience, education } from '../data/profile'
import SectionEyebrow from './SectionEyebrow'

function Entry({ item }) {
  return (
    <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-8 hairline">
      <div className="mono-label text-bone-dim">{item.range}</div>
      <div>
        <h3 className="font-display text-2xl">{item.title}</h3>
        <p className="mt-1 mono-label text-lime">{item.org}</p>
        <p className="mt-3 max-w-lg text-bone-dim leading-relaxed">{item.detail}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="hairline max-w-content mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <SectionEyebrow index="04" label="Experience" />
      <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl max-w-xl">
        Where the work happens.
      </h2>

      <div className="mt-10">
        {experience.map((item) => (
          <Entry key={item.id} item={item} />
        ))}
        {education.map((item) => (
          <Entry key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
