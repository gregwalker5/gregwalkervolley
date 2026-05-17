'use client';

import { useEffect } from 'react';
import RegFoxButton from '@/components/RegFoxButton';
import CampValueComparison from '@/components/CampValueComparison';

export default function SmithClinics() {
  useEffect(() => {
    document.title = 'Smith College AM Clinics 2026 | Greg Walker Volleyball';
  }, []);

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,27,42,.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,168,67,.12)', height: 68, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FAFAFA', textDecoration: 'none' }}>
            Greg Walker <span style={{ color: '#D4A843' }}>Volley</span>
          </a>
          <a href="#register" style={{ background: '#D4A843', color: '#0C1B2A', padding: '10px 20px', borderRadius: 6, fontWeight: 700, fontSize: '.85rem', textDecoration: 'none' }}>
            Register — $100
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
              Northampton, MA · Summer 2026
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: '#FAFAFA', marginBottom: 12, lineHeight: 1.05 }}>
              Smith College<br /><span style={{ color: '#D4A843' }}>Sunday Morning Clinics</span>
            </h1>
            <p style={{ color: '#C8C4BE', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 560, margin: '0 auto 16px' }}>
              4-Sunday series for high school athletes. Train on the Smith College courts led by Coach Greg Walker — NCAA Head Coach and USA National Team Coach. $100 gets you all 4 sessions.
            </p>
            <div style={{ display: 'inline-block', background: 'rgba(212,168,67,.15)', border: '1px solid rgba(212,168,67,.3)', color: '#E8C96A', padding: '8px 20px', borderRadius: 50, fontSize: '.9rem', fontWeight: 700, marginBottom: 28 }}>
              All 4 Sundays · $100 total · $8.33/session
            </div>
            <br />
            <a
              href="#register"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4A843', color: '#0C1B2A', padding: '16px 36px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}
            >
              Register Now — $100 →
            </a>
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 28px' }}>

          {/* 4 session cards */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B8962E', marginBottom: 20, textAlign: 'center' }}>2026 Clinic Schedule</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 16 }}>
              {[
                { num: '01', date: 'Sunday, Aug 2', time: '9:00 – 12:00 PM', focus: 'Passing & Defense' },
                { num: '02', date: 'Sunday, Aug 9', time: '9:00 – 12:00 PM', focus: 'Setting & Offense' },
                { num: '03', date: 'Sunday, Aug 16', time: '9:00 – 12:00 PM', focus: 'Attacking & Systems' },
                { num: '04', date: 'Sunday, Aug 23', time: '9:00 – 12:00 PM', focus: 'Live Play & Competition' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC', overflow: 'hidden', textAlign: 'center' }}>
                  <div style={{ background: '#0C1B2A', padding: '14px' }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', color: '#D4A843', lineHeight: 1 }}>{s.num}</div>
                  </div>
                  <div style={{ padding: '16px 14px' }}>
                    <div style={{ fontWeight: 700, color: '#0C1B2A', fontSize: '.9rem', marginBottom: 4 }}>{s.date}</div>
                    <div style={{ color: '#D4A843', fontWeight: 700, fontSize: '.85rem', marginBottom: 6 }}>{s.time}</div>
                    <div style={{ color: '#9A958E', fontSize: '.78rem' }}>{s.focus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price + value */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>

            <div style={{ background: '#0C1B2A', borderRadius: 12, padding: '28px', border: '2px solid #D4A843' }}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 12 }}>Pricing</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '5rem', color: '#D4A843', lineHeight: 1 }}>$100</div>
              <div style={{ color: '#C8C4BE', fontSize: '.9rem', marginTop: 6 }}>all 4 Sunday sessions</div>
              <div style={{ display: 'inline-block', background: 'rgba(212,168,67,.15)', color: '#E8C96A', padding: '6px 14px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600, marginTop: 14 }}>
                12 total hours · $8.33/hr
              </div>
              <div style={{ marginTop: 20, borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: 18 }}>
                <div style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9A958E', marginBottom: 10 }}>vs. Local Alternatives</div>
                {[
                  { name: 'PV Juniors (4 drop-in evenings)', price: '~$160–240', strike: true },
                  { name: 'Nike VB Camp @ Smith College', price: '$534', strike: true },
                  { name: 'Smith College AM Clinics', price: '$100', strike: false },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                    <span style={{ color: c.strike ? '#9A958E' : '#E8C96A', fontSize: '.82rem', fontWeight: c.strike ? 400 : 700, textDecoration: c.strike ? 'line-through' : 'none' }}>{c.name}</span>
                    <span style={{ color: c.strike ? '#9A958E' : '#D4A843', fontWeight: 700, fontSize: '.85rem', textDecoration: c.strike ? 'line-through' : 'none' }}>{c.price}</span>
                  </div>
                ))}
                <div style={{ fontSize: '.74rem', color: '#9A958E', marginTop: 8, fontStyle: 'italic' }}>Same courts. Same head coach. A fraction of the cost.</div>
              </div>
              <a
                href="#register"
                style={{ display: 'block', background: '#D4A843', color: '#0C1B2A', padding: '14px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', textAlign: 'center', marginTop: 20 }}
              >
                Register Now →
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '🏛️', title: 'Smith College Courts', body: 'Train in the same facility where Coach Walker prepares his NCAA team. Air-conditioned, full regulation courts.' },
                { icon: '👤', title: 'Head Coach at Every Session', body: 'Not assistants. Greg Walker runs every drill, teaches every rep. The same coaching his NCAA athletes get.' },
                { icon: '🎯', title: 'High School Focus', body: 'Sessions are designed specifically for high school athletes — skill work, system understanding, and college prep.' },
                { icon: '📅', title: 'Flexible Format', body: '3 hours every Sunday morning. Train hard, then have the rest of your weekend. Perfect for busy summer schedules.' },
              ].map((f, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, border: '1px solid #E5E1DC', padding: '18px 20px', display: 'flex', gap: 14 }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{f.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0C1B2A', fontSize: '.9rem', marginBottom: 4 }}>{f.title}</div>
                    <div style={{ color: '#9A958E', fontSize: '.83rem', lineHeight: 1.6 }}>{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CampValueComparison
            market="Western Massachusetts"
            gwvHours="9 AM – 12 PM"
            gwvDays="4 Sundays"
            gwvPrice="$100"
            gwvPerHour="$8.33/hr"
            competitors={[
              { name: 'Local Club Skills Session', hours: '1.5 hrs', days: '1 session', price: '$50–75', perHour: '~$33–50/hr' },
              { name: 'Nike VB Camp – Smith College', hours: '9 AM – 4 PM', days: '5 days', price: '$795+', perHour: '~$26.50/hr' },
              { name: 'Private Lessons (area coaches)', hours: '1 hr', days: 'per lesson', price: '$75–150', perHour: '$75–150/hr' },
            ]}
            note="4 Sunday clinics at Smith College courts — coached by the NCAA Head Coach who trains here every day."
          />

          {/* Location */}
          <div style={{ background: 'linear-gradient(135deg, #0C1B2A, #1E3A5F)', borderRadius: 12, padding: '28px 32px', display: 'flex', gap: 32, alignItems: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 8 }}>Location</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FAFAFA', marginBottom: 6 }}>Smith College</div>
              <div style={{ color: '#C8C4BE', fontSize: '.88rem', lineHeight: 1.6 }}>Ainsworth Gymnasium<br />Northampton, MA 01063</div>
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#D4A843', marginBottom: 8 }}>Your Coach</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.8rem', color: '#FAFAFA', marginBottom: 6 }}>Greg Walker</div>
              <div style={{ color: '#C8C4BE', fontSize: '.88rem', lineHeight: 1.6 }}>NCAA Head Coach · Smith College<br />USA Volleyball National Team Coach</div>
            </div>
          </div>

          {/* REGISTRATION FORM */}
          <div id="register" style={{ scrollMarginTop: 80 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.6rem', color: '#0C1B2A', marginBottom: 8 }}>
                Register for Sunday Clinics
              </h2>
              <p style={{ color: '#9A958E', fontSize: '.95rem' }}>
                Aug 2, 9, 16 & 23 · Smith College · Northampton, MA · $100 all 4 sessions
              </p>
            </div>
            <RegFoxButton
              regfoxUrl="https://app.regfox.com/preview/df2c394ed77d42dd970125fab6b33e26"
              campName="Smith Sunday Clinics 2026"
              status="open"
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
