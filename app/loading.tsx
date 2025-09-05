export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="inline-flex items-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/60 px-4 py-3">
        <span className="h-3 w-3 animate-ping rounded-full bg-indigo-400" />
        <span className="text-sm text-slate-200">Loading…</span>
      </div>
    </div>
  )
}
