const OFFERS = [
  {
    title: 'Vehicle Insurance Check',
    desc: 'Compare low-cost comprehensive & 3rd-party policies online.',
    tag: 'Save up to 85%',
    icon: '🛡️',
    url: 'https://www.profitableratecpmnetwork.com/vix09ftjj?key=21d11cb40de5365d4bedbc8720c0133b',
  },
  {
    title: 'Instant Vehicle Loans',
    desc: 'Pre-approved car & bike loans at lowest interest rates.',
    tag: 'Instant Approval',
    icon: '💳',
    url: 'https://www.profitableratecpmnetwork.com/zhmbthfn?key=0f5452db06b296e127fb4c7480aef453',
  },
  {
    title: 'Traffic Challan & RC Pay',
    desc: 'Check pending e-challans and clear vehicle fines in minutes.',
    tag: 'Fast Track',
    icon: '📋',
    url: 'https://www.profitableratecpmnetwork.com/pf6ess15y4?key=98c8238d4f5bf72df792b146bf3eced8',
  },
  {
    title: 'Free Used Car Valuation',
    desc: 'Check accurate resale market value and sell car instantly.',
    tag: 'Best Price',
    icon: '🚗',
    url: 'https://www.profitableratecpmnetwork.com/wm975kbc?key=38c5392dd77dd758cb3ae714f3cda94b',
  },
  {
    title: 'Instant FASTag Top-up',
    desc: 'Recharge any vehicle FASTag with zero convenience fees.',
    tag: 'Quick Recharge',
    icon: '⚡',
    url: 'https://www.profitableratecpmnetwork.com/scmqprjj?key=c9ef7a2bed308feeea4ce3202c638912',
  },
  {
    title: 'Driving Licence Assistance',
    desc: 'Application forms, online slot booking, and renewal guides.',
    tag: 'Easy Portal',
    icon: '📄',
    url: 'https://www.profitableratecpmnetwork.com/qbskdip4?key=ac238f1f98345d6a39fb9618eafb9eb1',
  },
]

export default function SponsoredServices({
  title = 'Sponsored Vehicle Services & Offers',
  subtitle = 'Popular partner tools for vehicle owners across India',
  limit,
}) {
  const items = limit ? OFFERS.slice(0, limit) : OFFERS

  return (
    <section className="section sponsored-section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: 'var(--amber, #F0A000)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              Sponsored Partner Offers
            </span>
            <h2 className="section-title" style={{ fontSize: 'var(--text-xl, 1.25rem)', margin: 0 }}>
              {title}
            </h2>
            {subtitle && (
              <p style={{ fontSize: 'var(--text-sm, 0.875rem)', color: 'var(--text-secondary, #8A96A8)', margin: '4px 0 0' }}>
                {subtitle}
              </p>
            )}
          </div>
          <span
            style={{
              fontSize: '11px',
              padding: '2px 8px',
              background: 'var(--tarmac-card, #1C2335)',
              border: '1px solid var(--tarmac-border, #252E42)',
              borderRadius: 'var(--r-sm, 4px)',
              color: 'var(--text-muted, #868FA0)',
            }}
          >
            Ad Links
          </span>
        </div>

        <div className="sponsored-grid">
          {items.map((offer) => (
            <a
              key={offer.title}
              href={offer.url}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="sponsored-card"
            >
              <div className="sponsored-card-header">
                <span className="sponsored-icon" aria-hidden="true">{offer.icon}</span>
                <span className="sponsored-tag">{offer.tag}</span>
              </div>
              <h3 className="sponsored-title">{offer.title} ↗</h3>
              <p className="sponsored-desc">{offer.desc}</p>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .sponsored-section {
          padding: 32px 0;
        }
        .sponsored-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 14px;
          margin-top: 16px;
        }
        @media (min-width: 640px) {
          .sponsored-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .sponsored-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .sponsored-card {
          display: flex;
          flex-direction: column;
          padding: 16px;
          background: var(--tarmac-card, #1C2335);
          border: 1px solid var(--tarmac-border, #252E42);
          border-radius: var(--r-md, 8px);
          text-decoration: none;
          transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .sponsored-card:hover {
          transform: translateY(-2px);
          border-color: var(--amber, #F0A000);
          box-shadow: 0 4px 12px rgba(240, 160, 0, 0.08);
        }
        .sponsored-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .sponsored-icon {
          font-size: 1.4rem;
        }
        .sponsored-tag {
          font-size: 11px;
          font-weight: 600;
          color: var(--amber, #F0A000);
          background: rgba(240, 160, 0, 0.12);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .sponsored-title {
          font-size: var(--text-base, 1rem);
          font-weight: 600;
          color: var(--text-primary, #E4E8F0);
          margin: 0 0 6px;
          line-height: 1.3;
        }
        .sponsored-card:hover .sponsored-title {
          color: var(--amber, #F0A000);
        }
        .sponsored-desc {
          font-size: var(--text-xs, 0.75rem);
          color: var(--text-secondary, #8A96A8);
          margin: 0;
          line-height: 1.5;
        }
      `}</style>
    </section>
  )
}
