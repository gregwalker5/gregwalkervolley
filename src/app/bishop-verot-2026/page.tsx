'use client';

import { useState, useEffect } from 'react';

export default function BishopVerotCamp() {
  const [, setMobileOpen] = useState(false);

  useEffect(() => {
    document.title = 'Bishop Verot Camp 2026 | Greg Walker Volleyball';
  }, []);

  return (
    <>
      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,27,42,.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,168,67,.12)', height: 68, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FAFAFA', textDecoration: 'none' }}>
            Greg Walker <span style={{ color: '#D4A843' }}>Volley</span>
          </a>
          <a href="mailto:gregwalkervolley@gmail.com?subject=Bishop Verot Camp 2026 Registration" style={{ background: '#D4A843', color: '#0C1B2A', padding: '10px 20px', borderRadius: 6, fontWeight: 700, fontSize: '.85rem', textDecoration: 'none', letterSpacing: '.04em' }}>
            Register Now
          </a>
        </div>
      </nav>

      <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#F0EDE8', minHeight: '100vh', paddingTop: 68 }}>

        {/* HERO */}
        <div style={{ background: '#0C1B2A', padding: '60px 28px 50px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,168,67,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,168,67,.12)', border: '1px solid rgba(212,168,67,.25)', color: '#E8C96A', padding: '7px 18px', borderRadius: 50, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 24 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4A843', display: 'inline-block' }} />
              Fort Myers, FL · Summer 2026
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: '#FAFAFA', marginBottom: 12, lineHeight: 1.05 }}>
              Bishop Verot High School<br /><span style={{ color: '#D4A843' }}>Volleyball Camp 2026</span>
            </h1>
            <p style={{ color: '#C8C4BE', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 560, margin: '0 auto 32px' }}>
              3-day elite camp at Bishop Verot led by Greg Walker — NCAA Head Coach at Smith College and USA National Team Coach. Championship-level training in your own gym.
            </p>
            <a
              href="mailto:gregwalkervolley@gmail.com?subject=Bishop Verot Camp 2026 Registration&body=Name:%0ASchool:%0AGrade (Fall 2026):%0APosition:%0ALevel (Varsity/JV):"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4A843', color: '#0C1B2A', padding: '16px 36px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', letterSpacing: '.02em' }}
            >
              Register via Email →
            </a>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 28px' }}>

          {/* Schedule + Price */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>

            {/* Schedule */}
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC', overflow: 'hidden' }}>
              <div style={{ background: '#0C1B2A', padding: '20px 28px' }}>
                <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 6 }}>Camp Schedule</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FAFAFA', margin: 0 }}>July 29–31, 2026</h3>
              </div>
              <div style={{ padding: '24px 28px' }}>
                {[
                  { day: 'Day 1', date: 'Tuesday, July 29', time: '9:00 AM – 4:00 PM', note: 'Skill development + system installation', icon: '🏐' },
                  { day: 'Day 2', date: 'Wednesday, July 30', time: '9:00 AM – 4:00 PM', note: 'Game-like reps + position work', icon: '⚡' },
                  { day: 'Day 3', date: 'Thursday, July 31', time: '9:00 AM – 4:00 PM', note: 'Competition + mental performance', icon: '🏆' },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: i < 2 ? '1px solid #E5E1DC' : 'none' }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: 2 }}>{d.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', color: '#0C1B2A' }}>{d.day} — {d.date}</div>
                      <div style={{ fontWeight: 700, color: '#D4A843', fontSize: '.9rem', margin: '2px 0' }}>{d.time}</div>
                      <div style={{ color: '#9A958E', fontSize: '.82rem' }}>{d.note}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(212,168,67,.08)', borderRadius: 8, border: '1px solid rgba(212,168,67,.2)' }}>
                  <div style={{ fontSize: '.8rem', color: '#B8962E', fontWeight: 700 }}>📍 Bishop Verot High School · Fort Myers, FL</div>
                  <div style={{ fontSize: '.78rem', color: '#9A958E', marginTop: 3 }}>We come to you — no travel required for athletes</div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div style={{ background: '#0C1B2A', borderRadius: 12, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '2px solid #D4A843' }}>
              <div>
                <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>Camp Investment</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '5rem', color: '#D4A843', lineHeight: 1 }}>$300</div>
                <div style={{ color: '#C8C4BE', fontSize: '.9rem', marginTop: 6 }}>per athlete · 3-day camp</div>
                <div style={{ display: 'inline-block', background: 'rgba(212,168,67,.15)', color: '#E8C96A', padding: '6px 14px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600, marginTop: 14 }}>
                  21 hours · $14.29/hr
                </div>

                {/* Competitor comparison */}
                <div style={{ margin: '20px 0 0', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16 }}>
                  <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9A958E', marginBottom: 10 }}>vs. Local Alternatives</div>
                  {[
                    { name: 'Florida Conquer VB (half-day)', price: '$250', hours: '4 hrs/day', strike: true },
                    { name: 'Florida Conquer VB (full-day)', price: '$400', hours: '9 hrs/day', strike: true },
                    { name: 'Greg Walker Volleyball', price: '$300', hours: '7 hrs/day', strike: false },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                      <span style={{ color: c.strike ? '#9A958E' : '#E8C96A', fontSize: '.82rem', fontWeight: c.strike ? 400 : 700, textDecoration: c.strike ? 'line-through' : 'none' }}>{c.name}</span>
                      <span style={{ color: c.strike ? '#9A958E' : '#D4A843', fontSize: '.85rem', fontWeight: 700, textDecoration: c.strike ? 'line-through' : 'none' }}>{c.price}</span>
                    </div>
                  ))}
                  <div style={{ fontSize: '.75rem', color: '#9A958E', marginTop: 8, fontStyle: 'italic' }}>Greg Walker = NCAA Head Coach + USA National Team. Others = local staff.</div>
                </div>

                <div style={{ margin: '20px 0 0', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16 }}>
                  {[
                    'NCAA Head Coach at every session',
                    'USA National Team coaching experience',
                    'No travel costs — we come to Bishop Verot',
                    'Skill work, systems, mental performance',
                    'All levels welcome',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 9 }}>
                      <span style={{ color: '#D4A843', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ color: '#C8C4BE', fontSize: '.87rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="mailto:gregwalkervolley@gmail.com?subject=Bishop Verot Camp 2026 Registration&body=Name:%0ASchool:%0AGrade (Fall 2026):%0APosition:%0ALevel (Varsity/JV):"
                style={{ display: 'block', background: '#D4A843', color: '#0C1B2A', padding: '15px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', textAlign: 'center', marginTop: 20 }}
              >
                Register Now →
              </a>
            </div>
          </div>

          {/* About Greg */}
          <div style={{ background: 'linear-gradient(135deg, #0C1B2A, #1E3A5F)', borderRadius: 12, padding: '32px', textAlign: 'center', marginBottom: 24 }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>Your Coach</div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#FAFAFA', marginBottom: 10 }}>Coach Greg Walker</h3>
            <p style={{ color: '#C8C4BE', fontSize: '.92rem', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 20px' }}>
              Head Volleyball Coach at Smith College · USA Volleyball Senior National Team Coach · Every session led by Coach Walker — not assistants.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NCAA Head Coach', 'USA National Team', 'Smith College', '12:1 Athlete Ratio'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(212,168,67,.12)', color: '#D4A843', padding: '6px 14px', borderRadius: 50, fontSize: '.76rem', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div style={{ textAlign: 'center', padding: '40px 20px', background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC' }}>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', marginBottom: 10 }}>Ready to Register?</h3>
            <p style={{ color: '#9A958E', marginBottom: 24, fontSize: '.9rem' }}>
              Email to reserve your spot. Include your name, school, grade, position, and level (Varsity/JV).
            </p>
            <a
              href="mailto:gregwalkervolley@gmail.com?subject=Bishop Verot Camp 2026 Registration&body=Name:%0ASchool:%0AGrade (Fall 2026):%0APosition:%0ALevel (Varsity/JV):"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4A843', color: '#0C1B2A', padding: '16px 40px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}
            >
              gregwalkervolley@gmail.com →
            </a>
            <div style={{ marginTop: 14, color: '#9A958E', fontSize: '.82rem' }}>Questions? Same email. Coach Greg responds personally.</div>
          </div>
        </div>

        <footer style={{ background: '#0C1B2A', padding: '28px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ color: '#9A958E', fontSize: '.8rem' }}>© 2026 Creative Performance Consulting LLC · <a href="/" style={{ color: '#C8C4BE', textDecoration: 'none' }}>gregwalkervolley.com</a></div>
        </footer>
      </div>
    </>
  );
}
