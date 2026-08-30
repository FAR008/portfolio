import { ArrowDown, ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import Monogram from './Monogram'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center pt-24 pb-16 px-5 sm:px-8 overflow-hidden"
    >
      {/* restrained background mark — never competes with the headline */}
      <Monogram
        frame={false}
        className="pointer-events-none select-none absolute -right-16 top-1/2 -translate-y-1/2 w-[65vw] max-w-[560px] text-slate-panel opacity-60"
      />

      <div className="relative max-w-content w-full mx-auto">
        <div className="mono-label mb-8 flex items-center gap-3">
          <span className="text-lime">00</span>
          <span className="h-px w-8 bg-slate-line" />
          <span>Flutter &amp; Android developer</span>
        </div>

        <h1 className="font-display font-semibold text-[13vw] leading-[0.95] sm:text-[7.5vw] lg:text-[6.2vw] xl:text-[86px] max-w-4xl">
          Mobile products,
          <br />
          built with <span className="text-lime">intent.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-bone-dim leading-relaxed">
          {profile.name} designs and builds Flutter and Android apps — currently at{' '}
          <span className="text-bone">{profile.company}</span>, {profile.companyLocation}.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-lime text-graphite-950 font-medium px-6 py-3.5 rounded-full hover:bg-bone transition-colors"
          >
            View My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-slate-line text-bone px-6 py-3.5 rounded-full hover:border-lime hover:text-lime transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 mono-label">
          <span className="text-bone-dim">{profile.metaChips.join(' · ')}</span>
          <span className="h-1 w-1 rounded-full bg-bone-faint hidden sm:block" />
          <span className="text-bone-dim">{profile.location}</span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 mono-label text-bone-faint hover:text-lime transition-colors"
      >
        Scroll
        <ArrowDown size={16} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  )
}
