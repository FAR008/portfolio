import { sections } from '../data/profile'

export default function SectionRail({ active }) {
  const activeIndex = sections.findIndex((s) => s.id === active)

  return (
    <>
      {/* Desktop: fixed vertical rail on the right edge */}
      <div className="hidden lg:flex flex-col items-end gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-30">
        {sections.map((s) => {
          const isActive = s.id === active
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-center gap-3"
              aria-current={isActive ? 'true' : undefined}
              aria-label={`Go to ${s.label} section`}
            >
              <span
                className={`mono-label transition-opacity duration-200 ${
                  isActive ? 'opacity-100 text-lime' : 'opacity-0 group-hover:opacity-70'
                }`}
              >
                {s.label}
              </span>
              <span
                className={`h-px transition-all duration-200 ${
                  isActive ? 'w-8 bg-lime' : 'w-4 bg-bone-faint group-hover:w-6 group-hover:bg-bone-dim'
                }`}
              />
            </a>
          )
        })}
      </div>

      {/* Mobile: compact progress indicator, fixed bottom */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 bg-graphite-900/90 backdrop-blur border border-slate-line rounded-full px-3 py-2">
        {sections.map((s) => (
          <span
            key={s.id}
            className={`rounded-full transition-all duration-200 ${
              s.id === active ? 'w-4 h-1.5 bg-lime' : 'w-1.5 h-1.5 bg-bone-faint'
            }`}
          />
        ))}
        <span className="mono-label ml-1.5 text-bone-dim">
          {activeIndex >= 0 ? sections[activeIndex].index : '00'}
        </span>
      </div>
    </>
  )
}
