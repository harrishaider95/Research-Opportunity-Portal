import { buttonClassName } from '../utils/opportunities'

export default function SiteHeader({ currentPage, onNavigate }) {
  return (
    <header className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="/home"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/home')
          }}
          className="flex items-center gap-3"
          aria-label="ResearchHub home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-lg font-bold text-white">R</span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-slate-950">ResearchHub</span>
            <span className="block text-xs text-slate-500">University opportunity portal</span>
          </span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Main navigation">
          <a
            href="/home"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/home')
            }}
            aria-current={currentPage === 'home' ? 'page' : undefined}
            className="text-sm font-semibold text-slate-600 transition hover:text-indigo-700"
          >
            Home
          </a>
          <a
            href="/browse"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/browse')
            }}
            aria-current={currentPage === 'browse' ? 'page' : undefined}
            className="text-sm font-semibold text-slate-600 transition hover:text-indigo-700"
          >
            Browse opportunities
          </a>
          <a
            href="/add"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/add')
            }}
            aria-current={currentPage === 'add' ? 'page' : undefined}
            className={`${buttonClassName} bg-indigo-600 text-white shadow-sm hover:bg-indigo-700`}
          >
            + Add opportunity
          </a>
        </nav>
      </div>
    </header>
  )
}
