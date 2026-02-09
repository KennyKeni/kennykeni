import { Link } from '@tanstack/react-router'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/projects/nebula-console', label: 'Nebula Console' },
  { to: '/projects/supply-sync', label: 'Supply Sync' },
  { to: '/projects/atlas-notes', label: 'Atlas Notes' },
] as const

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
        <Link
          to="/"
          className="font-pixel-square text-lg tracking-wide text-foreground uppercase"
        >
          KLIN PORTFOLIO
        </Link>
        <nav className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-pixel-line border border-border px-3 py-2 text-xs tracking-wide uppercase text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  'font-pixel-line border border-foreground bg-foreground px-3 py-2 text-xs tracking-wide uppercase text-background',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
