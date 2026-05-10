'use client';

import { useEffect } from 'react';

export default function AboutGreg() {
  useEffect(() => {
    document.title = 'About Coach Greg Walker | Greg Walker Volleyball';
  }, []);

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(12,27,42,.96)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(212,168,67,.12)', height: 68, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#FAFAFA', textDecoration: 'none' }}>
            Greg Walker <span style={{ color: '#D4A843' }}>Volley</span>
          </a>
          <a href="mailto:gregwalkervolley@gmail.com?subject=Camp Inquiry" style={{ background: '#D4A843', color: '#0C1B2A', padding: '10px 20px', borderRadius: 6, fontWeight: 700, fontSize: '.85rem', textDecoration: 'none' }}>
            Book a Camp
          </a>
        </div>
      </nav>

      <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: '#F0EDE8', minHeight: '100vh', paddingTop: 68 }}>

        {/* HERO */}
        <div style={{ background: '#0C1B2A', padding: '70px 28px 60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,168,67,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,.04) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 80% 40%, rgba(212,168,67,.07) 0%, transparent 70%)' }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 340px', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,168,67,.12)', border: '1px solid rgba(212,168,67,.25)', color: '#E8C96A', padding: '7px 18px', borderRadius: 50, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 24 }}>
                NCAA Head Coach · USA National Team
              </div>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#FAFAFA', lineHeight: 1.02, marginBottom: 16 }}>
                Coach<br /><span style={{ color: '#D4A843' }}>Greg Walker</span>
              </h1>
              <p style={{ color: '#C8C4BE', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 560, marginBottom: 32 }}>
                Head Volleyball Coach at Smith College. USA National Team Coach. Over 650 collegiate and international matches across indoor, sitting, and beach volleyball.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {['Smith College', 'USA Volleyball', 'NEWMAC Champions 2024', 'NCAA Tournament 2024'].map((tag, i) => (
                  <span key={i} style={{ background: 'rgba(212,168,67,.12)', border: '1px solid rgba(212,168,67,.2)', color: '#D4A843', padding: '7px 16px', borderRadius: 50, fontSize: '.8rem', fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', position: 'relative', border: '2px solid rgba(212,168,67,.2)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/15dc9a_5a23eb1377314543913290c1aa61ca4b~mv2.jpg/v1/fill/w_779,h_974,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15dc9a_5a23eb1377314543913290c1aa61ca4b~mv2.jpg"
                alt="Coach Greg Walker"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 16, left: 16, background: '#0C1B2A', color: '#D4A843', padding: '8px 16px', borderRadius: 6, fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', letterSpacing: '.04em' }}>
                USA National Team Coach
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '70px 28px' }}>

          {/* Career Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 60 }}>
            {[
              { num: '650+', label: 'Collegiate & International Matches' },
              { num: '12×', label: 'Postseason Appearances' },
              { num: '5×', label: 'Coach / Staff of the Year' },
              { num: '38', label: 'All-Conference Selections' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#0C1B2A', borderRadius: 12, padding: '28px 20px', textAlign: 'center', border: '1px solid rgba(212,168,67,.15)' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', color: '#D4A843', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: '#C8C4BE', fontSize: '.8rem', marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Smith College section */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, #D4A843, transparent)' }} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', whiteSpace: 'nowrap' }}>At Smith College</span>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #D4A843)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              <div>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem', marginBottom: 16 }}>
                  When Walker took over the Smith College program, the Pioneers had gone <strong>38-125 over the previous decade</strong>. Under his leadership, Smith has achieved only winning seasons and made postseason appearances every year.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem', marginBottom: 16 }}>
                  In 2024, Smith captured the <strong>NEWMAC Championship</strong> — their first since 2005 — and advanced to the second round of the NCAA Tournament, the program's first NCAA appearance in over two decades and <strong>first-ever NCAA Tournament victory</strong>.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem' }}>
                  The season culminated with Smith finishing <strong>#23 in the NCAA NPI rankings</strong>, solidifying its place as one of the nation's top programs. Walker turned the Pioneers from unranked to top 25 in just four years — including a stunning upset of undefeated AVCA #4 MIT in the NEWMAC Championship.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  '2024 NCAA Tournament Appearance (first in ~20 years)',
                  '2024 First-ever NCAA Tournament Victory',
                  '2024 NEWMAC Champions (first since 2005)',
                  '2024 30+ Win Season (31-7)',
                  '4× Consecutive Postseason Appearances',
                  '4× Consecutive Winning Seasons',
                  '3× AVCA All-Americans in a single season (program first)',
                  '2× 2024 NEWMAC Tournament Co-MVPs',
                  '6 AVCA All-Region Selections',
                  '4 NEWMAC All-Conference Selections',
                  '4× AVCA Team Academic Awards',
                  '25 NEWMAC Academic All-Conference Selections',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#D4A843', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: '#1A1A1A', fontSize: '.88rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AD Quote */}
          <div style={{ background: '#0C1B2A', borderRadius: 16, padding: '40px 44px', marginBottom: 60, position: 'relative', borderLeft: '4px solid #D4A843' }}>
            <div style={{ fontSize: '3rem', color: '#D4A843', lineHeight: 1, marginBottom: 12, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
            <blockquote style={{ color: '#E8E4DF', fontSize: '1.1rem', lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 20px' }}>
              His experience and proven ability to turn around programs speaks for itself. He brings a strong vision for our student-athletes, and I am excited about the future of Smith Volleyball under Greg&apos;s leadership.
            </blockquote>
            <div style={{ color: '#D4A843', fontWeight: 700, fontSize: '.9rem' }}>Kristin Hughes</div>
            <div style={{ color: '#9A958E', fontSize: '.82rem', marginTop: 3 }}>Athletic Director, Smith College</div>
          </div>

          {/* USA Volleyball section */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, #D4A843, transparent)' }} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', whiteSpace: 'nowrap' }}>USA Volleyball & The National Team</span>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #D4A843)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start' }}>
              <div>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem', marginBottom: 16 }}>
                  Walker is a current <strong>USA National Team Coach</strong> with experience spanning multiple disciplines — indoor, sitting, and beach volleyball — with over 650 collegiate and international matches on his résumé.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem' }}>
                  With a proven track record at every NCAA level — Power-5, Division I, Division II, and Division III — and on the international stage, Walker is a dynamic leader known for his ability to turn programs into championship contenders while fostering athlete-centered, inclusive cultures.
                </p>
              </div>

              {/* John Speraw quote */}
              <div style={{ background: 'linear-gradient(135deg, #0C1B2A, #1E3A5F)', borderRadius: 14, padding: '32px', borderLeft: '4px solid #D4A843' }}>
                <div style={{ fontSize: '2.5rem', color: '#D4A843', lineHeight: 1, marginBottom: 10, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <blockquote style={{ color: '#E8E4DF', fontSize: '.95rem', lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 18px' }}>
                  Greg has a passion for the sport and a diverse set of experiences at the collegiate and international level and is incredibly skilled with the organizational part of the game.
                </blockquote>
                <div style={{ color: '#D4A843', fontWeight: 700, fontSize: '.88rem' }}>John Speraw</div>
                <div style={{ color: '#9A958E', fontSize: '.78rem', marginTop: 3, lineHeight: 1.5 }}>CEO of USA Volleyball · Former USA Men&apos;s National Team Coach<br />UCLA Men&apos;s Volleyball Head Coach</div>
              </div>
            </div>
          </div>

          {/* Career Honors */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, #D4A843, transparent)' }} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', whiteSpace: 'nowrap' }}>Career Highlights & Honors</span>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #D4A843)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { icon: '🏆', title: '2022 World Paravolley Outstanding Achievement Award', sub: 'International recognition' },
                { icon: '🎓', title: '2021 US Sports Academy Alumnus of the Year', sub: 'National distinction' },
                { icon: '⭐', title: 'AVCA 30 Under 30 Recipient', sub: 'Top coaches in America' },
                { icon: '📋', title: '5× Coach / Staff of the Year', sub: 'Multiple organizations' },
                { icon: '🏅', title: '13 AVCA All-American Selections', sub: 'Athletes coached' },
                { icon: '🌎', title: '8× AVCA All-Region Awards', sub: 'Regional excellence' },
                { icon: '📚', title: '6× AVCA Team Academic Awards', sub: 'Scholar-athlete culture' },
                { icon: '🎯', title: '47 Academic All-Conference Selections', sub: 'Athlete development' },
                { icon: '15', title: '15 Major Conference Awards', sub: 'Across all levels' },
              ].map((h, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 10, padding: '20px', border: '1px solid #E5E1DC', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: typeof h.icon === 'string' && h.icon.length <= 2 && !h.icon.match(/\p{Emoji}/u) ? '1.5rem' : '1.4rem', fontFamily: "'Bebas Neue', sans-serif", color: '#D4A843', flexShrink: 0, lineHeight: 1.2 }}>{h.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0C1B2A', fontSize: '.88rem', lineHeight: 1.4, marginBottom: 3 }}>{h.title}</div>
                    <div style={{ color: '#9A958E', fontSize: '.78rem' }}>{h.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* USA Sitting National Team */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, #D4A843, transparent)' }} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', whiteSpace: 'nowrap' }}>USA Men&apos;s Sitting National Team</span>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #D4A843)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 32 }}>
              <div>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem', marginBottom: 16 }}>
                  Walker was appointed <strong>Head Coach of the USA Men&apos;s Sitting National Team (MSNT)</strong> in 2016 after serving as assistant coach from 2013–2016. Under his leadership, the team achieved its best-ever World Championship finish — <strong>6th place at the 2022 World Paravolley World Championships</strong> in Bosnia, the highest finish in MSNT history.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem', marginBottom: 16 }}>
                  Additional highlights include a <strong>silver medal finish at the 2019 Parapan American Games</strong>, a top-8 finish at the 2018 World Championships (USA&apos;s first top-10 finish at that event), and helping the team qualify for the <strong>2016 Paralympic Games in Rio de Janeiro</strong>.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem' }}>
                  Beyond the Sitting National Team, Walker served as a consultant coach/assistant coach with the <strong>USA Men&apos;s Indoor National Team</strong>, contributing to the 2019 Volleyball Nations League, the 2017 NORCECA Championship gold medal, and earning a bid to the 2018 World Championships. He has also provided scout consulting for FIVB Beach competitions and pro beach athletes, and worked with the USA National Team Development Program (NTDP).
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  '2022 World Paravolley World Championships — 6th place (best-ever MSNT finish)',
                  '2019 Parapan American Games — Silver Medal (gold medal match)',
                  '2018 World Paravolley World Championships — Top 8 (first USA top-10)',
                  '2017 Paravolley Pan American Zonal Championships — Silver Medal',
                  '2016 Paralympic Games (Rio) — Team qualification',
                  '2017 NORCECA Championship — Gold Medal (Men\'s Indoor)',
                  'Scout consultant — FIVB Beach & pro beach athletes',
                  'USA National Team Development Program (NTDP) contributor',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#D4A843', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: '#1A1A1A', fontSize: '.87rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Jamie Davis quote */}
            <div style={{ background: '#0C1B2A', borderRadius: 16, padding: '36px 44px', borderLeft: '4px solid #D4A843' }}>
              <div style={{ fontSize: '3rem', color: '#D4A843', lineHeight: 1, marginBottom: 12, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <blockquote style={{ color: '#E8E4DF', fontSize: '1.05rem', lineHeight: 1.75, fontStyle: 'italic', margin: '0 0 20px' }}>
                Greg is extremely talented, hardworking, and diligent and is an excellent leader. As the head coach for USA Volleyball&apos;s Men&apos;s Sitting National Team, Greg has led the team to new heights, including a best-ever finish at World Championships, and I am confident that he will do the same at Smith.
              </blockquote>
              <div style={{ color: '#D4A843', fontWeight: 700, fontSize: '.9rem' }}>Jamie Davis</div>
              <div style={{ color: '#9A958E', fontSize: '.82rem', marginTop: 3 }}>Former CEO, USA Volleyball</div>
            </div>
          </div>

          {/* Prior Coaching Career */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, #D4A843, transparent)' }} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', whiteSpace: 'nowrap' }}>Coaching Record</span>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #D4A843)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                {
                  school: 'USC (Men\'s)',
                  role: 'Assistant Coach · 2019',
                  bullets: [
                    '18-11 record — doubled win total from prior year',
                    'First NCAA Tournament appearance since 2012',
                    '3rd place MPSF — highest since 2012',
                    'AVCA #5 national ranking (highest since 2012)',
                    'Undefeated at home 12-0 (first time since 2000)',
                    '7 wins over AVCA Top 10 teams',
                  ],
                },
                {
                  school: 'Sacred Heart (Men\'s)',
                  role: 'Head Coach',
                  bullets: [
                    '15-11 record, 8-6 conference — 8-win improvement',
                    'Historic 3-1 road win over No. 12 Penn State',
                    'First conference opponent to win regular season series vs Penn State since 1984',
                    '3rd place EIVA (preseason picked 7th)',
                    'Program\'s first-ever AVCA All-American (Joshua Ayzenberg)',
                    'First player trained with USA Men\'s National Team',
                  ],
                },
                {
                  school: 'Sacred Heart (Women\'s)',
                  role: 'Head Coach · 2016',
                  bullets: [
                    'NEC Regular Season Championship',
                    '22-8 overall, 13-1 conference — best in program history',
                    'Coach of the Year',
                    'Conference Player of the Year & Libero of the Year',
                    'Multiple All-Conference selections',
                  ],
                },
                {
                  school: 'Alderson Broaddus (Men\'s)',
                  role: 'Head Coach',
                  bullets: [
                    '21-6 record',
                    'First-ever conference championship in program history',
                    'Led program transition to NCAA Division I/II',
                  ],
                },
                {
                  school: 'Mississippi State (Women\'s)',
                  role: 'Assistant Coach',
                  bullets: [
                    'Mentored pin attackers and defense',
                    'Helped produce program\'s first-ever AVCA All-Americans',
                  ],
                },
                {
                  school: 'Pfeiffer University (Men\'s)',
                  role: 'Head Coach',
                  bullets: [
                    '2nd consecutive Conference Carolinas Championship',
                    'NCAA Statistical Champions in kills/set and points/set',
                    'Built program into NCAA competitive powerhouse',
                  ],
                },
              ].map((entry, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, border: '1px solid #E5E1DC', overflow: 'hidden' }}>
                  <div style={{ background: '#152840', padding: '14px 20px' }}>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.25rem', color: '#FAFAFA' }}>{entry.school}</div>
                    <div style={{ color: '#D4A843', fontSize: '.78rem', fontWeight: 600, marginTop: 2 }}>{entry.role}</div>
                  </div>
                  <div style={{ padding: '16px 20px' }}>
                    {entry.bullets.map((b, j) => (
                      <div key={j} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 7 }}>
                        <span style={{ color: '#D4A843', fontWeight: 700, flexShrink: 0, fontSize: '.85rem' }}>✓</span>
                        <span style={{ color: '#1A1A1A', fontSize: '.84rem', lineHeight: 1.45 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal / Background */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, #D4A843, transparent)' }} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', whiteSpace: 'nowrap' }}>Background & Education</span>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #D4A843)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              <div>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem', marginBottom: 16 }}>
                  Originally from Huntingdon, Pennsylvania, Walker attended Penn State University and earned a <strong>Bachelor&apos;s degree in Sports Coaching</strong> from the United States Sports Academy and a <strong>Master&apos;s degree in Coaching Education and Athlete Development</strong> from Xavier University.
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem', marginBottom: 16 }}>
                  He has served on the AVCA Mentor Program, National Ranking Polls, and NCAA Committees, and is a current member of the Certification Council of the Association for Applied Sport Psychology (AASP).
                </p>
                <p style={{ color: '#4A4A4A', lineHeight: 1.8, fontSize: '.95rem' }}>
                  Walker now resides in Northampton, Massachusetts, with his wife <strong>Heather</strong> — a Senior Research Project Manager at Dana-Farber Cancer Institute — and their daughters, <strong>Avery and Devin</strong>.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: '🎹', label: 'Musician', detail: 'Piano, guitar, and trumpet' },
                  { icon: '🌍', label: '25+ Countries', detail: 'Travel through volleyball and coaching' },
                  { icon: '🥋', label: '5th-Degree Black Belt', detail: 'International Certification in Karate' },
                  { icon: '🎓', label: 'MS · Xavier University', detail: 'Coaching Education & Athlete Development' },
                  { icon: '🎓', label: 'BS · US Sports Academy', detail: 'Sports Coaching' },
                  { icon: '🏛️', label: 'Penn State Alumni', detail: 'Attended Penn State University' },
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', background: '#fff', borderRadius: 10, padding: '14px 18px', border: '1px solid #E5E1DC' }}>
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0C1B2A', fontSize: '.9rem' }}>{f.label}</div>
                      <div style={{ color: '#9A958E', fontSize: '.8rem', marginTop: 2 }}>{f.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Camp Staff */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, #D4A843, transparent)' }} />
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', whiteSpace: 'nowrap' }}>Camp Staff</span>
              <div style={{ height: 2, flex: 1, background: 'linear-gradient(90deg, transparent, #D4A843)' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>

              {/* Greg Walker */}
              <div style={{ background: '#0C1B2A', borderRadius: 14, padding: '32px', border: '2px solid #D4A843' }}>
                <div style={{ display: 'inline-block', background: 'rgba(212,168,67,.15)', color: '#D4A843', padding: '5px 14px', borderRadius: 50, fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>Camp Director</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#FAFAFA', marginBottom: 6 }}>Greg Walker</h3>
                <div style={{ color: '#C8C4BE', fontSize: '.88rem', lineHeight: 1.6, marginBottom: 18 }}>
                  Head Volleyball Coach, Smith College<br />
                  USA Men&apos;s Sitting National Team — Head Coach<br />
                  USA Men&apos;s Indoor National Team — Consultant Coach
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['NCAA Head Coach', 'USA National Team', 'NEWMAC Champions', '650+ Matches'].map((tag, i) => (
                    <span key={i} style={{ background: 'rgba(212,168,67,.12)', color: '#D4A843', padding: '5px 12px', borderRadius: 50, fontSize: '.74rem', fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Connor Martin */}
              <div style={{ background: '#fff', borderRadius: 14, padding: '32px', border: '1px solid #E5E1DC' }}>
                <div style={{ display: 'inline-block', background: 'rgba(12,27,42,.08)', color: '#152840', padding: '5px 14px', borderRadius: 50, fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 14 }}>Co-Director</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#0C1B2A', marginBottom: 6 }}>Connor Martin</h3>
                <div style={{ color: '#4A4A4A', fontSize: '.88rem', lineHeight: 1.6, marginBottom: 18 }}>
                  Associate Head Coach, Smith College<br />
                  USA Men&apos;s Sitting National Team — National Team Manager
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Associate Head Coach', 'USA MSNT Manager', 'Smith College'].map((tag, i) => (
                    <span key={i} style={{ background: 'rgba(12,27,42,.07)', color: '#152840', padding: '5px 12px', borderRadius: 50, fontSize: '.74rem', fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Camp Coaches */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ fontSize: '.7rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B8962E', marginBottom: 20, textAlign: 'center' }}>Camp Coaching Staff</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
              {[
                {
                  name: 'Grace Campbell',
                  role: 'USA Women\'s National Team — Assistant Coach (WSNT)',
                  tags: ['USA National Team', 'WSNT'],
                  highlight: true,
                },
                {
                  name: 'Brooke Stanley',
                  role: 'Assistant Coach, Smith College · Associate Director, United Volleyball Club (Boston)',
                  tags: ['Smith College', 'United VBC Boston'],
                  highlight: false,
                },
                {
                  name: 'Taylor Gwynne',
                  role: 'Smith College — 2024 AVCA All-American',
                  tags: ['Smith College', '2024 All-American'],
                  highlight: false,
                },
                {
                  name: 'Delaney Demman',
                  role: 'Smith College Volleyball',
                  tags: ['Smith College'],
                  highlight: false,
                },
                {
                  name: 'Meg Hopkins',
                  role: 'Smith College Volleyball',
                  tags: ['Smith College'],
                  highlight: false,
                },
                {
                  name: 'Zoe Westlund',
                  role: 'Smith College Volleyball',
                  tags: ['Smith College'],
                  highlight: false,
                },
              ].map((coach, i) => (
                <div key={i} style={{
                  background: coach.highlight ? '#0C1B2A' : '#fff',
                  borderRadius: 12,
                  padding: '22px 24px',
                  border: coach.highlight ? '1px solid rgba(212,168,67,.3)' : '1px solid #E5E1DC',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.35rem', color: coach.highlight ? '#FAFAFA' : '#0C1B2A', marginBottom: 4 }}>{coach.name}</div>
                    <div style={{ color: coach.highlight ? '#C8C4BE' : '#4A4A4A', fontSize: '.84rem', lineHeight: 1.55 }}>{coach.role}</div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {coach.tags.map((tag, j) => (
                      <span key={j} style={{
                        background: coach.highlight ? 'rgba(212,168,67,.12)' : 'rgba(12,27,42,.06)',
                        color: coach.highlight ? '#D4A843' : '#152840',
                        padding: '4px 10px',
                        borderRadius: 50,
                        fontSize: '.72rem',
                        fontWeight: 600,
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, #0C1B2A, #1E3A5F)', borderRadius: 16, padding: '48px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAFAFA', marginBottom: 14 }}>
              Train With Coach Walker This Summer
            </h2>
            <p style={{ color: '#C8C4BE', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
              The same coaching that built a #23 nationally-ranked NCAA program and led USA National Team athletes — now coming to your gym.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/#camps" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#D4A843', color: '#0C1B2A', padding: '15px 32px', borderRadius: 6, fontWeight: 800, fontSize: '1rem', textDecoration: 'none' }}>
                View 2026 Camps →
              </a>
              <a href="mailto:gregwalkervolley@gmail.com?subject=Camp Inquiry" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#FAFAFA', border: '2px solid rgba(255,255,255,.25)', padding: '15px 32px', borderRadius: 6, fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <footer style={{ background: '#0C1B2A', padding: '28px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ color: '#9A958E', fontSize: '.8rem' }}>© 2026 Creative Performance Consulting LLC · <a href="/" style={{ color: '#C8C4BE', textDecoration: 'none' }}>gregwalkervolley.com</a></div>
        </footer>
      </div>
    </>
  );
}
