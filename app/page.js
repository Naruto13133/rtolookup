import PlateSearch from '@/components/PlateSearch'
import PlateCard from '@/components/PlateCard'
import { rtos, stateGroups, states, getStateSlug } from '@/data/rtos'
import Link from 'next/link'
import AdsterraBanner from '@/components/AdsterraBanner'
import SponsoredServices from '@/components/SponsoredServices'

const FEATURED_CODES = ['MH-01', 'DL-1', 'KA-01', 'TN-01', 'GJ-01', 'TS-09', 'UP-32', 'WB-02', 'RJ-14', 'KL-14', 'HR-26', 'PB-65']

export default function Home() {
  const featured = FEATURED_CODES.map(c => rtos.find(r => r.code === c)).filter(Boolean)

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="section-label">India's RTO Vehicle Registration & Number Plate Reference</p>
            <h1 className="hero-title">
              Decode any<br />
              <span className="hero-accent">RTO number plate</span><br />
              & check RC status
            </h1>
            <p className="hero-subtitle">
              Instant <strong>vehicle registration number check</strong> for any Indian vehicle. Look up RTO vehicle registration details, decode number plate series, and verify <strong>vehicle registration certificate</strong> guidelines across all 1,400+ RTOs including <strong>RTO Gujarat</strong>, Maharashtra, Delhi, and more.
            </p>
            <PlateSearch />

            <div className="quick-keyword-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
              <Link href="/guides/check-vehicle-owner" className="keyword-pill" prefetch={false}>
                🔍 RC Status Check by Vehicle Number
              </Link>
              <Link href="/state/gujarat" className="keyword-pill" prefetch={false}>
                📍 RTO Gujarat (GJ) Codes
              </Link>
              <Link href="/guides/rc-transfer" className="keyword-pill" prefetch={false}>
                📋 Vehicle Registration Certificate (RC)
              </Link>
            </div>

            <div className="trust-strip" style={{ marginTop: '32px' }}>
              <div className="trust-item">
                <span className="trust-num">1,400+</span>
                <span className="trust-label">RTO codes</span>
              </div>
              <div className="trust-sep" aria-hidden="true" />
              <div className="trust-item">
                <span className="trust-num">36</span>
                <span className="trust-label">states & UTs</span>
              </div>
              <div className="trust-sep" aria-hidden="true" />
              <div className="trust-item">
                <span className="trust-num">5</span>
                <span className="trust-label">process guides</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <ul className="hero-plates" aria-label="Featured RTO codes">
              {featured.slice(0, 4).map(rto => (
                <li key={rto.code}>
                  <Link href={`/rto/${rto.code.toLowerCase()}`} className="hero-plate-link" aria-label={`${rto.code}, ${rto.city}`} prefetch={false}>
                    <div className="plate hero-plate">
                      <div className="plate-hologram" style={{ width: '18px', height: '18px' }} />
                      <div className="plate-ind" style={{ minHeight: '38px', padding: '3px 6px' }}>
                        <div className="plate-flag" style={{ width: '15px' }}>
                          <span style={{ background: '#FF9933', height: '2px', display: 'block' }} />
                          <span style={{ background: '#FFFFFF', height: '2px', display: 'block' }} />
                          <span style={{ background: '#138808', height: '2px', display: 'block' }} />
                        </div>
                        <span className="plate-ind-text" style={{ fontSize: '8px' }}>IND</span>
                      </div>
                      <span className="plate-number" style={{ fontSize: '20px', letterSpacing: '3px' }}>{rto.code}</span>
                    </div>
                    <span className="hero-plate-city">{rto.city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Lane divider ── */}
      <div className="container"><div className="lane" style={{ marginTop: '0' }} aria-hidden="true" /></div>


      {/* ── Popular RTOs ── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Most Searched</p>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>Popular RTO Codes</h2>
          <div className="rto-grid">
            {featured.map(rto => (
              <PlateCard key={rto.code} rto={rto} size="sm" />
            ))}
          </div>
          <Link href="#states" className="view-all-link" style={{ marginTop: '24px', display: 'inline-block' }}>
            Browse all states →
          </Link>
        </div>
      </section>

      {/* ── Sponsored Services ── */}
      <SponsoredServices />

      {/* ── How it works ── */}
      <section className="section how-section">
        <div className="container">
          <p className="section-label">How it works</p>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>RTO Vehicle Registration &<br />Number Plate Decoding</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-num">1</div>
              <h3 className="step-title">State Code & RTO Registration</h3>
              <p className="step-body">The first two letters identify the state where the RTO registration occurred — such as <strong>GJ</strong> for <strong>RTO Gujarat</strong>, <strong>MH</strong> for Maharashtra, or <strong>DL</strong> for Delhi. Every state and UT has a distinctive code.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3 className="step-title">District Code & RTO Vehicle Office</h3>
              <p className="step-body">The two digits following the state code pinpoint the specific RTO vehicle office issuing the vehicle registration certificate. For instance, <strong>GJ-01</strong> is Ahmedabad (RTO Gujarat), while <strong>MH-01</strong> is Mumbai Central.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3 className="step-title">Vehicle Registration Number Series</h3>
              <p className="step-body">The subsequent alphanumeric series and 4 digits form your complete vehicle registration number. Running a vehicle registration number check verifies the vehicle registration certificate and official RTO jurisdiction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ad Banner ── */}
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <AdsterraBanner />
      </div>

      {/* ── Browse by state ── */}
      <section className="section" id="states">
        <div className="container">
          <p className="section-label">Browse by state</p>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>All states & union territories</h2>
          <div className="states-grid">
            {states.map(state => {
              const slug = getStateSlug(state)
              const count = stateGroups[state].length
              return (
                <Link key={state} href={`/state/${slug}`} className="state-card" prefetch={false}>
                  <span className="state-name">{state}</span>
                  <span className="state-count">{count} RTO{count !== 1 ? 's' : ''}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Guides ── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Vehicle Registration Certificate & RTO Guides</p>
          <h2 className="section-title" style={{ marginBottom: '32px' }}>RC Status & RTO Vehicle Guides</h2>
          <div className="guides-grid">
            {[
              { slug: 'check-vehicle-owner', title: 'RC Status Check by Vehicle Number', desc: 'Perform a vehicle registration number check on Parivahan VAHAN to verify vehicle registration certificate details.', badge: 'Most searched' },
              { slug: 'rc-transfer', title: 'Vehicle Registration Certificate Transfer', desc: 'Step-by-step for transferring ownership of a used vehicle — forms, fees, and the Parivahan flow.', badge: 'Essential' },
              { slug: 'duplicate-rc', title: 'Duplicate Registration Certificate', desc: 'What to do when your vehicle registration certificate (RC) is lost or damaged. FIR, Form 26, and fees.', badge: 'Common' },
              { slug: 'noc', title: 'NOC for RTO Vehicle Transfer', desc: 'When you need a No Objection Certificate for an RTO vehicle, how to apply, and inter-state rules.', badge: 'Interstate' },
            ].map(guide => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="guide-card" prefetch={false}>
                <span className="badge badge-amber guide-badge">{guide.badge}</span>
                <h3 className="guide-title">{guide.title}</h3>
                <p className="guide-desc">{guide.desc}</p>
                <span className="guide-cta">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .hero {
          padding: 80px 0 64px;
          border-bottom: 1px solid var(--tarmac-border);
          background: radial-gradient(ellipse 80% 50% at 60% 0%, rgba(26,60,138,0.08) 0%, transparent 70%);
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          align-items: center;
        }

        @media (min-width: 768px) {
          .hero-inner { grid-template-columns: 1fr 1fr; }
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.08;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .hero-accent { color: var(--accent-text); }

        .hero-subtitle {
          font-size: var(--text-lg);
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 24px;
          max-width: 480px;
        }

        .keyword-pill {
          display: inline-flex;
          align-items: center;
          font-size: var(--text-xs);
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--tarmac-card);
          border: 1px solid var(--tarmac-border);
          border-radius: 9999px;
          padding: 6px 14px;
          text-decoration: none;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
        }
        .keyword-pill:hover {
          border-color: var(--amber);
          color: var(--text-primary);
          background: var(--tarmac-raised);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        /* On mobile the Popular RTO Codes grid follows immediately,
           so the hero's duplicate plates are hidden to reduce clutter. */
        @media (max-width: 767px) {
          .hero-visual { display: none; }
        }

        .hero-plates {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          list-style: none;
        }

        .hero-plate-link {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-start;
          transition: transform 0.18s var(--ease);
        }

        .hero-plate-link:hover { transform: translateY(-3px); }

        .hero-plate {
          gap: 6px;
          padding: 4px 8px 4px 4px;
        }

        .hero-plate-city {
          font-size: var(--text-xs);
          color: var(--text-muted);
          padding-left: 2px;
        }

        /* ── RTO grid ── */
        .rto-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        @media (min-width: 480px) { .rto-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (min-width: 768px) { .rto-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        @media (min-width: 1024px) { .rto-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); } }

        .view-all-link {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--accent-text);
          transition: color 0.12s;
        }

        .view-all-link:hover { color: var(--amber-bright); }

        /* ── How it works ── */
        .how-section {
          background: var(--tarmac-raised);
          border-top: 1px solid var(--tarmac-border);
          border-bottom: 1px solid var(--tarmac-border);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 640px) {
          .steps-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        .step { display: flex; flex-direction: column; gap: 12px; }

        .step-num {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--amber-glow);
          border: 1px solid rgba(240,160,0,0.3);
          color: var(--accent-text);
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .step-title {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--text-primary);
        }

        .step-body {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .step-body strong {
          font-family: var(--font-mono);
          color: var(--text-primary);
          font-size: 0.85em;
        }

        /* ── States ── */
        .states-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }

        @media (min-width: 480px) { .states-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (min-width: 768px) { .states-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }

        .state-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--tarmac-card);
          border: 1px solid var(--tarmac-border);
          border-radius: var(--r-md);
          gap: 8px;
          transition: border-color 0.15s, background 0.15s;
        }

        .state-card:hover {
          border-color: var(--amber-dim);
          background: var(--tarmac-raised);
        }

        .state-name {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--text-primary);
        }

        .state-count {
          font-size: var(--text-xs);
          color: var(--text-muted);
          white-space: nowrap;
        }

        /* ── Guides ── */
        .guides-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 640px) { .guides-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

        .guide-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 24px;
          background: var(--tarmac-card);
          border: 1px solid var(--tarmac-border);
          border-radius: var(--r-lg);
          transition: border-color 0.18s, transform 0.18s var(--ease);
        }

        .guide-card:hover {
          border-color: var(--amber-dim);
          transform: translateY(-2px);
        }

        .guide-badge { align-self: flex-start; }

        .guide-title {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--text-primary);
        }

        .guide-desc {
          font-size: var(--text-sm);
          color: var(--text-secondary);
          line-height: 1.65;
          flex: 1;
        }

        .guide-cta {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--accent-text);
        }
      `}</style>
    </>
  )
}
