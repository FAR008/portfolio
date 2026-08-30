import { useState } from 'react'
import { Mail, Phone, Link2, Send } from 'lucide-react'
import { profile } from '../data/profile'
import SectionEyebrow from './SectionEyebrow'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="hairline max-w-content mx-auto px-5 sm:px-8 py-24 sm:py-32">
      <SectionEyebrow index="06" label="Contact" />

      <h2 className="mt-6 font-display font-semibold text-4xl sm:text-6xl max-w-2xl leading-[1.05]">
        Have a mobile product to shape or improve?
      </h2>
      <p className="mt-4 font-display text-2xl sm:text-3xl text-lime max-w-xl">
        Let&rsquo;s turn the rough edge into a reliable experience.
      </p>

      <div className="mt-16 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 border border-slate-line rounded-xl p-5 hover:border-lime/60 hover:bg-slate-panel/60 transition-colors"
            >
              <Mail size={20} className="text-lime shrink-0" />
              <div>
                <div className="mono-label text-bone-faint">Email</div>
                <div className="mt-0.5 text-lg">{profile.email}</div>
              </div>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-4 border border-slate-line rounded-xl p-5 hover:border-lime/60 hover:bg-slate-panel/60 transition-colors"
            >
              <Phone size={20} className="text-lime shrink-0" />
              <div>
                <div className="mono-label text-bone-faint">Phone</div>
                <div className="mt-0.5 text-lg">{profile.phone}</div>
              </div>
            </a>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <button
              type="button"
              disabled
              className="flex items-center gap-3 border border-dashed border-slate-line rounded-xl p-4 text-bone-faint cursor-not-allowed"
              aria-label="GitHub profile URL not yet added"
            >
              <Link2 size={18} />
              <span className="mono-label">GitHub — Add URL</span>
            </button>
            <button
              type="button"
              disabled
              className="flex items-center gap-3 border border-dashed border-slate-line rounded-xl p-4 text-bone-faint cursor-not-allowed"
              aria-label="LinkedIn profile URL not yet added"
            >
              <Link2 size={18} />
              <span className="mono-label">LinkedIn — Add URL</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-panel border border-slate-line rounded-2xl p-6 sm:p-8">
          <p className="mono-label text-bone-faint">
            Demo form — not yet connected to an email service
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="mono-label text-bone-dim">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent border border-slate-line rounded-lg px-4 py-3 text-bone placeholder:text-bone-faint focus:border-lime"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mono-label text-bone-dim">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent border border-slate-line rounded-lg px-4 py-3 text-bone placeholder:text-bone-faint focus:border-lime"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mono-label text-bone-dim">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full bg-transparent border border-slate-line rounded-lg px-4 py-3 text-bone placeholder:text-bone-faint focus:border-lime resize-none"
                placeholder="What are you building?"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-lime text-graphite-950 font-medium px-6 py-3.5 rounded-full hover:bg-bone transition-colors"
            >
              <Send size={17} />
              Send message
            </button>

            {submitted && (
              <p role="status" className="mono-label text-lime">
                Demo only — for now, please reach out directly by email or phone above.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
