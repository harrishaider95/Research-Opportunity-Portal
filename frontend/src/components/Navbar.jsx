export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-xl font-bold text-slate-900">
          ResearchHub
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm font-medium text-slate-600 hover:text-slate-900">Home</a>
          <a href="#opportunities" className="text-sm font-medium text-slate-600 hover:text-slate-900">Opportunities</a>
          <a href="#mentors" className="text-sm font-medium text-slate-600 hover:text-slate-900">Mentors</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900">About</a>
        </div>

        <button className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500">
          Join now
        </button>
      </div>
    </nav>
  )
}
