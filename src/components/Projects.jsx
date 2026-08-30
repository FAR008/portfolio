import { featuredProjects } from '../data/profile'
import SectionEyebrow from './SectionEyebrow'
import FeaturedProject from './FeaturedProject'
import ArchiveRow from './ArchiveRow'

const layouts = ['left', 'right', 'full', 'left']

export default function Projects() {
  return (
    <section id="projects" className="hairline max-w-content mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <SectionEyebrow index="03" label="Projects" />

      <h2 className="mt-6 font-display font-semibold text-4xl sm:text-5xl max-w-2xl">
        Eleven products. One consistent standard.
      </h2>
      <p className="mt-4 max-w-xl text-bone-dim leading-relaxed">
        Four case studies below use real screenshots from shipped Flutter work. The rest of the
        catalogue is listed underneath.
      </p>

      <div>
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.id} project={project} layout={layouts[i] ?? 'left'} />
        ))}
      </div>

      <ArchiveRow />
    </section>
  )
}
