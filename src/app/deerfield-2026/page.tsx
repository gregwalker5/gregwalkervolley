'use client';

import { useEffect } from 'react';
import CampRegistrationForm from '@/components/CampRegistrationForm';

export default function DeerfieldCamp() {
  useEffect(() => {
    document.title = 'Deerfield Academy Camp 2026 | Greg Walker Volleyball';
  }, []);

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,27,42,.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,168,67,.12)', height: 68, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FAFAFA', textDecoration: 'none' }}>
            Greg Walker <span style={{ color: '#D4A843' }}>Volley</span>
          </a>
          <a href="#register" style={{ background: '#D4A843', color: '#0C1B2A', padding: '10px 20px', borderRadius: 6, fontWeight: 700, fontSize: '.85rem', textDecoration: 'none' }}>
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
              Deerfield, MA · Summer 2026
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: '#FAFAFA', marginBottom: 12, lineHeight: 1.05 }}>
              Deerfield Academy<br /><span style={{ color: '#D4A843' }}>Volleyball Camp 2026</span>
            </h1>
            <p style={{ color: '#C8C4BE', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 560, margin: '0 auto 32px' }}>
              4-day elite camp at Deerfield Academy led by Greg Walker — NCAA Head Coach at Smith College (just 20 miles away) and USA National Team Coach. World-class coaching in western New England.
            </p>
            <a
              href="#register"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4A843', color: '#0C1B2A', padding: '16px 36px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}
            >
              Register Now →
            </a>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 28px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>

            {/* Schedule */}
            <div style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC', overflow: 'hidden' }}>
              <div style={{ background: '#0C1B2A', padding: '20px 28px' }}>
                <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 6 }}>Camp Schedule</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FAFAFA', margin: 0 }}>August 26–29, 2026</h3>
              </div>
              <div style={{ padding: '24px 28px' }}>
                {[
                  { day: 'Day 1', date: 'Wednesday, Aug 26', time: '9:00 AM – 4:00 PM', note: 'Skill development + system installation', icon: '🏐' },
                  { day: 'Day 2', date: 'Thursday, Aug 27', time: '9:00 AM – 4:00 PM', note: 'Game-like reps + position work', icon: '⚡' },
                  { day: 'Day 3', date: 'Friday, Aug 28', time: '9:00 AM – 4:00 PM', note: 'Team systems + live play', icon: '🔥' },
                  { day: 'Day 4', date: 'Saturday, Aug 29', time: '9:00 AM – 4:00 PM', note: 'Competition + mental performance', icon: '🏆' },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '12px 0', borderBottom: i < 3 ? '1px solid #E5E1DC' : 'none' }}>
                    <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: 2 }}>{d.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.05rem', color: '#0C1B2A' }}>{d.day} — {d.date}</div>
                      <div style={{ fontWeight: 700, color: '#D4A843', fontSize: '.88rem', margin: '2px 0' }}>{d.time}</div>
                      <div style={{ color: '#9A958E', fontSize: '.8rem' }}>{d.note}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(212,168,67,.08)', borderRadius: 8, border: '1px solid rgba(212,168,67,.2)' }}>
                  <div style={{ fontSize: '.8rem', color: '#B8962E', fontWeight: 700 }}>📍 Deerfield Academy · Deerfield, MA</div>
                  <div style={{ fontSize: '.78rem', color: '#9A958E', marginTop: 3 }}>Open to all athletes — not just Deerfield students</div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div style={{ background: '#0C1B2A', borderRadius: 12, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '2px solid #D4A843' }}>
              <div>
                <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>Camp Investment</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '5rem', color: '#D4A843', lineHeight: 1 }}>$350</div>
                <div style={{ color: '#C8C4BE', fontSize: '.9rem', marginTop: 6 }}>per athlete · 4-day camp</div>
                <div style={{ display: 'inline-block', background: 'rgba(212,168,67,.15)', color: '#E8C96A', padding: '6px 14px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600, marginTop: 14 }}>
                  28 hours · $15.00/hr
                </div>
                <div style={{ margin: '20px 0 0', borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 16 }}>
                  {[
                    'NCAA Head Coach at every session',
                    'USA National Team coaching experience',
                    'Smith College — 20 miles away',
                    '28 hours of purposeful training',
                    'Open to all schools & clubs',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 9 }}>
                      <span style={{ color: '#D4A843', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ color: '#C8C4BE', fontSize: '.87rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#register"
                style={{ display: 'block', background: '#D4A843', color: '#0C1B2A', padding: '15px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', textAlign: 'center', marginTop: 20 }}
              >
                Register Now →
              </a>
            </div>
          </div>

          {/* About Greg */}
          <div style={{ background: 'linear-gradient(135deg, #0C1B2A, #1E3A5F)', borderRadius: 12, padding: '32px', textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>Your Coach — Right In Your Backyard</div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#FAFAFA', marginBottom: 10 }}>Coach Greg Walker</h3>
            <p style={{ color: '#C8C4BE', fontSize: '.92rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 20px' }}>
              Head Volleyball Coach at Smith College in Northampton, MA — just 20 miles from Deerfield. Also a USA Volleyball Senior National Team Coach. This is elite coaching coming to your campus, not a generic camp staffed by assistants.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['NCAA Head Coach', 'USA National Team', 'Smith College', 'Western MA Local', '12:1 Ratio'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(212,168,67,.12)', color: '#D4A843', padding: '6px 14px', borderRadius: 50, fontSize: '.76rem', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* REGISTRATION FORM */}
          <div id="register" style={{ scrollMarginTop: 80 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.6rem', color: '#0C1B2A', marginBottom: 8 }}>
                Register for Camp
              </h2>
              <p style={{ color: '#9A958E', fontSize: '.95rem' }}>
                August 26–29, 2026 · Deerfield Academy, MA
              </p>
            </div>
            <CampRegistrationForm
              campLocation="Deerfield Academy — Deerfield, MA (August 26–29, 2026)"
              campPrice="$350"
              paymentNote="Payment link will be sent via email after confirmation. Spot is reserved upon payment."
            />
          </div>
        </div>

        <footer style={{ background: '#0C1B2A', padding: '28px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,.06)', marginTop: 60 }}>
          <div style={{ color: '#9A958E', fontSize: '.8rem' }}>© 2026 Creative Performance Consulting LLC · <a href="/" style={{ color: '#C8C4BE', textDecoration: 'none' }}>gregwalkervolley.com</a></div>
        </footer>
      </div>
    </>
  );
}
