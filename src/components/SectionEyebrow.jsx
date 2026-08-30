export default function SectionEyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-3 mono-label">
      <span className="text-lime">{index}</span>
      <span className="h-px w-8 bg-slate-line" />
      <span>{label}</span>
    </div>
  )
}
