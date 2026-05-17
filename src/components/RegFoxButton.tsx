'use client';

interface RegFoxButtonProps {
  regfoxUrl: string;
  campName: string;
  status?: 'open' | 'filling' | 'coming-soon';
}

const REGISTER_EMAIL = 'gregwalkervolley@gmail.com';

export default function RegFoxButton({ regfoxUrl, campName, status = 'open' }: RegFoxButtonProps) {
  const isSoon = status === 'coming-soon';
  const subject = encodeURIComponent(`Registration — ${campName}`);
  const body = encodeURIComponent(`Hi Coach Walker,\n\nI\'d like to register for ${campName}.\n\nCamper name:\nGrad year:\nPosition:\nParent/Guardian name:\nPhone:\n\nPlease send me registration details.\n\nThank you!`);
  const emailUrl = `mailto:${REGISTER_EMAIL}?subject=${subject}&body=${body}`;

  if (isSoon) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px', background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC' }}>
        <div style={{ fontSize: '2rem', marginBottom: 12 }}>📅</div>
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#0C1B2A', marginBottom: 8 }}>
          Dates Being Finalized
        </h3>
        <p style={{ color: '#9A958E', fontSize: '.9rem', maxWidth: 400, margin: '0 auto 20px' }}>
          Email us to secure your spot — we\'ll confirm dates and send registration details as soon as they\'re set.
        </p>
        <a
          href={emailUrl}
          style={{ display: 'inline-block', background: '#D4A843', color: '#0C1B2A', padding: '14px 32px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}
        >
          Express Interest →
        </a>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', background: '#fff', borderRadius: 12, border: '2px solid rgba(212,168,67,.3)' }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,.1)', border: '1px solid rgba(16,185,129,.3)', color: '#059669', padding: '6px 16px', borderRadius: 50, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 16 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
          {status === 'filling' ? 'Filling Up — Register Now' : 'Registration Open'}
        </div>
      </div>
      <a
        href={emailUrl}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#D4A843',
          color: '#0C1B2A',
          padding: '18px 44px',
          borderRadius: 6,
          fontWeight: 800,
          fontSize: '1.1rem',
          textDecoration: 'none',
          letterSpacing: '.02em',
        }}
      >
        Register Now →
      </a>
      <p style={{ marginTop: 14, color: '#9A958E', fontSize: '.82rem' }}>
        Online registration portal opening soon · Email secures your spot today
      </p>
      <p style={{ marginTop: 8, fontSize: '.8rem' }}>
        <a href="/waiver" style={{ color: '#D4A843', textDecoration: 'underline' }}>Read the full 2026 Participant Waiver →</a>
      </p>
    </div>
  );
}
