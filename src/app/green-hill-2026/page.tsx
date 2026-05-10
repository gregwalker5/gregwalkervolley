'use client';

import { useEffect } from 'react';

export default function GreenHillCamp() {
  useEffect(() => {
    document.title = 'Green Hill High School Camp 2026 | Greg Walker Volleyball';
  }, []);

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,27,42,.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,168,67,.12)', height: 68, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FAFAFA', textDecoration: 'none' }}>
            Greg Walker <span style={{ color: '#D4A843' }}>Volley</span>
          </a>
          <a href="mailto:gregwalkervolley@gmail.com?subject=Green Hill Camp 2026 Registration" style={{ background: '#D4A843', color: '#0C1B2A', padding: '10px 20px', borderRadius: 6, fontWeight: 700, fontSize: '.85rem', textDecoration: 'none' }}>
            Register Interest
          </a>
        </div>
      </nav>

      <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#F0EDE8', minHeight: '100vh', paddingTop: 68 }}>

        {/* HERO */}
        <div style={{ background: '#0C1B2A', padding: '60px 28px 50px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,168,67,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(232,114,58,.12)', border: '1px solid rgba(232,114,58,.3)', color: '#E8723A', padding: '7px 18px', borderRadius: 50, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E8723A', display: 'inline-block' }} />
              Nashville, TN · Dates Coming Soon
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: '#FAFAFA', marginBottom: 12, lineHeight: 1.05 }}>
              Green Hill High School<br /><span style={{ color: '#D4A843' }}>Volleyball Camp 2026</span>
            </h1>
            <p style={{ color: '#C8C4BE', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 560, margin: '0 auto 32px' }}>
              Elite camp at Green Hill High School led by Greg Walker — NCAA Head Coach at Smith College and USA National Team Coach. Dates being finalized — register your interest now to be first notified.
            </p>
            <a
              href="mailto:gregwalkervolley@gmail.com?subject=Green Hill Camp 2026 — Register Interest&body=Name:%0ASchool:%0AGrade (Fall 2026):%0APosition:%0ALevel (Varsity/JV):"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4A843', color: '#0C1B2A', padding: '16px 36px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}
            >
              Register Interest →
            </a>
            <div style={{ marginTop: 14, color: '#9A958E', fontSize: '.83rem' }}>Dates will be announced soon — early interest secures your spot.</div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 28px' }}>

          {/* What to expect */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>

            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC', overflow: 'hidden' }}>
              <div style={{ background: '#0C1B2A', padding: '20px 28px' }}>
                <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 6 }}>Camp Format</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FAFAFA', margin: 0 }}>What to Expect</h3>
              </div>
              <div style={{ padding: '24px 28px' }}>
                {[
                  { icon: '🏐', title: '9 AM – 4 PM Daily', detail: 'Full-day sessions, 4 days' },
                  { icon: '⚡', title: 'Skill Development', detail: 'Passing, setting, attacking, serving, defense' },
                  { icon: '📋', title: 'System Installation', detail: 'Championship-level offensive and defensive systems' },
                  { icon: '🧠', title: 'Mental Performance', detail: 'Leadership, team culture, and college recruiting guidance' },
                  { icon: '🤝', title: 'Coach Integration', detail: 'Your coaching staff coaches alongside us all week' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: i < 4 ? '1px solid #E5E1DC' : 'none' }}>
                    <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0C1B2A', fontSize: '.9rem' }}>{item.title}</div>
                      <div style={{ color: '#9A958E', fontSize: '.82rem', marginTop: 2 }}>{item.detail}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(212,168,67,.08)', borderRadius: 8, border: '1px solid rgba(212,168,67,.2)' }}>
                  <div style={{ fontSize: '.8rem', color: '#B8962E', fontWeight: 700 }}>📍 Green Hill High School · Nashville, TN</div>
                </div>
              </div>
            </div>

            <div style={{ background: '#0C1B2A', borderRadius: 12, padding: '28px', border: '2px solid rgba(212,168,67,.4)' }}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>Pricing</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '5rem', color: '#D4A843', lineHeight: 1 }}>$325</div>
              <div style={{ color: '#C8C4BE', fontSize: '.9rem', marginTop: 6 }}>per athlete · 4-day camp</div>
              <div style={{ display: 'inline-block', background: 'rgba(212,168,67,.15)', color: '#E8C96A', padding: '6px 14px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600, marginTop: 14 }}>
                28 hours · $13.54/hr
              </div>

              <div style={{ margin: '20px 0 0', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16 }}>
                <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9A958E', marginBottom: 10 }}>vs. Local Alternatives</div>
                {[
                  { name: 'Mid State Youth Sports (half-day)', price: '$100', note: '9am–1pm only', strike: true },
                  { name: 'Nike VB Camp – Nashville', price: '$399', note: '4-day', strike: true },
                  { name: 'Vanderbilt Team Camp', price: '$250+', note: 'college assistants', strike: true },
                  { name: 'Greg Walker Volleyball', price: '$325', note: 'NCAA + Team USA', strike: false },
                ].map((c, i) => (
                  <div key={i} style={{ padding: '8px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: c.strike ? '#9A958E' : '#E8C96A', fontSize: '.82rem', fontWeight: c.strike ? 400 : 700, textDecoration: c.strike ? 'line-through' : 'none' }}>{c.name}</span>
                      <span style={{ color: c.strike ? '#9A958E' : '#D4A843', fontWeight: 700, fontSize: '.85rem', textDecoration: c.strike ? 'line-through' : 'none' }}>{c.price}</span>
                    </div>
                    <div style={{ color: '#6B6880', fontSize: '.74rem', fontStyle: 'italic' }}>{c.note}</div>
                  </div>
                ))}
              </div>

              <div style={{ margin: '20px 0 0', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16 }}>
                {[
                  'NCAA Head Coach at every session',
                  'USA National Team experience',
                  'No travel costs — we come to Green Hill',
                  'All levels welcome',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 9 }}>
                    <span style={{ color: '#D4A843', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#C8C4BE', fontSize: '.87rem' }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:gregwalkervolley@gmail.com?subject=Green Hill Camp 2026 — Register Interest&body=Name:%0ASchool:%0AGrade (Fall 2026):%0APosition:%0ALevel (Varsity/JV):"
                style={{ display: 'block', background: '#D4A843', color: '#0C1B2A', padding: '14px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', textAlign: 'center', marginTop: 20 }}
              >
                Register Interest →
              </a>
            </div>
          </div>

          {/* About Greg */}
          <div style={{ background: 'linear-gradient(135deg, #0C1B2A, #1E3A5F)', borderRadius: 12, padding: '32px', textAlign: 'center', marginBottom: 24 }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>Your Coach</div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#FAFAFA', marginBottom: 10 }}>Coach Greg Walker</h3>
            <p style={{ color: '#C8C4BE', fontSize: '.92rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 20px' }}>
              Head Volleyball Coach at Smith College · USA Volleyball Senior National Team Coach · 2024 NEWMAC Champions · #23 NCAA NPI Ranking
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NCAA Head Coach', 'USA National Team', 'NEWMAC Champions 2024', '#23 Nationally Ranked'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(212,168,67,.12)', color: '#D4A843', padding: '6px 14px', borderRadius: 50, fontSize: '.76rem', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '40px 20px', background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC' }}>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', marginBottom: 10 }}>Dates Coming Soon</h3>
            <p style={{ color: '#9A958E', marginBottom: 24, fontSize: '.9rem', maxWidth: 440, margin: '0 auto 24px' }}>
              Email to register your interest. You&apos;ll be first to know when dates are confirmed and registration opens.
            </p>
            <a
              href="mailto:gregwalkervolley@gmail.com?subject=Green Hill Camp 2026 — Register Interest&body=Name:%0ASchool:%0AGrade (Fall 2026):%0APosition:%0ALevel (Varsity/JV):"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4A843', color: '#0C1B2A', padding: '16px 40px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}
            >
              gregwalkervolley@gmail.com →
            </a>
          </div>
        </div>

        <footer style={{ background: '#0C1B2A', padding: '28px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ color: '#9A958E', fontSize: '.8rem' }}>© 2026 Creative Performance Consulting LLC · <a href="/" style={{ color: '#C8C4BE', textDecoration: 'none' }}>gregwalkervolley.com</a></div>
        </footer>
      </div>
    </>
  );
}
