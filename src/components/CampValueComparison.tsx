interface CompetitorRow {
  name: string;
  hours: string;
  days: string;
  price: string;
  perHour: string;
}

interface CampValueComparisonProps {
  market: string;
  gwvHours: string;
  gwvDays: string;
  gwvPrice: string;
  gwvPerHour: string;
  competitors: CompetitorRow[];
  note?: string;
}

const gold = '#D4A843';
const navy = '#0C1B2A';

export default function CampValueComparison({
  market, gwvHours, gwvDays, gwvPrice, gwvPerHour, competitors, note,
}: CampValueComparisonProps) {
  return (
    <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC', overflow: 'hidden', marginBottom: 32 }}>
      <div style={{ background: navy, padding: '20px 28px' }}>
        <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: gold, marginBottom: 4 }}>
          Market Comparison · {market}
        </div>
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#FAFAFA', margin: 0 }}>
          The Best Deal in {market}
        </h3>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.85rem' }}>
          <thead>
            <tr style={{ background: '#F7F5F2', borderBottom: '2px solid #E5E1DC' }}>
              {['Camp 🏕️', 'Hours ⏰', 'Days 📅', 'Price 💰', 'Per Hour ⚡'].map(h => (
                <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 700, color: '#4A4540', fontSize: '.78rem', letterSpacing: '.04em', whiteSpace: 'nowrap' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #E5E1DC' }}>
                <td style={{ padding: '12px 16px', color: '#6B6560' }}>{row.name}</td>
                <td style={{ padding: '12px 16px', color: '#6B6560', whiteSpace: 'nowrap' }}>{row.hours}</td>
                <td style={{ padding: '12px 16px', color: '#6B6560' }}>{row.days}</td>
                <td style={{ padding: '12px 16px', fontWeight: 700, color: '#4A4540' }}>{row.price}</td>
                <td style={{ padding: '12px 16px', color: '#9A6B4B', fontWeight: 600 }}>{row.perHour}</td>
              </tr>
            ))}
            {/* GWV row highlighted */}
            <tr style={{ background: 'rgba(212,168,67,.08)', borderTop: '2px solid rgba(212,168,67,.4)' }}>
              <td style={{ padding: '14px 16px', fontWeight: 800, color: navy }}>
                <span style={{ color: gold, marginRight: 6 }}>✓</span>Greg Walker Volleyball
              </td>
              <td style={{ padding: '14px 16px', fontWeight: 700, color: navy, whiteSpace: 'nowrap' }}>{gwvHours}</td>
              <td style={{ padding: '14px 16px', fontWeight: 700, color: navy }}>{gwvDays}</td>
              <td style={{ padding: '14px 16px', fontWeight: 800, color: gold, fontSize: '1rem' }}>{gwvPrice}</td>
              <td style={{ padding: '14px 16px' }}>
                <span style={{ background: gold, color: navy, padding: '4px 10px', borderRadius: 50, fontWeight: 800, fontSize: '.82rem', whiteSpace: 'nowrap' }}>
                  {gwvPerHour} ✓
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ padding: '14px 20px', background: 'rgba(212,168,67,.05)', borderTop: '1px solid rgba(212,168,67,.15)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <span style={{ color: gold, fontSize: '1rem', flexShrink: 0, marginTop: 1 }}>💡</span>
        <div>
          <span style={{ fontWeight: 700, color: navy, fontSize: '.82rem' }}>The difference: </span>
          <span style={{ color: '#6B6560', fontSize: '.82rem' }}>
            Greg Walker is an active NCAA Head Coach and USA National Team Coach — not a camp assistant. Your athletes train in their own gym; no hotels, no travel, no missed school prep.
          </span>
          {note && <span style={{ color: '#6B6560', fontSize: '.82rem' }}> {note}</span>}
        </div>
      </div>
    </div>
  );
}
