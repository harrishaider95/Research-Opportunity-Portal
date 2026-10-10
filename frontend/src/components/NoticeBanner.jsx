export default function NoticeBanner({ notice }) {
  if (!notice) return null

  return (
    <div
      role={notice.type === 'error' ? 'alert' : 'status'}
      className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
        notice.type === 'error'
          ? 'border-rose-200 bg-rose-50 text-rose-800'
          : 'border-emerald-200 bg-emerald-50 text-emerald-800'
      }`}
    >
      {notice.text}
    </div>
  )
}
