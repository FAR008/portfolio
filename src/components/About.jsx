import { profile, proofPoints } from '../data/profile'
import SectionEyebrow from './SectionEyebrow'

export default function About() {
  return (
    <section id="about" className="hairline max-w-content mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <SectionEyebrow index="01" label="About" />

      <div className="mt-10 grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">
        <div className="relative w-full max-w-xs mx-auto lg:mx-0">
          <div className="absolute -inset-3 border border-slate-line rounded-2xl" aria-hidden="true" />
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="relative w-full aspect-[4/5] object-cover rounded-2xl grayscale-[15%] contrast-[1.05]"
            loading="eager"
          />
          <div className="absolute -bottom-3 -right-3 bg-lime text-graphite-950 mono-label px-3 py-1.5 rounded-full">
            {profile.role}
          </div>
        </div>

        <div>
          <p className="font-display text-2xl sm:text-3xl leading-snug max-w-2xl">
            {profile.name} is a Flutter and Android developer based in {profile.location},
            currently building mobile products at <span className="text-lime">{profile.company}</span>,{' '}
            {profile.companyLocation}.
          </p>
          <p className="mt-6 max-w-2xl text-bone-dim leading-relaxed">
            He holds a {profile.education.degree} from {profile.education.school}, and works
            end-to-end across Flutter, Android, and the backend services that connect an app to
            the rest of the world — from REST APIs to Firebase.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className="border border-slate-line rounded-xl p-4 sm:p-5 hover:border-lime/60 transition-colors"
              >
                <div className="font-display text-3xl sm:text-4xl text-lime">{point.value}</div>
                <div className="mt-2 text-xs text-bone-dim leading-snug">{point.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 mono-label text-bone-faint">Figures reflect portfolio scope, not external metrics</p>
        </div>
      </div>
    </section>
  )
}
