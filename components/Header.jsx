import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="site-logo" aria-label="RTOLookup home">
          <div className="logo-plate" aria-hidden="true">
            <span className="logo-ind">IND</span>
            <span className="logo-text">RTO</span>
          </div>
          <span className="logo-name">Lookup</span>
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/#states" className="nav-link">States</Link>
          <Link href="/guides" className="nav-link">Guides</Link>
          <Link href="/guides/check-vehicle-owner" className="nav-link">Check Owner</Link>
        </nav>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(14,17,23,0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--tarmac-border);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          gap: 24px;
        }

        .site-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .logo-plate {
          display: flex;
          align-items: center;
          background: var(--plate-white);
          border: 2px solid var(--plate-chrome);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          height: 28px;
        }

        .logo-ind {
          background: var(--ind-blue);
          color: white;
          font-family: var(--font-display);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 0 5px;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .logo-text {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: var(--plate-black);
          letter-spacing: 2px;
          padding: 0 8px;
        }

        .logo-name {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 1px;
        }

        .site-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: var(--r-md);
          transition: color 0.15s, background 0.15s;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--tarmac-raised);
        }

        @media (max-width: 480px) {
          .site-nav { display: none; }
        }
      `}</style>
    </header>
  )
}
