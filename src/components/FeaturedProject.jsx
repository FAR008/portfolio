const rotations = ['-rotate-6', 'rotate-0', 'rotate-6']
const translates = ['-translate-x-6', 'translate-x-0', 'translate-x-6']

function FanGallery({ images }) {
  return (
    <div className="relative flex justify-center items-center h-[420px] sm:h-[460px]">
      {images.map((img, i) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          loading="eager"
          className={`absolute w-[180px] sm:w-[200px] aspect-[9/19.5] object-cover rounded-[1.6rem] border-4 border-graphite-800 shadow-2xl shadow-black/40 transition-transform duration-300 ${rotations[i]} ${translates[i]} ${
            i === 1 ? 'z-10 group-hover:scale-[1.04]' : 'z-0 group-hover:scale-[1.02]'
          }`}
          style={{ zIndex: i === 1 ? 3 : i }}
        />
      ))}
    </div>
  )
}

function FullBleedGallery({ images }) {
  const [hero, ...rest] = images
  return (
    <div className="w-full">
      <div className="w-full max-h-[520px] bg-slate-panel border border-slate-line rounded-2xl overflow-hidden flex justify-center">
        <img
          src={hero.src}
          alt={hero.alt}
          loading="eager"
          className="max-h-[520px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.015]"
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {rest.map((img) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            loading="eager"
            className="w-full aspect-[9/12] object-cover object-top rounded-xl border border-slate-line"
          />
        ))}
      </div>
    </div>
  )
}

export default function FeaturedProject({ project, layout }) {
  const isFull = layout === 'full'
  const isReversed = layout === 'right'

  return (
    <div
      className={`group grid gap-10 lg:gap-16 py-16 sm:py-20 hairline items-center ${
        isFull ? '' : 'lg:grid-cols-2'
      }`}
    >
      <div className={isFull ? 'order-2' : isReversed ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
        {isFull ? (
          <FullBleedGallery images={project.images} name={project.name} />
        ) : (
          <FanGallery images={project.images} name={project.name} />
        )}
      </div>

      <div className={isFull ? 'order-1' : isReversed ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
        <div className="mono-label text-lime">Case {project.case}</div>
        <h3 className="mt-3 font-display font-semibold text-3xl sm:text-4xl">{project.name}</h3>
        <p className="mt-2 mono-label text-bone-dim">{project.category}</p>
        <p className="mt-6 max-w-lg text-bone-dim leading-relaxed">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="mono-label px-3 py-1.5 rounded-full border border-slate-line text-bone-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 mono-label text-bone-dim hover:text-lime transition-colors border-b border-transparent hover:border-lime pb-0.5"
        >
          Project details coming soon — get in touch
        </a>
      </div>
    </div>
  )
}
